const todoInput=document.getElementById("todo-input");
const addButton=document.getElementById("add-button");
const todoList=document.getElementById("todo-list");

addButton.addEventListener('click',()=>{
    const task=todoInput.value.trim();
    if(task){
        addTodo(task);
        todoInput.value="";
    }
});

function addTodo(task){
    const listItem=document.createElement("li");
    listItem.className="todo-item";
    listItem.textContent=task;

  
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
    listItem.classList.toggle("completed"); 
  });

    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.addEventListener("click",()=>{
        todoList.removeChild(listItem);
    });

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
}