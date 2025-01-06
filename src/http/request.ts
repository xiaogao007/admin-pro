import axios from "axios";
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    params: {
        api_key: "8e8c4e5b8c5f4e5b8c5f4e5b8c5f4e5b",
    },
    timeout: 10000,
})
//axios请求拦截器
request.interceptors.response.use(
    (config) => {
        return config;
    }, error => {
        return Promise.reject(error)
    })
//axios响应拦截器
request.interceptors.request.use(response=>{
    return response.data;
},error=>{
    
}
)
export default request;