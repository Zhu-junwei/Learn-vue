<script setup lang="ts">
import {ref} from 'vue'
import ChildComp from './components/ChildComp.vue'

const childMsg = ref('No child msg yet')

const receivedData = ref<string[]>([]);
const handleUpdateData = (data: string) => {
  receivedData.value.unshift(data); // 接收子组件传递过来的数据
};
</script>

<template>
  <h2>接收子组件的事件(数据)</h2>
  <ChildComp
      @response="(msg: string) => childMsg = msg"
      @updateData="handleUpdateData"/>
  <p>{{ childMsg }}</p>
  <p v-for="(data, index) in receivedData" :key="index">{{ data }}</p>
</template>