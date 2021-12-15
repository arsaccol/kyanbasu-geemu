class FrameRate
{
    constructor()
    {
        console.log('FrameRate constructor')
        this.frameRate = 0
        this.displayElement = document.getElementById('frame-rate')
        this.displayInterval = 200
        this.lastTime = Date.now()
        this.history = [] // history of elapsed times, frame rate is calculated based on an average
        this.historySize = 120 // use frametimes from last two seconds, assuming desired 60 FPS

        setInterval(() => {
            this.display()
        }, this.displayInterval);
        
    }


    update()
    {
        const currentTime = Date.now()
        const timeElapsed = currentTime - this.lastTime
        this.lastTime = currentTime 
        this.frameRate = 1 / timeElapsed * 1000

        this.updateHistory(timeElapsed)
        this.averageFrameRate = 1 / (this.history.reduce((totalSum, current) => totalSum + current) / this.history.length) * 1000
    }

    display()
    {
        this.displayElement.innerText = `
            Frame rate display interval : ${this.displayInterval} ms
            Last immediate frame rate: ${this.frameRate.toFixed(5)} FPS
            Average frame rate: ${this.averageFrameRate.toFixed(5)} FPS
        `
    }

    updateHistory(newElapsedTime)
    {
        this.history.push(newElapsedTime)
        if(this.history.length > this.historySize)
            this.history = this.history.splice(1)
    }

}

const frameRateInstance = new FrameRate()



export default frameRateInstance