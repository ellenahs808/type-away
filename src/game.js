import Dictionary from './dictionary';


class Game {
    constructor(ctx, canvas, wordsArray) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.wordsArray = wordsArray;


        this.dictionary = new Dictionary();
        
        
        this.startType = 0;
        this.endType = 0;


        this.startTimer = this.startTimer.bind(this);
    }

    draw(ctx) {
        ctx.fillStyle = "pink";
        ctx.fillRect(10, 400, 50, 50);
    }

    startTimer() {
        if (this.startType === 0) {
            this.startType = Date.now();
        }
    }


}




export default Game;