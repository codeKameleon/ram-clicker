import {
    ramClicker, 
    multiplierX2Btn, 
    multiplierX5Btn,
    multiplierX10Btn,
    autoClickerBtn,
    autoClickerOverkillBtn,
    boostBtn,
    scoreDisplay
  } from "./domElements"

export const activateBonus = bonusBtn => {
    bonusBtn.removeAttribute("disabled")
    bonusBtn.classList.remove('upgrade-inactive')
    bonusBtn.classList.add("upgrade-active")
}

export function check(score) {
    if (score >= 1) {
        activateBonus(boostBtn)
      }
    
      if (score >= 500) {
          activateBonus(autoClickerOverkillBtn)
      }
    
      if (score >= 1) {
          activateBonus(autoClickerBtn)
      }
    
      if (score >= 100) {
          activateBonus(multiplierX10Btn)
      }
    
      if (score >= 50) {
          activateBonus(multiplierX5Btn)
      }
    
      if (score >= 20) {
          activateBonus(multiplierX2Btn)
}
  }