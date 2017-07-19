import {httpConfig} from './httpConfig'
import axios from 'axios'
const merge = require('webpack-merge')

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios({
         method : 'post',
         url : httpConfig.baseUrl + url,
         params : merge(params,{ownership:"0019"}),
         timeout : httpConfig.timeout,
         headers : {
           'Content-Type' : 'application/json;charset:utf-8;'
         }
       }).then(response => {
           if(response.data){
              if (response.data.responseCode == "100000") {
                  resolve(response.data);
              }else{
                  reject({responseCode : response.data.responseCode,message : response.data.message
                  });
              }
           }else{
               reject({responseCode : "9999",message : "系统异常"});
           }
        }, err => {
           reject({responseCode : "9999",message : "系统异常"});
        }).catch((error) => {
           reject({responseCode : "9999",message : "系统异常"});
        })
    })
}
export default {
  getList(params){ // 根据菜单ID查询文章列表
     return fetch("article/pagedata",params)
  },
  getDetail(params){ // 获取文章详情
     return fetch("article/detail",params)
  },
  getGasKnowledge(){ // 查询燃气知识
    return fetch("article/queryGasKnowledge",{
      id : 6
    })
  }
}
