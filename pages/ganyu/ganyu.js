//获取应用实例  
var app = getApp();
Page({
  data:{
    addr : "0X00000000000000000000000000000000000000000"
  },
  onLoad:function(){
    var __this = this;
  },
  Submits: function (e) {
    var subValue = e.detail.value
    var __this = this;
    if (subValue.amount == null || subValue.amount == "" ||  parseFloat(subValue.amount) < 100.0) {
      __this.setData({ popErrorMsg: "数量不能为空且需要大于100！", shows:"visible" });
      __this.ohShitfadeOut();
      return;
    }else if (subValue.year == null || subValue.year == "") {
      __this.setData({ popErrorMsg: "时间不能为空！", shows: "visible" });
      __this.ohShitfadeOut();
      return;
    }else{
        wx.request({
          url: 'http://192.168.31.10:8080/bankSub',
        data: {'amount':e.detail.value.amount, 'year':e.detail.value.year},
        header:{"content-type":"application/json","Cookie":app.header},
        success: function (res) {
          console.log(res);
          if(res.statusCode != 200){
            __this.setData({ popErrorMsg: "请求出错", shows: "visible" });
            __this.ohShitfadeOut();
            return;
          }else{
            __this.setData({ popErrorMsg: "存入成功", shows: "visible" });
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
}) 
