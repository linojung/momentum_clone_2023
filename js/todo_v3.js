const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const EMPTYTOOD_TEXT = document.querySelector("#empty-todo").innerText;
let todos = [];
const BOX_ICON_EMPTY = "img/checkbox-empty.png";
const BOX_ICON_CHECKED = "img/checkbox-checked.png";
const LABEL_CROSSED = "todo-crossed";
const CHECK_KEY = "check";

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

function handleCheckBoxChange(event) {
  //const ID = event.target.parentNode.id;
  const checkBox = event.target;
  const label = checkBox.parentNode.querySelector("label");
  const fakeBox = checkBox.parentNode.querySelector("img");
  const parentId = event.target.parentNode.id;
  const index = todos.filter((item) => item.id === parseInt(parentId))[0];
  let indexCheck = index.checked;

  if (checkBox.checked) {
    fakeBox.setAttribute("src", BOX_ICON_CHECKED);
    label.classList.add(LABEL_CROSSED);
    indexCheck = "true";
    console.log(todos);
  } else {
    fakeBox.setAttribute("src", BOX_ICON_EMPTY);
    label.classList.remove(LABEL_CROSSED);
    indexCheck = "false";
    console.log(indexCheck);
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  const label = document.createElement("label");
  const fake = document.createElement("img");
  fake.setAttribute("src", BOX_ICON_EMPTY);
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
    checked: "false",
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
