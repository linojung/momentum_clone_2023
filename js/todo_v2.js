const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const EMPTYTOOD_TEXT = document.querySelector("#empty-todo").innerText;
let todos = [];

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

const BOX_ICON_EMPTY = "fa-square";
const BOX_ICON_CHECKED = "fa-check-square";
const LABEL_CROSSED = "todo-crossed";
function handleCheckBoxChange(event) {
  const checkBox = event.target;
  const label = checkBox.parentNode.querySelector("label");
  const fakeBox = checkBox.parentNode.querySelector("i");
  if (checkBox.checked) {
    fakeBox.classList.remove(BOX_ICON_EMPTY);
    fakeBox.classList.add(BOX_ICON_CHECKED);
    label.classList.add(LABEL_CROSSED);
    console.log(checkBox.value);
  } else {
    fakeBox.classList.remove(BOX_ICON_CHECKED);
    fakeBox.classList.add(BOX_ICON_EMPTY);
    label.classList.remove(LABEL_CROSSED);
    console.log(checkBox.value);
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  const fake = document.createElement("i");
  fake.classList.add("fas", BOX_ICON_EMPTY);
  const span = document.createElement("span");
  const button = document.createElement("button");
  const emptyLi = document.querySelector("#empty-todo");
  if (emptyLi !== null) {
    emptyLi.remove();
  }

  li.id = newTodo.id;
  const CHECKBOX_ID = `check${newTodo.id}`;
  checkBox.id = CHECKBOX_ID;
  label.setAttribute("for", CHECKBOX_ID);
  span.innerText = newTodo.text;
  button.innerText = "x";
  todoList.appendChild(li);
  li.appendChild(checkBox);
  li.appendChild(label);
  label.appendChild(fake);
  label.appendChild(span);
  li.appendChild(button);
  //events
  button.addEventListener("click", deleteTodo);
  checkBox.addEventListener("change", handleCheckBoxChange);
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
}
