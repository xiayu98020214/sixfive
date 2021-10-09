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
const wuxingList = new Array("土","金","水","木","火")
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


const sitianContent = {
  "少阴君火":"少陰司天，主勝，則心熱，煩躁，牀痛支滿；客勝，則鼽嚏，頸項強，肩背瞀熱，頭痛，少氣，發熱，耳聾，目瞑，甚則跗腫，血溢，瘡，喑，喘咳。",
  "太阴湿土": "太陰司天，主勝，則胸腹滿，食已而瞀；客勝，則首、面、跗腫，呼吸氣喘。",
  "少阳相火":"少陽司天，主勝，則胸滿，咳逆，仰息，甚則有血，手熱；客勝，則丹疹外發，及為丹熛，瘡瘍，嘔逆，喉痹，頭痛，嗌踵，耳聾，血溢，內為瘛瘲。",
  "阳明燥金":"陽明司天，主勝，則清復內餘，咳，衄，嗌塞，心膈中熱，咳不止而白血出者死，金居少陽之位，客不勝主也。",
  "太阳寒水":"太陽司天，主勝，則喉嗌中鳴；客勝，則胸中不利，出清涕，感寒則咳也。",
  "厥阴风木":"厥陰司天，主勝，則胸牀痛，舌難以言；客勝，則耳鳴，掉眩，甚則咳逆。",

}
//const zaiquan = new Array("阳明燥金","太阳寒水","厥阴风木","少阴君火","太阴湿土","少阳相火",)
const zaiquanContent = {
  "阳明燥金":"陽明在泉，主勝，則腰重，腹痛，少腹生寒，下為鶩溏，寒厥於腸，上衝胸中，甚則喘滿，不能久立；客勝，則清氣動下，少腹堅滿，而數便泄。",
  "太阳寒水":"太陽在泉，以水居水位，無所勝也。",
  "厥阴风木":"厥陰在泉，主勝，則筋骨徭并，腰腹時痛；客勝，則關節不利，內為痙強，外為不便。",
  "少阴君火":"少陰在泉，主勝，則厥氣上行，心痛發熱，膈中眾痹皆作，發於胠牀，魄汗不藏，四逆而起；客勝，則腰痛，尻、股、膝、髀、、胻、足病，瞀熱以酸，跗腫不能久立，溲便變。",
  
  "太阴湿土":"太陰在泉，主勝，則寒氣逆滿，食飲不下，甚則為疝；客勝，則足痿下腫，便溲不時，濕客下焦，發而濡泄，及為陰腫，隱曲之疾。",
  "少阳相火":"少陽在泉，主勝，則熱反上行，而客於心，心痛發熱，格中而嘔；客勝，則腰腹痛，而反惡寒，甚則下白溺白。"
}

const bigyunContent= {
  "土太过":"歲土太過。雨濕流行。腎水受邪。民病腹痛。清厥意不樂。體重煩冤。上應鎮星。甚則肌肉萎。足痿不收。行善瘈。腳下痛。飲發中滿食減。四肢不舉。變生得位。藏氣伏。化氣獨治之。泉涌河衍。涸澤生魚。風雨大至。土崩潰。鱗見於陸。病腹滿溏泄。腸鳴反下。甚而太谿絕者死不治。上應歲星。",
  "金不及":"歲金不及。炎火乃行。生氣乃用。長氣專勝。庶物以茂。燥爍以行。上應熒惑星。民病肩背。瞀重。鼽嚏血便注下。收氣乃後。上應太白星。其穀堅芒。復則寒雨暴至。乃零冰雹霜雪殺物。陰厥且格。陽反上行。頭腦戶痛。延及囪頂發熱。上應辰星。丹谷不成。民病口瘡。甚則心痛。",
  "水太过":"歲水太過。寒氣流行。邪害心火。民病身熱煩心躁悸。陰厥上下。中寒。譫妄心痛。寒氣早至。上應辰星。甚則腹大脛腫。喘欬。寢汗出憎風。大雨至。埃霧朦鬱。上應鎮星。上臨太陽。則雨冰雪。霜不時降。濕氣變物。病反腹滿腸鳴。溏泄食不化。渴而妄冒。神門絕者死不治。上應熒惑辰星。",
  "木不及":"歲木不及。燥乃大行。生氣失應。草木晚榮。肅殺而甚。則剛木辟著。柔萎蒼乾。上應太白星。民病中清。胠脅痛。少腹痛。腸鳴溏泄。涼雨時至。上應太白星。其穀蒼。上臨陽明。生氣失政。草木再榮。化氣乃急。上應太白鎮星。其主蒼早。復則炎暑流火。濕性燥柔脆。草木焦槁。下體再生。華實齊化。病寒熱瘡瘍疿胗廱痤。上應熒惑太白。其穀白堅。白露早降。收殺氣行。寒雨害物。蟲食甘黃。脾土受邪。赤氣後化。心氣晚治。上勝肺金。白氣乃屈。其穀不成。欬而鼽。上應熒惑太白星。",
  "火太过":"歲火太過。炎暑流行。肺金受邪。民病瘧。少氣欬喘。血溢血泄注下。嗌燥耳聾中熱肩背熱。上應熒惑星。甚則胸中痛。脅支滿脅痛。膺背肩胛間痛。兩臂內痛。身熱骨痛而為浸淫。收氣不行。長氣獨明。雨水霜寒。上應辰星。上臨少陰少陽。火燔。水泉涸。物焦槁。病反譫妄狂越。欬喘息鳴。下血溢泄不已。太淵絕者死不治。上應熒惑星。",
  "土不及":"歲土不及。風乃大行。化氣不令。草木茂榮。飄揚而甚。秀而不實。上應歲星。民病飧泄霍亂。體重腹痛。筋骨繇復。肌肉酸。善怒。藏氣舉事。蟄蟲早附。咸病寒中。上應歲星鎮星。復則收政嚴峻。名木蒼凋。胸脅暴痛。下引少腹。善太息。蟲食甘黃。氣客于脾穀乃減。民食少失味。蒼穀乃損。上應太白歲星。上臨厥陰。流水不冰。蟄蟲來見。藏氣不用。白乃不復。上應歲星。民乃康。",
  "金太过":"歲金太過。燥氣流行。肝木受邪。民病兩脅下少腹痛。目赤痛眥瘍。耳無所聞。肅殺而甚。則體重煩冤。胸痛引背。兩脅滿且痛引少腹。上應太白星。甚則喘欬逆氣。肩背痛。尻陰股膝髀。胻足皆病。上應熒惑星。收氣峻。生氣下。草木斂。蒼乾凋隕。病反暴痛胠脅。不可反側。欬逆甚而血溢。太衝絕者死不治。上應太白星。",
  "水不及":"歲水不及。濕乃大行。長氣反用。其化乃速。暑雨數至。上應鎮星。民病腹滿身重。濡泄寒瘍流水。腰股痛發。膕臑股膝不使。煩冤足痿清厥。腳下痛。甚則跗腫。藏氣不政。腎氣不衡。上應辰星。其穀秬。上臨太陰。則大寒數舉。蟄蟲早藏。地積堅冰。陽光不治。民病寒疾于下。甚則腹滿浮腫。上應鎮星。復則大風暴發。草偃木零。生長不鮮。面色時變。筋骨併辟。肉瘛目視。物疏璺。肌肉胗發。氣并隔中。痛于心腹。黃氣乃損。其穀不登。上應歲星。",
  "木太过":"歲木太過。風氣流行。脾土受邪。民病飧泄食減。體重煩冤。腸鳴腹支滿。上應歲星。甚則忽忽善怒。眩冒巔疾。化氣不政。生氣獨治。雲物飛動。草木不寧。甚而搖落。反脅痛而吐甚。衝陽絕者死不治。上應太白星。",
  "金不及":"歲金不及。炎火乃行。生氣乃用。長氣專勝。庶物以茂。燥爍以行。上應熒惑星。民病肩背。瞀重。鼽嚏血便注下。收氣乃後。上應太白星。其穀堅芒。復則寒雨暴至。乃零冰雹霜雪殺物。陰厥且格。陽反上行。頭腦戶痛。延及囪頂發熱。上應辰星。丹谷不成。民病口瘡。甚則心痛。"

}

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

   var bigyun = wuxingList[tian % 5] + yinyang[tian%2]
  return "天干地支：" + tiangan[tian] + dizhi[di] + "\n"
   + "   大运（中运）："+ bigyun + "\n"
   + bigyunContent[bigyun] + "\n"
  + "   司天：" + liuqi[di%6] + "\n"
  + sitianContent[liuqi[di%6]] + "\n"
  +"   在泉：" + zaiquan[di%6] + "\n"
  + zaiquanContent[zaiquan[di%6]] + "\n"
  + "  客运："+ keyunString + "\n"
   +   "   主运："+ zhuyunString + "\n"
  + "   客气：" + keqi + "\n"
  + "   主气：" + zhuqiList 

}
module.exports = {
  formatTime,tiangan,dizhi,chineseCalendar
}
