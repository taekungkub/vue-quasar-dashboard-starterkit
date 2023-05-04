<template>
  <div>
    <div class="box2">
      <swiper
        class="mySwiper2"
        :slides-per-view="1"
        :space-between="0"
        :modules="modules"
        @slideChange="onSlideChange"
        :pagination="{ clickable: true }"
        :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
      >
        <swiper-slide v-for="(slide, index) in props.slides" :key="index">
          <q-img fit="cover" :src="slide" alt="" style="height: 350px" />
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <q-btn icon="chevron_left" class="swiper-button-prev" color="black"></q-btn>
        <q-btn icon="chevron_right" class="swiper-button-next" color="black"></q-btn>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const modules = [Navigation, Pagination, Scrollbar, A11y];
const props = defineProps({
  slides: { type: Array<String | null>, default: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg"] },
});
const onSlideChange = (slide: any) => {
  console.log("slide change");
};
</script>
<style lang="scss">
.box2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0 auto;
}
.mySwiper2 {
  width: 100%;
  height: 100%;
}
.mySwiper2 .swiper-slide {
  height: 100%;
}

.mySwiper2 .swiper-pagination-bullet {
  width: 0.775rem !important;
  height: 0.475rem !important;
  opacity: 1 !important;
  background-color: #ddd !important;
  border-radius: 30px !important;
  transition: width 0.3s, background-color 0.3s !important;
  cursor: pointer;
}
.mySwiper2 .swiper-pagination-bullet-active {
  width: 2.445rem !important;
  border-radius: 12px !important;
  background-color: $primary !important;
  transition: width 0.3s, background-color 0.3s;
}

.mySwiper2 .swiper-button-prev {
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
  border-radius: 0 !important;

  left: 0;
}

.mySwiper2 .swiper-button-next {
  transition: all 0.5s ease;
  background-color: rgba(0, 0, 0, 0.7) !important;
  padding: 10px 20px;
  border-radius: 0 !important;
  right: 0;
}

.mySwiper2 .swiper-button-prev::after,
.mySwiper2 .swiper-button-next::after {
  content: "" !important;
}
</style>
