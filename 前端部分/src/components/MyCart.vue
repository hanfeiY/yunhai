<template>
    <div>
        <h3 style="color: rgb(74, 180, 232);">图书购物车</h3>
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>勾选</th>
                    <th>序号</th>
                    <th>书名</th>
                    <th>单价</th>
                    <th>购买数量</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(book,index) in cartList" :key="index">
                    <td><input type="checkbox" v-model="book.check"></td>
                    <td>{{index+1}}</td>
                    <td>{{book.name}}</td>
                    <td>￥{{book.price}}</td>
                    <td>
                        <button :disabled="book.num===0" @click="book.num--">-</button>
                        {{book.num}}
                        <button @click="book.num++">+</button>
                    </td>
                    <td>
                       <button @click="deleteBook(index)">删除</button>
                    </td>
                    <td>
                       <button @click="sendData">提交</button>
                    </td>

                </tr>
            </tbody>
        </table>
        <span>总价：{{totalPrice}}元（人民币）</span>        
    </div>
</template>
<script>
    // 引入useCartStore
    import axios from 'axios'
    import {useCartStore} from '../store/cartStore'
    export default {
        name:'MyCart',
        data() {
            return {
                cartList:[],
                orderList:[]                 
            }
        },
        created() {
            //获取Store实例对象
            this.cartStore = useCartStore()
            //获取cartStore.cartList的地址
            this.cartList = this.cartStore.cartList
        },
        methods: {
            sendData(){ 
//遍历购物车数组，生成要发送的"订单数组" 
                this.cartList.forEach(book => { 
                    let order = {title:'',price:0,num:1} 
                    if(book.check){ 
                        order.title = book.name 
                        order.price = book.price 
                        order.num = book.num 
                        this.orderList.push(order) 
                    } 
        }) 
        axios.post('http://127.0.0.1:3000/orderlist/insertmany', this.orderList) 
        .then(res => { 
            console.log('res:',res) 
            this.cartStore.cartList = [] 
            this.cartList = this.cartStore.cartList 
            this.$router.push('/orderlist') 
        }) 
        .catch(err =>{ 
            console.log(err) 
            console.log('数据发送失败') 
        }) 

    } 
},
            computed:{
                totalPrice(){
                    let totalPrice = 0
                    //遍历数组，计算总价
                    this.cartList.forEach(book => {
                        if(book.check){
                            totalPrice = totalPrice+book.price*book.num
                        }
                    })
                    return totalPrice                    
                }
            }
    }
</script>
<style scoped>
        div{
        color:rgb(34, 35, 35);
        background-color: rgba(245, 255, 240, 0.574);
    }
    /* 表格样式 */
    h3{
        color:rgb(200, 21, 24);
    }
    h4{
        color:rgb(10, 134, 128);
    } 
</style>