<template>
  <div class="q-pa-lg">
    <h6>Outside</h6>
    <SwipperJSVue />
    <br />
    <br />
    <h6>Options</h6>
    <SwipperJSVue :slide-per-view="2" :gap="10" />
    <br />
    <br />
    <h6>Inside</h6>

    <SwipperJSVue2 />
    <SwipperJSVue2 />

    <br />
    <br />
    <h6>HTML & CSS</h6>
    <SwipperJSVue3 />

    <br />
    <br />

    <h6>HTML & CSS (Slide per view & gap)</h6>
    <SwipperJSVue3 :gap="10" :slide-per-view="3" />

    <br />
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
import SwipperJSVue from "./components/SwipperJsVue.vue";
import SwipperJSVue2 from "./components/SwipperJsVue2.vue";
import SwipperJSVue3 from "./components/SwipperJsVue3.vue";
</script>

<style scoped></style>
