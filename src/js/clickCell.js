export default function clickCell(e) {
  if (e.target.className == "cell cell-active") {
    countWin += 1;
    e.target.classList.remove("cell-active");
    counts.textContent = countWin;
  } else {
    countLose -= 1;
    countAtempts.textContent = countLose;
    if (countLose == 0) {
      alert("Вы проиграли!");
      countWin = 0;
      counts.textContent = countWin;
      countLose = 5;
      countAtempts.textContent = countLose;
    }
  }
}

const countAtempts = document.querySelector(".count-attempts");
const counts = document.querySelector(".count");
let countWin = 0; // счетчик успешных кликов
let countLose = 5; // счетчик промахов
