//app.js
App({
  data: {
    servsers: "http://192.168.188.227:8080",
    servsers2: "http://192.168.188.227:5000"
    },
    onLaunch: function () {
      this.header = ''
      this.globalData = {}
    },
})