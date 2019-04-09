// pages/index/doctorList/doctorList.js
const app = getApp(),
core = app.requirejs("core");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dot_info: [],
    select: [],
    currentTab: 0,
    isshow: false,
    indexNum: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.iptval != "undefined"){
      this.setData({
        keyword: options.iptval
      })
    }
    this.getDot_info();
  },
  tabName: function (e) {
    console.log(e)
    var index = this.data.currentTab
    var name = "select[" + index + "].itemname"
    var itemname = e.target.dataset.name
    if (e.currentTarget.dataset.type == "order"){
      this.setData({
        order_id: e.currentTarget.dataset.value
      })
    }
    if (e.currentTarget.dataset.type == "disease") {
      this.setData({
        disease_id: e.currentTarget.dataset.value
      })
    }
    if (e.currentTarget.dataset.type == "title") {
      this.setData({
        title_id: e.currentTarget.dataset.value
      })
    }
    this.setData({
 
      [name]: itemname,
      isshow: !this.data.isshow
    })
    console.log(e)
  
    this.getDot_list()
  },



  selected_tap: function (e) {
    console.log(e)
    var that = this;
    this.setData({
      isshow: !this.data.isshow
    })
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
  getDot_info:function(){
    var that = this
    core.get("jinge.doctor", {}, function (res) {
      that.setData({
        select: res.select
      })
    })
    this.getDot_list()
  },
  getDot_list:function(){
    var that = this
    var order = that.data.order_id
    var disease = that.data.disease_id
    var title = that.data.title_id
    var keyword = that.data.keyword
    core.get("jinge.doctor.getlist", {
      'order': order,
      'disease': disease,
      'title' : title,
      'keyword': keyword
    }, function (res) {
      that.setData({
        dot_info : res.dot_info
      })
    })
  }
})