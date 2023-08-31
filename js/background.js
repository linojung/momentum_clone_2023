const images = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg",
  "bg5.jpg",
  "bg6.jpg",
  "bg7.jpg",
  "bg8.jpg",
  "bg9.jpg",
  "bg10.jpg",
  "bg11.jpg",
  "bg12.jpg",
  "bg13.jpg",
  "bg14.jpg",
  "bg15.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.id = "main-bg";

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

const blurContainer = document.querySelector(".blur-img");
const blurImg = document.createElement("img");

blurImg.src = `img/${chosenImage}`;

blurContainer.appendChild(blurImg);

//color-thief
