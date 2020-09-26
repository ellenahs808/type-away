import Word from './words';
import GameOverScreen from './game_over_screen';




class Game {
    constructor(canvas, ctx, page, input, wordList) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.page = page;
        this.input = input;
        this.wordList = wordList;


        this.gameOverScreen = new GameOverScreen(ctx, canvas);
  
        
        this.container = {
            width: 800,
            height: 900
        }

        this.lastTime = Date.now();
        this.words = [];
        this.confettis = []
        this.counter = 0;


        this.populateWords = this.populateWords.bind(this)
        this.play = this.play.bind(this);
        this.restart = this.restart.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.gameOverAnimate = this.gameOverAnimate.bind(this);
        // this.render = this.render.bind(this);
        this.gameLoop = this.gameLoop.bind(this);
    }
    


    testThis() {
        console.log(this.input.focus());
    }



    // deltaTime gives you the amount of time since the last frame/iteration of the loop
    // you can use that to calculate an amount of time for a new word to show up.
    // have some logic somewhere to subtract the delta time from a counter and once it hits 0, generate a new random word.



    play(e) {
        if (e.button === 0 || e.button === 32) {
            // debugger
            this.page.removeEventListener('keydown', this.play);
            this.canvas.removeEventListener('click', this.play)
            this.restart()
            clearInterval(window.startInterval);
            clearInterval(window.overInterval); 
            this.canvas.className === 'start-screen'
            let timestamp = Date.now();
            this.running = true;
            this.gameLoop();
            // let timestamp = Date.now()
            // requestAnimationFrame(this.gameLoop(timestamp))
        }
        // requestAnimationFrame(this.gameLoop.bind(this))
        
    }


    gameLoop(timestamp) {
        // debugger
        let loopTest = requestAnimationFrame(this.gameLoop);
        let wordsArray = this.words


        timestamp = Date.now();
        let deltaTime = timestamp - this.lastTime;  //gap between last time and now
        let randomTime = Math.floor(Math.random() * (5000 - 1000) + 3000);
        if (deltaTime > randomTime) {
            this.populateWords()
            this.lastTime = timestamp;
        }
        this.ctx.clearRect(0, 0, this.container.width, this.container.height)
    
        // this.render();

        for (let i = 0; i < this.words.length; i++) {
          this.words[i].y -= this.words[i].speedY;
          for (let text in this.words) {
            let t = this.words[text];
            this.ctx.fillText(t.text, t.x, t.y, 200);
            this.ctx.fillStyle = "black";
            this.ctx.font = '23px "Rubik"';

            if (t.y >= 899) {
                // cancelAnimationFrame(loopTest)
                this.ctx.clearRect(0, 0, this.container.width, this.container.height)
                this.gameOverAnimate();
              
                break;
            }

            document.addEventListener("keydown", function (e) {
              // debugger
              // if (e.keyCode >= 65 && e.keyCode <= 90) {
              let focusedWord = (document.getElementById("wordlist").innerHTML = t.text);
              console.log(focusedWord);
              console.log(wordsArray)
              if (this.words.includes(focusedWord)) {
                console.log("yahoo");
              }
              // }
            });
          }
        }





        // requestAnimationFrame(this.gameLoop.bind(this));
        
    }


    // render() {
    //     // debugger
    //     for (let i = 0; i < this.words.length; i++) {
    //         this.words[i].y -= this.words[i].speedY;
    //         for (let text in this.words) {
    //         let t = this.words[text];
    //         this.ctx.fillText(t.text, t.x, t.y, 200);
    //         this.ctx.fillStyle = "black";
    //         this.ctx.font = '23px "Rubik"';

    //             if (t.y >= 899) {
    //                 this.gameOverAnimate();
    //                 break;
    //             }


    //             document.addEventListener('keydown', function(e) {
    //                 // debugger
    //                 // if (e.keyCode >= 65 && e.keyCode <= 90) {
    //                     let focusedWord = document.getElementById("wordlist").focus = t.text
    //                     console.log(focusedWord)
    //                     if (focusedWord === t.text) {
    //                         console.log('yahoo')
    //                     }
    //                 // }
    //             })
                
    //         }
    //     }
    // }



    populateWords() {
     
        const word = new Word(this.ctx, this.canvas);

        let x = Math.floor(Math.random() * (this.container.width - 200)) + 85;
        let y = 20;
        const speed = Math.floor(Math.random() * 1.6 + 0.6);
        this.words.push({
        x,
        y,
        text: word.randomizeWord(),
        speedX: 2,
        speedY: -1.5
        });

        // requestAnimationFrame(this.populateWords.bind(this));

 
    }

    

    createConfettis() {
        const confetti = {
          decrease: 0.05,
          highestAlpha: 0.8,
          highestRadius: 5,
          highestSpeedX: 5,
          highestSpeedY: 5,
          lowestAlpha: 0.4,
          lowestRadius: 2,
          lowestSpeedX: -5,
          lowestSpeedY: -5,
          total: 50,
        };

        for (let i = 0; i < confetti.total; i++) {
        const c = generateRandomRgbColor();
        const alpha =
            confetti.lowestAlpha +
            Math.random() * (confetti.highestAlpha - confetti.lowestAlpha);
        particles.push({
            x: l.x,
            y: l.y,
            radius:
            particle.lowestRadius +
            Math.random() *
                (particle.highestRadius - particle.lowestRadius),
            color: `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`,
            speedX:
            particle.lowestSpeedX +
            Math.random() *
                (particle.highestSpeedX - particle.lowestSpeedX),
            speedY:
            particle.lowestSpeedY +
            Math.random() *
                (particle.highestSpeedY - particle.lowestSpeedY),
        });
        }
    }





    // handleWord() {
    //     setTimeout(function() {
    //         let anotoh = document.getElementById('wordlist').focus()
    //         let wordValue = document.getElementById('wordlist').value
    //         console.log(anotoh)
    //         console.log(wordValue)
    //     })
    // }


    restart(e) {
        // if (e.keyCode == 13) {
            this.page.removeEventListener('keydown', this.play)  //not working
            this.running = false;
            this.score = 0;
            this.word = new Word(this.ctx, this.canvas);

        // }
    }



    gameOver() {
        // this.page.removeEventListener('keydown', this.play)  //not working
        this.input.style.display = 'none';
        window.overInterval = setInterval(this.gameOverAnimate, 100);
    }


    gameOverAnimate() {
        // debugger
        this.ctx.clearRect(0, 0, this.container.width, this.canvas.height);
        this.gameOverScreen.drawGameOver();
        this.gameOverScreen.fade += .05;
        this.gameOverScreen.drawRestart();
        this.restart()
        // this.page.addEventListener('keydown', this.play);  // not working
    }



}







export default Game;