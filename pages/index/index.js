//index.js
//获取应用实例

const app = getApp(),
core = app.requirejs("core");
Page({
  data: {
    show: false,
    canIUse: true,
    modelShow: false,
    likes: [],
    hot: [],
    movies: [],
    value: '',
    currentTab: 0,
    ctab:0,
    msgnum: '',
    icon: {
      normalone: '/detail/icon/zixunhui.png',
      activeone: '/detail/icon/zixun.png',
      normaltwo: '/detail/icon/hothui.png',
      activetwo: '/detail/icon/hot.png',
      normalthree: '/detail/icon/userhui.png',
      activethree: '/detail/icon/user.png',
    }
  },

  userinfo(e) {
    console.log(1111)
    console.log(e)
    if (e.detail.userInfo) {
      app.getUserInfo(null, null, {
        iv: e.detail.iv,
        encryptedData: e.detail.encryptedData
      });
    }
  },
  onClose(event) {
    this.setData({
      canIUse: false
    });
  },
  onChange(event) {
    this.setData({
      value: event.detail
    });
  },
  toHot: function() {
    wx.redirectTo({
      url: '../hot/hot',
    })
  },
  toprofile: function() {
    wx.redirectTo({
      url: '../profile/profile',
    })
  },



  selected_tap: function(e) {
    console.log(e)
    var that = this;
    if (that.data.currentTab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
    console.log(e.target.dataset.index);
  },
  ctab: function (e) {
    console.log(e)
    var that = this;
    if (that.data.ctab === e.target.dataset.current) {
      return false
    } else {
      that.setData({
        ctab: e.target.dataset.current
      })
    }
    console.log(e.target.dataset.index);
  },

  toDotList: function() {
    wx.navigateTo({
      url: '/pages/index/doctorList/doctorList',
    })
  },

  getLike: function() {
    var that = this
    core.get("jinge", {}, function (res) {
      that.setData({
        movies: res.movies,
        likes: res.likes,
        hot: res.hot,
        value:res.value
      })
    })
  },

  

  isshow: function() {
    this.setData({
      modelShow: false
    })
  },
  onLoad: function(options) {
    var that = this
    this.getLike()
    wx.getSetting({
      success(res) {
        res.authSetting["scope.userInfo"] ? that.setData({
          modelShow: !1
        }) : that.setData({
          modelShow: !0
        });
      },

    })
  },
})