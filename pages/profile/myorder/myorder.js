// pages/profile/myorder/myorder.js
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentab: 0,
    nav: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */

  isshow: function(e) {
    this.setData({
      currentab: e.target.dataset.index
    })
  },

  onLoad: function(options) {
    this.getOrderList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.getOrderList()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getOrderList:function(){
    var that = this
    core.get("jinge.order.getlist", {}, function (res) {
      that.setData({
        nav:res.nav
      })
    })
  }
})