import { autoClicker } from "./autoClicker";
import { increaseScore } from "./increaseScore";
import { multiplier } from "./multiplier";

let score = 0;

// Ram clicker
const ramClicker = document.querySelector("#ramClick");
ramClicker.addEventListener("click", () => {
  score = increaseScore(score);
});

// Multiplier
export let multiplierBtn = document.querySelector(".multiplier");
multiplierBtn.innerText = "10 points for 2 points per click";
multiplierBtn.addEventListener("click", () => {
  score = multiplier(score);
});

// Autoclicker
const autoClickerButton = document.querySelector(".auto-clicker")
autoClickerButton.addEventListener("click", e => {
    score = autoClicker(score)
})