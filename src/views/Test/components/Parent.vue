<template>
  <div style="position: relative">
    <img :src="props.image" class="img-fluid" alt="" />
    <slot :parentWidth="parentWidth" :parentHeight="parentHeight"></slot>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from "quasar";
import { computed, onBeforeMount, onMounted, ref, watch, watchEffect } from "vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
});

let grid = new Image();
const parentWidth = ref(0);
const parentHeight = ref(0);

grid.src = props.image;

grid.onload = () => {
  parentWidth.value = grid.naturalWidth;
  parentHeight.value = grid.naturalHeight;
};
</script>

<style scoped></style>
