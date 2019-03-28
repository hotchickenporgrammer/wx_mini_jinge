// public/text_details/text_details.js
const app = getApp(),
core = app.requirejs("core"),
WxParse = require('../../utils/wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dot_text: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticleDetail()
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
  getArticleDetail(){
    var that = this
    var id = that.options.goodsId
    core.get("jinge.article.detail", {'id':id}, function (res) {
      var article = res.dot_text[0].text_content
      that.setData({
        dot_text:res.dot_text
        
      })
      WxParse.wxParse('article', 'html', article, that, 5);
    })
  }
})