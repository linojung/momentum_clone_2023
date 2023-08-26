const h1 = document.querySelector(".box h1");

h1.style.cursor = "pointer";

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
  console.log(newColor);
}

h1.addEventListener("click", handleTitleClick);
