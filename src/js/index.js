import { increaseScore } from './increaseScore'; 
import { intervalTrigger } from './boostScore';

const ramClicker = document.querySelector('#ramClick')
const boostBtn = document.querySelector('.boost')

ramClicker.addEventListener('click', increaseScore)
boostBtn.addEventListener('click', intervalTrigger)