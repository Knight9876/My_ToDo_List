const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", addTodo);
todoList.addEventListener("click", performTask)

function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-container");
    
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText = input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    todoDiv.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-button");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    todoDiv.appendChild(completeButton);

    todoList.appendChild(todoDiv);

    input.value = "";
}

function performTask(event) {
    console.log(event.target);

    const item = event.target;
    if(item.classList[0] === "delete-button") {
        const delItem = item.parentElement;
        delItem.remove();
    }

    if(item.classList[0] === "complete-button") {
        const comItem = item.parentElement;
        comItem.classList.toggle("completed");
    }
}