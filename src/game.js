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
        // this.registerEvents();
        // this.restart();
        

        this.lastTime = Date.now();
        this.words = [];
        this.counter = 0;
        // this.timestamp = 



        this.registerEvents = this.registerEvents.bind(this)
        this.populateWords = this.populateWords.bind(this)
    }
    


    testThis() {
        console.log(this.words);
    }



    // deltaTime gives you the amount of time since the last frame/iteration of the loop
    // you can use that to calculate an amount of time for a new word to show up.
    // have some logic somewhere to subtract the delta time from a counter and once it hits 0, generate a new random word.


    gameLoop(timestamp) {
        // debugger
        timestamp = Date.now();
        let deltaTime = timestamp - this.lastTime;  //gap between last time and now
        let randomTime = Math.floor(Math.random() * (5000 - 1000) + 3000);
        if (deltaTime > randomTime) {
            this.populateWords()
            this.lastTime = timestamp;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        for (let i = 0; i < this.words.length; i++) {
            this.words[i].y -= this.words[i].speedY
            for (let text in this.words) {
                let t = this.words[text]
                this.ctx.fillText(t.text, t.x, t.y, 200);
                this.ctx.fillStyle = "green";
                this.ctx.font = '25px "Rubik"';
            }
        }
        

        requestAnimationFrame(this.gameLoop.bind(this));
    }


    


    populateWords() {
        const word = new Word(this.ctx, this.canvas);

        let x = Math.floor(Math.random() * (this.canvas.width - 150)) + 50;
        let y = 20;
        const speed = Math.floor(Math.random() * 1.6 + 0.6);
        this.words.push({
        x,
        y,
        text: word.randomizeWord(),
        speedX: 2,
        speedY: -1.5
        });
 
    }




    play() {
        let timestamp = Date.now();
        this.running = true;
        this.gameLoop(timestamp);
    }


    restart() {
        this.running = false;
        this.score = 0;
        this.word = new Word(ctx, canvas, x, y);
        this.animate();
    }




    registerEvents() {
        this.boundClickHandler = this.boundClickHandler.bind(this);
        this.ctx.canvas.addEventListener('mousedown', this.boundClickHandler);
    }


    click(e) {
        if (!this.running) {
            this.play();
        }
    }


}







export default Game;