var app = getApp()
Page({
  data: {
    listData2:[],
    movies: [
      { url: '/images/g.jpg' },   
      { url: '/images/gg.jpg' },
      { url: '/images/ggg.jpg' }
    ]
  },
  onLoad: function () {
    this.getDatas();
    },
    getDatas(){
        let __this = this;
        wx.request({
          url: app.data.servsers+'/getBankData',
          method:'GET',
          header:{"content-type":"application/json","Cookie":app.header},
          success:function(res){
              console.log(res);
              __this.setData({
                listData2 : res.data.listData4,
              })
          }
        })
    },
}) 