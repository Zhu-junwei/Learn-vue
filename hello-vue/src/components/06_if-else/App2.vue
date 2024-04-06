<script setup>
import { ref } from 'vue'

const add = ref(true)

function toggle() {
    add.value = !add.value
}
</script>

<template>
    <button @click="toggle">toggle</button>
    <div v-if="add">
        <div class="addForm">
            <h1>Add new post</h1>
            <input type="text" /><br />
            <textarea /><br />
            <button>submit</button>
        </div>
    </div>
</template>

<style scoped>
.addForm {
    width: 300px;
    background-color: aqua;
}
</style>