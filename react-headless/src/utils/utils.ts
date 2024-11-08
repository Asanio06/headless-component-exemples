import { get } from "lodash";
import { DeepKey } from "../DeepKey";

interface IsContainingSimilarSubstringParams {
  text: string;
  substring: string;
}

/**
 * @description Permet de vérifier qu'une chaine de caractère est contenu dans une autre indépendamment de la case.
 * @param text
 * @param substring
 */
export const isContainingSimilarSubstring = ({
  text,
  substring,
}: IsContainingSimilarSubstringParams): boolean => {
  return text.toLowerCase().includes(substring.toLowerCase());
};

export const getSearchedItems = <ItemType>(
  items: ItemType[],
  path: DeepKey<ItemType> | string | undefined,
  searchValue: string,
) => {
  if (!path || !searchValue) return items;
  return items.filter((item: ItemType) => {
    const value = get(item, path) as string | undefined;
    if (!value) return false;
    return isContainingSimilarSubstring({
      text: value,
      substring: searchValue,
    });
  });
};
