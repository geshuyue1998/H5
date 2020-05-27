const mongoose=require('mongoose')
const userModel=require('./userModel')
var messageSchema = new mongoose.Schema({
    messageid:mongoose. Schema.Types.ObjectId,
    messuserid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    userid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    mcontent:{type:String,required:true},
})
//将scheme对象转化为数据模型
var Message = mongoose.model('messages',messageSchema);
module.exports=Message