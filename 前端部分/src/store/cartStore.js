// 引入函数defineStore()
import {defineStore} from 'pinia'
// 通过函数defineStore()，创建store
// defineStore("store的id",配置，将需要有pinia维护的数据，以对象的形式返回
export const useCartStore = defineStore('cart',{
    //和Vue组件中的data()类似
    state(){
        return{
            cartList:[
                // {name:'《JavaScript程序设计》',price:30,num:1,check:true},
                // {name:'《CSS3网页实战》',price:40,num:1,check:true}      
            ]
        }
    },
    getters:{

    },
    actions:{

    }
})