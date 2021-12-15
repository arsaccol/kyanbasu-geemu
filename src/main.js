import Game from './game.js'
console.log("bugabuga")

//const socket = new WebSocket('ws://localhost:3000')

async function main()
{
    const game = await Game.createGame()

}

window.onload = main
