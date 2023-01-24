import axios from "axios";
import router from "@/router";

axios.defaults.baseURL = 'https://api.template.maxvel.pp.ua'

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
        if (error.response.data.message === 'Unauthenticated.'){
            api.post('/api/auth/logout')
                .then(res => {
                    localStorage.removeItem('token')
                    router.go()
                })
        }
    })


export default api