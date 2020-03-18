import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        // baseURL: 'http://106.54.54.237:8000/api/wh'
        // timeout: 5000
    })

    instance.interceptors.request.use(config => {
        //  console.log(config);  //拦截请求
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(result => {
        //  console.log(result.data);  //拦截响应
        return result
    }, err => {
        console.log(err)
    })
    return instance(config)
}