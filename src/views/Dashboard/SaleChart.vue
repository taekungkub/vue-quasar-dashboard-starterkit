<template>
  <div class="card__dashboard q-mt-lg">
    <q-card-section>
      <div class="text-h6">Sale overview</div>

      <div class="flex items-center q-mt-sm">
        <q-icon color="green" name="fa-solid fa-arrow-up"></q-icon>
        <div class="text-subtitle text-muted q-ml-sm">4% more in 2023</div>
      </div>

      <div id="chart">
        <apexchart type="area" height="350" :options="chartOptions" :series="series"> </apexchart>
      </div>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useSettingStore } from "../../store/setting";
const setting = useSettingStore();

let series = [
  {
    name: "STOCK ABC",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
];

const chartOptions = computed(() => ({
  chart: {
    height: 350,
    type: "area",
    zoom: {
      enabled: true,
    },
    foreColor: setting.currentTheme === "dark" ? "#fff" : "#2c3e50",
    toolbar: {
      show: true,
    },
  },
  colors: ["#349e00"],

  aLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    curve: "smooth",
    lineCap: "butt",
    colors: undefined,
    width: 2,
    dashArray: 0,
  },

  grid: {
    borderColor: "#ddd",
    row: {
      colors: ["transparent", "transparent"],
      opacity: 0.5,
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  yaxis: {
    opposite: true,
  },
  legend: {
    horizontalAlign: "left",
  },
  tooltip: {
    theme: setting.currentTheme === "dark" ? "dark" : "light",
  },
}));
</script>

<style scoped></style>
