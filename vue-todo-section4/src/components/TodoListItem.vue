<template>
    <li>
        <span>{{ todoItem }} </span>
        <!-- <button @click="$emit('delete')">삭제</button> -->
        <button @click="removeItem">삭제</button>
        <!-- 버튼에다가 바로 실무에서 수용가능한 코드임, 하지만 테스트 하기 어려운 코드임.  -->
    </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        todoItem: String,
        index: Number
    },

    methods: {
        removeItem(){
            this.$emit("remove", this.index);
        }
    }
})
</script>

<style scoped>

</style>