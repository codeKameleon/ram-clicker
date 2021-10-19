const multiplierX10Div = document.querySelector(".multiplierX10-upgrade");
const multiplierX5Div = document.querySelector(".multiplierX5-upgrade");
const multiplierX2Div = document.querySelector(".multiplierX2-upgrade");

export function multiplier(score, pointsPerClick, scoreDisplay) {
  if (score >= 300) {
    score -= 300;
    pointsPerClick = 10;
    scoreDisplay.innerText = score;
    multiplierX10Div.classList.add("inactive");
  } else if (score >= 50) {
    score -= 50;
    pointsPerClick = 5;
    scoreDisplay.innerText = score;
    multiplierX5Div.classList.add("inactive");
  } else if (score >= 10) {
    score -= 10;
    pointsPerClick = 2;
    scoreDisplay.innerText = score;
    multiplierX2Div.classList.add("inactive");
  }

  return [score, pointsPerClick];
}
