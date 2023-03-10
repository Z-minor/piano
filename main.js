
let rr = document.getElementById('rr');
let c = 0;

let 反相 = 0;
let 內文已更新 = false;
let 當前步驟 = 0;
let 答題計時 = 0;
let 向前衝計時 = 0;
let 答案順序隨機化 = [0,0,0];
let 答案1高亮 = 0;
let 答案2高亮 = 0;
let 答案3高亮 = 0;
let 推薦1序號 = 0;
let 推薦2序號 = 0;
let 連結1 = "";
let 連結2 = "";
let 鋼琴透明度 = 0.25;
let 題庫 = [['沒想到（或就如你所知道）上帝真的存在，且你剛好有機會見面祂。<br><br>祂長什麼樣子？','電腦或機械','黑色小貓咪','老人'],
['想像你覺得你會覺得最幸福的一個場面。周圍有幾個人在？','沒有人','1個人','100多個人'],
['離開家鄉將近十年，好不容易回到老家，你意外發現家裡長滿了植物。<br><br>植物狀態如何?','枯死了','開花了','攀爬在所有牆壁上，長得很茂盛'],
['傍晚，你一個人走在街上，你突然記不起來你為什麼會在這裡。<br><br>路怎麼樣？','很暗，人少','很亮，人少','很亮，人多'],
['承上題，突然周邊的行人都停下來看著你。<br><br>為什麼？','你不小心作出很大的聲音','突然一個人大聲叫你','因為你很有名']];
let 推薦 = [["barber piano sonata op.26","barber excursions, no.1","ligeti atmosphere","hindemith ludus tonalis","liszt mephisto polka"],
["couperin les barricades mysterieuses","bach - petri schafe konnen sicher weiden","bach - busoni wachet auf, ruft uns die stimme","schubert - liszt ave maria","beethoven andante favori"],
["mozart piano sonata no.6 mov.3","beethoven piano sonata no.32 mov.2","beethoven piano sonata no.29 mov.4","schumann toccata","medtner forgotten melodies III op.40"],
["poulenc Melancolie","brahms klavierstucke op.118 no.2","chopin scherzo no.1","ravel jeux d'eau","ravel le tombeau de couperin no.6"],
["chopin sonata no.3","liszt ballade no.2","schumann etude symphoniques","schubert wanderer fantasie","brahms variations on a theme by paganini"],
["wagner - liszt tannhauser overture","alkan sonata les quatre ages 2nd movement","tausig das geisterschiff","prokofiev piano concerto no.2"]];
let 連結群 = [["https://youtu.be/lCBNjslju8o","https://youtu.be/UkaXAA8P4_8","https://youtu.be/qPr4vRRQKvQ","https://youtu.be/ok53QwG6dTg","https://youtu.be/PEInHhTac24"],
["https://youtu.be/uZWf9neUf1I","https://youtu.be/YsUgqO9ZFUk","https://youtu.be/YnUNxf0jkTE","https://youtu.be/GmGEEVFAoDU","https://youtu.be/iaNwUTDLxbQ"],
["https://youtu.be/TW-K7jfBv4w","https://youtu.be/syetlcLqIGA","https://youtu.be/wPi17PSXbj0","https://youtu.be/XT68hCACDQc","https://youtu.be/eWnZGNwikho"],
["https://youtu.be/UWR7_Z7YThA","https://youtu.be/cb8QPgQHsag","https://youtu.be/38VShqkukWY","https://youtu.be/J_36x1_LKgg","https://youtu.be/UORxpTn-pOE"],
["https://youtu.be/tFYsSzek_4g","https://youtu.be/m90vsN3SjvM","https://youtu.be/O20CiudpKPg","https://youtu.be/OJQQ0fPemaE","https://youtu.be/1EIE78D0m1g"],
["https://youtu.be/13zFjZ7OLDw","https://youtu.be/sotFMQRZCx0","https://youtu.be/YuoP2RIqyrs","https://youtu.be/xcte8hM6kYA"]]

let 總分計算 = 0;

function 題目隨機化(){
    if(Math.floor(Math.random()*6)==5){
        答案順序隨機化 = [0,1,2];
    }
    else if(Math.floor(Math.random()*6)==4){
        答案順序隨機化 = [0,2,1];
    }
    else if(Math.floor(Math.random()*6)==3){
        答案順序隨機化 = [1,0,2];
    }
    else if(Math.floor(Math.random()*6)==2){
        答案順序隨機化 = [1,2,0];
    }
    else if(Math.floor(Math.random()*6)==1){
        答案順序隨機化 = [2,0,1];
    }
    else{
        答案順序隨機化 = [2,1,0];
    }    
}


let 高 = window.innerHeight;
let 寬 = window.innerWidth;


//let 高 = 667;
//let 寬 = 375;

let 投影螢幕長寬 = (高 > 寬) ? 高 : 寬;
let 投影螢幕半徑 = 投影螢幕長寬 / 2;


let x中心 = 寬/2;
let y中心 = 高/2;
let 當前位子 = 0;
let 起始位子 = 2;
let 方形數量 = 50;
let 音符數量 = 110;
let x偏移 = 0;
let y偏移 = 0;
let 軸心旋轉半徑 = 投影螢幕長寬/8;
let 當前弧度 = 0;
let 音符放大比例 = 投影螢幕長寬*起始位子/80
let x起點 = 0;
let y起點 = 0;
let 音符縮放 = 0;
let 前進速度弧度 =0;




let 答1 = document.getElementById('答1');
let 答1內文 = document.getElementById('答1內文');
答1.addEventListener('click',按下答案1);
let 答2 = document.getElementById('答2');
let 答2內文 = document.getElementById('答2內文');
答2.addEventListener('click',按下答案2);
let 答3 = document.getElementById('答3');
let 答3內文 = document.getElementById('答3內文');
答3.addEventListener('click',按下答案3);
let 題目內文 = document.getElementById('題目內文');
let 背景 = document.getElementById('背景');
let 模糊 = document.getElementById('模糊');


let 點1 = document.getElementById('點1');
let 點2 = document.getElementById('點2');
let 點3 = document.getElementById('點3');
let 點4 = document.getElementById('點4');
let 點5 = document.getElementById('點5');
let 變白 = document.getElementById('變白');

let 社團標誌 = document.getElementById('社團標誌');
社團標誌.addEventListener('click',球滾出來);
let fb = document.getElementById('fb');
let ig = document.getElementById('ig');


let 球位子 = 0;

function 球滾出來(){

  if(球位子==0){
     球位子 = 1;
     社團標誌.removeEventListener('click',球滾出來);

     fb.addEventListener("animationend",function 消失fb1(e){
        fb.removeEventListener("animationend",消失fb1);
    },false);
    
    ig.addEventListener("animationend",function 消失ig1(e){
        ig.removeEventListener("animationend",消失ig1);
        社團標誌.addEventListener('click',球滾出來);
    },false);



     fb.style.display='flex';
     
     fb.style.animation= "fb往左 1s 1 forwards";
     
     ig.style.display='flex';

     ig.style.animation= "ig往左 1.3s 1 forwards";
    }
  else{

    球位子 = 0;

    社團標誌.removeEventListener('click',球滾出來);

    fb.addEventListener("animationend",function 消失fb(e){
        fb.style.display= 'none';
        fb.removeEventListener("animationend",消失fb);
    },false);
    
    ig.addEventListener("animationend",function 消失ig(e){
        ig.style.display= 'none';
        ig.removeEventListener("animationend",消失ig);
        社團標誌.addEventListener('click',球滾出來);
    },false);

    fb.style.display='flex';

    ig.style.display='flex';

    fb.style.animation= "fb往右 2.2s 1 forwards";

    ig.style.animation= "ig往右 2.6s 1 forwards";

   }
  
}



//視窗大小變動偵測

window.onresize = function() {
    高 = window.innerHeight;
    寬 = window.innerWidth;
    投影螢幕長寬 = (高 > 寬) ? 高 : 寬;
    投影螢幕半徑 = 投影螢幕長寬 / 2;
    x中心 = 寬/2;
    y中心 = 高/2;
    軸心旋轉半徑 = 投影螢幕長寬/8;
    音符放大比例 = 投影螢幕長寬*起始位子/80
    //變白.style.height= `${高}px`;
    //變白.style.width= `${寬}px`;
    //模糊.style.height= `${高}px`;
    //模糊.style.width= `${寬}px`;
    
    畫鋼琴();
}

function 按下答案1(){
    按下答案(1);
    答案1高亮 = 1;
    答案2高亮 = 0;
    答案3高亮 = 0;
}

function 按下答案2(){
    按下答案(2);
    答案1高亮 = 0;
    答案2高亮 = 1;
    答案3高亮 = 0;
}

function 按下答案3(){
    按下答案(3);
    答案1高亮 = 0;
    答案2高亮 = 0;
    答案3高亮 = 1;
}


function 按下答案(num){
  if(答題計時==0&&當前步驟 <5){
    當前步驟++;
    總分計算+=答案順序隨機化[num-1];
    答題計時=1;
    向前衝計時=1;
    內文已更新 = false;
  }
}

//初始化方形線條
/*let 方形html ='';
for(let i = 0;i<音符數量 ; i++){
  方形html+=`<rect id="b${i}" x="10" y="10" width="30" height="30" stroke="rgb(100, 200, 200)" fill="transparent" stroke-width="1"/>`
}
document.getElementById('方群').innerHTML = 方形html;*/




//初始化音符
let 音符html ='';
for(let i = 0;i<音符數量 ; i++){
    音符html+=`<path id="b${i}" class="line" d="M 0 58 C 0 74, 6 78, 18 78, 31 78, 36 75, 36 59, 36 51, 36 35, 36 29, 36 37, 59 34, 59 40, 59 11, 42 19, 32 1, 32 5, 32 8, 32 45, 31 40, 25 40, 18 40, 7 40, 0 43, 0 58 " stroke="rgb(255,255,255)" stroke-width="0" stroke-linejoin="round" fill="transparent" stroke-opacity="0.3"/>`
}
document.getElementById('音群').innerHTML = 音符html;

function 畫鋼琴(){
    let 鋼琴放大比例y = 高 * 0.86 / 65;
    let 鋼琴放大比例x = (高 * 0.06 + 寬 * 0.7)/44;
    if(鋼琴放大比例x * 44 > (500 + 0.06*高)){
        鋼琴放大比例x = (500 + 0.06*高)/44;
    }
    
    
    //document.getElementById('鋼琴').innerHTML = `<path id="琴" class="line" d="M 0 ${17*鋼琴放大比例y} L 0 ${65*鋼琴放大比例y} L ${44*鋼琴放大比例x} ${65*鋼琴放大比例y} L ${44*鋼琴放大比例x} ${49*鋼琴放大比例y} C ${44*鋼琴放大比例x} ${40*鋼琴放大比例y} ${40*鋼琴放大比例x} ${36*鋼琴放大比例y} ${30*鋼琴放大比例x} ${32*鋼琴放大比例y} C ${27*鋼琴放大比例x} ${31*鋼琴放大比例y} ${24*鋼琴放大比例x} ${29*鋼琴放大比例y} ${23*鋼琴放大比例x} ${26*鋼琴放大比例y} C ${20*鋼琴放大比例x} ${12*鋼琴放大比例y} ${4*鋼琴放大比例x} ${3*鋼琴放大比例y} 0 ${15*鋼琴放大比例y}" stroke="rgb(0,0,0)" stroke-width="0" stroke-linejoin="round" fill="white" fill-opacity="${鋼琴透明度}" stroke-opacity="0.3"/>`;

    document.getElementById('鋼琴').innerHTML = `<path id="琴" class="line" d="M 0 0 L 0 ${65*鋼琴放大比例y} L ${44*鋼琴放大比例x} ${65*鋼琴放大比例y} C ${44*鋼琴放大比例x} ${30*鋼琴放大比例y} ${44*鋼琴放大比例x} ${18*鋼琴放大比例y} ${27*鋼琴放大比例x} ${18*鋼琴放大比例y} C ${11*鋼琴放大比例x} ${18*鋼琴放大比例y} ${17*鋼琴放大比例x} 0 0 0 " stroke="rgb(0,0,0)" stroke-width="0" stroke-linejoin="round" fill="white" fill-opacity="${鋼琴透明度}" stroke-opacity="0.3"/>`;
    
}


//for(let k = Math.floor(當前步驟)-1 ;k<音符數量;k++){

    let 極限繪製 = 0;

function 畫音符(){

    極限繪製 = Math.floor(當前位子)+30;

    if(極限繪製>音符數量){
        極限繪製=音符數量;
    }

    for(let k = Math.floor(當前位子)-2 ;k<極限繪製;k++){
        if(k<0){
            k=0;
        }
        x副偏移 = Math.sin(當前弧度 + k /2 + c/40)*軸心旋轉半徑/5;
        y副偏移 = Math.cos(當前弧度 + k /2 + c/40)*軸心旋轉半徑/5;
        if(當前位子-起始位子<k-0.1){
          x起點 = 100+x中心 - ((投影螢幕半徑 - x偏移 - x副偏移) * 起始位子 / (k + 起始位子 - 當前位子));
          y起點 = -100+y中心 - ((投影螢幕半徑 - y偏移 - y副偏移) * 起始位子 / (k + 起始位子 - 當前位子));
          音符縮放 = 音符放大比例 / (k + 起始位子 - 當前位子);
          document.getElementById(`b${k}`).setAttribute('d', `M ${x起點+0*音符縮放} ${y起點+58*音符縮放} C ${x起點+0*音符縮放} ${y起點+74*音符縮放}, ${x起點+6*音符縮放} ${y起點+78*音符縮放}, ${x起點+18*音符縮放} ${y起點+78*音符縮放}, ${x起點+31*音符縮放} ${y起點+78*音符縮放}, ${x起點+36*音符縮放} ${y起點+75*音符縮放}, ${x起點+36*音符縮放} ${y起點+59*音符縮放}, ${x起點+36*音符縮放} ${y起點+51*音符縮放}, ${x起點+36*音符縮放} ${y起點+35*音符縮放}, ${x起點+36*音符縮放} ${y起點+29*音符縮放}, ${x起點+36*音符縮放} ${y起點+37*音符縮放}, ${x起點+59*音符縮放} ${y起點+34*音符縮放}, ${x起點+59*音符縮放} ${y起點+40*音符縮放}, ${x起點+59*音符縮放} ${y起點+11*音符縮放}, ${x起點+42*音符縮放} ${y起點+19*音符縮放}, ${x起點+32*音符縮放} ${y起點+1*音符縮放}, ${x起點+32*音符縮放} ${y起點+5*音符縮放}, ${x起點+32*音符縮放} ${y起點+8*音符縮放}, ${x起點+32*音符縮放} ${y起點+45*音符縮放}, ${x起點+31*音符縮放} ${y起點+40*音符縮放}, ${x起點+25*音符縮放} ${y起點+40*音符縮放}, ${x起點+18*音符縮放} ${y起點+40*音符縮放}, ${x起點+7*音符縮放} ${y起點+40*音符縮放}, ${x起點+0*音符縮放} ${y起點+43*音符縮放}, ${x起點+0*音符縮放} ${y起點+58*音符縮放}`);
          document.getElementById(`b${k}`).setAttribute('stroke-width', `${起始位子 / (k + 起始位子 - 當前位子) * 8 }`);
          }
        else{
            document.getElementById(`b${k}`).setAttribute('stroke-width', '0');
        }
    }
}

function 畫方(){
  
 for(let k = 0;k<音符數量;k++){
   
   if(當前位子-起始位子<k-0.001){
     document.getElementById(`b${k}`).setAttribute('x', `${ x中心 - ((投影螢幕半徑 - x偏移) * 起始位子 / (k + 起始位子 - 當前位子)) }`);
     document.getElementById(`b${k}`).setAttribute('y', `${ y中心 - ((投影螢幕半徑 - y偏移) * 起始位子 / (k + 起始位子 - 當前位子)) }`);
     document.getElementById(`b${k}`).setAttribute('width', `${投影螢幕長寬 *起始位子 / (k + 起始位子 - 當前位子)}`);
     document.getElementById(`b${k}`).setAttribute('height', `${投影螢幕長寬 * 起始位子 / (k + 起始位子 - 當前位子)}`);
     document.getElementById(`b${k}`).setAttribute('stroke-width', `${起始位子 / (k + 起始位子 - 當前位子) * 3 }`);
     }
   }
 }

function 三角函數求偏移(){
   x偏移= Math.sin(當前弧度)*軸心旋轉半徑*1.8;
   y偏移= Math.cos(當前弧度)*軸心旋轉半徑;
}

let 推薦曲目 = document.getElementById('推薦曲目');
let 推薦的是 = document.getElementById('推薦的是');
let 推薦清單1 = document.getElementById('推薦清單1');
let 推薦清單2 = document.getElementById('推薦清單2');

//點點操控也在這

let 隨機化稀釋 = 0;

function 文字操控(){
    if(答題計時<=100){
        if(當前步驟>4){
            if(答題計時<=20){
                答1.style.transform = `translate(-50%,0%) scale(${1+答案1高亮*答題計時/1600})`;
                答2.style.transform = `translate(-50%,0%) scale(${1+答案2高亮*答題計時/1600})`;
                答3.style.transform = `translate(-50%,0%) scale(${1+答案3高亮*答題計時/1600})`;
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*答題計時/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*答題計時/30)})`;
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*答題計時/30)})`;
                答1.style.borderColor = `rgba(255, 255, 255, ${(答案1高亮*答題計時/10)})`;
                答2.style.borderColor = `rgba(255, 255, 255, ${(答案2高亮*答題計時/10)})`; 
                答3.style.borderColor = `rgba(255, 255, 255, ${(答案3高亮*答題計時/10)})`;  
            }
            else if(答題計時>20 && 答題計時<=100){
                答1.style.transform = `translate(-50%,0%) scale(${1+((20/1600)-(答題計時-20)/4/1600)*答案1高亮})`;
                答2.style.transform = `translate(-50%,0%) scale(${1+((20/1600)-(答題計時-20)/4/1600)*答案2高亮})`;
                答3.style.transform = `translate(-50%,0%) scale(${1+((20/1600)-(答題計時-20)/4/1600)*答案3高亮})`;
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*(20-(答題計時-20)/4)/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*(20-(答題計時-20)/4)/30)})`; 
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*(20-(答題計時-20)/4)/30)})`; 
                答1.style.borderColor = `rgba(255, 255, 255, ${(答案1高亮*(20-(答題計時-15)/4)/20)})`; 
                答2.style.borderColor = `rgba(255, 255, 255, ${(答案2高亮*(20-(答題計時-15)/4)/20)})`; 
                答3.style.borderColor = `rgba(255, 255, 255, ${(答案3高亮*(20-(答題計時-15)/4)/20)})`; 
            }
            答1.style.opacity = `${(100-答題計時)/100}`;
            答2.style.opacity = `${(100-答題計時*1.2)/100}`;
            答3.style.opacity = `${(100-答題計時*1.4)/100}`;
            答1內文.style.opacity = `${((100-答題計時*1.4)/100)*-(答案1高亮-1)+答案1高亮-答案1高亮/(100-答題計時)*5}`;
            答2內文.style.opacity = `${((100-答題計時*1.6)/100)*-(答案2高亮-1)+答案2高亮-答案2高亮/(100-答題計時)*5}`;
            答3內文.style.opacity = `${((100-答題計時*1.8)/100)*-(答案3高亮-1)+答案3高亮-答案3高亮/(100-答題計時)*5}`;
            題目內文.style.opacity = `${(100-答題計時*1.2)/100}`;
            背景.style.opacity = `${(100-答題計時)/100}`;
            題目.style.opacity = `${(100-答題計時)/100}`;
            點1.style.opacity = `${(100-答題計時)/100}`;
            點2.style.opacity = `${(100-答題計時)/100}`;
            點3.style.opacity = `${(100-答題計時)/100}`;
            點4.style.opacity = `${(100-答題計時)/100}`;
            點5.style.opacity = `${(100-答題計時)/100}`;


        }
        else{
            if(答題計時<=20){
                答1.style.transform = `translate(-50%,0%) scale(${1+答案1高亮*答題計時/1600})`;
                答2.style.transform = `translate(-50%,0%) scale(${1+答案2高亮*答題計時/1600})`;
                答3.style.transform = `translate(-50%,0%) scale(${1+答案3高亮*答題計時/1600})`;
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*答題計時/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*答題計時/30)})`;
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*答題計時/30)})`;
                答1.style.borderColor = `rgba(255, 255, 255, ${(答案1高亮*答題計時/10)})`;
                答2.style.borderColor = `rgba(255, 255, 255, ${(答案2高亮*答題計時/10)})`; 
                答3.style.borderColor = `rgba(255, 255, 255, ${(答案3高亮*答題計時/10)})`;  
            }
            else if(答題計時>20 && 答題計時<=100){
                答1.style.transform = `translate(-50%,0%) scale(${1+((20/1600)-(答題計時-20)/4/1600)*答案1高亮})`;
                答2.style.transform = `translate(-50%,0%) scale(${1+((20/1600)-(答題計時-20)/4/1600)*答案2高亮})`;
                答3.style.transform = `translate(-50%,0%) scale(${1+((20/1600)-(答題計時-20)/4/1600)*答案3高亮})`;
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*(20-(答題計時-20)/4)/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*(20-(答題計時-20)/4)/30)})`; 
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*(20-(答題計時-20)/4)/30)})`; 
                答1.style.borderColor = `rgba(255, 255, 255, ${(答案1高亮*(20-(答題計時-15)/4)/20)})`; 
                答2.style.borderColor = `rgba(255, 255, 255, ${(答案2高亮*(20-(答題計時-15)/4)/20)})`; 
                答3.style.borderColor = `rgba(255, 255, 255, ${(答案3高亮*(20-(答題計時-15)/4)/20)})`; 
            }

            答1.style.opacity = `${(100-答題計時/2)/100}`;
            答2.style.opacity = `${(100-答題計時/2)/100}`;
            答3.style.opacity = `${(100-答題計時/2)/100}`;
            答1內文.style.opacity = `${((100-答題計時*1.4)/100)*-(答案1高亮-1)+答案1高亮-答案1高亮/(100-答題計時)*5}`;
            答2內文.style.opacity = `${((100-答題計時*1.6)/100)*-(答案2高亮-1)+答案2高亮-答案2高亮/(100-答題計時)*5}`;
            答3內文.style.opacity = `${((100-答題計時*1.8)/100)*-(答案3高亮-1)+答案3高亮-答案3高亮/(100-答題計時)*5}`;
            題目內文.style.opacity = `${(100-答題計時*1.2)/100}`;

        }

        if(當前步驟>0){
            if(當前步驟==1){
                點1.style.backgroundColor= `rgba(255, 255, 255, ${0.8-答題計時/200})`;
                點1.style.transform = `scale(${(100-答題計時)/200+1}, ${(100-答題計時)/200+1})`;
            }
            if(當前步驟==2){
                點2.style.backgroundColor= `rgba(255, 255, 255, ${0.8-答題計時/200})`;
                點2.style.transform = `scale(${(100-答題計時)/200+1}, ${(100-答題計時)/200+1})`;
            }
            if(當前步驟==3){
                點3.style.backgroundColor= `rgba(255, 255, 255, ${0.8-答題計時/200})`;
                點3.style.transform = `scale(${(100-答題計時)/200+1}, ${(100-答題計時)/200+1})`;
            }
            if(當前步驟==4){
                點4.style.backgroundColor= `rgba(255, 255, 255, ${0.8-答題計時/200})`;
                點4.style.transform = `scale(${(100-答題計時)/200+1}, ${(100-答題計時)/200+1})`;
            }
            if(當前步驟==5){
                點5.style.backgroundColor= `rgba(255, 255, 255, ${0.8-答題計時/200})`;
                點5.style.transform = `scale(${(100-答題計時)/200+1}, ${(100-答題計時)/200+1})`;
            }
        }

    }
    else{
        if(當前步驟<5){
            if(答題計時>=101&&內文已更新==false){
                
                隨機化稀釋++;
                if(隨機化稀釋 > 1){
                    隨機化稀釋 = 0;
                    題目隨機化();
                }

                題目內文.innerHTML=`${題庫[當前步驟][0]}`;
                答1內文.innerHTML=`${題庫[當前步驟][答案順序隨機化[0]+1]}`;
                答2內文.innerHTML=`${題庫[當前步驟][答案順序隨機化[1]+1]}`;
                答3內文.innerHTML=`${題庫[當前步驟][答案順序隨機化[2]+1]}`;

                //內文已更新 = true;
            }
            答1.style.opacity = `${答題計時/2/100}`;
            答2.style.opacity = `${答題計時/2/100}`;
            答3.style.opacity = `${答題計時/2/100}`;
            答1內文.style.opacity = `${(100-(200-答題計時)*1.4)/100}`;
            答2內文.style.opacity = `${(100-(200-答題計時)*1.6)/100}`;
            答3內文.style.opacity = `${(100-(200-答題計時)*1.8)/100}`;
            題目內文.style.opacity = `${(100-(200-答題計時)*1.2)/100}`;
        }

        //生成回答

        else{
          if(答題計時>=101 && 內文已更新==false){
            
            if(總分計算<=1){

                推薦1序號 = Math.floor(Math.random()*推薦[0].length);
                推薦清單1.innerHTML = 推薦[0][推薦1序號]+'<div class="三角"></div>';
                連結1 = `${連結群[0][推薦1序號]}`
                
                while(1){
                    推薦2序號 = Math.floor(Math.random()*推薦[0].length);
                    if(推薦2序號 == 推薦1序號){
                        continue;
                    }
                    推薦清單2.innerHTML = 推薦[0][推薦2序號]+'<div class="三角2"></div>';
                    連結2 = `${連結群[0][推薦2序號]}`
                    break;
                }


            }
            else if(總分計算<=3){
                推薦1序號 = Math.floor(Math.random()*推薦[1].length);
                推薦清單1.innerHTML = 推薦[1][推薦1序號]+'<div class="三角"></div>';
                連結1 = `${連結群[1][推薦1序號]}`
                
                
                while(1){
                    推薦2序號 = Math.floor(Math.random()*推薦[1].length);
                    if(推薦2序號 == 推薦1序號){
                        continue;
                    }
                    推薦清單2.innerHTML = 推薦[1][推薦2序號]+'<div class="三角2"></div>';
                    連結2 = `${連結群[1][推薦2序號]}`
                    break;
                }
            }
            else if(總分計算<=5){
                推薦1序號 = Math.floor(Math.random()*推薦[2].length);
                推薦清單1.innerHTML = 推薦[2][推薦1序號]+'<div class="三角"></div>';
                連結1 = `${連結群[2][推薦1序號]}`
                
                
                while(1){
                    推薦2序號 = Math.floor(Math.random()*推薦[2].length);
                    if(推薦2序號 == 推薦1序號){
                        continue;
                    }
                    推薦清單2.innerHTML = 推薦[2][推薦2序號]+'<div class="三角2"></div>';
                    連結2 = `${連結群[2][推薦2序號]}`
                    break;
                }
            }
            else if(總分計算<=7){
                推薦1序號 = Math.floor(Math.random()*推薦[3].length);
                推薦清單1.innerHTML = 推薦[3][推薦1序號]+'<div class="三角"></div>';
                連結1 = `${連結群[3][推薦1序號]}`
                
                
                while(1){
                    推薦2序號 = Math.floor(Math.random()*推薦[3].length);
                    if(推薦2序號 == 推薦1序號){
                        continue;
                    }
                    推薦清單2.innerHTML = 推薦[3][推薦2序號]+'<div class="三角2"></div>';
                    連結2 = `${連結群[3][推薦2序號]}`
                    break;
                }
            }
            else if(總分計算<=9){
                推薦1序號 = Math.floor(Math.random()*推薦[4].length);
                推薦清單1.innerHTML = 推薦[4][推薦1序號]+'<div class="三角"></div>';
                連結1 = `${連結群[4][推薦1序號]}`
                
                
                while(1){
                    推薦2序號 = Math.floor(Math.random()*推薦[4].length);
                    if(推薦2序號 == 推薦1序號){
                        continue;
                    }
                    推薦清單2.innerHTML = 推薦[4][推薦2序號]+'<div class="三角2"></div>';
                    連結2 = `${連結群[4][推薦2序號]}`
                    break;
                }
            }
            else{
                推薦1序號 = Math.floor(Math.random()*推薦[5].length);
                推薦清單1.innerHTML = 推薦[5][推薦1序號]+'<div class="三角"></div>';
                連結1 = `${連結群[5][推薦1序號]}`
                
                
                while(1){
                    推薦2序號 = Math.floor(Math.random()*推薦[5].length);
                    if(推薦2序號 == 推薦1序號){
                        continue;
                    }
                    推薦清單2.innerHTML = 推薦[5][推薦2序號]+'<div class="三角2"></div>';
                    連結2 = `${連結群[5][推薦2序號]}`
                    break;
                }
            }
            推薦曲目.style.display = 'flex';
            推薦的是.style.display = 'flex';
            推薦清單1.style.display = 'flex';
            推薦清單2.style.display = 'flex';
            內文已更新 = true;
            }

        


        推薦曲目.style.opacity = `${(答題計時-600)/100}`;
        推薦的是.style.opacity = `${(答題計時-600)/100}`;
        推薦清單2.style.opacity = `${(答題計時-600)/100}`;
        推薦清單1.style.opacity = `${(答題計時-600)/100}`;




        }

        if(當前步驟==0){
            點1.style.backgroundColor= `rgba(255, 255, 255, ${0.3+(答題計時-100)/200})`;
            點1.style.transform = `scale(${1.5-(200-答題計時)/200}, ${(1.5-(200-答題計時)/200)}`;
        }
        if(當前步驟==1){
            點2.style.backgroundColor= `rgba(255, 255, 255, ${0.3+(答題計時-100)/200})`;
            點2.style.transform = `scale(${1.5-(200-答題計時)/200}, ${(1.5-(200-答題計時)/200)}`;
        }
        if(當前步驟==2){
            點3.style.backgroundColor= `rgba(255, 255, 255, ${0.3+(答題計時-100)/200})`;
            點3.style.transform = `scale(${1.5-(200-答題計時)/200}, ${(1.5-(200-答題計時)/200)}`;
        }
        if(當前步驟==3){
            點4.style.backgroundColor= `rgba(255, 255, 255, ${0.3+(答題計時-100)/200})`;
            點4.style.transform = `scale(${1.5-(200-答題計時)/200}, ${(1.5-(200-答題計時)/200)}`;
        }
        if(當前步驟==4){
            點5.style.backgroundColor= `rgba(255, 255, 255, ${0.3+(答題計時-100)/200})`;
            點5.style.transform = `scale(${1.5-(200-答題計時)/200}, ${(1.5-(200-答題計時)/200)}`;
        }

    }
}





function 色相轉換(){
    模糊.style = `position: absolute; top: 0vh; height: ${高*1.2}px;width: ${寬}px;background-color: rgba(195, 195, 195, 0);-webkit-backdrop-filter: blur(1px) hue-rotate(${(當前步驟-1)*72+72/200*向前衝計時}deg) invert(${反相}); backdrop-filter: blur(1px) hue-rotate(${(當前步驟-1)*72+72/200*向前衝計時}deg) invert(${反相})`;
}

function 測 (){
    alert("This is a test!"); 
}

let 方向 = 1;

function 添加超連結(){
    推薦清單1.addEventListener('click',前往連結1);
    推薦清單2.addEventListener('click',前往連結2);
}

function 前往連結1(){
    window.open(`${連結1}`);
}

function 前往連結2(){
    window.open(`${連結2}`);
}





function loop(){
  if(c==0){
    //題目隨機化();
    答題計時=100;
  }

  c++;
    當前位子 += (Math.sin(前進速度弧度)*0.01+0.004)*方向;
    if(當前步驟<5){
        if(向前衝計時<=100){
            //當前位子 += 向前衝計時/1000*方向
            當前位子 += ((Math.sin(-Math.PI / 2 + Math.PI * 向前衝計時 / 100 * 方向))+1)/20;
        }
        else{
            //當前位子 += (200-向前衝計時)/1000*方向
            當前位子 += ((Math.sin(-Math.PI / 2 + Math.PI * (200-向前衝計時) / 100 * 方向))+1)/20;
            }
        }
    else{
        if(向前衝計時<=200){
            當前位子 += ((Math.sin(-Math.PI / 2 + Math.PI * 向前衝計時 / 200 * 方向))+1)/5;
        }
        else{
            當前位子 += ((Math.sin(-Math.PI / 2 + Math.PI * (400-向前衝計時) / 200 * 方向))+1)/5;
        }
    }
  
  if(當前位子>95){
    方向 = -1;  
  }
  if(當前位子<0){
    方向 = 1;  
  }


  當前弧度+=(Math.PI / 180 / 5);
  前進速度弧度+=(Math.PI / 180 / 2.3);
  三角函數求偏移();
  //畫方();
  畫音符();
  畫鋼琴();

  if(答題計時>0){
    答題計時+=3.1;
    文字操控();

    if(當前步驟<5){
        if(答題計時>200){
            答題計時=0;
        }
    }
    else{
        if(答題計時>600){
            document.getElementById('容器2').style.display = "flex"
        }
        if(答題計時>1000){
            document.getElementById('社團標誌').style = `position: fixed;z-index: 1; -webkit-filter: drop-shadow(7px 7px 15px rgba(123, 127, 255, 0.4)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.4)) invert(0);filter: drop-shadow(7px 7px 15px rgba(123, 127, 255, 0.4)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.4)) invert(0);right:16px;bottom: 16px;transform: scale(0.6);animation: 標誌 8s infinite;`
            答題計時=0;
            添加超連結();
        }
    }
  }

  if(向前衝計時>0){
    向前衝計時+=1.3;
    色相轉換();


    if(當前步驟<5){
        if(向前衝計時>200){
            向前衝計時=0;
        }
    }
    else{
        if(向前衝計時>400){
            向前衝計時=0;
        }
        if(答題計時<=100&&答題計時>0){
            document.getElementById('社團標誌').style = `position: fixed;z-index: 1; -webkit-filter: drop-shadow(7px 7px 15px rgba(123, 127, 255, 0.4)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.4)) invert(${1-(答題計時)/100});filter: drop-shadow(7px 7px 15px rgba(123, 127, 255, 0.4)) drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.4)) invert(${1-(答題計時)/100});right:16px;bottom: 16px;transform: scale(0.6);animation: 標誌2 5.5s infinite;`
            鋼琴透明度 = 0.25-答題計時/100/4;
        }
        if(答題計時>100&&答題計時<=300){
            變白.style.display='flex'
            變白.style.opacity=`${(答題計時-100)/200}`
        }
        if(答題計時>300&&答題計時<=450){
            變白.style.backgroundColor=`rgba(255, 255, 255,${(答題計時-300)/150}`
        }
        if(答題計時>500){
            反相 = (答題計時-500)/200;
        }
        if(答題計時>450&&答題計時<=600){
            變白.style.backgroundColor=`rgba(255, 255, 255,${1-(答題計時-450)/150}`
        }
        if(答題計時>600){
            
            document.getElementById('音群').setAttribute("class","斑馬");
            變白.style.backgroundColor=`rgba(255, 255, 255,0}`
            變白.style.opacity=`${1-(答題計時-600)/100}`
            鋼琴透明度 = (答題計時-600)/100/8;
        }

    }
  }
  
  requestAnimationFrame(loop);

}

loop();