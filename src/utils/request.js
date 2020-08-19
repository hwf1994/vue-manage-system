import axios from 'axios';
//设置
const http = axios.create({
    //aprocess.env.NODE_ENV === 'development', //来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
//  baseURL: 'http://192.168.0.100:8084/api/',
    //判断是否是开发环境 development
    // if(process.env){
    //     baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    // }
    //判断是否是测试环境 
    //else if(){

    // }
    //判断是否为上线环境
    //else{

    // },
    //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//  timeout: 5000
});
//请求拦截器
http.interceptors.request.use(
    config => {
//    	var encode="USERID "+window.btoa('9'+":"+"dfsdfsadfasdf")
//    	var encode=window.btoa('9'+":"+"dfsdfsadfasdf")
//    	console.log(window.atob(encode))
//  	if(config.url.match(/login/)){   //当打印pdf文件时
//			return config
//		}
//		if(Cookies.get("Aztec")){   //登录后添加验证签名
//			 config.headers['token']= JSON.parse(Cookies.get("Aztec")).token;  
//	    }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
//响应拦截器
http.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default http;


/**
 * Get request
 * Get 请求
 * @param {String} url 
 * @param {String} params 
 */
//export const get = (url, params) => {
//  return new Promise((resolve, reject) => {
//      axios({
//              url,
//              method: 'get',
//              params
//          })
//          .then(res => {
//              resolve(res)
//          })
//          .catch(err => {
//              reject(err)
//          })
//  })
//}
//
///**
// * Post request
// * Post 请求
// * @param {String} url 
// * @param {String} params 
// */
//export function post(url, data) {
//  return new Promise((resolve, reject) => {
//      axios({
//              url,
//              method: 'post',
//              headers: {
//                  'Content-Type': 'application/json'
//              },
//              data
//          })
//          .then(res => {
//              resolve(res)
//          })
//          .catch(err => {
//              reject(err)
//          })
//  })
//}