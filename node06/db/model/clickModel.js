const mongoose=require('mongoose')
const userModel=require('./userModel')
var clickSchema = new mongoose.Schema({
    // clickid:mongoose.Schema.Types.ObjectId,
    cluserid: [{ type:mongoose.Schema.Types.ObjectId, ref: 'User' }],
    clickdate:{type:Date,required:true},
})
//将scheme对象转化为数据模型
var Click = mongoose.model('clicks',clickSchema);
module.exports=Click