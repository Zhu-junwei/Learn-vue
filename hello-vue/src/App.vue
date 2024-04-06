<script setup>
import {ref} from 'vue'
import Hello from './components/01_hello/App.vue'
import ReactiveRef from './components/02_reactive_ref/App.vue'
import AttributeBind from './components/03_attribute_bind/App.vue'
import EventListener from './components/04_event/App.vue'
import FromBind from './components/05_form_bind/App.vue'
import FromBindValue from './components/05_form_bind/Value-bind.vue'
import IfElse from './components/06_if-else/App.vue'
import Toggle from './components/06_if-else/App2.vue'
import VShow from './components/06_if-else/VShow.vue'
import VFor from './components/07_v-for/App.vue'
import VForIndex from './components/07_v-for/App2.vue'
import Computed from './components/08_computed/App.vue'
import LifecycleRef from './components/09_lifecycle_ref/App.vue'
import Watch from './components/10_watch/App.vue'
import Comp from './components/11_comp/App.vue'
import Props from './components/12_props/App.vue'
import Emits from './components/13_emits/App.vue'
import Slots from './components/14_slots/App.vue'

const currentComponent = ref(Hello)

const components = [
  {name: '1. Hello', component: Hello},
  {name: '2. 声明式渲染', component: ReactiveRef},
  {name: '3. Attribute绑定', component: AttributeBind},
  {name: '4. 事件监听', component: EventListener},
  {name: '5. 表单绑定', component: FromBind},
  {name: '5.1 表单绑定-值绑定', component: FromBindValue},
  {name: '6. IfElse-基本用法', component: IfElse},
  {name: '6.1 IfElse-显示隐藏', component: Toggle},
  {name: '6.2 IfElse-VShow隐藏', component: VShow},
  {name: '7 列表渲染', component: VFor},
  {name: '7.1 列表渲染-index', component: VForIndex},
  {name: '8. 计算属性', component: Computed},
  {name: '9. 生命周期和模板引用', component: LifecycleRef},
  {name: '10. 侦听器', component: Watch},
  {name: '11. 组件', component: Comp},
  {name: '12. Props', component: Props},
  {name: '13. Emits', component: Emits},
  {name: '14. 插槽', component: Slots},
]

function showComponent(component) {
  currentComponent.value = component.component
}

</script>

<template>
  <div class="nav">
    <div class="left">
      <a href="https://cn.vuejs.org/tutorial" target="_blank">官方互动教程</a>
      <ul>
        <li v-for="component in components" :key="component.name">
          <button @click="showComponent(component)">
            {{ component.name }}
          </button>
        </li>
      </ul>
    </div>
    <div class="right">
      <component :is="currentComponent"/>
    </div>
  </div>
</template>
<style scoped>
.nav {
  display: flex;
  width: 100%;
  background-color: aqua;
}

.left {
  width: 20%;
  border: #282828 1px solid;
  background-color: blanchedalmond;
}

.left ul {
  list-style-type: none;
  padding: 0;
}

.left li {
  margin-bottom: 10px;
}

.right {
  width: 80%;
  min-height: 800px;
  margin-left: 10px;
  background-color: #f8f8f8;
  border: #282828 1px solid;
}
</style>