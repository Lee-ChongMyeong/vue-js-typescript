import Chart from "chart.js";
import { VueConstructor } from "vue/types/umd";

export default{
    install(Vue: VueConstructor){
        Vue.prototype.$_Chart = Chart;
    }
}

// App.vue
// 컴포넌트 레벨에서 아래와 같이 Chart 생성할 수 있음
// new this.$_Chart():