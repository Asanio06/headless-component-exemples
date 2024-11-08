import {DeepKey} from "../../DeepKey";
import {getSearchedItems} from "../../utils/utils";

type SearchInfos<ItemType> = {
    paths: DeepKey<ItemType>[];
    searchValue: string;
};

type SearchInfosByKey<ItemType> = Record<string, SearchInfos<ItemType>>;

export type ListenerFunctionType = () => void;

export class CustomList<ItemType> {
    private state: {
        items: ItemType[];
        searchInfosByKey: SearchInfosByKey<ItemType>;
    };

    private listeners: ListenerFunctionType[] = [];

    constructor(items: ItemType[]) {
        this.state = {
            items,
            searchInfosByKey: {},
        };
        this.emitChange()

    }

    addSearch(key: string, paths: DeepKey<ItemType>[], searchValue: string) {
        this.state.searchInfosByKey = {
            ...this.state.searchInfosByKey,
            [key]: {
                paths,
                searchValue,
            },
        };
        this.emitChange()
    }

    getFilteredItems(): ItemType[] {
        return CustomList.getSearchedItems(
            this.state.items,
            Object.values(this.state.searchInfosByKey),
        );
    }

    subscribe(listener: ListenerFunctionType) {
        return this.listeners.push(listener) - 1;
    }

    unsubscribe(listenerId: number) {
        this.listeners.splice(listenerId, 1);
    };

    private emitChange() {
        this.listeners.forEach((listener) => listener());
    }

    static getSearchedItems<ItemType>(
        items: ItemType[],
        searchInfos: SearchInfos<ItemType>[],
    ) {
        let filteredItems = [...items];

        searchInfos.forEach(({paths, searchValue}) => {
            paths.forEach((path) => {
                filteredItems = getSearchedItems(filteredItems, path, searchValue);
            });
        });

        return filteredItems;
    }
}


export const createCustomList = <ItemType>(items: ItemType[]) => {
    return new CustomList(items);
}


