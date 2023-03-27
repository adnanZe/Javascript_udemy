"use strict";

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔ No number!");
  }

  // When player wins
  else if (guess === secretNumber) {
    if (score > 1) {
      displayMessage("🎉 Correct Number!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // When is wrong
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");

    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "💥 You lost the game!";
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  console.log("hit");

  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
