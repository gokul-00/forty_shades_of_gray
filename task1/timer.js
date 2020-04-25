var s = 1;
var m = 1;

function stop(n){
   var score =  (s + "." + m%1000)/n ;
   localStorage.setItem("t", s + "." + m%1000);
   localStorage.setItem("time",score.toFixed(3));
}

function sec(){
   var second=setInterval(function(){
   document.getElementById("seconds").innerHTML= s ;
   s++;
   },1000);
}
function msec(){
   var msecond=setInterval(function(){
   document.getElementById("milliseconds").innerHTML= "."+ m%1000 ;
   m+=10;
   },10);
}
function showtime(){
   document.getElementById("urtime").innerHTML ="your time :" +  localStorage.getItem("t");
   
 }