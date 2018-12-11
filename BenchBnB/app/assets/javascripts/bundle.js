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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/bench_bnb.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/bench_bnb.jsx":
/*!********************************!*\
  !*** ./frontend/bench_bnb.jsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/frontend/bench_bnb.jsx: Unexpected token, expected \",\" (21:2)\n\n\u001b[0m \u001b[90m 19 | \u001b[39m    store \u001b[33m=\u001b[39m configureStore()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 20 | \u001b[39m  }\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 21 | \u001b[39m  \u001b[36mconst\u001b[39m root \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m'root'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 22 | \u001b[39m  \u001b[33mReactDOM\u001b[39m\u001b[33m.\u001b[39mrender(\u001b[33m<\u001b[39m\u001b[33mRoot\u001b[39m store\u001b[33m=\u001b[39m{store} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m,\u001b[39m root)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m})\u001b[33m;\u001b[39m\u001b[0m\n    at _class.raise (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:4028:15)\n    at _class.unexpected (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:5359:16)\n    at _class.expect (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:5347:28)\n    at _class.parseCallExpressionArguments (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:6281:14)\n    at _class.parseSubscript (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:6191:32)\n    at _class.parseSubscripts (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:6101:19)\n    at _class.parseExprSubscripts (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:6091:17)\n    at _class.parseMaybeUnary (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:6060:21)\n    at _class.parseExprOps (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:5945:21)\n    at _class.parseMaybeConditional (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:5917:21)\n    at _class.parseMaybeAssign (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:5864:21)\n    at _class.parseExpression (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:5817:21)\n    at _class.parseStatementContent (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:7592:21)\n    at _class.parseStatement (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:7478:17)\n    at _class.parseBlockOrModuleBlockBody (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:8046:23)\n    at _class.parseBlockBody (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:8033:10)\n    at _class.parseTopLevel (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:7443:10)\n    at _class.parse (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:8876:17)\n    at parse (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/parser/lib/index.js:10907:38)\n    at parser (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/core/lib/transformation/normalize-file.js:170:34)\n    at normalizeFile (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/core/lib/transformation/normalize-file.js:138:11)\n    at runSync (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/core/lib/transformation/index.js:44:43)\n    at runAsync (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/core/lib/transformation/index.js:35:14)\n    at process.nextTick (/Users/safuhalsarayji/Desktop/Projects/W8D1/BenchBnB/node_modules/@babel/core/lib/transform.js:34:34)\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map