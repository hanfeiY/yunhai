<!-- 组件的模板 -->
<template>
    <div>
        <h4>图书列表</h4>
        <!-- 图书种类选择下拉框 -->

        图书种类：
        <select v-model="currentType">
            <option v-for="item in bookType" :key="item.id" :value="item.id" >
                {{item.displayName}}
            </option>
        </select>
        <!-- 书名过滤输入框 -->
        书名：<input type="text" placeholder="请输入书名" v-model.lazy="keyWord" maxlength="3">  
        <table border="1" cellspacing="0">
            <thead>
                <tr>
                    <th>序号</th>
                    <th>书名</th>
                    <th>单价（元）</th>
                    <th>购买操作</th>
                </tr>
            </thead>
            <tbody>
                <!-- 图书列表渲染 -->
                <tr v-for="(book,index) in bookListFilter" :key="book.id">
                    <td>{{book.bookid}}</td>
                    <td>{{book.title}}</td>
                    <td>{{book.price}}</td>
                    <td>
                        <button @click="addCart(index)">添加到购物车</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    import {useCartStore} from '../store/cartStore'
    import axios from 'axios'
    export default {
        name:'MyBookList',
        data() {
            return{
                //选择的图书类别
                currentType:'000',
                keyWord:'',
                // 图书类别数组
                bookType:[
                    {id:'000',displayName:'全部类型'},
                    {id:'001',displayName:'个人成长类'},
                    {id:'002',displayName:'文学类'},
                    {id:'003',displayName:'理财类'},
                    {id:'004',displayName:'读写类'},
                    {id:'005',displayName:'学习方法类'},
                    {id:'006',displayName:'时间管理类'},
                ],
                cart:{name:'',price:0,num:1,check:true},
                cartList:[],          
                //图书List
                bookList:[
                    {bookid:1,type:'001',title:'《高效能人士的七个习惯》',price:30},
                    {bookid:2,type:'001',title:'《影响力》',price:60},
                    {bookid:3,type:'001',title:'《把时间当做朋友》',price:30},
                    {bookid:4,type:'002',title:'《平凡的世界》',price:60},
                    {bookid:5,type:'002',title:'《简爱》',price:25},
                    {bookid:6,type:'002',title:'《黄金时代》',price:35},
                    {bookid:7,type:'003',title:'《穷爸爸，富爸爸》',price:40},
                    {bookid:8,type:'003',title:'《小狗钱钱》',price:70},                         
                    {bookid:9,type:'003',title:'《管道的故事》',price:90},                             
                    {bookid:10,type:'003',title:'《投资的重要性》',price:60},                             
                    {bookid:11,type:'004',title:'《如何读一本书》',price:30},                             
                    {bookid:12,type:'004',title:'《阅读的力量》',price:35},                             
                    {bookid:13,type:'004',title:'《学会写作》',price:25},                             
                    {bookid:14,type:'005',title:'《刻意练习》',price:40},                             
                    {bookid:15,type:'005',title:'《精进》',price:45},                            
                    {bookid:16,type:'005',title:'《好好学习》',price:60},                             
                    {bookid:17,type:'006',title:'《奇特的一生》',price:36},                             
                    {bookid:18,type:'006',title:'《吃掉那只青蛙》',price:42},                             
                ],
                
            }
        },
       
        created() {
            this.cartList = useCartStore().cartList
        },
        mounted() {
            console.log('开始读数据')
            axios.get('http://127.0.0.1:3000/booklist/getall')
            .then(res=>{
                console.log("成功返回数据：",res.data)
                this.bookList=res.data
            })
            .catch(err=>{
                console.log(err)
            })
            console.log('开始读数据')
            axios.get('http://127.0.0.1:3000/orderlist/getall')
            .then(res=>{
                console.log("成功返回数据：",res.data)
                this.orderList=res.data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        methods: {
            // 添加购物车
            addCart(index){
                console.log(index)
                this.cart.name = this.bookListFilter[index].title
                this.cart.price = this.bookListFilter[index].price
                this.cart.num = 1
                this.cart.check = true
                console.log(this.cart)
                this.cartList.push(this.cart)
                console.log(this.cartList)
                this.$router.push('/cart')
            }
        },    
        computed:{
            //过滤图书列表-计算属性
            bookListFilter(){
                let booktype = this.currentType
                let keyword = this.keyWord
                console.log(booktype,keyword)
                if(this.currentType === "000") booktype = ''
                return  this.bookList.filter((d)=>{
                        return d.type.indexOf(booktype) !== -1 && d.title.indexOf(keyword) !== -1
                })                    
            }
        }
    }

</script>
<style scoped>
    div{
        list-style-type: none;
        float: center;
        text-align: left; 
        color:rgb(34, 35, 35);
        background-color: rgba(255, 249, 240, 0.601);
    }
    /* 表格样式 */
    h3{
        color:rgb(200, 21, 24);
    }
    h4{
        color:rgb(10, 134, 128);
    }      
</style>