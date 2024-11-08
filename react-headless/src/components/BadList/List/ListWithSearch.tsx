import { Input, List, Row, Space } from "antd";
import { ChangeEvent, ReactNode, useState } from "react";
import { get } from "lodash";
import classNames from "classnames";
import { DeepKey } from "../../../DeepKey";
import { isContainingSimilarSubstring } from "../../../utils/utils";
import styles from "./ListWithSearch.module.scss";

interface ListWithSearchProps<ItemType> {
  items: ItemType[];
  renderItem: (item: ItemType) => ReactNode;
  searchPath?: DeepKey<ItemType>;
  position?: ["top" | "bottom", "left" | "right"];
}

const getFilteredItems = <ItemType,>(
  items: ItemType[],
  path: DeepKey<ItemType> | undefined,
  searchValue: string,
) => {
  if (!path || !searchValue) return items;
  return items.filter((item: ItemType) => {
    const value = get(item, path);
    if (!value) return false;
    return isContainingSimilarSubstring({
      text: value as string,
      substring: searchValue,
    });
  });
};

export function ListWithSearch<ItemType>({
  items,
  renderItem,
  searchPath,
  position = ["top", "left"],
}: ListWithSearchProps<ItemType>) {
  const [filteredItems, setFilteredItems] = useState<ItemType[]>();

  const handleOnSearch = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const searchValue = changeEvent.target.value;
    setFilteredItems(getFilteredItems(items, searchPath, searchValue));
  };

  return (
    <Row style={{ width: "100%" }}>
      {position[0] === "top" && (
        <Input
          className={classNames(styles.search, styles[position[1]])}
          style={{ width: "150px", height: "30px" }}
          placeholder="Recherche"
          onChange={handleOnSearch}
        />
      )}
      <List
        style={{ width: "100%" }}
        dataSource={filteredItems ?? items}
        renderItem={renderItem}
      />
      {position[0] === "bottom" && (
        <Input
          className={classNames(styles.search, styles[position[1]])}
          style={{ width: "150px", height: "30px" }}
          placeholder="Recherche"
          onChange={handleOnSearch}
        />
      )}
    </Row>
  );
}
