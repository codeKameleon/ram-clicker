import { PointPerClick } from "./multiplier";

const scoreDisplay = document.querySelector(".score-display");

export const increaseScore = (score) => {
  score += PointPerClick;
  scoreDisplay.textContent = score;

  return score;
};
