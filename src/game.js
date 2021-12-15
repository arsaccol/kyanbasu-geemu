import Input from './input.js'
import FrameRate from './framerate.js'

class Game
{
    constructor()
    {
        console.log(`Game constructor!`)
        this.initGraphics()
        //this.socket = new WebSocket('ws://localhost:8080')
        this.input = new Input()

        this.paddleRect = {
            width: 500,
            height: 100,

            getTopLeftFromCenter(center) 
            {
                //console.log(`Center: ${center.x}, ${center.y}`)
                return {
                    top: center.y - this.height / 2,
                    left: center.x - this.width / 2
                }
            }
        }

        this.gameState = {
            players: [
                {
                    x: 130, y: 130, color: "blue"
                },
                {
                    x: 130, y: 10, color: "red"
                }
            ]
        }

        //this.loop()
        //this.initInput()

    }


    initGameState()
    {
    }


    static async createGame()
    {
        const game = new Game()
        game.loop()

        return game
    }


    initGraphics()
    {
        this.canvas = document.getElementById('game-canvas')
        this.ctx = this.canvas.getContext('2d')
        this.screenSize = {width: this.canvas.style.width, height: this.canvas.style.height}
        this.screenSize = {width: 500, height: 500}

        console.log(`Graphics initialized`)
    }


    updateState()
    {
        const mousePosition = this.input.mouse.position

        this.gameState.players[0] = {
            x: mousePosition.x,
            y: mousePosition.y,
            color: this.gameState.players[0].color
        }

        //console.log(`Player position: (x: ${this.gameState.players[0].x}, y: ${this.gameState.players[0].y})}`)

    }


    loop()
    {
        //const mouseDelta = 
        this.updateState()
        this.render()

        requestAnimationFrame(() => { FrameRate.update(); this.loop() })
    }

    render()
    {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.gameState.players.map(player => {
            const {top, left} = this.paddleRect.getTopLeftFromCenter(player)

            this.ctx.fillStyle = player.color
            this.ctx.fillRect(left, top, this.paddleRect.width, this.paddleRect.height)
        })
    }
}

export default Game
