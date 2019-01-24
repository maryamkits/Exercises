let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext('2d')
let startGame = document.querySelector('#startGame')

let size = 20;

let totalScore = 0;
let playGame

class Game {
    constructor(canvas, width, height, appleN, levelSpeed, snake) {
        canvas.width = width
        canvas.height = height
        this.width = width
        this.height = height
        this.appleN = appleN
        this.levelSpeed = levelSpeed
        this.snake = snake
        this.appleArr = []
        for (let i = 0; i < this.appleN; i++) {
            this.appleArr.push({
                x: Math.floor(Math.random() * 17 + 1) * size,
                y: Math.floor(Math.random() * 15 + 3) * size
            })
        }
        playGame = setInterval(this.play.bind(this), 1000/this.levelSpeed);
    }
    play() {
        // ctx.clearRect(0, 0, this.width, this.height);
        this.drawBackground()
        this.snake.draw()
        this.drawApple()
        if (this.snake.collision()) {
            this.lose()
        }
    }
    drawBackground() {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, this.width, this.height);
    }
    drawApple() {
        let appleImg = new Image()
        appleImg.src = "apple.png"
        for (let i = 0; i < this.appleArr.length; i++) {
            ctx.drawImage(appleImg, this.appleArr[i].x, this.appleArr[i].y, size, size)
        }
    }
    lose() {
        if (totalScore > localStorage.getItem('High Score')) {
            let HighScore = totalScore;
            localStorage.setItem('High Score', HighScore)
            alert(`Congrats! New High Score ${HighScore}`)
        } else alert(`Total Score: ${totalScore}`)
        // location.reload()
        totalScore = 0;
        clearInterval(playGame)
    }
}
class Snake {
    constructor(snakeLength) {
        this.direction = 'right'
        this.snakeLength = snakeLength;
        this.snake = []

        for (let i = 0; i < this.snakeLength; i++) {
            let k = i * size;
            this.snake.push({ x: k, y: 0 })
        }
        this.getdirection = this.getdirection.bind(this)
        document.addEventListener('keydown', this.getdirection)
    }
    create() {
        // create snake
        for (let i = 0; i < this.snake.length; i++) {
            let x = this.snake[i].x
            let y = this.snake[i].y

            ctx.fillStyle = 'black'
            ctx.strokeStyle = 'white'
            ctx.fillRect(x, y, size, size)
            ctx.strokeRect(x, y, size, size)
            ctx.fillStyle = 'red'
            ctx.fillRect(this.snake[0].x, this.snake[0].y, size, size)
        }
    }
    draw() {
        // this.create()
        // move snake
        this.snakeX = this.snake[0].x;
        this.snakeY = this.snake[0].y

        // directions
        if (this.direction == 'right') this.snakeX += size
        else if (this.direction == 'left') this.snakeX -= size
        else if (this.direction == 'up') this.snakeY -= size
        else if (this.direction == 'down') this.snakeY += size

        this.eatApple(game.appleArr);

        let newHead = {
            x: this.snakeX,
            y: this.snakeY
        }
        this.snake.unshift(newHead)

        ///////// draw snake
        for (let i of this.snake) {
            ctx.fillStyle = 'black'
            ctx.strokeStyle = 'white'
            ctx.fillRect(i.x, i.y, size, size)
            ctx.strokeRect(i.x, i.y, size, size)
            ctx.fillStyle = 'red'
            ctx.fillRect(this.snake[0].x, this.snake[0].y, size, size)
        }
    }
    eatApple(apples) {
        for (let i = 0; i < apples.length; i++) {
            if (this.snakeX == apples[i].x && this.snakeY == apples[i].y) {
                totalScore += 10;
                document.querySelector('#totalScore').innerHTML = 'Total Score: ' + `${totalScore}`

                apples.splice(i, 1, {
                    x: Math.floor(Math.random() * 17 + 1) * size,
                    y: Math.floor(Math.random() * 15 + 3) * size
                });
                return;
            }
        }
        this.snake.pop();
    }
    getdirection(e) {
        switch (e.keyCode) {
            case 37:
                if (this.direction != 'right') {
                    this.direction = 'left';
                }
                break;

            case 39:
                if (this.direction != 'left') {
                    this.direction = 'right';
                }
                break;

            case 38:
                if (this.direction != 'down') {
                    this.direction = 'up';
                }
                break;

            case 40:
                if (this.direction != 'up') {
                    this.direction = 'down';
                }
                break;
        }
    }
    collision() {
        // if hits the walls
        if (this.snakeX < 0 || this.snakeY < 0 || this.snakeX >= canvas.width || this.snakeY >= canvas.height) {
            return true
        }
        // if hits itself
        for (let i = this.snakeLength; i < this.snake.length; i++) {
            if (this.snakeX == this.snake[i].x && this.snakeY == this.snake[i].y) {
                return true
            }
        }
    }
}



let boardWidth, boardHeight, appleN, gameSpeed, levelSpeed, gameLevel
let game, snake
let snakeLength;
let levelRange = document.querySelector('#levelRange')
let saveVal = document.querySelector('#saveVal')

/// start a Game
// localStorage.setItem('game Level', document.querySelector('#levels').value)

saveVal.addEventListener('click', function () {
    localStorage.setItem('board Width', document.querySelector('#boardWidth').value)
    localStorage.setItem('board Height', document.querySelector('#boardHeight').value)
    localStorage.setItem('snake Length', document.querySelector('#snakeLength').value)
    localStorage.setItem('apple Num', document.querySelector('#appleN').value)

    boardWidth = localStorage.getItem('board Width')
    boardHeight = localStorage.getItem('board Height')
    snakeLength = localStorage.getItem('snake Length')
    appleN = localStorage.getItem('apple Num')
    gameLevel = localStorage.getItem('game Level')

    if (boardWidth === null || !boardWidth || boardWidth == '') {
        boardWidth = '600'
    }
    if (boardHeight === null || !boardHeight || boardHeight == '') {
        boardHeight = '400'
    }
    if (snakeLength === null || !snakeLength || snakeLength == '') {
        snakeLength = 4
    }
    if (appleN === null || !appleN || appleN == '') {
        appleN = '1'
    }
    // game speed
    if (gameLevel === null || !gameLevel || gameLevel == '' || gameLevel == 'novice') {
        levelSpeed = 10;
    } else if (gameLevel == 'intermediate') {
        levelSpeed = 20
    } else {
        levelSpeed = 30
    }


    snake = new Snake(snakeLength)
    snake.create()
    game = new Game(canvas, boardWidth, boardHeight, appleN, levelSpeed, snake)
})
function sliderChange(val){
    document.querySelector('#sliderVal').innerHTML = val;
}
function getValue(){
    localStorage.setItem('game Level', document.querySelector('#levels').value)
    gameLevel = localStorage.getItem('game Level')
    if (gameLevel == 'novice') {
        levelRange.min = 1
        levelRange.max = 10
    } else if (gameLevel == 'intermediate') {
        levelRange.min = 10
        levelRange.max = 20
    } else {
        levelRange.min = 20
        levelRange.max = 40
    }
    levelSpeed = levelRange.value;
}
