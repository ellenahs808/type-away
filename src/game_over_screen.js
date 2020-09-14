class GameOverScreen {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;

        this.fade = 0;
        this.endCounter = 0;
    }


    drawGameOver() {
        this.ctx.beginPath();
            this.ctx.fillStyle = `rgba(255, 255, 255, ${this.fade}`;
            this.ctx.font = '80px "Bungee Outline"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Game Over', 410, 400);
            this.ctx.fill();
        this.ctx.closePath();
    }


    drawRestart() {
        this.ctx.beginPath();
            this.ctx.fillStyle = "blueviolet";
            this.ctx.textAlign = "center";
            this.ctx.font = '36px "Sirin Stencil"';
            this.ctx.fillText("Click Refresh to Restart", 410, 500);
            this.ctx.fill();
        this.ctx.closePath();
    }

};


export default GameOverScreen;