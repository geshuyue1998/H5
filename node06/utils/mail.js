"use strict";
const nodemailer = require("nodemailer");

//创建发送邮件的请求对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",//发送方用的邮箱
    port: 465,//端口号
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1307378353@qq.com', // 发送方邮箱地址
      pass: 'ecqfgqyfayqlfgdd' // mtp验证码
    }
  });
function send(mail,code){  //邮件信息
  let mailobj={
    from: '"美时欢迎你" <1307378353@qq.com>', // sender address
    to: mail, // list of receivers
    subject: "1902", // Subject line
    text: `您的验证码是${code}`, // plain text body
  }
  return new Promise((resolve,reject)=>{
    //发送邮件
    transporter.sendMail(mailobj,(err,data)=>{
        if(err){ reject()
        }else{resolve()
        } 
    });
  })
}
module.exports={send}
 