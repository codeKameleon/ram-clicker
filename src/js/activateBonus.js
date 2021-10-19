export const activateBonus = bonusBtn => {
    bonusBtn.removeAttribute("disabled")
    bonusBtn.classList.remove('upgrade-inactive')
    bonusBtn.classList.add("upgrade-active")
}