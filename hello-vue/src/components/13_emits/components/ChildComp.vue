<script setup lang="ts">
import { ref } from 'vue'
// 声明触发的事件
const emit = defineEmits(['response', 'updateData'])
// 带参数触发 子组件还可以向父组件触发事件
emit('response', 'hello from child')

// 定义一个方法，用于触发父组件的事件
const sendDataToParent = () => {
  emit('updateData', "data from child: " + new Date().toLocaleString()); // 触发事件并传递数据给父组件
};

</script>

<template>
    <h3>Child component</h3>
    <button @click="sendDataToParent">sendDataToParent</button>
</template>