// component/toask/toask.js
const app = getApp(),
core = app.requirejs("core");
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg:{
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    agr_content: "",
    show: false,
    ischeck: false
  },


 

  methods: {
    noShow: function () {
      this.setData({
        show: false
      })
    },
    getTreaty: function () {
      var that = this
      core.get("jinge.treaty", {}, function (res) {
        that.setData({
          agr_content: res.treaty
        })
      })
    },



    onischeck: function () {
      // var yorn = ischeck
      this.setData({
        ischeck: !this.data.ischeck
      })
    },

    topay: function () {
      var id = this.data.msg.options.goodsId
      core.get("jinge.order.create", { 'id': id }, function (res) {
        if(res.price == 0){
          wx.navigateTo({
            url: "/public/chat/chat?id=" + res.orderid
          })
        }
        else{
          core.get("jinge.pay", { 'id': res.orderid }, function (data) {
            var result = data.wechat.payinfo;
            wx.requestPayment({
              'timeStamp': result.timeStamp,
              'nonceStr': result.nonceStr,
              'package': result.package,
              'signType': 'MD5',
              'paySign': result.paySign,
              'success': function () {
                core.get("jinge.pay.complete", { 'id': res.orderid,'type': 'wechat' }, function () {
                  wx.navigateTo({
                    url: "/public/chat/chat?id=" + res.orderid
                  })
                })
              },
              'fail': function () {
                core.alert('支付失败！');
              }
            })
          })
        }
      })
    },



    onClose() {
      this.setData({
        show: false
      });
    },

    ispopup: function () {
      this.getTreaty()
      this.setData({
        show: true
      })
    },
    // toTerms:function(){
    //   wx.navigateTo({
    //     url: '../../component/toask/terms/terms',
    //   })
    

  }
})
