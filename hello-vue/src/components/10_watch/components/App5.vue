<script setup lang="ts">
import {ref, reactive, watch} from 'vue'

const stats = ref('')
const person = ref({
  name: '张三',
  age: 18,
  book: {
    b1: '小王子',
    b2: '三国演义'
  }
})

function changeName() {
  person.value.name += "~"
}

function changeAge() {
  person.value.age += 1
}

function changeB1() {
  person.value.book.b1 = '水浒传'
}

function changeB2() {
  person.value.book.b2 = '红楼梦'
}

function changeBook() {
  person.value.book = {
    b1: '霍乱时期的爱情',
    b2: '浮生六记'
  }
}

/*
侦听`ref`或`reactive`定义的【对象类型】数据中的**多个个属性**
使用数组来表示
 */
watch([() => person.value.age, () => person.value.book.b1], (newValue, oldValue) => {
  stats.value = "age/b1改变了:" + JSON.stringify(oldValue) + "=>" + JSON.stringify(newValue)
})

</script>

<template>
  <hr/>
  <p>watch侦听【ref】或【reactive】定义的【对象类型】数据中的多个属性</p>
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changeB1">修改book1</button>
  <button @click="changeB2">修改book2</button>
  <button @click="changeBook">修改整个book</button>
  <p>{{ stats }}</p>

</template>