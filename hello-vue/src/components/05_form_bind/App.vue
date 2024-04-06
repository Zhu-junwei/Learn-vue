<script setup>
import { ref } from 'vue'

const text = ref('')
const text1 = ref('')
const textareaMsg = ref('')
const checkedBox = ref('true')
const checkedNames = ref([])
const picked = ref('')
const selected = ref('')
const multiSelected = ref([])

const options = ref([
    { text: 'One', value: 'A' },
    { text: 'Two', value: 'B' },
    { text: 'Three', value: 'C' }
])

function onInput(e) {
    text.value = e.target.value
}
</script>

<template>
    <h2>v-bind 和 v-on 表单和数据的双向绑定</h2>
    <input :value="text" @input="onInput" placeholder="Type here">
    <span>{{ text }}</span>

    <h2>v-model 表单和数据的双向绑定</h2>
    <input v-model="text1" placeholder="Type here">
    <span>{{ text1 }}</span>

    <h2>多行文本</h2>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ textareaMsg }}</p>
    <textarea v-model="textareaMsg" placeholder="add multiple lines"></textarea>

    <h2>复选框</h2>
    <input type="checkbox" id="checkbox" v-model="checkedBox" />
    <label for="checkbox">{{ checkedBox }}</label>

    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>


    <h2>单选按钮</h2>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>


    <h2>单选按钮</h2>
    <div>Selected: {{ selected }}</div>

    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <h2>多选</h2>
    <div>Selected: {{ multiSelected }}</div>
    <select v-model="multiSelected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <select v-model="multiSelected" multiple>
        <option v-for="option in options" :value="option.value">
            {{ option.text }}
        </option>
    </select>

</template>