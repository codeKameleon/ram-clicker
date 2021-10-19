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
const multiplierX5Btn = document.querySelector("#x5");
const multiplierX10Btn = document.querySelector("#x10");
const boostBtn = document.querySelector(".boost");
const scoreDisplay = document.querySelector(".score-display");

// EVENT LISTENERS

/* Increase score */
ramClicker.addEventListener("click", () => {
  score = increaseScore(score, pointsPerClick, scoreDisplay);

  if (score >= 10) {
    multiplierX2Btn.removeAttribute("disabled");
    multiplierX2Btn.classList.remove("upgrade-inactive");
    multiplierX2Btn.classList.add("upgrade-active");
  }
  if (score >= 50) {
    multiplierX5Btn.removeAttribute("disabled");
    multiplierX5Btn.classList.remove("upgrade-inactive");
    multiplierX5Btn.classList.add("upgrade-active");
  }
  if (score >= 300) {
    multiplierX10Btn.removeAttribute("disabled");
    multiplierX10Btn.classList.remove("upgrade-inactive");
    multiplierX10Btn.classList.add("upgrade-active");
  }
});

/*Mulitplier*/

// x2
multiplierX2Btn.addEventListener("click", () => {
  let multiplayerArray = multiplier(score, pointsPerClick, scoreDisplay);
  score = multiplayerArray[0];
  pointsPerClick = multiplayerArray[1];
});

// x5
multiplierX5Btn.addEventListener("click", () => {
  let multiplayerArray = multiplier(score, pointsPerClick, scoreDisplay);
  score = multiplayerArray[0];
  pointsPerClick = multiplayerArray[1];
});

// x10
multiplierX10Btn.addEventListener("click", () => {
  let multiplayerArray = multiplier(score, pointsPerClick, scoreDisplay);
  score = multiplayerArray[0];
  pointsPerClick = multiplayerArray[1];
});

/* Autoclicker */
const autoClickerButton = document.querySelector(".auto-clicker");
autoClickerButton.addEventListener("click", (e) => {
  score = autoClicker(score);
});

/* Boost */
boostBtn.addEventListener("click", intervalTrigger);
