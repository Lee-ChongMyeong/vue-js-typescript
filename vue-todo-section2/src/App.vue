<template>
  <div>
    <h1> Vue Todo With Typescript</h1>
    <todo-input
      :item="todoText"
      @input="updateTodoText"
      @add="addTodoItem"
    ></todo-input>  
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoInput from './components/TodoInput.vue'

export default Vue.extend({
  components: { TodoInput },
  data(){
    return{
      todoText: ""
    }
  },
  methods: {
    updateTodoText(value: string){ // any -> string 으로 타입 정의
      this.todoText = value;
    },
    addTodoItem(){
      const value = this.todoText;
      localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText(){
      this.todoText ='';
    }
  }
  
})
</script>

<stlye scoped> 

</stlye>