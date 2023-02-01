<template>
  <q-layout view="lhh LpR lFf" class="bg__app">
    <Sidebar />

    <q-page-container>
      <div>
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped></style>
