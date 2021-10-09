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
const tiangan = new Array( "甲", "乙", "丙", "丁", "戊","己", "庚", "辛", "壬","癸")
const dizhi = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥",)
const wuxingList = new Array("土","金","木","水","火")
const liuqi = new Array("少阴君火","太阴湿土","少阳相火","阳明燥金","太阳寒水","厥阴风木",)
const zaiquan = new Array("阳明燥金","太阳寒水","厥阴风木","少阴君火","太阴湿土","少阳相火",)
const yinyang = new Array("太过","不及")
const bigsmall = new Array("太","少")
const wuyun = new Array("木","火","土","金","水",)
const wuyinList = new Array("角(木)","徵(火)","宫(土)","商(金)","羽(水)",)
const wuyin = {
  "木": "角(木)",
  "火": "徵(火)",
  "土":"宫(土)",
  "金":"商(金)",
  "水":"羽(水)"
}
const wunyinIndexList= {
  "木": 0,
  "火": 1,
  "土": 2,
  "金": 3,
  "水": 4,  
}

const zhuqiList =  new Array("厥阴风木","少阴君火","少阳相火","太阴湿土","阳明燥金","太阳寒水",)
const keqiIndexList = {
  "厥阴风木": 0 ,
  "少阴君火": 1,
  "太阴湿土" :2 ,
  "少阳相火" :3 ,
  "阳明燥金": 4,
  "太阳寒水": 5 
}
const keqiList = new Array("厥阴风木","少阴君火","太阴湿土","少阳相火","阳明燥金","太阳寒水",)
const chineseCalendar = ad => {
  var tian = (ad - 3 ) % 10
   if (tian == 0) {
    tian = 9
   }else{
     tian = tian - 1
   }
   var di = (ad -3 ) % 12 
   if(di ==0 ){
     di = 11
   }else {
     di = di - 1
   }
   class Yun {
    constructor(yinyang, yin) {
      this.yinyang = yinyang;
      this.yin = yin;
    }
  }
  const wuxing  = wuxingList[tian % 5]
  var keyun = new Array();
  keyun.push(new Yun(bigsmall[tian%2],wuyin[wuxing]))
  var index = wunyinIndexList[wuxing]
  var big = bigsmall[tian%2]
  for (var i = 0; i < 4; i++) { 
      if(index == 4){
        index = 0 
      }else{
        index = index + 1
      }
      if(big == "太"){
        big = "少"
      }else{
        big = "太"
      }
      wuyin[wuyun[index]]
      keyun.push(new Yun(big,wuyin[wuyun[index]]))
  } 

  var zhuyun = new Array();
   //var keyun = bigsmall[tian%2] + wuyin[(wuxing[tian % 5])]
   var yunshu = wunyinIndexList[wuxing] %2
   big = bigsmall[tian%2]
   for(var i=0 ; i <5 ; i++){
     var big1
     if(yunshu == i %2) {
       big1 = big
     }else {
      if(big == "太"){
        big1 = "少"
      }else{
        big1 = "太"
      }
     }
    zhuyun.push(new Yun(big1,wuyinList[i]))
   }
   
   var keyunString = ""
   keyun.forEach((elem, index) => {
    keyunString = keyunString + elem.yinyang + elem.yin + ""
    
   })
   var zhuyunString = ""
   zhuyun.forEach((elem, index) => {
    zhuyunString = zhuyunString + elem.yinyang + elem.yin + ""
    
   })




   var keqi = new Array()
   keqi[2] = liuqi[di%6]
   keqi[5] =  zaiquan[di%6]
   var keqiIndex = keqiIndexList[keqi[2]]
   
   for (var i = 0 ; i < 6 ;i++){
     var index = i + 2
     if( index > 5 ){
       index= index -6
     }
     keqi[index] = keqiList[keqiIndex]
     keqiIndex = keqiIndex + 1;
     if(keqiIndex == 6){
      keqiIndex = 0 ;
     }
   }
  return "天干地支：" + tiangan[tian] + dizhi[di] + "\n"
   + "   大运（中运）："+ wuxingList[tian % 5] + yinyang[tian%2] + "\n"
  + "   司天：" + liuqi[di%6] + "\n"
  +"   在泉：" + zaiquan[di%6] + "\n"
  + "  客运："+ keyunString + "\n"
   +   "   主运："+ zhuyunString + "\n"
  + "   客气：" + keqi + "\n"
  + "   主气：" + zhuqiList 

}
module.exports = {
  formatTime,tiangan,dizhi,chineseCalendar
}
