import { increaseScore } from "./increaseScore";
import { multiplier } from "./multiplier";
import { autoClicker } from "./autoClicker";
import { boost } from "./boost";
import { activateBonus } from "./activateBonus";
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

    if (score >= 1) {
      activateBonus(boostBtn)
    }

    if (score >= 500) {
        activateBonus(autoClickerOverkillBtn)
    }

    if (score >= 200) {
        activateBonus(autoClickerBtn)
    }

    if (score >= 100) {
        activateBonus(multiplierX10Btn)
    }

    if (score >= 50) {
        activateBonus(multiplierX5Btn)
    }

    if (score >= 20) {
        activateBonus(multiplierX2Btn)
    }
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
  score = autoClicker(score, scoreDisplay);
});

// Boost
boostBtn.addEventListener("click", () => {
  pointsPerClick = boost(pointsPerClick, scoreDisplay)
});
