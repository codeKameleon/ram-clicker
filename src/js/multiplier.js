export function multiplier(score, pointsPerClick, scoreDisplay) {
  if (score >= 10) {
    score -= 10;
    pointsPerClick = 2;
    scoreDisplay.innerText = score;
    console.log("points per click", pointsPerClick);

    // if (score >= 50) {
    //   score -= 50;
    //   pointPerClick = 4;
    //   multiplierBtn.innerText =
    //     "100 points for " + PointPerClick + " points per click";
    //   scoreDisplay.innerText = score;
    // }
  }

  return [score, pointsPerClick];
}
