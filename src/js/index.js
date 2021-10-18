import { increaseScore } from './increaseScore';

let score = 0;

const ramClicker = document.querySelector('#ramClick')

ramClicker.addEventListener('click', increaseScore)