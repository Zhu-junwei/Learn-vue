import {ref} from 'vue'

export default function () {

    const sum = ref<number>(0)

    function add() {
        sum.value++;
    }

    return {sum, add}
}
