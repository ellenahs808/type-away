import Word from './word';


class Game {
    constructor(canvas, ctx, x, y) {
        this.canvas = {
            width: 1800,
            height: 900
        }
        this.ctx = ctx;
        this.x = x;
        this.y = y;


        this.word = new Word(ctx, canvas, x, y); //Word object
        this.word.drawWord();
        // this.word.floatWord();


        this.startType = 0;
        this.endType = 0;
        this.round = 1;


        this.text = [];


        this.startTimer = this.startTimer.bind(this);
        this.render = this.render.bind(this);
    }

    drawSquare(ctx) {
        ctx.fillStyle = "pink";
        ctx.fillRect(880, this.canvas.height / 2, 50, 50);

    }


    testThis() {
        console.log(this.ctx)
    }






    animateMovement() {

    }

    startTimer() {
        if (this.startType === 0) {
            this.startType = Date.now();
        }
    }


    // document.addEventListener



    createWords() {
        if (Math.random() < 0.02) {
            const x = Math.random() < 0.5 ? 0 : this.canvas.width;
            const y = Math.random() * this.canvas.height;
            const dX = (this.canvas.width / 2) - x;
            const dY = (this.canvas.height / 2) - y;
            const norm = Math.sqrt(dX ** 2 + dY ** 2);
            const speed = 1.5;
            this.words.push({
                x,
                y,
                words: this.dictionary.words[0],
                speedX: dX / norm * speed,
                speedY: dY / norm * speed
            })
        }



        // let x = -100;
        // let y = Math.floor(Math.random() * (this.canvas.height - 150)) + 50;

        // let randomSpawn = Math.floor(Math.random() * 2.5) + (250 - this.round);
        // if (this.counter % randomSpawn < this.round) {

        // }
    }


    startGame(e) {
        if (e.keyCode === 13) {
            this.canvas.removeEventListener('click', this.startGame);
            requestAnimationFrame(this.render)
        }
    }


    render() {
        let request = requestAnimationFrame(this.render);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.canvas.addEventListener('click')

        let fps = 12;
        let interval = 1000 / fps;
        let now = Date.now();
        
    }


}




export default Game;