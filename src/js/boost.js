const BONUS_DURATION = 30;
let timer = 0;
let idInterval;

const  setTimerForBoost  = (pointsPerClick, scoreDisplay) => {
    timer++
    pointsPerClick += 200

    if(timer >= BONUS_DURATION) {
        pointsPerClick = 1;
        clearInterval(idInterval)
        timer = 0;
    }

    return pointsPerClick
}

export const boost = (pointsPerClick, scoreDisplay) => {
    idInterval = setInterval(() => {
        setTimerForBoost(pointsPerClick)
    }, 1000)
}