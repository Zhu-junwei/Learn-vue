<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

/* 生命周期钩子
    还有一些其他的钩子如 onUpdated 和 onUnmounted。更多细节请查阅生命周期图示。
*/
onMounted(() => {
    pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
    <p ref="pElementRef">hello</p>
</template>