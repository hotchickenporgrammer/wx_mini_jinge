// pages/contact/contact.js
const app = getApp()
core = app.requirejs("core")
var inputVal = ''
var msgList = []
var windowWidth = wx.getSystemInfoSync().windowWidth
var windowHeight = wx.getSystemInfoSync().windowHeight
var keyHeight = 0
const recorderManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext()
var timer = 0
var time_num = 0
/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: '医生回复不作为处方依据，由此产生的一切法律后果与本平台无关。'
  }, ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
// function calScrollHeight(that, keyHeight) {
//   var query = wx.createSelectorQuery();
//   query.select('.scrollMsg').boundingClientRect(function(rect) {
//   }).exec();
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    voice_show: true,
    scrollHeight: '100vh',
    inputBottom: 0,
    dot_img: '/detail/img/dot.png',
    cusHeadIcon: '/detail/img/dot.png',
    iptValue: '', // 给发送按钮使用的inputvalue
    btmshow: false,
    "backgroundone": '../../detail/icon/tupian.png',
    "backgroundtwo": '../../detail/icon/yuyin.png',
    "backgroundthree": '/detail/icon/luyinji.png',
    startTime: 0, //点击开始时间
    endTime: 0,
    getChat:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    initData(this);
    var did = options.id
    this.setData(({
      did: did
    }))
    this.getAvatar()
    this.getChat()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.data.getChat = setInterval(() => {
      this.getNewChat()
    }, 5000)
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },
  onHide:function(){

  },
  onUnload(){
    clearInterval(this.data.getChat)
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 获取聚焦
   * 
   * 
   */

  bottomShow: function() {
    this.setData({
      btmshow: !this.data.btmshow,
      // toView: 'msg-' + (msgList.length - 1)
    })
  },

  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px',
      btmshow: false
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })

    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  inputValue: function(e) {
    this.setData({
      iptValue: e.detail.value
    })
  },

  chooseImg: function() {
    var that = this;
    core.upload(res => {
      that.user1add('image', res.url, 0)
      that.data.msgList.push({
        speaker: 'customer',
        contentType: 'image',
        content: res.url,

      })
      inputVal = '';
      that.setData({
        msgList,
        inputVal
      });
    })
  },

  sendClick: function(e) {

    if (e.detail.value == "" || this.data.iptValue == "") {
      return
    } else {
      this.user1add('text', this.data.iptValue, 0)
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: e.detail.value || this.data.iptValue
      })
      inputVal = '';
      this.setData({
        msgList,
        inputVal,
        iptValue: ''
      })
      this.setData({
        scrollHeight: '100vh',
        inputBottom: 0
      })
      this.setData({
        toView: 'msg-' + (msgList.length - 1)
      })
    }


  },

  startvoice: function() {
    const options = {
      duration: 10000, //指定录音的时长，单位 ms
      sampleRate: 16000, //采样率
      numberOfChannels: 1, //录音通道数
      encodeBitRate: 96000, //编码码率
      format: 'mp3', //音频格式，有效值 aac/mp3
      frameSize: 50, //指定帧大小，单位 KB
    }
    timer = setInterval(() => {
      time_num++
    }, 1000)
    //开始录音
    recorderManager.start(options);
    recorderManager.onStart(() => {
      console.log('recorder start')
      this.setData({
        voice_show: false
      })
      wx.showToast({
        title: '录音中',
        icon: 'loading',
        duration: 60000,
        mask: false,
      })
    });
    //错误回调
    recorderManager.onError((res) => {
      console.log(res);
    })
  },


  //停止录音
  stopvoice: function() {
    var that = this
    recorderManager.stop();
    recorderManager.onStop((res) => {
      // this.tempFilePath = res.tempFilePath;
      console.log(time_num)
      clearInterval(timer)
      this.setData({
        tempFilePath: res.tempFilePath,
        voice_show: true,
        // time_num
      })
      wx.hideToast()
      wx.showModal({
        title: '是否发送录音',
        success(res) {
          if (res.confirm) {
            var o = core.getUrl("util/uploader/uploadmp3", {
                file: "file"
              }),
              i = that.data.tempFilePath;
            wx.uploadFile({
              url: o,
              filePath: i,
              name: "file",
              success: function(n) {
                var o = JSON.parse(n.data);
                that.user1add('voice', o.files[0].url, time_num)
                msgList.push({
                  speaker: 'customer',
                  contentType: 'voice',
                  content: o.files[0].url,
                  time_num: time_num
                })
                that.setData({
                  msgList
                })
                time_num = 0
              }
            });
            //
            // msgList.push({
            //   speaker: 'customer',
            //   contentType: 'voice',
            //   content: that.data.tempFilePath,
            //   time_num
            // })
            // that.setData({
            //   msgList,
            //   // time_num
            // })
            // time_num = 0
          } else if (res.cancel) {
            time_num = 0
          }
        },
      })

      console.log('停止录音', res.tempFilePath)
    })
  },

  playvoice: function(e) {
    var url = e.currentTarget.dataset.path
    innerAudioContext.autoplay = true
    innerAudioContext.src = url
    innerAudioContext.onPlay(() => {
      console.log('开始播放')
    })
    innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    })
  },



  /**
   * 退回上一页
   */
  toBackClick: function() {
    wx.navigateBack({})
  },
  getAvatar: function() {
    var that = this
    core.get("jinge.chat.getavatar", {
      'did': this.data.did
    }, function(res) {
      wx.setNavigationBarTitle({
        title: res.realname
      })
      that.setData({
        dot_img: res.dot_img,
        cusHeadIcon: res.cusHeadIcon
      })
    })
  },
  getChat: function() {
    var that = this
    var msgList = this.data.msgList;
    core.get("jinge.chat", {
      'did': this.data.did
    }, function(res) {
      if(res.check == 0){
        core.alert('您与该医生的新订单还未支付，请先去支付再咨询')
        wx.redirectTo({
          url: '/pages/profile/profile',
        })
      }
      else if (res.check != 1){
        core.alert('您与该医生的订单已结束，如需再次咨询请重新下单')
        wx.redirectTo({
          url: '/pages/profile/profile',
        })
      }
      res.msgList.forEach(item => {
        msgList.push(item)
      })
      that.setData({
        msgList: msgList,
        toView:"chat-end"
      })
    })
  },
  user1add: function(type, content, time_num) {
    var that = this
    core.get("jinge.chat.post", {
      'did': this.data.did,
      'type': type,
      'content': content,
      'time_num': time_num
    }, function(res) {})
  },
  getNewChat:function(){
    var that = this
    core.get("jinge.chat.newchat", {
      'did': this.data.did,
      'len': this.data.msgList.length
    },function(res){
      console.log(res)
      if(res.list.length != 0){
        res.list.forEach(item => {
          msgList.push(item)
        })
        that.setData({
          msgList: msgList
        })
      }
    })
  }
})