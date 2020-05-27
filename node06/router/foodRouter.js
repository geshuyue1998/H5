const  express=require('express')
const router=express.Router()
const foodModel=require('../db/model/foodModel')
const commentModel=require('../db/model/commentModel')
const objectId = require('mongodb').ObjectId;
var _id = objectId(_id);
// const name=User.findOne({nickname:"心兑"})
//  for(var food=foodModel.find({"authorname":User.nickname}); post.hasNext();){
// printjson(post.next().title);
//  }

/**
 * @api {post} /food/add 添加美食
 * @apiName 添加美食
 * @apiGroup Food
 * @apiParam {String}  foodtitle 美食标题.
 * @apiParam {String}  foodclassify 美食类别.
 * @apiParam {String} foodmaterial 美食用料.
 * @apiParam {String} foodway 美食做法.
 * @apiParam {String} foodimg 美食图片.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/add',(req,res)=>{
  
    let {authorname,foodtitle,foodclassify,foodmaterial,foodway,foodimg}=req.body
    //判断参数是否正确

    foodModel.insertMany({authorname,foodtitle,foodclassify,foodmaterial,foodway,foodimg})
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'添加失败'})

    })
})
/**
 * @api {post} /food/getInfoByType 分类查询
 * @apiName 分类查询
 * @apiGroup Food
 * @apiParam {String} foodclassify 美食类别.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} las
 */
router.post('/getInfoByType',(req,res)=>{
    let {foodclassify}=req.body
    foodModel.find({foodclassify})
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    
    })
})

/**
 * @api {post} /food/getInfoByKw 关键字查询
 * @apiName getInfoByKw
 * @apiGroup Food
 * @apiParam {Number} kw 关键字.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByKw',(req,res)=>{
    //$set $gte $or $and $regex regexp
    let {kw}=req.body 
    let reg=new RegExp(kw)//创建正则表达式 匹配关键字
   // foodModel.find({age:{$gte:16}})
   //foodModel.find({_id})//名字模糊
  foodModel.find({$or:[{foodtitle:{$regex:reg}},{foodclassify:{$regex:reg}},{foodmaterial:{$regex:reg}},{foodway:{$regex:reg}}]})//名字，描述，类别模糊
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    
    })
})
/**
 * @api {post} /food/findid id查询
 * @apiName id查询
 * @apiGroup Food
 * @apiParam {Number} _id 美食id.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/find',(req,res)=>{
    let {_id}=req.body 
   foodModel.find({_id})//名字模糊
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    
    })
})
/**
 * @api {post} /food/del 美食删除
 * @apiName 美食删除
 * @apiGroup Food
 * @apiParam {Number} foodid 关键字.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/del',(req,res)=>{
    let {_id}=req.body 
    console.log(req.body);
    
    //单个删除
   foodModel.remove({_id})

    .then((data)=>{
        res.send({err:0,msg:'删除成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'删除失败'})
    
    })
})

/**
 * @api {post} /food/update 美食修改
 * @apiName 美食修改
 * @apiGroup Food
 * @apiParam {Number} _id 关键字.
 *  @apiParam {String}  foodtitle 美食名字.
 * @apiParam {String}  foodclassify 美食类别.
 * @apiParam {String} foodmaterial 美食用料.
 * @apiParam {String} foodway 美食做法.
 * @apiParam {String} foodimg 美食图片.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/update',(req,res)=>{
    let {_id,foodtitle,foodclassify,foodmaterial,foodway,foodimg}=req.body
    foodModel.updateOne({_id},{foodtitle,foodclassify,foodmaterial,foodway,foodimg})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'修改失败'})

    })
})


//分页
/**
 * @api {post} /food/getInfoByPage 分页查询
 * @apiName 分页查询
 * @apiGroup Food
 * @apiParam {Number} pageSize 每页数据条数.
 * @apiParam {Number} page 哪一页.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByPage',(req,res)=>{
    let pageSize=req.body.pageSize||3  //如果用户不传参数，默认为3
    let page=req.body.page||1
    let count=0
    foodModel.find()
    .then((list)=>{
        count=list.length//获取总的数据条数
        return foodModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
    })
    .then((data)=>{
        // res.send({err:0,msg:'分页查询成功',list:data})
        let allpage=Math.ceil(count/pageSize)//向上取整总页数
        res.send({err:0,msg:'分页查询成功',info:{list:data,count:count,allpage:allpage}})
    })
    .catch(()=>{
        res.send({errcount:-1,msg:'分页查询失败'})
    })
})

/**
 * @api {post} /food/count 获取美食数量
 * @apiName 获取美食数量
 * @apiGroup Food

 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/count',(req,res)=>{
    //let {userid}=req.body
    foodModel.countDocuments({})
    .then((data)=>{
        res.send({err:0,msg:'统计成功',count:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'统计失败'})

    })
})
/**
 * @api {post} /food/comment 评论
 * @apiName 评论
 * @apiGroup Food
 @apiParam {Number} foodid 美食id.
 * @apiParam {String} coursename 评论人.
  * @apiParam {String} coconnect 评论内容.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/comment',(req,res)=>{

    let {foodid,userid,coconnect}=req.body
    //判断参数是否正确
console.log(req.body);

commentModel.insertMany({foodid,userid,coconnect})
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'添加失败'})

    })
})
/**
 * @api {post} /food/delcomment 评论删除
 * @apiName 评论删除
 * @apiGroup Food
 @apiParam {Number} _id 评论id.
 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/delcomment',(req,res)=>{

    let {_id}=req.body 
    console.log(req.body);
    
    //单个删除
   commentModel.remove({_id})

    .then((data)=>{
        res.send({err:0,msg:'删除成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'删除失败'})
    
    })
})

/**
 * @api {post} /food/commentcount 获取评论数量
 * @apiName 获取评论数量
 * @apiGroup Food

 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/commentcount',(req,res)=>{
    //let {userid}=req.body
commentModel.countDocuments({})
    .then((data)=>{
        res.send({err:0,msg:'统计成功',count:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'统计失败'})

    })
})

/**
 * @api {post} /food/commentKw 评论关键字查询
 * @apiName commentKw
 * @apiGroup Food
 * @apiParam {Number} kw 关键字.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/commentKw',(req,res)=>{
    let {kw}=req.body 
    let reg=new RegExp(kw)//创建正则表达式 匹配关键字
   // foodModel.find({age:{$gte:16}})
   //foodModel.find({_id})//名字模糊
  commentModel.find({$or:[{coconnect:{$regex:reg}}]})//名字，描述，类别模糊
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    
    })
})

//分页
/**
 * @api {post} /food/getInfoByPageC 评论分页查询
 * @apiName 评论分页查询
 * @apiGroup Food
 * @apiParam {Number} pageSize 每页数据条数.
 * @apiParam {Number} page 哪一页.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByPageC',(req,res)=>{
    let pageSize=req.body.pageSize||3  //如果用户不传参数，默认为3
    let page=req.body.page||1
    let count=0
    commentModel.find()
    .then((list)=>{
        count=list.length//获取总的数据条数
        return commentModel.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
    })
    .then((data)=>{
        // res.send({err:0,msg:'分页查询成功',list:data})
        let allpage=Math.ceil(count/pageSize)//向上取整总页数
        res.send({err:0,msg:'分页查询成功',info:{list:data,count:count,allpage:allpage}})
    })
    .catch(()=>{
        res.send({errcount:-1,msg:'分页查询失败'})
    })
})

module.exports=router
