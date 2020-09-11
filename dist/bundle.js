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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, x, y) {
    _classCallCheck(this, Game);

    this.canvas = {
      width: 1800,
      height: 900
    };
    this.ctx = ctx;
    this.x = x;
    this.y = y; // this.registerEvents();
    // this.restart();

    this.lastTime = Date.now();
    this.words = [];
    this.counter = 0; // this.timestamp = 

    this.registerEvents = this.registerEvents.bind(this);
    this.populateWords = this.populateWords.bind(this);
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

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (var i = 0; i < this.words.length; i++) {
        this.words[i].y -= this.words[i].speedY;

        for (var text in this.words) {
          var t = this.words[text];
          this.ctx.fillText(t.text, t.x, t.y, 200);
          this.ctx.fillStyle = "green";
          this.ctx.font = '25px "Rubik"';
        }
      }

      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }, {
    key: "populateWords",
    value: function populateWords() {
      var word = new _word__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, this.canvas);
      var x = Math.floor(Math.random() * (this.canvas.width - 150)) + 50;
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
    value: function play() {
      var timestamp = Date.now();
      this.running = true;
      this.gameLoop(timestamp);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.score = 0;
      this.word = new _word__WEBPACK_IMPORTED_MODULE_0__["default"](ctx, canvas, x, y);
      this.animate();
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      this.boundClickHandler = this.boundClickHandler.bind(this);
      this.ctx.canvas.addEventListener('mousedown', this.boundClickHandler);
    }
  }, {
    key: "click",
    value: function click(e) {
      if (!this.running) {
        this.play();
      }
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

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
 // document.addEventListener("DOMContentLoaded", () => {

var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx); // game.drawSquare(ctx);

game.testThis();
game.play(); // });

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var WORD_CONSTANTS = {
  SPEED: 8,
  TERMINAL_VEL: 12,
  WIDTH: 40,
  HEIGHT: 30,
  GAME_WIDTH: 1800,
  GAME_HEIGHT: 900
};

var Word = /*#__PURE__*/function () {
  function Word(ctx, canvas) {
    _classCallCheck(this, Word);

    this.words = ['add', 'algorithm', 'array', 'backend', 'binary', 'break', 'boolean', 'bracket', 'branch', 'browse', 'bug', 'camelcase', 'callback', 'character', 'class', 'closure', 'code', 'comment', 'compiler', 'compute', 'computer', 'concatenation', 'conditional', 'constant', 'constructor', 'control', 'constraints', 'compressor', 'curly', 'curry', 'data', 'dataflow', 'debug', 'debugger', 'debugging', 'declaration', 'declarative', 'declare', 'decompiler', 'decrement', 'deductive', 'dependent', 'developer', 'diff', 'direct', 'discrete', 'do', 'div', 'dom', 'dump', 'dynamic', 'element', 'else', 'elsif', 'embedded', 'encapsulation', 'encode', 'equal', 'error', 'escape', 'eval', 'event', 'exception', 'exists', 'exponent', 'expression', 'false', 'flag', 'float', 'for', 'foreach', 'framework', 'frontend', 'fullstack', 'function', 'functional', 'fizzbuzz', 'anagram', 'game', 'git', 'github', 'glitch', 'hash', 'heap', 'hello', 'heroku', 'html', 'hypertext', 'immutable', 'imperative', 'implicit', 'increment', 'inherent', 'inherit', 'inheritance', 'inline', 'input', 'instance', 'instantiation', 'instructions', 'integer', 'integrated', 'integer', 'intermediate', 'interpreted', 'invalid', 'iteration', 'javascript', 'jbuilder', 'json', 'label', 'language', 'library', 'lifecycle', 'links', 'linker', 'literal', 'local', 'logical', 'logic', 'lookup', 'loop', 'loophole', 'machine', 'map', 'markup', 'math', 'memoization', 'metacharacter', 'metaclass', 'metalanguage', 'metaprogramming', 'method', 'middleware', 'module', 'modulo', 'native', 'nested', 'node', 'nodelist', 'null', 'object', 'objective', 'oriented', 'onmouseover', 'oop', 'open', 'operator', 'overflow', 'overload', 'package', 'parenthesis', 'parse', 'pascal', 'persistent', 'phrase', 'pipe', 'pixel', 'pointer', 'polymorphism', 'pop', 'positional', 'private', 'procedure', 'procedural', 'process', 'program', 'programmable', 'programming', 'pseudo', 'pseudocode', 'pseudolanguage', 'public', 'push', 'random', 'react', 'real', 'recompile', 'recursion', 'recursive', 'regex', 'regular', 'relational', 'remark', 'repeat', 'return', 'reverse', 'revision', 'routine', 'route', 'routing', 'ruby', 'rails', 'runtime', 'run', 'schema', 'scratch', 'section', 'secure', 'security', 'seed', 'separator', 'sequence', 'server', 'shell', 'shift', 'simulated', 'snippet', 'software', 'source', 'spaghetti', 'sparse', 'special', 'spooling', 'sql', 'sqlite', 'stack', 'standard', 'statement', 'stream', 'strong', 'stylesheet', 'submit', 'subprogram', 'subscript', 'substring', 'switch', 'syntactic', 'syntax', 'system', 'ternary', 'theoretical', 'operator', 'thread', 'threading', 'thunk', 'token', 'toolbox', 'transcompiler', 'true', 'trunk', 'undefined', 'unit', 'unshift', 'value', 'var', 'variable', 'vector', 'visual', 'web', 'while', 'whole', 'workspace', 'xor', 'yaml', 'webpack', 'salting', 'range', 'prime', 'magic', 'number', 'reverse', 'index', 'min', 'max', 'cipher', 'multiple', 'hipsterfy', 'snakecase', 'select', 'reduce', 'reducer', 'palindrome', 'laligat', 'vowel', 'bigram', 'streak', 'pyramid', 'negative', 'positive', 'string', 'stringify', 'coprime', 'merge', 'bubblesort', 'quicksort', 'symmetrical', 'digital', 'root', 'notation', 'linearithmic', 'logarithmic', 'exponential', 'constant', 'pair', 'pairing', 'factorial', 'querying', 'tables', 'rails', 'react', 'redux', 'convention', 'coalesce', 'aggregate', 'distinct', 'subquery', 'migration', 'bind', 'production', 'development', 'test', 'log', 'create', 'generate', 'terminal', 'validations', 'models', 'controllers', 'associations', 'pluck', 'params'];
    this.ctx = ctx;
    this.canvas = canvas; // this.position = {
    //   x: Math.floor(Math.random() * (this.canvas.width - 150)) + 50,
    //   y: 20,
    // //   y2: Math.floor(Math.random() * (this.canvas.height - 50)) + 50,
    // };
    // this.x = this.canvas.width / 2;  
    // this.y = this.canvas.height / 2; 
    // this.dX = 2.5;
    // this.dY = 0;
  }

  _createClass(Word, [{
    key: "randomizeWord",
    value: function randomizeWord() {
      var randomIdx = Math.floor(Math.random() * this.words.length);
      return this.words[randomIdx];
    } // randomizePosition() {
    //     return Math.floor(Math.random() * (this.canvas.width - 150)) + 50
    // }
    // drawWord() {
    //   this.ctx.fillStyle = "green";
    //   this.ctx.font = '25px "Rubik"';
    //   this.ctx.fillText (this.randomizeWord(), this.position.x, this.position.y, 200)
    // //   this.ctx.fillText(this.words[0], this.position.x, this.position.y, 200);
    // //   this.ctx.fillText(this.words[1], this.randomizePosition(), this.position.y, 200);
    // };
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