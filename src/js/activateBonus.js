import { 
    multiplierX2Btn, 
    multiplierX5Btn,
    multiplierX10Btn,
    autoClickerBtn,
    autoClickerOverkillBtn,
    boostBtn,
  } from "./domElements"
 
 const addStyleToBonusBtn = bonusBtn => {
    bonusBtn.removeAttribute("disabled")
    bonusBtn.classList.remove('upgrade-inactive')
    bonusBtn.classList.add("upgrade-active")
}

export const activateBonus = score => {
    if (score >= 1) {
        addStyleToBonusBtn(boostBtn)
    }

    if (score >= 500) {
        addStyleToBonusBtn(autoClickerOverkillBtn)
    }

    if (score >= 1) {
        addStyleToBonusBtn(autoClickerBtn)
    }

    if (score >= 100) {
        addStyleToBonusBtn(multiplierX10Btn)
    }

    if (score >= 50) {
        addStyleToBonusBtn(multiplierX5Btn)
    }

    if (score >= 20) {
        addStyleToBonusBtn(multiplierX2Btn)
    }    
}
