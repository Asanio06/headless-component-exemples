import { createContext, useContext, useState } from "react";
import { getSearchedItems } from "../../../../utils/utils";

type ListContextType = {
  items: unknown[];
  addSearch: (key: string, paths: string[], searchValue: string) => void;
};

type SearchInfos = {
  paths: string[];
  searchValue: string;
};

type SearchInfosByKey = Record<string, SearchInfos>;

export const ListContext = createContext<ListContextType | undefined>(
  undefined,
);

export function useListContext() {
  const context = useContext(ListContext);

  if (!context) {
    throw new Error("");
  }

  return context;
}

interface ListContextProviderProps {
  children: React.ReactNode;
  items: unknown[];
}

function getFilteredItems(items: unknown[], searchInfos: SearchInfos[]) {
  let filteredItems = [...items];

  searchInfos.forEach(({ paths, searchValue }) => {
    paths.forEach((path) => {
      filteredItems = getSearchedItems(filteredItems, path, searchValue);
    });
  });

  return filteredItems;
}

export function ListContextProvider({
  children,
  items,
}: ListContextProviderProps) {
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
    <ListContext.Provider
      value={{
        items: filteredItems,
        addSearch,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}
