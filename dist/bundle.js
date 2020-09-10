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
/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_word__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

    this.word = new _word__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, canvas, x, y); //Word object
    // this.word.drawWord();
    // this.word.attack();
    // this.word.animate(ctx);
    // this.word.floatWord();
    // this.word.attackCenter();

    this.startType = 0;
    this.endType = 0;
    this.round = 1;
    this.lives = 10;
    this.text = [];
    this.startTimer = this.startTimer.bind(this);
    this.render = this.render.bind(this);
  }

  _createClass(Game, [{
    key: "play",
    value: function play(ctx) {
      this.running = true;
      this.word.animate(ctx);
    }
  }, {
    key: "restart",
    value: function restart() {
      this.running = false;
      this.score = 0;
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
  }, {
    key: "drawSquare",
    value: function drawSquare(ctx) {
      ctx.fillStyle = "pink";
      ctx.fillRect(880, this.canvas.height / 2, 50, 50);
    }
  }, {
    key: "testThis",
    value: function testThis() {
      console.log(this.ctx);
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown() {
      document.addEventListener('keydown', keyDownHandler);
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp() {
      document.addEventListener('keyup', keyUpHandler);
    }
  }, {
    key: "handleResizeHandler",
    value: function handleResizeHandler() {
      window.addEventListener('resize', resizeHandler);
    }
  }, {
    key: "loop",
    value: function loop(frames) {
      var _iterator = _createForOfIteratorHelper(text),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var t = _step.value;
          ctx.fillText(String.fromCharCode(this.word.drawWord()), t.x, t.y);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      ctx.font = label.font;
      ctx.fillStyle = label.color;
      ctx.fillText('Score: ' + score, label.left, label.margin);
      ctx.fillText('Lives: ' + lives, label.right, label.margin);
      processParticles(frames); // createLetters();
      // removeLetters(frames);
    }
  }, {
    key: "startTimer",
    // removeLetters(frames) {
    //     for (const t of text) {
    //         if (isIntersectingRectangleWithRectangle(l, letter.size, letter.size, center, center.radius, center.radius)) {
    //         if (--lives === 0) {
    //             window.alert('GAME OVER!');
    //             window.location.reload(false);
    //         } else if (lives > 0) {
    //             window.alert('START AGAIN!');
    //             letters = [];
    //         }
    //         break;
    //         } else {
    //         l.x += l.speedX * frames;
    //         l.y += l.speedY * frames;
    //         }
    //     }
    // }
    value: function startTimer() {
      if (this.startType === 0) {
        this.startType = Date.now();
      }
    }
  }, {
    key: "createWords",
    value: function createWords() {
      if (Math.random() < 0.02) {
        var x = Math.random() < 0.5 ? 0 : this.canvas.width;
        var y = Math.random() * this.canvas.height;
        var dX = this.canvas.width / 2 - x;
        var dY = this.canvas.height / 2 - y;
        var norm = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));
        var speed = 1.5;
        this.words.push({
          x: x,
          y: y,
          words: this.dictionary.words[0],
          speedX: dX / norm * speed,
          speedY: dY / norm * speed
        });
      } // let x = -100;
      // let y = Math.floor(Math.random() * (this.canvas.height - 150)) + 50;
      // let randomSpawn = Math.floor(Math.random() * 2.5) + (250 - this.round);
      // if (this.counter % randomSpawn < this.round) {
      // }

    }
  }, {
    key: "startGame",
    value: function startGame(e) {
      if (e.keyCode === 13) {
        this.canvas.removeEventListener('click', this.startGame);
        requestAnimationFrame(this.render);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var request = requestAnimationFrame(this.render);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.canvas.addEventListener('click');
      var fps = 12;
      var interval = 1000 / fps;
      var now = Date.now();
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

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx);
  game.drawSquare(ctx);
  game.createWords();
  game.testThis(); // game.render();
  // game.loop(frames)

  game.createWords();
  game.play(); // for testing

  window.canvas = canvas;
  window.ctx = ctx;
  window.Game = _game__WEBPACK_IMPORTED_MODULE_0__["default"]; //
}); // const canvas = document.getElementById("game-canvas");
// new Game(canvas);

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WORD_CONSTANTS = {
  SPEED: 8,
  TERMINAL_VEL: 12,
  WIDTH: 40,
  HEIGHT: 30
};

var Word = /*#__PURE__*/function () {
  function Word(ctx, canvas, x, y) {
    _classCallCheck(this, Word);

    this.words = ['add', 'algorithm', 'array', 'backend', 'binary', 'break', 'boolean', 'bracket', 'branch', 'browse', 'bug', 'camelcase', 'callback', 'character', 'class', 'closure', 'code', 'comment', 'compiler', 'compute', 'computer', 'concatenation', 'conditional', 'constant', 'constructor', 'control', 'constraints', 'compressor', 'curly', 'curry', 'data', 'dataflow', 'debug', 'debugger', 'debugging', 'declaration', 'declarative', 'declare', 'decompiler', 'decrement', 'deductive', 'dependent', 'developer', 'diff', 'direct', 'discrete', 'do', 'div', 'dom', 'dump', 'dynamic', 'element', 'else', 'elsif', 'embedded', 'encapsulation', 'encode', 'equal', 'error', 'escape', 'eval', 'event', 'exception', 'exists', 'exponent', 'expression', 'false', 'flag', 'float', 'for', 'foreach', 'framework', 'frontend', 'fullstack', 'function', 'functional', 'fizzbuzz', 'anagram', 'game', 'git', 'github', 'glitch', 'hash', 'heap', 'hello', 'heroku', 'html', 'hypertext', 'immutable', 'imperative', 'implicit', 'increment', 'inherent', 'inherit', 'inheritance', 'inline', 'input', 'instance', 'instantiation', 'instructions', 'integer', 'integrated', 'integer', 'intermediate', 'interpreted', 'invalid', 'iteration', 'javascript', 'jbuilder', 'json', 'label', 'language', 'library', 'lifecycle', 'links', 'linker', 'literal', 'local', 'logical', 'logic', 'lookup', 'loop', 'loophole', 'machine', 'map', 'markup', 'math', 'memoization', 'metacharacter', 'metaclass', 'metalanguage', 'metaprogramming', 'method', 'middleware', 'module', 'modulo', 'native', 'nested', 'node', 'nodelist', 'null', 'object', 'objective', 'oriented', 'onmouseover', 'oop', 'open', 'operator', 'overflow', 'overload', 'package', 'parenthesis', 'parse', 'pascal', 'persistent', 'phrase', 'pipe', 'pixel', 'pointer', 'polymorphism', 'pop', 'positional', 'private', 'procedure', 'procedural', 'process', 'program', 'programmable', 'programming', 'pseudo', 'pseudocode', 'pseudolanguage', 'public', 'push', 'random', 'react', 'real', 'recompile', 'recursion', 'recursive', 'regex', 'regular', 'relational', 'remark', 'repeat', 'return', 'reverse', 'revision', 'routine', 'route', 'routing', 'ruby', 'rails', 'runtime', 'run', 'schema', 'scratch', 'section', 'secure', 'security', 'seed', 'separator', 'sequence', 'server', 'shell', 'shift', 'simulated', 'snippet', 'software', 'source', 'spaghetti', 'sparse', 'special', 'spooling', 'sql', 'sqlite', 'stack', 'standard', 'statement', 'stream', 'strong', 'stylesheet', 'submit', 'subprogram', 'subscript', 'substring', 'switch', 'syntactic', 'syntax', 'system', 'ternary', 'theoretical', 'operator', 'thread', 'threading', 'thunk', 'token', 'toolbox', 'transcompiler', 'true', 'trunk', 'undefined', 'unit', 'unshift', 'value', 'var', 'variable', 'vector', 'visual', 'web', 'while', 'whole', 'workspace', 'xor', 'yaml', 'webpack', 'salting', 'range', 'prime', 'magic', 'number', 'reverse', 'index', 'min', 'max', 'cipher', 'multiple', 'hipsterfy', 'snakecase', 'select', 'reduce', 'reducer', 'palindrome', 'laligat', 'vowel', 'bigram', 'streak', 'pyramid', 'negative', 'positive', 'string', 'stringify', 'coprime', 'merge', 'bubblesort', 'quicksort', 'symmetrical', 'digital', 'root', 'notation', 'linearithmic', 'logarithmic', 'exponential', 'constant', 'pair', 'pairing', 'factorial', 'querying', 'tables', 'rails', 'react', 'redux', 'convention', 'coalesce', 'aggregate', 'distinct', 'subquery', 'migration', 'bind', 'production', 'development', 'test', 'log', 'create', 'generate', 'terminal', 'validations', 'models', 'controllers', 'associations', 'pluck', 'params'];
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.dX = 2.5;
    this.dY = 0;
  }

  _createClass(Word, [{
    key: "randomize",
    value: function randomize() {
      var randomIdx = Math.floor(Math.random() * this.words.length);
      return this.words[randomIdx];
    }
  }, {
    key: "drawWord",
    value: function drawWord() {
      this.ctx.fillStyle = "green";
      this.ctx.font = '25px "Rubik"';
      this.ctx.fillText(this.randomize(), 100, 500, 200);
    }
  }, {
    key: "moveWord",
    value: function moveWord() {
      this.y += this.vel;

      if (Math.abs(this.vel) > WORD_CONSTANTS.TERMINAL_VEL) {
        if (this.vel > 0) {
          this.vel = WORD_CONSTANTS.TERMINAL_VEL;
        } else {
          this.vel = WORD_CONSTANTS.TERMINAL_VEL * -1;
        }
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.moveWord();
      this.drawWord();
    }
  }, {
    key: "bounds",
    value: function bounds() {
      return {
        left: this.x,
        right: this.x + WORD_CONSTANTS.WIDTH,
        top: this.y,
        bottom: this.y + WORD_CONSTANTS.HEIGHT
      };
    }
  }, {
    key: "outOfBounds",
    value: function outOfBounds() {
      var aboveTheTop = this.y < 0;
      var belowTheBottom = this.y + WORD_CONSTANTS.HEIGHT > this.y;
      return aboveTheTop || belowTheBottom;
    } //doesnt do anything
    // floatWord() {
    //     this.x += this.dX;
    //     this.y += this.dY;
    //     this.shift += 100;
    //     if (this.shift >= 1000) {
    //         this.shift = 0;
    //     }
    // };
    //doesnt do anything
    // attackCenter() {
    //     if (this.x > 300) {
    //         if (this.y < this.canvas.height ) {
    //             this.dY = 2;
    //         } else if (this.y > this.canvas.height) {
    //             this.dY = -2;
    //         } else {
    //             this.dY = 0;
    //         }
    //     }
    // };

  }]);

  return Word;
}();

; // export default Word;

module.exports = Word;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map