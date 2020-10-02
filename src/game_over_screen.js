class GameOverScreen {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        // this.fade = 0;
        this.endCounter = 0;

    }


    drawGameOver() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'aqua';
            this.ctx.font = '80px "Bungee Outline"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("It's Ok ♡ Try Again", 520, 360);
            this.ctx.fill();
        this.ctx.closePath();
    }


    drawRestart() {
        this.ctx.beginPath();
            this.ctx.fillStyle = "khaki";
            // this.ctx.fillStyle = `rgba(240, 230, 140, ${this.fade}`;
            this.ctx.textAlign = "center";
            this.ctx.font = '36px "Fredericka the Great", cursive';
            this.ctx.fillText("click to restart", 520, 540);
            this.ctx.fill();
        this.ctx.closePath();
    }
    

};


export default GameOverScreen;