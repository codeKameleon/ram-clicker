export const increaseScore = (score, pointsPerClick, scoreDisplay) => {
  score += pointsPerClick;
  scoreDisplay.textContent = score;
  console.log(pointsPerClick);
  return score;
};
