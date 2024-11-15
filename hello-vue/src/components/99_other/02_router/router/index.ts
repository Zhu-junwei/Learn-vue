// 创建一个路由器，并暴露出去
import {createRouter, createWebHistory, createWebHashHistory} from "vue-router"
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import About from "../pages/About.vue";
import Detail from "../pages/Detail.vue";

const router = createRouter({
    // 路由器的工作模式
    //  history模式: createWebHistory()，带#号，美观，但是不稳定？
    //  hash模式：createWebHashHistory()，带#号，更稳定，但不利于seo
    history: createWebHistory(),
    routes: [

        {name: 'home', path: '/home', component: Home},
        {name: 'xinwen', path: '/news', component: News,
            children:[
                {
                    name: 'detail',
                    // path:'detail',
                    path:'detail/:id/:title/:content?', // params传参占位，:content?代表可选参数
                    component:Detail,
                    // props:true, // 第一种：将路由收到的所有params参数作为props传给路由组件
                    // props 第二种
                    props(route) {
                        return route.params
                    },
                }
            ]
        },
        {name: 'about', path: '/about', component: About},
    ]
})

export default router