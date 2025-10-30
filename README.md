criando um to-do list

1. contador pros id pra saber qual item vai ser ex ed vis **check**
2. i excriar 3 funções diferentes ed v
obs= receber o id function deleteTask(id) {}
dica ex o li com o id é a var
3. Pesquisar como passar o id na imagem através do onclick **check**
4. jogar txt pra direita e os btn pra d **check**
function deleteTask(id) 
Pesquisar como passar o id na imagem através do onclick
function editTask(id) {
    const li = document.querySelector([data-id="${id}"]);
 deletar......
}
5. fazer a div abrir debaixo da task selecionada **check**
6. colocar o botão pra fechar **check**
7. colocar botao pra um novo modal ou cancelar
8. criar um modal pra aceitar ou cancelar a auteração da task
10. coloca o valor do input dentro da li


o innerHTML é melhor utilizado pra coisas simples, nesse caso onde vou adc uma img e colocar função nela é melhor usar o 
createElement para criar a img, colocar o img.src para adicionar o caminho da img, nesse caso, colocar o id com o img.id e só então colocalo na li com o li.appendChild

ctrl+shift+L = seleciona todas as palavras iguais no cod, me ajudou quando eu usei delete como nome da img mas esse nome é reservado. alterei pra cancel todas as palavras usando o esse atalho

criei uma div pra colocar as imgs pq n conseguia separar elas do texto sem separar uma img da outra img

comecei a documentar o cod porque eu me perdi 

adicionei a função deletar no codigo
aprendi como funcina o dataset, basicamente uma etiqueta invisivel 
aprendi a usar o split que separou o id da img e colocou cada pedaço dentro de um obj
criei uma div dentro do body pra fazer a visualização da task
criei um modal e fiz alterações pontuais no css