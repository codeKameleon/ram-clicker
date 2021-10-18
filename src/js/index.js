import { increaseScore } from './increaseScore'; 
import { autoClicker } from './autoClicker';

let score = 0

// Ram clicker
const ramClicker = document.querySelector('#ramClick')
ramClicker.addEventListener('click', () => {
   score = increaseScore(score)
})
   

// Auto clicker
const buttonAutoClick = document.querySelector(".auto-clicker")
buttonAutoClick.addEventListener("click", e => {
    if (score >= 0) {
        score = autoClicker(score)
    }
})