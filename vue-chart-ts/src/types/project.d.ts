// 1. Make sure to import 'vue' before declaring augmented types
import Vue from 'vue'
import Chart = require("chart.js");
// import Chart from 'chart.js'

type ChartLib = typeof Chart; // Chart의 클래스 타입을 전확히 추론하면서 ChartLib을 들고올것임

// 2. Specify a file with the types you want to augment
//    Vue has the constructor type in types/vue.d.ts
declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    $_Chart: ChartLib, // 컴포넌트마다 $_Chart 접근할수 있게 됨.
  }
}