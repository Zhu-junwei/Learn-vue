<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, ref} from 'vue'


const sum = ref(0)

console.log("setup")

onBeforeMount(() => {
  console.log("onBeforeMount")
})

onMounted(() => {
  console.log("onMounted")
})

onBeforeUpdate(() => {
  console.log("onBeforeUpdate")
})

onUpdated(() => {
  console.log("onUpdated")
})

onBeforeUnmount(() => {
  console.log("onBeforeUnmount")
})

onUnmounted(() => {
  console.log("onUnmounted")
})

</script>
<template>
  <button @click="sum++">SUM: {{sum}}</button>
</template>