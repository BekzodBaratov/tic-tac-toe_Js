let topLeft = document.querySelector(".left-top");
let topCenter = document.getElementsByClassName("center-top");
let topRight = document.getElementsByClassName("right-top");
let centerLeft = document.getElementsByClassName("left-center");
let centerCenter = document.getElementsByClassName("center-center");
let centerRight = document.getElementsByClassName("right-center");
let bottomLeft = document.getElementsByClassName("left-bottom");
let bottomCenter = document.getElementsByClassName("center-bottom");
let bottomRight = document.getElementsByClassName("right-bottom");
let resetBtn = document.getElementsByClassName("resetBtn");
let row = document.querySelector(".row");
let x = document.querySelector(".x");
let o = document.getElementsByClassName("o");
let xoIcon = document.getElementsByClassName("icon");

// row.addEventListener("click", function () {
//   x.style.display = "block";
// });
let id = 0;
let players = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ], // 0
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ], // x
];

document.querySelector(".big-row").addEventListener("click", (e) => {
  console.log(+e.target.getAttribute("data-sel"));
  if (e.target.id === "row1" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][0][0] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row2" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][0][1] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row3" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][0][2] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row4" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][1][0] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row5" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][1][1] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row6" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][1][2] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row7" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][2][0] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row8" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][2][1] = 1;
    e.target.setAttribute("data-sel", "1");
  } else if (e.target.id === "row9" && !+e.target.getAttribute("data-sel")) {
    id++;
    e.target.children[id % 2].style.display = "block";
    players[id % 2][2][2] = 1;
    e.target.setAttribute("data-sel", "1");
  }
  console.log(win(id % 2));
  console.log(players);
});

function win(id) {
  let player = players[id];
  for (let i = 0; i < 3; i++) {
    if (player[0][i] && player[1][i] && player[2][i]) {
      return "Win";
    } else if (player[i][0] && player[i][1] && player[i][2]) {
      return "Win";
    } else if (player[0][0] && player[1][1] && player[2][2]) {
      return "Win";
    } else if (player[0][2] && player[1][1] && player[2][0]) {
      return "Win";
    }
  }
}
