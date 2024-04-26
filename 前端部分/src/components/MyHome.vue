<template>
    <div>
        <h4>首页</h4>
        <p>{{title}}</p>
        <img :src="imgSrc1" >
        <img :src="imgSrc2" > 
    </div>
</template>
<script>
    export default {
        name:'MyHome',
        data() {
            return {
                title:'今日新书推荐:《三体》、《围城》',
                imgSrc1:require('../assets/images/th.jpg'),
                imgSrc2:require('../assets/images/wc.jpg')
            }
        } 
    }
</script>
<style scoped>
    div{
        color:rgba(128, 7, 126, 0.726);
        background-color: rgb(242, 245, 241);
    }
    h4{
        color:rgba(14, 24, 21, 0.425);
    }
    img{
        list-style-type: none;
        float: center;
        text-align: left; 
        width: auto;
        height: auto;
        margin: 10px;
    }
</style>