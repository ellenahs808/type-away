/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./words */ "./src/words.js");
/* harmony import */ var _game_over_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_over_screen */ "./src/game_over_screen.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, page, input) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.page = page;
    this.input = input;
    this.gameOverScreen = new _game_over_screen__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
    this.container = {
      width: 1200,
      height: 750
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

  _createClass(Game, [{
    key: "start",
    value: function start(e) {
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
    } //render game

  }, {
    key: "gameLoop",
    value: function gameLoop() {
      // debugger
      var loopTest = requestAnimationFrame(this.gameLoop);
      this.input.focus();
      this.ctx.clearRect(0, 0, this.container.width, this.container.height);
      this.canvas.addEventListener("click", this.input.focus());
      this.input.addEventListener("keydown", this.handleWord);
      this.canvas.removeEventListener("click", this.gameLoop);
      this.page.removeEventListener("keydown", this.gameLoop); //falling words

      var now = Date.now();
      var deltaTime = now - this.lastTime; //gap between last time and now

      var randomTime = Math.floor(Math.random() * (3000 - 1050) + 1050);

      if (deltaTime > randomTime) {
        this.ctx.clearRect(0, 0, this.container.width, this.container.height);
        this.populateWords();
        this.lastTime = now;
      } //draw words


      for (var i = 0; i < this.words.length; i++) {
        // debugger
        this.words[i].y -= this.words[i].speedY;

        for (var text in this.words) {
          var t = this.words[text];
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
  }, {
    key: "populateWords",
    value: function populateWords() {
      var word = new _words__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canvas);
      var x = Math.floor(Math.random() * (1000 - 150)) + 150;
      var y = -10;
      this.words.push({
        x: x,
        y: y,
        text: word.randomizeWord(),
        speedX: 2,
        speedY: -(Math.random() * (1.0 - 0.9) + 0.9)
      });
    }
  }, {
    key: "handleWord",
    value: function handleWord(e) {
      var _this = this;

      // debugger
      var wordsArray = this.words;

      if (e.keyCode === 32 || e.keyCode === 13) {
        var userWord = this.input.value.trim(); // .trim gets rid of spaces in the front and back of the string

        wordsArray.forEach(function (words) {
          if (userWord === words.text) {
            words.text = "";
            _this.score += 1;
          }
        });
        this.input.value = "";
      }
    }
  }, {
    key: "drawScoreCount",
    value: function drawScoreCount() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.font = '30px "Fredericka the Great", cursive';
      this.ctx.fillText("score: " + this.score.toString(), 520, 420);
      this.ctx.closePath();
    }
  }, {
    key: "drawWPM",
    value: function drawWPM() {
      // console.log(this.wpm)
      var actualWPM = this.wpm;
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.font = '30px "Fredericka the Great", cursive';
      this.ctx.fillText("wpm: " + this.wpm.toString(), 520, 480);
      this.ctx.closePath();
    }
  }, {
    key: "calculateWPM",
    value: function calculateWPM() {
      // debugger
      var timeDifference = this.endTimer - this.startTimer;
      var minutes = Math.floor(timeDifference % (1000 * 60 * 60) / (1000 * 60));
      var seconds = Math.floor(timeDifference % (1000 * 60) / 1000);

      if (minutes > 0) {
        seconds += minutes * 60;
      }

      this.wpm = (this.score * 60 / seconds).toFixed(2);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.score = 0;
      this.wpm = 0;
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
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
      this.canvas.addEventListener("click", this.start); //flashing restart doesn't work
      // this.gameOverScreen.endCounter += .5;
      // if (this.gameOverScreen.endCounter >= 1.0) {
      //     if (this.gameOverScreen.endCounter % 10 >= 5) {
      //         this.gameOverScreen.drawRestartClick();
      //     }
      // }
    } //confetti bombs
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

  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_over_screen.js":
/*!*********************************!*\
  !*** ./src/game_over_screen.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GameOverScreen = /*#__PURE__*/function () {
  function GameOverScreen(ctx, canvas) {
    _classCallCheck(this, GameOverScreen);

    this.ctx = ctx;
    this.canvas = canvas;
    this.endCounter = 0;
  }

  _createClass(GameOverScreen, [{
    key: "drawGameOver",
    value: function drawGameOver() {
      this.ctx.beginPath();
      this.ctx.fillStyle = 'aqua';
      this.ctx.font = '80px "Bungee Outline"';
      this.ctx.textAlign = 'center';
      this.ctx.fillText("It's Ok ♡ Try Again", 520, 360);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "drawRestart",
    value: function drawRestart() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "khaki";
      this.ctx.textAlign = "center";
      this.ctx.font = '36px "Fredericka the Great", cursive';
      this.ctx.fillText("click to restart", 520, 540);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return GameOverScreen;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (GameOverScreen);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _start_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start_screen */ "./src/start_screen.js");


document.addEventListener("DOMContentLoaded", function () {
  var page = document.getElementById("page");
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  var input = document.getElementById("typing-form");
  var startScreen = new _start_screen__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, page, input); // game.testThis();
  //start-screen

  var titlePosition = 200;
  var startCounter = 0;

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

      canvas.addEventListener('click', game.start);
      page.addEventListener('keydown', game.start);
    }

    startScreen.drawTitle(titlePosition);
  }

  if (canvas.className === 'start-screen') {
    input.style.display = 'none';
    window.startInterval = setInterval(titleDrop, 70);
  } //Audio


  function playAudio() {
    gameAudio.play();
  }

  function pauseAudio() {
    gameAudio.pause();
  }

  var gameAudio = document.getElementById('game-audio');
  var playBtn = document.getElementById('play-audio');
  var pauseBtn = document.getElementById('pause-audio');
  playBtn.addEventListener('click', function (e) {
    e.preventDefault();
    playAudio();
    playBtn.setAttribute('class', 'clear-music-button');
    pauseBtn.removeAttribute('class', 'clear-music-button');
  });
  pauseBtn.addEventListener('click', function (e) {
    e.preventDefault();
    pauseAudio();
    pauseBtn.setAttribute('class', 'clear-music-button');
    playBtn.removeAttribute('class', 'clear-music-button');
  });
});

/***/ }),

/***/ "./src/start_screen.js":
/*!*****************************!*\
  !*** ./src/start_screen.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StartScreen = /*#__PURE__*/function () {
  function StartScreen(ctx, canvas) {
    _classCallCheck(this, StartScreen);

    this.ctx = ctx;
    this.canvas = canvas;
    this.titlePosition = 150;
    this.startCounter = 0;
  }

  _createClass(StartScreen, [{
    key: "drawTitle",
    value: function drawTitle(titlePosition) {
      this.ctx.beginPath();
      this.ctx.fillStyle = 'aqua';
      this.ctx.font = '84px "Bungee Outline"';
      this.ctx.textAlign = 'center';
      this.ctx.fillText("Type Away", 520, titlePosition);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "drawStartClick",
    value: function drawStartClick() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "khaki";
      this.ctx.font = '38px "Fredericka the Great", cursive';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('click or press enter to start', 520, 450);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return StartScreen;
}();

/* harmony default export */ __webpack_exports__["default"] = (StartScreen);

/***/ }),

/***/ "./src/words.js":
/*!**********************!*\
  !*** ./src/words.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Words = /*#__PURE__*/function () {
  function Words(ctx, canvas) {
    _classCallCheck(this, Words);

    this.words = ['able', 'abundance', 'accelerate', 'accept', 'ace', 'achieve', 'active', 'adorable', 'advance', 'adventure', 'alight', 'alive', 'always', 'amaze', 'amuse', 'aspire', 'ascend', 'attain', 'attraction', 'awake', 'aware', 'awesome', 'beaming', 'beauty', 'believe', 'bliss', 'bounty', 'brave', 'bravo', 'bubbly', 'blessing', 'blessed', 'blissful', 'bloom', 'balance', 'blossom', 'balanced', 'brilliant', 'beloved', 'best', 'better', 'bold', 'boldness', 'bright', 'breezy', 'brilliance', 'bravery', 'belonging', 'breathtaking', 'blazing', 'beauty', 'benevolent', 'befriend', 'best', 'buddy', 'calm', 'capable', 'care', 'charm', 'cheers', 'chirp', 'classy', 'clean', 'clear', 'comfort', 'comic', 'confirm', 'confidence', 'celebrate', 'content', 'cool', 'cosy', 'courage', 'creative', 'cuddly', 'cushy', 'cute', 'constant', 'champion', 'caring', 'certainty', 'clarity', 'connection', 'carefree', 'clever', 'credible', 'curious', 'delicate', 'delicious', 'delight', 'dreamy', 'dynamic', 'dazzling', 'delight', 'divine', 'do', 'daring', 'deserving', 'decent', 'desire', 'devoted', 'drive', 'diversity', 'dependable', 'dedication', 'earnest', 'easy', 'ecstatic', 'efficient', 'effortless', 'elegant', 'enchanting', 'energetic', 'energized', 'engaging', 'essential', 'esteemed', 'ethical', 'excellent', 'exciting', 'exquisite', 'empathy', 'ease', 'easily', 'empower', 'encourage', 'enable', 'elated', 'engaged', 'energy', 'educated', 'elegance', 'effective', 'excited', 'enjoy', 'endurance', 'experience', 'expertise', 'enjoyment', 'eager', 'elevate', 'evolve', 'expression', 'empowering', 'enchanted', 'ecstatic', 'equal', 'exemplary', 'earnest', 'enduring', 'expansive', 'exuberant ', 'endearing', 'fabulous', 'fair', 'familiar', 'family', 'fantastic', 'favorable', 'fitting', 'free', 'fresh', 'flourish', 'fortunate', 'friendly', 'fun', 'funny', 'flowing', 'faith', 'faithful', 'favorite', 'focus', 'fulfilled', 'forgiving ', 'fancy', 'fearless', 'festive', 'fit', 'fortitude', 'freedom', 'generous', 'genius', 'genuine', 'giving', 'glow', 'glowing', 'good', 'gorgeous', 'grace', 'graceful', 'great', 'grin', 'growing', 'genius', 'gift', 'genial', 'giddy', 'glad', 'growth', 'guidance', 'guide', 'give', 'giving', 'good', 'goodness', 'grand', 'great', 'goddess', 'gorgeous', 'grounded', 'glory', 'grow', 'gratitude', 'gratitude', 'goodwill', 'gentle', 'happy', 'heal', 'healing', 'healthy', 'heart', 'heartfelt', 'hearty', 'heavenly', 'honest', 'honor', 'hug', 'hope', 'humble', 'happily', 'honesty', 'harmony', 'health', 'hopeful', 'hope', 'healthy', 'humor', 'hero', 'holy', 'harness', 'holiness', 'honor', 'helpful', 'holistic', 'humorous', 'handsome', 'hilarious', 'idea', 'ideal', 'imagine', 'impressive', 'independent', 'innovate', 'instant', 'intuitive', 'inventive', 'inspire', 'inspiration', 'improve', 'influence', 'insight', 'integrity', 'intention', 'intrepid', 'innocence', 'intense', 'investment', 'invincible', 'incredible', 'ingenious', 'insightful', 'inspiring', 'impartial', 'jovial', 'joy', 'jubilant', 'joyful', 'joyous', 'jolly', 'kind', 'kindness', 'knowing', 'kiss', 'keen', 'kiss', 'king', 'laugh', 'light', 'legendary', 'learned', 'lively', 'lovely', 'lucid', 'lucky', 'luminous', 'like', 'love', 'leader', 'loving', 'liberty', 'luxury', 'life', 'lesson', 'logical', 'lovable', 'loyal', 'manifest', 'merit', 'moving', 'more', 'mercy', 'modest', 'mindful', 'magic', 'memorable', 'memories', 'miracle', 'majestic', 'natural', 'nice', 'now', 'nurture', 'noble', 'namaste', 'nourish', 'neat', 'nirvana', 'nourish', 'new', 'one', 'open', 'optimist', 'open', 'onwards', 'overcome', 'oneness', 'outgoing', 'original', 'opportunity', 'positive', 'paradise', 'pleasant', 'poised', 'polished', 'powerful', 'prepared', 'productive', 'progress', 'prominent', 'protected', 'proud', 'passion', 'persistent', 'peace', 'prosper', 'precision', 'proactive', 'punctual', 'patience', 'power', 'playful', 'play', 'pleased', 'pleasing', 'purpose', 'prepared', 'present', 'polite', 'possible', 'priceless', 'progress', 'patient', 'persuasive', 'protective', 'passionate', 'queen', 'quality', 'ready', 'refined', 'refreshing', 'rejoice', 'relax', 'respect', 'reliable', 'remarkable', 'restored', 'reward', 'rewarding', 'right', 'robust', 'relieve', 'relieved', 'refreshed', 'resource', 'reliable', 'responsible', 'renewed', 'resilient', 'reverence', 'romance', 'rainbow', 'revived', 'revelation', 'rest', 'rested', 'righteous', 'respectful', 'resolute', 'receptive', 'safe', 'secure', 'simple', 'simplify', 'skilled', 'skillful', 'smile', 'soulful', 'sparkle', 'special', 'spirited', 'spiritual', 'stupendous', 'stunning', 'success', 'successful', 'sunny', 'superb', 'supportive', 'selfless', 'serene', 'serenity', 'security', 'soulful', 'service', 'still', 'surprise', 'sunshine', 'soul', 'shelter', 'space', 'save', 'sincere', 'strive', 'splendid', 'supreme', 'smart', 'shine', 'sublime', 'sunny', 'strong', 'strength', 'sentimental', 'shift', 'synergy', 'stretch', 'stellar', 'superb', 'supportive', 'steadfast', 'sensitive', 'steady', 'spunky', 'sensible', 'selective', 'trust', 'true', 'thrill', 'thrive', 'tranquil', 'transform', 'truth', 'tact', 'teach', 'team', 'thankful', 'tender', 'timely', 'tough', 'talented', 'thoughtful', 'uplift', 'up', 'ultimate', 'useful', 'unity', 'unique', 'valued', 'vibrant', 'victory', 'variety', 'virtue', 'versatile', 'welcome', 'well', 'whole', 'wholesome', 'willing', 'wonder', 'wow', 'worthy', 'warm', 'win', 'wise', 'wellness', 'yes', 'yummy', 'youth', 'youthful', 'zeal', 'zest', 'zing'];
    this.ctx = ctx;
    this.canvas = canvas;
  }

  _createClass(Words, [{
    key: "randomizeWord",
    value: function randomizeWord() {
      var randomIdx = Math.floor(Math.random() * this.words.length);
      return this.words[randomIdx];
    }
  }]);

  return Words;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Words);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map