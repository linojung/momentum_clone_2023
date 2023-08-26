const h1 = document.querySelector(".box h1");

h1.style.cursor = "pointer";

function handleTitleClick() {
  const clickedClass = "active";
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleTitleClick);
