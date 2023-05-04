<template>
  <div class="cover_box">
    <div class="inner_box" :style="{ backgroundImage: `url(${bgImage})` }"></div>
    <span class="mask bg-gradient-dark opacity-6"></span>
    <!-- <img src="../../../../public/media/anime1.png" class="img-fluid character" alt="" /> -->

    <div class="text-box">
      <div class="text-center text-white text-funny">
        <h3>{{ props.title }}</h3>
        <h6>Subtitle</h6>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  bgImage: {
    type: String,
    default: "../../../../public/media/room1.jpeg",
  },
  title: {
    type: String,
    default: "ROOM",
  },
});

const bgImage = computed(() => new URL(props.bgImage, import.meta.url).href);
</script>

<style lang="scss" scoped>
.cover_box {
  /* margin-top: 100px; */
  position: relative;
  width: 100%;
  height: 220px;
  border: 2px solid black;
  transition: all 0.5s ease;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.1);
    }

    .inner_box {
      transform: scale(1.1);
    }
  }
}
.inner_box {
  background-size: cover;
  background-position: 50% 50%;
  /* background-image: url("../../../public/media/room1.jpeg"); */
  height: 100%;
  width: 100%;
  transition: all 0.6s ease;
}
.cover_box::after {
  content: "";
  background-color: red;
}

.character {
  position: absolute;
  left: 4.59%;
  right: 81.81%;
  bottom: 0%;
  max-width: 150px;
  transition: all 0.5s ease-in-out;
}

.mask {
  background-position: 50%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.mask {
  background-size: cover;
}
.bg-gradient-dark {
  background-image: linear-gradient(310deg, #212229, #212529);
}
.opacity-6 {
  opacity: 0.6;
}

.text-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
