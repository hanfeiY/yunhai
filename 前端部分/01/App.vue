<template>
  <h4 style="color:green">{{bookMsg}}</h4>
  <MyBook :msg="bookInfo"></MyBook>
</template>

<script>
import MyBook from './components/MyBook.vue'
export default{
    name:'App',
    data() {
        return {
            bookMsg:'欢迎访问Vue根组件!',
            bookInfo:'图书信息'
        }
    },
    components:{
        MyBook
    }
}

</script>

<style>
div{
        color:rgb(7, 53, 53);
        background-color: rgb(144, 211, 211);
    }   
</style>
