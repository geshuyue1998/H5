const mongoose=require('mongoose')
const userModel=require('./userModel')
const topicModel=require('./topicModel')
//scheme对象
//创建一个和集合相关的scheme对象 类似表头
//const userSchema = mongoose.Schema;//获取schema对象
var foodSchema = new mongoose.Schema({
    // foodid:{type:Number,required:true},
    // userid:[{type:Number,ref: 'User'}],
    authorname:[{type:String,ref: 'User'}],
    foodtitle:{type:String,required:true},
    foodclassify:{type:String,required:true},
    foodmaterial:{type:String,required:true},
    foodway:{type:String,required:true},
    foodimg:{type:String,required:true}

});

//将scheme对象转化为数据模型
var Food = mongoose.model('foods',foodSchema);//该数据对象和集合关联（’集合名‘，schema对象）
module.exports=Food
