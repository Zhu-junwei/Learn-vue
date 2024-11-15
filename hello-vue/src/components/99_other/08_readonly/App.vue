<script setup lang="ts">
import Readonly from "./components/Readonly.vue";
import ShallowReadonly from "./components/ShallowReadonly.vue";

</script>

<template>
  <Readonly/>
  <hr/>
  <ShallowReadonly/>
  <hr/>
  <h2>
    <pre>
    总结：
    readonly 适用于你希望对象的所有属性（包括嵌套属性）都变为只读的场景。
    shallowReadonly 适用于只关心顶层属性只读，而不希望嵌套属性变为只读的场景。
    </pre>
  </h2>
</template>

<style scoped>
.ok {
  background-color: green;
  color: white;
}
</style>