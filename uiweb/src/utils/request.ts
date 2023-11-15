import axios, {AxiosInstance,AxiosError,AxiosResponse,AxiosRequestConfig} from 'axios';

const service:AxiosInstance = axios.create({
    baseURL:'http://192.168.0.102:7070',
    timeout:5000
})

// 请求拦截
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error:AxiosError) =>{
        console.log('!请求接口错误',error);
        return Promise.reject()
    }
)

//响应拦截
service.interceptors.request.use(
    (response:AxiosResponse) => {
        // if(response.status === 200){
        //     return response;
        // }else{
        //     Promise.reject()
        // }
        return response;
    },
    (error:AxiosError) =>{
        console.log('!响应接口错误',error);
        return Promise.reject()
    }
)

export default service;