// public/search_page/search_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_item: [{ record: "王医生" }, { record: "王医生" }, { record: "王医生" }, { record: "王医生" }, { record: "王医生" }, { record: "王医生" }],
    nav_item: [{select: '医生'},{select: '病名'}],
    show: false,
    showname: '医生'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  toresults:function(e){
    // var iptval = inputValue
    if(this.data.showname=="医生"){
      wx.navigateTo({
        url: '../../pages/index/doctorList/doctorList?iptval=' + this.data.iptval,
      })
    }
    if (this.data.showname == "病名"){
      wx.navigateTo({
        url: '/public/search_hot/search_hot?iptval=' + this.data.iptval,
      })
    }
  },

  isshow:function(e){
    // console.log(e)
    this.setData({
      show: !this.data.show,
    })
  },
  tabname:function(e){
    console.log(e)
    var item_name = e.target.dataset.name
    this.setData({
      show: !this.data.show,
      showname: item_name
      })
  },
  inputeidt:function(e){
    console.log(e)
    var inputValue = e.detail.value
    this.setData({
      iptval: inputValue
    })
  },
  onLoad: function (options) {

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

  }
})