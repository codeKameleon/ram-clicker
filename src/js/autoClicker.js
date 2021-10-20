const intervalValue = 700
const intervalDivid = 100

export const  autoClicker = (score, scoreDisplay) => {
    score++
    scoreDisplay.textContent = score;

    return score
}
