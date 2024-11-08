<template>
  <div style="display: flex; flex-direction: column; row-gap: 5px">
    <input style="width: 150px" placeholder="Prénom" @input="e => listStore.addSearch('firstname',['firstname'],e.target.value)">
    <HorizontalUserList :list-store="listStore" />
  </div>
</template>

<script setup lang="ts">
import {CustomList} from "./List/CustomList.ts";
import {users} from "../mock/users.ts";
import HorizontalUserList from "./HorizontalList/HorizontalUserList.vue";

const listStore = new CustomList(users)
</script>
