//bookList API
const mongoose = require('mongoose')
//引入数据库连接函数
const connectDB = require('./db/conn_mongo')

// //引入约束对象
// const bookListModel = require('./model/booklistModel')
// const orderlistModel = require('./model/orderlistModel')


// const bodyParser = require('body-parser')
// const jsonParser = bodyParser.json()

//导入express接口
const express =require('express')
//创建express服务器实例
const app = express()
//导入跨域共享中间件
const cors = require('cors')
//使用跨域共享中间件
app.use(cors())

//引入路由
const booklistRouter = require('./routes/booklist')
const orderlistRouter = require('./routes/orderlist')
//路由中间件
app.use('/booklist',booklistRouter)
app.use('/orderlist',orderlistRouter)

app.get('/',(req,res) =>{   
  res.send(`
    <h3>欢迎访问图书信息API</h3>
  `)
})
connectDB(()=>{
  //创建并启动服务器
  const server = app.listen(3000,() => {
    console.log("服务器成功启动了，可以访问 http://127.0.0.1:3000/")
  })  
})
