class StartScreen {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.titlePosition = 200;
        this.startCounter = 0;
    }


    drawTitle(titlePosition) {
        this.ctx.beginPath();
            this.ctx.fillStyle = 'aqua';
            this.ctx.font = '80px "Bungee Outline"';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Type Away", 600, titlePosition);
            this.ctx.fill();
        this.ctx.closePath();
    }

    drawStartClick() {
        this.ctx.beginPath();
            this.ctx.fillStyle = "blueviolet";
            this.ctx.font = '38px "Fredericka the Great", cursive';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('click or press enter to start', 600, 500);
            this.ctx.fill();
        this.ctx.closePath();
    }
}


export default StartScreen;

