<template>
  <q-layout view="lhr lpr lfr" class="bg__app">
    <Sidebar />

    <SettingSidebar />

    <q-page-container>
      <div>
        <router-view></router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SettingSidebar from "../components/SettingSidebar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped></style>
