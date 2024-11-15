<script setup lang="ts">
/* 子组件可以通过 props 从父组件接受动态数据 */
const props = defineProps({
  msg: String
})
</script>

<template>
  <div class="child-comp">
    <!-- props.msg 也可以直接用 -->
    <p>{{ msg || 'No props passed yet' }}</p>
  </div>
</template>

<style scoped>
p {
  color: red;
}
</style>