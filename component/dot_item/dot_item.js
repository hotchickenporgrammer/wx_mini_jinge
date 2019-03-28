// component/dot_item/dot_item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dot_item: {
      type:Array,
    }
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
    toDetails: function (e) {
      console.log(e)
      var that = this;
      var goodsId = e.currentTarget.dataset.goodsid;
      console.log('goodsId:' + goodsId);
      wx.navigateTo({
        url: "/public/dot_details/dot_details?goodsId=" + goodsId,
      })
    }
  }
})
