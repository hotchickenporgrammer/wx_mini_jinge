// public/dot_details/user_ask/user_ask.js
const app = getApp(),
  core = app.requirejs("core");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dot_info: {},
    record: {},

  },


  onLoad: function(options) {
    this.setData({
      id:options.id
    })
    this.getConsultationDetail()
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
  getConsultationDetail:function(){
    var that = this
    var id =this.data.id
    core.get("jinge.consultation.detail", {
      'id':id
    }, function (res) {
      that.setData({
        dot_info: res.dot_info,
        record: res.consultation
      })
    })
  }
})