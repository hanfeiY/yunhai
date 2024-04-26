<template lang="">
    <div class="menu">
            <li>
                <router-link  to="/home" class="link" active-class="active" >首页</router-link>
            </li>
            <li>
                <router-link  to="/login" class="link" active-class="active" >用户登录</router-link>
            </li>
            <li>
                <router-link to="/booklist" class="link" active-class="active">书单</router-link>
            </li>
            <li>
                <router-link to="/newslist" class="link" active-class="active">图书</router-link>
            </li>
            <li>
                <router-link to="/cart" class="link" active-class="active">购物车</router-link>
            </li>
            <li>
                <router-link to="/orderlist" class="link" active-class="active">物品浏览</router-link>
            </li>
    </div> 
</template>
<script>
    export default {
        name:'MyHeader'
    }
</script>
<style scoped>
    .menu{
        color:rgb(35, 34, 35);
        /* background-color: rgba(210, 180, 238, 0.137); */
        height: 30px;
    }
    .link{
      color: rgb(22, 23, 23);
    }
    .link:hover{
      color: rgb(245, 43, 43);
    }
    .active {
      color: rgb(221, 158, 42);
    }
    li {
        width: 20%;
        list-style-type: none;
        float: left;
        text-align: left; 
        margin-right: 10px;
    }

</style>