class StartScreen {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.titlePos = -60;
        this.startCounter = 0;
    }


    drawTitle(titlePos) {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            this.ctx.font = '80px "Grandstander"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Typing Game", 900, titlePos);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawStartClick() {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'blue';
            this.ctx.font = '38px "Grandstander"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Click or Press Enter to Start', 900, 300);
            this.ctx.fill();
        this.ctx.closePath();
    }
}


export default StartScreen;

