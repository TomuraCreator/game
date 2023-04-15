export default function appearGoblin() {
  const previousActive = document.querySelector(".cell-active");
  if (previousActive) {
    previousActive.classList.remove("cell-active");
  }

  const random = Math.floor(Math.random() * 16); //номер клетки случайный

  const a = arr[arr.length - 1]; //значение последнего элемента массива  - будет использоваться для установки активной клетки

  if (a === random && random === 0) {
    arr.push(random + 1);
  } else if (a === random && random === 15) {
    arr.push(random - 1);
  } else if (a === random && random != 0) {
    arr.push(random + 1);
  } else {
    arr.push(random);
  }

  arr.shift(); //удаляем первый элемент массива после добавления нового

  const activeCell = document.getElementById(`${a}`); //почему не выбирается через document.querySelector(`#${a}`);???
  activeCell.classList.add("cell-active");
}

const arr = [2, 3]; //массив для рандомного определения ячеек, может содержать числа от 0 до (кол.клеток в поле - 1)
arr.push(Math.floor(Math.random() * 16)); // пушим случайное число от 0 до (кол.клеток в поле - 1), чтобы игра начиналась с разных клеток
