const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";
const others = document.querySelectorAll(".momentum__column");

function hideOthers(other) {
  other.classList.add(HIDDEN_CLASSNAME);
}
function showOthers(other) {
  other.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hi. ${username}`;
  others.forEach(showOthers);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // greeting.classList.add(HIDDEN_CLASSNAME);
  others.forEach(hideOthers);
} else {
  paintGreetings(savedUsername);
  others.forEach(showOthers);
}
