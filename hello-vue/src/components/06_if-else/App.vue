<script setup lang="ts">
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
    awesome.value = !awesome.value
}
</script>

<template>
    <a href="https://cn.vuejs.org/guide/essentials/conditional.html" target="_blank">更多细节请查阅 v-if：指南 - 条件渲染</a><br/>
    <button @click="toggle">toggle</button>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
</template>