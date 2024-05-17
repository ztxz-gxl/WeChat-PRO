var app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            company: options.company
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        // this.setData({
        //   "userinfo":userinfo
        // });
    },
    formSubmit: function (e) {
        var __this = this;
        wx.chooseImage({
            count: __this.data.count, // 默认3
            sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                var tempFilePaths = res.tempFilePaths
                for (var i = 0; i < tempFilePaths.length; i++) {
                    wx.uploadFile({
                        url: app.data.servsers2 + "/upload",
                        filePath: tempFilePaths[i],
                        data: {
                            'num': e.detail.value.num,
                            'company': __this.data.company,
                            'dw': e.detail.value.dw
                        },
                        name: "file",
                        header: {
                            "content-type": "multipart/form-data",
                            "Cookie": app.header
                        },
                        success: function (res) {
                            if (res.statusCode == 200) {
                                console.log(res);
                                __this.formup(e);
                            }
                        }
                    })
                }
            }
        })
    },
formup(e){
    var __this = this;
    var subValue = e.detail.value
    if (subValue.num == null || subValue.num == "") {
        __this.setData({
            popErrorMsg: "数值不能为空！",
            shows: "visible"
        });
        __this.ohShitfadeOut();
        return;
    } else if (subValue.dw == null || subValue.dw == "") {
        __this.setData({
            popErrorMsg: "单位不能为空！",
            shows: "visible"
        });
        __this.ohShitfadeOut();
        return;
    } else {
        wx.request({
            url: app.data.servsers + '/load',
            data: {
                'num': e.detail.value.num,
                'company': this.data.company,
                'dw': e.detail.value.dw
            },
            header: {
                "content-type": "application/json",
                "Cookie": app.header
            },
            success: function (res) {
                console.log(res);
                if (res.statusCode != 200) {
                    __this.setData({
                        popErrorMsg: "请求出错",
                        shows: "visible"
                    });
                    __this.ohShitfadeOut();
                    return;
                } else {
                    __this.setData({
                        popErrorMsg: "交易ID:" + res.data.massage,
                        shows: "visible"
                    });
                }
            }
        })
    }
},

    ohShitfadeOut() {
        var fadeOutTimeout = setTimeout(() => {
            this.setData({
                popErrorMsg: '',
                shows: "hidden"
            });
            clearTimeout(fadeOutTimeout);
        }, 2000);
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
        wx.stopPullDownRefresh()
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

    },
})