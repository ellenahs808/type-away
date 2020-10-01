class GameOverScreen {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.fade = 0;
        this.endCounter = 0;
    }


    drawGameOver() {
        this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(0, 255, 255, ${this.fade}`;
            this.ctx.font = '80px "Bungee Outline"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Game Over', 520, 350);
            this.ctx.fill();
        this.ctx.closePath();
    }


    drawRestart() {
        this.ctx.beginPath();
            this.ctx.fillStyle = "khaki";
            this.ctx.textAlign = "center";
            this.ctx.font = '36px "Fredericka the Great", cursive';
            this.ctx.fillText("click refresh to restart", 520, 520);
            this.ctx.fill();
        this.ctx.closePath();
    }
    

};


export default GameOverScreen;