<script setup lang="ts">
import {ref, watch} from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

/*侦听器，侦听todoId值的变化*/
// watch(todoId, fetchData)
watch(todoId, (newTodoId, oldTodoId) => {
  console.log(oldTodoId + " => " + newTodoId)
  fetchData()
})

function resetTodoId() {
  todoId.value = 1
}

</script>

<template>
  <p>watch侦听【基本类型】响应式数据</p>
  <p>Todo id: {{ todoId }}</p>
  <button @click="resetTodoId" :disabled="!todoData">重置</button>
  <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>