<script setup lang="ts">
import UseSum from "@/components/99_other/01_hooks/ts/useSum"
import useDog from "@/components/99_other/01_hooks/ts/useDog";

const {sum, add} = UseSum()
const {dogList, getDog} = useDog()
</script>

<template>
  <button @click="add">加一</button>
  <h2>sum: {{ sum }}</h2>

  <button @click="getDog">获取狗图片</button>
  <br/>
  <img v-for="(dog,index) in dogList" :key="index" class="dogLi" :src="dog" alt="dog">
</template>

<style scoped>
img {
  height: 100px;
}
</style>