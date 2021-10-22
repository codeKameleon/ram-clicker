export const autoClicker = (score, scoreDisplay) => {
    score++
    scoreDisplay.textContent = score;

    return score
}