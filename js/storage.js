const SAVE_KEY = "pokemonTCGSave"

function getDefaultSave(){

    return {

        points: 0,

        collection: [],

        streak: 0,

        lastLogin: null,

        boostersOpened: 0

    }
}

function loadGame(){

    const saveData =
    localStorage.getItem(
        SAVE_KEY
    )

    if(!saveData){

        return getDefaultSave()
    }

    return JSON.parse(saveData)
}

function saveGame(){

    localStorage.setItem(

        SAVE_KEY,

        JSON.stringify(game)

    )
}