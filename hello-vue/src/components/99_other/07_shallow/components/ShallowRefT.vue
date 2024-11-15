<script setup lang="ts">
import {shallowRef} from "vue";

const sum = shallowRef(0)
const person = shallowRef({
  name: "张三",
  age: 25,
})

function add() {
  sum.value++
}

// person.value 会触发更改
// person.value.xxx 不会触发更改
function changeName() {
  person.value.name = "李四"
}
function changeAge() {
  person.value.age++
}

function changePerson() {
  person.value = {
    name:"李四"+new Date().toLocaleTimeString(),
    age: 30,
  }
}

</script>

<template>
  <h3><a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowref" target="_blank">shallowRef</a>
    的内部值将会原样存储和暴露，并且不会被深层递归地转为响应式。只有对 .value 的访问是响应式的。</h3>
  <button @click="add" class="ok">加一</button>
  {{ sum }}<br/>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <!-- 通过重新赋值整个 person 对象，触发视图更新 -->
  <button @click="changePerson" class="ok">修改整个人</button>
  {{ person }}
</template>

<style scoped>
.ok {
  background-color: green;
  color: white;
}
</style>