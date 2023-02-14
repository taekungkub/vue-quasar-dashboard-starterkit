<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import EmptyLayout from "./layout/EmptyLayout.vue";
import DashboardLayout from "./layout/DashboardLayout.vue";
import { useSettingStore } from "./store/setting";

const setting = useSettingStore();
const { currentRoute } = useRouter();
const layout = computed(() => {
  if (currentRoute.value.meta.layout === "empty") return EmptyLayout;
  else if (currentRoute.value.meta.layout === "admin") return DashboardLayout;
  else return EmptyLayout;
});

onMounted(() => {
  setting.initTheme();
});
</script>

<style lang="scss">
@import "./quasar.scss";
@import url("https://fonts.googleapis.com/css2?family=Mali:ital,wght@0,500;0,700;1,400&display=swap");

.text-funny {
  font-family: "Mali", cursive;
}
</style>
