<script setup lang="ts">
import {ref, watch} from 'vue'

const stats = ref('')
const person = ref({
  name: '张三',
  age: 18
})

function changeName(){
  person.value.name += "~"
}

function changeAge(){
  person.value.age += 1
}

function changePerson(){
  person.value = {
    name: '李四',
    age: 30
  }
}

/*
   侦听【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视{deep:true}
   watch的第一个参数是：被监视的数据
   watch的第二个参数是：监视的回调
   watch的第三个参数是：配置对象（deep、immediate等等.....）
 */
watch(person, ((newValue, oldValue) => {
  stats.value = "person改变了:" + JSON.stringify(oldValue) +"=>" + JSON.stringify(newValue)
}),{deep:true})

</script>

<template>
  <hr/>
  <p>watch侦听【ref】响应式对象</p>
  <h2>名字：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="changePerson">修改整个人</button>
  <p>{{stats}}</p>

</template>