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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\na {\n  color: aliceblue;\n  text-decoration: none;\n}\n\n.link-logo {\n  border: 3px solid #fff;\n  height: 82px;\n  width: 82px;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nheader {\n  background-color: red;\n  height: max-content;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n\n.link-lists {\n  display: flex;\n  gap: 40px;\n  margin-right: 80px;\n  list-style: none;\n}\n\n.link-lists > li a {\n  list-style: none;\n  text-decoration: none;\n  color: #fff;\n}\n\n.strng {\n  color: red;\n}\n\n/* Display item to the home page */\n.grid-cards-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 6em;\n  gap: 30px;\n  padding: 50px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem 0;\n  transition: 500ms ease-in;\n  border: 2px solid red;\n  background-color: #000;\n}\n\n.welcome {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.item:hover {\n  transform: scale(1.05);\n}\n\n.show-image {\n  width: 210px;\n  height: 295px;\n}\n\n.card-title {\n  font-family: var(--main-font);\n  font-size: 1.2em;\n  color: #fff;\n}\n\n.movie-title {\n  text-align: center;\n  width: 200px;\n}\n\n.comment-btn,\n.reserve-btn {\n  border: 2px solid;\n  padding: 0.4em;\n  font-family: var(--main-font);\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.comment-btn:hover {\n  background-color: red;\n  color: #fff;\n}\n\n.comment-and-like {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.p-like {\n  color: #fff;\n  margin-top: -25px;\n}\n\n.heart {\n  width: 100px;\n  height: 100px;\n  background:\n    url(\"https://cssanimation.rocks/images/posts/steps/heart.png\")\n    no-repeat;\n  background-position: 0 0;\n  cursor: pointer;\n  transition: background-position 1s steps(28);\n  transition-duration: 0s;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.heart.is-active {\n  transition-duration: 1s;\n  background-position: -2800px 0;\n}\n\n.loading {\n  width: 160px;\n  height: 160px;\n  border-radius: 150px;\n  border: 15px aquamarine;\n  border-top-color: rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -80px;\n  margin-left: -80px;\n  animation: loading 1.2s linear infinite;\n  z-index: 999999999;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.mask {\n  background: rgba(0, 0, 0, 0.918);\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 99999999;\n}\n\n.load-more {\n  padding: 8px;\n  background-color: aquamarine;\n  margin: 5px auto;\n  width: 40%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n}\n\n/* //comment popup// */\n.movie-popup {\n  display: none;\n  background: bisque;\n  position: fixed;\n  z-index: 9999;\n  top: 30px;\n  bottom: 30px;\n  right: 30px;\n  left: 30px;\n  overflow: auto;\n}\n\nh2 {\n  margin-left: 275px;\n  padding-top: 30px;\n}\n\n.movie-popup .popup-title {\n  text-align: center;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.movie-popup table {\n  width: 70%;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.popup-img {\n  display: block;\n  margin: 0 auto;\n}\n\n.comments {\n  margin-left: 90px;\n  list-style-type: none;\n}\n\n.comment-title {\n  margin-left: 90px;\n  padding-top: 30px;\n}\n\n#close-popup {\n  display: block;\n  width: 100%;\n  text-align: right;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 20px 30px 0 0;\n}\n\n.com-form {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-bottom: 20px;\n  margin-left: 130px;\n  align-items: center;\n}\n\n.com-form input,\n.com-form button {\n  width: 300px;\n  height: 35px;\n  padding-left: 10px;\n  outline: none;\n  background-color: white;\n  color: rgb(0, 0, 0);\n}\n\n.com-form button {\n  box-shadow: 2px 2px 4px 0;\n  cursor: pointer;\n}\n\n.com-form textarea {\n  width: 400px;\n  height: 155px;\n  outline: none;\n  padding: 5px;\n}\n\n.com-form h2 {\n  text-align: center;\n  display: contents;\n}\n\ntd {\n  padding-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\nfooter {\n  background-color: #000;\n  color: #fff;\n  border-top: 2px solid;\n  text-align: center;\n  padding: 5rem 0;\n  margin: 2rem 0 0 0;\n  font-size: 1.5rem;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@400;500&family=Roboto&display=swap');\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\na {\n  color: aliceblue;\n  text-decoration: none;\n}\n\n.link-logo {\n  border: 3px solid #fff;\n  height: 82px;\n  width: 82px;\n  padding: 10px;\n  border-radius: 50%;\n}\n\nheader {\n  background-color: red;\n  height: max-content;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.navbar {\n  display: flex;\n  justify-content: space-between;\n  align-content: center;\n  padding: 20px;\n  font-size: 1.2rem;\n}\n\n.link-lists {\n  display: flex;\n  gap: 40px;\n  margin-right: 80px;\n  list-style: none;\n}\n\n.link-lists > li a {\n  list-style: none;\n  text-decoration: none;\n  color: #fff;\n}\n\n.strng {\n  color: red;\n}\n\n/* Display item to the home page */\n.grid-cards-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 6em;\n  gap: 30px;\n  padding: 50px;\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.6rem 0;\n  transition: 500ms ease-in;\n  border: 2px solid red;\n  background-color: #000;\n}\n\n.welcome {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 30px;\n}\n\n.item:hover {\n  transform: scale(1.05);\n}\n\n.show-image {\n  width: 210px;\n  height: 295px;\n}\n\n.card-title {\n  font-family: var(--main-font);\n  font-size: 1.2em;\n  color: #fff;\n}\n\n.movie-title {\n  text-align: center;\n  width: 200px;\n}\n\n.comment-btn,\n.reserve-btn {\n  border: 2px solid;\n  padding: 0.4em;\n  font-family: var(--main-font);\n  font-weight: bold;\n  color: #fff;\n  cursor: pointer;\n  background-color: transparent;\n  border-radius: 8px;\n  margin-bottom: 20px;\n}\n\n.comment-btn:hover {\n  background-color: red;\n  color: #fff;\n}\n\n.comment-and-like {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.p-like {\n  color: #fff;\n  margin-top: -25px;\n}\n\n.heart {\n  width: 100px;\n  height: 100px;\n  background:\n    url(\"https://cssanimation.rocks/images/posts/steps/heart.png\")\n    no-repeat;\n  background-position: 0 0;\n  cursor: pointer;\n  transition: background-position 1s steps(28);\n  transition-duration: 0s;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.heart.is-active {\n  transition-duration: 1s;\n  background-position: -2800px 0;\n}\n\n.loading {\n  width: 160px;\n  height: 160px;\n  border-radius: 150px;\n  border: 15px aquamarine;\n  border-top-color: rgba(0, 0, 0, 0.3);\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -80px;\n  margin-left: -80px;\n  animation: loading 1.2s linear infinite;\n  z-index: 999999999;\n}\n\n@keyframes loading {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.mask {\n  background: rgba(0, 0, 0, 0.918);\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  z-index: 99999999;\n}\n\n.load-more {\n  padding: 8px;\n  background-color: aquamarine;\n  margin: 5px auto;\n  width: 40%;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n}\n\n/* //comment popup// */\n.movie-popup {\n  display: none;\n  background: bisque;\n  position: fixed;\n  z-index: 9999;\n  top: 30px;\n  bottom: 30px;\n  right: 30px;\n  left: 30px;\n  overflow: auto;\n}\n\nh2 {\n  margin-left: 275px;\n  padding-top: 30px;\n}\n\n.movie-popup .popup-title {\n  text-align: center;\n  width: 100%;\n  margin: 20px 0;\n}\n\n.movie-popup table {\n  width: 70%;\n  margin: 0 auto;\n  text-align: left;\n}\n\n.popup-img {\n  display: block;\n  margin: 0 auto;\n}\n\n.comments {\n  margin-left: 90px;\n  list-style-type: none;\n}\n\n.comment-title {\n  margin-left: 90px;\n  padding-top: 30px;\n}\n\n#close-popup {\n  display: block;\n  width: 100%;\n  text-align: right;\n  cursor: pointer;\n  font-size: 18px;\n  font-weight: 900;\n  padding: 20px 30px 0 0;\n}\n\n.com-form {\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  margin-bottom: 20px;\n  margin-left: 130px;\n  align-items: center;\n}\n\n.com-form input,\n.com-form button {\n  width: 300px;\n  height: 35px;\n  padding-left: 10px;\n  outline: none;\n  background-color: white;\n  color: rgb(0, 0, 0);\n}\n\n.com-form button {\n  box-shadow: 2px 2px 4px 0;\n  cursor: pointer;\n}\n\n.com-form textarea {\n  width: 400px;\n  height: 155px;\n  outline: none;\n  padding: 5px;\n}\n\n.com-form h2 {\n  text-align: center;\n  display: contents;\n}\n\ntd {\n  padding-bottom: 1rem;\n  font-size: 1.5rem;\n}\n\nfooter {\n  background-color: #000;\n  color: #fff;\n  border-top: 2px solid;\n  text-align: center;\n  padding: 5rem 0;\n  margin: 2rem 0 0 0;\n  font-size: 1.5rem;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxL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QWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQzJDO0FBQ2Y7QUFDSztBQUNUO0FBQ0U7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsVUFBVTtBQUNwRCxVQUFVLCtEQUFRO0FBQ2xCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUVBQU87QUFDakM7QUFDQSxFQUFFLG1FQUFvQjtBQUN0QjtBQUNBLHNCQUFzQixnRUFBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0VBQWM7QUFDcEIsTUFBTTtBQUNOLE1BQU0sb0VBQWM7QUFDcEI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxFQUFFLGlFQUFhO0FBQ2YsRUFBRSxrRUFBYztBQUNoQixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnRlci5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvY29tbWVudFBvcC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvZGlzcGxheUl0ZW1zLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3QvLi9zcmMvbW9kdWxlcy9mZXRjaEFwaXMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9tb2R1bGVzL2dldE1vdmllcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0Ly4vc3JjL21vZHVsZXMvaXRlbUNvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGluay1sb2dvIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBoZWlnaHQ6IDgycHg7XFxuICB3aWR0aDogODJweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxpbmstbGlzdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saW5rLWxpc3RzID4gbGkgYSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zdHJuZyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBEaXNwbGF5IGl0ZW0gdG8gdGhlIGhvbWUgcGFnZSAqL1xcbi5ncmlkLWNhcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbi10b3A6IDZlbTtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjZyZW0gMDtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW47XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uc2hvdy1pbWFnZSB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDI5NXB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vdmllLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuLFxcbi5yZXNlcnZlLWJ0biB7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb21tZW50LWFuZC1saWtlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnAtbGlrZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xcbn1cXG5cXG4uaGVhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6XFxuICAgIHVybChcXFwiaHR0cHM6Ly9jc3NhbmltYXRpb24ucm9ja3MvaW1hZ2VzL3Bvc3RzL3N0ZXBzL2hlYXJ0LnBuZ1xcXCIpXFxuICAgIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMXMgc3RlcHMoMjgpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmhlYXJ0LmlzLWFjdGl2ZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yODAwcHggMDtcXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgYm9yZGVyOiAxNXB4IGFxdWFtYXJpbmU7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtODBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcXG4gIGFuaW1hdGlvbjogbG9hZGluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5OTtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLm1hc2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkxOCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTk5OTtcXG59XFxuXFxuLmxvYWQtbW9yZSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC8vY29tbWVudCBwb3B1cC8vICovXFxuLm1vdmllLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBiaXNxdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgdG9wOiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBsZWZ0OiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNzVweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4ubW92aWUtcG9wdXAgLnBvcHVwLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5tb3ZpZS1wb3B1cCB0YWJsZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuI2Nsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHggMCAwO1xcbn1cXG5cXG4uY29tLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbS1mb3JtIGlucHV0LFxcbi5jb20tZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbS1mb3JtIGJ1dHRvbiB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tLWZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxNTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb20tZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxudGQge1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtF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aEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogYWxpY2VibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4ubGluay1sb2dvIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBoZWlnaHQ6IDgycHg7XFxuICB3aWR0aDogODJweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmxpbmstbGlzdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNDBweDtcXG4gIG1hcmdpbi1yaWdodDogODBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saW5rLWxpc3RzID4gbGkgYSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5zdHJuZyB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBEaXNwbGF5IGl0ZW0gdG8gdGhlIGhvbWUgcGFnZSAqL1xcbi5ncmlkLWNhcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIG1hcmdpbi10b3A6IDZlbTtcXG4gIGdhcDogMzBweDtcXG4gIHBhZGRpbmc6IDUwcHg7XFxufVxcblxcbi5pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjZyZW0gMDtcXG4gIHRyYW5zaXRpb246IDUwMG1zIGVhc2UtaW47XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4ud2VsY29tZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG5cXG4uaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uc2hvdy1pbWFnZSB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IDI5NXB4O1xcbn1cXG5cXG4uY2FyZC10aXRsZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm1vdmllLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmNvbW1lbnQtYnRuLFxcbi5yZXNlcnZlLWJ0biB7XFxuICBib3JkZXI6IDJweCBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuNGVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1haW4tZm9udCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jb21tZW50LWFuZC1saWtlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnAtbGlrZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xcbn1cXG5cXG4uaGVhcnQge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQ6XFxuICAgIHVybChcXFwiaHR0cHM6Ly9jc3NhbmltYXRpb24ucm9ja3MvaW1hZ2VzL3Bvc3RzL3N0ZXBzL2hlYXJ0LnBuZ1xcXCIpXFxuICAgIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMXMgc3RlcHMoMjgpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLmhlYXJ0LmlzLWFjdGl2ZSB7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0yODAwcHggMDtcXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgYm9yZGVyOiAxNXB4IGFxdWFtYXJpbmU7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtODBweDtcXG4gIG1hcmdpbi1sZWZ0OiAtODBweDtcXG4gIGFuaW1hdGlvbjogbG9hZGluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIHotaW5kZXg6IDk5OTk5OTk5OTtcXG59XFxuXFxuQGtleWZyYW1lcyBsb2FkaW5nIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gIH1cXG59XFxuXFxuLm1hc2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjkxOCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiA5OTk5OTk5OTtcXG59XFxuXFxuLmxvYWQtbW9yZSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcbiAgbWFyZ2luOiA1cHggYXV0bztcXG4gIHdpZHRoOiA0MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIC8vY29tbWVudCBwb3B1cC8vICovXFxuLm1vdmllLXBvcHVwIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBiaXNxdWU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk5O1xcbiAgdG9wOiAzMHB4O1xcbiAgYm90dG9tOiAzMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxuICBsZWZ0OiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbmgyIHtcXG4gIG1hcmdpbi1sZWZ0OiAyNzVweDtcXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xcbn1cXG5cXG4ubW92aWUtcG9wdXAgLnBvcHVwLXRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5tb3ZpZS1wb3B1cCB0YWJsZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucG9wdXAtaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBtYXJnaW4tbGVmdDogOTBweDtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG59XFxuXFxuI2Nsb3NlLXBvcHVwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAyMHB4IDMwcHggMCAwO1xcbn1cXG5cXG4uY29tLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbS1mb3JtIGlucHV0LFxcbi5jb20tZm9ybSBidXR0b24ge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmNvbS1mb3JtIGJ1dHRvbiB7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDRweCAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tLWZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgaGVpZ2h0OiAxNTVweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5jb20tZm9ybSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxudGQge1xcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVyZW0gMDtcXG4gIG1hcmdpbjogMnJlbSAwIDAgMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjb21tZW50c0VuZHBvaW50ID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzVleEtNUHJacXllWnl0bkpUZ2dJL2NvbW1lbnRzJztcbmNvbnN0IGZldGNoTW92aWVDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Y29tbWVudHNFbmRwb2ludH0/aXRlbV9pZD0ke21vdmllSWR9YCkuY2F0Y2goKGVycikgPT4gZXJyKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIHRvIGZldGNoIHRvdGFsIG51bWJlciBvZiBhdmFpbGFibGUgY29tbWVudHMgZm9yIGEgbW92aWUgd2loIGEgc3BlY2lmaWMgSURcbmNvbnN0IGdldFRvdGFsQ29tbWVudHMgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaE1vdmllQ29tbWVudHMobW92aWVJZClcbiAgICAudGhlbigoZGF0YSkgPT4gKCFkYXRhLmVycm9yID8gZGF0YS5sZW5ndGggOiAwKSlcbiAgICAuY2F0Y2goKCkgPT4gMCk7XG4gIHJldHVybiByZXM7XG59O1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtcG9wdXAnKTtcblxuLy8gVXBkYXRlIFVJIHRvdGFsIG51bWJlciBvZiBjb21tZW50c1xuY29uc3QgdXBkYXRlVG90YWxDb21tZW50c0NvdW50ID0gKG1vdmllSWQpID0+IHtcbiAgZ2V0VG90YWxDb21tZW50cyhtb3ZpZUlkKS50aGVuKCh0b3RhbCkgPT4ge1xuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1jb21tZW50cycpLmlubmVySFRNTCA9IHRvdGFsO1xuICB9KTtcbn07XG5jb25zdCBjb21tZW50Q291bnRlciA9IChkYXRhKSA9PiBkYXRhLmxlbmd0aDtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmNvbW1lbnQtYnRuJykpIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hNb3ZpZUNvbW1lbnRzKGUudGFyZ2V0LmlkKTtcbiAgICBjb25zdCBjb21tZW50TnVtYmVyID0gY29tbWVudENvdW50ZXIoZGF0YSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvdGFsLWNvbW1lbnRzJykudGV4dENvbnRlbnQgPSBjb21tZW50TnVtYmVyIHx8IDA7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVUb3RhbENvbW1lbnRzQ291bnQ7XG5leHBvcnQgeyBmZXRjaE1vdmllQ29tbWVudHMsIGNvbW1lbnRDb3VudGVyIH07IiwiaW1wb3J0IHVwZGF0ZVRvdGFsQ29tbWVudHNDb3VudCwgeyBmZXRjaE1vdmllQ29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRDb3VudGVyLmpzJztcblxuY29uc3QgdXJsMSA9ICdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJztcbmNvbnN0IGNvbW1lbnRzRW5kcG9pbnQgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvNWV4S01QclpxeWVaeXRuSlRnZ0kvY29tbWVudHMnO1xuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtcG9wdXAnKTtcblxuY29uc3QgZ2V0ID0gKHVybCkgPT4gZmV0Y2godXJsKVxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAudGhlbigoZGF0YSkgPT4gZGF0YSlcbiAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuXG5jb25zdCBwb3N0ID0gKHVybCwgcGFyYW1zID0ge30pID0+IGZldGNoKHVybCwge1xuICBtZXRob2Q6ICdQT1NUJyxcbiAgaGVhZGVyczoge1xuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIH0sXG4gIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcmFtcyksXG59KS50aGVuKChyZXMpID0+IHJlcy50ZXh0KCkpXG4gIC50aGVuKChkYXRhKSA9PiAoZGF0YS5lcnJvclxuICAgID8geyBlcnJvcjogdHJ1ZSwgaW5mbzogZGF0YSB9XG4gICAgOiB7IGVycm9yOiBmYWxzZSwgaW5mbzogZGF0YSB9KSlcbiAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IHRydWUsIGluZm86IGVycm9yIH0pKTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChwYXJhbXMpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwb3N0KGNvbW1lbnRzRW5kcG9pbnQsIHBhcmFtcyk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5jb25zdCBmZXRjaE1vdmllRGF0YSA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0KGAke3VybDF9LyR7bW92aWVJZH1gKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZGlzcGxheU1vdmllQ29tbWVudHMgPSAoZGF0YSkgPT4ge1xuICBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKS5pbm5lckhUTUwgPSBkYXRhO1xufTtcbmNvbnN0IGVuYWJsZUNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1wb3B1cCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcG9wdXAuaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xufTtcblxuY29uc3Qgc2hvd0NvbW1lbnRzID0gKG1vdmllSWQpID0+IHtcbiAgZmV0Y2hNb3ZpZUNvbW1lbnRzKG1vdmllSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuZXJyb3IpIHtcbiAgICAgIGxldCBjb21tZW50cyA9ICcnO1xuICAgICAgZGF0YS5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgICAgIGNvbW1lbnRzICs9IGA8bGk+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9ICR7Y29tbWVudC51c2VybmFtZX06ICR7Y29tbWVudC5jb21tZW50fTwvbGk+YDtcbiAgICAgIH0pO1xuICAgICAgZGlzcGxheU1vdmllQ29tbWVudHMoY29tbWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkaXNwbGF5TW92aWVDb21tZW50cygnTm8gY29tbWVudHMgaGF2ZSBiZWVuIHBvc3RlZCB5ZXQuIEJlIHRoZSBmaXJzdCB0byB3cml0ZSBzb21ldGhpbmcuLi4nKTtcbiAgICB9XG4gIH0pO1xufTtcbmNvbnN0IGRpc3BsYXlNb3ZpZVBvcHVwID0gKG1vdmllSWQpID0+IHtcbiAgcG9wdXAuaW5uZXJIVE1MID0gYExvYWRpbmcuLi48YnI+XG4gIDxzcGFuIGlkPVwiY2xvc2UtcG9wdXBcIj5YPC9zcGFuPmA7XG5cbiAgZmV0Y2hNb3ZpZURhdGEobW92aWVJZCkudGhlbigoZGF0YSkgPT4ge1xuICAgIHBvcHVwLmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBpZD1cImNsb3NlLXBvcHVwXCI+WDwvc3Bhbj5cbiAgICA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZS5tZWRpdW19XCIgY2xhc3M9XCJwb3B1cC1pbWdcIj5cbiAgICA8aDMgY2xhc3M9XCJwb3B1cC10aXRsZVwiPiR7ZGF0YS5uYW1lfTwvaDM+XG4gICAgPHRhYmxlPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+cHJlbWllcmVkOjwvYj4gJHtkYXRhLnByZW1pZXJlZH1cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxiPkVuZGVkOjwvYj4gJHtkYXRhLmVuZGVkfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxiPkxhbmd1YWdlOjwvYj4gJHtkYXRhLmxhbmd1YWdlfVxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+VHlwZTo8L2I+ICR7ZGF0YS50eXBlfVxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICAgIDxoMyBjbGFzcz1cImNvbW1lbnQtdGl0bGVcIj5cbiAgICBDb21tZW50cyg8c3BhbiBjbGFzcz1cInRvdGFsLWNvbW1lbnRzXCI+MDwvc3Bhbj4pXG4gICAgPC9oMz5cbiAgICA8dWwgY2xhc3M9XCJjb21tZW50c1wiPlxuICAgICAgZmV0Y2hpbmcgY29tbWVudHMuLi5cbiAgICA8L3VsPlxuICAgIDxmb3JtIGNsYXNzPVwiY29tLWZvcm1cIj5cbiAgICAgIDxoMj5BZGQgYSBjb21tZW50PC9oMj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCIgbmFtZT1cImNvbW1lbnRcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICBgO1xuXG4gICAgZW5hYmxlQ2xvc2VQb3B1cCgpO1xuICAgIHNob3dDb21tZW50cyhtb3ZpZUlkKTtcblxuICAgIGNvbnN0IGZvcm0gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcuY29tLWZvcm0nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VyID0gZm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IG1zZyA9IGZvcm0uZWxlbWVudHMuY29tbWVudC52YWx1ZTtcbiAgICAgIGFkZENvbW1lbnQoe1xuICAgICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgY29tbWVudDogbXNnLFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHNob3dDb21tZW50cyhtb3ZpZUlkKTtcbiAgICAgICAgdXBkYXRlVG90YWxDb21tZW50c0NvdW50KG1vdmllSWQpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGVuYWJsZUNsb3NlUG9wdXAoKTtcbn07XG5jb25zdCBlbmFibGVDb21tZW50cyA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudC1idG4nKTtcbiAgY29tbWVudEJ0bnMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICBtb3ZpZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBtb3ZpZS5nZXRBdHRyaWJ1dGUoJ21vdmllX2lkJyk7XG4gICAgICBkaXNwbGF5TW92aWVQb3B1cChtb3ZpZUlkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlbmFibGVDb21tZW50czsiLCJjb25zdCBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtY2FyZHMtY29udGFpbmVyJyk7XG5cbmNvbnN0IGNyZWF0ZUNhcmRJdGVtID0gKGl0ZW0sIGl0ZW1MaWtlID0gMCkgPT4ge1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgY29uc3QgY2FyZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gIGNvbnN0IGNvbW1lbnRBbmRMaWtlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29uc3QgcmVzZXJ2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjb25zdCBwTGlrZXNUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGxpa2VIZWFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtb3ZpZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcblxuICBjYXJkQ29udGFpbmVyLmFwcGVuZChjYXJkRWxlbWVudCk7XG4gIGNhcmRFbGVtZW50LmFwcGVuZChjYXJkSW1hZ2UsIGNhcmRUaXRsZSwgY29tbWVudEFuZExpa2VEaXYpO1xuICBjYXJkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG4gIG1vdmllVGl0bGUuY2xhc3NMaXN0LmFkZCgnbW92aWUtdGl0bGUnKTtcbiAgbGlrZUhlYXJ0LmNsYXNzTGlzdC5hZGQoJ2hlYXJ0Jyk7XG4gIGxpa2VIZWFydC5pZCA9IGl0ZW0uaWQ7XG4gIGNvbW1lbnRBbmRMaWtlRGl2LmFwcGVuZChtb3ZpZVRpdGxlLCBsaWtlSGVhcnQsIHBMaWtlc1RhZywgY29tbWVudEJ0bik7XG4gIHBMaWtlc1RhZy5jbGFzc0xpc3QuYWRkKCdwLWxpa2UnKTtcbiAgY29tbWVudEFuZExpa2VEaXYuY2xhc3NMaXN0LmFkZCgnY29tbWVudC1hbmQtbGlrZScpO1xuICBjb21tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnQtYnRuJyk7XG4gIC8vIHJlc2VydmVCdG4uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idG4nKTtcbiAgcmVzZXJ2ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZXNlcnZlLWJ0bicpO1xuICBjb21tZW50QnRuLnNldEF0dHJpYnV0ZSgnbW92aWVfaWQnLCBpdGVtLmlkKTtcbiAgcmVzZXJ2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ21vdmllX2lkJywgaXRlbS5pZCk7XG4gIGNvbW1lbnRCdG4uaWQgPSBpdGVtLmlkO1xuICByZXNlcnZlQnRuLmlkID0gaXRlbS5pZDtcbiAgY29tbWVudEJ0bi50ZXh0Q29udGVudCA9ICdDb21tZW50JztcbiAgcmVzZXJ2ZUJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZlJztcbiAgbW92aWVUaXRsZS50ZXh0Q29udGVudCA9ICdNb3ZpZSBUaXRsZSc7XG5cbiAgcExpa2VzVGFnLnRleHRDb250ZW50ID0gYCR7aXRlbUxpa2V9IGxpa2VzYDtcbiAgY2FyZEltYWdlLnNyYyA9IGl0ZW0uaW1hZ2UubWVkaXVtO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDYXJkSXRlbTsiLCJjb25zdCB1cmwxID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3QgdXJsMiA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy81ZXhLTVByWnF5ZVp5dG5KVGdnSS9saWtlcyc7XG5cbmNvbnN0IGZldGNoRGF0YSA9ICh1cmwsIENvc3R1bVNldHRpbmdzID0ge30pID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaCh1cmwsIENvc3R1bVNldHRpbmdzKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXREYXRhID0gKCkgPT4gZmV0Y2hEYXRhKHVybDEpO1xuXG5leHBvcnQgY29uc3QgbGlrZUNvdW50ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy81ZXhLTVByWnF5ZVp5dG5KVGdnSS9saWtlcycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRMaWtlcyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICB9O1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaERhdGEodXJsMiwgc2V0dGluZ3MpXG4gICAgLmNhdGNoKChlcnIpID0+IGVycik7XG4gIHJldHVybiByZXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXREYXRhOyIsImNvbnN0IHVybDEgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5cbmNvbnN0IGdldE1vdmllVGl0bGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vdmllVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW92aWUtdGl0bGUnKTtcbiAgY29uc3QgdGl0bGVBcnJheSA9IFtdO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybDEpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBkYXRhLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgdGl0bGVBcnJheS5wdXNoKHRpdGxlLm5hbWUpO1xuICAgIG1vdmllVGl0bGUuZm9yRWFjaCgobW92aWUsIGluZGV4KSA9PiB7XG4gICAgICBtb3ZpZS5pbm5lckhUTUwgPSB0aXRsZUFycmF5W2luZGV4XTtcbiAgICB9KTtcbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2V0TW92aWVUaXRsZTsiLCJleHBvcnQgY29uc3QgaXRlbXNDb3VudGVyID0gKGRhdGEpID0+IGRhdGEubGVuZ3RoO1xuXG5jb25zdCBkaXNwbGF5VHZTaG93bnVtYmVycyA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IFR2U2hvd0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHYtc2hvdy1saW5rJyk7XG4gIGNvbnN0IGNvdW50ZXIgPSBpdGVtc0NvdW50ZXIoZGF0YSk7XG4gIFR2U2hvd0xpbmsuaW5uZXJIVE1MID0gYFRvdGFsIE1vdmllcygke2NvdW50ZXJ9KWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5VHZTaG93bnVtYmVyczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCBnZXREYXRhLCB7IGFkZExpa2VzLCBsaWtlQ291bnQgfSBmcm9tICcuL21vZHVsZXMvZmV0Y2hBcGlzLmpzJztcbmltcG9ydCBjcmVhdGVDYXJkSXRlbSBmcm9tICcuL21vZHVsZXMvZGlzcGxheUl0ZW1zLmpzJztcbmltcG9ydCBkaXNwbGF5VHZTaG93bnVtYmVycyBmcm9tICcuL21vZHVsZXMvaXRlbUNvdW50ZXIuanMnO1xuaW1wb3J0IGdldE1vdmllVGl0bGUgZnJvbSAnLi9tb2R1bGVzL2dldE1vdmllcy5qcyc7XG5pbXBvcnQgZW5hYmxlQ29tbWVudHMgZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnRQb3AuanMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKCcuaGVhcnQnKSkge1xuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICAgIGNvbnN0IGlkID0gTnVtYmVyKGUudGFyZ2V0LmlkKTtcbiAgICBjb25zdCBsaWtlID0gTnVtYmVyKGUudGFyZ2V0Lm5leHRTaWJsaW5nLnRleHRDb250ZW50Lm1hdGNoKC9bMC05XS9nKS5qb2luKCcnKSk7XG4gICAgZS50YXJnZXQubmV4dFNpYmxpbmcudGV4dENvbnRlbnQgPSBgJHtsaWtlICsgMX0gbGlrZXNgO1xuICAgIGF3YWl0IGFkZExpa2VzKGlkKTtcbiAgfVxufSk7XG5cbmNvbnN0IGxvYWRpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWQtY2FyZHMtY29udGFpbmVyJyk7XG4gIGNvbnN0IGxvYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2FkRGl2LmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgbWFzay5jbGFzc0xpc3QuYWRkKCdtYXNrJyk7XG4gIGNhcmRzQ29udGFpbmVyLmFwcGVuZChtYXNrLCBsb2FkRGl2KTtcbn07XG5cbmNvbnN0IHJlbW92ZUxvZGluZyA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5yZW1vdmUoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hc2snKS5yZW1vdmUoKTtcbn07XG5cbmNvbnN0IHJlbmRlckl0ZW1zID0gYXN5bmMgKHNob3dDb3VudCA9IDE2KSA9PiB7XG4gIGxvYWRpbmcoKTtcbiAgY29uc3QgaXRlbXNEYXRhID0gYXdhaXQgZ2V0RGF0YSgpO1xuICBjb25zdCBzaG93TGVzcyA9IGl0ZW1zRGF0YS5zbGljZSgwLCBzaG93Q291bnQpO1xuICBkaXNwbGF5VHZTaG93bnVtYmVycyhzaG93TGVzcyk7XG4gIHJlbW92ZUxvZGluZygpO1xuICBjb25zdCBsaWtlcyA9IGF3YWl0IGxpa2VDb3VudCgpO1xuICBzaG93TGVzcy5mb3JFYWNoKChlbGVtZW50LCBpKSA9PiB7XG4gICAgbGV0IG51bUxpa2VzID0gMDtcbiAgICBudW1MaWtlcyA9IGxpa2VzLmZpbHRlcigobGlrZSkgPT4gbGlrZS5pdGVtX2lkID09PSBzaG93TGVzc1tpXS5pZCk7XG4gICAgaWYgKG51bUxpa2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNyZWF0ZUNhcmRJdGVtKHNob3dMZXNzW2ldLCBudW1MaWtlc1swXS5saWtlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZUNhcmRJdGVtKHNob3dMZXNzW2ldLCAwKTtcbiAgICB9XG4gIH0pO1xufTtcblxucmVuZGVySXRlbXMoKS50aGVuKCgpID0+IHtcbiAgZ2V0TW92aWVUaXRsZSgpO1xuICBlbmFibGVDb21tZW50cygpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9