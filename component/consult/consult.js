// component/dot_item/dot_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dot_text: {
      type: Array,
    },
    hot: {
      type: Array,      
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toTextDetail: function (e) {
      console.log(e)
      var that = this;
      // var routeurl = currentPage.route
      var goodsId = e.currentTarget.dataset.goodsid;
      console.log('goodsId:' + goodsId);
      // console.log(routeurl)
      wx.navigateTo({
        url: "../../public/text_details/text_details?goodsId=" + goodsId,
      })
    },
  }
})
