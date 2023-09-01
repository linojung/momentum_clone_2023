const clockHourMin = document.querySelector(".clock__hour-min");
const clockSec = document.querySelector(".clock__sec");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockHourMin.innerText = `${hours}:${minutes}`;
  clockSec.innerText = `:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
