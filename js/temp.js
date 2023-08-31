const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hi. ${username}`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

// const toDoForm = document.querySelector("#todo-form");
// const toDoInput = document.querySelector("#todo-form input");
// const toDoList = document.querySelector("#todo-list");

// const TODOS_KEY = "toDos";

// let toDos = [];

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentNode;
//   li.remove();
//   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//   saveToDos();
// }

// function paintToDo(newToDo) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const button = document.createElement("button");
//   li.id = newToDo.id;
//   li.appendChild(span);
//   li.appendChild(button);
//   span.innerText = newToDo.text;
//   button.innerText = "x";
//   button.addEventListener("click", deleteToDo);

//   toDoList.appendChild(li);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newToDo = toDoInput.value;
//   toDoInput.value = "";
//   const newToDoObject = {
//     text: newToDo,
//     id: Date.now(),
//   };
//   toDos.push(newToDoObject);
//   paintToDo(newToDoObject);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);
// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintToDo);
// }
