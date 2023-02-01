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

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
