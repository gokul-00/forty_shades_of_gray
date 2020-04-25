
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
 function reorderscore(){
  var name = localStorage.getItem("name");
  var time = localStorage.getItem("time");

    if (typeof(Storage) !== "undefined") {
    if (localStorage.count) {
      localStorage.count = Number(localStorage.count)+1;
    } else {
      localStorage.count = 1;
    }
    }  
  if(localStorage.count < 6){
    var x = localStorage.count;

    if(x == 1){
      localStorage.setItem("name1",name);
      localStorage.setItem("time1",time);
    }
    else {
      order_5(x-1,time,name);
    }
   display();
 }  
  else{
  for(var i=5;i>0;i--){
    
    if(time < localStorage.getItem("time"+i)){
      if(i===1){
        reorder(i,5);
          localStorage.setItem("name1",name);
          localStorage.setItem("time1",time);
      }
      continue;
    }
    else{
      if(i === 5){
        break;
      }
      else if(i === 4){
        localStorage.removeItem("name"+5);
        localStorage.removeItem("time"+5);
        localStorage.setItem("name5",name);
        localStorage.setItem("time5",time);
      }
      else {
      localStorage.removeItem("name"+5);
      localStorage.removeItem("time"+5);
      reorder(i+1,5);
      localStorage.setItem("name"+(i+1),name);
      localStorage.setItem("time"+(i+1),time);
      break;
     }
    }
  }
   display();
  }
} 

  function reorder(n1,n2){ //make one step downfrom n1 till n2
     for(var j=n2;j>n1;j--){
       var temp_name = localStorage.getItem("name"+(j-1));
       var temp_time = localStorage.getItem("time"+(j-1));
       localStorage.setItem("name"+j,temp_name);
       localStorage.setItem("time"+j,temp_time);
       }
  }
  function order_5(k,time,name){
    
   
    for(var i=k;i>0;i--){
    
      if(time < localStorage.getItem("time"+i)){
        if(k===1){
        reorder(1,2);
        localStorage.setItem("name1",name);
        localStorage.setItem("time1",time);
      }
        else if(i===1){
          reorder(1,k+1);
          localStorage.setItem("name1",name);
          localStorage.setItem("time1",time);
        }
        else{
        continue;}
      }
      else{
        if(time > localStorage.getItem("time"+k)){
          localStorage.setItem("name"+(k+1),name);
          localStorage.setItem("time"+(k+1),time);
        }
        else{
        reorder(i+1,k+1);
        localStorage.setItem("name"+(i+1),name);
        localStorage.setItem("time"+(i+1),time);
        break;}
      }
    }
  }
  function display(){
   document.getElementById("name[1]").innerHTML = localStorage.getItem("name1");
   document.getElementById("time[1]").innerHTML = localStorage.getItem("time1");
   document.getElementById("name[2]").innerHTML = localStorage.getItem("name2");
   document.getElementById("time[2]").innerHTML = localStorage.getItem("time2");
   document.getElementById("name[3]").innerHTML = localStorage.getItem("name3");
   document.getElementById("time[3]").innerHTML = localStorage.getItem("time3");
   document.getElementById("name[4]").innerHTML = localStorage.getItem("name4");
   document.getElementById("time[4]").innerHTML = localStorage.getItem("time4");
   document.getElementById("name[5]").innerHTML = localStorage.getItem("name5");
   document.getElementById("time[5]").innerHTML = localStorage.getItem("time5");
  }