import Game from './game';



// document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    let game = new Game(canvas, ctx);


    // game.drawSquare(ctx);
    game.testThis();
    game.play()

// });


