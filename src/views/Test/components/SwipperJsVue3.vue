<template>
  <div class="mySlider3">
    <div class="swiper" ref="mySlider3">
      <div class="swiper-wrapper bg-primary">
        <div class="swiper-slide" v-for="(slide, index) in props.slides" :key="index">
          <q-img fit="cover" :src="slide" alt="" height="350px" />
        </div>
      </div>
      <div class="swiper-pagination"></div>

      <q-btn icon="chevron_left" class="swiper-button-prev" color="black"></q-btn>
      <q-btn icon="chevron_right" class="swiper-button-next" color="black"></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

const props = defineProps({
  slides: {
    type: Array<String | null>,
    default: [
      "https://cdn.quasar.dev/img/mountains.jpg",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
    ],
  },
});

const mySlider3 = ref("");
onMounted(() => {
  new Swiper(mySlider3.value, {
    modules: [Navigation, Pagination, Autoplay],
    effect: "flip",
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<style lang="scss">
.mySlider3 .swiper {
  width: 100%;
  height: auto;
}

.mySlider3 .swiper {
  padding-bottom: 35px;
}
.mySlider3 .swiper-horizontal > .swiper-pagination {
  position: absolute;
  bottom: 0;
}

.mySlider3 .swiper-pagination-bullet {
  width: 0.775rem !important;
  height: 0.475rem !important;
  opacity: 1 !important;
  background-color: #ddd !important;
  border-radius: 30px !important;
  transition: width 0.3s, background-color 0.3s !important;
  cursor: pointer;
}
.mySlider3 .swiper-pagination-bullet-active {
  width: 2.445rem !important;
  border-radius: 12px !important;
  background-color: $primary !important;
  transition: width 0.3s, background-color 0.3s;
}

.mySlider3 .swiper-button-prev {
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 0 !important;

  left: 0;
}

.mySlider3 .swiper-button-next {
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7) !important;
  padding: 10px 20px;
  border-radius: 0 !important;
  right: 0;
}

.mySlider3 .swiper-button-prev::after,
.mySlider3 .swiper-button-next::after {
  content: "" !important;
}
</style>
