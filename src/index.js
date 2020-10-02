import Game from './game';
import StartScreen from './start_screen';



document.addEventListener("DOMContentLoaded", () => {
    const page = document.getElementById("page")
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");
    const input = document.getElementById("typing-form")
 

    const startScreen = new StartScreen(ctx, canvas);
    const game = new Game(canvas, ctx, page, input);

    // game.testThis();

    let titlePosition = 200;
    let startCounter = 0;

    function titleDrop() {
        // debugger
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        titlePosition += 6;
        if (titlePosition >= 350) {
            titlePosition = 350;
            startCounter += .5;
            if (startCounter % 10 <= 6) {
                startScreen.drawStartClick();
            } else {
                null;
            }



            canvas.addEventListener('click', game.start)
            page.addEventListener('keydown', game.start)
        }

        startScreen.drawTitle(titlePosition)
    }


    if (canvas.className === 'start-screen') {
        input.style.display = 'none';
        window.startInterval = setInterval(titleDrop, 70)
    }


    //Audio

    function playAudio() {
        gameAudio.play()
    }
    
    function pauseAudio() {
        gameAudio.pause()
    }

    let introAudio = document.getElementById('intro-audio')
    let gameAudio = document.getElementById('game-audio')
    const playBtn = document.getElementById('play-audio')
    const pauseBtn = document.getElementById('pause-audio')

    playBtn.addEventListener('click', function(e) {
        e.preventDefault()
        playAudio()
        playBtn.setAttribute('class', 'clear-music-button')
        pauseBtn.removeAttribute('class', 'clear-music-button')
    })

    pauseBtn.addEventListener('click', function(e) {
        e.preventDefault()
        pauseAudio()
        pauseBtn.setAttribute('class', 'clear-music-button')
        playBtn.removeAttribute('class', 'clear-music-button')
    })




});


