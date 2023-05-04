<template>
  <q-page class="relative" style="background-image: linear-gradient(180deg, #95cde3 0%, #95cde3 100%)">
    <div class="flex q-pa-lg">
      <h6>TurnJs</h6>
      <q-space />
      <div class="q-gutter-sm">
        <q-btn push round size="sm" :color="mode === 'image' ? 'primary' : 'grey-5'" icon="fa-solid fa-images" @click="mode = 'image'" />
        <q-btn push round size="sm" :color="mode === 'list' ? 'primary' : 'grey-5'" icon="fa-solid fa-list" @click="mode = 'list'" />
      </div>
    </div>

    <div v-if="mode === 'image'">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="1000px"
        class="bg-transparent rounded-borders"
        :thumbnails="true"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <Parent :image="imgaeParent" v-slot="slotProps">
            <Child :image="Image1" :top="20.5" :left="17.3" :parent-width="slotProps.parentWidth" :rotate="-11.18" />
            <Child :image="Image2" :top="12" :left="51" :parent-width="slotProps.parentWidth" :rotate="3.42" />
            <Child :image="Image4" :top="46.5" :left="55.6" :parent-width="slotProps.parentWidth" :rotate="-5.65" />
          </Parent>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <Parent :image="kmImageParent" v-slot="slotProps">
            <Child :image="kmImage2" :width="546" :top="5.98" :left="65.36" :parent-width="slotProps.parentWidth" :rotate="23.59" />
            <Child :image="kmImage3" :width="939" :top="17" :left="12.2" :parent-width="slotProps.parentWidth" :rotate="-8.59" />
          </Parent>
        </q-carousel-slide>

        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <!-- <q-btn v-if="active" size="md" icon="fa-solid fa-minus" color="primary" flat round dense @click="onClick" /> -->
          <div v-if="active" class="bg-primary" style="width: 20px; height: 10px; border-radius: 4px"></div>
          <q-btn v-else size="5px" icon="fa-solid fa-circle" color="grey" flat round dense @click="onClick" />
        </template>
      </q-carousel>
    </div>
    <img src="../../../public/media/notes.png" class="paper_note" alt="" />
    <img src="../../../public/media/clip.png" class="paper_clip" alt="" />
    <img src="../../../public/media/paper.png" class="paper_paper" alt="" />
    <img src="../../../public/media/pencil.webp" class="paper_pencil" alt="" />

    <div class="q-pa-lg relative" style="padding: 100px">
      <div v-if="mode === 'list'" class="section_collection">
        <div class="menu-box">
          <div class="text-h6">Pupe</div>
        </div>

        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-3" v-for="item in itemList1" :key="item.id">
            <q-img :src="item.image" v-if="item.image"></q-img>

            <div v-else class="column full-height">
              <div class="box box-a">{{ item.id }}</div>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-3" v-for="item in itemList2" :key="item.id">
            <q-img :src="item.image" v-if="item.image"></q-img>

            <div v-else class="column full-height">
              <div class="box box-a">{{ item.id }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import Child from "./components/Child.vue";
import Parent from "./components/Parent.vue";

const slide = ref("style");

const imgaeParent = new URL("../../../public/media/rect-BG.jpg", import.meta.url).href;
const Image1 = new URL("../../../public/media/1-ver.png", import.meta.url).href;
const Image2 = new URL("../../../public/media/2-ver.png", import.meta.url).href;
const Image4 = new URL("../../../public/media/4-ver.png", import.meta.url).href;

const kmImageParent = new URL("../../../public/media/kaimook-rect-BG-Transparent.png", import.meta.url).href;
const kmImage2 = new URL("../../../public/media/kaimook-2-ver.png", import.meta.url).href;
const kmImage3 = new URL("../../../public/media/kaimook-3-ver.png", import.meta.url).href;

const mode = ref("list"); //list

const itemList1 = [
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    image: Image2,
  },
  {
    id: 3,
    image: null,
  },
  {
    id: 4,
    image: Image4,
  },
  {
    id: 5,
    image: null,
  },
];

const itemList2 = [
  {
    id: 1,
    image: kmImage2,
  },
  {
    id: 2,
    image: kmImage3,
  },
  {
    id: 3,
    image: null,
  },
  {
    id: 4,
    image: null,
  },
  {
    id: 5,
    image: null,
  },
];
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2em;
  padding: 0.5em;
  line-height: 1;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-size: 3px 100%, 100% 3px, 3px 100%, 100% 3px;
  background-repeat: no-repeat;
  border-radius: 12px !important;
  min-height: 220px;
}
* {
  --clr-border: #333;
}
.box-a {
  background-image: repeating-linear-gradient(0deg, var(--clr-border), var(--clr-border) 10px, transparent 10px, transparent 20px),
    repeating-linear-gradient(90deg, var(--clr-border), var(--clr-border) 10px, transparent 10px, transparent 20px),
    repeating-linear-gradient(180deg, var(--clr-border), var(--clr-border) 10px, transparent 10px, transparent 20px),
    repeating-linear-gradient(270deg, var(--clr-border), var(--clr-border) 10px, transparent 10px, transparent 20px);
  border-image: repeating-linear-gradient(0deg, var(--clr-border), var(--clr-border) 10px, transparent 10px, transparent 20px);
}

@media (max-width: 1023.99px) {
  .box {
    min-height: 180px;
  }
}

.section_collection {
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: rgba(255, 255, 255, 0.85);
  z-index: 1;
  border: 1px solid rgb(255, 255, 255);
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 16px;
  backdrop-filter: blur(40px);
  border-radius: 16px;
}

.paper_note {
  position: absolute;
  right: 3%;
  top: 10%;

  transform: rotate(23.78deg);
  max-width: 150px;
}

.paper_clip {
  position: absolute;
  right: 3%;
  top: 50%;

  transform: rotate(23.78deg);
  max-width: 100px;
}

.paper_paper {
  position: absolute;
  left: 1.5%;
  top: 35%;

  transform: rotate(-23.78deg);
  max-width: 100px;
}

.paper_pencil {
  position: absolute;
  left: 10%;
  bottom: 3%;

  transform: rotate(-86.48deg);
  max-width: 100px;
}

.menu-box {
  background-image: url("https://static1.squarespace.com/static/601a9e78af724f7a3932fd5f/t/62bc99ba50dedf4348eacdf6/1656527290864/green-box.png");
  padding: 10px 15px;
  line-height: 1;
  background-size: 100% 100%;
  text-align: center;
  max-width: 200px;
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
}
</style>
