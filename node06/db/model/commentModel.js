const mongoose=require('mongoose')
//const userModel=require('./userModel')
//const foodModel=require('./foodModel')
var commentSchema = new mongoose.Schema({
    // commentid:mongoose. Schema.Types.ObjectId,
  foodid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Food' }],
//   cousername:[{type:String,ref: 'User'}],
userid: [{ type:mongoose. Schema.Types.ObjectId, ref: 'User' }],

  coconnect:{type:String,required:true},
   //commentdate:{type:Date,required:true},
})
//将scheme对象转化为数据模型
var Comment = mongoose.model('comments',commentSchema);
module.exports=Comment