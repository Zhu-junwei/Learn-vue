<script setup lang="ts">
import {ref, reactive, watch} from 'vue'

const stats = ref('')
const person = reactive({
  name: '张三',
  age: 18
})

function changeName() {
  person.name += "~"
}

function changeAge() {
  person.age += 1
}

function changePerson() {
  Object.assign(person, {
    name: '李四',
    age: 30
  })
}


/*
  监视reactive定义的对象数据，默认是开启深度监视的{deep:true}，且无法手动关闭
 */
watch(person, (newValue, oldValue) => {
  stats.value = "person改变了:" + JSON.stringify(oldValue) + "=>" + JSON.stringify(newValue)
})

</script>

<template>
  <hr/>
  <p>watch侦听【reactive】响应式对象</p>
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changePerson">修改整个人</button>
  <p>{{ stats }}</p>

</template>