// class GameOverScreen {
//     constructor(ctx, canvas) {
//         this.ctx = ctx;
//         this.canvas = canvas;

//         this.fade = 0;
//         this.endCounter = 0;
//     }


//     drawGameOver() {
//         this.ctx.beginPath();
//             this.ctx.fillStyle = `rgba(255, 0, 0, ${this.fade}`;
//             this.ctx.font = '80px "Grandstander"';
//             this.ctx.textAlign = 'center';
//             this.ctx.fillText('Game Over', 410, 500);
//             this.ctx.fill();
//         this.ctx.closePath();
//     }


//     drawRestart() {
//         this.ctx.beginPath();
//             this.ctx.fillStyle = "yellow";
//             this.ctx.textAlign = "center";
//             this.ctx.font = '38px "Grandstander"';
//             this.ctx.fillText("Press Enter tpo Restart", 410, 500);
//             this.ctx.fill();
//         this.ctx.closePath();
//     }

// };


// export default GameOverScreen;