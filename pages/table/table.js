var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    listData2:[],
    listData3:[]
    },
    onLoad: function () {
    this.getData();
    },
    getData(){
        let __this = this;
        wx.request({
          url: app.data.servsers+'/getData',
          method:'GET',
          header:{"content-type":"application/json","Cookie":app.header},
          success:function(res){
              console.log(res);
              __this.setData({
                listData : res.data.a,
                listData2 : res.data.listData2,
                listData3 : res.data.listData3
              })
          }
        })
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