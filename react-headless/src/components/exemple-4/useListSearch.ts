import { useState } from "react";
import { DeepKey } from "../../DeepKey";
import { getSearchedItems } from "../../utils/utils";

type SearchInfos<ItemType> = {
  paths: DeepKey<ItemType>[];
  searchValue: string;
};

type SearchInfosByKey<ItemType> = Record<string, SearchInfos<ItemType>>;

function getFilteredItems<ItemType>(
  items: ItemType[],
  searchInfos: SearchInfos<ItemType>[],
) {
  let filteredItems = [...items];

  searchInfos.forEach(({ paths, searchValue }) => {
    paths.forEach((path) => {
      filteredItems = getSearchedItems(filteredItems, path, searchValue);
    });
  });

  return filteredItems;
}

export function useListSearch<ItemType>(items: ItemType[]) {
  const [searchInfosByKey, setSearchInfosByKey] = useState<
    SearchInfosByKey<ItemType>
  >({});

  const addSearch = (
    key: string,
    paths: DeepKey<ItemType>[],
    searchValue: string,
  ) => {
    setSearchInfosByKey((oldState) => ({
      ...oldState,
      [key]: { paths, searchValue },
    }));
  };

  const filteredItems: ItemType[] = getFilteredItems(
    items,
    Object.values(searchInfosByKey),
  );

  return {
    filteredItems,
    addSearch,
  };
}
