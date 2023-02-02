<template>
  <div class="card__dashboard q-mt-lg">
    <q-card-section>
      <div class="text-h6">Sales Stats</div>

      <div class="flex items-center q-mt-sm">
        <q-icon color="green" name="fa-solid fa-arrow-up"></q-icon>
        <div class="text-subtitle text-muted q-ml-sm">4% more in 2023</div>
      </div>

      <div id="chart">
        <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"> </apexchart>
      </div>
    </q-card-section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useSettingStore } from "../../store/setting";
const setting = useSettingStore();

let series = [70];

const chartOptions = computed(() => ({
  chart: {
    height: 350,
    type: "radialBar",

    foreColor: "#2c3e50",
    toolbar: {
      show: true,
    },
  },
  colors: ["#349e00"],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: "70%",
      },
      track: {},

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: setting.currentTheme === "dark" ? "#fff" : "#56697F",
          fontSize: "24px",
        },
        value: {
          formatter: function (val: any) {
            return "Sales";
          },
          color: setting.currentTheme === "dark" ? "#fff" : "#56697F",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["80%"],
}));
</script>

<style scoped></style>
