createDate("curentDate");

days("current_day");

document.getElementById("btn_1").addEventListener("click", function(){
  
  alert("Board updated Successfully")
  disable("btn_1");
  incress("Incre");
  deccress("decr");
  addection("new_section", "title_1");
  let zero = document.getElementById("decr").innerText;
   if(zero === "0"){
    alert("congrates!!! You have completed all the current task");
   }
})
document.getElementById("btn_2").addEventListener("click", function(){
  
  alert("Board updated Successfully")
  disable("btn_2");
  incress("Incre");
  deccress("decr");
  addection("new_section", "title_2");
  let zero = document.getElementById("decr").innerText;
   if(zero === "0"){
    alert("congrates!!! You have completed all the current task");
   }
})
document.getElementById("btn_3").addEventListener("click", function(){
  
  alert("Board updated Successfully")
  disable("btn_3");
  incress("Incre");
  deccress("decr");
  addection("new_section", "title_3");
  let zero = document.getElementById("decr").innerText;
   if(zero === "0"){
    alert("congrates!!! You have completed all the current task");
   }
})
document.getElementById("btn_4").addEventListener("click", function(){
  
  alert("Board updated Successfully")
  disable("btn_4");
  incress("Incre");
  deccress("decr");
  addection("new_section", "title_4");
  let zero = document.getElementById("decr").innerText;
   if(zero === "0"){
    alert("congrates!!! You have completed all the current task");
   }
})
document.getElementById("btn_5").addEventListener("click", function(){
  
  alert("Board updated Successfully")
  disable("btn_5");
  incress("Incre");
  deccress("decr");
  addection("new_section", "title_5");
  let zero = document.getElementById("decr").innerText;
   if(zero === "0"){
    alert("congrates!!! You have completed all the current task");
   }
  
})
document.getElementById("btn_6").addEventListener("click", function(){
  
  alert("Board updated Successfully")
 
  disable("btn_6");
  incress("Incre");
  deccress("decr");
  addection("new_section", "title_6");
  let zero = document.getElementById("decr").innerText;
   if(zero === "0"){
    alert("congrates!!! You have completed all the current task");
   }
})
 

document.getElementById("clear").addEventListener("click", function(){
  let removeSection = document.getElementById("new_section");
   removeSection.innerHTML = "";
})




