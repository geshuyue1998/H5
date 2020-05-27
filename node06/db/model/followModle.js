const mongoose=require('mongoose')
const userModel=require('./userModel')
var followSchema = new mongoose.Schema({
    // followid:mongoose. Schema.Types.ObjectId,
    userid: [{ type:mongoose. Schema.Types.ObjectId, ref: 'User' }],
   
})
//将scheme对象转化为数据模型
var Follow = mongoose.model('follows',followSchema);
module.exports=Follow