import { increaseScore } from "./increaseScore";

export function autoClicker(score) {
    
    increaseScore()
    setInterval(increaseScore, 1000)
    return score
}