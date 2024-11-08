import { ReactNode } from "react";
import { useListContext } from "../context/ListContext";

interface DisplayListProps<ItemType> {
  children: (props: { items: ItemType[] }) => ReactNode;
}

export function DisplayList<ItemType>({
  children,
}: DisplayListProps<ItemType>) {
  const { items } = useListContext();

  const Children = children;

  return <Children items={items as ItemType[]} />;
}
