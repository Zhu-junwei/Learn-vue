<script setup>
// 声明触发的事件
const emit = defineEmits(['response'])
// 带参数触发 子组件还可以向父组件触发事件
emit('response', 'hello from child')
</script>

<template>
    <h2>Child component</h2>
</template>