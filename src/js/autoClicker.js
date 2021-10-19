const intervalValue = 1000;
const intervalDivid = 100;

const upgradesDiv = document.querySelector(".upgrades");
const autoClickerDiv = document.querySelector(".auto-clicker-upgrade");
const multiplierX2Btn = document.querySelector("#x2");
const multiplierX5Btn = document.querySelector("#x5");
const multiplierX10Btn = document.querySelector("#x10");
const autoClickerBtn = document.querySelector("#auto-clicker");
const autoClickerOverkillBtn = document.querySelector("#auto-clicker-overkill");
const boostBtn = document.querySelector("#boost");

function activateBonus(bonusBtn) {
  bonusBtn.removeAttribute("disabled");
  bonusBtn.classList.remove("upgrade-inactive");
  bonusBtn.classList.add("upgrade-active");
}

function autoClickerValue(score, scoreDisplay) {
  score += 1;
  scoreDisplay.innerText = score;

  return score;
}

export function autoClicker(score, scoreDisplay) {
  if (score >= 1) {
    score -= 1;
    upgradesDiv.removeChild(autoClickerDiv);

    setInterval(() => {
      if (score >= 1000) {
        activateBonus(boostBtn);
      }

      if (score >= 500) {
        activateBonus(autoClickerOverkillBtn);
      }

      if (score >= 200) {
        activateBonus(autoClickerBtn);
      }

      if (score >= 100) {
        activateBonus(multiplierX10Btn);
      }

      if (score >= 50) {
        activateBonus(multiplierX5Btn);
      }

      if (score >= 20) {
        activateBonus(multiplierX2Btn);
      }

      score = autoClickerValue(score, scoreDisplay);
    }, intervalValue);
  }
  // else if (score >= 10) {
  //     score -=10
  //     autoClickerValue
  //     intervalValue = intervalValue - intervalDivid
  //     setInterval(autoClickerValue, intervalValue)
  //     scoreDisplay.innerText = score
  // }
  return score;
}
