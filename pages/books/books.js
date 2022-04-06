// pages/books/books.js
const apikey="?apikey=12337.6b4fe0a53bbb843965713181b8e0c9a5.b3a0d908edff1246f700dc99b3e41257"
const baseUrl = "https://api.jike.xyz/situ/book/isbn/"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    //     var book1 = {
    //          isbn: "1233",
    //          bookName: "xiayu1"
    //     };
    //     var book2 = {
    //       isbn: "1234",
    //       bookName: "xiayu2"
    //  };
    //     this.setData({
    //       items: [book1,book2], //请求结果数据

    //     })
    var that = this
    wx.getStorage({
      key: 'books',
      success: function (res) {

        console.log(res.data)
        that.setData({
          items: JSON.parse(res.data)
        });

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

  },
  scan: function () { // 通过but点击事件触发后面的函数
    console.log("你好");
    var that = this;
    wx.scanCode({
      success(res) {
        console.log(res)
        wx.showToast({
          title: "扫描成功："+ res.result ,
          icon: "none",
          duration: 1000
        });
        if(isContain(res.result,that.data.items)){
          wx.showToast({
            title: "新建失败：这本书已经在数据了" ,
            icon: "none",
            duration: 3000
          });
          return;
        }
        var url = baseUrl + res.result + apikey;
      
        wx.request({
          url:url,
          data:{},
          header: {'Content-Type': 'application/json'},
          success: function(res) {
            console.log(res)
            wx.showToast({
              title: "成功："+ JSON.stringify(res.data) ,
              icon: "none",
              duration: 5000
            });
            that.data.items.push(res.data.data);
            that.setData({
              items: that.data.items
            })
          },
          fail: function(res){
            wx.showToast({
              title: "失败："+JSON.stringify(res),
              icon: "none",
              duration: 5000
            })
          }
        })
       
        
      }
    })
  },

  save: function () {
    console.log(this.data.items);
    console.log(JSON.stringify(this.data.items));
    wx.setStorage({
      key: "books",
      data: JSON.stringify(this.data.items)
    })
  },
  del: function (event) {
    console.log(event);
    console.log(event.currentTarget.dataset.index);
    this.data.items.splice(event.currentTarget.dataset.index, 1);

    this.setData({
      items: this.data.items
    })
  },
  bindKeyInput: function (event) {
    console.log(event);
    this.data.items[event.currentTarget.dataset.index].bookName = event.detail.value
  },

  copy: function (event) {

    wx.getStorage({
      key: 'books',
      success: function (res) {
        console.log(res.data)
        wx.setClipboardData({
          data: res.data,
          success: function (res) {}
        })
      }
    })

  },

  past: function(event){
    var that = this;
    wx.getClipboardData({
      success:function (res) {
        console.log(res.data)// data
        that.setData({
          items: JSON.parse(res.data)
        }); 
      }
    })
     
  },

})

const isContain = (isbn,bookList)=> {
  for(var i = 0; i < bookList.length; i++) {
      if (bookList[i].id == isbn){
        return true;
      }
  }
  return false;
}