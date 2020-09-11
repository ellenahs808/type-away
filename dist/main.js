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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// import Game from './game';\n// import Word from './word';\n\n\n// // document.addEventListener(\"DOMContentLoaded\", () => {\n//     const canvas = document.getElementById(\"game-canvas\");\n//     let ctx = canvas.getContext(\"2d\");\n//     let game = new Game(canvas, ctx);\n//     let word = new Word(ctx, canvas)\n\n\n//     // const GAME_WIDTH = 1800;\n//     // const GAME_HEIGHT = 900;\n\n\n//     game.drawSquare(ctx);\n//     game.createWords();\n//     game.testThis();\n//     // game.render();\n//     // game.loop(frames)\n//     game.play()\n//     game.gameLoop(timestamp);\n\n//     word.draw(ctx)\n//     word.drawWord()\n\n\n//     // for testing\n//     window.canvas = canvas;\n//     window.ctx = ctx;\n//     window.Game = Game;\n//     //\n    \n\n// // });\n\n\n// // const canvas = document.getElementById(\"game-canvas\");\n\n// // new Game(canvas);\n\n\n\n\n\n\n\n\n\n\n/* global canvas ctx animation:writable gameLoop label loop paintCircle isIntersectingRectangleWithRectangle generateRandomNumber generateRandomInteger paintParticles createParticles processParticles */\nlet score = 0;\nlet lives = 10;\nlet caseSensitive = true;\n\nconst center = {\n  x: canvas.width / 2,\n  y: canvas.height / 2,\n  radius: 20,\n  color: '#FF0000'\n};\n\nconst letter = {\n  font: '20px Arial',\n  color: '#0095DD',\n  size: 30,\n  highestSpeed: 1.6,\n  lowestSpeed: 0.6,\n  probability: 0.02\n};\n\nlet letters = [];\n\ndocument.addEventListener('keydown', keyDownHandler);\ndocument.addEventListener('keyup', keyUpHandler);\nwindow.addEventListener('resize', resizeHandler);\n\nloop(function (frames) {\n  paintCircle(center.x, center.y, center.radius, center.color);\n  ctx.font = letter.font;\n  ctx.fillStyle = letter.color;\n  for (const l of letters) {\n    ctx.fillText(String.fromCharCode(l.code), l.x, l.y);\n  }\n  paintParticles();\n  ctx.font = label.font;\n  ctx.fillStyle = label.color;\n  ctx.fillText('Score: ' + score, label.left, label.margin);\n  ctx.fillText('Lives: ' + lives, label.right, label.margin);\n  processParticles(frames);\n  createLetters();\n  removeLetters(frames);\n});\n\n\nfunction createLetters () {\n  if (Math.random() < letter.probability) {\n    const x = Math.random() < 0.5 ? 0 : canvas.width;\n    const y = Math.random() * canvas.height;\n    const dX = center.x - x;\n    const dY = center.y - y;\n    const norm = Math.sqrt(dX ** 2 + dY ** 2);\n    const speed = generateRandomNumber(letter.lowestSpeed, letter.highestSpeed);\n    letters.push({\n      x,\n      y,\n      code: Math.random() < 0.5 ? generateRandomInteger(25) + 65 : generateRandomInteger(25) + 97,\n      speedX: dX / norm * speed,\n      speedY: dY / norm * speed\n    });\n  }\n}\n\nfunction removeLetters (frames) {\n  for (const l of letters) {\n    if (isIntersectingRectangleWithRectangle(l, letter.size, letter.size, center, center.radius, center.radius)) {\n      if (--lives === 0) {\n        window.alert('GAME OVER!');\n        window.location.reload(false);\n      } else if (lives > 0) {\n        window.alert('START AGAIN!');\n        letters = [];\n      }\n      break;\n    } else {\n      l.x += l.speedX * frames;\n      l.y += l.speedY * frames;\n    }\n  }\n}\n\nfunction type (i, l) {\n  letters.splice(i, 1);\n  score++;\n  createParticles(l.x, l.y);\n}\n\nwindow.changeCase = function () {\n  caseSensitive = !caseSensitive;\n  if (caseSensitive) {\n    document.getElementById('change-case-text').innerHTML = '';\n  } else {\n    document.getElementById('change-case-text').innerHTML = 'in';\n  }\n};\n\nfunction keyDownHandler (e) {\n  if (animation !== undefined && e.keyCode >= 65 && e.keyCode <= 90) {\n    for (let i = letters.length - 1; i >= 0; i--) {\n      const l = letters[i];\n      if (caseSensitive) {\n        if (e.shiftKey) {\n          if (e.keyCode === l.code) {\n            type(i, l);\n            return;\n          }\n        } else {\n          if (e.keyCode + 32 === l.code) {\n            type(i, l);\n            return;\n          }\n        }\n      } else {\n        if (e.keyCode === l.code || e.keyCode + 32 === l.code) {\n          type(i, l);\n          return;\n        }\n      }\n    }\n    score--;\n  }\n}\n\nfunction keyUpHandler (e) {\n  if (e.keyCode === 27) {\n    if (animation === undefined) {\n      animation = window.requestAnimationFrame(gameLoop);\n    } else {\n      window.cancelAnimationFrame(animation);\n      animation = undefined;\n    }\n  }\n}\n\nfunction resizeHandler () {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n  center.x = canvas.width / 2;\n  center.y = canvas.height / 2;\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });