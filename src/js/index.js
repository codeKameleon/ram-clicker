import { shop } from "./shopList";

let ram = 0
let ramPerSecond = 0
let pointPerClick = 1

const ramLocation = document.querySelector(".score-display")
ramLocation.innerText = ram

const ramClick = document.querySelector(".ram-click")
ramClick.addEventListener("click" , e => {
 ramLocation.innerText = ram += 100
})


for (let i = 0; i < shop.length; i++) {
  const shopLocation = document.querySelector(".upgrades")

  const div = document.createElement("div")

  const button = document.createElement("button")
  button.innerText = shop[i].name
  button.className = "upgradeButton"
  button.addEventListener("click" , e => {
    if (ram >= shop[i].cost) {
      ramLocation.innerText = ram -= shop[i].cost
      ramPerSecond += shop[i].ramPS
    }
  })
  div.appendChild(button)

  const description = document.createElement("p")
  description.innerText = shop[i].description
  div.appendChild(description)

  const cost = document.createElement("p")
  cost.innerText = "Cost : " + shop[i].cost + " ram"
  div.appendChild(cost)

  shopLocation.appendChild(div)
  
}

setInterval(() => {
  ram += ramPerSecond
  ramLocation.innerText = ram 
}, 1000)