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
            width: 1200,
            height: 750
        }

        this.running = false;
        this.lastTime = Date.now();
        this.words = [];
        this.confettis = []
        this.score = 0;
        this.startTimer = 0;
        this.endTimer = 0;
        this.wpm = 0;

        // this.populateWords = this.populateWords.bind(this)
        this.start = this.start.bind(this);
        this.restart = this.restart.bind(this);
        // this.gameOver = this.gameOver.bind(this);
        this.gameOverAnimate = this.gameOverAnimate.bind(this);
        // this.drawWord = this.drawWord.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
        this.handleWord = this.handleWord.bind(this)
        this.calculateWPM = this.calculateWPM.bind(this)
    }
    


    
    
    start(e) {
        // debugger
        if (e.button === 0 || e.keyCode === 13) {
            // debugger
            this.page.removeEventListener('keydown', this.start);
            this.canvas.removeEventListener('click', this.start)
            clearInterval(window.startInterval);
            clearInterval(window.overInterval); 
            this.canvas.className === 'start-screen'
            // this.running = true;
            this.startTimer = Date.now()
            // this.lastTime;

            requestAnimationFrame(this.gameLoop)


            this.input.disabled = false;
            this.input.style.display = 'block';
            this.input.focus();
        }
        
    }
    
    
    // deltaTime gives you the amount of time since the last frame/iteration of the loop
    // you can use that to calculate an amount of time for a new word to show up.
    // have some logic somewhere to subtract the delta time from a counter and once it hits 0, generate a new random word.

    

    gameLoop(timestamp) {  //render
        // debugger
        let loopTest = requestAnimationFrame(this.gameLoop);

        this.input.focus();

        this.ctx.clearRect(0, 0, this.container.width, this.container.height)
        this.canvas.addEventListener('click', this.input.focus())
        this.input.addEventListener('keydown', this.handleWord)



        let now = Date.now();
        let deltaTime = now - this.lastTime;  //gap between last time and now
        let randomTime = Math.floor(Math.random() * (3000 - 1050) + 1050);
        if (deltaTime > randomTime) {
           this.ctx.clearRect(0, 0, this.container.width, this.container.height)
            this.populateWords()
            this.lastTime = now;
        }


        for (let i = 0; i < this.words.length; i++) {
            this.words[i].y -= this.words[i].speedY;
            for (let text in this.words) {
            let t = this.words[text];
            this.ctx.beginPath();
                this.ctx.fillText(t.text, t.x, t.y, 400);
                this.ctx.fillStyle = "midnightblue";
                this.ctx.font = '24px "Arima Madurai", cursive'
            this.ctx.closePath();

                if (t.y >= 758 && t.text !== "") {
                    this.gameOverAnimate();
                    this.input.style.display = "none";
                    this.input.value = "";
                    this.input.disabled = true;
                    this.endTimer = Date.now();
                    cancelAnimationFrame(loopTest);
                    this.running = false;
                    this.calculateWPM();
                    break;
                }
            }
        }  
    }



    populateWords() {
     
        const word = new Word(this.ctx, this.canvas);

        let x = Math.floor(Math.random() * (1000 -150)) + 150;
        // let x = 85
        // let y = 55
        let y = -10;
        this.words.push({
            x,
            y,
            text: word.randomizeWord(),
            speedX: 2,
            speedY: -(Math.random() * (1.0 - 0.9) + 0.9)
            // speedY: -0.9
        });

    }


    // drawWord() {
    //     // debugger
    //     this.input.focus();

    //     for (let i = 0; i < this.words.length; i++) {
    //         this.words[i].y -= this.words[i].speedY;
    //         for (let text in this.words) {
    //         let t = this.words[text];
    //         this.ctx.fillText(t.text, t.x, t.y, 200);
    //         this.ctx.fillStyle = "black";
    //         this.ctx.font = '23px "Rubik"';

    //             if (t.y >= 758 && t.text !== "") {
    //                 this.gameOverAnimate();
    //                 this.input.style.display = "none";
    //                 this.input.value = "";
    //                 this.input.disabled = true;
    //                 this.endTimer = Date.now();
    //                 this.ctx.clearRect(0, 0, this.container.width, this.container.height)
    //                 cancelAnimationFrame(this.drawWord);
    //                 this.calculateWPM();
    //                 break;
    //             }
    //         }
    //     }      
    // }


    handleWord(e) {
        // debugger
        let wordsArray = this.words;
        
        if (e.keyCode === 32 || e.keyCode === 13) {
            let userWord = this.input.value.trim(); // .trim gets rid of spaces in the front and back of the string
                wordsArray.forEach((words) => {
                    if (userWord === words.text) {
                        words.text = ""
                        this.score += 1
                    }
                })
                this.input.value = ""
        }
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


    drawScoreCount() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'white';
            this.ctx.font = '30px "Fredericka the Great", cursive';
            this.ctx.fillText('score: ' + this.score.toString(), 520, 420)
        this.ctx.closePath();
    }

    drawWPM() {
        // console.log(this.wpm)
        const actualWPM = this.wpm;
        this.ctx.beginPath();
            this.ctx.fillStyle = 'white';
            this.ctx.font = '30px "Fredericka the Great", cursive';
            this.ctx.fillText('wpm: ' + this.wpm.toString(), 520, 480)
        this.ctx.closePath();
    }


    calculateWPM() {
        // debugger
        let timeDifference = this.endTimer - this.startTimer;
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        if (minutes > 0) {
          seconds += minutes * 60;
        }
        this.wpm = ((this.score * 60) / seconds).toFixed(2);
        // this.drawWPM()

    }



    restart(e) {
        // if (e.keyCode === 13 || e.button === 0) {
            this.page.removeEventListener('keydown', this.start)  //not working
            this.running = false;
            this.score = 0;
            this.word = new Word(this.ctx, this.canvas);

        // }
    }



    // gameOver(e) {
    //     // this.page.removeEventListener('keydown', this.play)  //not working
    //     // debugger
    //     if (e.keyCode === 13 || e.button === 0) {
    //         window.overInterval = setInterval(this.gameOverAnimate, 100);

    //         this.canvas.removeEventListener("click", this.input.focus());
    //         this.input.removeEventListener("keydown", this.handleWord);
    //         this.input.removeEventListener("input", this.startTimer);
    //         this.gameLoop()
    //         // this.canvas.addEventListener("click", this.gameLoop);
    //         // this.page.addEventListener("keydown", this.gameLoop);
    //         // this.start()
    //     }
    // }

    gameOverAnimate() {
        // debugger

        this.ctx.clearRect(0, 0, this.container.width, this.canvas.height);
        this.gameOverScreen.drawGameOver();
        this.gameOverScreen.fade += .05;
        this.gameOverScreen.drawRestart();
        // this.canvas.addEventListener("click", this.gameOver);
        // this.page.addEventListener("keydown", this.gameOver);
        // this.gameOver()
        this.drawScoreCount();
        this.drawWPM();


        // this.restart()
        // this.page.addEventListener('keydown', this.play);  // not working
    }



}







export default Game;