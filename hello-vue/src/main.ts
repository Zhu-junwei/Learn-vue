import {createApp} from 'vue'
import App from './App.vue'
import router from "@/components/99_other/02_router/router";
import {createPinia} from 'pinia'

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
