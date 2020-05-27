const mongoose=require('mongoose')
const userModel=require('./userModel')
var feedbackSchema = new mongoose.Schema({
    // feedbackid:mongoose. Schema.Types.ObjectId,
    userid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    fcontent:{type:String,required:true},
    feedbackdate:{type:Date,required:true},
})
//将scheme对象转化为数据模型
var Feedback = mongoose.model('feedbacks',feedbackSchema);
module.exports=Feedback