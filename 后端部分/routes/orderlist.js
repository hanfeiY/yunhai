//引入 express 模块 
const express = require('express') 
//生成路由实例（函数） 
const router = express.Router() 
//引入“图书订单”集合模型-构造函数 
const bookorderModel = require('../model/orderlistModel') 

//引入 body-parser 中间件 
const bodyParser = require('body-parser') 
//创建 application/json parser 
const jsonParser = bodyParser.json() 

//获取整个订单数据 
router.get('/getall',(req,res) => { 
//进行数据操作 
    bookorderModel.find({},(err,data)=>{ 
        console.log('订单数据，find 数据成功') 
        res.json(data) 
    }) 
}) 
//提交多条订单数据 
router.post('/insertmany',jsonParser,(req,res) => { 
    let orderlist = req.body 
    console.log(orderlist) 
    bookorderModel.insertMany(orderlist,(err,docs)=>{ 
        if (!err){ 
            console.log(docs) 
//必须有反馈，否则 axios.then()不执行 
            res.send('{"err": 0, "msg": "数据 post 成功"}') 
        }else{ 
            console.log(err) 
            res.send('{"err": -1, "msg": "数据 post 失败"}') 
        } 
    }) 
}) 
//删除 1 条订单数据 
router.post('/deleteone',jsonParser,(req,res) => { 
    let id = req.body.id 
    bookorderModel.deleteOne({_id:id},(err)=>{ 
    if (!err){ 

        console.log('删除订单数据成功！') 
//必须有反馈，否则 axios.then()不执行 
        res.send('{"err": 0, "msg": "服务端删除订单数据，成功！"}') 
    }else{
        console.log(err) 
        res.send('{"err": -1, "msg": "服务端删除订单数据，失败！"}') 
        } 
    }) 
}) 
//暴露中间件 5
module.exports = router 
