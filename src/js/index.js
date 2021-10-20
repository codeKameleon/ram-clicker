import { increaseScore } from "./increaseScore";
import { multiplier } from "./multiplier";
import { autoClicker } from "./autoClicker";
import { boost} from "./boost";
import { activateBonus} from "./activateBonus";
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
if (scoreDisplay.textContent >= 1) {
  score = scoreDisplay.textContent
}
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
    activateBonus(score)
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
    if (score >= 200) {
      score-=200  
      scoreDisplay.textContent = score
      setInterval(() => {
        score = autoClicker(score, scoreDisplay)
        activateBonus(score)
      }, 1000)
    }

  });

// Autoclicker Overkill
autoClickerOverkillBtn.addEventListener("click", () => {
  if (score >= 500) {
    let OverkillTimer = 0
    score-=500 
    scoreDisplay.textContent = score
    let autoClickerOverkillInterval = setInterval(() => {
      score = increaseScore(score, pointsPerClick, scoreDisplay);
      activateBonus(score)
      OverkillTimer++
      if (OverkillTimer >= 300) {
        clearInterval(autoClickerOverkillInterval)
        OverkillTimer = 0
      }
    }, 100)
  }
})

// Boost
  boostBtn.addEventListener("click", () => {
    if (score >= 1000) {
      pointsPerClick =  boost(pointsPerClick)

      score-=1000
      scoreDisplay.textContent = score

      let boostInterval = setInterval(()=> {
        timer++
        if(timer >= BOOST_BONUS_DURATION) {
          clearInterval(boostInterval)
          timer = 0;
          pointsPerClick = pointsPerClick / 200
        }
      },1000)
    }
  });

  // Title score

  let title = document.querySelector("title")

  setInterval(() => {
    if (score >= 1) {
    title.innerText = score + " Gb of ram" + " | " + "Ram Clicker"
    }
  }, 7000)

setInterval(() => {
  window.localStorage.setItem("score", score)
}, 1000)

let storage = window.localStorage.getItem("score")
document.body.onload = function() {
  console.log(storage);
  scoreDisplay.textContent = storage
}
