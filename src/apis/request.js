import ls from '../utils/localStorage'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
// 设置超时
fly.config.timeout = 7000

fly.interceptors.request.use((request) => {
    // 给所有请求添加自定义header，带上token信息让服务器验证用户登陆
    request.headers['Authorization'] = 'Bearer '+ ls.getItem('access_token');
    // console.log('flyio发请求,request为', request);
    // showLoading({
    //     title: '加载中...'
    // })
    return request
})

fly.interceptors.response.use(
    (response, promise) => {
        // hideLoading()
        return promise.resolve(response.data)
    },
    (err, promise) => {
        // hideLoading()
        showNotify(err.message)
        return promise.resolve()
    }
)
const request = fly

export default request
