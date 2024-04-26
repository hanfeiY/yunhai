<!-- 根组件 -->
<template>
  <h3 style="color: rgb(8, 170, 188);">书店</h3>
  <MyHeader></MyHeader>
  <MyContent></MyContent>
</template>

<script>
  //1.引入组件
  import MyHeader from './components/MyHeader.vue'
  import MyContent from './components/MyContent.vue'
  export default {
    name: 'App',
    components: {
      //2.注册组件
      MyHeader,
      MyContent
    }
  }
</script>

<style>
 /* div{
    padding: 25px;
    margin: 15px;    
    border: solid 1px;
  }   */
</style>

