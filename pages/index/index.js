// index.js
// 获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
const dateUtil = require('../../utils/dateUtil.js')
Page({
  data: {
    motto: 'Hello World',
    tianganString: util.tiangan,
    dizhiString:util.dizhi,
    chineseCalendar: "",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const tmp = JSON.stringify(e.detail.value)
    const temmp = 1
    //const adjson  =  JSON.parse(e.detail.value)
    //const tmp = adjson["ad"]
    console.log('form发生了submit事件，携带数据为2：', e.detail.value["ad"])
    const tmp2 = e.detail.value["year"];
    const year = parseInt(e.detail.value["year"])
    const month = parseInt(e.detail.value["month"]);
    const day = parseInt(e.detail.value["day"]);
    console.log('form发生了submit事件，携带数据为3：', e.detail.value["ad"])
    // console.log('jieguo', util.chineseCalendar())
    const tmp4 = dateUtil.findliuqi(month + "-" + day);
    console.log('liuqi',tmp4)
    this.setData({
      chineseCalendar : util.chineseCalendar(year,month,day)
    })
  },
})
