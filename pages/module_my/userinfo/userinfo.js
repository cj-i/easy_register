//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据，函数作为参数传递过去wx9abc701388e9f7a3
    app.getUserInfo(function(userInfo){
      console.log(userInfo); 
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    wx.login({
      success: function (res) {
        console.log('获取用户信息！' + res.errMsg + ";" + res.code)

        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code', //仅为示例，并非真实的接口地址
          data: {
            appid: 'wx9abc701388e9f7a3',
            secret: '805c9c642fde7314020276f8ada68e25',
            js_code: res.code,
            grant_type:'authorization_code'
          },
          header: {
            'content-type': 'application/json'
          },
          success: function (res) {
            console.log("获取的数："+res.data)
          }
        })

      }
    });
  }
})
