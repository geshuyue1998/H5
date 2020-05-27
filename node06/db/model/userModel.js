const mongoose=require('mongoose')
//scheme对象
//创建一个和集合相关的scheme对象 类似表头
//const userSchema = mongoose.Schema;//获取schema对象
var userSchema = new mongoose.Schema({
    userid:{type:Number},
    us:{type:String,required:true},
    ps:{type:String,required:true},
    regdate:{type:Date},
    sex:{type:String},
    mail:{type:String},
    birthday:String,
    autograph:String,
    nickname:String,
    headimg:String
});
//将scheme对象转化为数据模型
var User = mongoose.model('users',userSchema);//该数据对象和集合关联（’集合名‘，schema对象）

module.exports=User