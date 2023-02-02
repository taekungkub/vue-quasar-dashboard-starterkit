<template>
  <div class="card__dashboard">
    <div class="flex items-start">
      <div class="column">
        <div class="text-h6">Progress Track</div>
      </div>

      <q-space />

      <q-btn round flat size="sm" icon="fa-solid fa-ellipsis-vertical" color="secondary"> </q-btn>
    </div>

    <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
      <div class="col-auto">
        <q-icon name="fa-brands fa-bootstrap" size="lg" color="purple-7"></q-icon>
      </div>
      <div class="col">
        <div class="flex no-wrap justify-between">
          <div class="text-body2">Soft UI Dashboard</div>
          <div class="text-body2 q-ml-sm">80%</div>
        </div>
        <q-linear-progress rounded size="5px" :value="0.8" color="purple-7" class="q-mt-sm" />
      </div>
    </div>

    <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
      <div class="col-auto">
        <q-icon name="fa-brands fa-angular" size="lg" color="red-7"></q-icon>
      </div>
      <div class="col">
        <div class="flex no-wrap justify-between">
          <div class="text-body2">Angular Design System</div>
          <div class="text-body2 q-ml-sm">34%</div>
        </div>
        <q-linear-progress rounded size="5px" :value="0.34" color="red-7" class="q-mt-sm" />
      </div>
    </div>

    <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
      <div class="col-auto">
        <q-icon name="fa-brands fa-vuejs" size="lg" color="green-7"></q-icon>
      </div>
      <div class="col">
        <div class="flex no-wrap justify-between">
          <div class="text-body2">VueJs Quasar Components</div>
          <div class="text-body2 q-ml-sm">100%</div>
        </div>
        <q-linear-progress rounded size="5px" :value="1" color="green-7" class="q-mt-sm" />
      </div>
    </div>

    <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
      <div class="col-auto">
        <q-icon name="fa-solid fa-cube" size="lg" color="pink-7"></q-icon>
      </div>
      <div class="col">
        <div class="flex no-wrap justify-between">
          <div class="text-body2">Admin Dashboard</div>
          <div class="text-body2 q-ml-sm">20%</div>
        </div>
        <q-linear-progress rounded size="5px" :value="0.2" color="pink-7" class="q-mt-sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
