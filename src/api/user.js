import {get, post } from '../utils/request'
//mock模拟数据接口
export const base_url_1 = 'http://rap2.taobao.org:38080/app/mock/262186'
    //用户登录接口
export const login = params => post(`${base_url_1}/login`, params);
//学员列表接口
export const getstudentlist = params => get(`./table.json`, params)