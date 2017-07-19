import {httpConfig} from './httpConfig'
import axios from 'axios'
const merge = require('webpack-merge')


export default {
   post(url,data){
     return new Promise((resolve,reject)=>{
       axios({
        method : 'post',
        url : httpConfig.baseUrl + url,
        params : merge(data,{ownership:"0019"}),
        timeout : httpConfig.timeout,
        headers : {
          'Content-Type' : 'application/json;charset:utf-8;'
        }
      }).then(response => {
          if(response.data){
            if (response.data.responseCode == "100000") {
              resolve(response.data);
            }else{
              reject({
                responseCode : response.data.responseCode,
                message : response.data.message
              });
            }
          }else{
            reject({
              responseCode : "9999",
              message : "系统异常"
            });
          }
      }).catch(error=>{
        reject({
          responseCode : "9999",
          message : "系统异常"
        });
      })
    })
   }
}
