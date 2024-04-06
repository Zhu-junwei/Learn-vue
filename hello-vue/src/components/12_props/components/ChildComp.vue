<script setup>
/* 子组件可以通过 props 从父组件接受动态数据 */
const props = defineProps({
    msg: String
})
</script>

<template>
    <h2>{{ msg || 'No props passed yet' }}</h2>
</template>