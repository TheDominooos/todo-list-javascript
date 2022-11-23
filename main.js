var tasks=[]
tasks = JSON.parse(localStorage.getItem("tasks"));
for(var k=0; k<tasks.length; k++){
    console.log(tasks[k])
}
var i=tasks.length;

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


    