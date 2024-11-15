<script setup lang="ts">
import {readonly} from "vue";

const person = readonly({
  name: "张三",
  address: {city: "洛阳"},
});

// 尝试修改顶层属性或嵌套属性都会抛出错误
person.name = "李四";

// 对嵌套属性的修改也会被禁止
person.address.city = "北京";

</script>

<template>
  <p>
    <a href="https://cn.vuejs.org/api/reactivity-core.html#readonly" target="_blank">readonly</a>：
    readonly 会使整个对象变为只读，包括对象的嵌套属性。也就是说，整个对象及其嵌套的属性都会变成只读，无法修改。
    如果你尝试修改任何属性（包括嵌套属性），Vue 会抛出一个错误。
  </p>
  <h3>
    <pre>
  const person = readonly({
    name: "张三",
    address: { city: "洛阳" },
  });

  // 尝试修改顶层属性或嵌套属性都会抛出错误
  person.name = "李四";

  // 对嵌套属性的修改也会被禁止
  person.address.city = "北京";
</pre>
  </h3>

</template>

<style scoped>

</style>