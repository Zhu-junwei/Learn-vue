<script setup lang="ts">
/* 子组件可以通过 props 从父组件接受动态数据 */
import { ref } from 'vue'
const props = defineProps(['sendToy'])
const toy = ref('奥特曼')

function sendFather() {
  props.sendToy(toy.value + ":" + new Date().toLocaleTimeString())
}
</script>

<template>

  <div class="child-comp">
    <button @click="sendFather">向父组件发送数据</button>
  </div>
</template>

<style scoped>

</style>