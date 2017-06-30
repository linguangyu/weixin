var postsData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  onColletionTap: function (event) {
    var postsCollected = wx.getStorageSync('posts_collected');

    var postCollected = postsCollected[this.data.pID];

    postCollected = !postCollected;

    postsCollected[this.data.pID] = postCollected

    wx.setStorageSync("posts_collected", postsCollected);
    this.setData({
      collected: postCollected
    })

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