<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
</script>

<template>

</template>

<style scoped>

</style>