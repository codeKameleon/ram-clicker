import { multiplierBtn } from "./index";

const scoreDisplay = document.querySelector(".score-display");

export function multiplier(score, pointPerClick) {
  if (score >= 10) {
    score -= 10;
    pointPerClick = 2;
    scoreDisplay.innerText = score;
  }
  if (score >= 50) {
    score -= 50;
    pointPerClick = 4;
    multiplierBtn.innerText =
      "100 points for " + PointPerClick + " points per click";
    scoreDisplay.innerText = score;
  }

  return score;
}
