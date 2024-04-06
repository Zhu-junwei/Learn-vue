<script setup>
import { ref } from 'vue'

const count = ref(0)

function increment() {
    // 更新组件状态
    count.value++
}

function reduce() {
    count.value--
}

const name = ref('Vue.js')
function greet(event) {
    alert(`Hello ${name.value}!`)
    // `event` 是 DOM 原生事件
    if (event) {
        alert(event.target.tagName)
    }
}

function say(message) {
    alert(message)
}

function submit(message) {
    alert("我提交了:" + message)
}

</script>


<template>

    <div>内联/方法 事件处理器 </div>
    <!-- 内联事件 -->
    <button @click="count = 0">重置</button>

    <!-- v-on 指令 方法事件处理器   -->
    <button v-on:click="increment">加1</button>
    <!-- v-on 指令简写  -->
    <button @click="reduce">减1</button>

    <p>
        count is: {{ count }}
    </p>
    <hr />

    <!-- `greet` 是上面定义过的方法名 -->
    <div>方法事件处理器会自动接收原生 DOM 事件并触发执行</div>
    <button @click="greet">Greet</button>
    <hr />

    <div>在内联处理器中调用方法</div>
    <button @click="say('hello')">Say hello</button>
    <button @click="say('bye')">Say bye</button>
    <hr />

    <div>在内联处理器中调用方法</div>
    <!-- 仅在 `key` 为 `Enter` 时调用 `submit` -->
    <input @keyup.enter="submit('Enter')" placeholder="输入内容后回车" />
    <hr />

    <div>系统按键修饰符</div>
    <!-- Alt + Enter -->
    <input @keyup.alt.enter="submit('Alt + Enter')" placeholder="Alt + Enter" />
    <!-- Ctrl + 点击 -->
    <button @click.ctrl="submit('Ctrl + 点击')">Ctrl + 点击 </button>
    <!-- Ctrl + 点击 -->
    <button @click.right="submit('鼠标右键 点击')">鼠标右键 </button>
    <hr />

</template>