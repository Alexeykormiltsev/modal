const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let countDownDate = new Date("aug 16,2023 00:00:00").getTime();

let updateTimer = setInterval(function () {
  // Получаем текущее дату и время
  let now = new Date().getTime();
  // Находим разницу между текущим временем и заданным
  let difference = countDownDate - now;

  // Рассчитываем часы, минуты и секунды
  let hoursDif = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

  // Вставляем значения в таймер
  hours.innerHTML = hoursDif;
  minutes.innerHTML = minutesDif;
  seconds.innerHTML = secondsDif;

  // Когда таймер дойдет до заданной даты и времени
  if (difference < 0) {
    clearInterval(updateTimer);
    timer.innerHTML = "Наступило";
  }
  // Обновляем функцию с интервалом 1 секунда
}, 1000);


