// pages/profile/profile.js
const app = getApp(),
  core = app.requirejs("core");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    modelShow: false,
    msgnum:'',
    icon: {
      normalone: '/detail/icon/zixunhui.png',
      activeone: '/detail/icon/zixun.png',
      normaltwo: '/detail/icon/hothui.png',
      activetwo: '/detail/icon/hot.png',
      normalthree: '/detail/icon/userhui.png',
      activethree: '/detail/icon/user.png',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo()
    
  },

  toConsulList:function(){
    wx.navigateTo({
      url: './consul_user/consul_user',
    })
  },

  tomyorder:function(){
    wx.navigateTo({
      url: './myorder/myorder',
    })
  },

  toIndex: function () {
    wx.redirectTo({
      url: '../index/index',
    })
  },
  toHot: function () {
    wx.redirectTo({
      url: '../hot/hot',
    })
  },
  toComsume:function(){
    wx.navigateTo({
      url: './comsume/comsume',
    })
  },
  tomsg:function(){
    wx.navigateTo({
      url: './mymsg/mymsg',
    })
  },
  isshow: function () {
    this.setData({
      modelShow: false
    })
  },
  phoneinfo: function (options) {

    var that = this,
      iv = options.detail.iv,
      encryptedData = options.detail.encryptedData;
    wx.login({

      success: function (result) {
        wx.showLoading({
          title: '加载中',
          mask: true
        })
        
        if (result.code) {
          core.get('wxapp/login', {
            code: result.code
          }, function (res) {
            if (res.error == 0) {
              wx.hideLoading();
              core.get('wxapp/bindPhone', {
                data: encryptedData,
                iv: iv,
                sessionKey: res.session_key
              }, function (lastresult) {
                console.log(lastresult);
                if (lastresult.error == 0) {
                  wx.hideLoading();
                  that.setData({
                    "member.needbind": 0
                  })
                }
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setTabBarBadge({
      index: 2,
      text: this.data.msgnum
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getInfo: function(){
    var that = this
    core.get("jinge.info", {}, function (res) {
      that.setData({
        info:res.info,
        msgnum:res.value
      })
      if(that.data.info.mobile==''){
        that.setData({
          modelShow: true
        })
      }
    })
  }
})