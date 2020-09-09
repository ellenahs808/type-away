console.log("Webpack is working!");

import Game from './game';



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    let game = new Game(canvas);
    game.draw(ctx);



    // for testing
    window.canvas = canvas;
    window.ctx = ctx;
    window.Game = Game;
    //
    

});
