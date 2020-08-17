// import request from '../utils/request';

// export const fetchData = query => {
//     return request({
//         url: './table.json',
//         method: 'get',
//         params: query
//     });
// };

import http from '../utils/request'
//mock模拟数据接口
export const base_url_1 = 'http://rap2.taobao.org:38080/app/mock/262186'
    //用户登录接口
//export const login = params => post(`${base_url_1}/login`, params);
const api={
	login: params => http.post(`${base_url_1}/login`, params),
	getstudentlist: params => http.get(`./table.json`, params)
}
export default {...api}
