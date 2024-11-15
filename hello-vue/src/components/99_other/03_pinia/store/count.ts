import {defineStore} from "pinia";

export const useCountStore = defineStore('count', {
    // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    // 可以对存的值做一些限制，校验等
    actions: {
        increment(value:number) {
            // this是当前的store
            this.sum += value
        }
    },
    // 存数据的地方
    state() {
        return {
            sum: 1,
            say: 'Hello pinia'
        }
    },
    // getters，可以对数据进行进一步加工
    getters:{
        bigSum: state => state.sum * 10,
        upperSay():string{
            return this.say.toUpperCase()
        }
    }
})

