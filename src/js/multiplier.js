import {
  upgradesDiv,
  multiplierX2Div,
  multiplierX5Div,
  multiplierX10Div,
} from "./domElements";

export const multiplier = (score, pointsPerClick, scoreDisplay, e) => {
  alert(e.target.nodeName);
  if (score >= 300) {
    if (multiplierX10Div != undefined) {
      console.log("1");
      score -= 300;
      pointsPerClick = 10;
      scoreDisplay.innerText = score;
      upgradesDiv.removeChild(multiplierX10Div);
    }
  } else if (score >= 50) {
    if (multiplierX5Div != undefined) {
      console.log("2");
      score -= 50;
      pointsPerClick = 5;
      scoreDisplay.innerText = score;
      upgradesDiv.removeChild(multiplierX5Div);
      console.log(upgradesDiv.childNodes);
    }
  } else if (score >= 20) {
    if (multiplierX2Div != undefined) {
      console.log("3");
      score -= 20;
      pointsPerClick = 2;
      scoreDisplay.innerText = score;
      upgradesDiv.removeChild(multiplierX2Div);
    }
  }

  return [score, pointsPerClick];
};
