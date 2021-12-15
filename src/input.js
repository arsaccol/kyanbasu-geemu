class Input
{
    constructor() 
    {
        this.mouse = {
            delta: { x: 0, y: 0 },
            position: { x: 0, y: 0 }
        }



        this.canvas = document.getElementById('game-canvas')
        this.keyStates = {}
        this.initEventListeners()

        this.setupDebugDisplay()
        //this.debugInfoElement.setAttribute('id', 'debug-input')
    }


    initEventListeners()
    {
        document.addEventListener('keydown', (e) => {
            this.keyStates[e.key] = 'down'
            this.inputDebugElement.textContent = e.key
        })


        document.addEventListener('keyup', (e) => {
            this.keyStates[e.key] = 'up'
        })


        document.addEventListener('pointermove', e => {
            const boundingRect = this.canvas.getBoundingClientRect()
            this.mouse.delta = {x: e.movementX, y: e.movementY}
            this.mouse.position = {x: e.clientX - boundingRect.x - e.width / 2, y: e.clientY - boundingRect.y}


            this.inputDebugElement.textContent = `
                Pointer moved:
                Mouse delta: ${JSON.stringify(this.mouse.delta)}
                Mouse position: ${JSON.stringify({x: this.mouse.position.x.toFixed(2), y: this.mouse.position.y.toFixed(2)})}
                Client coordinates: ${JSON.stringify({x: e.clientX.toFixed(2), y: e.clientY.toFixed(2)})}
                Mouse position inside canvas: ${JSON.stringify({
                    x: (e.clientX - this.canvas.getBoundingClientRect().x).toFixed(2),
                    y: (e.clientY - this.canvas.getBoundingClientRect().y).toFixed(2)
                })}
            `
        })

    }


    display()
    {
        //this.debugInfoElement
        this.debugInfoElement.textContent = `
            Input debug info:
        `

    }


    setupDebugDisplay()
    {
        this.inputDebugElement = document.createTextNode('Input debug info:')
        document.getElementById('debug-info').appendChild(this.inputDebugElement)

    }

}

export default Input
