<script setup lang="ts">
let props = defineProps(['x', 'y', 'hello', 'sayHello']);
</script>

<template>
  <button @click="sayHello()">Say Hello</button>
  <p>{{ x }} {{ y }} {{ hello }}</p>
</template>

<style scoped>

</style>