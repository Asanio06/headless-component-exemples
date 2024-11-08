import { Input, InputProps } from "antd";
import { ChangeEvent } from "react";
import { useListContext } from "../context/ListContext";

interface ListSearchProps extends Omit<InputProps, "onChange"> {
  paths: string[];
  searchKey: string;
}

export function ListSearch({ paths, searchKey, ...props }: ListSearchProps) {
  const { addSearch } = useListContext();
  const handleOnSearch = (changeEvent: ChangeEvent<HTMLInputElement>) => {
    const searchValue = changeEvent.target.value;
    addSearch(searchKey, paths, searchValue);
  };

  return <Input {...props} onChange={handleOnSearch} />;
}
