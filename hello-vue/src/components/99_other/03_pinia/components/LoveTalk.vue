<script setup lang="ts">
import axios from "axios";
import {nanoid} from 'nanoid'
import {storeToRefs} from "pinia";
import {useTalkStore} from "@/components/99_other/03_pinia/store/loveTalk";

let talkStore = useTalkStore()
let {talkList} = storeToRefs(talkStore)

async function getOne() {
  let {data: {content: title}} = await axios.get("https://v1.jinrishici.com/shuqing/aiqing");
  talkList.value.unshift({id: nanoid(), title})
}

// onMounted(() => getOne())

// 订阅 talkStore 中数据变化
talkStore.$subscribe(() => {
  localStorage.setItem("talkList", JSON.stringify(talkList.value))
});

// 清空本地及pinia缓存
function clear() {
  talkStore.$reset()
}

</script>

<template>
  <div class="talk">
    <button @click="getOne">获取一句古诗</button>
    <button @click="clear">清空</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.talk {
  margin: 10px auto;
  background-color: bisque;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

li {
  list-style: none;
}
</style>