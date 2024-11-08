import { ReactNode, useState } from "react";
import { ListContext } from "./context/ListContext";
import { getSearchedItems } from "../../../utils/utils";

interface ListProps {
  items: unknown[];
  children: ReactNode;
}
type SearchInfos = {
  paths: string[];
  searchValue: string;
};

type SearchInfosByKey = Record<string, SearchInfos>;

function getFilteredItems(items: unknown[], searchInfos: SearchInfos[]) {
  let filteredItems = [...items];

  searchInfos.forEach(({ paths, searchValue }) => {
    paths.forEach((path) => {
      filteredItems = getSearchedItems(filteredItems, path, searchValue);
    });
  });

  return filteredItems;
}

export function CustomList({ items, children }: ListProps) {
  const [searchInfosByKey, setSearchInfosByKey] = useState<SearchInfosByKey>(
    {},
  );

  const addSearch = (key: string, paths: string[], searchValue: string) => {
    setSearchInfosByKey((oldState) => ({
      ...oldState,
      [key]: { paths, searchValue },
    }));
  };

  const filteredItems = getFilteredItems(
    items,
    Object.values(searchInfosByKey),
  );

  return (
    <ListContext.Provider value={{ items: filteredItems, addSearch }}>
      {children}
    </ListContext.Provider>
  );
}
