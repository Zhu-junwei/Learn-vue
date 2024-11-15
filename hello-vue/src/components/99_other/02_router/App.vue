<script setup lang="ts">
import {RouterView, RouterLink} from "vue-router";
import Header from "@/components/99_other/02_router/components/Header.vue";

</script>

<template>
  <Header/>
  <!--导航区 -->
  <div class="navigate">
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink>
    <RouterLink :to="{path:'about'}" active-class="active">关于</RouterLink>
  </div>
  <!--展示区 -->
  <div class="main-content">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>