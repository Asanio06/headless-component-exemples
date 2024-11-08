import { createContext, useContext } from "react";

type ListContextType = {
  items: unknown[];
  addSearch: (key: string, paths: string[], searchValue: string) => void;
};

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
