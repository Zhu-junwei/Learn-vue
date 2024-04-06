<script setup>
import { ref } from 'vue'
import ChildComp from './components/ChildComp.vue'

const greeting = ref('Hello from parent')

</script>

<template>
    <ChildComp msg="Hello ChildComp" />
    <ChildComp :msg="greeting" />
</template>