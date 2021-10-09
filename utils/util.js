const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
const tiangan = new Array( "癸","甲", "乙", "丙", "丁", "戊","己", "庚", "辛", "壬")
const dizhi = new Array("亥","子","丑","寅","卯","辰","巳","午","未","申","酉","戌")

const chineseCalendar = ad => {
  const tian = (ad - 3 ) % 10
  const di = (ad -3 ) % 12 
  return tiangan[tian] + dizhi[di]
}
module.exports = {
  formatTime,tiangan,dizhi,chineseCalendar
}
