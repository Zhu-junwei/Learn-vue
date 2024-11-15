<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

let route = useRoute()
let {query,params} = toRefs(route)
defineProps(['id','title','content'])

console.log(route);
</script>

<template>
  <ul class="news-list">
    <li>编号：{{id}}</li>
    <li>标题：{{route.params.title}}</li>
    <li>内容：{{route.params.content}}</li>
  </ul>
</template>

<style scoped>

</style>