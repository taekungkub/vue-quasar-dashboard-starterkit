<template>
  <div>
    <div class="box">
      <q-btn flat round class="review-swiper-button-prev" icon="chevron_left"></q-btn>
      <swiper
        class="mySwiper"
        :slides-per-view="1"
        :space-between="0"
        :navigation="{ nextEl: '.review-swiper-button-next', prevEl: '.review-swiper-button-prev' }"
        :modules="modules"
        :pagination="{ clickable: true, el: '.swiper-custom-pagination' }"
      >
        <swiper-slide>
          <q-img src="https://www.truemoney.com/wp-content/uploads/2022/04/truemoneywallet-steam-howto-20220426-1.jpg" alt="" />
        </swiper-slide>
        <swiper-slide>
          <q-img src="https://www.truemoney.com/wp-content/uploads/2022/04/truemoneywallet-steam-howto-20220426-1.jpg" alt="" />
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
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useSwiper } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const modules = [Navigation, Pagination, Scrollbar, A11y];

function next() {}
</script>

<style lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  gap: 10px;
  margin: 0 auto;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

.mySwiper .swiper-slide {
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
