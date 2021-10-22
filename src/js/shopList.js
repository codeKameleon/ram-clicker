export const multiplierX2 = (score, pointsPerClick, scoreDisplay) => {
  score -= 20;
  pointsPerClick = 2;

  return [score, pointsPerClick];
};
export const shop = [
  {
    name: "x2",
    description: "Increase ram per click",
    cost: 10,
    ramPS: 0,
    purchareN: 0,
    effect: multiplierX2(),
  },
  {
    name: "autoClick",
    description: "Generate ram per second",
    cost: 100,
    ramPS: 1,
    purchareN: 0,
    effect: multiplierX2(),
  },
  {
    name: "Overclocking",
    description: "Generate ram per second",
    cost: 200,
    ramPS: 2,
    purchareN: 0,
    effect: multiplierX2(),
  },
  {
    name: "Reduce CAS",
    description: "Generate ram per second",
    cost: 500,
    ramPS: 5,
    purchareN: 0,
    effect: multiplierX2(),
  },
  {
    name: "Increase memory speed",
    description: "Generate ram per second",
    cost: 1000,
    ramPS: 10,
    purchareN: 0,
    effect: multiplierX2(),
  },
];
