Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onTap: function (event) {
    //  wx.navigateTo({
    //    url: '../posts/posts',
    //  });
    //  wx.redirectTo({
    //    url: '../posts/posts',
    //  })
  //跳转网页 父级隐藏
    // wx.navigateTo({
    //   url: '../posts/posts',
    //   success: function (res) {
    //     //跳转成功执行的函数
    //   },
    //   fail: function () {
    //     //跳转失败执行的函数

    //   },
    //   complete: function () {
    //     //无论成功与失败都执行的函数
    //   }
    // });

       //跳转网页 父级关闭
    wx.navigateTo({
      url: '../posts/posts',
      success: function (res) {
        //跳转成功执行的函数
      },
      fail: function () {
        //跳转失败执行的函数

      },
      complete: function () {
        //无论成功与失败都执行的函数
      }
    });


  },
  onText:function (event){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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