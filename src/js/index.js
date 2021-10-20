import { increaseScore } from "./increaseScore";
import { multiplier } from "./multiplier";
import { autoClickerValue } from "./autoClicker";
import { boost } from "./boost";
import { activateBonus, check } from "./activateBonus";
import {
  ramClicker, 
  multiplierX2Btn, 
  multiplierX5Btn,
  multiplierX10Btn,
  autoClickerBtn,
  autoClickerOverkillBtn,
  boostBtn,
  scoreDisplay
} from "./domElements"

/*
----------------
VARIABLES
----------------
*/
let score = 0;
let pointsPerClick = 1;

/*
----------------
EVENT LISTENERS
----------------
*/

// Increase score 
  ramClicker.addEventListener("click", () => {
    score = increaseScore(score, pointsPerClick, scoreDisplay);
    check(score)
    console.log(score);
  });

// Mulitplier
  // x2
  multiplierX2Btn.addEventListener("click", () => {
    let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
  });

  // x5
  multiplierX5Btn.addEventListener("click", () => {
    let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
  });

  // x10
  multiplierX10Btn.addEventListener("click", () => {
    let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
  });

// Autoclicker
autoClickerBtn.addEventListener("click", () => {
  setInterval(() => {
    score = autoClickerValue(score, scoreDisplay)
    check(score)
}, 500)
});

// Boost
boostBtn.addEventListener("click", () => {
  pointsPerClick = boost(pointsPerClick, scoreDisplay)
});
