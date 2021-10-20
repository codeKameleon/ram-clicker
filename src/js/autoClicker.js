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

const intervalValue = 1000
const intervalDivid = 100

const  autoClickerValue = (score, scoreDisplay) => {
    score+=1
    scoreDisplay.innerText = score

    return score
}

export function autoClicker(score, scoreDisplay) {
    if (score >= 1) {

        score -=1
        upgradesDiv.removeChild(autoClickerDiv)

        setInterval(() => {
            if (score >= 1000) {
                activateBonus(boostBtn)
            }

            if (score >= 500) {
                activateBonus(autoClickerOverkillBtn)
            }

            if (score >= 200) {
                activateBonus(autoClickerBtn)
            }

            if (score >= 100) {
                activateBonus(multiplierX10Btn)
            }

            if (score >= 50) {
                activateBonus(multiplierX5Btn)
            }

            if (score >= 20) {
                activateBonus(multiplierX2Btn)
            }

            score = autoClickerValue(score, scoreDisplay)
        }, intervalValue)
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