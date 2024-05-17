
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hidden:true
  },
  resg:function(e){
    wx.reLaunch({
        url: "../../pages/resg/resg"
    })
},

  formSubmit: function (e) {
      var subValue = e.detail.value
      var __this = this;
       if (subValue.username == null || subValue.username == "" ) {
        __this.setData({ popErrorMsg: "电话不能为空！", shows:"visible" });
        __this.ohShitfadeOut();
        return;
      }else if (subValue.password == null || subValue.password == "") {
        __this.setData({ popErrorMsg: "密码不能为空！", shows: "visible" });
        __this.ohShitfadeOut();
        return;
      }else{
          wx.request({
            url: app.data.servsers+'/login',
          data: {'username':e.detail.value.username, 'password':e.detail.value.password},
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function (res) {
            // app.id = res.data.id
            console.log(res);
            console.log(res.cookies[0].split(";"));
            app.header = res.cookies[0].split(";")[0]
            if(res.statusCode != 200 && res.statusCode != 408){
              __this.setData({ popErrorMsg: "请求出错", shows: "visible" });
              __this.ohShitfadeOut();
              return;
            }else if(res.statusCode == 408){
              __this.setData({ popErrorMsg: "输入信息有误", shows: "visible" });
              __this.ohShitfadeOut();
              return;
            }else{
              wx.reLaunch({
                url: "../../pages/appindex/appindex"
              });
            }
          }
        })
      }
  },
  ohShitfadeOut() {
    var fadeOutTimeout = setTimeout(() => {
      this.setData({ popErrorMsg: '' ,shows:"hidden"});
      clearTimeout(fadeOutTimeout);
    }, 2000);
  }, 
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