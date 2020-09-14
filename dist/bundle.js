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
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word */ "./src/word.js");
/* harmony import */ var _game_over_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_over_screen */ "./src/game_over_screen.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, page, input, wordList) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.page = page;
    this.input = input;
    this.wordList = wordList;
    this.gameOverScreen = new _game_over_screen__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
    this.container = {
      width: 800,
      height: 900
    };
    this.lastTime = Date.now();
    this.words = [];
    this.counter = 0;
    this.populateWords = this.populateWords.bind(this);
    this.play = this.play.bind(this);
    this.restart = this.restart.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.gameOverAnimate = this.gameOverAnimate.bind(this);
  }

  _createClass(Game, [{
    key: "testThis",
    value: function testThis() {
      console.log(this.words);
    } // deltaTime gives you the amount of time since the last frame/iteration of the loop
    // you can use that to calculate an amount of time for a new word to show up.
    // have some logic somewhere to subtract the delta time from a counter and once it hits 0, generate a new random word.

  }, {
    key: "gameLoop",
    value: function gameLoop(timestamp) {
      // debugger
      timestamp = Date.now();
      var deltaTime = timestamp - this.lastTime; //gap between last time and now

      var randomTime = Math.floor(Math.random() * (5000 - 1000) + 3000);

      if (deltaTime > randomTime) {
        this.populateWords();
        this.lastTime = timestamp;
      }

      this.ctx.clearRect(0, 0, this.container.width, this.container.height);

      for (var i = 0; i < this.words.length; i++) {
        this.words[i].y -= this.words[i].speedY;

        for (var text in this.words) {
          var t = this.words[text];
          this.ctx.fillText(t.text, t.x, t.y, 200);
          this.ctx.fillStyle = "black";
          this.ctx.font = '23px "Rubik"';

          if (t.y >= 899) {
            this.gameOverAnimate();
            break;
          }
        }
      }

      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }, {
    key: "populateWords",
    value: function populateWords() {
      var word = new _word__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canvas);
      var x = Math.floor(Math.random() * (this.container.width - 200)) + 50;
      var y = 20;
      var speed = Math.floor(Math.random() * 1.6 + 0.6);
      this.words.push({
        x: x,
        y: y,
        text: word.randomizeWord(),
        speedX: 2,
        speedY: -1.5
      });
    }
  }, {
    key: "play",
    value: function play(e) {
      if (e.keyCode === 13) {
        // debugger
        this.page.removeEventListener('keydown', this.play);
        this.restart();
        clearInterval(window.startInterval);
        clearInterval(window.overInterval);
        this.canvas.className === 'start-screen';
        var timestamp = Date.now();
        this.running = true;
        this.gameLoop();
      }
    } // handleWord(e) {
    //     if (e.keyCode)
    // }

  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.score = 0;
      this.word = new _word__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canvas);
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      // this.page.removeEventListener('keydown', this.play)  //not working
      this.input.style.display = 'none';
      window.overInterval = setInterval(this.gameOverAnimate, 100);
    }
  }, {
    key: "gameOverAnimate",
    value: function gameOverAnimate() {
      // debugger
      this.ctx.clearRect(0, 0, this.container.width, this.canvas.height);
      this.gameOverScreen.drawGameOver();
      this.gameOverScreen.fade += .05;
      this.gameOverScreen.drawRestart(); // this.page.addEventListener('keydown', this.play);  // not working
    }
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
    this.fade = 0;
    this.endCounter = 0;
  }

  _createClass(GameOverScreen, [{
    key: "drawGameOver",
    value: function drawGameOver() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "rgba(255, 255, 255, ".concat(this.fade);
      this.ctx.font = '80px "Bungee Outline"';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Game Over', 410, 400);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "drawRestart",
    value: function drawRestart() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "blueviolet";
      this.ctx.textAlign = "center";
      this.ctx.font = '50px "VT323"';
      this.ctx.fillText("Press Refresh to Restart", 410, 500);
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
  var wordList = document.getElementById("wordlist");
  var startScreen = new _start_screen__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, canvas);
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, input, wordList);
  var titlePosition = 200;
  var startCounter = 0;

  function titleDrop() {
    // debugger
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    titlePosition += 6;

    if (titlePosition >= 400) {
      titlePosition = 400;
      startCounter += .5;

      if (startCounter % 10 <= 6) {
        startScreen.drawStartClick();
      } else {
        null;
      }

      page.addEventListener('keydown', game.play);
    }

    startScreen.drawTitle(titlePosition);
  }

  if (canvas.className === 'start-screen') {
    input.style.display = 'none';
    window.startInterval = setInterval(titleDrop, 70);
  }

  game.testThis();
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
    this.titlePosition = 200;
    this.startCounter = 0;
  }

  _createClass(StartScreen, [{
    key: "drawTitle",
    value: function drawTitle(titlePosition) {
      this.ctx.beginPath();
      this.ctx.fillStyle = 'aqua';
      this.ctx.font = '80px "Bungee Outline"';
      this.ctx.textAlign = 'center';
      this.ctx.fillText("Type Away", 410, titlePosition);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }, {
    key: "drawStartClick",
    value: function drawStartClick() {
      this.ctx.beginPath();
      this.ctx.fillStyle = "blueviolet";
      this.ctx.font = '50px "VT323"';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Press Enter', 410, 500);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }]);

  return StartScreen;
}();

/* harmony default export */ __webpack_exports__["default"] = (StartScreen);

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Word = /*#__PURE__*/function () {
  function Word(ctx, canvas) {
    _classCallCheck(this, Word);

    this.words = ['add', 'algorithm', 'array', 'backend', 'binary', 'break', 'boolean', 'bracket', 'branch', 'browse', 'bug', 'camelcase', 'callback', 'character', 'class', 'closure', 'code', 'comment', 'compiler', 'compute', 'computer', 'concatenation', 'conditional', 'constant', 'constructor', 'control', 'constraints', 'compressor', 'curly', 'curry', 'data', 'dataflow', 'debug', 'debugger', 'debugging', 'declaration', 'declarative', 'declare', 'decompiler', 'decrement', 'deductive', 'dependent', 'developer', 'diff', 'direct', 'discrete', 'do', 'div', 'dom', 'dump', 'dynamic', 'element', 'else', 'elsif', 'embedded', 'encapsulation', 'encode', 'equal', 'error', 'escape', 'eval', 'event', 'exception', 'exists', 'exponent', 'expression', 'false', 'flag', 'float', 'for', 'foreach', 'framework', 'frontend', 'fullstack', 'function', 'functional', 'fizzbuzz', 'anagram', 'game', 'git', 'github', 'glitch', 'hash', 'heap', 'heroku', 'html', 'hypertext', 'immutable', 'imperative', 'implicit', 'increment', 'inherent', 'inherit', 'inheritance', 'inline', 'input', 'instance', 'instantiation', 'instructions', 'integer', 'integrated', 'integer', 'intermediate', 'interpreted', 'invalid', 'iteration', 'javascript', 'jbuilder', 'json', 'label', 'language', 'library', 'lifecycle', 'links', 'linker', 'literal', 'local', 'logical', 'logic', 'lookup', 'loop', 'loophole', 'machine', 'map', 'markup', 'math', 'memoization', 'metacharacter', 'metaclass', 'metalanguage', 'metaprogramming', 'method', 'middleware', 'module', 'modulo', 'native', 'nested', 'node', 'nodelist', 'null', 'object', 'objective', 'oriented', 'onmouseover', 'oop', 'open', 'operator', 'overflow', 'overload', 'package', 'parenthesis', 'parse', 'pascal', 'persistent', 'phrase', 'pipe', 'pixel', 'pointer', 'polymorphism', 'pop', 'positional', 'private', 'procedure', 'procedural', 'process', 'program', 'programmable', 'programming', 'pseudo', 'pseudocode', 'pseudolanguage', 'public', 'push', 'random', 'react', 'real', 'recompile', 'recursion', 'recursive', 'regex', 'regular', 'relational', 'remark', 'repeat', 'return', 'reverse', 'revision', 'routine', 'route', 'routing', 'ruby', 'rails', 'runtime', 'run', 'schema', 'scratch', 'section', 'secure', 'security', 'seed', 'separator', 'sequence', 'server', 'shell', 'shift', 'simulated', 'snippet', 'software', 'source', 'spaghetti', 'sparse', 'special', 'spooling', 'sql', 'sqlite', 'stack', 'standard', 'statement', 'stream', 'strong', 'stylesheet', 'submit', 'subprogram', 'subscript', 'substring', 'switch', 'syntactic', 'syntax', 'system', 'ternary', 'theoretical', 'operator', 'thread', 'threading', 'thunk', 'token', 'toolbox', 'transcompiler', 'true', 'trunk', 'undefined', 'unit', 'unshift', 'value', 'var', 'variable', 'vector', 'visual', 'web', 'while', 'whole', 'workspace', 'xor', 'yaml', 'webpack', 'salting', 'range', 'prime', 'magic', 'number', 'reverse', 'index', 'min', 'max', 'cipher', 'multiple', 'hipsterfy', 'snakecase', 'select', 'reduce', 'reducer', 'palindrome', 'laligat', 'vowel', 'bigram', 'streak', 'pyramid', 'negative', 'positive', 'string', 'stringify', 'coprime', 'merge', 'bubblesort', 'quicksort', 'symmetrical', 'digital', 'root', 'notation', 'linearithmic', 'logarithmic', 'exponential', 'constant', 'pair', 'pairing', 'factorial', 'querying', 'tables', 'rails', 'react', 'redux', 'convention', 'coalesce', 'aggregate', 'distinct', 'subquery', 'migration', 'bind', 'production', 'development', 'test', 'log', 'create', 'generate', 'terminal', 'validations', 'models', 'controllers', 'associations', 'pluck', 'params'];
    this.ctx = ctx;
    this.canvas = canvas;
  }

  _createClass(Word, [{
    key: "randomizeWord",
    value: function randomizeWord() {
      var randomIdx = Math.floor(Math.random() * this.words.length);
      return this.words[randomIdx];
    } // randomizePosition() {
    //     return Math.floor(Math.random() * (this.canvas.width - 150)) + 50
    // }
    // update(deltaTime) {
    //     if (!deltaTime) return;
    //     this.position.y += 20 / deltaTime;
    // }
    // animate(ctx) {
    //     // this.drawWord();
    //     // this.bounds();
    //     // this.outOfBounds();
    //     // this.randomizeWord()
    // }
    // bounds() {
    //     return {
    //         left: this.x,
    //         right: this.x + WORD_CONSTANTS.WIDTH,
    //         top: this.y,
    //         bottom: this.y + WORD_CONSTANTS.HEIGHT
    //     }
    // }
    // outOfBounds() {
    //     const aboveTheTop = this.y < 0;
    //     const belowTheBottom = this.y + WORD_CONSTANTS.HEIGHT > this.y
    //     return aboveTheTop || belowTheBottom
    // }
    //doesn't do shit
    // moveWord() {
    //     this.y += this.vel;
    //     if (Math.abs(this.vel) > WORD_CONSTANTS.TERMINAL_VEL) {
    //         if (this.vel > 0) {
    //             this.vel = WORD_CONSTANTS.TERMINAL_VEL;
    //         } else {
    //             this.vel = WORD_CONSTANTS.TERMINAL_VEL * -1;
    //         }
    //     }
    // }

  }]);

  return Word;
}();

;
/* harmony default export */ __webpack_exports__["default"] = (Word);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map