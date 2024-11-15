<script setup lang="ts">
import {shallowRef } from 'vue'
import type {Component} from "vue"
import Temp from './components/00_temp/App.vue'
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

import Hooks from './components/99_other/01_hooks/App.vue'
import Router from './components/99_other/02_router/App.vue'
import Pinia from './components/99_other/03_pinia/App.vue'
import Mitt from './components/99_other/04_mitt/App.vue'
import Attrs from './components/99_other/05_$attrs/App.vue'
import ProvideInject from './components/99_other/06_provide_inject/App.vue'
import Shallow from './components/99_other/07_shallow/App.vue'
import Readonly from './components/99_other/08_readonly/App.vue'
import ToRawMarkRaw from './components/99_other/09_toRaw_markRaw/App.vue'
import CustomRef from './components/99_other/10_customRef/App.vue'

const currentComponent = shallowRef<Component>(Hello)

interface ComponentItem {
  name: string;
  component: Component;
}

const components:ComponentItem[] = [
  {name: '0. 临时', component: Temp},
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

const ex_components:ComponentItem[] = [
  // {name: '0. 基础', component: Base},
  {name: '1. 自定义hooks', component: Hooks},
  {name: '2. 路由 Router', component: Router},
  {name: '3. Pinia', component: Pinia},
  {name: '4. mitt', component: Mitt},
  {name: '5. $attrs', component: Attrs},
  {name: '6. provide_inject', component: ProvideInject},
  {name: '7. shallowRef_shallowReactive', component: Shallow},
  {name: '8. readonly', component: Readonly},
  {name: '9. toRaw_markRaw', component: ToRawMarkRaw},
  {name: '10. customRef', component: CustomRef},
]

function showComponent(componentItem: ComponentItem) {
  currentComponent.value = componentItem.component
}

</script>

<template>
  <div class="nav">
    <div class="left">
      <a href="https://cn.vuejs.org/tutorial" target="_blank">官方互动教程</a>

      <ul>
        <li v-for="componentItem in components" :key="componentItem.name">
          <button @click="showComponent(componentItem)">
            {{ componentItem.name }}
          </button>
        </li>
      </ul>
      <hr/>

      <ul>
        <li v-for="componentItem in ex_components" :key="componentItem.name">
          <button @click="showComponent(componentItem)">
            {{ componentItem.name }}
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