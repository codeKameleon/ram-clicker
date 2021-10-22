import { increaseScore } from "./increaseScore";
import { multiplierX2, multiplierX5, multiplierX10 } from "./multiplier";
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
  notification,
  scoreDisplay,
} from "./domElements";

/*
----------------
VARIABLES
----------------
*/
let score = 0;
let timer = 0;
let pointsPerClick = 1;

const BOOST_BONUS_DURATION = 30;

/*
----------------
EVENT LISTENERS
----------------
*/

// Increase score
ramClicker.addEventListener("click", () => {
  score = increaseScore(score, pointsPerClick, scoreDisplay);
  activateBonus(score);
});

// Mulitplier
// x2
multiplierX2Btn.addEventListener("click", () => {
  notification.classList.add("show");
  notification.textContent = "Your score is now increased by 2 !";
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
  let multiplierArray = multiplierX2(score, pointsPerClick, scoreDisplay);
  score = multiplierArray[0];
  pointsPerClick = multiplierArray[1];
});

// x5
multiplierX5Btn.addEventListener("click", () => {
  notification.classList.add("show");
  notification.textContent = "";
  notification.textContent = "Your score is now increased by 5!";
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
  let multiplierArray = multiplierX5(score, pointsPerClick, scoreDisplay);
  score = multiplierArray[0];
  pointsPerClick = multiplierArray[1];
  console.log(score);
});

// x10
multiplierX10Btn.addEventListener("click", () => {
  notification.classList.add("show");
  notification.textContent = "";
  notification.textContent = "Your score is now increased by 10!";
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
  let multiplierArray = multiplierX10(score, pointsPerClick, scoreDisplay);
  score = multiplierArray[0];
  pointsPerClick = multiplierArray[1];
});

// Autoclicker
autoClickerBtn.addEventListener("click", () => {
  notification.classList.add("show");
  notification.textContent = "";
  notification.textContent = "Auto Clicker ON ! Relieves your wrist!";
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
  if (score >= 200) {
    score -= 200;
    scoreDisplay.textContent = score;
    setInterval(() => {
      score = autoClicker(score, scoreDisplay);
      activateBonus(score);
    }, 1000);
  }
});

// Autoclicker Overkill
autoClickerOverkillBtn.addEventListener("click", () => {
  notification.classList.add("show");
  notification.textContent = "";
  notification.textContent =
    "AC Overkill activated! It's rrrraining ram, hallelujah";
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
  if (score >= 500) {
    let OverkillTimer = 0;
    score -= 500;
    scoreDisplay.textContent = score;
    let autoClickerOverkillInterval = setInterval(() => {
      score = increaseScore(score, pointsPerClick, scoreDisplay);
      activateBonus(score);
      OverkillTimer++;
      if (OverkillTimer >= 300) {
        clearInterval(autoClickerOverkillInterval);
        OverkillTimer = 0;
      }
    }, 100);
  }
});

// Boost
boostBtn.addEventListener("click", () => {
  notification.classList.add("show");
  notification.textContent = "";
  notification.textContent = "Boost activated! Score status : on steroid";
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);

  if (score >= 1000) {
    pointsPerClick = boost(pointsPerClick);

    score -= 1000;
    scoreDisplay.textContent = score;

    let boostInterval = setInterval(() => {
      timer++;
      if (timer >= BOOST_BONUS_DURATION) {
        clearInterval(boostInterval);
        timer = 0;
        pointsPerClick = pointsPerClick / 200;
      }
    }, 1000);
  }
});

// Title score

// Title score

let title = document.querySelector("title");

setInterval(() => {
  if (score >= 1) {
    title.innerText = score + " Gb of ram" + " | " + "Ram Clicker";
  }
}, 7000);

let storage = window.localStorage.getItem("score");
document.body.onload = function () {
  score = Number(storage);
  scoreDisplay.innerText = score;
  activateBonus();
};
