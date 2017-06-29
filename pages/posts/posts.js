Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "Now 11 2020"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content=[
      {
        date:'Sep 18 2016',
        title:'正是新发型真是',
        post_img: '/images/post/crab.png',
        author_img: '/images/avatar/1.png',
        content:'我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
        view_num:'112',
        collect_num:'96',
      }, {
        date: 'Nov 25 2016',
        title: '比例.林恩的中场故事',
        post_img: '/images/post/bl.png',
        author_img: '/images/avatar/2.png',
        content: '李安李安李安李安李安李安我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容',
        view_num: '112',
        collect_num: '96',
      },
    ]
    this.setData({posts_key:posts_content})
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