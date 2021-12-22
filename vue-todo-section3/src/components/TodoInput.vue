<template>
    <div>
        <label for="todo-input">오늘 할 일 : </label>
        <input id="todo-input" type="text" :value="item" @input="handleInput">
        <!-- @input : input 이벤트가 일어났을때, handleInput  -->
        <button @click="addTodo" type="button">추가</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    // props: ['item'], 
    props: {
        item: { // props에 대한 타입 정리 및 필수값 체크
            type: String,
            required: true
        }
    },
    methods: {
        handleInput(event: InputEvent ){ // event: any -> event:InputEvent 로 정의
            console.log('event', event);
            // if (!event.target){ // # null 해결 1 
            //     return;
            // }
            const eventTarget = event.target as HTMLInputElement; // 타입스크립트 너 신경쓰지마, 뭔지 알고 있어! (but, unsafe 한 방법)
            // this.$emit('input', event.target.value);
            this.$emit('input', eventTarget.value);
            // 위쪽 @input 이벤트는 키보드의 이벤트 아래쪽 input emit 이벤트는 컴포넌트간에 대화하기 위한 수단임
        },  
        addTodo(){
            this.$emit("add");
        }
    }  
})
</script>

<style scoped>

</style>