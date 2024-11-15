<script setup lang="ts">
import {reactive, ref} from 'vue'

const counter = reactive({count: 0})
const message = ref('Hello World!')
</script>

<template>
  <h1>{{ message }}</h1>
  <p>Count is: {{ counter.count }}</p>
  <!--  在双花括号中的内容并不只限于标识符或路径——我们可以使用任何有效的 JavaScript 表达式。-->
  <h1>{{ message.split('').reverse().join('') }}</h1>
</template>