<script setup lang="ts">
import {ref} from 'vue'
import ChildComp from './components/ChildComp.vue'
import ChildComp2 from './components/ChildComp2.vue'

// 用于接收子组件的参数
const greeting = ref('Hello from parent')

function getToy(value: string) {
  receivedToy.value = value
}

const receivedToy = ref('')

</script>

<template>
  <div class="father">

    <h2>向子组件传递参数</h2>
    <!--  msg="Hello ChildComp" 传的是字符串"Hello ChildComp" -->
    <ChildComp msg="Hello ChildComp"/>
    <!--  :msg="greeting" 传的是变量greeting -->
    <ChildComp :msg="greeting"/>
    <hr/>


    <h2>接收子组件的参数</h2>
    <p v-show="receivedToy">
      Received toy: <span class="toy">{{ receivedToy }}</span>
    </p>
    <ChildComp2 :sendToy="getToy"/>
  </div>

</template>
<style scoped>
.father {
  margin: 20px;
  text-align: center;
  border: 2px solid red;
  padding: 20px;
  background-color:#f8f8f8;
  border-radius: 20px;
}
p .toy{
  color: red;
}

.child-comp {
  background-color: aqua;
  border: 2px solid green;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
}
</style>