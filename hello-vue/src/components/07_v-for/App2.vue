<script setup>
import { ref } from 'vue'

const parentMessage = ref('Parent')
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
const myObject = ref({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})
</script>

<template>
    <!-- v-for 也支持使用可选的第二个参数表示当前项的位置索引。 -->
    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>

    <hr />

    <!-- 你也可以使用 of 作为分隔符来替代 in，这更接近 JavaScript 的迭代器语法 -->
    <li v-for="(item, index) of items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>

    <hr />

    <!-- 你也可以使用 v-for 来遍历一个对象的所有属性。
        遍历的顺序会基于对该对象调用 Object.keys() 的返回值来决定。 -->
    <li v-for="(value, key, index) in myObject">
        {{ index }} - {{ key }}: {{ value }}
    </li>

    <hr />

    <!-- 在 v-for 里使用范围值 1-10 -->
    <span v-for="n in 10">{{ n }}</span>
</template>