function claimDailyReward(){

    const today =

    new Date()

    .toDateString()

    if(
        game.lastLogin === today
    ){

        alert(
            "You already claimed today's reward!"
        )

        return
    }

    game.lastLogin =
    today

    game.streak++

    let reward = 50

    if(game.streak >= 7){

        reward = 200
    }

    game.points += reward

    alert(

        `Daily Reward!\n\n+${reward} Points`

    )

    updateUI()
}