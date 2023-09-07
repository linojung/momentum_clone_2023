const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const EMPTYTOOD_TEXT = document.querySelector("#empty-todo").innerText;
let todos = [];
let checks = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function addEmptyTodo() {
  const emptyLi = document.createElement("li");
  emptyLi.id = "empty-todo";
  emptyLi.innerText = EMPTYTOOD_TEXT;
  todoList.appendChild(emptyLi);
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
  const todosLength = todos.length;
  if (todosLength === 0) {
    addEmptyTodo();
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const emptyLi = document.querySelector("#empty-todo");
  const check = document.createElement("input");
  const label = document.createElement("label");
  const img = document.createElement("img");
  if (emptyLi !== null) {
    emptyLi.remove();
  }

  li.id = newTodo.id;
  span.innerText = newTodo.text;
  button.innerText = "x";
  check.setAttribute("type", "checkbox");
  check.id = `check${li.id}`;
  todoList.appendChild(li);
  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(button);
  //events
  button.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

//on page load

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
