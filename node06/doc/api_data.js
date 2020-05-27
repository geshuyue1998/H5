define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\心兑\\Desktop\\node\\node06\\doc\\main.js",
    "groupTitle": "C:\\Users\\心兑\\Desktop\\node\\node06\\doc\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/file/upload/",
    "title": "上传文件",
    "name": "上传文件",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hehe",
            "description": "<p>文件.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/fileRouter.js",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/food/commentKw",
    "title": "评论关键字查询",
    "name": "commentKw",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByKw",
    "title": "关键字查询",
    "name": "getInfoByKw",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/findid",
    "title": "id查询",
    "name": "id查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>美食id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByType",
    "title": "分类查询",
    "name": "分类查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodclassify",
            "description": "<p>美食类别.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "las",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByPage",
    "title": "分页查询",
    "name": "分页查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数据条数.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>哪一页.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/add",
    "title": "添加美食",
    "name": "添加美食",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodtitle",
            "description": "<p>美食标题.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodclassify",
            "description": "<p>美食类别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodmaterial",
            "description": "<p>美食用料.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodway",
            "description": "<p>美食做法.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodimg",
            "description": "<p>美食图片.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/update",
    "title": "美食修改",
    "name": "美食修改",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>关键字.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodtitle",
            "description": "<p>美食名字.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodclassify",
            "description": "<p>美食类别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodmaterial",
            "description": "<p>美食用料.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodway",
            "description": "<p>美食做法.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "foodimg",
            "description": "<p>美食图片.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/del",
    "title": "美食删除",
    "name": "美食删除",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "foodid",
            "description": "<p>关键字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/count",
    "title": "获取美食数量",
    "name": "获取美食数量",
    "group": "Food",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/commentcount",
    "title": "获取评论数量",
    "name": "获取评论数量",
    "group": "Food",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/comment",
    "title": "评论",
    "name": "评论",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "foodid",
            "description": "<p>美食id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coursename",
            "description": "<p>评论人.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "coconnect",
            "description": "<p>评论内容.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/getInfoByPageC",
    "title": "评论分页查询",
    "name": "评论分页查询",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数据条数.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>哪一页.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/food/delcomment",
    "title": "评论删除",
    "name": "评论删除",
    "group": "Food",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>评论id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/foodRouter.js",
    "groupTitle": "Food"
  },
  {
    "type": "post",
    "url": "/user/getInfoByKw",
    "title": "关键字查询",
    "name": "getInfoByKw",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "kw",
            "description": "<p>关键字.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/findid",
    "title": "id查询",
    "name": "id查询",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/getMailCode",
    "title": "发送邮箱验证码",
    "name": "发送邮箱验证码",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/unfollow",
    "title": "取消关注",
    "name": "取消关注",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updateAutograph",
    "title": "更改个性签名",
    "name": "更改个性签名",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "autograph",
            "description": "<p>个性签名.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/updatenickname",
    "title": "更改昵称",
    "name": "更改昵称",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/follow",
    "title": "添加关注",
    "name": "添加关注",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/add",
    "title": "添加用户",
    "name": "添加用户",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>邮箱.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "autograph",
            "description": "<p>个性签名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headimg",
            "description": "<p>头像.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/getInfoByPage",
    "title": "用户分页查询",
    "name": "用户分页查询",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页数据条数.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>哪一页.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/del",
    "title": "用户删除",
    "name": "用户删除",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reg",
    "title": "用户注册",
    "name": "用户注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "用户登录",
    "name": "用户登录",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>用户密码.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "编辑用户资料",
    "name": "编辑用户资料",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>用户id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sex",
            "description": "<p>性别.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "us",
            "description": "<p>用户名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ps",
            "description": "<p>密码.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "autograph",
            "description": "<p>个性签名.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "headimg",
            "description": "<p>头像.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/count",
    "title": "获取用户数量",
    "name": "获取用户数量",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./router/userRouter.js",
    "groupTitle": "User"
  }
] });
