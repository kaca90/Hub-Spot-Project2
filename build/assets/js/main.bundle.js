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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets sync recursive \\.(svg|png|jpe?g)$":
/*!********************************************!*\
  !*** ./src/assets sync \.(svg|png|jpe?g)$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./images/svg/newsletter.svg": "./src/assets/images/svg/newsletter.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync recursive \\.(svg|png|jpe?g)$";

/***/ }),

/***/ "./src/assets/images/svg/newsletter.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/svg/newsletter.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "../images/svg/newsletter.svg";

/***/ }),

/***/ "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$":
/*!*********************************************************!*\
  !*** ./src/assets/scripts/components sync ^\.\/.*\.js$ ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./columns.js": "./src/assets/scripts/components/columns.js",
	"./helpers.js": "./src/assets/scripts/components/helpers.js",
	"./lazyimageloader.js": "./src/assets/scripts/components/lazyimageloader.js",
	"./resource.js": "./src/assets/scripts/components/resource.js",
	"./slider.js": "./src/assets/scripts/components/slider.js",
	"./utils.js": "./src/assets/scripts/components/utils.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$";

/***/ }),

/***/ "./src/assets/scripts/components/columns.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/components/columns.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var callToActionBtns = document.querySelectorAll('.columns__img');
callToActionBtns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var currentBtn = e.target.parentElement.parentElement;
    currentBtn.classList.toggle('hide');
  });
});

/***/ }),

/***/ "./src/assets/scripts/components/helpers.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/components/helpers.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var doImagePreload = function doImagePreload(url) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.srcset = url;
    image.onload = resolve;
    image.onerror = reject;
  });
};

var clamp = function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
};

var assert = function assert(predicate, message) {
  if (predicate) {
    return;
  }

  throw new Error(message);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  assert: assert,
  clamp: clamp,
  doImagePreload: doImagePreload
});

/***/ }),

/***/ "./src/assets/scripts/components/lazyimageloader.js":
/*!**********************************************************!*\
  !*** ./src/assets/scripts/components/lazyimageloader.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/assets/scripts/components/helpers.js");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var LazyImageLoader = /*#__PURE__*/function () {
  function LazyImageLoader() {
    var _this = this;

    _classCallCheck(this, LazyImageLoader);

    var images = document.querySelectorAll(".".concat(LazyImageLoader.PENDING_CLASS));
    var config = {
      root: null,
      rootMargin: '60px 0px',
      threshold: LazyImageLoader.THRESHOLD
    };

    if (!LazyImageLoader.OBSERVER_SUPPORTED) {
      this.llLoadImagesDefault(images);
      return;
    }

    this.llCount = images.length;
    this.llIntersected = this.llIntersected.bind(this);
    this.llObserver = new IntersectionObserver(this.llIntersected, config);
    images.forEach(function (image) {
      if (image.classList.contains(LazyImageLoader.HANDLED_CLASS)) {
        return;
      }

      _this.llObserver.observe(image);
    });
  }

  _createClass(LazyImageLoader, [{
    key: "llDisconnect",
    value: function llDisconnect() {
      if (!this.llObserver) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llIntersected",
    value: function llIntersected(entries) {
      var _this2 = this;

      entries.forEach(function (entry) {
        if (entry.intersectionRatio < 0) {
          return;
        }

        if (entry.isIntersecting) {
          _this2.llCount--;

          _this2.llPreloadImage(entry.target);

          _this2.llObserver.unobserve(entry.target);
        }
      });

      if (this.llCount > 0) {
        return;
      }

      this.llObserver.disconnect();
    }
  }, {
    key: "llPreloadImage",
    value: function llPreloadImage(image) {
      var _this3 = this;

      var src = image.dataset.srcset;

      if (!src) {
        return;
      }

      return _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].doImagePreload(src).then(function () {
        return _this3.llTagImage(image, src);
      });
    }
  }, {
    key: "llLoadImagesDefault",
    value: function llLoadImagesDefault(images) {
      var _this4 = this;

      Array.from(images).forEach(function (image) {
        return _this4.llPreloadImage(image);
      });
    }
  }, {
    key: "llTagImage",
    value: function llTagImage(img, src) {
      var el = img.querySelector('.lazy-image__content');

      if (!el) {
        return;
      }

      if (!img) {
        return;
      }

      var newImg = new Image();
      newImg.classList.add(LazyImageLoader.LOADED_CLASS);
      newImg.srcset = src;
      newImg.classList.add(LazyImageLoader.REVEAL_CLASS);
      newImg.alt = el.alt;
      img.appendChild(newImg);
      img.dataset.srcset = '';
      img.classList.remove(LazyImageLoader.PENDING_CLASS);
      img.classList.add(LazyImageLoader.HANDLED_CLASS);
    }
  }], [{
    key: "OBSERVER_SUPPORTED",
    get: function get() {
      return 'IntersectionObserver' in window;
    }
  }, {
    key: "PENDING_CLASS",
    get: function get() {
      return 'lazy-image--pending';
    }
  }, {
    key: "HANDLED_CLASS",
    get: function get() {
      return 'lazy-image--loaded';
    }
  }, {
    key: "LOADED_CLASS",
    get: function get() {
      return 'lazy-image__actual';
    }
  }, {
    key: "REVEAL_CLASS",
    get: function get() {
      return 'fade-in';
    }
  }, {
    key: "THRESHOLD",
    get: function get() {
      return 0.1;
    }
  }, {
    key: "init",
    value: function init() {
      if (this.llInstance) {
        this.llInstance.llDisconnect();
      }

      this.llCount = 0;
      this.llInstance = new LazyImageLoader();
    }
  }]);

  return LazyImageLoader;
}();

/* harmony default export */ __webpack_exports__["default"] = (LazyImageLoader);

/***/ }),

/***/ "./src/assets/scripts/components/resource.js":
/*!***************************************************!*\
  !*** ./src/assets/scripts/components/resource.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);




if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    var resource = $('.resource'); // let swap = false;

    if (resource.length > 0) {// const changeClasses = () => {
      //     let red = $('.resource__block-red')[0];
      //     let black = $('.resource__block-black')[0];
      //     if (!swap) {
      //         red.classList.add('swap');
      //         black.classList.add('swap');
      //     } else {
      //         red.classList.remove('swap');
      //         black.classList.remove('swap');
      //     }
      //     swap = !swap;
      // }
      // ScrollTrigger.create({
      //     target: '.resource__block',
      //     start: 'top top',
      //     markers: true,
      //     // end: document.innerHeight,
      //     onToggle: () => changeClasses(),
      // });
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/slider.js":
/*!*************************************************!*\
  !*** ./src/assets/scripts/components/slider.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_0__);
 // import gsap from 'gsap';
// import { debounce,mediaQuery } from './utils';



if (swiper__WEBPACK_IMPORTED_MODULE_0___default.a) {
  $(function () {
    // ---- ALL SLIDERS -----
    var sliderMomentumRatio = 0.455;

    var IsInitialized = function IsInitialized(ele) {
      return ele.hasClass('swiper-container-initialized');
    };

    var swiperInstances = {
      category: {
        instance: null,
        init: false
      },
      big: {
        instance: null,
        init: false
      }
    };
    var categorySlider = $('.logos__slider');

    function setupCategorySlider() {
      swiperInstances.category.instance = new swiper__WEBPACK_IMPORTED_MODULE_0___default.a(categorySlider[0], {
        // eslint-disable-line
        slidesPerView: 1,
        // spaceBetween: 20,
        freeMode: true,
        freeModeMomentumRatio: sliderMomentumRatio,
        loop: true,
        loopFillGroupWithBlank: false,
        dynamicBullets: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.logos__slider__nav-next',
          prevEl: '.logos__slider__nav-prev'
        },
        // Responsive breakpoints
        breakpoints: {
          // when window width is >=
          1280: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 3
          },
          456: {
            slidesPerView: 2
          }
        }
      });
    }

    if (categorySlider.length > 0) {
      if (!IsInitialized(categorySlider)) {
        setupCategorySlider();
      }
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/scripts/components/utils.js":
/*!************************************************!*\
  !*** ./src/assets/scripts/components/utils.js ***!
  \************************************************/
/*! exports provided: debounce, throttle, lerp, clamp, irandom, seconds, mediaQuery, stbScrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "irandom", function() { return irandom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stbScrollTo", function() { return stbScrollTo; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "gsap");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);



var debounce = function debounce(func, wait, immediate) {
  var timeout;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  } else {
    console.warn('A function is undefined! Debounce might not work as intended: ', func);
  }
};
var throttle = function throttle(func, limit) {
  var lastFunc;
  var lastRan;

  if (typeof func !== 'undefined') {
    return function () {
      var context = this;
      var args = arguments;

      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function () {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  } else {
    console.warn('A function is undefined! Throttle might not work as intended: ', func);
  }
};
var lerp = function lerp(start, end, amt) {
  return (1 - amt) * start + amt * end;
};
var clamp = function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
};
var irandom = function irandom(max) {
  return Math.floor(Math.random() * Math.floor(max));
};
var seconds = function seconds(ms) {
  return ms * 1000;
};
var mediaQuery = function mediaQuery(query) {
  return window.matchMedia(query).matches;
};
var stbScrollTo = function stbScrollTo(ele) {
  var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (gsap__WEBPACK_IMPORTED_MODULE_0___default.a) {
    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.registerPlugin(ScrollToPlugin); // eslint-disable-line

    gsap__WEBPACK_IMPORTED_MODULE_0___default.a.to(window, {
      duration: speed / 1000,
      ease: 'Power3.easeOut',
      scrollTo: {
        y: $(ele).offset().top
      }
    });
  } else {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(ele).offset().top
    }, speed);
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./src/assets/styles/main.scss":
/*!*************************************!*\
  !*** ./src/assets/styles/main.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ---------- Image / css assets ------------

__webpack_require__("./src/assets sync recursive \\.(svg|png|jpe?g)$");

__webpack_require__(/*! ./assets/styles/main.scss */ "./src/assets/styles/main.scss");

var includeComponent = function includeComponent(script) {
  return __webpack_require__("./src/assets/scripts/components sync recursive ^\\.\\/.*\\.js$")("./".concat(script, ".js"));
}; // -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */
// ----------- Custom scripts ---------------


includeComponent('slider');

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = gsap;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "Swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Swiper;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cyBzeW5jIFxcLihzdmd8cG5nfGpwZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdmcvbmV3c2xldHRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyBeXFwuXFwvLipcXC5qcyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvY29sdW1ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9yZXNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnc2FwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiU3dpcGVyXCIiXSwibmFtZXMiOlsiY2FsbFRvQWN0aW9uQnRucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnRCdG4iLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZG9JbWFnZVByZWxvYWQiLCJ1cmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImltYWdlIiwiSW1hZ2UiLCJzcmNzZXQiLCJvbmxvYWQiLCJvbmVycm9yIiwiY2xhbXAiLCJ2YWx1ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJhc3NlcnQiLCJwcmVkaWNhdGUiLCJtZXNzYWdlIiwiRXJyb3IiLCJMYXp5SW1hZ2VMb2FkZXIiLCJpbWFnZXMiLCJQRU5ESU5HX0NMQVNTIiwiY29uZmlnIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJUSFJFU0hPTEQiLCJPQlNFUlZFUl9TVVBQT1JURUQiLCJsbExvYWRJbWFnZXNEZWZhdWx0IiwibGxDb3VudCIsImxlbmd0aCIsImxsSW50ZXJzZWN0ZWQiLCJiaW5kIiwibGxPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiY29udGFpbnMiLCJIQU5ETEVEX0NMQVNTIiwib2JzZXJ2ZSIsImRpc2Nvbm5lY3QiLCJlbnRyaWVzIiwiZW50cnkiLCJpbnRlcnNlY3Rpb25SYXRpbyIsImlzSW50ZXJzZWN0aW5nIiwibGxQcmVsb2FkSW1hZ2UiLCJ1bm9ic2VydmUiLCJzcmMiLCJkYXRhc2V0IiwiSGVscGVycyIsInRoZW4iLCJsbFRhZ0ltYWdlIiwiQXJyYXkiLCJmcm9tIiwiaW1nIiwiZWwiLCJxdWVyeVNlbGVjdG9yIiwibmV3SW1nIiwiYWRkIiwiTE9BREVEX0NMQVNTIiwiUkVWRUFMX0NMQVNTIiwiYWx0IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsbEluc3RhbmNlIiwibGxEaXNjb25uZWN0IiwiZ3NhcCIsIiQiLCJyZXNvdXJjZSIsIlN3aXBlciIsInNsaWRlck1vbWVudHVtUmF0aW8iLCJJc0luaXRpYWxpemVkIiwiZWxlIiwiaGFzQ2xhc3MiLCJzd2lwZXJJbnN0YW5jZXMiLCJjYXRlZ29yeSIsImluc3RhbmNlIiwiaW5pdCIsImJpZyIsImNhdGVnb3J5U2xpZGVyIiwic2V0dXBDYXRlZ29yeVNsaWRlciIsInNsaWRlc1BlclZpZXciLCJmcmVlTW9kZSIsImZyZWVNb2RlTW9tZW50dW1SYXRpbyIsImxvb3AiLCJsb29wRmlsbEdyb3VwV2l0aEJsYW5rIiwiZHluYW1pY0J1bGxldHMiLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImJyZWFrcG9pbnRzIiwic3BhY2VCZXR3ZWVuIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVvdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJ3YXJuIiwidGhyb3R0bGUiLCJsaW1pdCIsImxhc3RGdW5jIiwibGFzdFJhbiIsIkRhdGUiLCJub3ciLCJsZXJwIiwic3RhcnQiLCJlbmQiLCJhbXQiLCJ2YWwiLCJpcmFuZG9tIiwiZmxvb3IiLCJyYW5kb20iLCJzZWNvbmRzIiwibXMiLCJtZWRpYVF1ZXJ5IiwicXVlcnkiLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInN0YlNjcm9sbFRvIiwic3BlZWQiLCJyZWdpc3RlclBsdWdpbiIsIlNjcm9sbFRvUGx1Z2luIiwidG8iLCJkdXJhdGlvbiIsImVhc2UiLCJzY3JvbGxUbyIsInkiLCJvZmZzZXQiLCJ0b3AiLCJkb2N1bWVudEVsZW1lbnQiLCJib2R5IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInJlcXVpcmUiLCJpbmNsdWRlQ29tcG9uZW50Iiwic2NyaXB0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RB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QUFDN0UsUUFBUSxDQUFDc0osZUFBVixFQUEyQnRKLFFBQVEsQ0FBQ3VKLElBQXBDLENBQUQsQ0FBRCxDQUE2Q0MsT0FBN0MsQ0FBcUQ7TUFDakRDLFNBQVMsRUFBRTVFLENBQUMsQ0FBQ0ssR0FBRCxDQUFELENBQU9rRSxNQUFQLEdBQWdCQztJQURzQixDQUFyRCxFQUVHVCxLQUZIO0VBR0g7QUFDSixDQWhCTSxDOzs7Ozs7Ozs7Ozs7QUNqRVAsdUM7Ozs7Ozs7Ozs7OztDQ0VBOztBQUVBYyxzRUFBQTs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsTUFBRDtFQUFBLE9BQVlGLHNGQUFRLFlBQStCRSxNQUFoQyxTQUFuQjtBQUFBLENBQXpCLEMsQ0FFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFDQUQsZ0JBQWdCLENBQUMsUUFBRCxDQUFoQixDOzs7Ozs7Ozs7OztBQ2pCQSxzQjs7Ozs7Ozs7Ozs7QUNBQSx3Qjs7Ozs7Ozs7Ozs7QUNBQSx3QiIsImZpbGUiOiJhc3NldHMvanMvbWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3ZnL25ld3NsZXR0ZXIuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLihzdmd8cG5nfGpwZT9nKSRcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLi4vaW1hZ2VzL3N2Zy9uZXdzbGV0dGVyLnN2Z1wiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jb2x1bW5zLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9jb2x1bW5zLmpzXCIsXG5cdFwiLi9oZWxwZXJzLmpzXCI6IFwiLi9zcmMvYXNzZXRzL3NjcmlwdHMvY29tcG9uZW50cy9oZWxwZXJzLmpzXCIsXG5cdFwiLi9sYXp5aW1hZ2Vsb2FkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qc1wiLFxuXHRcIi4vcmVzb3VyY2UuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3Jlc291cmNlLmpzXCIsXG5cdFwiLi9zbGlkZXIuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3NsaWRlci5qc1wiLFxuXHRcIi4vdXRpbHMuanNcIjogXCIuL3NyYy9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL3V0aWxzLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanMkXCI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgY2FsbFRvQWN0aW9uQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2x1bW5zX19pbWcnKTtcclxuXHJcbmNhbGxUb0FjdGlvbkJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRCdG4gPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBkb0ltYWdlUHJlbG9hZCA9IHVybCA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uuc3Jjc2V0ID0gdXJsO1xuICAgICAgICBpbWFnZS5vbmxvYWQgPSByZXNvbHZlO1xuICAgICAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICAgIH0pO1xufTtcblxuY29uc3QgY2xhbXAgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdmFsdWUpKTtcblxuY29uc3QgYXNzZXJ0ID0gKHByZWRpY2F0ZSwgbWVzc2FnZSkgPT4ge1xuICAgIGlmIChwcmVkaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhc3NlcnQsIGNsYW1wLCBkb0ltYWdlUHJlbG9hZFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuY2xhc3MgTGF6eUltYWdlTG9hZGVyIHtcbiAgICBzdGF0aWMgZ2V0IE9CU0VSVkVSX1NVUFBPUlRFRCAoKSB7XG4gICAgICAgIHJldHVybiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUEVORElOR19DTEFTUyAoKSB7XG4gICAgICAgIHJldHVybiAnbGF6eS1pbWFnZS0tcGVuZGluZyc7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBIQU5ETEVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlLS1sb2FkZWQnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgTE9BREVEX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdsYXp5LWltYWdlX19hY3R1YWwnO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgUkVWRUFMX0NMQVNTICgpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlLWluJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IFRIUkVTSE9MRCAoKSB7XG4gICAgICAgIHJldHVybiAwLjE7XG4gICAgfVxuXG4gICAgc3RhdGljIGluaXQgKCkge1xuICAgICAgICBpZiAodGhpcy5sbEluc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmxsSW5zdGFuY2UubGxEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmxsSW5zdGFuY2UgPSBuZXcgTGF6eUltYWdlTG9hZGVyKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7TGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1N9YCk7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnNjBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiBMYXp5SW1hZ2VMb2FkZXIuVEhSRVNIT0xEXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCFMYXp5SW1hZ2VMb2FkZXIuT0JTRVJWRVJfU1VQUE9SVEVEKSB7XG4gICAgICAgICAgICB0aGlzLmxsTG9hZEltYWdlc0RlZmF1bHQoaW1hZ2VzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubGxDb3VudCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMubGxJbnRlcnNlY3RlZCA9IHRoaXMubGxJbnRlcnNlY3RlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIodGhpcy5sbEludGVyc2VjdGVkLCBjb25maWcpO1xuXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIGlmIChpbWFnZS5jbGFzc0xpc3QuY29udGFpbnMoTGF6eUltYWdlTG9hZGVyLkhBTkRMRURfQ0xBU1MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxsRGlzY29ubmVjdCAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sbE9ic2VydmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsSW50ZXJzZWN0ZWQgKGVudHJpZXMpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmludGVyc2VjdGlvblJhdGlvIDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubGxDb3VudC0tO1xuICAgICAgICAgICAgICAgIHRoaXMubGxQcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmxsQ291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgIH1cblxuICAgIGxsUHJlbG9hZEltYWdlIChpbWFnZSkge1xuICAgICAgICBjb25zdCBzcmMgPSBpbWFnZS5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBIZWxwZXJzLmRvSW1hZ2VQcmVsb2FkKHNyYykudGhlbigoKSA9PiB0aGlzLmxsVGFnSW1hZ2UoaW1hZ2UsIHNyYykpO1xuICAgIH1cblxuICAgIGxsTG9hZEltYWdlc0RlZmF1bHQgKGltYWdlcykge1xuICAgICAgICBBcnJheS5mcm9tKGltYWdlcykuZm9yRWFjaChpbWFnZSA9PiB0aGlzLmxsUHJlbG9hZEltYWdlKGltYWdlKSk7XG4gICAgfVxuXG4gICAgbGxUYWdJbWFnZSAoaW1nLCBzcmMpIHtcbiAgICAgICAgY29uc3QgZWwgPSBpbWcucXVlcnlTZWxlY3RvcignLmxhenktaW1hZ2VfX2NvbnRlbnQnKTtcbiAgICAgICAgaWYgKCFlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgbmV3SW1nLmNsYXNzTGlzdC5hZGQoTGF6eUltYWdlTG9hZGVyLkxPQURFRF9DTEFTUyk7XG4gICAgICAgIG5ld0ltZy5zcmNzZXQgPSBzcmM7XG4gICAgICAgIG5ld0ltZy5jbGFzc0xpc3QuYWRkKExhenlJbWFnZUxvYWRlci5SRVZFQUxfQ0xBU1MpO1xuICAgICAgICBuZXdJbWcuYWx0ID0gZWwuYWx0O1xuICAgICAgICBpbWcuYXBwZW5kQ2hpbGQobmV3SW1nKTtcblxuICAgICAgICBpbWcuZGF0YXNldC5zcmNzZXQgPSAnJztcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoTGF6eUltYWdlTG9hZGVyLlBFTkRJTkdfQ0xBU1MpO1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChMYXp5SW1hZ2VMb2FkZXIuSEFORExFRF9DTEFTUyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXp5SW1hZ2VMb2FkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5pZiAoZ3NhcCkge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByZXNvdXJjZSA9ICQoJy5yZXNvdXJjZScpO1xuICAgICAgICAvLyBsZXQgc3dhcCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChyZXNvdXJjZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBjaGFuZ2VDbGFzc2VzID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGxldCByZWQgPSAkKCcucmVzb3VyY2VfX2Jsb2NrLXJlZCcpWzBdO1xuICAgICAgICAgICAgLy8gICAgIGxldCBibGFjayA9ICQoJy5yZXNvdXJjZV9fYmxvY2stYmxhY2snKVswXTtcblxuICAgICAgICAgICAgLy8gICAgIGlmICghc3dhcCkge1xuICAgICAgICAgICAgLy8gICAgICAgICByZWQuY2xhc3NMaXN0LmFkZCgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICBibGFjay5jbGFzc0xpc3QuYWRkKCdzd2FwJyk7XG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgcmVkLmNsYXNzTGlzdC5yZW1vdmUoJ3N3YXAnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgYmxhY2suY2xhc3NMaXN0LnJlbW92ZSgnc3dhcCcpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vICAgICBzd2FwID0gIXN3YXA7XG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIC8vIFNjcm9sbFRyaWdnZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucmVzb3VyY2VfX2Jsb2NrJyxcbiAgICAgICAgICAgIC8vICAgICBzdGFydDogJ3RvcCB0b3AnLFxuICAgICAgICAgICAgLy8gICAgIG1hcmtlcnM6IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgLy8gZW5kOiBkb2N1bWVudC5pbm5lckhlaWdodCxcbiAgICAgICAgICAgIC8vICAgICBvblRvZ2dsZTogKCkgPT4gY2hhbmdlQ2xhc3NlcygpLFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuLy8gaW1wb3J0IGdzYXAgZnJvbSAnZ3NhcCc7XG4vLyBpbXBvcnQgeyBkZWJvdW5jZSxtZWRpYVF1ZXJ5IH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcblxuaWYgKFN3aXBlcikge1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyAtLS0tIEFMTCBTTElERVJTIC0tLS0tXG4gICAgICAgIGNvbnN0IHNsaWRlck1vbWVudHVtUmF0aW8gPSAwLjQ1NTtcbiAgICAgICAgY29uc3QgSXNJbml0aWFsaXplZCA9IChlbGUpID0+IGVsZS5oYXNDbGFzcygnc3dpcGVyLWNvbnRhaW5lci1pbml0aWFsaXplZCcpO1xuICAgICAgICBjb25zdCBzd2lwZXJJbnN0YW5jZXMgPSB7XG4gICAgICAgICAgICBjYXRlZ29yeTogICAgICAgICB7IGluc3RhbmNlOiBudWxsLCBpbml0OiBmYWxzZSB9LFxuICAgICAgICAgICAgYmlnOiAgICAgICAgICAgICAgeyBpbnN0YW5jZTogbnVsbCwgaW5pdDogZmFsc2UgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjYXRlZ29yeVNsaWRlciA9ICQoJy5sb2dvc19fc2xpZGVyJyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0dXBDYXRlZ29yeVNsaWRlciAoKSB7XG4gICAgICAgICAgICBzd2lwZXJJbnN0YW5jZXMuY2F0ZWdvcnkuaW5zdGFuY2UgPSBuZXcgU3dpcGVyKGNhdGVnb3J5U2xpZGVyWzBdLCB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgICAgICAgICAgIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJlZU1vZGVNb21lbnR1bVJhdGlvOiBzbGlkZXJNb21lbnR1bVJhdGlvLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgbG9vcEZpbGxHcm91cFdpdGhCbGFuazogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHluYW1pY0J1bGxldHM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsOiAnLmxvZ29zX19zbGlkZXJfX25hdi1uZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgcHJldkVsOiAnLmxvZ29zX19zbGlkZXJfX25hdi1wcmV2JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIFJlc3BvbnNpdmUgYnJlYWtwb2ludHNcbiAgICAgICAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PVxuICAgICAgICAgICAgICAgICAgICAxMjgwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA0NTY6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2F0ZWdvcnlTbGlkZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFJc0luaXRpYWxpemVkKGNhdGVnb3J5U2xpZGVyKSkge1xuICAgICAgICAgICAgICAgIHNldHVwQ2F0ZWdvcnlTbGlkZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnO1xuXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSA9PiB7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0EgZnVuY3Rpb24gaXMgdW5kZWZpbmVkISBEZWJvdW5jZSBtaWdodCBub3Qgd29yayBhcyBpbnRlbmRlZDogJywgZnVuYyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHRocm90dGxlID0gKGZ1bmMsIGxpbWl0KSA9PiB7XG4gICAgbGV0IGxhc3RGdW5jO1xuICAgIGxldCBsYXN0UmFuO1xuXG4gICAgaWYgKHR5cGVvZiBmdW5jICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICBpZiAoIWxhc3RSYW4pIHtcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIGxhc3RSYW4gPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQobGFzdEZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEZ1bmMgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChEYXRlLm5vdygpIC0gbGFzdFJhbikgPj0gbGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0UmFuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGxpbWl0IC0gKERhdGUubm93KCkgLSBsYXN0UmFuKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdBIGZ1bmN0aW9uIGlzIHVuZGVmaW5lZCEgVGhyb3R0bGUgbWlnaHQgbm90IHdvcmsgYXMgaW50ZW5kZWQ6ICcsIGZ1bmMpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsZXJwID0gKHN0YXJ0LCBlbmQsIGFtdCkgPT4ge1xuICAgIHJldHVybiAoMSAtIGFtdCkgKiBzdGFydCArIGFtdCAqIGVuZDtcbn07XG5cbmV4cG9ydCBjb25zdCBjbGFtcCA9IChtaW4sIHZhbCwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpcmFuZG9tID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcbmV4cG9ydCBjb25zdCBzZWNvbmRzID0gKG1zKSA9PiBtcyAqIDEwMDA7XG5cbmV4cG9ydCBjb25zdCBtZWRpYVF1ZXJ5ID0gKHF1ZXJ5KSA9PiAod2luZG93Lm1hdGNoTWVkaWEocXVlcnkpKS5tYXRjaGVzO1xuXG5leHBvcnQgY29uc3Qgc3RiU2Nyb2xsVG8gPSAoZWxlLCBzcGVlZCA9IDIwMCkgPT4ge1xuICAgIGlmIChnc2FwKSB7XG4gICAgICAgIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVG9QbHVnaW4pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5cbiAgICAgICAgZ3NhcC50byh3aW5kb3csIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiBzcGVlZCAvIDEwMDAsXG4gICAgICAgICAgICBlYXNlOiAnUG93ZXIzLmVhc2VPdXQnLFxuICAgICAgICAgICAgc2Nyb2xsVG86IHtcbiAgICAgICAgICAgICAgICB5OiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkKGVsZSkub2Zmc2V0KCkudG9wXG4gICAgICAgIH0sIHNwZWVkKTtcbiAgICB9XG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyAtLS0tLS0tLS0tIEltYWdlIC8gY3NzIGFzc2V0cyAtLS0tLS0tLS0tLS1cblxucmVxdWlyZS5jb250ZXh0KCcuL2Fzc2V0cy8nLCB0cnVlLCAvXFwuKHN2Z3xwbmd8anBlP2cpJC8pO1xucmVxdWlyZSgnLi9hc3NldHMvc3R5bGVzL21haW4uc2NzcycpO1xuXG5jb25zdCBpbmNsdWRlQ29tcG9uZW50ID0gKHNjcmlwdCkgPT4gcmVxdWlyZShgLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzLyR7c2NyaXB0fS5qc2ApO1xuXG4vLyAtLS0tLS0tLS0tLS0tLSBMYXp5IGxvYWQgLS0tLS0tLS0tLS0tLS0tLS1cblxuLypcbiAqIGltcG9ydCBMYXp5SW1hZ2VMb2FkZXIgZnJvbSAnLi9hc3NldHMvc2NyaXB0cy9jb21wb25lbnRzL2xhenlpbWFnZWxvYWRlci5qcyc7XG4gKiBMYXp5SW1hZ2VMb2FkZXIuaW5pdCgpO1xuICovXG5cbi8vIC0tLS0tLS0tLS0tIEN1c3RvbSBzY3JpcHRzIC0tLS0tLS0tLS0tLS0tLVxuaW5jbHVkZUNvbXBvbmVudCgnc2xpZGVyJyk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGdzYXA7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwibW9kdWxlLmV4cG9ydHMgPSBTd2lwZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==