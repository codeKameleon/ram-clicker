import { multiplierBtn } from "./index";
export let PointPerClick = 1;
const scoreDisplay = document.querySelector(".score-display");

export function multiplier(score) {
  if (score >= 10) {
    score -= 10;
    PointPerClick = 2;
    multiplierBtn.innerText =
      "50 points for " + PointPerClick + " points per click";
    scoreDisplay.innerText = score;
  }
  if (score >= 50) {
    score -= 50;
    PointPerClick = 4;
    multiplierBtn.innerText =
      "100 points for " + PointPerClick + " points per click";
    scoreDisplay.innerText = score;
  }

  return score;
}
