const API_KEY = "b30cb7bb6ffb53a3b485a06e8874a96b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".geo__city");
      const weather = document.querySelector(".geo__weather");
      const temp = document.querySelector(".geo__temp");
      const weatherData = data.weather[0].main;
      const weatherDescription = data.weather[0].description;
      //   const weatherData = data.weather[0].main;
      city.innerText = data.name;
      temp.innerText = `${data.main.temp}°c`;
      const icon = document.createElement("img");
      weather.innerText = "";
      weather.append(icon);
      if (weatherData === "Rain") {
        icon.setAttribute("src", "img/weather/rain.png");
      } else if (weatherData === "Thunderstorm") {
        icon.setAttribute("src", "img/weather/thunderstorm.png");
      } else if (weatherData === "Drizzle") {
        icon.setAttribute("src", "img/weather/drizzle.png");
      } else if (weatherData === "Snow") {
        icon.setAttribute("src", "img/weather/snow.png");
      } else if (weatherData === "Clear") {
        icon.setAttribute("src", "img/weather/clear.png");
      } else if (weatherData === "Clouds") {
        icon.setAttribute("src", "img/weather/cloud.png");
      } else {
        icon.setAttribute("src", "img/weather/atmosphere.png");
      }
    });
}

function onGeoError() {
  alert("Can't find where you live");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
