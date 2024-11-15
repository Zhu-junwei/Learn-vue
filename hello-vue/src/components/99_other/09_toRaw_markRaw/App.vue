<script setup lang="ts">
import {isReactive, markRaw, reactive, ref, toRaw} from "vue";

// toRaw() 可以返回由 reactive()、readonly()、shallowReactive() 或者 shallowReadonly() 创建的代理对应的原始对象。
let count = reactive({count:1});
let rowCount = toRaw(count);

console.log(count); // Proxy(Object) {count: 1}
console.log(rowCount); // {count: 1}

// 将一个对象标记为不可被转为代理。返回该对象本身。
const foo = markRaw({count:2})
console.log(isReactive(reactive(foo))) // false
</script>

<template>
  <h3>toRaw 根据一个 Vue 创建的代理返回其原始对象。</h3>
  <button @click="count.count++">reactive count:{{ count.count }}</button>
  <button @click="rowCount.count++">toRaw count:{{ rowCount.count }}</button>
</template>

<style scoped>

</style>