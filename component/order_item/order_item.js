// component/order_item/order_item.js
const app = getApp(),
  core = app.requirejs("core");

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    service_content:{
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toEval: function () {
      wx.navigateTo({
        url: '../../../public/eval/eval',
      })
    },

    gettextval: function (e) {
      this.setData({
        content:e.detail.value
      })
    },
    onClose() {
      this.setData({ show: false });
    },
    showpop:function(e){
      var id = e.currentTarget.dataset.id
      this.setData({ 
        show: true ,
        id: id
      });
    },
    isflase:function(){
      this.setData({
        content: '',
        show: false
      })
    },
    istrue: function (e) {
      var that = this
      var content = that.data.content
      var id = that.data.id
      core.get("jinge.order.refund", {
        'id' : id,
        'content' : content
      }, function (res) {
        that.setData({
          content: '',
          show: false
        })
        wx.redirectTo({
          url: '/pages/profile/myorder/myorder',
        })
      })
    },
    topay:function(e){
      var id = e.currentTarget.dataset.id
      var tomid = e.currentTarget.dataset.tomid
      wx.showLoading({
        title: '加载中',
        mask: true
      })
      core.get("jinge.pay", { 'id': id }, function (data) {
        wx.hideLoading();
        var result = data.wechat.payinfo;
        wx.requestPayment({
          'timeStamp': result.timeStamp,
          'nonceStr': result.nonceStr,
          'package': result.package,
          'signType': 'MD5',
          'paySign': result.paySign,
          'success': function () {
            core.get("jinge.pay.complete", { 'id': id, 'type': 'wechat' }, function () {
              wx.navigateTo({
                url: "/public/chat/chat?id=" + tomid
              })
            })
          },
          'fail': function () {
            core.alert('支付失败！');
          }
        })
      })
    },
    deleteorder:function(e){
      var id = e.currentTarget.dataset.id
      core.get("jinge.order.deleteorder", { 'id': id }, function (res) {
        wx.redirectTo({
          url: '/pages/profile/myorder/myorder',
        })
      })
    }
  }
})
