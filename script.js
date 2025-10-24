//pega os elementos do HTML e coloca eles em uma var para serem usados no JS
let taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('btnAdd');
let task = document.getElementById('task');
 
//cria uma var que vai servir como um contador 
let taskIdCounter = 0

function addItem() {
    if(taskInput.value ==""){
        alert('digite uma nova tarefa');
        taskInput.focus();
    } else {
// CREATE 
        //cria um elemento, um li
        let li = document.createElement('li'); 
        //adc o valor do imput dentro da li
        li.innerHTML = taskInput.value;
        
        const taskid = `task-${taskIdCounter}`
        
        li.dataset.id = taskid
        //(ainda não entendi direito como funciona esse contador)

    // criando as images que vao servir como btn

        //cria um elemento novo, uma imagem
        const visibility = document.createElement('img')
        //mostra qual qual img vai ser
        visibility.src = 'img/visibility.png';
        //coloca um id na img 
        visibility.id = `visibility-${taskid}`; 
        
        const edit = document.createElement('img')
        edit.src = 'img/edit.png';
        edit.id = `edit-${taskid}` 

        const cancel = document.createElement('img')
        cancel.src = 'img/cancel.png'
        cancel.id = `cancel-${taskid}`

        //cria um elemento novo, no caso uma div
        //(agrupar as imgs pra facilitar a estilização)
        const iconsContainer = document.createElement('div')
        //adc uma class na div
        iconsContainer.classList.add('imgsIcons')

        //colocando as imgs dentro da div
        iconsContainer.appendChild(visibility)
        iconsContainer.appendChild(edit)
        iconsContainer.appendChild(cancel)

        //mostrando a <div class = imgsIcons>
        li.appendChild(iconsContainer)
       
        //cria o a li dentro do <ul id="task">
        task.appendChild(li);
        
        //coloca o valor do input como vazio novamente e coloca o cursor nele
        taskInput.value = "";
        taskInput.focus();

        //faz o contador funcionar, adc +1
        taskIdCounter ++

// READ
// UPDATE
// DELETE
        
    }
}


 // const editTask = document.querySelector('img[src="img/edit.png"]')
        // editTask.id = "edit";

        // li.onclick = () => editTask (taskid)
        // console.log("oi")