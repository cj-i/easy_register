//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },

  //个人信息
  func_userinfo: function (event) {
    wx.navigateTo({
      url: 'userinfo/userinfo'
    })
    console.log('个人信息获取！！！');
  },

  //登记历史记录
  func_rh: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
