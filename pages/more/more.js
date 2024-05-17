//logs.js
var app = getApp();
var time = require('../../utils/utils.js');
Page({
  data: {
    Addr:'',
    user:{"username":"aaa","age":12},
    list:[]
  },
onLoad:function(){
  this.gerUser()
},

gerUser(){
  let __this = this;
        wx.request({
          url: app.data.servsers+'/getUser',
          method:'GET',
          header:{"content-type":"application/json","Cookie":app.header},
          success:function(res){
              console.log(res);
              res.data.list.forEach(i => {
                  i.Time = time.formatTimeTwo(i.Time,'Y/M/D h:m:s')
              });
              __this.setData({
                Addr: res.data.Addr,
                user : res.data.user,
                list : res.data.list
              })
          }
        })
}
})