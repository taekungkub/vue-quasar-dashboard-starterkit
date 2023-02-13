<template>
  <q-dialog v-model="isModal">
    <div>
      <q-btn flat dense icon="close" color="white" v-close-popup style="position: absolute; margin: 5px; right: 0; top: 0; z-index: 50" />
    </div>

    <div class="full-width">
      <q-img :src="imageRef" class="full-width block q-mx-auto" />
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import useModals from "@/hooks/useModals";
import { computed } from "@vue/reactivity";
import { QDialog } from "quasar";
import { ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});

const imageRef = ref("");
const isModal = ref(false);

function open(image: string) {
  isModal.value = true;
  imageRef.value = new URL(image, import.meta.url).href;
}

defineExpose({ open });
</script>

<style scoped></style>
