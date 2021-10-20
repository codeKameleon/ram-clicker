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
  notification,
  scoreDisplay
} from "./domElements"

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
    activateBonus(score)
  });

// Mulitplier
  // x2
  multiplierX2Btn.addEventListener("click", () => {
    notification.textContent = 'Your score is now inscreade by 2 !'
    let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
    
  });

  // x5
  multiplierX5Btn.addEventListener("click", () => {
    notification.textContent = ''
    notification.textContent = 'Your score is now inscreade by 5!'  
    let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
  });

  // x10
  multiplierX10Btn.addEventListener("click", () => {
    notification.textContent = ''
    notification.textContent = 'Your score is now inscreade by 10!' 
    let multiplierArray = multiplier(score, pointsPerClick, scoreDisplay);
    score = multiplierArray[0];
    pointsPerClick = multiplierArray[1];
  });

// Autoclicker
  autoClickerBtn.addEventListener("click", () => {
    notification.textContent = ''
    notification.textContent = 'Auto Clicker ON ! Relieves your wrist!'
    setInterval(() => {
      score = autoClicker(score, scoreDisplay)
      activateBonus(score)
    }, 1000)
  });

// Boost
  boostBtn.addEventListener("click", () => {
    notification.textContent = ''
    notification.textContent = 'Boost activated! Score status : on steroid'
    pointsPerClick =  boost(pointsPerClick)

    let boostInterval = setInterval(()=> {
      timer++

      if(timer >= BOOST_BONUS_DURATION) {
        clearInterval(boostInterval)
        timer = 0;
        pointsPerClick = pointsPerClick / 200
      }
    },1000)
  });



