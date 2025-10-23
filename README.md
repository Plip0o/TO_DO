criando um to-do list

1 contador pros id pra saber qual item vai ser ex ed vis

2 i excriar 3 funções diferentes ed v
obs= receber o id function deleteTask(id) {}
dica ex o li com o id é a var

3 Pesquisar como passar o id na imagem através do onclick

4 jogar txt pra direita e os btn pra d

function deleteTask(id) 
 
Pesquisar como passar o id na imagem através do onclick
function editTask(id) {
    const li = document.querySelector([data-id="${id}"]);
 deletar......
}


o innerHTML é melhor utilizado pra coisas simples, nesse caso onde vou adc uma img e colocar função nela é melhor usar o 
createElement para criar a img, colocar o img.src para adicionar o caminho da img, nesse caso, colocar o id com o img.id e só então colocalo na li com o li.appendChild