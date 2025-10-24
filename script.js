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
        
        //cria uma var e coloca o contador dentro
        const taskid = `task-${taskIdCounter}`
        
        //coloca a var com o contador dentro da li como um id usando o dataset
        //que é um objeto 
        li.dataset.id = taskid

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

        //cria um elemento novo, no caso uma span
        //usei um <span> ao inves de uma <div> por conta do box-inline-level
        //(agrupar as imgs pra facilitar a estilização)
        const iconsContainer = document.createElement('span')
        //adc uma class na span
        iconsContainer.classList.add('imgsIcons')

        //colocando as imgs dentro da span
        iconsContainer.appendChild(visibility)
        iconsContainer.appendChild(edit)
        iconsContainer.appendChild(cancel)

        //mostrando a <span class = imgsIcons>
        li.appendChild(iconsContainer)
       
        //cria o a li dentro do <ul id="task">
        task.appendChild(li);
        
        //coloca o valor do input como vazio novamente e coloca o cursor nele
        taskInput.value = "";
        taskInput.focus();

// READ
        visibility.addEventListener('click',function(){
            const visibilityId = this.id;
            const taskId = visibilityId.split ('visibility-')[1]
            const liToRead = document.querySelector(`[data-id="${taskId}"]`)
            
            //cria uma div 
            const readcontainer = document.createElement ('div')
            //procura dentro do HTML(document) o body e cria um elemento "filho" dentro
            document.body.appendChild(readcontainer)
            readcontainer.id = `visibilityTask`
            

        })
// UPDATE
// DELETE
        cancel.addEventListener('click',function(){

            //pega o id da img 
            const cancelId = this.id;
            //separa o pedaço que identifica a tarefa
            const taskId = cancelId.split('cancel-')[1]

            //procura a li pelo seletor taskid
            const liToRemove = document.querySelector(`[data-id="${taskid}"]`);
            //remove a li
            liToRemove.remove();

        })

        
        //faz o contador funcionar, adc +1
        taskIdCounter ++
    }
}

        // li.onclick = () => editTask (taskid)
        // console.log("oi")