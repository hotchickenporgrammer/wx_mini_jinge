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
      })
    }
  }
})
