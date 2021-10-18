import { increaseScore } from "./increaseScore";
import { multiplier } from "./multiplier";
let score = 0;

const ramClicker = document.querySelector("#ramClick");

ramClicker.addEventListener("click", () => {
  score = increaseScore(score);
});

export let multiplierBtn = document.querySelector(".multiplier");
multiplierBtn.innerText = "10 points for 2 points per click";
multiplierBtn.addEventListener("click", () => {
  score = multiplier(score);
});
