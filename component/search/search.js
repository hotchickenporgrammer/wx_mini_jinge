// component/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    keyword:{
      type: String
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
    tosearch_page:function(){
      wx.navigateTo({
        url: '/public/search_page/search_page',
      })
    }
  }
})
