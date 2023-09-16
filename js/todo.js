const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
const CHECKEDTODOS_KEY = "checked-todos";
const EMPTYTOOD_TEXT = document.querySelector("#empty-todo").innerText;
let todos = [];
let checkedTodos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function saveCheckedTodos() {
  localStorage.setItem(CHECKEDTODOS_KEY, JSON.stringify(checkedTodos));
}

function addEmptyTodo() {
  const emptyLi = document.createElement("li");
  emptyLi.id = "empty-todo";
  emptyLi.innerText = EMPTYTOOD_TEXT;
  todoList.appendChild(emptyLi);
}

function deleteTodo(td) {
  const li = td.parentNode;
  li.remove();
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
  const todosLength = todos.length;
  if (todosLength === 0) {
    addEmptyTodo();
  }
}

function handleButtonClick(event) {
  deleteTodo(event.target);
}

function handleCheckChange(check) {
  const checkBox = check.target;
  const li = checkBox.parentNode;
  const checking = function () {
    if (checkBox.checked) {
      li.classList.add("todo-checked");
    } else {
      li.classList.remove("todo-checked");
    }
  };
  if (li.id === "todo-all") {
    const todoAll = todoList.querySelectorAll("li:not([id='empty-todo'])");
    if (todoAll.length > 0) {
      if (checkBox.checked) {
        todoAll.forEach(function (td) {
          td.classList.add("todo-checked");
          td.querySelector("input[type='checkbox']").checked = true;
        });
      } else {
        todoAll.forEach(function (td) {
          td.classList.remove("todo-checked");
          td.querySelector("input[type='checkbox']").checked = false;
        });
      }
    } else {
    }
    checking();
  } else {
    checking();
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const emptyLi = document.querySelector("#empty-todo");
  const check = document.createElement("input");
  const label = document.createElement("label");
  const img = document.createElement("i");
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
  li.appendChild(label);
  label.setAttribute("for", check.id);
  label.appendChild(img);
  img.classList.add("checkbox-img");
  label.appendChild(span);
  li.appendChild(button);
  //events
  button.addEventListener("click", handleButtonClick);
  check.addEventListener("change", handleCheckChange);

  const todoAll = document.querySelector("#todo-all");
  todoAll.classList.remove("todo-checked");
  todoAll.querySelector("input[type='checkbox']").checked = false;
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

//checkAllTodos

function checkAllTodos() {
  const allTodos = document.querySelector("#todo-all input[type='checkbox']");
  allTodos.addEventListener("change", handleCheckChange);
}

checkAllTodos();

//deleteAllTodos
function handleDeletAll(e) {
  e.preventDefault();
  const lis = todoList.querySelectorAll(".todo-checked button");
  lis.forEach(deleteTodo);
  const todoAll = document.querySelector("#todo-all");
  todoAll.classList.remove("todo-checked");
  todoAll.querySelector("input[type='checkbox']").checked = false;
}

function deleteAllTodos() {
  const button = document.querySelector("#todo-delete a");
  button.addEventListener("click", handleDeletAll);
}

deleteAllTodos();
