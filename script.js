let taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('btnAdd');
let task = document.getElementById('task');
 

let taskIdCounter = 0

function addItem() {
    if(taskInput.value ==""){
        alert('digite uma nova tarefa');
        taskInput.focus();
    } else {
        let li = document.createElement('li'); 
        li.innerHTML = taskInput.value;
        
        const taskid = `task-${taskIdCounter}`
        
        li.dataset.id = taskid

        li.innerHTML += "<span> <img src='img/delete.png'></span>";
        li.innerHTML += "<span> <img src='img/edit.png'></span>";
        li.innerHTML += "<span> <img src='img/visibility.png'></span>";

        // li.onclick = () => editTask (taskid)

        task.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    }
}