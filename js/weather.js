const API_KEY = "b30cb7bb6ffb53a3b485a06e8874a96b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".geo__city");
      const weather = document.querySelector(".geo__weather");
      const temp = document.querySelector(".geo__temp");

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temp.innerText = data.main.temp;
    });
}

function onGeoError() {
  alert("Can't find where you live");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
