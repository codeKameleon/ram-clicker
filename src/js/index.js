import { shop } from "./shopList";

let ram = 0
let ramPerSecond = 0

const ramLocation = document.querySelector(".score-display")
ramLocation.innerText = ram

let i = 0

for (const upgrade of shop) {
  console.log(i);
  const shopLocation = document.querySelector(".upgrades")

  const div = document.createElement("div")

  const button = document.createElement("button")
  button.innerText = shop[i].name
  button.className = "upgradeButton"
    button.addEventListener("click", e => {
      if (ram >= shop[i].cost) {
        ram -= shop[i].cost
      }
    })
  div.appendChild(button)

  const description = document.createElement("p")
  description.innerText = shop[i].description
  div.appendChild(description)

  const cost = document.createElement("p")
  cost.innerText = "Cost : " + shop[i].cost + " ram"
  div.appendChild(cost)
  
  ramPerSecond += shop[i].ramPS
  
  shopLocation.appendChild(div)
  i++
}

const upgradeButton = document.querySelector(".upgradeButton")[0]
