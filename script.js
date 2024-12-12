const playertext = document.getElementById("playertext");
const computertext = document.getElementById("computertext");
const res = document.getElementById("res");
const btn = document.querySelectorAll(".btn");

let player;
let computer;
let result;

btn.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playertext.textContent = `player: ${player}`;
    computertext.textContent = `computer: ${computer}`;
    res.textContent = checkres();
  })
);

function computerTurn() {
  const rnd = Math.floor(Math.random() * 3) + 1;
  switch (rnd) {
    case 1:
      computer = "rock";
      break;
    case 2:
      computer = "paper";
      break;
    case 3:
      computer = "scissors";
      break;
  }
}
function checkres() {
  if (player === computer) {
    return "Draw!!";
  } else if (computer === "rock") {
    return player === "paper" ? "You Win!" : "You Lose!";
  } else if (computer === "paper") {
    return player === "scissors" ? "You Win!" : "You Lose!";
  } else if (computer === "scissors") {
    return player === "rock" ? "You Win!" : "You Lose!";
  }
}
