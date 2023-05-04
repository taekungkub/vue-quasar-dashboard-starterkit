<template>
  <div class="q-pa-lg">
    <!-- <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
      </div>
      <div class="swiper-pagination"></div>

      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <div class="swiper-scrollbar"></div>
    </div> -->
    <SwipperJSVue />
  </div>
</template>

<script setup lang="ts">
import SwipperJSVue from "./components/SwipperJsVue.vue";
// import { Swiper } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";

// const swiper = new Swiper(".swiper", {
//   direction: "vertical",
//   loop: true,

//   pagination: {
//     el: ".swiper-pagination",
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
</script>

<style scoped></style>
