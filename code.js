const inputbox = document.getElementById("inputbox");  
const listcontainer = document.getElementById("uli"); 

function addtask(){
    if(inputbox.value ===''){
        alert("awww ya lhbiba")
    } 
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; 
        listcontainer.appendChild(li); 
        let span = document.createElement("span"); 
        span.innerHTML= "\u00d7"; 
        li.appendChild(span);
    } 
    inputbox.value = " "; 
    savedata();
} 

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheked"); 
        savedata();
    }  
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove(); 
        savedata();
    }
} , false); 

function savedata(){
    localStorage.setItem("data" , listcontainer.innerHTML);
} 

function show(){
    listcontainer.innerHTML = localStorage.getItem("data") ;
} 

show();