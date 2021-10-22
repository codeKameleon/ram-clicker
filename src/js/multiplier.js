// import {
//   multiplierX2Btn,
//   multiplierX5Btn,
//   multiplierX10Btn,
// } from "./domElements";
// let level = 1;
// let levelX5 = 1;
// let levelX10 = 1;

// export const multiplierX2 = (score, pointsPerClick, scoreDisplay) => {
//   score -= 20 * level;
//   pointsPerClick = 2 * level;
//   scoreDisplay.innerText = score;

//   level++;

//   return [score, pointsPerClick];
// };

// export const multiplierX5 = (score, pointsPerClick, scoreDisplay) => {
//   score -= 50 * levelX5;
//   pointsPerClick = 5 * levelX5;
//   scoreDisplay.innerText = score;

//   levelX5++;

//   return [score, pointsPerClick];
// };

// export const multiplierX10 = (score, pointsPerClick, scoreDisplay) => {
//   score -= 300 * levelX10;
//   pointsPerClick = 10 * levelX10;
//   scoreDisplay.innerText = score;
//   multiplierX10Btn.classList.remove("upgrade-active");
//   levelX10++;

//   return [score, pointsPerClick];
// };
