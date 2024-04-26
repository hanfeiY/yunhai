<template>
    <div>
     <h4>MyBook组件{{msg}}</h4>   
     <p>书名:{{title}}</p>   
     <p>作者:{{author}}</p>   
    </div>
</template>
<script>
    export default{
        name:'MyBook',
        props:['msg'],
        data() {
            return {
                title:'贫穷的本质',
                author:'班纳吉'
            }
        }
    }
</script>
<style>
    div{color:rgb(7,128,111)}
</style>