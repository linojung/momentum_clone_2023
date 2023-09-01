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
      const weatherData = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}°c`;

      const icon = document.createElement("i");
      weather.appendChild(icon);
      if (weatherData === "Clouds") {
        icon.classList.add("fas", "fa-cloud");
      } else if (weather === "Clear") {
        icon.classList.add("fas", "fa-sun");
      } else if (weather === "Atmosphere") {
        icon.classList.add("fas", "fa-smog");
      } else if (weather === "Snow") {
        icon.classList.add("fas", "fa-snowflake");
      } else if (weather === "Rain") {
        icon.classList.add("fas", "fa-cloud-showers-heavy");
      } else if (weather === "Drizzle") {
        icon.classList.add("fas", "fa-cloud-rain");
      } else if (weather === "Thunderstorm") {
        icon.classList.add("fas", "fa-bolt");
      }
    });
}

function onGeoError() {
  alert("Can't find where you live");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
