import { ReactNode } from "react";
import { ListContextProvider } from "./context/ListContext";

interface ListProps {
  items: unknown[];
  children: ReactNode;
}

export function CustomList({ items, children }: ListProps) {
  return <ListContextProvider items={items}>{children}</ListContextProvider>;
}
