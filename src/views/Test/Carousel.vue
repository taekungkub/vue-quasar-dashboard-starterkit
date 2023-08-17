<template>
  <div class="q-pa-lg">
    <q-carousel
      ref="carousel"
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      swipeable
      control-color="white"
      padding
      class="GNL__carousel bg-primary text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" color="white" size="56px" />
        <div class="q-mt-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi assumenda quisquam sapiente laborum! Magni suscipit voluptatem nobis eligendi,
          nostrum totam dolorem saepe amet, corporis quae, quibusdam aspernatur laboriosam ex!
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" color="white" size="56px" />
        <div class="q-mt-md text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error obcaecati iusto, nemo doloribus illum sed totam repudiandae. Hic, quibusdam suscipit
          necessitatibus quaerat itaque et magni, eius, animi facilis harum blanditiis.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" color="white" size="56px" />
        <div class="q-mt-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum aliquam dolorem tenetur porro eveniet ad? Nisi quasi ex veritatis impedit
          laborum laudantium, ipsam expedita reprehenderit quia placeat minus natus.
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" color="white" size="56px" />
        <div class="q-mt-md text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati rerum cupiditate quisquam aspernatur. Repellendus tempore veniam molestias
          voluptas sunt mollitia voluptatibus soluta, consectetur expedita magnam quas quo necessitatibus voluptatem.
        </div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          position="left"
          :offset="[18, 18]"
          class="text-white rounded-borders q-mt-auto"
          style="padding: 4px 8px; display: flex; align-items: center; justify-content: end"
          v-if="slide != 'style'"
        >
          <div class="swiper-button-prev" @click="carousel?.previous()">
            <q-icon name="arrow_back" size="sm" />
          </div>
        </q-carousel-control>

        <q-carousel-control
          position="right"
          :offset="[18, 18]"
          style="padding: 4px 8px; display: flex; align-items: center; justify-content: end"
          v-if="slide != 'map'"
        >
          <div class="swiper-button-next" @click="carousel?.next()">
            <q-icon name="arrow_forward" size="sm" />
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>
    <div class="bull_container">
      <div class="bullet" :class="{ active: slide === 'style' }" @click="slide = 'style'"></div>
      <div class="bullet" :class="{ active: slide === 'tv' }" @click="slide = 'tv'"></div>
      <div class="bullet" :class="{ active: slide === 'layers' }" @click="slide = 'layers'"></div>
      <div class="bullet" :class="{ active: slide === 'map' }" @click="slide = 'map'"></div>
    </div>

    <q-btn color="primary " @click="triggerCustomRegisteredType1">My Notify</q-btn>
  </div>
</template>

<script setup lang="ts">
import { QCarousel, QCarouselControl, useQuasar } from "quasar"
import { ref } from "vue"

const carousel = ref<QCarousel>()

let slide = ref("style")
const $q = useQuasar()

function triggerCustomRegisteredType1() {
  $q.notify({
    type: "positive",
    message: "This notification is using a custom type.",
  })
}
</script>

<style lang="scss" scoped>
.bull_container {
  display: flex;
  gap: 0.2rem;
  justify-content: center;
  margin-top: 10px;
}
.bullet {
  width: 0.775rem !important;
  height: 0.775rem !important;
  opacity: 1 !important;
  background-color: #ddd !important;
  border-radius: 30px !important;
  transition: width 0.3s, background-color 0.3s !important;
  cursor: pointer;
}

.bullet.active {
  width: 2.445rem !important;
  border-radius: 12px !important;
  background-color: #459d43 !important;
  transition: width 0.3s, background-color 0.3s;
}

.swiper-button-next,
.swiper-button-prev {
  border-radius: 50% !important;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}
</style>
