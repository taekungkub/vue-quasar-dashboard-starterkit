<template>
  <div class="q-pa-lg">
    <!-- <div class="box">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rectangle_example.svg/1280px-Rectangle_example.svg.png" class="img-fluid" alt="" />
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" class="prokedex-1" alt="" />
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" class="prokedex-2" alt="" />
    </div>

    <div class="box-bnk">
      <img src="../../assets/media/rect-BG.jpg" class="img-fluid" alt="" />
      <q-img src="../../assets/media/rect-1.png" class="img-fluid pupe-map" alt="" />
      <q-img src="../../assets/media/rect-2.png" class="img-fluid pupe-map" alt="" />
      <q-img src="../../assets/media/rect-3.png" class="img-fluid pupe-map" alt="" />
      <q-img src="../../assets/media/rect-4.png" class="img-fluid pupe-map" alt="" />
    </div> -->

    <Parent :image="imgaeParent" v-slot="slotProps">
      <Child :image="Image1" :top="20.5" :left="17.3" :parent-width="slotProps.parentWidth" :rotate="-11.18" />
      <Child :image="Image2" :top="12" :left="51" :parent-width="slotProps.parentWidth" :rotate="3.42" />
      <Child :image="Image4" :top="46.5" :left="55.6" :parent-width="slotProps.parentWidth" :rotate="-5.65" />
    </Parent>

    <Parent :image="imgaeParent" v-slot="slotProps" style="transform: matrix(-1, 0, 0, 1, 0, 0)">
      <Child :image="Image1" :top="20.5" :left="17.3" :parent-width="slotProps.parentWidth" :rotate="-11.18" />
      <Child :image="Image2" :top="12" :left="51" :parent-width="slotProps.parentWidth" :rotate="3.42" />
      <Child :image="Image4" :top="46.5" :left="55.6" :parent-width="slotProps.parentWidth" :rotate="-5.65" />
    </Parent>

    <Parent :image="kmImageParent" v-slot="slotProps">
      <Child :image="kmImage2" :width="546" :top="5.98" :left="65.36" :parent-width="slotProps.parentWidth" :rotate="23.59" />
      <Child :image="kmImage3" :width="939" :top="17" :left="12.2" :parent-width="slotProps.parentWidth" :rotate="-8.59" />
    </Parent>
  </div>
</template>

<script setup lang="ts">
import Child from "./components/Child.vue";
import Parent from "./components/Parent.vue";

const imgaeParent = new URL("../../../public/media/rect-BG.jpg", import.meta.url).href;
const Image1 = new URL("../../../public/media/1-ver.png", import.meta.url).href;
const Image2 = new URL("../../../public/media/2-ver.png", import.meta.url).href;
const Image4 = new URL("../../../public/media/4-ver.png", import.meta.url).href;

const kmImageParent = new URL("../../../public/media/kaimook-rect-BG-Transparent.png", import.meta.url).href;
const kmImage2 = new URL("../../../public/media/kaimook-2-ver.png", import.meta.url).href;
const kmImage3 = new URL("../../../public/media/kaimook-3-ver.png", import.meta.url).href;
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  max-width: 1200px;
}

.prokedex-1 {
  width: 10%;
  height: auto;
  position: absolute;
  right: 15%;
  top: 15%;
  transform: rotate(40deg);
}

.prokedex-2 {
  width: 15%;
  height: auto;
  position: absolute;
  left: 15%;
  top: 45%;
  transform: rotate(-40deg);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.img-fluid {
  width: 100%;
  height: auto;
}

.box-bnk {
  position: relative !important;
}

.pupe-map {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
