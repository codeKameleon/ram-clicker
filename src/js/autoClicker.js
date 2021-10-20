import { 
    upgradesDiv, 
    autoClickerDiv,
    boostBtn,
    autoClickerOverkillBtn,
    autoClickerBtn,
    multiplierX10Btn,
    multiplierX5Btn,
    multiplierX2Btn
 } from "./domElements";
import { activateBonus } from "./activateBonus";

const intervalValue = 700
const intervalDivid = 100

export const  autoClickerValue = (score, scoreDisplay) => {
    score++
    console.log(score);
    scoreDisplay.textContent = score;

    return score
}

function autoClicker(score, scoreDisplay) {
    if (score >= 1) {
        score -=1
        scoreDisplay.innerText = score
        upgradesDiv.removeChild(autoClickerDiv)

        setInterval(() => {
            score = autoClickerValue(score, scoreDisplay)
        }, intervalValue)
    }

    return score;
}