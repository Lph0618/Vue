//封装在index.vue中需要的发送的axios

//引入axios文件
import axios from "axios"
//解构出config封装的axios基础路径
import {baseURL} from "../config.js"

//发送axios函数,调用这个函数,就返回一个Promise对象
function getIndex(){
  return new Promise(
    //对象中包含一个函数,传入需要的值,发送axios请求
    function(resolve,reject){
      axios.get(baseURL + '/index').then( result=>{
        resolve(result.data)
      })
    }
  )
}

//抛出封装的函数
export {
  getIndex
}