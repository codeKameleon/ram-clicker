export const  autoClicker =(score, scoreDisplay) => {
    score++
    scoreDisplay.innerText = score

    return score;
}