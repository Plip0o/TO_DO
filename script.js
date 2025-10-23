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

// CREATE       
        const visibility = document.createElement('img')
        visibility.src = 'img/visibility.png';
        visibility.id = `visibility-${taskid}`; //ainda não entendi direito como funciona esse contador

        li.appendChild(visibility);



        // const editTask = document.querySelector('img[src="img/edit.png"]')
        // editTask.id = "edit";

        // li.onclick = () => editTask (taskid)
        // console.log("oi")
// READ
// UPDATE
// DELETE
        task.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    }
}