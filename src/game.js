import Word from './words';
import GameOverScreen from './game_over_screen';




class Game {
  constructor(canvas, ctx, page, input) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.page = page;
    this.input = input;

    this.gameOverScreen = new GameOverScreen(ctx, canvas);

    this.container = {
      width: 1200,
      height: 750,
    };

    this.lastTime = Date.now();
    this.words = [];
    this.confettis = [];
    this.score = 0;
    this.startTimer = 0;
    this.endTimer = 0;
    this.wpm = 0;

    this.populateWords = this.populateWords.bind(this);
    this.start = this.start.bind(this);
    this.restart = this.restart.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.gameLoop = this.gameLoop.bind(this);
    this.handleWord = this.handleWord.bind(this);
    this.calculateWPM = this.calculateWPM.bind(this);
  }

  start(e) {
    // debugger
    if (e.button === 0 || e.keyCode === 13) {
      // debugger

      this.input.disabled = false;
      this.input.style.display = "block";
      this.input.focus();

      this.canvas.removeEventListener("click", this.start);
      this.page.removeEventListener("keydown", this.start);
      clearInterval(window.startInterval);
      clearInterval(window.overInterval);
      this.canvas.className === "start-screen";
      this.startTimer = Date.now();
      this.restart();

      requestAnimationFrame(this.gameLoop);
    }
  }

  //render game
  gameLoop() {
    // debugger
    let loopTest = requestAnimationFrame(this.gameLoop);

    this.input.focus();

    this.ctx.clearRect(0, 0, this.container.width, this.container.height);
    this.canvas.addEventListener("click", this.input.focus());
    this.input.addEventListener("keydown", this.handleWord);

    this.canvas.removeEventListener("click", this.gameLoop);
    this.page.removeEventListener("keydown", this.gameLoop);

    //falling words
    let now = Date.now();
    let deltaTime = now - this.lastTime; //gap between last time and now
    let randomTime = Math.floor(Math.random() * (3000 - 1050) + 1050);
    if (deltaTime > randomTime) {
      this.ctx.clearRect(0, 0, this.container.width, this.container.height);
      this.populateWords();
      this.lastTime = now;
    }

    //draw words
    for (let i = 0; i < this.words.length; i++) {
      // debugger
      this.words[i].y -= this.words[i].speedY;
      for (let text in this.words) {
        let t = this.words[text];
        this.ctx.beginPath();
        this.ctx.fillText(t.text, t.x, t.y, 400);
        this.ctx.fillStyle = "midnightblue";
        this.ctx.font = '24px "Arima Madurai", cursive';
        this.ctx.closePath();

        if (t.y >= 758 && t.text !== "") {
          // debugger
          this.gameOver();
          clearInterval(window.intervalId);
          this.gameOverScreen.endCounter = 0;
          cancelAnimationFrame(loopTest);
          break;
        }
      }
    }
  }

  populateWords() {
    const word = new Word(this.ctx, this.canvas);

    let x = Math.floor(Math.random() * (1000 - 150)) + 150;
    let y = -10;
    this.words.push({
      x,
      y,
      text: word.randomizeWord(),
      speedX: 2,
      speedY: -(Math.random() * (1.0 - 0.9) + 0.9),
    });
  }

  handleWord(e) {
    // debugger
    let wordsArray = this.words;

    if (e.keyCode === 32 || e.keyCode === 13) {
      let userWord = this.input.value.trim(); // .trim gets rid of spaces in the front and back of the string
      wordsArray.forEach((words) => {
        if (userWord === words.text) {
          words.text = "";
          this.score += 1;
        }
      });
      this.input.value = "";
    }
  }

  drawScoreCount() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.font = '30px "Fredericka the Great", cursive';
    this.ctx.fillText("score: " + this.score.toString(), 520, 420);
    this.ctx.closePath();
  }

  drawWPM() {
    // console.log(this.wpm)
    const actualWPM = this.wpm;
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.font = '30px "Fredericka the Great", cursive';
    this.ctx.fillText("wpm: " + this.wpm.toString(), 520, 480);
    this.ctx.closePath();
  }

  calculateWPM() {
    // debugger
    let timeDifference = this.endTimer - this.startTimer;
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    if (minutes > 0) {
      seconds += minutes * 60;
    }
    this.wpm = ((this.score * 60) / seconds).toFixed(2);
  }

  restart() {
    this.score = 0;
    this.wpm = 0;
  }

  gameOver() {
    // debugger
    this.input.style.display = "none";
    this.input.value = "";
    this.input.disabled = true;
    this.canvas.removeEventListener("click", this.input.focus());
    this.input.removeEventListener("keydown", this.handleWord);

    this.ctx.clearRect(0, 0, this.container.width, this.container.height);
    this.gameOverScreen.drawGameOver();
    this.gameOverScreen.drawRestart();
    this.drawScoreCount();
    this.endTimer = Date.now();
    this.calculateWPM();
    this.drawWPM();

    this.words = [];
    this.canvas.addEventListener("click", this.start);

    //flashing restart doesn't work
    // this.gameOverScreen.endCounter += .5;
    // if (this.gameOverScreen.endCounter >= 1.0) {
    //     if (this.gameOverScreen.endCounter % 10 >= 5) {
    //         this.gameOverScreen.drawRestartClick();
    //     }
    // }
  }



  
  //confetti bombs
  // testThis() {
  //     this.createConfettis()
  // }

  // generateRandomColor() {
  //     let colors = ['#99FFCC', '#FFF66', '#FF99FF', '#FF00FF', '#FFB266', '#FF6666', '#66CC00', '#9999FF', '#FFCCCC', '#99FFFF', '#00CCCC', '#FF007F', '#C0C0C0', '#DAA520', '#00FA9A', '#00FFFF', '#48D1CC', '#00BFFF']
  //     return colors[Math.floor(Math.random() * colors.length)];
  // }

  // createConfettis() {
  //     const confetti = {
  //       decrease: 0.05,
  //       highestAlpha: 0.8,
  //       highestRadius: 5,
  //       highestSpeedX: 5,
  //       highestSpeedY: 5,
  //       lowestAlpha: 0.4,
  //       lowestRadius: 2,
  //       lowestSpeedX: -5,
  //       lowestSpeedY: -5,
  //       total: 50,
  //     };

  //     for (let i = 0; i < confetti.total; i++) {
  //     const c = this.generateRandomColor();
  //     const alpha =
  //         confetti.lowestAlpha +
  //         Math.random() * (confetti.highestAlpha - confetti.lowestAlpha);
  //     this.confettis.push({
  //         x: l.x,
  //         y: l.y,
  //         radius:
  //         confetti.lowestRadius +
  //         Math.random() *
  //             (confetti.highestRadius - confetti.lowestRadius),
  //         color: `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${alpha})`,
  //         speedX:
  //         confetti.lowestSpeedX +
  //         Math.random() *
  //             (confetti.highestSpeedX - confetti.lowestSpeedX),
  //         speedY:
  //         confetti.lowestSpeedY +
  //         Math.random() *
  //             (confetti.highestSpeedY - confetti.lowestSpeedY),
  //     });
  //     }
  // }



}





export default Game;