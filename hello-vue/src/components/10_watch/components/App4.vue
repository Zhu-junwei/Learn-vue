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
侦听`ref`或`reactive`定义的【对象类型】数据中的**某个属性**，注意点如下：

1. 若该属性值**不是**【对象类型】，需要写成函数形式。
2. 若该属性值是**依然**是【对象类型】，可直接编，也可写成函数，建议写成函数。

结论：侦听的要是对象里的属性，那么最好写函数式，注意点：若是对象侦听的是地址值，需要关注对象内部，需要手动开启深度监视。

 */
watch(() => person.value.age, (newValue, oldValue) => {
  stats.value = "age改变了:" + JSON.stringify(oldValue) + "=>" + JSON.stringify(newValue)
})

watch(() => person.value.book, (newValue, oldValue) => {
  stats.value = "book改变了:" + JSON.stringify(oldValue) + "=>" + JSON.stringify(newValue)
}, {deep: true})

</script>

<template>
  <hr/>
  <p>watch侦听【ref】或【reactive】定义的【对象类型】数据中的某个属性</p>
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changeB1">修改book1</button>
  <button @click="changeB2">修改book2</button>
  <button @click="changeBook">修改整个book</button>
  <p>{{ stats }}</p>

</template>