let messageEl = document.querySelector(".message")
let cardsEl = document.querySelector(".cards-el")
let sumEl = document.querySelector(".sum")
let startEl = document.querySelector("#start-el")
let newEl = document.querySelector(".new-el")



let cards = []
let sum = 0
let isAlive = false
let first
let sec
let message
let myName



let randomize = () => {
    randomNum = (Math.floor(Math.random() * 13) + 1)

    if (randomNum === 1) {
        randomNum = 11
    } else if (randomNum === 11 || randomNum === 12 || randomNum === 13) {
        randomNum = 10
    }
    return randomNum
}

function startGame() {
    isAlive = true
    first = randomize()
    sec = randomize()
    cards = [first, sec]
    sum = first + sec
    begin()

}


function begin() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if (sum === 21) {
        message = "You have won"
        isAlive = false
    } else if (sum < 21) {
        message = "Draw a Card"
        isAlive = true
    } else {
        message = " you lost"
        isAlive = false
    }

    if (isAlive === true) {
        newEl.classList = "seen"
    }

    

    messageEl.textContent = message
}


function newCard() {
    let card = randomize()
    sum += card
    cards.push(card)
    begin()
    if (isAlive === false) {
        newEl.classList = "noneSeen"
    }
 
}






startEl.addEventListener("click", startGame)

newEl.addEventListener("click", newCard)