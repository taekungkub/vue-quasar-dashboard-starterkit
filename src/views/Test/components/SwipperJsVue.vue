<template>
  <div class="mySwiper">
    <div class="box">
      <q-btn flat round class="review-swiper-button-prev" icon="chevron_left"></q-btn>
      <swiper
        :slides-per-view="props.slidePerView"
        :space-between="props.gap"
        :modules="modules"
        @slideChange="onSlideChange"
        :navigation="{ nextEl: '.review-swiper-button-next', prevEl: '.review-swiper-button-prev' }"
        :pagination="{ clickable: true, el: '.swiper-custom-pagination' }"
        effect="fade"
      >
        <swiper-slide v-for="(slide, index) in props.slides" :key="index">
          <q-img fit="cover" :src="slide" alt="" style="height: 350px" />
        </swiper-slide>
      </swiper>
      <q-btn flat round class="review-swiper-button-next" icon="chevron_right"></q-btn>
    </div>
    <div class="swiper-custom-pagination"></div>

    <div class="flex flex-center q-gutter-sm">
      <q-btn class="review-swiper-button-prev">Prev</q-btn>
      <q-btn class="review-swiper-button-next">Next</q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const modules = [Navigation, Pagination, Scrollbar, A11y, EffectFade];

const props = defineProps({
  slides: {
    type: Array<String | null>,
    default: [
      "https://cdn.quasar.dev/img/mountains.jpg",
      "https://cdn.quasar.dev/img/parallax1.jpg",
      "https://cdn.quasar.dev/img/parallax2.jpg",
      "https://cdn.quasar.dev/img/quasar.jpg",
    ],
  },
  slidePerView: {
    type: Number,
    default: 1,
  },
  gap: {
    type: Number,
    default: 0,
  },
});

const onSlideChange = (slide: any) => {
  console.log("slide change");
};
</script>

<style lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
}

.mySwiper .swiper {
  width: 100%;
  height: 100%;
}

.mySwiper .swipper .swiper-slide {
  height: 100%;
}

.swiper-custom-pagination {
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  list-style: none;
  text-align: center;
}

.swiper-custom-pagination .swiper-pagination-bullet {
  width: 0.775rem !important;
  height: 0.475rem !important;
  opacity: 1 !important;
  background-color: #ddd !important;
  border-radius: 30px !important;
  transition: width 0.3s, background-color 0.3s !important;
  cursor: pointer;
}

.swiper-custom-pagination .swiper-pagination-bullet-active {
  width: 2.445rem !important;
  border-radius: 12px !important;
  background-color: $primary !important;
  transition: width 0.3s, background-color 0.3s;
}
</style>
