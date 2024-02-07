let htmlNumber = document.querySelector("#html-number");
let outerCircleHtml = document.querySelector(".html");

let cssNumber = document.querySelector("#css-number");
let outerCircleCss = document.querySelector(".css");

let jsNumber = document.querySelector("#js-number");
let outerCircleJs = document.querySelector(".js");

let progressStartValueHtml = 0;
let progressEndValueHtml = 85;   //add your level in numbers (0-100)

let progressStartValueCss = 0;
let progressEndValueCss = 75;   //add your level in numbers (0-100)

let progressStartValueJs = 0;
let progressEndValueJs = 70;    //add your level in numbers (0-100)

let speed = 40;

let processIndicatorHtml = setInterval(()=>{

    progressStartValueHtml++;
    outerCircleHtml.style.background = `conic-gradient(#26023b ${3.6*progressStartValueHtml}deg, white 0deg)`
    htmlNumber.innerText = progressStartValueHtml + "%";
    
    if(progressStartValueHtml === progressEndValueHtml){
        clearInterval(processIndicatorHtml);
    }

}, speed);

let processIndicatorCss = setInterval(()=>{

    progressStartValueCss++;
    outerCircleCss.style.background = `conic-gradient(#26023b ${3.6*progressStartValueCss}deg, white 0deg)`
    cssNumber.innerText = progressStartValueCss + "%";
    
    if(progressStartValueCss === progressEndValueCss){
        clearInterval(processIndicatorCss);
    }

}, speed);

let processIndicatorJs = setInterval(()=>{

    progressStartValueJs++;
    outerCircleJs.style.background = `conic-gradient(#26023b ${3.6*progressStartValueJs}deg, white 0deg)`
    jsNumber.innerText = progressStartValueJs + "%";
    
    if(progressStartValueJs === progressEndValueJs){
        clearInterval(processIndicatorJs);
    }

}, speed);