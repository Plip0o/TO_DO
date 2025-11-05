//pega os elementos do HTML e coloca eles em uma var para serem usados no JS
let taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('btnAdd');
let task = document.getElementById('task');

//cria uma var que vai servir como um contador 
let taskIdCounter = 0

function addItem() {
    if (taskInput.value == "") {
        alert('digite uma nova tarefa');
        taskInput.focus();
    } else {
        taskIdCounter++
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

        const btnsImg = (taskId) => {

            const visibility = document.createElement('img');
            visibility.src = 'img/visibility.png';
            visibility.id = `visibility-${taskId}`;
            visibility.addEventListener('click', visibilityfunction);
            
            const edit = document.createElement('img');
            edit.src = 'img/edit.png';
            edit.id = `edit-${taskId}`;
            edit.addEventListener('click', editfunction);
            
            const cancel = document.createElement('img');
            cancel.src = 'img/cancel.png';
            cancel.id = `cancel-${taskId}`;
            cancel.addEventListener('click',cancelfunction);

            const iconsContainer = document.createElement('span');
            //adc uma class na span
            iconsContainer.classList.add('imgsIcons');

            iconsContainer.append(visibility, edit, cancel)

            return iconsContainer;
            
        }

        li.appendChild(btnsImg (taskId));

        //cria o a li dentro do <ul id="task">
        task.appendChild(li);

        //coloca o valor do input como vazio novamente e coloca o cursor nele
        taskInput.value = "";
        taskInput.focus();
// READ
    // CRIAR MODAL        
        //diz pro html que quando eu clicar no visibility ele vai fazer isso:
        function visibilityfunction() {
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

    // DELETE MODAL
            close.addEventListener('click',function(){
                //pega o item
                //pega o id do item
                const closeId = this.id;
                const cId = closeId.split(`close-`)[1]
               
                //seleciona o item pelo id
                const deleteModal = document.querySelector(`#modal-${cId}`);
               
                //fecha o modal
                modal.close();

                //apaga o item
                deleteModal.remove();
             
            })

        }

// UPDATE
        edit.addEventListener('click',function(){
            //cria um dialog
            const modal = document.createElement('dialog')
            
            //coloca um id no modal
            const modalId = this.id.split(`task-`)[1]
            modal.id = `modal-${modalId}`
       
            //cria um input 
            editTask = document.createElement('input')
          
            //editar placeholder
            const valortask = this.id.split(`edit-`)[1]
            const oldTask = document.querySelector(`[data-id="${valortask}"]`);
            let oldTaskvalue = oldTask.textContent
            editTask.placeholder = oldTaskvalue          
            //coloca type
            editTask.type = "text"
            //coloca id
            const inputId = this.id.split(`task-`)[1]
            editTask.id = `newTask-${inputId}`

            //coloca o input dentro do modal
            modal.appendChild(editTask)

            //cria os btns de sair e confirmar
            const btnCloseEdit = document.createElement('img')
            btnCloseEdit.src = "img/close.png"
            const btncheck = document.createElement('img')
            btncheck.src = "img/check.png"
            
            //coloca id nos btns
            const closeEditId = this.id.split(`edit-task-`)[1]
            btnCloseEdit.id = `closeEdit-${closeEditId}`
            
            const btncheckId = this.id.split(`edit-task-`)[1]
            btncheck.id = `check-${btncheckId}`

            //cria um container pros btns
            const btnscontainer = document.createElement('span')
            modal.appendChild(btnscontainer)

            //coloca os btns dentro do container
            btnscontainer.appendChild(btncheck)
            btnscontainer.appendChild(btnCloseEdit)
         
            //coloca o modal dentro do bod
            document.body.appendChild(modal)

            //abre o modal
            modal.showModal()

            btnCloseEdit.addEventListener('click',function(){
                //pega o id do btn
                const btnCId = this.id.split(`closeEdit-`)[1]
                // seleciona o modal modal
                const removeModal = document.querySelector(`#modal-${btnCId}`);
                
                //apaga e remove modal
                removeModal.close();
                removeModal.remove();
            })
            //#################### criar função pro btn check#######################
        btncheck.addEventListener('click',function(){
              

                //pega o valor do input
                const inputcont = this.id.split('check-')[1]
                const newTaskId = `newTask-${inputcont}`
                const newTask = document.getElementById(newTaskId);
                const newTaskValue = newTask.value     

                if(newTaskValue ==""){

                    window.alert("digite algo!")

               }else{
                
                let oldTask = document.querySelector(`[data-id="task-${inputcont}"]`);
                                
                oldTask.textContent = newTaskValue;

                modal.close();

                        
               }
              
            })  
        })
// DELETE TASK
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
     
    }
}

