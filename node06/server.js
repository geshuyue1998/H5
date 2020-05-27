const express =require('express')
const db=require('./db/connect')
const path=require('path')
const app=express()
const Mail=require('./utils/mail')
console.log(Mail);
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))//app.use表示使用中间件（插件）
//解析表单数据，x-www-form-urlencoded
app.use(bodyParser.json())//解析json数据

//通过cors解决跨域问题
const cors=require('cors')
app.use(cors())
//静态文件
app.use('/public',express.static(path.join(__dirname,'./static')))
//引入路由
const userRouter=require('./router/userRouter')
const foodRouter=require('./router/foodRouter')
const fileRouter=require('./router/fileRouter')
//const commentRouter=require('./router/commentRouter')

app.use('/user',userRouter)
app.use('/food',foodRouter)
app.use('/file',fileRouter)
//app.use('/comment',commentRouter)
app.listen(3000,()=>{
    console.log('server start');
    
})