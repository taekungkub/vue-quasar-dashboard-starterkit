<template>
  <div class="q-pa-md q-gutter-sm">
    <div class="text-h3 text-center">Overview</div>

    <div class="text-21 font-medium q-mt-lg">Base</div>
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="accent" label="accent" />
    <q-btn color="info" label="info" />
    <q-btn color="warning" label="warning" />
    <q-btn color="positive" label="positive" />
    <q-btn color="negative" label="negative" />
    <q-btn color="dark" label="Dark" />
    <div class="text-21 font-medium q-mt-lg">Style</div>
    <q-btn color="white" text-color="black" label="Standard" />
    <q-btn color="primary" label="Primary" />
    <q-btn color="secondary" label="Secondary" />
    <q-btn color="amber" glossy label="Amber" />
    <q-btn color="brown-5" label="Brown 5" />
    <q-btn color="deep-orange" glossy label="Deep Orange" />
    <q-btn color="purple" label="Purple" />
    <q-btn color="black" label="Black" />

    <div class="text-21 font-medium q-mt-lg">Notify</div>
    <q-btn no-caps unelevated color="positive" @click="triggerPositive" label="Trigger 'positive'" />
    <q-btn no-caps unelevated color="negative" @click="triggerNegative" label="Trigger 'negative'" />
    <q-btn no-caps unelevated color="warning" text-color="dark" @click="triggerWarning" label="Trigger 'warning'" />
    <q-btn no-caps unelevated color="info" @click="triggerInfo" label="Trigger 'info'" />
    <q-btn no-caps unelevated color="grey-8" @click="triggerOngoing" label="Trigger 'ongoing'" />
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";

const $q = useQuasar();

function triggerPositive() {
  $q.notify({
    type: "positive",
    message: 'This is a "positive" type notification.',
  });
}

function triggerNegative() {
  $q.notify({
    type: "negative",
    message: 'This is a "negative" type notification.',
  });
}

function triggerWarning() {
  $q.notify({
    type: "warning",
    message: 'This is a "warning" type notification.',
  });
}

function triggerInfo() {
  $q.notify({
    type: "info",
    message: 'This is a "info" type notification.',
  });
}

function triggerOngoing() {
  const notif = $q.notify({
    type: "ongoing",
    message: "Looking up the search terms...",
  });
}
</script>

<style scoped></style>
