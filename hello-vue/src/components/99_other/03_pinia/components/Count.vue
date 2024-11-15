<script setup lang="ts">
import {ref} from "vue";
import {storeToRefs} from "pinia"
import {useCountStore} from "@/components/99_other/03_pinia/store/count";

let countStore = useCountStore()
// storeToRefs只会关注store中的数据，不会对方法进行ref包裹
const {sum, say, bigSum, upperSay} = storeToRefs(countStore);

// 用户选择的值
let n = ref(1)

// 修改store中的值
function add() {
  // 方式一，单独修改
  // countStore.sum += n.value

  // 方式二，批量修改，多个值修改更快
  // countStore.$patch({
  //   sum: countStore.sum + n.value,
  //   say: 'hello pinia,' + new Date().toLocaleTimeString()
  // })

  // 方式三，通过调用store定义的action来修改
  countStore.increment(n.value)
}

function minus() {
  sum.value -= n.value
}
</script>

<template>
  <div class="count">
    <h2>{{ say }}，当前求和为：{{ sum }}</h2>
    <h2>{{ upperSay }}，扩大：{{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>