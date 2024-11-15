<script setup lang="ts">
import {shallowReadonly} from "vue";

const person = shallowReadonly({
  name: "张三",
  address: {city: "洛阳"},
});

// 尝试修改顶层属性会抛出错误
person.name = "李四";  // Error: Cannot mutate readonly object

// 但是可以修改嵌套属性的内部属性（因为它们不是只读的）
person.address.city = "北京";  // 允许修改

</script>

<template>
  <p>
    <a href="https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly" target="_blank">shallowReadonly</a> 只会使对象的顶层属性变为只读，而不会使嵌套的属性变为只读。
    你只能修改对象的嵌套属性中的顶层属性，嵌套属性本身仍然是可变的。
  </p>
  <h3>
<pre>
  const person = shallowReadonly({
    name: "张三",
    address: {city: "洛阳"},
  });

  // 尝试修改顶层属性会抛出错误
  person.name = "李四";  // Error: Cannot mutate readonly object

  // 但是可以修改嵌套属性的内部属性（因为它们不是只读的）
  person.address.city = "北京";  // 允许修改
</pre>
  </h3>
</template>

<style scoped>

</style>