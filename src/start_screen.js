class StartScreen {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.titlePosition = 150;
        this.startCounter = 0;
    }


    drawTitle(titlePosition) {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'aqua';
            this.ctx.font = '84px "Bungee Outline"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Type Away", 520, titlePosition);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawStartClick() {
        this.ctx.beginPath();
            this.ctx.fillStyle = "khaki";
            this.ctx.font = '38px "Fredericka the Great", cursive';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('click or press enter to start', 520, 450);
            this.ctx.fill();
        this.ctx.closePath();
    }
}


export default StartScreen;

