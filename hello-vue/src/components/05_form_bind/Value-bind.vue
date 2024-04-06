<script setup>
import { ref } from 'vue'

const toggle = ref(false)
const dynamicTrueValue = ref('yes')
const dynamicFalseValue = ref('no')
</script>

<template>
    <input type="checkbox" id="savePassword" v-model="toggle" :true-value="dynamicTrueValue"
        :false-value="dynamicFalseValue" />
    <label for="savePassword">保存密码</label>
</template>