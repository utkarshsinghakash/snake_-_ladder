const cells = document.querySelectorAll(".item");
const grid = document.querySelector(".container");
const container = document.querySelector(".container");
const divs = grid.querySelectorAll(".item");
const dice = document.querySelector(".dice img");
const box0 = document.querySelector(".box-0");
const box1 = document.querySelector(".box-1");
const newGame = document.querySelector(".new-game");

let score = [1, 1];
let previousscore = [1, 1];
let activeplayer = 0;
let boolean = true;

cells.forEach(function (cell, i) {
  if (i % 2 === 0) {
    cell.classList.add("color-1");
  } else {
    cell.classList.add("color-2");
  }
  i++;
});

let number = 100;
cells.forEach(function (cell) {
  cell.textContent = `${number}`;
  number--;
});

for (let i = 10; i < divs.length; i += 20) {
  for (let j = 0; j < 5; j++) {
    const temp = divs[i + j].textContent;
    divs[i + j].textContent = divs[i + 9 - j].textContent;
    divs[i + 9 - j].textContent = temp;
  }
}
let i = 0;
cells.forEach(function (cell, i) {
  cell.setAttribute("id", `div-${100 - i}`);
  i++;
});

function reverseId(startId, endId) {
  for (let i = endId; i <= startId; i++) {
    const div = document.getElementById(`div-${i}`);
    if (div) {
      const reverseid = `div-${startId - (i - endId)}`;
      div.id = reverseid;
    }
  }
}

for (let i = 10; i < divs.length; i += 20) {
  const startId = 100 - i;
  const endId = 100 - (i + 9);

  reverseId(startId, endId);
}

function moveimg(activeplayer) {
  if (activeplayer == 0) {
    let newdiv = document.getElementById(`div-${score[activeplayer]}`);
    newdiv.style.position = "relative";
    newdiv.appendChild(imgGreen);
  } else {
    let newdiv = document.getElementById(`div-${score[activeplayer]}`);
    newdiv.style.position = "relative";
    newdiv.appendChild(imgRed);
  }
  // let previousdiv = document.getElementById(
  //   `div-${previousscore[activeplayer]}`
  // );
  // previousdiv.removeChild(imgGreen);
  // previousscore[activeplayer] = score[activeplayer];
}

function active() {
  activeplayer = activeplayer === 0 ? 1 : 0;

  document.querySelector(`.box-0`).classList.toggle("player-active");
  document.querySelector(`.box-1`).classList.toggle("player-active");
}

const targetDiv1 = document.getElementById("div-1");
const imgGreen = document.createElement("img");
imgGreen.src = "Button_Icon_GreenYellow.svg";
targetDiv1.appendChild(imgGreen);
imgGreen.classList.add("green-player");

const targetDiv2 = document.getElementById("div-1");
const imgRed = document.createElement("img");
imgRed.src = "Button_Icon_Red.svg";
targetDiv2.appendChild(imgRed);
imgRed.classList.add("red-player");

dice.addEventListener("click", function () {
  if (boolean) {
    let dicevalue = Math.trunc(Math.random() * 6) + 1;

    dice.src = `dice-${dicevalue}.png`;

    score[activeplayer] += dicevalue;
    if (score[activeplayer] == 16) {
      score[activeplayer] = 36;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] == 31) {
      score[activeplayer] = 70;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] == 43) {
      score[activeplayer] = 83;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] == 54) {
      score[activeplayer] = 7;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] == 61) {
      score[activeplayer] = 20;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] == 88) {
      score[activeplayer] = 33;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] == 96) {
      score[activeplayer] = 45;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] > 100) {
      score[activeplayer] -= dicevalue;
      active();
    } else if (score[activeplayer] == 99) {
      score[activeplayer] = 39;
      moveimg(activeplayer);
      active();
    } else if (score[activeplayer] === 100) {
      boolean = false;
      moveimg(activeplayer);
      document.querySelector(`.box-${activeplayer}`).classList.add("winner");

      grid.classList.add("opacity");
    } else {
      if (activeplayer == 0) {
        moveimg(0);

        active();
      } else {
        moveimg(1);

        active();
      }
    }
  }
});

newGame.addEventListener("click", function () {
  score = [1, 1];
  document.querySelector(`.box-${activeplayer}`).classList.remove("winner");
  document.querySelector(`.box-0`).classList.add("player-active");
  document.querySelector(`.box-1`).classList.remove("player-active");
  boolean = true;
  activeplayer = 0;
  previousscore = [1, 1];
  dice.src = "dice-5.png";
  targetDiv1.appendChild(imgGreen);
  targetDiv2.appendChild(imgRed);
  // container.classList.remove("opacity");
  grid.classList.remove("opacity");
});
