import appearGoblin from "./js/appearGoblin.js";
import clickCell from "./js/clickCell.js";
import "./css/style.css";

const cells = Array.from(document.querySelectorAll(".cell")); // находим все ячейки игрового поля

setInterval(appearGoblin, 1000);

cells.forEach((e) => e.addEventListener("click", clickCell));
