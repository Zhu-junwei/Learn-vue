<script setup lang="ts">
import {ref} from 'vue'

const toggle = ref(false)
const dynamicTrueValue = ref('yes')
const dynamicFalseValue = ref('no')

const pick = ref('')
const male = ref('M')
const female = ref('F')
</script>

<template>
  <input type="checkbox" id="savePassword" v-model="toggle" :true-value="dynamicTrueValue"
         :false-value="dynamicFalseValue"/>
  <label for="savePassword">保存密码</label>
  <p>{{ toggle }}</p>
  <hr/>

  <input type="radio" id="male" v-model="pick" :value="male"/><label for="male">男</label>
  <input type="radio" id="female" v-model="pick" :value="female"/><label for="female">女</label>
  <p>{{ pick }}</p>


</template>