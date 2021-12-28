<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default Vue.extend({
  mounted() {
    const canvasElement = document.getElementById(
      "myChart"
    ) as HTMLCanvasElement;
    const ctx = canvasElement.getContext("2d");
    if (!ctx) {
      return;
    }
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",
      // The data for our dataset
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45]
          }
        ]
      },
      // Configuration options go here
      options: {}
    });
  }
});
</script>

<style scoped></style>