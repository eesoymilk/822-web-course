const newTodo  = document.querySelector("#new-todo");
const addTodo  = document.querySelector("#add-todo");
const todoList = document.querySelector("#todo-list");

// Upon first loaded
window.onload = () => {
  const defaultList = todoList.querySelectorAll(".todo-div");
  defaultList.forEach(todoDiv => {
    console.log(todoDiv);
    todoDiv.children[1].addEventListener("click", completeTodo);
    todoDiv.children[2].addEventListener("click", deleteTodo);
  })
}

// Add to list
addTodo.addEventListener("click", () => {
  if (newTodo.value === "") return;

  const TodoDiv = document.createElement("div");
  TodoDiv.classList.add("todo-div");

  const Todoli = document.createElement("div");
  Todoli.classList.add("todo-li");
  Todoli.innerHTML = newTodo.value;
  newTodo.value = "";

  const comIcon = document.createElement("div");
  comIcon.classList.add("com-todo");
  comIcon.innerHTML = `<i class="fas fa-check-square"></i>`;
  comIcon.addEventListener("click", completeTodo);

  const delIcon = document.createElement("div");
  delIcon.classList.add("del-todo");
  delIcon.innerHTML = `<i class="fas fa-minus-square"></i>`;
  delIcon.addEventListener("click", deleteTodo);

  TodoDiv.append(Todoli);
  TodoDiv.append(comIcon);
  TodoDiv.append(delIcon);
  todoList.prepend(TodoDiv);
});

// Delete
function deleteTodo(e) {
  console.log("delete btn clicked!");

  let del = e.target;
  while (!del.classList.contains("todo-div"))
    del = del.parentElement;
  console.log(del);
  del.remove();
}

// Complete
function completeTodo(e) {
  console.log("complete btn clicked!");

  com = e.target;
  while (!com.classList.contains("todo-div"))
    com = com.parentElement;

  console.log(com);
  com.children[1].remove();
  com.classList.add("completed");
  com.remove();
  todoList.append(com);
}