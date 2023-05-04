<template>
  <div>
    <div class="main" :class="{ active: !isLoading }">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(false);
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50vh;
  background-color: skyblue;
  box-sizing: border-box;
  transition: all 0.5s ease;
}

.bottom {
  display: inline-block;
  width: 100%;
  height: 50vh;
  background-color: tomato;
  box-sizing: border-box;
  transition: all 0.5s ease;
}
</style>
