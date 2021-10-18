import { increaseScore } from './increaseScore'; 
import { intervalTrigger } from './boostScore';
import { multiplier } from "./multiplier";

let score = 0;

const ramClicker = document.querySelector('#ramClick')
const boostBtn = document.querySelector('.boost')

ramClicker.addEventListener('click', increaseScore)
boostBtn.addEventListener('click', intervalTrigger)

ramClicker.addEventListener("click", () => {
  score = increaseScore(score);
});

export let multiplierBtn = document.querySelector(".multiplier");
multiplierBtn.innerText = "10 points for 2 points per click";
multiplierBtn.addEventListener("click", () => {
  score = multiplier(score);
});