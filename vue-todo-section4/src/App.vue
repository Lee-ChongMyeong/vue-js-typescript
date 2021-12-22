<template>
  <div>
    <header>
      <h1> Vue Todo With Typescript</h1>
    </header>
    <main>
      <todo-input
        :item="todoText"
        @input="updateTodoText"
        @add="addTodoItem"
      ></todo-input>  
      <div>
        <ul>
          <TodoListItem
            v-for="(todoItem, index) in todoItems"
            :key="index"
            :index="index"
            :todoItem="todoItem"
            @remove="removeTodoItem"
          ></TodoListItem>
          <!-- <li>아이템 1</li>
          <li>아이템 2</li>
          <li>아이템 3</li> -->
        </ul>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoListItem from './components/TodoListItem.vue';

const STORAGE_KEY = "vue-todo-ts-v1";
const storage = { // storage : 로컬스토리지를 가르칠것임.
  save(todoItems: any[]){
    const parsed = JSON.stringify(todoItems);
    localStorage.setItem(STORAGE_KEY, parsed);
  },
  fetch(){
    const todoItems = localStorage.getItem(STORAGE_KEY) || "[]";
    const result = JSON.parse(todoItems); 
    return result; 
  }
}

export default Vue.extend({
  components: { TodoInput, TodoListItem },
  data(){
    return{
      todoText: "",
      todoItems: [] as any[]
    }
  },
  methods: {
    updateTodoText(value: string){ // any -> string 으로 타입 정의
      this.todoText = value;
    },
    addTodoItem(){
      const value = this.todoText;
      this.todoItems.push(value);
      storage.save(this.todoItems)
      // localStorage.setItem(value, value);
      this.initTodoText();
    },
    initTodoText(){
      this.todoText ='';
    },
    fetchTodoItems(){
      this.todoItems = storage.fetch();
    },
    removeTodoItem(index: number){
      this.todoItems.splice(index, 1);
      storage.save(this.todoItems);
    }
  },
  created(){
    this.fetchTodoItems
  }
  
})
</script>

<stlye scoped> 

</stlye>