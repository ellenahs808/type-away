import Game from './game';
import StartScreen from './start_screen';



document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    let game = new Game(canvas, ctx);


    // game.drawSquare(ctx);
    // game.testThis();
    game.play()
    game.handleAttackWord();

    const startScreen = new StartScreen(ctx, canvas);

    let titlePos = -10;
    let startCounter = 0;

    function titleDrop() {
        ctx.clearRect(0, 0, 1800, 900);
        titlePos = 140;
        startCounter += .5;
        if (startCounter % 10 <= 6) {
            startScreen.drawStartClick();
        } else {
            null;
        }

        canvas.addEventListener('keydown', game.play)

        startScreen.drawTitle(titlePos);
    }

    if (canvas.className === 'start-screen') {
        window.startInterval = setInterval(titleDrop, 70);
    }

});


