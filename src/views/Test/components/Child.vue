<template>
  <div>
    <q-img
      :src="props.image"
      :style="{
        position: 'absolute',
        width: `${widthPercent}%`,
        top: `${props.top}%`,
        left: `${props.left}%`,
        right: `${props.right}%`,
        transform: `rotate(${props.rotate}deg)`,
      }"
      class="img-child"
      @click="modalImageRef?.open(props.image)"
    />
    <ModalImage ref="modalImageRef" />
  </div>
</template>

<script setup lang="ts">
import ModalImage from "@/components/ModalImage.vue";
import useModals from "@/hooks/useModals";
import { computed, onMounted, ref, watch } from "vue";

const { modalImageRef } = useModals();

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 0,
  },
  top: {
    type: Number,
    default: 0,
  },
  right: {
    type: Number,
    default: 0,
  },
  left: {
    type: Number,
    default: 0,
  },
  bottom: {
    type: Number,
    default: 0,
  },

  parentWidth: {
    type: Number,
    default: 0,
  },

  rotate: {
    type: Number,
    default: 0,
  },
});
let grid = new Image();
grid.src = props.image;
const widthPercent = ref(0);

watch(
  () => props.parentWidth,
  (newVal) => {
    const width = props.width ? props.width : grid.naturalWidth;
    widthPercent.value = (width / props.parentWidth) * 100;
  }
);
</script>

<style lang="scss" scoped>
.img-child {
  transition: box-shadow 0.2s ease-in;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
}
</style>
