const BONUS_DURATION = 30;
let timer = 0;
let idInterval;

const  boostScore  = (scorePerclick) => {
    if(timer >= BONUS_DURATION) {
        scorePerClick = 1
        clearInterval(idInterval)
        timer = 0;
    }
}

export const intervalTrigger = () => {
    idInterval = setInterval(boostScore, 1000)
}