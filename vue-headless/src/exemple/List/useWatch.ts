import {CustomList} from "./CustomList.ts";
import {watchEffect, ref} from "vue";

export function useWatch<ItemType>(listStore: CustomList<ItemType>) {
    const filteredItems = ref(listStore.getFilteredItems())

    watchEffect((onCleanup) => {
        const listenerId = listStore.subscribe(() => {
            filteredItems.value = listStore.getFilteredItems();
        })
        onCleanup(() => listStore.unsubscribe(listenerId))
    })

    return {filteredItems};
}