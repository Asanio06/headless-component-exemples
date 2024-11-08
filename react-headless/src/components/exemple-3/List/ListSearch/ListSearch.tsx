import { ChangeEvent, ReactNode } from "react";
import { useListContext } from "../context/ListContext";

interface ListSearchProps {
  paths: string[];
  searchKey: string;
  children: (props: { addSearch: (searchValue: string) => void }) => ReactNode;
}

export function ListSearch({ paths, searchKey, children }: ListSearchProps) {
  const { addSearch } = useListContext();

  const handleOnSearch = (searchValue: string) => {
    addSearch(searchKey, paths, searchValue);
  };

  const Children = children;

  return <Children addSearch={handleOnSearch} />;
}
