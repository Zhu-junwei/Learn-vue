<script setup lang="ts">
import App1 from './components/App1.vue'
import App2 from './components/App2.vue'
import App3 from './components/App3.vue'
import App4 from './components/App4.vue'
import App5 from './components/App5.vue'
import App6 from './components/App6_watch_effect.vue'

</script>

<template>
  <!-- 侦听基本类型响应式数据 -->
  <App1/>
  <!-- 侦听ref响应式对象 -->
  <App2/>
  <!-- 侦听reactive响应式对象 -->
  <App3/>
  <!-- 侦听响应式对象中的某个属性 -->
  <App4/>
  <!-- 侦听响应式对象中的多个属性 -->
  <App5/>
  <!-- 侦听属性改变 -->
  <App6/>
</template>