import {createApp} from 'vue'
import App from './views/app/App.vue'
import router from './router'
import axios from 'axios'
import store_home from "@/store/modules/home";

axios.defaults.baseURL = 'http://127.0.0.1:8000'

const app = createApp(App)

app.use(router)
app.use(store_home)
app.config.globalProperties.axios = axios
app.mount('#app')