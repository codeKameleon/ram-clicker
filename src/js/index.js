import { shop } from "./shopList";
/*
Points
*/
let ram = 0
let ramPerSecond = 0
let pointPerClick = 1

const ramLocation = document.querySelector(".score-display")
ramLocation.innerText = ram

/*
Upgrades creation
*/ 
for (let i = 0; i < shop.length; i++) {
  const shopLocation = document.querySelector(".upgrades")

  const div = document.createElement("div")
  div.className = "upgrade"

  const button = document.createElement("button")
  button.innerText = shop[i].name
  button.className = "upgrade-btn"
  button.addEventListener("click" , e => {
    if (ram >= shop[i].cost) {
      ramLocation.innerText = ram -= shop[i].cost
      ramPerSecond += shop[i].ramPS
    }
    else if ((ram >= shop[i].cost) && (shop[i].ramPS === 0)) {
      pointPerClick = pointPerClick*2
      shop[0].cost = shop[0].cost*2
      console.log(shop[0].cost);
      console.log(pointPerClick);
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

/*
Points per Click
*/ 
const ramClick = document.querySelector(".ram-click")
ramClick.addEventListener("click" , e => {
 ramLocation.innerText = ram += pointPerClick
})

// const changeRPC = document.querySelector(".upgrade-btn")
// changeRPC.addEventListener("click", e => {

// })

/*
Points per second
*/ 
setInterval(() => {
  ram += ramPerSecond
  ramLocation.innerText = ram 
}, 1000)
