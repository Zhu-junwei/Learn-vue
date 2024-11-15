<script setup lang="ts">
import {ref, onMounted} from 'vue'
import ChildComp from './components/ChildComp.vue'

const pElementRef = ref<HTMLElement | null>(null)
const content = ref()
const showChild = ref(true)

/* 生命周期钩子
    还有一些其他的钩子如 onUpdated 和 onUnmounted。更多细节请查阅生命周期图示。
*/
onMounted(() => {
  if (pElementRef.value) {
    pElementRef.value.textContent = 'mounted!'
  }
})

function showHtml() {
  content.value = pElementRef.value?.innerText
}
</script>

<template>
  <a href="https://cn.vuejs.org/guide/essentials/lifecycle#lifecycle-diagram" target="_blank">生命周期钩子</a><br/>
  <!-- 特殊 Attributes ref https://cn.vuejs.org/api/built-in-special-attributes.html#ref -->
  <p ref="pElementRef">hello</p>

  <button @click="showHtml">show html</button>
  <p>{{ content }}</p>
  <hr/>

  <!-- 生命周期 -->
  <button @click="showChild = !showChild">测试Vue3生命周期</button>
  <ChildComp v-if="showChild"/>
</template>