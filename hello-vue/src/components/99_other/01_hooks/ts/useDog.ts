import {ref} from 'vue'
import axios from 'axios'


export default function () {

    const dogList = ref<Array<string>>([])

    async function getDog() {

        try {
            const result = await axios.get('https://dog.ceo/api/breeds/image/random');
            dogList.value.push(result.data.message);
        } catch (err) {
            console.error(err);
        }
    }

    return {dogList, getDog}
}
