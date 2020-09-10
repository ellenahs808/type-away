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


        this.word = new Word(ctx, canvas, x, y); //Word object
        // this.word.drawWord();
        // this.word.attack();
        // this.word.animate(ctx);
        // this.word.floatWord();
        // this.word.attackCenter();
        


        this.startType = 0;
        this.endType = 0;
        this.round = 1;
        this.lives = 10;


        this.text = [];


        this.startTimer = this.startTimer.bind(this);
        this.render = this.render.bind(this);
    }

    play(ctx) {
        this.running = true;
        this.word.animate(ctx);
    }


    restart() {
        this.running = false;
        this.score = 0;
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


    drawSquare(ctx) {
        ctx.fillStyle = "pink";
        ctx.fillRect(880, this.canvas.height / 2, 50, 50);

    }


    testThis() {
        console.log(this.ctx)
    }




    handleKeydown() {
        document.addEventListener('keydown', keyDownHandler)
    };


    handleKeyUp() {
        document.addEventListener('keyup', keyUpHandler)
    };


    handleResizeHandler() {
        window.addEventListener('resize', resizeHandler)
    };


    loop(frames) {
        for (const t of text) {
            ctx.fillText(String.fromCharCode(this.word.drawWord()), t.x, t.y);
        }
        ctx.font = label.font;
        ctx.fillStyle = label.color;
        ctx.fillText('Score: ' + score, label.left, label.margin);
        ctx.fillText('Lives: ' + lives, label.right, label.margin);
        processParticles(frames);
        // createLetters();
        // removeLetters(frames);
    };



    // removeLetters(frames) {
    //     for (const t of text) {
    //         if (isIntersectingRectangleWithRectangle(l, letter.size, letter.size, center, center.radius, center.radius)) {
    //         if (--lives === 0) {
    //             window.alert('GAME OVER!');
    //             window.location.reload(false);
    //         } else if (lives > 0) {
    //             window.alert('START AGAIN!');
    //             letters = [];
    //         }
    //         break;
    //         } else {
    //         l.x += l.speedX * frames;
    //         l.y += l.speedY * frames;
    //         }
    //     }
    // }


  

    startTimer() {
        if (this.startType === 0) {
            this.startType = Date.now();
        }
    }
         



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