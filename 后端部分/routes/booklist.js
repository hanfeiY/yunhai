//引入 express 模块 
var express = require('express') 
//生成路由实例（函数） 
var router = express.Router() 
//引入“图书列表”集合模型-构造函数 
const booklistModel = require('../model/booklistModel') 

//定义请求响应处理函数 
//获取整个图书列表数据 
router.get('/getall',(req,res) => { 
//进行数据操作 
    booklistModel.find({},(err,data)=>{ 
        console.log('find 数据成功') 
        res.json(data) 
    }) 
}) 
//获取某类图书列表 
router.get('/getall/:type',(req,res) => { 
    let typeParam = req.params.type 
    console.log('type=',typeParam) 
//进行数据操作 
    booklistModel.find({type:typeParam},(err,data)=>{ 
        console.log('条件 find()数据库,成功啦！') 
        res.json(data) 
    }) 
}) 
//暴露中间件（函数） 
module.exports = router