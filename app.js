const grab = document.querySelector(".box h1");

console.dir(grab);

function handleGrabClick() {
  grab.style.color = "blue";
}

function enterMouse() {
  grab.innerText = "mouse is here";
}

function leaveMouse() {
  grab.innerText = "mouse has left";
}

grab.addEventListener("click", handleGrabClick);
grab.addEventListener("mouseenter", enterMouse);
grab.addEventListener("mouseleave", leaveMouse);
