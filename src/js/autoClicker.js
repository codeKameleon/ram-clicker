// const scoreDisplay = document.querySelector(".score-display");
let intervalValue = 500
const intervalDivid = 100

function autoClickerValue(score, scoreDisplay) {
   score++
   console.log(score);
   scoreDisplay.innerText = score
   return score
    // score++
}

export function autoClicker(score) {
    if (score >= 1) {
        score-=1
        autoClickerValue
        setInterval(autoClickerValue, intervalValue)
        scoreDisplay.innerText = score
    }
    else if (score >= 10) {
        score -=10
        autoClickerValue
        intervalValue = intervalValue - intervalDivid
        setInterval(autoClickerValue, intervalValue)
        scoreDisplay.innerText = score
    }
    return score
}