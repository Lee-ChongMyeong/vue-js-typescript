import Vue from "vue";
import App from "./App.vue";
import ChartPlugin from "./plugins/ChartPlugin"; // 플러그인화 한 코드 import

Vue.use(ChartPlugin); 
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
