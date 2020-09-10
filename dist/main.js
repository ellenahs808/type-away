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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word */ \"./src/word.js\");\n/* harmony import */ var _word__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_word__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nclass Game {\n    constructor(canvas, ctx, x, y) {\n        this.canvas = {\n            width: 1800,\n            height: 900\n        }\n        this.ctx = ctx;\n        this.x = x;\n        this.y = y;\n        // this.registerEvents();\n\n\n        this.word = new _word__WEBPACK_IMPORTED_MODULE_0___default.a(ctx, canvas, x, y); //Word object\n        // this.word.drawWord();\n        // this.word.attack();\n        // this.word.animate(ctx);\n        // this.word.floatWord();\n        // this.word.attackCenter();\n        \n\n\n        this.startType = 0;\n        this.endType = 0;\n        this.round = 1;\n        this.lives = 10;\n\n\n        this.text = [];\n\n\n        this.startTimer = this.startTimer.bind(this);\n        this.render = this.render.bind(this);\n    }\n\n    play(ctx) {\n        this.running = true;\n        this.word.animate(ctx);\n    }\n\n\n    restart() {\n        this.running = false;\n        this.score = 0;\n    }\n\n\n    registerEvents() {\n        this.boundClickHandler = this.boundClickHandler.bind(this);\n        this.ctx.canvas.addEventListener('mousedown', this.boundClickHandler);\n    }\n\n\n    click(e) {\n        if (!this.running) {\n            this.play();\n        }\n    }\n\n\n    drawSquare(ctx) {\n        ctx.fillStyle = \"pink\";\n        ctx.fillRect(880, this.canvas.height / 2, 50, 50);\n\n    }\n\n\n    testThis() {\n        console.log(this.ctx)\n    }\n\n\n\n\n    handleKeydown() {\n        document.addEventListener('keydown', keyDownHandler)\n    };\n\n\n    handleKeyUp() {\n        document.addEventListener('keyup', keyUpHandler)\n    };\n\n\n    handleResizeHandler() {\n        window.addEventListener('resize', resizeHandler)\n    };\n\n\n    loop(frames) {\n        for (const t of text) {\n            ctx.fillText(String.fromCharCode(this.word.drawWord()), t.x, t.y);\n        }\n        ctx.font = label.font;\n        ctx.fillStyle = label.color;\n        ctx.fillText('Score: ' + score, label.left, label.margin);\n        ctx.fillText('Lives: ' + lives, label.right, label.margin);\n        processParticles(frames);\n        // createLetters();\n        // removeLetters(frames);\n    };\n\n\n\n    // removeLetters(frames) {\n    //     for (const t of text) {\n    //         if (isIntersectingRectangleWithRectangle(l, letter.size, letter.size, center, center.radius, center.radius)) {\n    //         if (--lives === 0) {\n    //             window.alert('GAME OVER!');\n    //             window.location.reload(false);\n    //         } else if (lives > 0) {\n    //             window.alert('START AGAIN!');\n    //             letters = [];\n    //         }\n    //         break;\n    //         } else {\n    //         l.x += l.speedX * frames;\n    //         l.y += l.speedY * frames;\n    //         }\n    //     }\n    // }\n\n\n  \n\n    startTimer() {\n        if (this.startType === 0) {\n            this.startType = Date.now();\n        }\n    }\n         \n\n\n\n    createWords() {\n        if (Math.random() < 0.02) {\n            const x = Math.random() < 0.5 ? 0 : this.canvas.width;\n            const y = Math.random() * this.canvas.height;\n            const dX = (this.canvas.width / 2) - x;\n            const dY = (this.canvas.height / 2) - y;\n            const norm = Math.sqrt(dX ** 2 + dY ** 2);\n            const speed = 1.5;\n            this.words.push({\n                x,\n                y,\n                words: this.dictionary.words[0],\n                speedX: dX / norm * speed,\n                speedY: dY / norm * speed\n            })\n        }\n\n\n\n        // let x = -100;\n        // let y = Math.floor(Math.random() * (this.canvas.height - 150)) + 50;\n\n        // let randomSpawn = Math.floor(Math.random() * 2.5) + (250 - this.round);\n        // if (this.counter % randomSpawn < this.round) {\n\n        // }\n    }\n\n\n    startGame(e) {\n        if (e.keyCode === 13) {\n            this.canvas.removeEventListener('click', this.startGame);\n            requestAnimationFrame(this.render)\n        }\n    }\n\n\n    render() {\n        let request = requestAnimationFrame(this.render);\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.canvas.addEventListener('click')\n\n        let fps = 12;\n        let interval = 1000 / fps;\n        let now = Date.now();\n        \n    }\n\n\n}\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const canvas = document.getElementById(\"game-canvas\");\n    let ctx = canvas.getContext(\"2d\");\n    let game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas, ctx);\n    game.drawSquare(ctx);\n    game.createWords();\n    game.testThis();\n    // game.render();\n    // game.loop(frames)\n    game.createWords()\n    game.play()\n\n\n\n    // for testing\n    window.canvas = canvas;\n    window.ctx = ctx;\n    window.Game = _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    //\n    \n\n});\n\n\n// const canvas = document.getElementById(\"game-canvas\");\n\n// new Game(canvas);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/word.js":
/*!*********************!*\
  !*** ./src/word.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const WORD_CONSTANTS = {\n    SPEED: 8,\n    TERMINAL_VEL: 12,\n    WIDTH: 40,\n    HEIGHT: 30\n};\n\n\nclass Word {\n    constructor(ctx, canvas, x, y) {\n        this.words = ['add', 'algorithm', 'array', 'backend', 'binary', 'break', 'boolean', 'bracket', 'branch', 'browse', 'bug', 'camelcase', 'callback', 'character', 'class', 'closure', 'code', 'comment', 'compiler', 'compute', 'computer', 'concatenation', 'conditional', 'constant', 'constructor', 'control', 'constraints', 'compressor', 'curly', 'curry', 'data', 'dataflow', 'debug', 'debugger', 'debugging', 'declaration', 'declarative', 'declare', 'decompiler', 'decrement', 'deductive', 'dependent', 'developer', 'diff', 'direct', 'discrete', 'do', 'div', 'dom', 'dump', 'dynamic', 'element', 'else', 'elsif', 'embedded', 'encapsulation', 'encode', 'equal', 'error', 'escape', 'eval', 'event', 'exception', 'exists', 'exponent', 'expression', 'false', 'flag', 'float', 'for', 'foreach', 'framework', 'frontend', 'fullstack', 'function', 'functional', 'fizzbuzz', 'anagram', 'game', 'git', 'github', 'glitch', 'hash', 'heap', 'hello', 'heroku', 'html', 'hypertext', 'immutable', 'imperative', 'implicit', 'increment', 'inherent', 'inherit', 'inheritance', 'inline', 'input', 'instance', 'instantiation', 'instructions', 'integer', 'integrated', 'integer', 'intermediate', 'interpreted', 'invalid', 'iteration', 'javascript', 'jbuilder', 'json', 'label', 'language', 'library', 'lifecycle', 'links', 'linker', 'literal', 'local', 'logical', 'logic', 'lookup', 'loop', 'loophole', 'machine', 'map', 'markup', 'math', 'memoization', 'metacharacter', 'metaclass', 'metalanguage', 'metaprogramming', 'method', 'middleware', 'module', 'modulo', 'native', 'nested', 'node', 'nodelist', 'null', 'object', 'objective', 'oriented', 'onmouseover', 'oop', 'open', 'operator', 'overflow', 'overload', 'package', 'parenthesis', 'parse', 'pascal', 'persistent', 'phrase', 'pipe', 'pixel', 'pointer', 'polymorphism', 'pop', 'positional', 'private', 'procedure', 'procedural', 'process', 'program', 'programmable', 'programming', 'pseudo', 'pseudocode', 'pseudolanguage', 'public', 'push', 'random', 'react', 'real', 'recompile', 'recursion', 'recursive', 'regex', 'regular', 'relational', 'remark', 'repeat', 'return', 'reverse', 'revision', 'routine', 'route', 'routing', 'ruby', 'rails', 'runtime', 'run', 'schema', 'scratch', 'section', 'secure', 'security', 'seed', 'separator', 'sequence', 'server', 'shell', 'shift', 'simulated', 'snippet', 'software', 'source', 'spaghetti', 'sparse', 'special', 'spooling', 'sql', 'sqlite', 'stack', 'standard', 'statement', 'stream', 'strong', 'stylesheet', 'submit', 'subprogram', 'subscript', 'substring', 'switch', 'syntactic', 'syntax', 'system', 'ternary', 'theoretical', 'operator', 'thread', 'threading', 'thunk', 'token', 'toolbox', 'transcompiler', 'true', 'trunk', 'undefined', 'unit', 'unshift', 'value', 'var', 'variable', 'vector', 'visual', 'web', 'while', 'whole', 'workspace', 'xor', 'yaml', 'webpack', 'salting', 'range', 'prime', 'magic', 'number', 'reverse', 'index', 'min', 'max', 'cipher', 'multiple', 'hipsterfy', 'snakecase', 'select', 'reduce', 'reducer', 'palindrome', 'laligat', 'vowel', 'bigram', 'streak', 'pyramid', 'negative', 'positive', 'string', 'stringify', 'coprime', 'merge', 'bubblesort', 'quicksort', 'symmetrical', 'digital', 'root', 'notation', 'linearithmic', 'logarithmic', 'exponential', 'constant', 'pair', 'pairing', 'factorial', 'querying', 'tables', 'rails', 'react', 'redux', 'convention', 'coalesce', 'aggregate', 'distinct', 'subquery', 'migration', 'bind', 'production', 'development', 'test', 'log', 'create', 'generate', 'terminal', 'validations', 'models', 'controllers', 'associations', 'pluck', 'params']\n\n        this.ctx = ctx;\n        this.canvas = canvas;\n        this.x = this.canvas.width / 2;  \n        this.y = this.canvas.height / 2; \n        this.dX = 2.5;\n        this.dY = 0;\n    \n\n\n    }\n\n    randomize() {\n        const randomIdx = Math.floor(Math.random() * this.words.length)\n        return this.words[randomIdx]\n    }\n\n\n    drawWord() {\n        this.ctx.fillStyle = \"green\";\n        this.ctx.font = '25px \"Rubik\"';\n        this.ctx.fillText (this.randomize(), 100, 500, 200)\n    };\n\n\n    moveWord() {\n        this.y += this.vel;\n        \n        if (Math.abs(this.vel) > WORD_CONSTANTS.TERMINAL_VEL) {\n            if (this.vel > 0) {\n                this.vel = WORD_CONSTANTS.TERMINAL_VEL;\n            } else {\n                this.vel = WORD_CONSTANTS.TERMINAL_VEL * -1;\n            }\n        }\n    }\n\n\n    animate(ctx) {\n        this.moveWord();\n        this.drawWord()\n    }\n\n\n    bounds() {\n        return {\n            left: this.x,\n            right: this.x + WORD_CONSTANTS.WIDTH,\n            top: this.y,\n            bottom: this.y + WORD_CONSTANTS.HEIGHT\n        }\n    }\n\n\n    outOfBounds() {\n        const aboveTheTop = this.y < 0;\n        const belowTheBottom = this.y + WORD_CONSTANTS.HEIGHT > this.y\n        return aboveTheTop || belowTheBottom\n    }\n\n\n    //doesnt do anything\n    // floatWord() {\n    //     this.x += this.dX;\n    //     this.y += this.dY;\n    //     this.shift += 100;\n    //     if (this.shift >= 1000) {\n    //         this.shift = 0;\n    //     }\n    // };\n\n\n\n\n    //doesnt do anything\n    // attackCenter() {\n    //     if (this.x > 300) {\n    //         if (this.y < this.canvas.height ) {\n    //             this.dY = 2;\n    //         } else if (this.y > this.canvas.height) {\n    //             this.dY = -2;\n    //         } else {\n    //             this.dY = 0;\n    //         }\n    //     }\n    // };\n\n    \n};\n\n\n// export default Word;\nmodule.exports = Word;\n\n//# sourceURL=webpack:///./src/word.js?");

/***/ })

/******/ });