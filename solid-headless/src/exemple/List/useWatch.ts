import {CustomList} from "./CustomList";
import {createStore} from "solid-js/store";
import {createEffect, onCleanup} from "solid-js";

export function useWatch<ItemType>(listStore: CustomList<ItemType>) {
    const [filteredItems, setFilteredItems] = createStore(listStore.getFilteredItems())

    createEffect(() => {
        const listenerId = listStore.subscribe(()=>{
            setFilteredItems(listStore.getFilteredItems())
        })
        onCleanup(()=> listStore.unsubscribe(listenerId) )
    })

    return {filteredItems};
}
