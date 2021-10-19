const upgradesDiv = document.querySelector(".upgrades");
const multiplierX10Div = document.querySelector(".multiplierX10-upgrade");
const multiplierX5Div = document.querySelector(".multiplierX5-upgrade");
const multiplierX2Div = document.querySelector(".multiplierX2-upgrade");

export function multiplier(score, pointsPerClick, scoreDisplay) {
  if (score >= 300) {
    score -= 300;
    pointsPerClick = 10;
    scoreDisplay.innerText = score;
    upgradesDiv.removeChild(multiplierX10Div);
  } else if (score >= 50) {
    score -= 50;
    pointsPerClick = 5;
    scoreDisplay.innerText = score;
    upgradesDiv.removeChild(multiplierX5Div);
  } else if (score >= 20) {
    score -= 20;
    pointsPerClick = 2;
    scoreDisplay.innerText = score;
    upgradesDiv.removeChild(multiplierX2Div);
  }

  return [score, pointsPerClick];
}
