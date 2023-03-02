
let rr = document.getElementById('rr');
let c = 0;


let 內文已更新 = false;
let 當前步驟 = 0;
let 答題計時 = 0;
let 答案順序隨機化 = [0,0,0];
let 答案1高亮 = 0;
let 答案2高亮 = 0;
let 答案3高亮 = 0;
let 題庫 = [['沒想到（或就如你所知道）上帝真的存在，且你剛好有機會見面祂。<br><br>祂長什麼樣子？','電腦或機械','黑色小貓咪','老人'],
['想像你覺得你會覺得最幸福的一個場面。周圍有幾個人在？','沒有人','1個人','100多個人'],
['離開家鄉將近十年，好不容易回到老家，你意外發現家裡長滿了植物。<br><br>植物狀態如何?','枯死了','開花了','攀爬在所有牆壁上，長得很茂盛'],
['傍晚，你一個人走在街上，你突然記不起來你為什麼會在這裡。<br><br>路怎麼樣？','很暗，人少','很亮，人少','很亮，人多'],
['承上題，突然周邊的行人都停下來看著你。<br><br>為什麼？','你不小心作出很大的聲音','突然一個人大聲叫你','因為你很有名']];
let 推薦 = ["barber piano sonata op.26<br><br>barber excursions, no.1<br><br>ligeti atmosphere<br><br>hindemith ludus tonalis<br><br>liszt mephisto polka",
"couperin les barricades mysterieuses<br><br>bach - petri schafe konnen sicher weiden<br><br>bach - busoni wachet auf, ruft uns die stimme<br><br>schubert - liszt ave maria<br><br>beethoven andante favori",
"mozart piano sonata no.6 mov.3<br><br>beethoven piano sonata no.26 mov.1<br><br>schumann toccata<br><br>chopin scherzo no.1<br><br>medtner forgotten melodies III op.40",
"poulenc Melancolie<br><br>brahms klavierstucke op.118 no.2<br><br>beethoven piano sonata no.29 mov.4<br><br>ravel jeux d'eau<br><br>ravel le tombeau de couperin no.6",
"chopin sonata no.3<br><br>liszt ballade no.2<br><br>schumann etude symphoniques<br><br>schubert wanderer fantasie<br><br>brahms variations on a theme by paganini",
"wagner - liszt tannhauser overture<br><br>alkan sonata les quatre ages 2nd movement<br><br>tausig das geisterschiff<br><br>prokofiev piano concerto no.2"];

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
let 音符數量 = 100;
let x偏移 = 0;
let y偏移 = 0;
let 軸心旋轉半徑 = 投影螢幕長寬/8;
let 當前弧度 = 0;
let 音符放大比例 = 投影螢幕長寬*起始位子/80
let x起點 = 0;
let y起點 = 0;
let 音符縮放 = 0;
let 前進速度弧度 =0;

window.onresize = function() {
    高 = window.innerHeight;
    寬 = window.innerWidth;
    投影螢幕長寬 = (高 > 寬) ? 高 : 寬;
    投影螢幕半徑 = 投影螢幕長寬 / 2;
    x中心 = 寬/2;
    y中心 = 高/2;
    軸心旋轉半徑 = 投影螢幕長寬/8;
    音符放大比例 = 投影螢幕長寬*起始位子/80
}

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
    內文已更新 = false;
  }
}

//初始化方形線條
/*let 方形html ='';
for(let i = 0;i<方形數量 ; i++){
  方形html+=`<rect id="b${i}" x="10" y="10" width="30" height="30" stroke="rgb(100, 200, 200)" fill="transparent" stroke-width="1"/>`
}
document.getElementById('方群').innerHTML = 方形html;
*/

//初始化音符
let 音符html ='';
for(let i = 0;i<音符數量 ; i++){
    音符html+=`<path id="b${i}" d="M 0 58 C 0 74, 6 78, 18 78, 31 78, 36 75, 36 59, 36 51, 36 35, 36 29, 36 37, 59 34, 59 40, 59 11, 42 19, 32 1, 32 5, 32 8, 32 45, 31 40, 25 40, 18 40, 7 40, 0 43, 0 58 " stroke="rgb(255,255,255)" stroke-width="1" stroke-linejoin="round" fill="transparent" stroke-opacity="0.3"/>`
}
document.getElementById('方群').innerHTML = 音符html;

function 畫音符(){
    for(let k = 0;k<音符數量;k++){
        x副偏移 = Math.sin(當前弧度 + k /2 + c/40)*軸心旋轉半徑/5;
        y副偏移 = Math.cos(當前弧度 + k /2 + c/40)*軸心旋轉半徑/5;
        if(當前位子-起始位子<k-0.1){
          x起點 = 100+x中心 - ((投影螢幕半徑 - x偏移 - x副偏移) * 起始位子 / (k + 起始位子 - 當前位子))+beta*100;
          y起點 = -100+y中心 - ((投影螢幕半徑 - y偏移 - y副偏移) * 起始位子 / (k + 起始位子 - 當前位子))+gamma*100;
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
  
 for(let k = 0;k<方形數量;k++){
   
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

//點點操控也在這

function 文字操控(){
    if(答題計時<=100){
        if(當前步驟>4){
            if(答題計時<=20){
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*答題計時/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*答題計時/30)})`;
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*答題計時/30)})`;
            }
            else if(答題計時>20 && 答題計時<=100){
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*(20-(答題計時-20)/4)/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*(20-(答題計時-20)/4)/30)})`; 
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*(20-(答題計時-20)/4)/30)})`; 
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
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*答題計時/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*答題計時/30)})`;
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*答題計時/30)})`;
            }
            else if(答題計時>20 && 答題計時<=100){
                答1.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案1高亮*(20-(答題計時-20)/4)/30)})`; 
                答2.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案2高亮*(20-(答題計時-20)/4)/30)})`; 
                答3.style.backgroundColor = `rgba(255, 255, 255, ${0.3+(答案3高亮*(20-(答題計時-20)/4)/30)})`; 
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

                題目隨機化();
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
        else{
        if(答題計時>=101 && 內文已更新==false){
            //生成回答
            if(總分計算<=1){
                推薦清單.innerHTML = 推薦[0];
            }
            else if(總分計算<=3){
                推薦清單.innerHTML = 推薦[1];
            }
            else if(總分計算<=5){
                推薦清單.innerHTML = 推薦[2];
            }
            else if(總分計算<=7){
                推薦清單.innerHTML = 推薦[3];
            }
            else if(總分計算<=9){
                推薦清單.innerHTML = 推薦[4];
            }
            else{
                推薦清單.innerHTML = 推薦[5];
            }
            推薦曲目.style.display = 'flex';
            推薦的是.style.display = 'flex';
            推薦清單.style.display = 'flex';
            內文已更新 = true;
            }
        推薦曲目.style.opacity = `${(答題計時-100)/100}`;
        推薦的是.style.opacity = `${(答題計時-100)/100}`;
        推薦清單.style.opacity = `${(答題計時-100)/100}`;
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

let alpha = 0;
let beta = 0;
let gamma = 0


if(window.DeviceOrientationEvent)
{
window.addEventListener('deviceorientation', DeviceOrientationHandler, false);
}
function DeviceOrientationHandler(event) {
alpha = event.alpha;
beta = event.beta;
gamma = event.gamma;
}



function 色相轉換(){
    模糊.style = `position: absolute;height: 100vh;width: 100vw;background-color: rgba(195, 195, 195, 0);-webkit-backdrop-filter: blur(1px) hue-rotate(${(當前步驟-1)*72+72/200*答題計時}deg); backdrop-filter: blur(1px) hue-rotate(${(當前步驟-1)*72+72/200*答題計時}deg)`;
}


let 方向 = 1;

function loop(){
  if(c==0){
    //題目隨機化();
    答題計時=100;
  }
  c++;
    當前位子 += (Math.sin(前進速度弧度)*0.01+0.004)*方向;
    if(當前步驟<5){
        if(答題計時<=100){
            當前位子 += 答題計時/1000*方向
        }
        else{
            當前位子 += (200-答題計時)/1000*方向
            }
        }
    else{
        if(答題計時<=100){
            當前位子 += 答題計時/350*方向
        }
        else{
            當前位子 += (200-答題計時)/350*方向
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

  if(答題計時>0){
    答題計時+=1.9;
    文字操控();
    色相轉換();
    if(答題計時>200){
        答題計時=0;
    }
  }
  
  requestAnimationFrame(loop);

}

loop();

