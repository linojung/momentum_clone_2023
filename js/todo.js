const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let todos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const emptyLi = document.querySelector("#empty-todo");
  if (emptyLi !== null) {
    emptyLi.remove();
  }

  li.id = newTodo.id;
  span.innerText = newTodo.text;
  button.innerText = "x";
  todoList.appendChild(li);
  li.appendChild(span);
  li.appendChild(button);
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

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
} else {
  const emptyLi = document.createElement("li");
  emptyLi.id = "empty-todo";
  emptyLi.innerText = "You Have No To-Do";
  todoList.appendChild(emptyLi);
}
