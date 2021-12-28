import ListView from './ListView.vue';
import bus from '../utils/bus';
import { CreateElement } from 'vue/types/umd';

export default function createListView(name: String) {
  return {
    name,
    mounted() {
      bus.$emit('off:progress');
    },
    render(h: CreateElement) {
      return h(ListView);
    },
  };
}