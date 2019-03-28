// public/dot_details/dot_details.js
const app = getApp(),
core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'',
    dot_info: {},
    consultation:[],
    comment:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDoctorDetail()
    this.setData({
      msg:this,
      id:options.goodsId
    })

  },

  toConsultList:function(){
    var that = this
    var id = this.data.id
    wx.navigateTo({
      url: './consult_list/consult_list?id='+id,
    })
  },
  toAskDetail:function(e){
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: './user_ask/user_ask?id='+id
    })
  },

  toCmtList:function(){
    var that = this
    var id = this.data.id
    wx.navigateTo({
      url: './comment_list/comment_list?id='+id,
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
  getDoctorDetail: function(){
    var that = this
    var id = that.options.goodsId
    core.get("jinge.doctor.detail", { 'id': id }, function (res) {
      that.setData({
        dot_info: res.dot_info,
        consultation: res.consultation,
        comment: res.comment
      })
    })
  }
})