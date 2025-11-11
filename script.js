let taskInput = document.getElementById('taskInput');
const btnAdd = document.getElementById('btnAdd');
let task = document.getElementById('task');

let taskIdCounter = 0

function addItem() {
    if (taskInput.value == "") {
        alert('digite uma nova tarefa');
        taskInput.focus();
    } else {
        taskIdCounter++
// CREATE 
      
        let li = document.createElement('li');
        let containercheckboxandtxt = document.createElement('div');
        containercheckboxandtxt.classList = "containerLi"
        
        let checkbox = document.createElement ('input');
        checkbox.classList = "checkbox"
        checkbox.type = "checkbox"

        containercheckboxandtxt.append(checkbox, taskInput.value);

        const taskId = `task-${taskIdCounter}`

        li.dataset.id = taskId

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
           
            iconsContainer.classList.add('imgsIcons');

            iconsContainer.append(visibility, edit, cancel)

            return iconsContainer;
            
        }

        li.append(containercheckboxandtxt, btnsImg (taskId));

        task.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
// READ
        function visibilityfunction() {
           
            const visibilityId = this.id;
           
            const taskId = visibilityId.split('visibility-')[1]

            const modal = document.createElement('dialog')
       
            modal.id = `modal-${taskId}`
                  
            document.body.appendChild(modal)

            
            const textoLi = document.querySelector(`[data-id="${taskId}"]`);
            
            const txtLi = textoLi.textContent
            
            // modal.textContent = txtLi

            const close = document.createElement('img')
            close.src = 'img/close.png'
            close.classList = "closebtn"
            close.id = `close-${taskId}`

            const containerReadModal = document.createElement('div')
            containerReadModal.classList = "containerReadModal"
            containerReadModal.append(txtLi, close)

            modal.appendChild(containerReadModal)

            modal.showModal();

            close.addEventListener('click', function () {
           
                const closeId = this.id;
                const cId = closeId.split(`close-`)[1]
                const deleteModal = document.querySelector(`#modal-${cId}`);

   
                modal.close();
                deleteModal.remove();

            })
        }
// UPDATE
        function editfunction() {
    
            const modal = document.createElement('dialog')
            const containerModal = document.createElement('div')
            containerModal.classList = "containerModal"

            const modalId = this.id.split(`task-`)[1]
            modal.id = `modal-${modalId}`
 
            editTask = document.createElement('input')

            const valortask = this.id.split(`edit-`)[1]
            const oldTask = document.querySelector(`[data-id="${valortask}"]`);
            let oldTaskvalue = oldTask.textContent
            editTask.placeholder = oldTaskvalue

            editTask.type = "text"

            const inputId = this.id.split(`task-`)[1]
            editTask.id = `newTask-${inputId}`

            
            const btnCloseEdit = document.createElement('img')
            btnCloseEdit.src = "img/close.png"
            const btncheck = document.createElement('img')
            btncheck.src = "img/check.png"
            
            const closeEditId = this.id.split(`edit-task-`)[1]
            btnCloseEdit.id = `closeEdit-${closeEditId}`
            
            const btncheckId = this.id.split(`edit-task-`)[1]
            btncheck.id = `check-${btncheckId}`
            
            const btnscontainer = document.createElement('span')
            
            btnscontainer.append(btncheck, btnCloseEdit)
            
            containerModal.append(editTask, btnscontainer)
            
            modal.appendChild(containerModal)
            document.body.appendChild(modal)

            modal.showModal()

            btnCloseEdit.addEventListener('click', function () {

                const btnCId = this.id.split(`closeEdit-`)[1]

                const removeModal = document.querySelector(`#modal-${btnCId}`);

                removeModal.close();
                removeModal.remove();
            })
           
            btncheck.addEventListener('click', function () {

                const inputcont = this.id.split('check-')[1]
                const newTaskId = `newTask-${inputcont}`
                const newTask = document.getElementById(newTaskId);
                const newTaskValue = newTask.value

                if (newTaskValue == "") {

                    window.alert("digite algo!")

                } else {
                    let oldTask = document.querySelector(`[data-id="task-${inputcont}"]`);
                    
                    oldTask.textContent = (newTaskValue);
                    oldTask.appendChild(btnsImg (taskId));

                    modal.close();
                    modal.remove();
                }

            })
        }
// DELETE TASK
        function cancelfunction() {

             
            const cancelId = this.id;
            
            const taskId = cancelId.split('cancel-')[1]

          
            const liToRemove = document.querySelector(`[data-id="${taskId}"]`);
       
            liToRemove.remove();

        }
    }
}