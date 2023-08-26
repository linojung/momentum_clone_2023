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

function handleWindowResize() {
  grab.style.color = "tomato";
}
// grab.addEventListener("click", handleGrabClick);
grab.onclick = handleGrabClick;
grab.addEventListener("mouseenter", enterMouse);
grab.addEventListener("mouseleave", leaveMouse);

window.addEventListener("resize", handleWindowResize);

function handleWindowCopy() {
  alert("copy cat!!");
}

window.addEventListener("copy", handleWindowCopy);
