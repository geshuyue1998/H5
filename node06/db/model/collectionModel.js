const mongoose=require('mongoose')
const userModel=require('./userModel')
var collectionSchema = new mongoose.Schema({
    // collectionid: mongoose.Schema.Types.ObjectId,
    userid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    cocontent:{type:String,required:true},
    codate:{type:Date,required:true},
})
//将scheme对象转化为数据模型
var Collection = mongoose.model('collections',collectionSchema);
module.exports=Collection