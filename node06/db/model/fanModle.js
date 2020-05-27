const mongoose=require('mongoose')
const userModel=require('./userModel')
var fanSchema = new mongoose.Schema({
    // fanid:mongoose. Schema.Types.ObjectId,
    userid: [{ type:mongoose. Schema.Types.ObjectId, ref: 'User' }],
   
})
//将scheme对象转化为数据模型
var Fan = mongoose.model('fans',fanSchema);
module.exports=Fan