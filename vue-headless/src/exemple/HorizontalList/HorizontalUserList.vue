<template>
  <div style="display: flex; flex-direction: row; column-gap: 5px">
    <div
        v-for="user in users"
        :key="user.id"
    >
      <div style=" width: 200px; border: 2px solid blue; border-radius: 5px; padding: 0 0.5em">
        {{ user.firstname }} {{ user.lastname }}
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {useWatch} from "../List/useWatch.ts";
import {CustomList} from "../List/CustomList.ts";
import {User} from "../../mock/users.ts";

const {listStore} = defineProps({
  listStore: CustomList<User>,
})
const {filteredItems: users} = useWatch(listStore!)
</script>
