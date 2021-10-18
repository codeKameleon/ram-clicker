import { pointPerClick } from "./index";

const scoreDisplay = document.querySelector(".score-display");

export const increaseScore = (score) => {
  score += pointPerClick;
  scoreDisplay.textContent = score;

  return score;
};
