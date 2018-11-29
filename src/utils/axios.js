import axios from "axios"

// 响应拦截
axios.interceptors.response.use(res => {
    // 报错执行 axios then 方法错误的回调，成功返回正确的数据
    return res.data
}, err => {
    // 如果 token 验证失败则跳回登陆页，并执行 axios then 方法错误的回调
    // window.location.href="/"
    // if (err.response.status === 401) {
    //     // router.history.push("/login");
    // }
    return Promise.reject("Not Allowed");
});

// 请求拦截，用于将请求统一带上 token
axios.interceptors.request.use(config => {
    // 在 localStorage 获取 token
    let token = localStorage.getItem("token");

    // 如果存在则设置请求头
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default axios
