import axios from "axios";

axios.defaults.baseURL = 'http://api.template.maxvel.pp.ua'
import router from "@/router";

const api = axios.create();

api.interceptors.request.use(config => {
        if (localStorage.getItem('token')) {
            config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
        }
        return config
    },
    error => {
    })
//end request

api.interceptors.response.use(config => {
        if (localStorage.getItem('token')) {
            config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
        }
        return config
    },
    error => {
        console.log(error.response.data.message)
        if (error.response.data.message === 'Token has expired') {
            return axios.post('/api/auth/refresh', {}, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                localStorage.setItem('token', res.data.access_token)

                error.config.headers.authorization = `Bearer ${res.data.access_token}`

                return api.request(error.config)
            })
        }
        // if (error.response.status === 403){
        //     router.push('/login')
        // }
    })


export default api