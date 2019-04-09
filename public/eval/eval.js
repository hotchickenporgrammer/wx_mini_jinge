// public/eval/eval.js
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */


  onChange(event) {
    this.setData({
      value: event.detail
    });
  },

  onLoad: function (options) {
    this.setData({
      orderid:options.id
    })
    this.getOrderDot()
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
  getOrderDot:function(){
    var that = this
    core.get("jinge.order.doctor", {
      orderid:that.data.orderid
    }, function (res) {
      that.setData({
        doctor:res.doctor
      })
    })
  },
  contentChange:function(e){
    this.setData({
      content:e.detail.value
    })
  },
  addComment:function(){
    var that = this
    core.get("jinge.order.comment", {
      orderid: that.data.orderid,
      doctormid: that.data.doctor.mid,
      value:that.data.value,
      content: that.data.content
    }, function (res) {
      wx.navigateTo({
        url: '/pages/profile/myorder/myorder'
      })
    })
  }
})