let mongoose = require('mongoose')
//使用mongoose.Schema()构造函数，创建Schema对象（我称之为约束对象），对文档进行约束
//文档中的字段必须符合模式的规定, 否则将不能正常操作
let booklistRule = new mongoose.Schema({
  title:{
    type:String,
    require:true          
  },
  price:{
    type:Number,
    require:true       
  },
  num:{
    type:Number,
    require:true
  }
},{collection:'orderlist',versionKey:false})
// "__v"是"versionKey"的简写，当每一个文档由 mongoose 
//创建时就会自动添加，代表这该文档的版本

//暴露对象模型
module.exports = mongoose.model('orderlist',booklistRule)