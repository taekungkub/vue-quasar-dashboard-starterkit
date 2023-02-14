<template>
  <q-layout view="lHr Lpr lFr" class="bg__app">
    <Sidebar />

    <SettingSidebar />

    <q-page-container>
      <div>
        <router-view v-slot="{ Component, route }">
          <div v-if="route.meta.enterClass || route.meta.leaveClass">
            <transition mode="out-in" :enter-active-class="(route.meta.enterClass as string)" :leave-active-class="(route.meta.leaveClass as string)">
              <component :is="Component" />
            </transition>
          </div>
          <div v-else>
            <component :is="Component" />
          </div>
        </router-view>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import SettingSidebar from "../components/SettingSidebar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<style scoped></style>
