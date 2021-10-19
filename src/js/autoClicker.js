const scoreDisplay = document.querySelector(".score-display");
let intervalValue = 1000;
const intervalDivid = 100;

function autoClickerValue(score, scoreDisplay) {
  score++;
  scoreDisplay.innerText = score;
  return score;
}

export function autoClicker(score) {
  if (score >= 1) {
    score -= 1;
    setInterval(() => {
      score = autoClickerValue(score, scoreDisplay);
    }, intervalValue);
    scoreDisplay.innerText = score;
  }
  //   else if (score >= 10) {
  //     score -= 10;
  //     autoClickerValue;
  //     intervalValue = intervalValue - intervalDivid;
  //     setInterval(autoClickerValue, intervalValue);
  //     scoreDisplay.innerText = score;
  //   }
  return score;
}
