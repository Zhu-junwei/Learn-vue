<script setup lang="ts">
import {shallowReactive} from "vue";


const person = shallowReactive({
  name: "张三",
  age: 25,
  car: {
    brand: "宝马",
    color: "红色"
  }
})

function changeName() {
  person.name = '李四' + new Date().toLocaleTimeString()
}

function changeAge() {
  person.age++
}

function changeCarBrand() {
  person.car.brand = "奔驰"
}

function changeCar() {
  person.car = {
    brand: "奔驰",
    color: "蓝色" + Math.random()
  }
}

function changePerson() {
  Object.assign(person, {
    name: "李四",
    age: 30,
    car: {
      brand: "奔驰",
      color: "蓝色"
    }
  })
}
</script>

<template>
  <h3><a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive" target="_blank">shallowReactive</a> :
    和 reactive() 不同，这里没有深层级的转换：一个浅层响应式对象里只有根级别的属性是响应式的。</h3>
  <button @click="changeName" class="ok">修改名字</button>
  <button @click="changeAge" class="ok">修改年龄</button>
  <button @click="changeCarBrand">修改车品牌</button>
  <button @click="changeCar" class="ok">修改整个车</button>
  <button @click="changePerson" class="ok">修改整个人</button>
  {{ person }}
</template>

<style scoped>
.ok {
  background-color: green;
  color: white;
}
</style>