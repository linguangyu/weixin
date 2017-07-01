var postsData = require('../../../data/posts-data.js')
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var globalData = app.globalData;

    var postId = options.id;
    this.setData({ pID: postId })
    var postData = postsData.postList[postId];
    this.setData({ postData: postData })





    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {}
      postsCollected[postId] = false;
      wx.setStorageSync("posts_collected", postsCollected);
    }

    if (app.globalData.g_isPlayingMusic && app.globalData.g_currentMusicPostId === postId) {

      this.setData({
        isPlayingMusic: true
      })
    }

    this.setMusicMonitor();



    //设置缓存
    // wx.setStorageSync("key", "风暴英雄")

    // 修改缓存 键名一样就可以了
    // wx.setStorageSync("key", {
    //   game: "风暴英雄",
    //   developer: "暴雪"
    // })
  },
  // onCollectionTap: function (event) {
  //   var game = wx.getStorageSync("key")
  //   console.log(game)
  // },
  // onShareTap: function (event) {
  // wx.removeStorageSync("key")


  //缓存的上限最大不能超过10MB
  //清除所有的缓存
  // wx.clearStorageSync()

  // },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  setMusicMonitor: function () {
    //监听音乐的状态
    var that = this
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      })
      app.globalData.g_isPlayingMusic = true;
      app.globalData.g_currentMusicPostId = that.data.pID;
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayingMusic = false;
      app.globalData.g_currentMusicPostId = null;
    });

  },


  onColletionTap: function (event) {
    //同步的方法
    this.getPostsCollectedSyc();

    // 异步的方法
    // this.getPostsCollectedAsy();
  },
  getPostsCollectedAsy: function () {
    var that = this
    wx.getStorage({
      key: 'posts_collected',
      success: function (res) {
        var postsCollected = res.data;
        var postCollected = postsCollected[that.data.pID];
        postCollected = !postCollected;

        postsCollected[that.data.pID] = postCollected

        that.showToast(postCollected, postsCollected);

      },
    })
  },


  getPostsCollectedSyc: function () {
    var postsCollected = wx.getStorageSync('posts_collected');

    var postCollected = postsCollected[this.data.pID];

    postCollected = !postCollected;

    postsCollected[this.data.pID] = postCollected

    this.showToast(postCollected, postsCollected);

  },



  showToast: function (postCollected, postsCollected) {
    var that = this;
    wx.setStorageSync("posts_collected", postsCollected);
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: 'success',
    })
  },

  showModal: function (postCollected, postsCollected) {
    var that = this;
    wx.showModal({
      title: '收藏',
      content: postCollected ? '是否收藏该文章？' : "取消收藏该文章？",
      showCancel: 'true',
      cancelText: '取消',
      cancelColor: '#333',
      confirmText: '确认',
      confirmColor: '#405f80',
      success: function (res) {
        if (res.confirm) {
          wx.setStorageSync("posts_collected", postsCollected);
          that.setData({
            collected: postCollected
          })
        }
      }

    })

  },

  onShareTap: function (event) {
    var itemList = [
      '分享给微信好友',
      '分享到朋友圈',
      '分享到QQ',
      '分享到微博'
    ]


    wx.showActionSheet({
      itemList: itemList,
      itemColor: '#405f80',
      success: function (res) {
        // res.tapIndex 
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: "用户是否取消？" + '现在无法实现分享功能，什么事情烦得很放声大哭回复',
        })
      },
    })

  },
  onMusicTap: function (event) {
    var isPlayingMusic = this.data.isPlayingMusic
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      //音乐播放器启动
      wx.playBackgroundAudio({
        dataUrl: this.data.postData.music.url,
        title: this.data.postData.music.title,
        coverImgUrl: this.data.postData.music.coverImg,
      });
      this.setData({
        isPlayingMusic: true
      })
    }
  },
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