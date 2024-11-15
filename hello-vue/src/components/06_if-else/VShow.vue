<script setup lang="ts">
import {ref} from 'vue'

const ok = ref(true)

function toggle() {
  ok.value = !ok.value
}
</script>

<template>
  <!-- v-show是把元素隐藏，但是不会销毁，v-if是销毁元素 -->
  <button @click="toggle">toggle</button>
  <h1 v-show="ok">Hello World</h1>
  <h1>显示隐藏</h1>
</template>

<style scoped></style>