<script setup lang="ts">
import Father from "./Father.vue";
import {ref} from "vue";

let x = ref(1);
let y = ref(2);
let hello = ref("Hello");

function sayHello() {
  x.value++;
  y.value++;
  hello.value = "Hello Vue!" + new Date().toLocaleTimeString();
}

</script>

<template>
  <h2>祖孙之间通信</h2>
  <p>{{ hello }}</p>
  <Father :x="x" :y="y" v-bind="{hello, sayHello}"/>
</template>

<style scoped>

</style>