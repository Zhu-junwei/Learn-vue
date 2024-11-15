<script setup lang="ts">
import { provide, inject } from 'vue'

// 获取父组件中的数据，方法
let hello = inject('hello', 'Hello from parent');
let sayHello = inject('sayHello', () => {});
const x = inject('x', 0)
const y = inject('y', 0)
</script>

<template>
  <button @click="sayHello">Say Hello</button>
  <p>{{ x }} {{ y }} {{ hello }}</p>
</template>

<style scoped>

</style>