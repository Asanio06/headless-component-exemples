import { useEffect, useState } from "react";
import { CustomList } from "./CustomList";

export function useWatch<ItemType>(listStore: CustomList<ItemType>) {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const listenerId = listStore.subscribe(() => forceUpdate({}));
    return () => listStore.unsubscribe(listenerId);
  });

  return { filteredItems: listStore.getFilteredItems() };
}
