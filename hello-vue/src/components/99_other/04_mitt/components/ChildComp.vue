<script setup lang="ts">
import emitter from "../uiils/emitter";
import { ref, onMounted, onUnmounted } from "vue";

const msg = ref('');

const updateMessage = (value: string) => {
  msg.value = value + " #" + new Date().toLocaleTimeString();
};

onMounted(() => {
  emitter.on("hello", updateMessage);
});

onUnmounted(() => {
  emitter.off("hello", updateMessage);
});

</script>

<template>
  <h1>Child Component</h1>
  {{ msg }}
</template>

<style scoped>

</style>