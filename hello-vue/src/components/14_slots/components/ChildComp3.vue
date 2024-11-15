<script setup lang="ts">
import {ref} from "vue";
// 数据定义在了子组件中
const msg = ref("hello from ChildComp3");
</script>
<template>
  <h2>作用域插槽</h2>
  <slot :msg="msg">slot1</slot>
</template>