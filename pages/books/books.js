// pages/books/books.js
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
        that.data.items.push({isbn:res.result})  
        that.setData({
          items: that.data.items
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
    this.data.items.splice(event.currentTarget.dataset.index,1);
   
    this.setData({
      items: this.data.items
    })
  },
  bindKeyInput: function(event){
    console.log(event);
    this.data.items[event.currentTarget.dataset.index].bookName = event.detail.value
  }
})