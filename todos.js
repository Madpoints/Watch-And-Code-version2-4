// creat list(array) of TODOS
var todos = ["item1", "item2", "item3"];

function displayTODOS() {
    console.log("My TODOS:", todos);
}

function addTODOS(todo) {
    displayTODOS();
    todos.push(todo);
    displayTODOS();
}

function changeTODOS(position, newValue) {
    displayTODOS();
    todos[position] = newValue;
    displayTODOS();
}

function deleteTODOS(position) {
    displayTODOS();
    todos.splice(position, 1);
    displayTODOS();
}