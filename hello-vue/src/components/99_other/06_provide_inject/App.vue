<script setup lang="ts">
import Father from "./Father.vue";
import {ref,provide} from "vue";

let x = ref(1);
let y = ref(2);
let hello = ref("Hello");

function sayHello() {
  x.value++;
  y.value++;
  hello.value = "Hello Vue!" + new Date().toLocaleTimeString();
}

// 祖组件向下传递数据
provide("x", x);
provide("y", y);
provide("hello", hello);
provide("sayHello", sayHello);

</script>

<template>
  <h2>provide/inject 实现祖孙之间通信，对中间组件无侵入</h2>
  <p>{{ x }} {{ y }} {{ hello }}</p>

  <Father/>
</template>

<style scoped>

</style>