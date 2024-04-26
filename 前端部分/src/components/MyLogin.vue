<template>
    <div>
        <h3>{{ info }}</h3>
        <table>
            <caption>用户登录</caption>
            <tbody>
                <tr>
                    <td><label>用户名:</label></td>
                    <td><input type="text" v-model.trim="username"></td>
                </tr>
                <tr>
                    <td><label>密码:</label></td>
                    <td><input type="text" v-model.trim="password"></td>
                </tr>
                <tr>
                    <td cols="2">
                        <input type="submit" value="登录" @click="login">
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default{
        name:'MyLogin',
        data(){
            return{
                username:'',
                password:'',
                info:''//保存登录失败后的提醒信息
            }
        },
        methods:{
            login(){
                //实际场景中，这里应该通过AJAX向服务端发起请求来验证
                if(this.username == 'hanfei'&&this.password == '123456'){
                    sessionStorage.setItem("isAuth",true)
                    this.info = ""
                    //如果进入登录页面存在路由
                    if(this.$route.query.redirect){
                        let redirect = this.$route.query.redirect;
                        //跳转至进入登录页面的路由
                        this.$router.replace(redirect)
                    }else{
                        this.$router.replace('/')
                    }
                }
                else{
                    sessionStorage.setItem("isAuth",false)
                    this.username = ""
                    this.password = ""
                    this.info = "用户名或者密码错误"
                }
            }
        },
    }
</script>
<style scoped>
    div{
        float: center;
        color:rgb(114, 128, 7);
        background-color:rgb(242,245,241) ;
    }
</style>