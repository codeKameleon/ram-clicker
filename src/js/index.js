import { increaseScore } from "./increaseScore";
import { intervalTrigger } from "./boostScore";
import { multiplier } from "./multiplier";

// VARIABLES
let score = 0;
<<<<<<< HEAD
let pointPerClick = 1;
const multiplierX2 = document.querySelector("#x2");
=======
let pointsPerClick = 1;
>>>>>>> a8f3194c7836df8c3afffd07692a56db58ef408e

// DOM ELEMENTS
const ramClicker = document.querySelector("#ramClick");
const multiplierX2Btn = document.querySelector("#x2");
const boostBtn = document.querySelector(".boost");
const scoreDisplay = document.querySelector(".score-display");

// EVENT LISTENERS
ramClicker.addEventListener("click", () => {
  score = increaseScore(score, pointsPerClick, scoreDisplay)

  if (score >= 10) {
    multiplierX2Btn.removeAttribute("disabled");
    multiplierX2Btn.classList.remove('upgrade-inactive')
    multiplierX2Btn.classList.add('upgrade-active')
  }
});

<<<<<<< HEAD
export let multiplierBtn = document.querySelector(".multiplier");
multiplierBtn.innerText = "10 points for 2 points per click";
multiplierBtn.addEventListener("click", () => {
  score = multiplier(score);
  pointPerClick = multiplier(pointPerClick);
});
=======
/*Mulitplier*/
multiplierX2Btn.addEventListener("click", () => {
  score = multiplier(score, pointsPerClick, scoreDisplay);
  pointsPerClick = multiplier(score, multiplier[1], scoreDisplay)
}); 

/*Auto Clicker*/ 
/*Boost*/ 
boostBtn.addEventListener("click", intervalTrigger);
>>>>>>> a8f3194c7836df8c3afffd07692a56db58ef408e
