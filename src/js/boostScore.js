const BONUS_DURATION = 30;
let timer = 0;
let idInterval;

const  boostScore  = () => {
    timer+=1

    if(timer >= BONUS_DURATION) {
        clearInterval(idInterval)
        timer = 0;
    }
}

export const intervalTrigger = () => {
    idInterval = setInterval(boostScore, 1000)
}