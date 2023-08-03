const inputbox = document.getElementById("input-box");
const list_container = document.getElementById("list-container");
function Addtask(){
    if(inputbox.value === ''){
        alert("You Must Write Something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "*";
        li.appendChild(span);       
    }
    inputbox.value = "";
    SaveData();
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);


function SaveData(){
    localStorage.setItem("data", list_container.innerHTML);
}

function showTask(){
    list_container.innerHTML = localStorage.getItem("data");
}

showTask();