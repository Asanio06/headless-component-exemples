import { List, ListProps } from "antd";
import { useListContext } from "../context/ListContext";

interface DisplayListProps
  extends Omit<ListProps<unknown>, "dataSource" | "renderItem"> {
  renderItem: (item: any, index: number) => JSX.Element;
}

export function DisplayList<ItemType>(
  props: Omit<ListProps<ItemType>, "dataSource">,
) {
  const { items } = useListContext();

  return <List dataSource={items as ItemType[]} {...props} />;
}
