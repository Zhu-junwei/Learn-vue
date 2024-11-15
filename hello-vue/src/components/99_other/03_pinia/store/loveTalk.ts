import {defineStore} from "pinia";
import {reactive} from "vue";

// 定义 talkList 项的类型
interface TalkItem {
    id: string;
    title: string;
}

// 选项式写法
/*export let useTalkStore = defineStore('talk',{
    state: (): { talkList: TalkItem[] } => ({
        // 从浏览器本地存储中获取值
        talkList: JSON.parse(localStorage.getItem("talkList") as string)||[]
    })
})*/

// 组合式写法

export let useTalkStore = defineStore('talk', () => {
    const talkList = reactive(JSON.parse(localStorage.getItem("talkList") as string) || [])

    // 用于清空store和localStorage的函数
    function $reset() {
        localStorage.removeItem("talkList")
        talkList.length = 0  // 重置 talkList
    }

    return {talkList,$reset}
})