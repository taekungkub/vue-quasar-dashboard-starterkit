<template>
  <div class="q-pa-lg">
    <TopSection />

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-8">
        <SaleChart />
      </div>

      <div class="col-12 col-sm-4">
        <SaleStatusChart />
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <ConversionRate />
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <ProjectTrack />
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ConversionRate from "./ConversionRate.vue";
import ProjectTrack from "./ProjectTrack.vue";
import SaleChart from "./SaleChart.vue";
import SaleStatusChart from "./SaleStatusChart.vue";
import TodoList from "./TodoList.vue";
import TopSection from "./TopSection.vue";
</script>

<style lang="scss">
.card__dashboard {
  word-wrap: break-word;
  background-clip: border-box;
  background-color: #fff;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
  position: relative;

  background-color: var(--bg-card);
  padding: 20px;
  -webkit-box-shadow: 0 0 0.25rem rgb(8 18 34 / 10%) !important;
  box-shadow: 0 0 0.25rem rgb(8 18 34 / 10%) !important;
}
</style>
