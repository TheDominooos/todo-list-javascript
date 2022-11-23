if(JSON.parse(localStorage.getItem("tasks")) == null){
    tasks = [];
    var i = 0;
}else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
    var i=tasks.lenght;
}

for(var k=0; k<tasks.length; k++){
    console.log(tasks[k])
}


function addTask(){
    var text=document.getElementById('input').value;
    tasks[i]=text;
    i++
    updateDisplay();
}
function deleteTask(index){
    tasks.splice(index, 1);
    updateDisplay();
    i--;
}

function updateDisplay(){
    var j=0;
    document.getElementById('taskContainer').innerHTML="";
    while(j<tasks.length){
        document.getElementById('taskContainer').innerHTML+= ("<div id='task'>"+tasks[j]+"</div><div><button id='deleteButton' onclick=deleteTask("+j+")>Usuń</button></div><br>");
        j++;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(document.getElementById('taskContainer').innerHTML);
}


    