export const increaseScore = (score, pointsPerClick, scoreDisplay) => {
  score += pointsPerClick;
  scoreDisplay.textContent = score;

  return score;
};
