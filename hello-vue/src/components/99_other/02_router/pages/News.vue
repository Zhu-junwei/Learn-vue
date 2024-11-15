<script setup lang="ts">
import {reactive} from "vue";
import Detail from "./Detail.vue";
import {useRouter} from "vue-router";


const newsList = reactive([
  {
    id: 'abc1',
    title: '2025 放假通知发布',
    content: '将第二条第二项修改为“（二）春节，放假4天（农历除夕、正月初一至初三）”，第四项修改为“（四）劳动节，放假2天（5月1日、2日）'
  },
  {
    id: 'abc2',
    title: '李子柒 11 月 12 日恢复更新',
    content: '对新视频有什么看法，在如今的短视频时代，她的视频还会和过去一样爆火吗？'
  },
  {
    id: 'abc3',
    title: '你期待的爱情是什么样',
    content: '君亦熙和林若祎两个人，人前恭恭敬敬，人后你侬我侬，看似毫无交集的两个人，却谈了好几年的地下恋情。在君亦熙打算一步一步把他们的恋情公之于众时，却发现林若祎的脑回路和他不在一个频道上……'
  },
  {
    id: 'abc4',
    title: 'K80 未开售，K70 已经全网下架',
    content: 'K70已经提前完成生命周期销售规划，现在已结单。K70产品力受到大家的充分认可，毫无疑问是2024年全网2-3K的销量冠军。'
  },
])

interface News{
  id:string,
  title:string,
  content:string,
}
const router = useRouter()
/*点击按钮进行路由导航*/
function showDetail(news:News) {
  router.push(
      {
        name:'detail', // params传参只能通过name路由
        params:{
          // 不能传对象和数组
          id:news.id,
          title:news.title,
          content:news.content,
        }
      }
  )
}
</script>

<template>
  <h2>News</h2>
  <div class="news">
    <!--  导航区  -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!--<RouterLink to="/news/detail">{{ news.title }}</RouterLink>-->
        <!-- 传参，方法一 -->
        <!--<RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{news.title}}</RouterLink>-->
        <!-- 传参，方法二，使用query传参，Detail使用route.query接收 -->
        <!--<RouterLink :to="{
          // name:'detail', // 通过name也可以
          path:'/news/detail',
          query:{
            id:news.id,
            title:news.title,
            content:news.content,
          }
        }">{{ news.title }}</RouterLink>-->
        <!-- 传参，方法三，使用param传参，path需要提前指定占位符 -->
        <!--<RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink><br/>-->
        <button @click="showDetail(news)">查看详情</button>
        <RouterLink :to="{
          name:'detail', // params传参只能通过name路由
          params:{
            // 不能传对象和数组
            id:news.id,
            title:news.title,
            content:news.content,
          }
        }">{{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!--  展示区  -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>