// pages/profile/myorder/myorder.js
const app = getApp(),
  core = app.requirejs("core");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentab: 0,
    nav: [{
      title: "全部订单",
      service_content: [{
          dot_name: "杜文杰",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
        btn_one: "再次咨询",
          btn_two:"评价服务",
        },
        {
          dot_name: "杜文杰",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
          btn_one: "申请退款",
          btn_two: "再次咨询",
        },
      ],
    }, {
      title: "待回复",
      service_content: [{
          dot_name: "王花花",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
        btn_one: "再次咨询",
        btn_two: "评价服务",
        },
        {
          dot_name: "杜文杰",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
          btn_one: "再次咨询",
          btn_two: "评价服务",
        },
      ],
    }, {
      title: "待评论",
      service_content: [{
          dot_name: "李栓蛋",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
        btn_one: "再次咨询",
        btn_two: "评价服务",
        },
        {
          dot_name: "杜文杰",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
          btn_one: "再次咨询",
          btn_two: "评价服务",
        },
      ],
    }, {
      title: "已完成",
      service_content: [{
          dot_name: "铁子",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
        btn_one: "再次咨询",
        btn_two: "评价服务",
        },
        {
          dot_name: "杜文杰",
          localtion: "副主任医师",
          activer: "待评价",
          money: "40",
          hospital: "广州中医药大学第一附属医院",
          date: "01-05",
          time: "20:15",
          text: "咨询内容：医生你紧一点的内紧一点的内紧一点的内好，年龄28男、去年婚检怀疑有精索静脉曲张，七八年前有过一次坠痛但换了紧一点的内紧一点的内裤后症状",
          btn_one: "再次咨询",
          btn_two: "评价服务",
        },
      ],
    }, ],

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