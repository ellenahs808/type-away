import Word from './word';
// import GameOverScreen from './game_over_screen';



class Game {
    constructor(canvas, ctx, page, input, wordList) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.page = page;
        this.input = input;
        this.wordList = wordList;


        // this.gameOverScreen = new GameOverScreen(ctx, canvas);
  
        
        this.container = {
            width: 800,
            height: 900
        }

        this.lastTime = Date.now();
        this.words = [];
        this.counter = 0;




        this.populateWords = this.populateWords.bind(this)
        this.play = this.play.bind(this);
        this.restart = this.restart.bind(this);
        // this.gameOver = this.gameOver.bind(this);
        // this.gameOverAnimate = this.gameOverAnimate.bind(this);

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
        this.ctx.clearRect(0, 0, this.container.width, this.container.height)
        
        for (let i = 0; i < this.words.length; i++) {
            this.words[i].y -= this.words[i].speedY
            for (let text in this.words) {
                let t = this.words[text]
                this.ctx.fillText(t.text, t.x, t.y, 200);
                this.ctx.fillStyle = "black";
                this.ctx.font = '23px "Rubik"';
            }
        }
        

        requestAnimationFrame(this.gameLoop.bind(this));
        
    }


    


    populateWords() {
     
        const word = new Word(this.ctx, this.canvas);

        let x = Math.floor(Math.random() * (this.container.width - 200)) + 50;
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




    play(e) {
        if (e.keyCode === 13) {
            // debugger
            this.page.removeEventListener('keydown', this.play);
            // this.canvas.removeEventListener('click', this.play);
            this.restart()
            clearInterval(window.startInterval);
            clearInterval(window.overInterval);
            this.canvas.className === 'start-screen'
            let timestamp = Date.now();
            this.running = true;
            this.gameLoop();
        }
        
    }


    // handleWord(e) {
    //     if (e.keyCode)
    // }


    restart() {
        this.running = false;
        this.score = 0;
        this.word = new Word(this.ctx, this.canvas);
    }



    // gameOver() {
    //     this.canvas.removeEventListener('keydown', this.play)
    //     this.input.style.display = 'none';
    //     window.overInterval = setInterval(this.gameOverAnimate, 100);
    // }


    // gameOverAnimate() {
    //     this.ctx.clearRect(0, 0, this.container.width, this.canvas.height);
    //     this.gameOverScreen.drawGameOver();
    //     this.gameOverScreen.fade += .05;
    //     this.canvas.addEventListener('keydown', this.play);
    //     this.gameOverScreen.drawRestart();
    // }



}







export default Game;