// pages/hot/hot.js
const app = getApp(),
core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hot: [],
    value:'',
    currentTab: 0,
    msgnum: '',
    active:1,
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
    this.getHot()
  },

  toIndex:function(){
    wx.redirectTo({
      url: '../index/index',
    })
  },
  toprofile: function () {
    wx.redirectTo({
      url: '../profile/profile',
    })
  },

  onChange:function(e){
    console.log(e)
  },

  selected_tap: function (e) {
    console.log(e)
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      that.setData({ currentTab: e.target.dataset.current })
    }
    console.log(e.target.dataset.index);
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
  getHot: function () {
    var that = this
    core.get("jinge/article", {}, function (res) {
      console.log(res)
      that.setData({
        hot:res.hot,
        value:res.value
      })
    })
  }
})