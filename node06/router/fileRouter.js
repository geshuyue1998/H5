const  express=require('express')
const router=express.Router()
const multer=require('multer')
//const fileModel=require('../db/model/fileModel')
/**
 * @api {post} /file/upload/ 上传文件
 * @apiName 上传文件
 * @apiGroup File
 * @apiParam {String} hehe 文件.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
var storage=multer.diskStorage({
    //设置上传图片文件路径，uploads文件会自动创建
    destination:function(req,file,cb){
        cb(null,'./static/image')
    },
    //给上传文件重命名，获取添加的后缀名
    filename: function (req,file,cb){
        console.log('---',file);
        //获取后缀名
        //let ext=file.originalname.split('.')[1];//这种情况下可能会出现没有后缀的情况，如xxx.cc.png
        let exts=file.originalname.split('.');
        let ext=exts[exts.length-1];
        let tepname=(new Date()).getTime()+parseInt(Math.random()*9999);
        //拼接名字
        cb(null,`${tepname}.${ext}`);
        //给图片加上时间戳格式防止重命名
        //比如把abc.jpg图片切割为数组[abc,jpg]，然后用数组长度-1来获取后缀名
        //cb(null,file.fieldname + '-' + DataCue.now()+ '.' +fileFormat[fileFormat.length-1]);
       
    }
});
var upload=multer({
    storage:storage
});

router.post('/upload',upload.single('hehe'),(req,res)=>{
    console.log(res.file);
    console.log(req.file);
    let {size,mimetype,path}=req.file
    let types=['jpg','jpeg','png','gif']//允许上传的数据类型
    
    if(mimetype){var tmpType=mimetype.split('/')[1]}
    //因为遍历的时候，第一次会得到一个空值，这个是通过输出遍历的对象知道的，
    //最后我在使用split()的时候加了一个判断（就是判断要切割的字符串是不是存在）
    //let tmpType=minetype.split('/')[1]
    if(size>1000000){
       return res.send({err:-1,msg:'尺寸过大'})
    }else if(types.indexOf(tmpType)== -1){//如果要检索的字符串值没有出现，则该方法返回 -1。
       return res.send({err:-2,msg:'媒体类型错误'})
    }else{
        let url=`/public/image/${req.file.filename}`
        res.send({err:0,msg:'上传OK',img:url})
    }
    //hehe:要上传图片数据的key值，必须和前端保持统一
    // {
    //     'hehe':图片数据
    // }
})
module.exports=router

