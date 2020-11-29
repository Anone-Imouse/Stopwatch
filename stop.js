  var num2=0;

function add(){
  var num=document.querySelector("#num");
    
num2++;


var num3=String(num2);

num.innerHTML=num3;
}

var btn=document.querySelector("#btn-1");

var btn2=document.querySelector("#btn-2");

var btn3=document.querySelector("#btn-3");



btn2.addEventListener("click",function(){
  var count=setInterval(add,1000);
});

btn3.addEventListener("click",function(){
  num2=0;
});

btn.addEventListener("click",function(){
clearInterval(count)
});

count = setInterval(add,1000);
