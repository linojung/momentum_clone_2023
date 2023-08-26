const h1 = document.querySelector(".box h1");

h1.style.cursor = "pointer";

function handleTitleClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
