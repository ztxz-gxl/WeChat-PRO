//获取应用实例  
var app = getApp()
Page({
  data: {
    // id:0,
    movies: [
      { url: '/images/a1.jpg' },   
      { url: '/images/a2.jpg' }
    ]
  },
  onLoad: function (options) {
  },
  begintests:function(e){
    wx.navigateTo({
      url: "../../pages/begintest/begintest?company=" + e.currentTarget.dataset.src
    })
  },
}) 