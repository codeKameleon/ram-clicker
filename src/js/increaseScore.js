
const scoreDisplay = document.querySelector('.score-display')

export const increaseScore = (score)  => {
    score +=1
    scoreDisplay.textContent = score
    return score
}