//const packageOther = require('packageName/other')
import moment from 'moment'

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
const liuqiInterval = new Array(
  new Interval("1-21", "3-20") ,
  new Interval("3-21", "5-20"),
  new Interval("5-21", "7-22"),
  new Interval("7-23", "9-22"),
  new Interval("9-23", "11-22"),
  new Interval("11-23", ""))

const wuyuInterval = new Array(
  new Interval("1-21", "4-3") ,
  new Interval("4-4", "6-15"),
  new Interval("6-16", "8-27"),
  new Interval("8-28", "11-8"),
  new Interval("11-9", "1-20"),
 
)

class MonthDay{
  constructor(month, day) {
    this.month = month;
    this.day = day;
  }
}


const findliuqi = monthday => {
  const year = ""
     for(var i= 0 ; i< 5 ;i++){
         if(moment(year+monthday).isBefore(year+liuqiInterval[i].end) && moment(year+monthday).isAfter(year+liuqiInterval[i].start)){
           return i;
         }
     }
     return 5;
}

const findwuyun = monthday => {
  const year = ""
     for(var i= 0 ; i< 4 ;i++){
         if(moment(year+monthday).isBefore(year+wuyuInterval[i].end) && moment(year+monthday).isAfter(year+wuyuInterval[i].start)){
           return i;
         }
     }
     return 4;
}

const compare = (day1,day2) => {
  const date = new Date()
  date.isBef
  if( (day1.month - day2.month) == 0 ){
    return day1.month - day2.month 
  }else{
    return day1.day - day2.day
  }
}

module.exports = {
  findliuqi,findwuyun
}