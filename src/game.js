import Word from './words';
import GameOverScreen from './game_over_screen';




class Game {
    constructor(canvas, ctx, page, input) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.page = page;
        this.input = input;
        // this.wordList = wordList;


        this.gameOverScreen = new GameOverScreen(ctx, canvas);
  
        
        this.container = {
            width: 800,
            height: 850
        }

        this.lastTime = Date.now();
        this.words = [];
        this.confettis = []
        this.counter = 0;


        // this.populateWords = this.populateWords.bind(this)
        this.start = this.start.bind(this);
        this.restart = this.restart.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.gameOverAnimate = this.gameOverAnimate.bind(this);
        // this.dropWords = this.dropWords.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
        this.handleWord = this.handleWord.bind(this)
    }
    


    
    
    start(e) {
        if (e.button === 0 || e.keyCode === 13) {
            // debugger
            this.page.removeEventListener('keydown', this.start);
            this.canvas.removeEventListener('click', this.start)
            clearInterval(window.startInterval);
            clearInterval(window.overInterval); 
            this.canvas.className === 'start-screen'
            // this.restart()
            this.running = true;
            // this.gameLoop();
            // let timestamp = Date.now()
            requestAnimationFrame(this.gameLoop)

            this.input.disabled = false;
            this.input.style.display = 'block';
            this.input.focus();
        }
        
    }
    
    
    // deltaTime gives you the amount of time since the last frame/iteration of the loop
    // you can use that to calculate an amount of time for a new word to show up.
    // have some logic somewhere to subtract the delta time from a counter and once it hits 0, generate a new random word.

    

    gameLoop(timestamp) {
        // debugger
        let loopTest = requestAnimationFrame(this.gameLoop);
        this.input.focus();

        this.ctx.clearRect(0, 0, this.container.width, this.container.height)
        this.canvas.addEventListener('click', this.input.focus())
        this.input.addEventListener('keydown', this.handleWord)


        let now = Date.now();
        let deltaTime = now - this.lastTime;  //gap between last time and now
        let randomTime = Math.floor(Math.random() * (4000 - 1000) + 1000);
        if (deltaTime > randomTime) {
            this.populateWords()
            this.lastTime = now;
        }

        
    
        this.dropWords();

        
    }


    dropWords() {
        // debugger
        this.input.focus();


        for (let i = 0; i < this.words.length; i++) {
            this.words[i].y -= this.words[i].speedY;
            for (let text in this.words) {
            let t = this.words[text];
            this.ctx.fillText(t.text, t.x, t.y, 200);
            this.ctx.fillStyle = "black";
            this.ctx.font = '23px "Rubik"';

                if (t.y >= 854) {
                    this.gameOverAnimate();
                    break;
                }

          }
        }      
    }


    handleWord(e) {
        // debugger
        let wordsArray = this.words;
        if (e.keyCode === 32 || e.keyCode === 13) {
        let userWord = this.input.value.trim();
        // let focusedWord = (document.getElementById("wordlist").innerHTML = t.text);
        if (wordsArray.includes(userWord)) {
            console.log("yahoo");
        }
        }
    }
    



    populateWords() {
     
        const word = new Word(this.ctx, this.canvas);

        let x = Math.floor(Math.random() * (this.container.width - 200)) + 85;
        let y = -10;
        this.words.push({
            x,
            y,
            text: word.randomizeWord(),
            speedX: 2,
            speedY: -(Math.random() * (1.4 - 1.2) + 1.2)
        });

 
    }

    

    // createConfettis() {
    //     const confetti = {
    //       decrease: 0.05,
    //       highestAlpha: 0.8,
    //       highestRadius: 5,
    //       highestSpeedX: 5,
    //       highestSpeedY: 5,
    //       lowestAlpha: 0.4,
    //       lowestRadius: 2,
    //       lowestSpeedX: -5,
    //       lowestSpeedY: -5,
    //       total: 50,
    //     };

    //     for (let i = 0; i < confetti.total; i++) {
    //     const c = generateRandomRgbColor();
    //     const alpha =
    //         confetti.lowestAlpha +
    //         Math.random() * (confetti.highestAlpha - confetti.lowestAlpha);
    //     particles.push({
    //         x: l.x,
    //         y: l.y,
    //         radius:
    //         particle.lowestRadius +
    //         Math.random() *
    //             (particle.highestRadius - particle.lowestRadius),
    //         color: `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`,
    //         speedX:
    //         particle.lowestSpeedX +
    //         Math.random() *
    //             (particle.highestSpeedX - particle.lowestSpeedX),
    //         speedY:
    //         particle.lowestSpeedY +
    //         Math.random() *
    //             (particle.highestSpeedY - particle.lowestSpeedY),
    //     });
    //     }
    // }




    restart(e) {
        // if (e.keyCode === 13 || e.button === 0) {
            this.page.removeEventListener('keydown', this.start)  //not working
            this.running = false;
            this.score = 0;
            this.word = new Word(this.ctx, this.canvas);

        // }
    }



    gameOver() {
        // this.page.removeEventListener('keydown', this.play)  //not working
        if (e.keyCode === 13 || e.button === 0) {
            window.overInterval = setInterval(this.gameOverAnimate, 100);

            this.canvas.removeEventListener("click", this.input.focus());
            this.input.removeEventListener("keydown", this.handleZombie);
            this.input.removeEventListener("input", this.startTimer);
            this.input.value = "";
            this.input.disabled = true;
            this.input.style.display = "none";
        }
    }


    gameOverAnimate() {
        // debugger
        this.ctx.clearRect(0, 0, this.container.width, this.canvas.height);
        this.gameOverScreen.drawGameOver();
        this.gameOverScreen.fade += .05;
        this.gameOverScreen.drawRestart();
        this.canvas.addEventListener("click", this.start);
        this.page.addEventListener("keydown", this.start);
        // this.restart()
        // this.page.addEventListener('keydown', this.play);  // not working
    }



}







export default Game;