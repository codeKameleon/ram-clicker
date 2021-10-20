// import { game } from "./domElements"


//  const notifications = [
//     {
//         name: 'x2',
//         message: 'Your score is now increased by 2!'
//     },
//     {
//         name: 'x5',
//         message: 'Your score is now increased by 5!'
//     },
//     {
//         name: 'x10',
//         message: 'Your score is now increased by 10!'
//     },
//     {
//         name: 'auto-clicker',
//         message: 'Auto Clicker ON ! Relieves your wrist!'
//     },
//     {
//         name: 'auto-clicker-overkill',
//         message: 'AC Overkill activated! It\'s rrrraining ram, hallelujah'
//     },
//     {
//         name: 'boost',
//         message: 'Boost activated! Score status : on steroid'
//     }
// ]


const getBonusNotificationMessage = (arr, id) => {
    const bonus = arr.find(object => {
        return object.name === id
    })
    return bonus.message
}

// export const showNotification  = (arr, bonus, message) => {
//     const notificationDiv = document.createElement('div')
//     const notificationMessage = document.createElement('p')

//     notificationMessage.textContent = getBonusNotificationMessage(arr)

//     notificationDiv.classList.add('notification')
//     notificationDiv.appendChild(notificationMessage)
//     game.appendChild(notificationDiv)
// }