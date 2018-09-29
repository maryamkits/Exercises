let canvas = document.querySelector('#myCanvas')
let ctx = canvas.getContext('2d')

let snakeLength = 4;
let snakeSize = 10;
let snake = []

///// მოძრაობა
let direction = {
    37: 'left',
    40: 'up',
    39: 'right',
    38: 'down'
};

class Game {
    constructor(canvas, width, height) {
        canvas.width = width;
        canvas.height = height;
        this.width = width;
        this.height = height;

        this._ctx = canvas.getContext('2d');
        this._snake = new Snake(this._ctx, this._width / 4, this._height / 4); // create a simple player
    }
    play() {
        this._clear(); // clear the whole canvas to draw something new
        this._drawBorder(); // draw a game area border
        this._snake.draw(); // update player on each tick

        if (this._checkState()) { // check game status : run other tick if player doesn't lose =)
            requestAnimationFrame(this.play.bind(this)); // run play again ~60 times per sec
        } else {
            this._playLose();
        }
    }

    _checkState() {
        let borders = this._snake.getBorders();
        return (borders.xMin >= 0 &&
            borders.xMax <= this._width &&
            borders.yMin >= 0 &&
            borders.yMax <= this._height);
    }

    _playLose() {
        this._ctx.beginPath();
        this._ctx.font = '30px serif';
        this._ctx.fillStyle = 'red';
        this._ctx.fillText("You lose!", this._width / 2, this._height / 2);
    }

    _drawBorder() {
        this._ctx.beginPath();
        this._ctx.rect(0, 0, this._width, this._height);
        this._ctx.stroke();
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._width, this._height); // just clear the whole game area
    }
}


class Snake {
    constructor(ctx, width, height) {
        this._ctx = ctx;
        this._width = width;
        this._height = height;
        this._x = 0;
        this._y = 0;
        this._speed = 5; //set default player speed
        document.addEventListener('keydown', this.keydown.bind(this)) //
    }
    draw(){
        this._ctx.beginPath();
        this._ctx.rect(this._x, this._y, this._width, this._height);
        this._ctx.fillStyle = 'red';
        this._ctx.fill()
        
        this._ctx.fillStyle = 'red'
        this._ctx.strokeStyle = 'black'
        this._ctx.fillRect(this._x * snakeSize, this._y * snakeSize, snakeSize, snakeSize)
        this._ctx.strokeRect(this._x * snakeSize, this._y * snakeSize, snakeSize, snakeSize)
    }
    getBorders() {
        return {
            xMin: this._x,
            xMax: this._x + this._width,
            yMin: this._y,
            yMax: this._y + this._height,
        }
    }
    keydown(e) {
        let arrow = direction[e.keyCode];

        if (arrow === 'left') {
            this._x -= this._speed;
        }
        if (arrow === 'right') {
            this._x += this._speed;
        }
        if (arrow === 'up') {
            this._y += this._speed;
        }
        if (arrow === 'down') {
            this._y -= this._speed;
        }
    }
}

let game = new Game(canvas, 300, 300);
game.play();