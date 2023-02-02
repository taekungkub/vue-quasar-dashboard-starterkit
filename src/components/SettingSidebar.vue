<template>
  <div>
    <q-drawer side="right" v-model="setting.isSettingDrawer" overlay :width="280" :breakpoint="5000" class="bg__drawer">
      <q-card-section class="flex items-center">
        <div class="text-h5">Setting</div>

        <q-space />
        <q-btn dense color="primary" icon="close" @click="setting.isSettingDrawer = false"></q-btn>
      </q-card-section>

      <div class="q-pa-md q-gutter-lg">
        <div class="flex justify-between items-center">
          <div class="text-body1">Navbar fixed</div>
          <div>Toggle</div>
        </div>
        <q-separator />
        <div class="flex justify-between items-center">
          <div class="text-body1">Sidenav Mini</div>
          <div>Toggle</div>
        </div>
        <q-separator />

        <div class="flex justify-between items-center">
          <div class="text-body1">Light / Dark</div>
          <div>Toggle</div>
        </div>
      </div>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from "../store/setting";

const setting = useSettingStore();
</script>

<style scoped></style>
