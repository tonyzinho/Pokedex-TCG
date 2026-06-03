let game = loadGame()

const pointsElement =
document.getElementById(
    "points"
)

const collectionElement =
document.getElementById(
    "collectionCount"
)

const streakElement =
document.getElementById(
    "streak"
)

function updateUI(){

    pointsElement.innerText =
    game.points

    collectionElement.innerText =
    game.collection.length

    streakElement.innerText =
    game.streak

    saveGame()
}

updateUI()