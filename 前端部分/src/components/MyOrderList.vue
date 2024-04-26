<!-- 组件的模板 -->
<template>
    <div>
        <h4>订单列表</h4>
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>单价（元）</th>
                    <th>数量</th>
                    <th>总价（元）</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- 订单列表渲染 -->
                <tr v-for="(order,index) in orderList" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{order.title}}</td>
                    <td>{{order.price}}</td>
                    <td>{{order.num}}</td>
                    <td>{{order.num*order.price}}</td>
                    <td>
                        <button @click="deleteOrder(index)">删除订单</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:'MyOrderList',
        data() {
            return{
                orderList:[]
            }
        },
        mounted() {
            //读后台数据
            this.getData()           
        },        
        methods: {
            //删除订单
            deleteOrder(index){
                
                axios.post('http://127.0.0.1:3000/orderlist/deleteone',{
                    id:this.orderList[index]._id
                })
                .then(res => {
                    console.log(res.data.msg)
                    //更新订单数据
                    this.getData()
                })
                .catch(err => {
                    console.log(err)
                    console.log('发送删除订单请求，服务端未响应!!')
                })
            },
            getData(){
                // console.log('开始读数据')
                axios.get('http://127.0.0.1:3000/orderlist/getall')
                .then(res=>{
                    console.log("读订单数据，成功返回：",res.data)
                    this.orderList = res.data
                })
                .catch(err=>{
                    console.log(err)
                })  
            }
        }
    }

</script>
<style scoped>
    div{
        color:rgb(34, 35, 35);
        background-color: rgba(243, 240, 255, 0.601);
    }
    /* 表格样式 */
    h3{
        color:rgb(200, 21, 24);
    }
    h4{
        color:rgba(10, 70, 134, 0.67);
    }      
</style>