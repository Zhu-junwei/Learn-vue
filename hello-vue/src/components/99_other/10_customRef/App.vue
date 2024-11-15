<script setup lang="ts">
import useCustomRef from './useSumRef'

const {msg} = useCustomRef('Hello Vue3 Custom Ref! ',1000);

function updateMsg() {
  msg.value = 'Updated Custom Ref!' + Math.random();
}

</script>

<template>
  <h3>自定义ref实现防抖</h3>
  <button @click="updateMsg">Update Custom Ref</button>
  {{ msg }}
</template>

<style scoped>

</style>