export const multiplierX2 = (score, pointsPerClick,scoreDisplay) => {
    score-=20
    pointsPerClick = 2;
    scoreDisplay.innerText = score;

  return [score, pointsPerClick];
}

export const multiplierX5 = (score, pointsPerClick, scoreDisplay) => {
  score-=50
  pointsPerClick = 5;
  scoreDisplay.innerText = score;

return [score, pointsPerClick];
}

export const multiplierX10 = (score, pointsPerClick, scoreDisplay) => {
  score-=300
  pointsPerClick = 10;
  scoreDisplay.innerText = score;

return [score, pointsPerClick];
}
