/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Poppins:wght@400;500&family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\na {\\n  color: aliceblue;\\n  text-decoration: none;\\n}\\n\\n.link-logo {\\n  border: 3px solid #fff;\\n  height: 82px;\\n  width: 82px;\\n  padding: 10px;\\n  border-radius: 50%;\\n}\\n\\nheader {\\n  background-color: red;\\n  height: max-content;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: space-between;\\n  align-content: center;\\n  padding: 20px;\\n  font-size: 1.2rem;\\n}\\n\\n.link-lists {\\n  display: flex;\\n  gap: 40px;\\n  margin-right: 80px;\\n  list-style: none;\\n}\\n\\n.link-lists > li a {\\n  list-style: none;\\n  text-decoration: none;\\n  color: #fff;\\n}\\n\\n.strng {\\n  color: red;\\n}\\n\\n/* Display item to the home page */\\n.grid-cards-container {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  margin-top: 6em;\\n  gap: 30px;\\n  padding: 50px;\\n}\\n\\n.item {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  gap: 0.6rem 0;\\n  transition: 500ms ease-in;\\n  border: 2px solid red;\\n  background-color: #000;\\n}\\n\\n.welcome {\\n  text-align: center;\\n  font-size: 2rem;\\n  margin-top: 30px;\\n}\\n\\n.item:hover {\\n  transform: scale(1.05);\\n}\\n\\n.show-image {\\n  width: 210px;\\n  height: 295px;\\n}\\n\\n.card-title {\\n  font-family: var(--main-font);\\n  font-size: 1.2em;\\n  color: #fff;\\n}\\n\\n.movie-title {\\n  text-align: center;\\n  width: 200px;\\n}\\n\\n.comment-btn,\\n.reserve-btn {\\n  border: 2px solid;\\n  padding: 0.4em;\\n  font-family: var(--main-font);\\n  font-weight: bold;\\n  color: #fff;\\n  cursor: pointer;\\n  background-color: transparent;\\n  border-radius: 8px;\\n  margin-bottom: 20px;\\n}\\n\\n.comment-btn:hover {\\n  background-color: red;\\n  color: #fff;\\n}\\n\\n.comment-and-like {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.p-like {\\n  color: #fff;\\n  margin-top: -25px;\\n}\\n\\n.heart {\\n  width: 100px;\\n  height: 100px;\\n  background:\\n    url(\\\"https://cssanimation.rocks/images/posts/steps/heart.png\\\")\\n    no-repeat;\\n  background-position: 0 0;\\n  cursor: pointer;\\n  transition: background-position 1s steps(28);\\n  transition-duration: 0s;\\n  margin-bottom: 0;\\n  margin-top: -44px;\\n}\\n\\n.heart.is-active {\\n  transition-duration: 1s;\\n  background-position: -2800px 0;\\n}\\n\\n.loading {\\n  width: 160px;\\n  height: 160px;\\n  border-radius: 150px;\\n  border: 15px aquamarine;\\n  border-top-color: rgba(0, 0, 0, 0.3);\\n  box-sizing: border-box;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  margin-top: -80px;\\n  margin-left: -80px;\\n  animation: loading 1.2s linear infinite;\\n  z-index: 999999999;\\n}\\n\\n@keyframes loading {\\n  0% {\\n    transform: rotate(0deg);\\n  }\\n\\n  100% {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.mask {\\n  background: rgba(0, 0, 0, 0.918);\\n  width: 100%;\\n  height: 100vh;\\n  position: absolute;\\n  z-index: 99999999;\\n}\\n\\n.load-more {\\n  padding: 8px;\\n  background-color: aquamarine;\\n  margin: 5px auto;\\n  width: 40%;\\n  text-align: center;\\n  display: flex;\\n  justify-content: center;\\n  border-radius: 3px;\\n  border: none;\\n  cursor: pointer;\\n}\\n\\n/* //comment popup// */\\n.movie-popup {\\n  display: none;\\n  background: #fff;\\n  position: fixed;\\n  z-index: 9999;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  overflow: auto;\\n}\\n\\nh2 {\\n  margin-left: 275px;\\n  padding-top: 30px;\\n}\\n\\n.movie-popup .popup-title {\\n  text-align: center;\\n  width: 100%;\\n  margin: 20px 0;\\n}\\n\\n.movie-popup table {\\n  width: 70%;\\n  margin: 0 auto;\\n  text-align: left;\\n}\\n\\n.popup-img {\\n  display: block;\\n  margin: 0 auto;\\n}\\n\\n.comments {\\n  margin-left: 90px;\\n  list-style-type: none;\\n}\\n\\n.comment-title {\\n  margin-left: 90px;\\n  padding-top: 30px;\\n}\\n\\n#close-popup {\\n  display: block;\\n  width: 100%;\\n  text-align: right;\\n  cursor: pointer;\\n  font-size: 18px;\\n  font-weight: 900;\\n  padding: 20px 30px 0 0;\\n}\\n\\n.com-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 25px;\\n  margin-bottom: 20px;\\n  margin-left: 130px;\\n  align-items: center;\\n}\\n\\n.com-form input,\\n.com-form button {\\n  width: 300px;\\n  height: 35px;\\n  padding-left: 10px;\\n  outline: none;\\n  background-color: white;\\n  color: rgb(0, 0, 0);\\n}\\n\\n.com-form button {\\n  box-shadow: 2px 2px 4px 0;\\n  cursor: pointer;\\n}\\n\\n.com-form textarea {\\n  width: 400px;\\n  height: 155px;\\n  outline: none;\\n  padding: 5px;\\n}\\n\\n.com-form h2 {\\n  text-align: center;\\n  display: contents;\\n}\\n\\ntd {\\n  padding-bottom: 1rem;\\n  font-size: 1.5rem;\\n}\\n\\nfooter {\\n  background-color: #000;\\n  color: #fff;\\n  border-top: 2px solid;\\n  text-align: center;\\n  padding: 5rem 0;\\n  margin: 2rem 0 0 0;\\n  font-size: 1.5rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fetchApis.js */ \"./src/modules/fetchApis.js\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/itemCounter.js */ \"./src/modules/itemCounter.js\");\n/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/getMovies.js */ \"./src/modules/getMovies.js\");\n\n\n\n\n\n\ndocument.addEventListener('click', async (e) => {\n  if (e.target.matches('.heart')) {\n    e.target.classList.toggle('is-active');\n    const id = Number(e.target.id);\n    const like = Number(e.target.nextSibling.textContent.match(/[0-9]/g).join(''));\n    e.target.nextSibling.textContent = `${like + 1} likes`;\n    await (0,_modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__.addLikes)(id);\n  }\n});\n\nconst loading = () => {\n  const cardsContainer = document.querySelector('.grid-cards-container');\n  const loadDiv = document.createElement('div');\n  const mask = document.createElement('div');\n  loadDiv.classList.add('loading');\n  mask.classList.add('mask');\n  cardsContainer.append(mask, loadDiv);\n};\n\nconst removeLoding = () => {\n  document.querySelector('.loading').remove();\n  document.querySelector('.mask').remove();\n};\n\nconst renderItems = async (showCount = 16) => {\n  loading();\n  const itemsData = await (0,_modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const showLess = itemsData.slice(0, showCount);\n  (0,_modules_itemCounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(showLess);\n  removeLoding();\n  const likes = await (0,_modules_fetchApis_js__WEBPACK_IMPORTED_MODULE_1__.likeCount)();\n  showLess.forEach((element, i) => {\n    let numLikes = 0;\n    numLikes = likes.filter((like) => like.item_id === showLess[i].id);\n    if (numLikes.length > 0) {\n      (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(showLess[i], numLikes[0].likes);\n    } else {\n      (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(showLess[i], 0);\n    }\n  });\n};\n\nrenderItems().then(() => {\n  (0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n});\n\n//# sourceURL=webpack://group-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardContainer = document.querySelector('.grid-cards-container');\n\nconst createCardItem = (item, itemLike = 0) => {\n  const cardElement = document.createElement('article');\n  const cardImage = document.createElement('img');\n  const cardTitle = document.createElement('h4');\n  const commentAndLikeDiv = document.createElement('div');\n  const commentBtn = document.createElement('button');\n  const reserveBtn = document.createElement('button');\n  const pLikesTag = document.createElement('p');\n  const likeHeart = document.createElement('div');\n  const movieTitle = document.createElement('h4');\n\n  cardContainer.append(cardElement);\n  cardElement.append(cardImage, cardTitle, commentAndLikeDiv);\n  cardElement.classList.add('item');\n  cardTitle.classList.add('card-title');\n  movieTitle.classList.add('movie-title');\n  likeHeart.classList.add('heart');\n  likeHeart.id = item.id;\n  commentAndLikeDiv.append(movieTitle, likeHeart, pLikesTag, commentBtn);\n  pLikesTag.classList.add('p-like');\n  commentAndLikeDiv.classList.add('comment-and-like');\n  commentBtn.classList.add('comment-btn');\n  // reserveBtn.classList.add('comment-btn');\n  reserveBtn.classList.add('reserve-btn');\n  commentBtn.setAttribute('movie_id', item.id);\n  reserveBtn.setAttribute('movie_id', item.id);\n  commentBtn.id = item.id;\n  reserveBtn.id = item.id;\n  commentBtn.textContent = 'Comment';\n  reserveBtn.textContent = 'Reserve';\n  movieTitle.textContent = 'Movie Title';\n\n  pLikesTag.textContent = `${itemLike} likes`;\n  cardImage.src = item.image.medium;\n  cardTitle.textContent = item.name;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCardItem);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/displayItems.js?");

/***/ }),

/***/ "./src/modules/fetchApis.js":
/*!**********************************!*\
  !*** ./src/modules/fetchApis.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"likeCount\": () => (/* binding */ likeCount)\n/* harmony export */ });\nconst url1 = 'https://api.tvmaze.com/shows';\nconst url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5exKMPrZqyeZytnJTggI/likes';\n\nconst fetchData = (url, CostumSettings = {}) => {\n  const response = fetch(url, CostumSettings)\n    .then((res) => res.json());\n  return response;\n};\n\nconst getData = () => fetchData(url1);\n\nconst likeCount = async () => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/5exKMPrZqyeZytnJTggI/likes');\n  const data = await response.json();\n  return data;\n};\n\nconst addLikes = async (id) => {\n  const settings = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n      Accept: 'application/json',\n    },\n    body: JSON.stringify({ item_id: id }),\n  };\n  const res = await fetchData(url2, settings)\n    .catch((err) => err);\n  return res;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/fetchApis.js?");

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url1 = 'https://api.tvmaze.com/shows';\n\nconst getMovieTitle = async () => {\n  const movieTitle = document.querySelectorAll('.movie-title');\n  const titleArray = [];\n  const response = await fetch(url1);\n  const data = await response.json();\n  data.forEach((title) => {\n    titleArray.push(title.name);\n    movieTitle.forEach((movie, index) => {\n      movie.innerHTML = titleArray[index];\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovieTitle);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/getMovies.js?");

/***/ }),

/***/ "./src/modules/itemCounter.js":
/*!************************************!*\
  !*** ./src/modules/itemCounter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"itemsCounter\": () => (/* binding */ itemsCounter)\n/* harmony export */ });\nconst itemsCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');\n\nconst displayTvShownumbers = (data) => {\n  const TvShowLink = document.querySelector('.tv-show-link');\n  const counter = itemsCounter(data);\n  TvShowLink.innerHTML = `Total Movies(${counter})`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTvShownumbers);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/itemCounter.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;