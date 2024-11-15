<script setup lang="ts">
import { ref } from 'vue'

const titleClass = ref('title')
const id = ref('blue')
</script>

<template>
    <h1 v-bind:class='titleClass'>Make me red</h1> <!-- 此处添加一个动态 class 绑定 -->
    <h1 :class='titleClass'>Make me red</h1> <!-- 由于 v-bind 使用地非常频繁，它有一个专门的简写语法 :属性名 -->
    <h1 :id>Make me blue</h1> <!-- 如果 attribute 的名称与绑定的 JavaScript 值的名称相同，那么可以进一步简化语法 -->

    <a href="https://cn.vuejs.org/guide/essentials/template-syntax#attribute-bindings" target="_blank">更多官方文档</a>
</template>

<style>
.title {
    color: red;
}

#blue {
    color: blue;
}
</style>