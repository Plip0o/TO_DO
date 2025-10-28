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
        const taskId = `task-${taskIdCounter}`
        
        //coloca a var com o contador dentro da li como um id usando o dataset
        //que é um objeto 
        li.dataset.id = taskId

    // criando as images que vao servir como btn

        //cria um elemento novo, uma imagem
        const visibility = document.createElement('img')
        //mostra qual qual img vai ser
        visibility.src = 'img/visibility.png';
        //coloca um id na img 
        visibility.id = `visibility-${taskId}`; 
        
        const edit = document.createElement('img')
        edit.src = 'img/edit.png';
        edit.id = `edit-${taskId}` 

        const cancel = document.createElement('img')
        cancel.src = 'img/cancel.png'
        cancel.id = `cancel-${taskId}`

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
        
        //diz pro html que quando eu clicar no visibility ele vai fazer isso:
        visibility.addEventListener('click',function(){
            //pega o id do visibility e coloca dentro da var
            const visibilityId = this.id;
            //separa a var em duas pega o contador, e coloca na var taskId
            const taskId = visibilityId.split('visibility-')[1]

            //cria a var modal e coloca um elemeto que acabamos de criar
            const modal = document.createElement('dialog')
            //coloca id com o contador
            modal.id = `modal-${taskId}`
            //cria um dialog dentro do body        
            document.body.appendChild(modal)

            //seleciona a li e coloca ela dentro da var
            const textoLi = document.querySelector(`[data-id="${taskId}"]`);
            //seleciona apnas o texto da li e coloca dentro de txtLi 
            const txtLi = textoLi.textContent
            //coloca o texto dentro do modal 
            modal.textContent = txtLi

            const close = document.createElement('img')
            close.src = 'img/close.png'
            close.id = `close-${taskId}`

            modal.appendChild(close)

            modal.showModal();

            close.addEventListener('click',function(){
                modal.close()
            })

        })

// UPDATE
// DELETE
        cancel.addEventListener('click',function(){

            //pega o id da img 
            const cancelId = this.id;
            //separa o pedaço que identifica a tarefa
            const taskId = cancelId.split('cancel-')[1]

            //procura a li pelo seletor taskId
            const liToRemove = document.querySelector(`[data-id="${taskId}"]`);
            //remove a li
            liToRemove.remove();

        })

        
        //faz o contador funcionar, adc +1
        taskIdCounter ++
    }
}

        // li.onclick = () => editTask (taskId)
        // console.log("oi")