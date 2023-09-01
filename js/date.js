const todayDate = document.querySelector("#today-date");

function getTodayDate() {
  let dateObj = new Date();
  let year = dateObj.getFullYear();
  let month = dateObj.getMonth();
  let date = dateObj.getDate();
  let day = dateObj.getDay();

  todayDate.innerText = `${year}.${month}.${date}`;
}

getTodayDate();
