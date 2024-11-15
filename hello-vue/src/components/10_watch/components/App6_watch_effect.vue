<script setup lang="ts">
import {ref, watchEffect} from 'vue'

const stats = ref('')
const person = ref({
  name: '张三',
  age: 18,
  high: 160
})

function changeName() {
  person.value.name += "~"
}

function changeAge() {
  person.value.age += 1
}

function changeHigh() {
  person.value.high += 1
}

/*
  立即运行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行
  https://cn.vuejs.org/api/reactivity-core.html#watcheffect
 */
// 这里追踪person的变化
watchEffect(()=>{
  stats.value = "状态改变：" + JSON.stringify(person.value)
})

</script>

<template>
  <hr/>
  <p>watchEffect侦听属性的变化</p>
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>身高：{{ person.high }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changeHigh">修改身高</button>
  <p>{{ stats }}</p>

</template>