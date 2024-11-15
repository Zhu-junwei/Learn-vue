<template>
  <!-- 在子组件中，可以使用 <slot> 元素作为插槽出口 (slot outlet) 渲染父组件中的插槽内容 (slot content) -->
  <h2>默认插槽</h2>
  <slot>Fallback content</slot>
</template>
<script setup lang="ts">
</script>