/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@400;500&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\na {\n  color: aliceblue;\n  text-decoration: none;\n}\n\n.link-logo {\n  border: 3px solid #fff;\n  height: 82px;\n  width: 82px;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nheader {\n  background-color: red;\n  height: max-content;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n\n.link-lists {\n  display: flex;\n  gap: 40px;\n  margin-right: 80px;\n  list-style: none;\n}\n\n.link-lists > li a {\n  list-style: none;\n  text-decoration: none;\n  color: #fff;\n}\n\n.strng {\n  color: red;\n}\n\n/* Display item to the home page */\n.grid-cards-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 6em;\n  gap: 30px;\n  padding: 50px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem 0;\n  transition: 500ms ease-in;\n  border: 2px solid red;\n  background-color: #000;\n}\n\n.welcome {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.item:hover {\n  transform: scale(1.05);\n}\n\n.show-image {\n  width: 210px;\n  height: 295px;\n}\n\n.card-title {\n  font-family: var(--main-font);\n  font-size: 1.2em;\n  color: #fff;\n}\n\n.movie-title {\n  text-align: center;\n  width: 200px;\n}\n\n.comment-btn,\n.reserve-btn {\n  border: 2px solid;\n  padding: 0.4em;\n  font-family: var(--main-font);\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.comment-btn:hover {\n  background-color: red;\n  color: #fff;\n}\n\n.comment-and-like {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.p-like {\n  color: #fff;\n  margin-top: -25px;\n}\n\n.heart {\n  width: 100px;\n  height: 100px;\n  background:\n    url(\"https://cssanimation.rocks/images/posts/steps/heart.png\")\n    no-repeat;\n  background-position: 0 0;\n  cursor: pointer;\n  transition: background-position 1s steps(28);\n  transition-duration: 0s;\n  margin-bottom: 0;\n  margin-top: -44px;\n}\n\n.heart.is-active {\n  transition-duration: 1s;\n  background-position: -2800px 0;\n}\n\n.loading {\n  width: 160px;\n  height: 160px;\n  border-radius: 150px;\n  border: 15px aquamarine;\n  border-top-color: rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -80px;\n  margin-left: -80px;\n  animation: loading 1.2s linear infinite;\n  z-index: 999999999;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.mask {\n  background: rgba(0, 0, 0, 0.918);\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 99999999;\n}\n\n.load-more {\n  padding: 8px;\n  background-color: aquamarine;\n  margin: 5px auto;\n  width: 40%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n}\n\n/* //comment popup// */\n.movie-popup {\n  display: none;\n  background: #fff;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: auto;\n}\n\nh2 {\n  margin-left: 275px;\n  padding-top: 30px;\n}\n\n.movie-popup .popup-title {\n  text-align: center;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.movie-popup table {\n  width: 70%;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.popup-img {\n  display: block;\n  margin: 0 auto;\n}\n\n.comments {\n  margin-left: 90px;\n  list-style-type: none;\n}\n\n.comment-title {\n  margin-left: 90px;\n  padding-top: 30px;\n}\n\n#close-popup {\n  display: block;\n  width: 100%;\n  text-align: right;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 20px 30px 0 0;\n}\n\n.com-form {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-bottom: 20px;\n  margin-left: 130px;\n  align-items: center;\n}\n\n.com-form input,\n.com-form button {\n  width: 300px;\n  height: 35px;\n  padding-left: 10px;\n  outline: none;\n  background-color: white;\n  color: rgb(0, 0, 0);\n}\n\n.com-form button {\n  box-shadow: 2px 2px 4px 0;\n  cursor: pointer;\n}\n\n.com-form textarea {\n  width: 400px;\n  height: 155px;\n  outline: none;\n  padding: 5px;\n}\n\n.com-form h2 {\n  text-align: center;\n  display: contents;\n}\n\ntd {\n  padding-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\nfooter {\n  background-color: #000;\n  color: #fff;\n  border-top: 2px solid;\n  text-align: center;\n  padding: 5rem 0;\n  margin: 2rem 0 0 0;\n  font-size: 1.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@400;500&family=Roboto&display=swap');\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\na {\n  color: aliceblue;\n  text-decoration: none;\n}\n\n.link-logo {\n  border: 3px solid #fff;\n  height: 82px;\n  width: 82px;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nheader {\n  background-color: red;\n  height: max-content;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n\n.link-lists {\n  display: flex;\n  gap: 40px;\n  margin-right: 80px;\n  list-style: none;\n}\n\n.link-lists > li a {\n  list-style: none;\n  text-decoration: none;\n  color: #fff;\n}\n\n.strng {\n  color: red;\n}\n\n/* Display item to the home page */\n.grid-cards-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 6em;\n  gap: 30px;\n  padding: 50px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem 0;\n  transition: 500ms ease-in;\n  border: 2px solid red;\n  background-color: #000;\n}\n\n.welcome {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.item:hover {\n  transform: scale(1.05);\n}\n\n.show-image {\n  width: 210px;\n  height: 295px;\n}\n\n.card-title {\n  font-family: var(--main-font);\n  font-size: 1.2em;\n  color: #fff;\n}\n\n.movie-title {\n  text-align: center;\n  width: 200px;\n}\n\n.comment-btn,\n.reserve-btn {\n  border: 2px solid;\n  padding: 0.4em;\n  font-family: var(--main-font);\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.comment-btn:hover {\n  background-color: red;\n  color: #fff;\n}\n\n.comment-and-like {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.p-like {\n  color: #fff;\n  margin-top: -25px;\n}\n\n.heart {\n  width: 100px;\n  height: 100px;\n  background:\n    url(\"https://cssanimation.rocks/images/posts/steps/heart.png\")\n    no-repeat;\n  background-position: 0 0;\n  cursor: pointer;\n  transition: background-position 1s steps(28);\n  transition-duration: 0s;\n  margin-bottom: 0;\n  margin-top: -44px;\n}\n\n.heart.is-active {\n  transition-duration: 1s;\n  background-position: -2800px 0;\n}\n\n.loading {\n  width: 160px;\n  height: 160px;\n  border-radius: 150px;\n  border: 15px aquamarine;\n  border-top-color: rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -80px;\n  margin-left: -80px;\n  animation: loading 1.2s linear infinite;\n  z-index: 999999999;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.mask {\n  background: rgba(0, 0, 0, 0.918);\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 99999999;\n}\n\n.load-more {\n  padding: 8px;\n  background-color: aquamarine;\n  margin: 5px auto;\n  width: 40%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n}\n\n/* //comment popup// */\n.movie-popup {\n  display: none;\n  background: #fff;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  overflow: auto;\n}\n\nh2 {\n  margin-left: 275px;\n  padding-top: 30px;\n}\n\n.movie-popup .popup-title {\n  text-align: center;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.movie-popup table {\n  width: 70%;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.popup-img {\n  display: block;\n  margin: 0 auto;\n}\n\n.comments {\n  margin-left: 90px;\n  list-style-type: none;\n}\n\n.comment-title {\n  margin-left: 90px;\n  padding-top: 30px;\n}\n\n#close-popup {\n  display: block;\n  width: 100%;\n  text-align: right;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 20px 30px 0 0;\n}\n\n.com-form {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-bottom: 20px;\n  margin-left: 130px;\n  align-items: center;\n}\n\n.com-form input,\n.com-form button {\n  width: 300px;\n  height: 35px;\n  padding-left: 10px;\n  outline: none;\n  background-color: white;\n  color: rgb(0, 0, 0);\n}\n\n.com-form button {\n  box-shadow: 2px 2px 4px 0;\n  cursor: pointer;\n}\n\n.com-form textarea {\n  width: 400px;\n  height: 155px;\n  outline: none;\n  padding: 5px;\n}\n\n.com-form h2 {\n  text-align: center;\n  display: contents;\n}\n\ntd {\n  padding-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\nfooter {\n  background-color: #000;\n  color: #fff;\n  border-top: 2px solid;\n  text-align: center;\n  padding: 5rem 0;\n  margin: 2rem 0 0 0;\n  font-size: 1.5rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commentCounter": () => (/* binding */ commentCounter),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchMovieComments": () => (/* binding */ fetchMovieComments)
/* harmony export */ });
const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5exKMPrZqyeZytnJTggI/comments';
const fetchMovieComments = async (movieId) => {
  const response = await fetch(`${commentsEndpoint}?item_id=${movieId}`).catch((err) => err);
  return response.json();
};

// async function to fetch total number of available comments for a movie wih a specific ID
const getTotalComments = async (movieId) => {
  const res = await fetchMovieComments(movieId)
    .then((data) => (!data.error ? data.length : 0))
    .catch(() => 0);
  return res;
};
const popup = document.querySelector('.movie-popup');

// Update UI total number of comments
const updateTotalCommentsCount = (movieId) => {
  getTotalComments(movieId).then((total) => {
    popup.querySelector('.total-comments').innerHTML = total;
  });
};
const commentCounter = (data) => data.length;

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    const data = await fetchMovieComments(e.target.id);
    const commentNumber = commentCounter(data);
    document.querySelector('.total-comments').textContent = commentNumber || 0;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTotalCommentsCount);


/***/ }),

/***/ "./src/modules/commentPop.js":
/*!***********************************!*\
  !*** ./src/modules/commentPop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");


const url1 = 'https://api.tvmaze.com/shows';
const commentsEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5exKMPrZqyeZytnJTggI/comments';
const popup = document.querySelector('.movie-popup');

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentsEndpoint, params);
  return response;
};
const fetchMovieData = async (movieId) => {
  const response = await get(`${url1}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  popup.querySelector('.comments').innerHTML = data;
};
const enableClosePopup = () => {
  document.querySelector('#close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
    popup.innerHTML = '';
  });
};

const showComments = (movieId) => {
  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__.fetchMovieComments)(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('No comments have been posted yet. Be the first to write something...');
    }
  });
};
const displayMoviePopup = (movieId) => {
  popup.innerHTML = `Loading...<br>
  <span id="close-popup">X</span>`;

  fetchMovieData(movieId).then((data) => {
    popup.innerHTML = `
    <span id="close-popup">X</span>
    <img src="${data.image.medium}" class="popup-img">
    <h3 class="popup-title">${data.name}</h3>
    <table>
      <tr>
        <td>
          <b>premiered:</b> ${data.premiered}
        </td>
        <td>
          <b>Ended:</b> ${data.ended}
        </td>
      </tr>
      <tr>
        <td>
          <b>Language:</b> ${data.language}
        </td>
        <td>
          <b>Type:</b> ${data.type}
        </td>
      </tr>
    </table>
    <h3 class="comment-title">
    Comments(<span class="total-comments">0</span>)
    </h3>
    <ul class="comments">
      fetching comments...
    </ul>
    <form class="com-form">
      <h2>Add a comment</h2>
      <input type="text" name="username" placeholder="Your name" required>
      <textarea placeholder="Your insights" name="comment" required minlength="1"></textarea>
      <button type="submit">Submit</button>
    </form>
    `;

    enableClosePopup();
    showComments(movieId);

    const form = popup.querySelector('.com-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.username.value;
      const msg = form.elements.comment.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: msg,
      }).then(() => {
        showComments(movieId);
        (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieId);
        form.reset();
      });
    });
  });

  popup.style.display = 'block';
  enableClosePopup();
};
const enableComments = () => {
  const commentBtns = document.querySelectorAll('.comment-btn');
  commentBtns.forEach((movie) => {
    movie.addEventListener('click', () => {
      const movieId = movie.getAttribute('movie_id');
      displayMoviePopup(movieId);
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enableComments);

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cardContainer = document.querySelector('.grid-cards-container');

const createCardItem = (item, itemLike = 0) => {
  const cardElement = document.createElement('article');
  const cardImage = document.createElement('img');
  const cardTitle = document.createElement('h4');
  const commentAndLikeDiv = document.createElement('div');
  const commentBtn = document.createElement('button');
  const reserveBtn = document.createElement('button');
  const pLikesTag = document.createElement('p');
  const likeHeart = document.createElement('div');
  const movieTitle = document.createElement('h4');

  cardContainer.append(cardElement);
  cardElement.append(cardImage, cardTitle, commentAndLikeDiv);
  cardElement.classList.add('item');
  cardTitle.classList.add('card-title');
  movieTitle.classList.add('movie-title');
  likeHeart.classList.add('heart');
  likeHeart.id = item.id;
  commentAndLikeDiv.append(movieTitle, likeHeart, pLikesTag, commentBtn);
  pLikesTag.classList.add('p-like');
  commentAndLikeDiv.classList.add('comment-and-like');
  commentBtn.classList.add('comment-btn');
  // reserveBtn.classList.add('comment-btn');
  reserveBtn.classList.add('reserve-btn');
  commentBtn.setAttribute('movie_id', item.id);
  reserveBtn.setAttribute('movie_id', item.id);
  commentBtn.id = item.id;
  reserveBtn.id = item.id;
  commentBtn.textContent = 'Comment';
  reserveBtn.textContent = 'Reserve';
  movieTitle.textContent = 'Movie Title';

  pLikesTag.textContent = `${itemLike} likes`;
  cardImage.src = item.image.medium;
  cardTitle.textContent = item.name;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardItem);

/***/ }),

/***/ "./src/modules/fetchApis.js":
/*!**********************************!*\
  !*** ./src/modules/fetchApis.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLikes": () => (/* binding */ addLikes),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "likeCount": () => (/* binding */ likeCount)
/* harmony export */ });
const url1 = 'https://api.tvmaze.com/shows';
const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5exKMPrZqyeZytnJTggI/likes';

const fetchData = (url, CostumSettings = {}) => {
  const response = fetch(url, CostumSettings)
    .then((res) => res.json());
  return response;
};

const getData = () => fetchData(url1);

const likeCount = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5exKMPrZqyeZytnJTggI/likes');
  const data = await response.json();
  return data;
};

const addLikes = async (id) => {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  };
  const res = await fetchData(url2, settings)
    .catch((err) => err);
  return res;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const url1 = 'https://api.tvmaze.com/shows';

const getMovieTitle = async () => {
  const movieTitle = document.querySelectorAll('.movie-title');
  const titleArray = [];
  const response = await fetch(url1);
  const data = await response.json();
  data.forEach((title) => {
    titleArray.push(title.name);
    movieTitle.forEach((movie, index) => {
      movie.innerHTML = titleArray[index];
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieTitle);

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "itemsCounter": () => (/* binding */ itemsCounter)
/* harmony export */ });
const itemsCounter = (data) => data.length;

const displayTvShownumbers = (data) => {
  const TvShowLink = document.querySelector('.tv-show-link');
  const counter = itemsCounter(data);
  TvShowLink.innerHTML = `Total Movies(${counter})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTvShownumbers);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchApis.js */ "./src/modules/fetchApis.js");
/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayItems.js */ "./src/modules/displayItems.js");
/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemCounter.js */ "./src/modules/itemCounter.js");
/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getMovies.js */ "./src/modules/getMovies.js");
/* harmony import */ var _modules_commentPop_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/commentPop.js */ "./src/modules/commentPop.js");







document.addEventListener('click', async (e) => {
  if (e.target.matches('.heart')) {
    e.target.classList.toggle('is-active');
    const id = Number(e.target.id);
    const like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));
    e.target.nextSibling.textContent = `${like + 1} likes`;
    await (0,_modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__.addLikes)(id);
  }
});

const loading = () => {
  const cardsContainer = document.querySelector('.grid-cards-container');
  const loadDiv = document.createElement('div');
  const mask = document.createElement('div');
  loadDiv.classList.add('loading');
  mask.classList.add('mask');
  cardsContainer.append(mask, loadDiv);
};

const removeLoding = () => {
  document.querySelector('.loading').remove();
  document.querySelector('.mask').remove();
};

const renderItems = async (showCount = 16) => {
  loading();
  const itemsData = await (0,_modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const showLess = itemsData.slice(0, showCount);
  (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(showLess);
  removeLoding();
  const likes = await (0,_modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__.likeCount)();
  showLess.forEach((element, i) => {
    let numLikes = 0;
    numLikes = likes.filter((like) => like.item_id === showLess[i].id);
    if (numLikes.length > 0) {
      (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(showLess[i], numLikes[0].likes);
    } else {
      (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_2__["default"])(showLess[i], 0);
    }
  });
};

renderItems().then(() => {
  (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_commentPop_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUss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O1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUMyQztBQUNmO0FBQ0s7QUFDVDtBQUNFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQsVUFBVSwrREFBUTtBQUNsQjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlFQUFPO0FBQ2pDO0FBQ0EsRUFBRSxtRUFBb0I7QUFDdEI7QUFDQSxzQkFBc0IsZ0VBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9FQUFjO0FBQ3BCLE1BQU07QUFDTixNQUFNLG9FQUFjO0FBQ3BCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0EsRUFBRSxpRUFBYTtBQUNmLEVBQUUsa0VBQWM7QUFDaEIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY29tbWVudENvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2NvbW1lbnRQb3AuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlJdGVtcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZmV0Y2hBcGlzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9nZXRNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2l0ZW1Db3VudGVyLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmxpbmstbG9nbyB7XFxuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmO1xcbiAgaGVpZ2h0OiA4MnB4O1xcbiAgd2lkdGg6IDgycHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5saW5rLWxpc3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubGluay1saXN0cyA+IGxpIGEge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uc3Rybmcge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLyogRGlzcGxheSBpdGVtIHRvIHRoZSBob21lIHBhZ2UgKi9cXG4uZ3JpZC1jYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBtYXJnaW4tdG9wOiA2ZW07XFxuICBnYXA6IDMwcHg7XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cXG5cXG4uaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC42cmVtIDA7XFxuICB0cmFuc2l0aW9uOiA1MDBtcyBlYXNlLWluO1xcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG59XFxuXFxuLndlbGNvbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuXFxuLml0ZW06aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuLnNob3ctaW1hZ2Uge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiAyOTVweDtcXG59XFxuXFxuLmNhcmQtdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5tb3ZpZS10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5jb21tZW50LWJ0bixcXG4ucmVzZXJ2ZS1idG4ge1xcbiAgYm9yZGVyOiAycHggc29saWQ7XFxuICBwYWRkaW5nOiAwLjRlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY29tbWVudC1hbmQtbGlrZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wLWxpa2Uge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAtMjVweDtcXG59XFxuXFxuLmhlYXJ0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBiYWNrZ3JvdW5kOlxcbiAgICB1cmwoXFxcImh0dHBzOi8vY3NzYW5pbWF0aW9uLnJvY2tzL2ltYWdlcy9wb3N0cy9zdGVwcy9oZWFydC5wbmdcXFwiKVxcbiAgICBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDFzIHN0ZXBzKDI4KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIG1hcmdpbi10b3A6IC00NHB4O1xcbn1cXG5cXG4uaGVhcnQuaXMtYWN0aXZlIHtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI4MDBweCAwO1xcbn1cXG5cXG4ubG9hZGluZyB7XFxuICB3aWR0aDogMTYwcHg7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICBib3JkZXI6IDE1cHggYXF1YW1hcmluZTtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC04MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC04MHB4O1xcbiAgYW5pbWF0aW9uOiBsb2FkaW5nIDEuMnMgbGluZWFyIGluZmluaXRlO1xcbiAgei1pbmRleDogOTk5OTk5OTk5O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbn1cXG5cXG4ubWFzayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOTE4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5O1xcbn1cXG5cXG4ubG9hZC1tb3JlIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxuICBtYXJnaW46IDVweCBhdXRvO1xcbiAgd2lkdGg6IDQwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogLy9jb21tZW50IHBvcHVwLy8gKi9cXG4ubW92aWUtcG9wdXAge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBsZWZ0OiAwO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNzVweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4ubW92aWUtcG9wdXAgLnBvcHVwLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5tb3ZpZS1wb3B1cCB0YWJsZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuI2Nsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHggMCAwO1xcbn1cXG5cXG4uY29tLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbS1mb3JtIGlucHV0LFxcbi5jb20tZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbS1mb3JtIGJ1dHRvbiB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tLWZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxNTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb20tZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxudGQge1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFB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OztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGluay1sb2dvIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBoZWlnaHQ6IDgycHg7XFxuICB3aWR0aDogODJweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxpbmstbGlzdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saW5rLWxpc3RzID4gbGkgYSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zdHJuZyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBEaXNwbGF5IGl0ZW0gdG8gdGhlIGhvbWUgcGFnZSAqL1xcbi5ncmlkLWNhcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbi10b3A6IDZlbTtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjZyZW0gMDtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW47XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uc2hvdy1pbWFnZSB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDI5NXB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vdmllLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuLFxcbi5yZXNlcnZlLWJ0biB7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb21tZW50LWFuZC1saWtlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnAtbGlrZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xcbn1cXG5cXG4uaGVhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6XFxuICAgIHVybChcXFwiaHR0cHM6Ly9jc3NhbmltYXRpb24ucm9ja3MvaW1hZ2VzL3Bvc3RzL3N0ZXBzL2hlYXJ0LnBuZ1xcXCIpXFxuICAgIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMXMgc3RlcHMoMjgpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogLTQ0cHg7XFxufVxcblxcbi5oZWFydC5pcy1hY3RpdmUge1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjgwMHB4IDA7XFxufVxcblxcbi5sb2FkaW5nIHtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gIGJvcmRlcjogMTVweCBhcXVhbWFyaW5lO1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLXRvcDogLTgwcHg7XFxuICBtYXJnaW4tbGVmdDogLTgwcHg7XFxuICBhbmltYXRpb246IGxvYWRpbmcgMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxuICB6LWluZGV4OiA5OTk5OTk5OTk7XFxufVxcblxcbkBrZXlmcmFtZXMgbG9hZGluZyB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcblxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxufVxcblxcbi5tYXNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC45MTgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogOTk5OTk5OTk7XFxufVxcblxcbi5sb2FkLW1vcmUge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG4gIG1hcmdpbjogNXB4IGF1dG87XFxuICB3aWR0aDogNDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiAvL2NvbW1lbnQgcG9wdXAvLyAqL1xcbi5tb3ZpZS1wb3B1cCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDk5OTk7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuaDIge1xcbiAgbWFyZ2luLWxlZnQ6IDI3NXB4O1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxufVxcblxcbi5tb3ZpZS1wb3B1cCAucG9wdXAtdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuXFxuLm1vdmllLXBvcHVwIHRhYmxlIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5wb3B1cC1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmNvbW1lbnRzIHtcXG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uY29tbWVudC10aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4jY2xvc2UtcG9wdXAge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDIwcHggMzBweCAwIDA7XFxufVxcblxcbi5jb20tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMTMwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29tLWZvcm0gaW5wdXQsXFxuLmNvbS1mb3JtIGJ1dHRvbiB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uY29tLWZvcm0gYnV0dG9uIHtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb20tZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDE1NXB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmNvbS1mb3JtIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG50ZCB7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogNXJlbSAwO1xcbiAgbWFyZ2luOiAycmVtIDAgMCAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNvbW1lbnRzRW5kcG9pbnQgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvNWV4S01QclpxeWVaeXRuSlRnZ0kvY29tbWVudHMnO1xuY29uc3QgZmV0Y2hNb3ZpZUNvbW1lbnRzID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c0VuZHBvaW50fT9pdGVtX2lkPSR7bW92aWVJZH1gKS5jYXRjaCgoZXJyKSA9PiBlcnIpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuLy8gYXN5bmMgZnVuY3Rpb24gdG8gZmV0Y2ggdG90YWwgbnVtYmVyIG9mIGF2YWlsYWJsZSBjb21tZW50cyBmb3IgYSBtb3ZpZSB3aWggYSBzcGVjaWZpYyBJRFxuY29uc3QgZ2V0VG90YWxDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoTW92aWVDb21tZW50cyhtb3ZpZUlkKVxuICAgIC50aGVuKChkYXRhKSA9PiAoIWRhdGEuZXJyb3IgPyBkYXRhLmxlbmd0aCA6IDApKVxuICAgIC5jYXRjaCgoKSA9PiAwKTtcbiAgcmV0dXJuIHJlcztcbn07XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1wb3B1cCcpO1xuXG4vLyBVcGRhdGUgVUkgdG90YWwgbnVtYmVyIG9mIGNvbW1lbnRzXG5jb25zdCB1cGRhdGVUb3RhbENvbW1lbnRzQ291bnQgPSAobW92aWVJZCkgPT4ge1xuICBnZXRUb3RhbENvbW1lbnRzKG1vdmllSWQpLnRoZW4oKHRvdGFsKSA9PiB7XG4gICAgcG9wdXAucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJykuaW5uZXJIVE1MID0gdG90YWw7XG4gIH0pO1xufTtcbmNvbnN0IGNvbW1lbnRDb3VudGVyID0gKGRhdGEpID0+IGRhdGEubGVuZ3RoO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuY29tbWVudC1idG4nKSkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE1vdmllQ29tbWVudHMoZS50YXJnZXQuaWQpO1xuICAgIGNvbnN0IGNvbW1lbnROdW1iZXIgPSBjb21tZW50Q291bnRlcihkYXRhKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtY29tbWVudHMnKS50ZXh0Q29udGVudCA9IGNvbW1lbnROdW1iZXIgfHwgMDtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVwZGF0ZVRvdGFsQ29tbWVudHNDb3VudDtcbmV4cG9ydCB7IGZldGNoTW92aWVDb21tZW50cywgY29tbWVudENvdW50ZXIgfTsiLCJpbXBvcnQgdXBkYXRlVG90YWxDb21tZW50c0NvdW50LCB7IGZldGNoTW92aWVDb21tZW50cyB9IGZyb20gJy4vY29tbWVudENvdW50ZXIuanMnO1xuXG5jb25zdCB1cmwxID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3QgY29tbWVudHNFbmRwb2ludCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy81ZXhLTVByWnF5ZVp5dG5KVGdnSS9jb21tZW50cyc7XG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZS1wb3B1cCcpO1xuXG5jb25zdCBnZXQgPSAodXJsKSA9PiBmZXRjaCh1cmwpXG4gIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIC50aGVuKChkYXRhKSA9PiBkYXRhKVxuICAuY2F0Y2goKGVycm9yKSA9PiBlcnJvcik7XG5cbmNvbnN0IHBvc3QgPSAodXJsLCBwYXJhbXMgPSB7fSkgPT4gZmV0Y2godXJsLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgfSxcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcbn0pLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgLnRoZW4oKGRhdGEpID0+IChkYXRhLmVycm9yXG4gICAgPyB7IGVycm9yOiB0cnVlLCBpbmZvOiBkYXRhIH1cbiAgICA6IHsgZXJyb3I6IGZhbHNlLCBpbmZvOiBkYXRhIH0pKVxuICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogdHJ1ZSwgaW5mbzogZXJyb3IgfSkpO1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHBhcmFtcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHBvc3QoY29tbWVudHNFbmRwb2ludCwgcGFyYW1zKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcbmNvbnN0IGZldGNoTW92aWVEYXRhID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXQoYCR7dXJsMX0vJHttb3ZpZUlkfWApO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkaXNwbGF5TW92aWVDb21tZW50cyA9IChkYXRhKSA9PiB7XG4gIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpLmlubmVySFRNTCA9IGRhdGE7XG59O1xuY29uc3QgZW5hYmxlQ2xvc2VQb3B1cCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXBvcHVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwb3B1cC5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG59O1xuXG5jb25zdCBzaG93Q29tbWVudHMgPSAobW92aWVJZCkgPT4ge1xuICBmZXRjaE1vdmllQ29tbWVudHMobW92aWVJZCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YS5lcnJvcikge1xuICAgICAgbGV0IGNvbW1lbnRzID0gJyc7XG4gICAgICBkYXRhLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICAgICAgY29tbWVudHMgKz0gYDxsaT4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtjb21tZW50LnVzZXJuYW1lfTogJHtjb21tZW50LmNvbW1lbnR9PC9saT5gO1xuICAgICAgfSk7XG4gICAgICBkaXNwbGF5TW92aWVDb21tZW50cyhjb21tZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXlNb3ZpZUNvbW1lbnRzKCdObyBjb21tZW50cyBoYXZlIGJlZW4gcG9zdGVkIHlldC4gQmUgdGhlIGZpcnN0IHRvIHdyaXRlIHNvbWV0aGluZy4uLicpO1xuICAgIH1cbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheU1vdmllUG9wdXAgPSAobW92aWVJZCkgPT4ge1xuICBwb3B1cC5pbm5lckhUTUwgPSBgTG9hZGluZy4uLjxicj5cbiAgPHNwYW4gaWQ9XCJjbG9zZS1wb3B1cFwiPlg8L3NwYW4+YDtcblxuICBmZXRjaE1vdmllRGF0YShtb3ZpZUlkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgcG9wdXAuaW5uZXJIVE1MID0gYFxuICAgIDxzcGFuIGlkPVwiY2xvc2UtcG9wdXBcIj5YPC9zcGFuPlxuICAgIDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cInBvcHVwLWltZ1wiPlxuICAgIDxoMyBjbGFzcz1cInBvcHVwLXRpdGxlXCI+JHtkYXRhLm5hbWV9PC9oMz5cbiAgICA8dGFibGU+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8Yj5wcmVtaWVyZWQ6PC9iPiAke2RhdGEucHJlbWllcmVkfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+RW5kZWQ6PC9iPiAke2RhdGEuZW5kZWR9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+TGFuZ3VhZ2U6PC9iPiAke2RhdGEubGFuZ3VhZ2V9XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8Yj5UeXBlOjwvYj4gJHtkYXRhLnR5cGV9XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGFibGU+XG4gICAgPGgzIGNsYXNzPVwiY29tbWVudC10aXRsZVwiPlxuICAgIENvbW1lbnRzKDxzcGFuIGNsYXNzPVwidG90YWwtY29tbWVudHNcIj4wPC9zcGFuPilcbiAgICA8L2gzPlxuICAgIDx1bCBjbGFzcz1cImNvbW1lbnRzXCI+XG4gICAgICBmZXRjaGluZyBjb21tZW50cy4uLlxuICAgIDwvdWw+XG4gICAgPGZvcm0gY2xhc3M9XCJjb20tZm9ybVwiPlxuICAgICAgPGgyPkFkZCBhIGNvbW1lbnQ8L2gyPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDx0ZXh0YXJlYSBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiBuYW1lPVwiY29tbWVudFwiIHJlcXVpcmVkIG1pbmxlbmd0aD1cIjFcIj48L3RleHRhcmVhPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIGA7XG5cbiAgICBlbmFibGVDbG9zZVBvcHVwKCk7XG4gICAgc2hvd0NvbW1lbnRzKG1vdmllSWQpO1xuXG4gICAgY29uc3QgZm9ybSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5jb20tZm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHVzZXIgPSBmb3JtLmVsZW1lbnRzLnVzZXJuYW1lLnZhbHVlO1xuICAgICAgY29uc3QgbXNnID0gZm9ybS5lbGVtZW50cy5jb21tZW50LnZhbHVlO1xuICAgICAgYWRkQ29tbWVudCh7XG4gICAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgICBjb21tZW50OiBtc2csXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgc2hvd0NvbW1lbnRzKG1vdmllSWQpO1xuICAgICAgICB1cGRhdGVUb3RhbENvbW1lbnRzQ291bnQobW92aWVJZCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgZW5hYmxlQ2xvc2VQb3B1cCgpO1xufTtcbmNvbnN0IGVuYWJsZUNvbW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBjb21tZW50QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb21tZW50LWJ0bicpO1xuICBjb21tZW50QnRucy5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgIG1vdmllLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IG1vdmllLmdldEF0dHJpYnV0ZSgnbW92aWVfaWQnKTtcbiAgICAgIGRpc3BsYXlNb3ZpZVBvcHVwKG1vdmllSWQpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuYWJsZUNvbW1lbnRzOyIsImNvbnN0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jYXJkcy1jb250YWluZXInKTtcblxuY29uc3QgY3JlYXRlQ2FyZEl0ZW0gPSAoaXRlbSwgaXRlbUxpa2UgPSAwKSA9PiB7XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScpO1xuICBjb25zdCBjYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgY29uc3QgY29tbWVudEFuZExpa2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCByZXNlcnZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNvbnN0IHBMaWtlc1RhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbGlrZUhlYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuXG4gIGNhcmRDb250YWluZXIuYXBwZW5kKGNhcmRFbGVtZW50KTtcbiAgY2FyZEVsZW1lbnQuYXBwZW5kKGNhcmRJbWFnZSwgY2FyZFRpdGxlLCBjb21tZW50QW5kTGlrZURpdik7XG4gIGNhcmRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcbiAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcbiAgbW92aWVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtb3ZpZS10aXRsZScpO1xuICBsaWtlSGVhcnQuY2xhc3NMaXN0LmFkZCgnaGVhcnQnKTtcbiAgbGlrZUhlYXJ0LmlkID0gaXRlbS5pZDtcbiAgY29tbWVudEFuZExpa2VEaXYuYXBwZW5kKG1vdmllVGl0bGUsIGxpa2VIZWFydCwgcExpa2VzVGFnLCBjb21tZW50QnRuKTtcbiAgcExpa2VzVGFnLmNsYXNzTGlzdC5hZGQoJ3AtbGlrZScpO1xuICBjb21tZW50QW5kTGlrZURpdi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWFuZC1saWtlJyk7XG4gIGNvbW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idG4nKTtcbiAgLy8gcmVzZXJ2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWJ0bicpO1xuICByZXNlcnZlQnRuLmNsYXNzTGlzdC5hZGQoJ3Jlc2VydmUtYnRuJyk7XG4gIGNvbW1lbnRCdG4uc2V0QXR0cmlidXRlKCdtb3ZpZV9pZCcsIGl0ZW0uaWQpO1xuICByZXNlcnZlQnRuLnNldEF0dHJpYnV0ZSgnbW92aWVfaWQnLCBpdGVtLmlkKTtcbiAgY29tbWVudEJ0bi5pZCA9IGl0ZW0uaWQ7XG4gIHJlc2VydmVCdG4uaWQgPSBpdGVtLmlkO1xuICBjb21tZW50QnRuLnRleHRDb250ZW50ID0gJ0NvbW1lbnQnO1xuICByZXNlcnZlQnRuLnRleHRDb250ZW50ID0gJ1Jlc2VydmUnO1xuICBtb3ZpZVRpdGxlLnRleHRDb250ZW50ID0gJ01vdmllIFRpdGxlJztcblxuICBwTGlrZXNUYWcudGV4dENvbnRlbnQgPSBgJHtpdGVtTGlrZX0gbGlrZXNgO1xuICBjYXJkSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZS5tZWRpdW07XG4gIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmRJdGVtOyIsImNvbnN0IHVybDEgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5jb25zdCB1cmwyID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzVleEtNUHJacXllWnl0bkpUZ2dJL2xpa2VzJztcblxuY29uc3QgZmV0Y2hEYXRhID0gKHVybCwgQ29zdHVtU2V0dGluZ3MgPSB7fSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGZldGNoKHVybCwgQ29zdHVtU2V0dGluZ3MpXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldERhdGEgPSAoKSA9PiBmZXRjaERhdGEodXJsMSk7XG5cbmV4cG9ydCBjb25zdCBsaWtlQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzVleEtNUHJacXllWnl0bkpUZ2dJL2xpa2VzJyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZExpa2VzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogaWQgfSksXG4gIH07XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoRGF0YSh1cmwyLCBzZXR0aW5ncylcbiAgICAuY2F0Y2goKGVycikgPT4gZXJyKTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhdGE7IiwiY29uc3QgdXJsMSA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcblxuY29uc3QgZ2V0TW92aWVUaXRsZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbW92aWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZpZS10aXRsZScpO1xuICBjb25zdCB0aXRsZUFycmF5ID0gW107XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsMSk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGRhdGEuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICB0aXRsZUFycmF5LnB1c2godGl0bGUubmFtZSk7XG4gICAgbW92aWVUaXRsZS5mb3JFYWNoKChtb3ZpZSwgaW5kZXgpID0+IHtcbiAgICAgIG1vdmllLmlubmVySFRNTCA9IHRpdGxlQXJyYXlbaW5kZXhdO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRNb3ZpZVRpdGxlOyIsImV4cG9ydCBjb25zdCBpdGVtc0NvdW50ZXIgPSAoZGF0YSkgPT4gZGF0YS5sZW5ndGg7XG5cbmNvbnN0IGRpc3BsYXlUdlNob3dudW1iZXJzID0gKGRhdGEpID0+IHtcbiAgY29uc3QgVHZTaG93TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50di1zaG93LWxpbmsnKTtcbiAgY29uc3QgY291bnRlciA9IGl0ZW1zQ291bnRlcihkYXRhKTtcbiAgVHZTaG93TGluay5pbm5lckhUTUwgPSBgVG90YWwgTW92aWVzKCR7Y291bnRlcn0pYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUdlNob3dudW1iZXJzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0IGdldERhdGEsIHsgYWRkTGlrZXMsIGxpa2VDb3VudCB9IGZyb20gJy4vbW9kdWxlcy9mZXRjaEFwaXMuanMnO1xuaW1wb3J0IGNyZWF0ZUNhcmRJdGVtIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5SXRlbXMuanMnO1xuaW1wb3J0IGRpc3BsYXlUdlNob3dudW1iZXJzIGZyb20gJy4vbW9kdWxlcy9pdGVtQ291bnRlci5qcyc7XG5pbXBvcnQgZ2V0TW92aWVUaXRsZSBmcm9tICcuL21vZHVsZXMvZ2V0TW92aWVzLmpzJztcbmltcG9ydCBlbmFibGVDb21tZW50cyBmcm9tICcuL21vZHVsZXMvY29tbWVudFBvcC5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5oZWFydCcpKSB7XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gICAgY29uc3QgaWQgPSBOdW1iZXIoZS50YXJnZXQuaWQpO1xuICAgIGNvbnN0IGxpa2UgPSBOdW1iZXIoZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQubWF0Y2goL1swLTldL2cpLmpvaW4oJycpKTtcbiAgICBlLnRhcmdldC5uZXh0U2libGluZy50ZXh0Q29udGVudCA9IGAke2xpa2UgKyAxfSBsaWtlc2A7XG4gICAgYXdhaXQgYWRkTGlrZXMoaWQpO1xuICB9XG59KTtcblxuY29uc3QgbG9hZGluZyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jYXJkcy1jb250YWluZXInKTtcbiAgY29uc3QgbG9hZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvYWREaXYuY2xhc3NMaXN0LmFkZCgnbG9hZGluZycpO1xuICBtYXNrLmNsYXNzTGlzdC5hZGQoJ21hc2snKTtcbiAgY2FyZHNDb250YWluZXIuYXBwZW5kKG1hc2ssIGxvYWREaXYpO1xufTtcblxuY29uc3QgcmVtb3ZlTG9kaW5nID0gKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnJlbW92ZSgpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzaycpLnJlbW92ZSgpO1xufTtcblxuY29uc3QgcmVuZGVySXRlbXMgPSBhc3luYyAoc2hvd0NvdW50ID0gMTYpID0+IHtcbiAgbG9hZGluZygpO1xuICBjb25zdCBpdGVtc0RhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG4gIGNvbnN0IHNob3dMZXNzID0gaXRlbXNEYXRhLnNsaWNlKDAsIHNob3dDb3VudCk7XG4gIGRpc3BsYXlUdlNob3dudW1iZXJzKHNob3dMZXNzKTtcbiAgcmVtb3ZlTG9kaW5nKCk7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgbGlrZUNvdW50KCk7XG4gIHNob3dMZXNzLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICBsZXQgbnVtTGlrZXMgPSAwO1xuICAgIG51bUxpa2VzID0gbGlrZXMuZmlsdGVyKChsaWtlKSA9PiBsaWtlLml0ZW1faWQgPT09IHNob3dMZXNzW2ldLmlkKTtcbiAgICBpZiAobnVtTGlrZXMubGVuZ3RoID4gMCkge1xuICAgICAgY3JlYXRlQ2FyZEl0ZW0oc2hvd0xlc3NbaV0sIG51bUxpa2VzWzBdLmxpa2VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3JlYXRlQ2FyZEl0ZW0oc2hvd0xlc3NbaV0sIDApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5yZW5kZXJJdGVtcygpLnRoZW4oKCkgPT4ge1xuICBnZXRNb3ZpZVRpdGxlKCk7XG4gIGVuYWJsZUNvbW1lbnRzKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=