const  express=require('express')
const router=express.Router()
const User=require('../db/model/userModel')
const followModel=require('../db/model/followModle')
const feedbackModel=require('../db/model/feedbackModel')
const Mail=require('../utils/mail')
let codes={}//通过内存保存验证码
//console.log(Mail);
/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 用户密码.
 * @apiParam {String} code 邮箱验证码.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
//注册
router.post('/reg',(req,res)=>{
    let {us,ps,code}=req.body //获取数据
    if(us&&ps&&code){
        //判断验证码是否OK
        if(codes[us]!=code){return res.send({err:-4,msg:'验证码错误请重试'})}
        //检查用户是否已经存在
            User.find({us})
            .then((data)=>{
                if(data.length===0){
                    return User.insertMany({us:us,ps:ps})//用户名不存在，需要注册
                }else{
                    res.send({err:-3,msg:'用户名已存在'})
                }
        })
        .then(()=>{
            res.send({err:0,msg:'注册成功'})
        })
        .catch((err)=>{
            res.send({err:-2,msg:'注册失败'})
        })
    }else{
        return res.send({err:-1,msg:'参数错误'})
    }
    console.log(us,ps);
})

//登录
/**
 * @api {post} /user/login 用户登录
 * @apiName 用户登录
 * @apiGroup User
 *
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 用户密码.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/login',(req,res)=>{
    let {us,ps}=req.body
    if(!us||!ps) return res.send({err:-1,msg:'参数错误'})

    User.find({us,ps})
    .then((data)=>{
        if(data.length>0){
            res.send({err:0,msg:'登录成功'})
        }else{
            res.send({err:-2,msg:'用户或密码错误'})
        }
        console.log(data);
        
    })
    .catch((err)=>{
        res.send({err:-1,msg:'内部错误'})
         
    })
})
//发送邮箱验证码
/**
 * @api {post} /user/getMailCode 发送邮箱验证码
 * @apiName 发送邮箱验证码
 * @apiGroup User
 * @apiParam {String} mail 邮箱.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getMailCode',(req,res)=>{
    let {mail}=req.body//需要判断mail是否存在
    let code=parseInt(Math.random()*10000)//产生随机验证码
    Mail.send(mail,code)
    .then(()=>{
        codes[mail]=code//将邮箱和邮箱匹配的验证码保存在缓存中
        console.log(codes);
        res.send({err:0,msg:'验证码发送成功'})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'验证码发送失败'})
    })
    
})


//编辑用户资料
/**
 * @api {post} /user/update 编辑用户资料
 * @apiName 编辑用户资料
 * @apiGroup User
 * @apiParam {String} _id 用户id.
 * @apiParam {String} sex 性别.
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 密码.
 * @apiParam {Date} birthday 生日
 * @apiParam {String} nickname 昵称.
 * @apiParam {String} autograph 个性签名.
 * @apiParam {String} headimg 头像.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/update',(req,res)=>{
    let {_id,sex,us,ps,birthday,nickname,autograph,headimg}=req.body
    User.update({_id}, {$set:{sex,us,ps,birthday,nickname,autograph,headimg}})
    .then((data)=>{
        res.send({err:0,msg:'修改成功',list:data})
        
    })
    .catch(()=>{
        res.send({err:-1,msg:'修改失败'})
    })
})


//添加用户
/**
 * @api {post} /user/add 添加用户
 * @apiName 添加用户
 * @apiGroup User
 * @apiParam {String} us 用户名.
 * @apiParam {String} ps 密码.
 * @apiParam {String} sex 性别.
 * @apiParam {String} mail 邮箱.
 * @apiParam {Date} birthday 生日
 * @apiParam {String} nickname 昵称.
 * @apiParam {String} autograph 个性签名.
 * @apiParam {String} headimg 头像.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/add',(req,res)=>{
    let {us,ps,sex,mail,birthday,nickname,autograph,headimg}=req.body
    User.insertMany({us,ps,sex,mail,birthday,nickname,autograph,headimg})
    .then((data)=>{
        res.send({err:0,msg:'添加成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'添加失败'})
    })
})

//更改个性签名
/**
 * @api {post} /user/updateAutograph 更改个性签名
 * @apiName 更改个性签名
 * @apiGroup User
 * @apiParam {String} _id 用户id.
 * @apiParam {String} autograph 个性签名.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/updateAutograph',(req,res)=>{
    let {_id,autograph}=req.body
    //console.log(_id,autograph);
    User.update({_id}, {$set:{autograph}})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'修改失败'})

    })
})

//更改昵称
/**
 * @api {post} /user/updatenickname 更改昵称
 * @apiName 更改昵称
 * @apiGroup User
 * @apiParam {String} _id 用户id.
 * @apiParam {String} nickname 昵称.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/updatenickname',(req,res)=>{
    let {_id,nickname}=req.body
    User.update({_id}, {$set:{nickname}})
    .then((data)=>{
        res.send({err:0,msg:'修改成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'修改失败'})

    })
})

/**
 * @api {post} /user/count 获取用户数量
 * @apiName 获取用户数量
 * @apiGroup User
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

router.post('/count',(req,res)=>{
    //let {userid}=req.body
    User.countDocuments({})
    .then((data)=>{
        res.send({err:0,msg:'统计成功',count:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'统计失败'})

    })
})

//分页
/**
 * @api {post} /user/getInfoByPage 用户分页查询
 * @apiName 用户分页查询
 * @apiGroup User
 * @apiParam {Number} pageSize 每页数据条数.
 * @apiParam {Number} page 哪一页.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByPage',(req,res)=>{
    let pageSize=req.body.pageSize||3  //如果用户不传参数，默认为3
    let page=req.body.page||1
    let count=0
    User.find()
    .then((list)=>{
        count=list.length//获取总的数据条数
        return User.find().limit(Number(pageSize)).skip(Number((page-1)*pageSize))
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
 * @api {post} /user/del 用户删除
 * @apiName 用户删除
 * @apiGroup User
 * @apiParam {Number} _id 用户id.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/del',(req,res)=>{
    let {_id}=req.body 
    //单个删除
   User.remove({_id})
    .then((data)=>{
        res.send({err:0,msg:'删除成功'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'删除失败'})
    
    })
})
/**
 * @api {post} /user/getInfoByKw 关键字查询
 * @apiName getInfoByKw
 * @apiGroup User
 * @apiParam {Number} kw 关键字.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/getInfoByKw',(req,res)=>{
    let {kw}=req.body 
    let reg=new RegExp(kw)//创建正则表达式 匹配关键字
   User.find({$or:[{us:{$regex:reg}},{sex:{$regex:reg}},{autograph:{$regex:reg}},{nickname:{$regex:reg}}]})//名字，描述，类别模糊
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    
    })
})
/**
 * @api {post} /user/findid id查询
 * @apiName id查询
 * @apiGroup User
 * @apiParam {Number} _id 用户id.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/find',(req,res)=>{
    let {_id}=req.body 
   User.find({_id})//名字模糊
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch(()=>{
        res.send({err:-1,msg:'查询失败'})
    
    })
})
/**
 * @api {post} /user/unfollow 取消关注
 * @apiName 取消关注
 * @apiGroup User
 * @apiParam {Number} userid 用户id.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/unfollow',(req,res)=>{
        let {userid}=req.body 
        //单个删除
        followModel.remove({userid})
        .then((data)=>{
            res.send({err:0,msg:'取消关注'})
        })
        .catch(()=>{
            res.send({err:-1,msg:'取消失败'})
        
        })
    })
   


/**
 * @api {post} /user/follow 添加关注
 * @apiName 添加关注
 * @apiGroup User
 * @apiParam {Number} userid 用户id.
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/follow',(req,res)=>{

    let {userid}=req.body
    //判断参数是否正确
followModel.insertMany({userid})
    .then((data)=>{
        res.send({err:0,msg:'添加关注'})
    })
    .catch(()=>{
        res.send({err:-1,msg:'添加失败'})

    })
})


module.exports=router


