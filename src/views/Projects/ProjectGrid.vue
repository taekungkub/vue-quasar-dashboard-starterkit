<template>
  <div class="q-pa-lg">
    <h6>PROJECTS GRID</h6>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-4" v-for="item in projectList" :key="item.id">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-md">
              <div class="col-auto">
                <q-avatar size="70px" font-size="23px" color="grey-2" text-color="primary" :icon="item.icon" class="q-mb-md" />
              </div>
              <div class="col">
                <div class="text-h6 no-padding">{{ item.title }}</div>
                <div class="text-muted text-body2 q-mb-md">{{ item.subtitle }}</div>
                <AvatarGroup />
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-px-lg">
            <div class="flex items-center">
              <q-badge :color="item.color">{{ item.status }}</q-badge>
              <q-icon name="fa-solid fa-calendar-days" class="q-ml-md"></q-icon>
              <div class="text-caption q-ml-sm text-muted">{{ item.date }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="col-12">
      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="pagination.page" :max="pagesNumber" :max-pages="6" :boundary-numbers="false" boundary-links> </q-pagination>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarGroup from "@/components/AvatarGroup.vue";
import { computed, ref } from "vue";

const projectList = [
  {
    id: 1,
    icon: "fa-brands fa-shopify",
    title: "New admin Design",
    subtitle: "It will be as simple as Occidental",
    status: "Completed",
    color: "positive",
    date: "15 Oct, 23",
  },
  {
    id: 2,
    icon: "fa-brands fa-discord",
    title: "Brand logo design",
    subtitle: "To achieve it would be necessary",
    status: "Pending",
    color: "warning",
    date: "22 Oct, 23",
  },
  {
    id: 3,
    icon: "fa-brands fa-facebook-messenger",
    title: "New Landing Design",
    subtitle: "For science, music, sport, etc",
    status: "Delay",
    color: "negative",
    date: "25 Oct, 23",
  },
];

const pagination = ref({
  sortBy: "",
  descending: false,
  page: 1,
  rowsPerPage: 5,
  // rowsNumber: xx if getting data from a server
});

const pagesNumber = computed(() => {
  return Math.ceil(40 / pagination.value.rowsPerPage);
});
</script>

<style lang="scss" scoped></style>
