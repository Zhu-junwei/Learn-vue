<script setup lang="ts">
import {ref} from 'vue'
import ChildComp from './components/ChildComp.vue'
import ChildComp2 from './components/ChildComp2.vue'
import ChildComp3 from './components/ChildComp3.vue'

const msg = ref('from parent')
</script>

<template>
  <!-- 父组件通过插槽 (slots) 将模板片段传递给子组件   -->
  <ChildComp>Message: {{ msg }}</ChildComp>
  <hr/>

  <ChildComp2>
    <template #s1>
      <div>Message: {{ msg }}</div>
    </template>
    <template v-slot:s2>
      <div>Footer content</div>
    </template>
  </ChildComp2>
  <hr/>

  <ChildComp3>
  <!-- v-slot="params" 接收传递给子组件的插槽参数, 并将其绑定到模板变量 params   -->
    <template v-slot="params">
      <div>{{ params }}</div>
      <div>{{ params.msg }}</div>
    </template>
  </ChildComp3>

</template>