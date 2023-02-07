<template>
  <div class="avatar-group">
    <div class="avatar-group-item" v-for="(item, index) in props.items" :key="index">
      <img :src="item" class="rounded-circle avatar-xs" alt="" />
    </div>

    <!---->
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array<string>,
    default: ["http://skote.vuejs-light.themesbrand.com/img/avatar-2.02aea0c2.jpg", "http://skote.vuejs-light.themesbrand.com/img/avatar-1.67e2b9d7.jpg"],
  },
});
</script>

<style scoped lang="scss">
.avatar-group {
  padding-left: 12px;
  display: flex;
  flex-wrap: wrap;
}

.avatar-group .avatar-group-item {
  margin-left: -12px;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: all 0.2s;
}
.avatar-group .avatar-group-item:hover {
  position: relative;
  transform: translateY(-2px);
}
.avatar-xs {
  height: 2rem;
  width: 2rem;
}
.rounded-circle {
  border-radius: 50% !important;
}
</style>
