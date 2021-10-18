let score = 0;

const scoreDisplay = document.querySelector('.score-display')

export const increaseScore = ()  => {
    score +=1
    scoreDisplay.textContent = score
}