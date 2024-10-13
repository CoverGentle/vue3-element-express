import axios from 'axios'
import { ElMessage } from 'element-plus'

const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000
})


request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        config.headers.Authorization = token
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        const { code, data, msg } = response.data
        if (code !== 200) {
            ElMessage.error(msg)
            return Promise.reject(response.data)
        }
        return data
    },
    (error) => {
        return Promise.reject(error)
    }
)



export default request