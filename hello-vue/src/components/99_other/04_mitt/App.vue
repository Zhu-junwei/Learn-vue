<script setup lang="ts">
import { onMounted,ref } from 'vue';
import ChildComp from "./components/ChildComp.vue"
import emitter from "./uiils/emitter";

// 定义数据
const message = ref('hello mitt!');

// 点击按钮触发事件
function sayHello(value: string) {
  emitter.emit('hello', value)
}

onMounted(() => sayHello(message.value))

</script>

<template>
  <div>
    <h2>
      <a href="https://github.com/developit/mitt" target="_blank">mitt</a> 🥊 Tiny 200 byte functional event emitter/pubsub.
    </h2>
    <hr/>
    <p>{{ message }}</p>
    <button @click="sayHello(message)">sayHelloByClick</button>
    <ChildComp/>
  </div>
</template>

<style scoped>

</style>