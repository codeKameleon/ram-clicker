import { autoClicker } from "./autoClicker";
import { increaseScore } from "./increaseScore";
import { intervalTrigger } from "./boostScore";
import { multiplier } from "./multiplier";

// VARIABLES
let score = 0;
let pointsPerClick = 1;

// DOM ELEMENTS
const ramClicker = document.querySelector("#ramClick");
const multiplierX2Btn = document.querySelector("#x2");
const boostBtn = document.querySelector(".boost");
const scoreDisplay = document.querySelector(".score-display");

// EVENT LISTENERS
ramClicker.addEventListener("click", () => {
  score = increaseScore(score, pointsPerClick, scoreDisplay);

  if (score >= 10) {
    multiplierX2Btn.removeAttribute("disabled");
    multiplierX2Btn.classList.remove("upgrade-inactive");
    multiplierX2Btn.classList.add("upgrade-active");
  }
});

// Autoclicker
const autoClickerButton = document.querySelector(".auto-clicker");
autoClickerButton.addEventListener("click", (e) => {
  score = autoClicker(score);
});

/*Mulitplier*/
multiplierX2Btn.addEventListener("click", () => {
  let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
  score = multiplierArray[0];
  pointsPerClick = multiplierArray[1];
});

/*Boost*/
boostBtn.addEventListener("click", intervalTrigger);
