const mongoose=require('mongoose')
var topicSchema = new mongoose.Schema({
    topocconnect:{type:String,required:true},
    topicimg:String,

})
//将scheme对象转化为数据模型
var Topic = mongoose.model('topics',topicSchema);
module.exports=Topic