var tasks = [];
var i=0;

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
        document.getElementById('taskContainer').innerHTML+= ("<div id='task'>"+tasks[j]+"<div><button id='deleteButton' onclick=deleteTask("+j+")>Usuń</button></div></div><br>");
        j++
    }
    console.log(document.getElementById('taskContainer').innerHTML);
}