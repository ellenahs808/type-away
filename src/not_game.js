import Word from './not_word';


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


        // this.word.randomize();
        // this.word.drawWord();
        // this.word.animate(ctx);

        

        this.lastTime = 0;
        this.words = [];
        this.counter = 0;
        // this.timestamp = 



        this.registerEvents = this.registerEvents.bind(this)
        this.populateWords = this.populateWords.bind(this)
    }
    
    // drawSquare(ctx) {
    //     ctx.fillStyle = "pink";
    //     ctx.fillRect(880, this.canvas.height / 2, 50, 50);

    // }


    testThis() {
        console.log(this.words);
    }



    // deltaTime gives you the amount of time since the last frame/iteration of the loop
    // you can use that to calculate an amount of time for a new word to show up.
    // have some logic somewhere to subtract the delta time from a counter and once it hits 0, generate a new random word.


    // gameLoop(timestamp) {
    //     // debugger
    //     const word = new Word(this.ctx, this.canvas);
    //     let deltaTime = timestamp - this.lastTime;
    //     this.lastTime = timestamp;

    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //     this.populateWords(timestamp)
        

    //     for (let i = 0; i < this.words.length; i++) {
    //         for (let text in this.words) {
    //             let t = this.words[text]
    //         // debugger
    //         //   console.log(this.words[t])
    //         //   word.drawWord()
            
    //         this.ctx.fillText(t.text, t.x, t.y, 200);
    //         this.ctx.fillStyle = "green";
    //         this.ctx.font = '25px "Rubik"';
    //         }
    //     }



    //     word.update(deltaTime);
    //     word.animate(this.ctx);
    //     // word.drawWord()
      


    //     requestAnimationFrame(this.gameLoop.bind(this));
        
    // }


    



    drawWord() {

        for (let i = 0; i < this.words.length; i++) {
          for (let text in this.words) {
            let t = this.words[text];
            // debugger
            //   console.log(this.words[t])
            //   word.drawWord()
            this.ctx.fillText(t.text, t.x, t.y, 200);
            this.ctx.fillStyle = "green";
            this.ctx.font = '25px "Rubik"';
          }
        }
    }




    updatePosition(deltaTime) {
        if (!deltaTime) return;

        this.position.y += 20 / deltaTime;
    }
    


    moveWord() {

    }





    populateWords(timestamp) {
        const word = new Word(this.ctx, this.canvas);

        let x = Math.floor(Math.random() * (this.canvas.width - 150)) + 50;
        let y = 20;
        const dX = this.canvas.width / 2 - this.canvas.width;
        const dY = this.canvas.height / 2 - this.canvas.height;
        const norm = Math.sqrt(dX ** 2 + dY ** 2);
        const speed = Math.floor(Math.random() * 1.6 + 0.6);
        this.words.push({
        x,
        y,
        text: word.randomizeWord(),
        speedX: (dX / norm) * speed,
        speedY: (dY / norm) * speed,
        });
 
    }




    play() {
        const word = new Word(this.ctx, this.canvas);
        let timestamp = Date.now();
        this.running = true;
        // requestAnimationFrame(() => (this.gameLoop(timestamp)));
        // this.gameLoop(timestamp);
        // this.populateWords(timestamp);
        timerId = setInterval(this.gameLoop(timestamp), 2000);
        // setInterval(() => {
        //     word.animate(this.ctx);
        //     // word.drawWord()
        // }, 3000);
        
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