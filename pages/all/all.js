var app = getApp()
var time = require('../../utils/utils.js');
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(){
        this.gerUser()
      },
      
      gerUser(){
        let __this = this;
              wx.request({
                url: app.data.servsers+'/all',
                method:'GET',
                header:{"content-type":"application/json","Cookie":app.header},
                success:function(res){
                    console.log(res);
                    res.data.list.forEach(i => {
                        i.Time = time.formatTimeTwo(i.Time,'Y/M/D h:m:s')
                    });
                    __this.setData({
                      list : res.data.list
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