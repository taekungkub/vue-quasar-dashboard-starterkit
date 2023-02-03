<template>
  <div>
    <q-drawer side="right" v-model="setting.settingDrawerOpen" overlay :width="280" :breakpoint="5000" class="bg__drawer">
      <q-card-section class="flex items-center">
        <h6>Setting</h6>

        <q-space />
        <q-btn dense color="primary" icon="close" @click="setting.settingDrawerOpen = false"></q-btn>
      </q-card-section>

      <div class="q-pa-md q-gutter-lg">
        <div class="flex justify-between items-center">
          <div class="text-body1">Navbar fixed</div>
          <div><q-toggle v-model="value1" /></div>
        </div>
        <q-separator />
        <div class="flex justify-between items-center">
          <div class="text-body1">Sidenav Mini</div>
          <div><q-toggle v-model="value2" /></div>
        </div>
        <q-separator />

        <div class="flex justify-between items-center">
          <div class="text-body1">Light / Dark</div>
          <div><q-toggle v-model="value3" /></div>
        </div>
      </div>
    </q-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSettingStore } from "../store/setting";

const setting = useSettingStore();

const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
</script>

<style scoped></style>
