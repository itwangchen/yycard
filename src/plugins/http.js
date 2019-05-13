// 开发Vue插件
import axios from 'axios'

// import {
    // Message
// } from 'element-ui';

const MyHttpServer = {}
MyHttpServer.install = (Vue) => {
    // 统一配置baseUrl
    axios.defaults.baseURL = 'http://www.yycms.com/admin'
    // 添加请求拦截器
    // 在发送请求之前 会先来到下面的cb
    axios.interceptors.request.use(function(config) {
        // console.log(config)
        // console.log(config.url);
        if (config.url !== 'login') {
            // config参数 headers头部 url标识
            const AUTH_TOKEN = localStorage.getItem('token')
            config.headers['Authorization'] = AUTH_TOKEN
        }
        // 在发送请求之前做些什么
        return config;
    }, function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });
    // 添加响应拦截器
    axios.interceptors.response.use(function(response) {
        console.log(response);
        let {
            meta: {
                msg,
                status
            }
        } = response.data
        if (status !== 200 && status !== 201) {
            // Message.warning(msg)
        }


        // 对响应数据做点什么
        return response;
    }, function(error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });
    // 除了登录 其他请求 需要设置头部信息
    // 需要先设置头部 然后再发请求
    // const AUTH_TOKEN = localStorage.getItem('token')
    // this.$http.defaults.headers.common['Authorization'] = AUTH_TOKEN
    // 发请求 -> 获取数据
    // 小明 ???去 超市买东西
    //设置头部  ?? 发请求    ->获取数据

    // 添加实例方法
    Vue.prototype.$http = axios
}

// 导出
export default MyHttpServer