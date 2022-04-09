/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n  --red: #dd4b39;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 1fr;\n}\n\n.nav {\n  grid-column: 1/3;\n  background: var(--red);\n  height: 5vh;\n  display: grid;\n  grid-template-columns: 290px 1fr;\n  justify-items: start;\n}\n\n.nav .logo {\n  display: flex;\n  align-items: center;\n  font-size: 1.3rem;\n  color: white;\n  font-weight: bold;\n  padding-left: 60px;\n  width: 100%;\n}\n\n.side-nav {\n  grid-column: 1;\n  background: #fafafa;\n  height: 95vh;\n  padding: 60px 4px 0px 60px;\n  font-size: 14px;\n}\n\nnav ul {\n  list-style: none;\n}\n\nul li {\n  margin-left: -10px;\n  padding: 5px 0 5px 5px;\n}\n\nul li:hover {\n  cursor: pointer;\n  background: #ececec;\n}\n\nul li a {\n  padding: inherit;\n}\n\nnav + nav {\n  margin-top: 15px;\n  font-weight: bold;\n}\n\n.main-container {\n  grid-column: 2/3;\n  padding: 5vh 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main {\n  width: clamp(300px, 60%, 700px);\n}\n\n.main h1 {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.addTask {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n\n.addTask .icon {\n  color: var(--red);\n  font-size: 2rem;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n  margin-right: 4px;\n}\n\n.addTask:hover {\n  cursor: pointer;\n}\n\n.addTask:hover .icon {\n  border-radius: 50%;\n  color: white;\n  background: var(--red);\n}\n\n.addTask .prompt {\n  display: inline-block;\n  color: grey;\n}\n.addTask:hover .prompt {\n  color: var(--red);\n}\n\nform {\n  padding: 4px 0;\n  margin-bottom: 9px;\n}\n\n.form-content {\n  border-radius: 10px;\n  border: 1px solid #ddd;\n  padding: 10px 10px 0;\n}\n\n.form-content:focus-within {\n  border-color: rgba(0, 0, 0, 0.4);\n}\n\nform input,\nform textarea,\nform button,\nform .button {\n  all: unset;\n}\n\nform input {\n  width: 100%;\n}\n\nform textarea {\n  width: 100%;\n}\n\ninput#name::-webkit-input-placeholder {\n  font-weight: bold;\n}\n\nform label {\n  display: none;\n}\n\n.btn-inputs-container {\n  cursor: text;\n  display: flex;\n  column-gap: 4px;\n  padding-bottom: 10px;\n}\n\nform .button {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #555;\n  padding: 4px 8px;\n}\n\nform .button option {\n  text-align: center;\n  background: #fff;\n}\n\n.button:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.btn-inputs-container .button {\n  font-size: 17px;\n  width: auto;\n}\n\n.btn-container {\n  display: flex;\n  margin-left: -12px;\n}\n\n.btn-container .button {\n  margin: 12px 0 0 12px;\n  padding: 0 10px;\n  height: 32px;\n  font-weight: bold;\n}\n\n.button.primary-btn {\n  background-color: #db4c3f;\n  color: #fff;\n}\n\n.button.primary-btn[disabled] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.button.secondary-btn {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.task {\n  padding: 8px 0;\n}\n\n.task:hover {\n  cursor: pointer;\n}\n\n/* OVERLAY STYLES */\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.overlay .card {\n  background-color: rgb(255, 255, 255);\n  border-radius: 10px;\n  padding: 20px 24px;\n  font-size: 16px;\n  line-height: 24px;\n  width: clamp(450px, 50%, 650px);\n  overflow-x: hidden;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,oCAAoC;EACpC,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;;;;EAIE,UAAU;AACZ;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA,mBAAmB;;AAEnB;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,YAAY;EACZ,WAAW;EACX,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAA+B;EAC/B,kBAAkB;AACpB","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n  --red: #dd4b39;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: 250px 1fr;\n}\n\n.nav {\n  grid-column: 1/3;\n  background: var(--red);\n  height: 5vh;\n  display: grid;\n  grid-template-columns: 290px 1fr;\n  justify-items: start;\n}\n\n.nav .logo {\n  display: flex;\n  align-items: center;\n  font-size: 1.3rem;\n  color: white;\n  font-weight: bold;\n  padding-left: 60px;\n  width: 100%;\n}\n\n.side-nav {\n  grid-column: 1;\n  background: #fafafa;\n  height: 95vh;\n  padding: 60px 4px 0px 60px;\n  font-size: 14px;\n}\n\nnav ul {\n  list-style: none;\n}\n\nul li {\n  margin-left: -10px;\n  padding: 5px 0 5px 5px;\n}\n\nul li:hover {\n  cursor: pointer;\n  background: #ececec;\n}\n\nul li a {\n  padding: inherit;\n}\n\nnav + nav {\n  margin-top: 15px;\n  font-weight: bold;\n}\n\n.main-container {\n  grid-column: 2/3;\n  padding: 5vh 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.main {\n  width: clamp(300px, 60%, 700px);\n}\n\n.main h1 {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n\n.addTask {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n}\n\n.addTask .icon {\n  color: var(--red);\n  font-size: 2rem;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 3px;\n  margin-right: 4px;\n}\n\n.addTask:hover {\n  cursor: pointer;\n}\n\n.addTask:hover .icon {\n  border-radius: 50%;\n  color: white;\n  background: var(--red);\n}\n\n.addTask .prompt {\n  display: inline-block;\n  color: grey;\n}\n.addTask:hover .prompt {\n  color: var(--red);\n}\n\nform {\n  padding: 4px 0;\n  margin-bottom: 9px;\n}\n\n.form-content {\n  border-radius: 10px;\n  border: 1px solid #ddd;\n  padding: 10px 10px 0;\n}\n\n.form-content:focus-within {\n  border-color: rgba(0, 0, 0, 0.4);\n}\n\nform input,\nform textarea,\nform button,\nform .button {\n  all: unset;\n}\n\nform input {\n  width: 100%;\n}\n\nform textarea {\n  width: 100%;\n}\n\ninput#name::-webkit-input-placeholder {\n  font-weight: bold;\n}\n\nform label {\n  display: none;\n}\n\n.btn-inputs-container {\n  cursor: text;\n  display: flex;\n  column-gap: 4px;\n  padding-bottom: 10px;\n}\n\nform .button {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  color: #555;\n  padding: 4px 8px;\n}\n\nform .button option {\n  text-align: center;\n  background: #fff;\n}\n\n.button:hover {\n  cursor: pointer;\n  background-color: #eee;\n}\n\n.btn-inputs-container .button {\n  font-size: 17px;\n  width: auto;\n}\n\n.btn-container {\n  display: flex;\n  margin-left: -12px;\n}\n\n.btn-container .button {\n  margin: 12px 0 0 12px;\n  padding: 0 10px;\n  height: 32px;\n  font-weight: bold;\n}\n\n.button.primary-btn {\n  background-color: #db4c3f;\n  color: #fff;\n}\n\n.button.primary-btn[disabled] {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.button.secondary-btn {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.task {\n  padding: 8px 0;\n}\n\n.task:hover {\n  cursor: pointer;\n}\n\n/* OVERLAY STYLES */\n\n.overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.overlay .card {\n  background-color: rgb(255, 255, 255);\n  border-radius: 10px;\n  padding: 20px 24px;\n  font-size: 16px;\n  line-height: 24px;\n  width: clamp(450px, 50%, 650px);\n  overflow-x: hidden;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.render();
  }

  handleNewTodo(todo) {
    this.model.addTodo(todo);
    this.view.updateMain(
      this.model.currentRoute,
      this.model.todos,
      this.model.projects
    );
  }

  handleDeleteTodo(id) {
    this.model.deleteTodo(id);
  }

  handleEditTodo(id, todo) {
    this.model.editTodo(id, todo);
  }

  bindhandlers() {
    this.view.handlers = {
      handleNewTodo: this.handleNewTodo,
      handleDeleteTodo: this.handleDeleteTodo,
      handleEditTodo: this.handleEditTodo,
    };
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Model {
  constructor() {
    this.todos = [];
    this.projects = [];
    this.currentRoute = "inbox";
  }

  addTodo({ name, description, date, project }) {
    const todo = {
      name,
      description,
      date,
      project,
      id: this.todos.length,
    };
    this.todos.push(todo);
  }

  addProject(name) {
    this.projects.push({ name, id: this.projects.length });
  }

  deleteProject(id) {
    this.projects = this.projects.filter((project) => project.id !== id);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  editTodo(id, { name, description, date, project }) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return { name, description, date, project, id: todo.id };
      }
      return todo;
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);


/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_sideNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sideNav */ "./src/components/sideNav.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");




class View {
  constructor(todos, projects) {
    this.todos = todos;
    this.projects = projects;
  }

  static createElement(type, className) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className);
    }
    return element;
  }

  render() {
    (0,_components_Nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_components_sideNav__WEBPACK_IMPORTED_MODULE_1__["default"])(["projects"]); // expects all projects
    _components_main__WEBPACK_IMPORTED_MODULE_2__["default"].render(
      "inbox",
      [
        { name: "ello", description: "meh", date: "", project: "", id: 0 },
        {
          name: "two",
          description: "meh",
          date: "",
          project: "welcome!",
          id: 1,
        },
        {
          name: "three",
          description: "meh",
          date: "",
          project: "newProject",
          id: 2,
        },
      ],
      ["welcome!", "newProject"]
    ); //expects current route, filtered todos, and all projects
    // Main.bindHandler(this.handlers.handleNewTodo);
    console.log(this.handlers);
  }

  updateMain(route, todos, projects) {
    _components_main__WEBPACK_IMPORTED_MODULE_2__["default"].render(route, todos, projects);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  nav.appendChild(logo());

  document.body.append(nav);
}

const logo = () => {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "To do list";

  return logo;
};


/***/ }),

/***/ "./src/components/addTodo.js":
/*!***********************************!*\
  !*** ./src/components/addTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View.js */ "./src/View.js");
/* harmony import */ var _newForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newForm */ "./src/components/newForm");



function addTask(projects) {
  const addTask = _View_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "addTask");

  const addIcon = _View_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "icon");
  addIcon.textContent = "+";

  const message = _View_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "prompt");
  message.textContent = "Add task";

  addTask.append(addIcon, message);

  addTask.onclick = () => {
    addTask.replaceWith((0,_newForm__WEBPACK_IMPORTED_MODULE_1__["default"])(projects));
  };

  return addTask;
}


/***/ }),

/***/ "./src/components/editform.js":
/*!************************************!*\
  !*** ./src/components/editform.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ "./src/View.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(task, projects) {
  const overlay = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "overlay");
  const card = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "card");
  const editForm = form(task, projects);

  overlay.append(card);
  card.append(editForm);

  document.body.append(overlay);
}

const form = (task, projects) => {
  const form = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form");
  form.setAttribute("id", "editForm");
  const formContent = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "form-content");

  form.append(formContent, btns(task, projects));
  formContent.append(...textInputs(task), btnInputs(task, projects));
  return form;
};

const textInputs = ({ name, description }) => {
  const nameContainer = nameField(name);
  const descriptionContainer = descriptionField(description);
  return [nameContainer, descriptionContainer];
};

const btns = (task, projects) => {
  const btnContainer = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "btn-container");

  const saveBtn = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "primary-btn");
  saveBtn.classList.add("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", () => {
    saveHandler(task);
  });

  const cancelBtn = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "secondary-btn");

  cancelBtn.addEventListener("click", () => {
    cancelHandler();
  });
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.append(saveBtn, cancelBtn);

  return btnContainer;
};

const cancelHandler = () => {
  event.preventDefault();
  closeModal();
};

const nameField = (name) => {
  const nameField = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "input-container");

  const labelName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "eg. Take out the garbage by 10am");
  inputName.value = name;

  nameField.append(labelName, inputName);
  return nameField;
};

const descriptionField = (description) => {
  const descriptionField = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "input-container");

  const descriptionName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("textarea");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");
  descriptionInput.value = description;

  descriptionField.append(descriptionName, descriptionInput);
  return descriptionField;
};

const btnInputs = (task, projects) => {
  const btnContainer = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "btn-inputs-container");

  const dateInput = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  const projectOptions = projectDropDown(task, projects);

  btnContainer.append(dateInput, projectOptions);

  return btnContainer;
};

const projectDropDown = (task, projects) => {
  const dropdown = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", "button");
  dropdown.setAttribute("id", "project");
  const list = [...projects];

  if (task.project !== "") {
    list.splice(projects.indexOf(task.project), 1);
    list.unshift(task.project);
  } else {
    list.unshift("inbox");
  }

  list.forEach((project) => {
    const listItem = document.createElement("option");
    listItem.textContent = project;
    listItem.value = project;
    dropdown.appendChild(listItem);
  });

  return dropdown;
};

const saveHandler = (task) => {
  event.preventDefault();

  // model.addtodo
  console.log("edit todo and update view");
  //view.updateMain
  closeModal();
};

const closeModal = () => {
  const modal = document.querySelector(".overlay");
  modal.remove();
};


/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ "./src/View.js");
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList */ "./src/components/taskList.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTodo */ "./src/components/addTodo.js");




// component inject route name and todos for that route

const render = (route, todos, projects, addTodoHandler, editTodoHandler) => {
  const container = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "main-container");
  const main = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "main");
  const heading = createHeading(route);
  const existingTasks = (0,_taskList__WEBPACK_IMPORTED_MODULE_1__["default"])(todos, projects);
  const addOption = (0,_addTodo__WEBPACK_IMPORTED_MODULE_2__["default"])(projects);

  container.append(main);
  main.append(heading);
  main.append(existingTasks);
  main.append(addOption);

  document.body.append(container);
};

const bindHandler = (handler) => {
  console.log(handler);
};

const createHeading = (route) => {
  const h1 = document.createElement("h1");
  h1.textContent = route;

  return h1;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ render, bindHandler });


/***/ }),

/***/ "./src/components/newForm":
/*!********************************!*\
  !*** ./src/components/newForm ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ "./src/View.js");
/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTodo */ "./src/components/addTodo.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(projects) {
  const form = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form");
  form.setAttribute("id", "newForm");
  const formContent = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "form-content");

  form.append(formContent, btns(projects));
  formContent.append(...textInputs(), btnInputs(projects));
  return form;
}

const textInputs = () => {
  const name = nameField();
  const description = descriptionField();
  return [name, description];
};

const btns = (projects) => {
  const btnContainer = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "btn-container");

  const addBtn = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "primary-btn");
  addBtn.classList.add("button");
  addBtn.disabled = true;
  addBtn.textContent = "Add Task";
  addBtn.addEventListener("click", submitHandler);

  const cancelBtn = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", "secondary-btn");

  cancelBtn.addEventListener("click", () => {
    cancelHandler(projects);
  });
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.append(addBtn, cancelBtn);

  return btnContainer;
};

const cancelHandler = (projects) => {
  event.preventDefault();
  const form = document.getElementById("newForm");
  form.replaceWith((0,_addTodo__WEBPACK_IMPORTED_MODULE_1__["default"])(projects));
};

const nameField = () => {
  const nameField = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "input-container");

  const labelName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "eg. Take out the garbage by 10am");
  inputName.addEventListener("keyup", enableSubmit);

  nameField.append(labelName, inputName);
  return nameField;
};

const descriptionField = () => {
  const descriptionField = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "input-container");

  const descriptionName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("textarea");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");

  descriptionField.append(descriptionName, descriptionInput);
  return descriptionField;
};

const btnInputs = (projects) => {
  const btnContainer = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "btn-inputs-container");

  const dateInput = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", "button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  const projectOptions = projectDropDown(projects);

  btnContainer.append(dateInput, projectOptions);

  return btnContainer;
};

const enableSubmit = (event) => {
  const submitBtn = document.querySelector(".primary-btn");
  if (event.target.value != "") {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

const projectDropDown = (projects) => {
  const dropdown = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("select", "button");
  dropdown.setAttribute("id", "project");

  projects.unshift("inbox");

  projects.forEach((project) => {
    const listItem = document.createElement("option");
    listItem.textContent = project;
    listItem.value = project;
    dropdown.appendChild(listItem);
  });

  projects.shift();

  return dropdown;
};

const submitHandler = (event) => {
  event.preventDefault();

  // model.addtodo
  console.log("submit new todo event and update view");
  //view.updateMain
};


/***/ }),

/***/ "./src/components/sideNav.js":
/*!***********************************!*\
  !*** ./src/components/sideNav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(projects) {
  const sideNav = document.createElement("div");
  sideNav.classList.add("side-nav");

  const nav = navList(["Inbox", "Today", "Upcoming"]);

  sideNav.appendChild(nav);
  sideNav.appendChild(navList(projects));

  document.body.appendChild(sideNav);
}

const navList = (list) => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  for (let item of list) {
    const element = document.createElement("li");
    const link = document.createElement("a");
    element.appendChild(link);
    link.textContent = item;
    ul.appendChild(element);
  }

  nav.appendChild(ul);
  return nav;
};


/***/ }),

/***/ "./src/components/taskList.js":
/*!************************************!*\
  !*** ./src/components/taskList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../View */ "./src/View.js");
/* harmony import */ var _editform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editform */ "./src/components/editform.js");



//expect: list of todo objects
//do: render each object to .taskList and return it
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(todos, projects) {
  const list = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "taskList");

  todos.forEach((todo) => {
    const listItem = createTask(todo, projects);
    list.append(listItem);
  });

  return list;
}

const createTask = (todo, projects) => {
  const { name, description } = todo;
  const task = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "task");
  const checkbox = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "circle-checkbox");
  const taskName = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "task-name");
  taskName.textContent = name;

  const taskDescription = _View__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", "description");
  taskDescription.textContent = description;

  task.append(checkbox, taskName, taskDescription);

  task.onclick = () => {
    (0,_editform__WEBPACK_IMPORTED_MODULE_1__["default"])(todo, projects);
  };

  return task;
};


/***/ }),

/***/ "./src/data/tasks.js":
/*!***************************!*\
  !*** ./src/data/tasks.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const List = (() => {
  const add = (task) => {
    localStorage.setItem(localStorage.length, JSON.stringify(task));
  };

  const removeAll = () => {
    localStorage.clear();
  };

  const remove = (task) => {
    for (let value in localStorage) {
      console.log(value);
    }
  };

  const isEmpty = () => {
    return localStorage.length === 0;
  };

  const update = (index, task) => {
    localStorage.setItem(JSON.stringify(index), JSON.stringify(task));
  };

  const toArray = () => {
    const list = [];
    for (let i = 0; i < localStorage.length; i++) {
      const task = JSON.parse(localStorage.getItem(i));
      list.push(task);
    }
    return list;
  };

  const length = () => {
    return localStorage.length;
  };

  const getItem = (index) => {
    return JSON.parse(localStorage.getItem(index));
  };

  return { add, removeAll, remove, isEmpty, update, toArray, length, getItem };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_sideNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sideNav */ "./src/components/sideNav.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/tasks */ "./src/data/tasks.js");
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Model */ "./src/Model.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View */ "./src/View.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Controller */ "./src/Controller.js");









const view = new _View__WEBPACK_IMPORTED_MODULE_6__["default"]();
const model = new _Model__WEBPACK_IMPORTED_MODULE_5__["default"]();

const controller = new _Controller__WEBPACK_IMPORTED_MODULE_7__["default"](view, model);

controller.init();
controller.bindhandlers();
// const nav = Nav();
// document.body.appendChild(nav);
// const sideNav = SideNav();
// document.body.appendChild(sideNav);
// const main = Main();
// document.body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ1E7QUFDTjtBQUNMO0FBQ0o7QUFDRjtBQUNZOztBQUV0QyxpQkFBaUIsNkNBQUk7QUFDckIsa0JBQWtCLDhDQUFLOztBQUV2Qix1QkFBdUIsbURBQVU7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL01vZGVsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvTmF2LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGRUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0Zm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3Rm9ybSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZU5hdi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kYXRhL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1yZWQ6ICNkZDRiMzk7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG59XFxuXFxuLm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gIGhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5uYXYgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBwYWRkaW5nOiA2MHB4IDRweCAwcHggNjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XFxufVxcblxcbnVsIGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxufVxcblxcbnVsIGxpIGEge1xcbiAgcGFkZGluZzogaW5oZXJpdDtcXG59XFxuXFxubmF2ICsgbmF2IHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBwYWRkaW5nOiA1dmggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA2MCUsIDcwMHB4KTtcXG59XFxuXFxuLm1haW4gaDEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkVGFzayAuaWNvbiB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIC5pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxufVxcblxcbi5hZGRUYXNrIC5wcm9tcHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5hZGRUYXNrOmhvdmVyIC5wcm9tcHQge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcXG59XFxuXFxuLmZvcm0tY29udGVudDpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSB0ZXh0YXJlYSxcXG5mb3JtIGJ1dHRvbixcXG5mb3JtIC5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQjbmFtZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuLWlucHV0cy1jb250YWluZXIge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5mb3JtIC5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzU1NTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbmZvcm0gLmJ1dHRvbiBvcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4uYnRuLWlucHV0cy1jb250YWluZXIgLmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgLmJ1dHRvbiB7XFxuICBtYXJnaW46IDEycHggMCAwIDEycHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbi5wcmltYXJ5LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5idXR0b24ucHJpbWFyeS1idG5bZGlzYWJsZWRdIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5idXR0b24uc2Vjb25kYXJ5LWJ0biB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5cXG4udGFzayB7XFxuICBwYWRkaW5nOiA4cHggMDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBPVkVSTEFZIFNUWUxFUyAqL1xcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vdmVybGF5IC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHdpZHRoOiBjbGFtcCg0NTBweCwgNTAlLCA2NTBweCk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7Ozs7RUFJRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAtLXJlZDogI2RkNGIzOTtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxLzM7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOTBweCAxZnI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG59XFxuXFxuLm5hdiAubG9nbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcXG4gIGhlaWdodDogOTV2aDtcXG4gIHBhZGRpbmc6IDYwcHggNHB4IDBweCA2MHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG5uYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxudWwgbGkge1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgcGFkZGluZzogNXB4IDAgNXB4IDVweDtcXG59XFxuXFxudWwgbGk6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcXG59XFxuXFxudWwgbGkgYSB7XFxuICBwYWRkaW5nOiBpbmhlcml0O1xcbn1cXG5cXG5uYXYgKyBuYXYge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIHBhZGRpbmc6IDV2aCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICB3aWR0aDogY2xhbXAoMzAwcHgsIDYwJSwgNzAwcHgpO1xcbn1cXG5cXG4ubWFpbiBoMSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYWRkVGFzayB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGRUYXNrIC5pY29uIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogM3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXIgLmljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG59XFxuXFxuLmFkZFRhc2sgLnByb21wdCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogZ3JleTtcXG59XFxuLmFkZFRhc2s6aG92ZXIgLnByb21wdCB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG59XFxuXFxuZm9ybSB7XFxuICBwYWRkaW5nOiA0cHggMDtcXG4gIG1hcmdpbi1ib3R0b206IDlweDtcXG59XFxuXFxuLmZvcm0tY29udGVudCB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwO1xcbn1cXG5cXG4uZm9ybS1jb250ZW50OmZvY3VzLXdpdGhpbiB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG59XFxuXFxuZm9ybSBpbnB1dCxcXG5mb3JtIHRleHRhcmVhLFxcbmZvcm0gYnV0dG9uLFxcbmZvcm0gLmJ1dHRvbiB7XFxuICBhbGw6IHVuc2V0O1xcbn1cXG5cXG5mb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5mb3JtIHRleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCNuYW1lOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5mb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idG4taW5wdXRzLWNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHRleHQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sdW1uLWdhcDogNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbmZvcm0gLmJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG59XFxuXFxuZm9ybSAuYnV0dG9uIG9wdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG5cXG4uYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxufVxcblxcbi5idG4taW5wdXRzLWNvbnRhaW5lciAuYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciAuYnV0dG9uIHtcXG4gIG1hcmdpbjogMTJweCAwIDAgMTJweDtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGhlaWdodDogMzJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYnV0dG9uLnByaW1hcnktYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRjM2Y7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmJ1dHRvbi5wcmltYXJ5LWJ0bltkaXNhYmxlZF0ge1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJ1dHRvbi5zZWNvbmRhcnktYnRuIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbn1cXG5cXG4udGFzazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIE9WRVJMQVkgU1RZTEVTICovXFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm92ZXJsYXkgLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IGNsYW1wKDQ1MHB4LCA1MCUsIDY1MHB4KTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IodmlldywgbW9kZWwpIHtcbiAgICB0aGlzLnZpZXcgPSB2aWV3O1xuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy52aWV3LnJlbmRlcigpO1xuICB9XG5cbiAgaGFuZGxlTmV3VG9kbyh0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5hZGRUb2RvKHRvZG8pO1xuICAgIHRoaXMudmlldy51cGRhdGVNYWluKFxuICAgICAgdGhpcy5tb2RlbC5jdXJyZW50Um91dGUsXG4gICAgICB0aGlzLm1vZGVsLnRvZG9zLFxuICAgICAgdGhpcy5tb2RlbC5wcm9qZWN0c1xuICAgICk7XG4gIH1cblxuICBoYW5kbGVEZWxldGVUb2RvKGlkKSB7XG4gICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvKGlkKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRUb2RvKGlkLCB0b2RvKSB7XG4gICAgdGhpcy5tb2RlbC5lZGl0VG9kbyhpZCwgdG9kbyk7XG4gIH1cblxuICBiaW5kaGFuZGxlcnMoKSB7XG4gICAgdGhpcy52aWV3LmhhbmRsZXJzID0ge1xuICAgICAgaGFuZGxlTmV3VG9kbzogdGhpcy5oYW5kbGVOZXdUb2RvLFxuICAgICAgaGFuZGxlRGVsZXRlVG9kbzogdGhpcy5oYW5kbGVEZWxldGVUb2RvLFxuICAgICAgaGFuZGxlRWRpdFRvZG86IHRoaXMuaGFuZGxlRWRpdFRvZG8sXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIiwiY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRvZG9zID0gW107XG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFJvdXRlID0gXCJpbmJveFwiO1xuICB9XG5cbiAgYWRkVG9kbyh7IG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0IH0pIHtcbiAgICBjb25zdCB0b2RvID0ge1xuICAgICAgbmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgZGF0ZSxcbiAgICAgIHByb2plY3QsXG4gICAgICBpZDogdGhpcy50b2Rvcy5sZW5ndGgsXG4gICAgfTtcbiAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gIH1cblxuICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICB0aGlzLnByb2plY3RzLnB1c2goeyBuYW1lLCBpZDogdGhpcy5wcm9qZWN0cy5sZW5ndGggfSk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0KGlkKSB7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBpZCk7XG4gIH1cblxuICBkZWxldGVUb2RvKGlkKSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKCh0b2RvKSA9PiB0b2RvLmlkICE9PSBpZCk7XG4gIH1cblxuICBlZGl0VG9kbyhpZCwgeyBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCB9KSB7XG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByb2plY3QsIGlkOiB0b2RvLmlkIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kbztcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsImltcG9ydCBOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZcIjtcbmltcG9ydCBTaWRlTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvc2lkZU5hdlwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluXCI7XG5cbmNsYXNzIFZpZXcge1xuICBjb25zdHJ1Y3Rvcih0b2RvcywgcHJvamVjdHMpIHtcbiAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnQodHlwZSwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIE5hdigpO1xuICAgIFNpZGVOYXYoW1wicHJvamVjdHNcIl0pOyAvLyBleHBlY3RzIGFsbCBwcm9qZWN0c1xuICAgIE1haW4ucmVuZGVyKFxuICAgICAgXCJpbmJveFwiLFxuICAgICAgW1xuICAgICAgICB7IG5hbWU6IFwiZWxsb1wiLCBkZXNjcmlwdGlvbjogXCJtZWhcIiwgZGF0ZTogXCJcIiwgcHJvamVjdDogXCJcIiwgaWQ6IDAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwidHdvXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwibWVoXCIsXG4gICAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgICBwcm9qZWN0OiBcIndlbGNvbWUhXCIsXG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcInRocmVlXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwibWVoXCIsXG4gICAgICAgICAgZGF0ZTogXCJcIixcbiAgICAgICAgICBwcm9qZWN0OiBcIm5ld1Byb2plY3RcIixcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBbXCJ3ZWxjb21lIVwiLCBcIm5ld1Byb2plY3RcIl1cbiAgICApOyAvL2V4cGVjdHMgY3VycmVudCByb3V0ZSwgZmlsdGVyZWQgdG9kb3MsIGFuZCBhbGwgcHJvamVjdHNcbiAgICAvLyBNYWluLmJpbmRIYW5kbGVyKHRoaXMuaGFuZGxlcnMuaGFuZGxlTmV3VG9kbyk7XG4gICAgY29uc29sZS5sb2codGhpcy5oYW5kbGVycyk7XG4gIH1cblxuICB1cGRhdGVNYWluKHJvdXRlLCB0b2RvcywgcHJvamVjdHMpIHtcbiAgICBNYWluLnJlbmRlcihyb3V0ZSwgdG9kb3MsIHByb2plY3RzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobG9nbygpKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChuYXYpO1xufVxuXG5jb25zdCBsb2dvID0gKCkgPT4ge1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiVG8gZG8gbGlzdFwiO1xuXG4gIHJldHVybiBsb2dvO1xufTtcbiIsImltcG9ydCBWaWV3IGZyb20gXCIuLi9WaWV3LmpzXCI7XG5pbXBvcnQgbmV3VGFza0Zvcm0gZnJvbSBcIi4vbmV3Rm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUYXNrKHByb2plY3RzKSB7XG4gIGNvbnN0IGFkZFRhc2sgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJhZGRUYXNrXCIpO1xuXG4gIGNvbnN0IGFkZEljb24gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpY29uXCIpO1xuICBhZGRJY29uLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbiAgY29uc3QgbWVzc2FnZSA9IFZpZXcuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInByb21wdFwiKTtcbiAgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcblxuICBhZGRUYXNrLmFwcGVuZChhZGRJY29uLCBtZXNzYWdlKTtcblxuICBhZGRUYXNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWRkVGFzay5yZXBsYWNlV2l0aChuZXdUYXNrRm9ybShwcm9qZWN0cykpO1xuICB9O1xuXG4gIHJldHVybiBhZGRUYXNrO1xufVxuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4uL1ZpZXdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhc2ssIHByb2plY3RzKSB7XG4gIGNvbnN0IG92ZXJsYXkgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJvdmVybGF5XCIpO1xuICBjb25zdCBjYXJkID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiY2FyZFwiKTtcbiAgY29uc3QgZWRpdEZvcm0gPSBmb3JtKHRhc2ssIHByb2plY3RzKTtcblxuICBvdmVybGF5LmFwcGVuZChjYXJkKTtcbiAgY2FyZC5hcHBlbmQoZWRpdEZvcm0pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKG92ZXJsYXkpO1xufVxuXG5jb25zdCBmb3JtID0gKHRhc2ssIHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdEZvcm1cIik7XG4gIGNvbnN0IGZvcm1Db250ZW50ID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZm9ybS1jb250ZW50XCIpO1xuXG4gIGZvcm0uYXBwZW5kKGZvcm1Db250ZW50LCBidG5zKHRhc2ssIHByb2plY3RzKSk7XG4gIGZvcm1Db250ZW50LmFwcGVuZCguLi50ZXh0SW5wdXRzKHRhc2spLCBidG5JbnB1dHModGFzaywgcHJvamVjdHMpKTtcbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCB0ZXh0SW5wdXRzID0gKHsgbmFtZSwgZGVzY3JpcHRpb24gfSkgPT4ge1xuICBjb25zdCBuYW1lQ29udGFpbmVyID0gbmFtZUZpZWxkKG5hbWUpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRlc2NyaXB0aW9uRmllbGQoZGVzY3JpcHRpb24pO1xuICByZXR1cm4gW25hbWVDb250YWluZXIsIGRlc2NyaXB0aW9uQ29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGJ0bnMgPSAodGFzaywgcHJvamVjdHMpID0+IHtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBzYXZlQnRuID0gVmlldy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwicHJpbWFyeS1idG5cIik7XG4gIHNhdmVCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuICBzYXZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2F2ZUhhbmRsZXIodGFzayk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IFZpZXcuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNlY29uZGFyeS1idG5cIik7XG5cbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2FuY2VsSGFuZGxlcigpO1xuICB9KTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZChzYXZlQnRuLCBjYW5jZWxCdG4pO1xuXG4gIHJldHVybiBidG5Db250YWluZXI7XG59O1xuXG5jb25zdCBjYW5jZWxIYW5kbGVyID0gKCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjbG9zZU1vZGFsKCk7XG59O1xuXG5jb25zdCBuYW1lRmllbGQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBuYW1lRmllbGQgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJpbnB1dC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gVmlldy5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsTmFtZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuYW1lXCIpO1xuICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSBcIlRhc2sgTmFtZVwiO1xuXG4gIGNvbnN0IGlucHV0TmFtZSA9IFZpZXcuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJlZy4gVGFrZSBvdXQgdGhlIGdhcmJhZ2UgYnkgMTBhbVwiKTtcbiAgaW5wdXROYW1lLnZhbHVlID0gbmFtZTtcblxuICBuYW1lRmllbGQuYXBwZW5kKGxhYmVsTmFtZSwgaW5wdXROYW1lKTtcbiAgcmV0dXJuIG5hbWVGaWVsZDtcbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSAoZGVzY3JpcHRpb24pID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IFZpZXcuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImlucHV0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbk5hbWUgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGVzY3JpcHRpb25OYW1lLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbk5hbWUudGV4dENvbnRlbnQgPSBcIlRhc2sgRGVzY3JpcHRpb25cIjtcblxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gVmlldy5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnZhbHVlID0gZGVzY3JpcHRpb247XG5cbiAgZGVzY3JpcHRpb25GaWVsZC5hcHBlbmQoZGVzY3JpcHRpb25OYW1lLCBkZXNjcmlwdGlvbklucHV0KTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uRmllbGQ7XG59O1xuXG5jb25zdCBidG5JbnB1dHMgPSAodGFzaywgcHJvamVjdHMpID0+IHtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnRuLWlucHV0cy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gVmlldy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJidXR0b25cIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IHByb2plY3REcm9wRG93bih0YXNrLCBwcm9qZWN0cyk7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZChkYXRlSW5wdXQsIHByb2plY3RPcHRpb25zKTtcblxuICByZXR1cm4gYnRuQ29udGFpbmVyO1xufTtcblxuY29uc3QgcHJvamVjdERyb3BEb3duID0gKHRhc2ssIHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duID0gVmlldy5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIFwiYnV0dG9uXCIpO1xuICBkcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RcIik7XG4gIGNvbnN0IGxpc3QgPSBbLi4ucHJvamVjdHNdO1xuXG4gIGlmICh0YXNrLnByb2plY3QgIT09IFwiXCIpIHtcbiAgICBsaXN0LnNwbGljZShwcm9qZWN0cy5pbmRleE9mKHRhc2sucHJvamVjdCksIDEpO1xuICAgIGxpc3QudW5zaGlmdCh0YXNrLnByb2plY3QpO1xuICB9IGVsc2Uge1xuICAgIGxpc3QudW5zaGlmdChcImluYm94XCIpO1xuICB9XG5cbiAgbGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBsaXN0SXRlbS52YWx1ZSA9IHByb2plY3Q7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICByZXR1cm4gZHJvcGRvd247XG59O1xuXG5jb25zdCBzYXZlSGFuZGxlciA9ICh0YXNrKSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gbW9kZWwuYWRkdG9kb1xuICBjb25zb2xlLmxvZyhcImVkaXQgdG9kbyBhbmQgdXBkYXRlIHZpZXdcIik7XG4gIC8vdmlldy51cGRhdGVNYWluXG4gIGNsb3NlTW9kYWwoKTtcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuICBtb2RhbC5yZW1vdmUoKTtcbn07XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiLi4vVmlld1wiO1xuaW1wb3J0IHRhc2tMaXN0IGZyb20gXCIuL3Rhc2tMaXN0XCI7XG5pbXBvcnQgYWRkVG9kbyBmcm9tIFwiLi9hZGRUb2RvXCI7XG5cbi8vIGNvbXBvbmVudCBpbmplY3Qgcm91dGUgbmFtZSBhbmQgdG9kb3MgZm9yIHRoYXQgcm91dGVcblxuY29uc3QgcmVuZGVyID0gKHJvdXRlLCB0b2RvcywgcHJvamVjdHMsIGFkZFRvZG9IYW5kbGVyLCBlZGl0VG9kb0hhbmRsZXIpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwibWFpbi1jb250YWluZXJcIik7XG4gIGNvbnN0IG1haW4gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtYWluXCIpO1xuICBjb25zdCBoZWFkaW5nID0gY3JlYXRlSGVhZGluZyhyb3V0ZSk7XG4gIGNvbnN0IGV4aXN0aW5nVGFza3MgPSB0YXNrTGlzdCh0b2RvcywgcHJvamVjdHMpO1xuICBjb25zdCBhZGRPcHRpb24gPSBhZGRUb2RvKHByb2plY3RzKTtcblxuICBjb250YWluZXIuYXBwZW5kKG1haW4pO1xuICBtYWluLmFwcGVuZChoZWFkaW5nKTtcbiAgbWFpbi5hcHBlbmQoZXhpc3RpbmdUYXNrcyk7XG4gIG1haW4uYXBwZW5kKGFkZE9wdGlvbik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGJpbmRIYW5kbGVyID0gKGhhbmRsZXIpID0+IHtcbiAgY29uc29sZS5sb2coaGFuZGxlcik7XG59O1xuXG5jb25zdCBjcmVhdGVIZWFkaW5nID0gKHJvdXRlKSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IHJvdXRlO1xuXG4gIHJldHVybiBoMTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHsgcmVuZGVyLCBiaW5kSGFuZGxlciB9O1xuIiwiaW1wb3J0IFZpZXcgZnJvbSBcIi4uL1ZpZXdcIjtcbmltcG9ydCBhZGRUYXNrIGZyb20gXCIuL2FkZFRvZG9cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGNvbnN0IGZvcm0gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3Rm9ybVwiKTtcbiAgY29uc3QgZm9ybUNvbnRlbnQgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmb3JtLWNvbnRlbnRcIik7XG5cbiAgZm9ybS5hcHBlbmQoZm9ybUNvbnRlbnQsIGJ0bnMocHJvamVjdHMpKTtcbiAgZm9ybUNvbnRlbnQuYXBwZW5kKC4uLnRleHRJbnB1dHMoKSwgYnRuSW5wdXRzKHByb2plY3RzKSk7XG4gIHJldHVybiBmb3JtO1xufVxuXG5jb25zdCB0ZXh0SW5wdXRzID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gbmFtZUZpZWxkKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25GaWVsZCgpO1xuICByZXR1cm4gW25hbWUsIGRlc2NyaXB0aW9uXTtcbn07XG5cbmNvbnN0IGJ0bnMgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhZGRCdG4gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJwcmltYXJ5LWJ0blwiKTtcbiAgYWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRIYW5kbGVyKTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzZWNvbmRhcnktYnRuXCIpO1xuXG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNhbmNlbEhhbmRsZXIocHJvamVjdHMpO1xuICB9KTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bik7XG5cbiAgcmV0dXJuIGJ0bkNvbnRhaW5lcjtcbn07XG5cbmNvbnN0IGNhbmNlbEhhbmRsZXIgPSAocHJvamVjdHMpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3Rm9ybVwiKTtcbiAgZm9ybS5yZXBsYWNlV2l0aChhZGRUYXNrKHByb2plY3RzKSk7XG59O1xuXG5jb25zdCBuYW1lRmllbGQgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWVGaWVsZCA9IFZpZXcuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImlucHV0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbE5hbWUgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XG5cbiAgY29uc3QgaW5wdXROYW1lID0gVmlldy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcImVnLiBUYWtlIG91dCB0aGUgZ2FyYmFnZSBieSAxMGFtXCIpO1xuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGVuYWJsZVN1Ym1pdCk7XG5cbiAgbmFtZUZpZWxkLmFwcGVuZChsYWJlbE5hbWUsIGlucHV0TmFtZSk7XG4gIHJldHVybiBuYW1lRmllbGQ7XG59O1xuXG5jb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gKCkgPT4ge1xuICBjb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaW5wdXQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uTmFtZSA9IFZpZXcuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbk5hbWUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uTmFtZS50ZXh0Q29udGVudCA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG5cbiAgZGVzY3JpcHRpb25GaWVsZC5hcHBlbmQoZGVzY3JpcHRpb25OYW1lLCBkZXNjcmlwdGlvbklucHV0KTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uRmllbGQ7XG59O1xuXG5jb25zdCBidG5JbnB1dHMgPSAocHJvamVjdHMpID0+IHtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gVmlldy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiYnRuLWlucHV0cy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gVmlldy5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJidXR0b25cIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IHByb2plY3REcm9wRG93bihwcm9qZWN0cyk7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZChkYXRlSW5wdXQsIHByb2plY3RPcHRpb25zKTtcblxuICByZXR1cm4gYnRuQ29udGFpbmVyO1xufTtcblxuY29uc3QgZW5hYmxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpbWFyeS1idG5cIik7XG4gIGlmIChldmVudC50YXJnZXQudmFsdWUgIT0gXCJcIikge1xuICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHN1Ym1pdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn07XG5cbmNvbnN0IHByb2plY3REcm9wRG93biA9IChwcm9qZWN0cykgPT4ge1xuICBjb25zdCBkcm9wZG93biA9IFZpZXcuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCBcImJ1dHRvblwiKTtcbiAgZHJvcGRvd24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIpO1xuXG4gIHByb2plY3RzLnVuc2hpZnQoXCJpbmJveFwiKTtcblxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxpc3RJdGVtLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICBsaXN0SXRlbS52YWx1ZSA9IHByb2plY3Q7XG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcblxuICBwcm9qZWN0cy5zaGlmdCgpO1xuXG4gIHJldHVybiBkcm9wZG93bjtcbn07XG5cbmNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAvLyBtb2RlbC5hZGR0b2RvXG4gIGNvbnNvbGUubG9nKFwic3VibWl0IG5ldyB0b2RvIGV2ZW50IGFuZCB1cGRhdGUgdmlld1wiKTtcbiAgLy92aWV3LnVwZGF0ZU1haW5cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvamVjdHMpIHtcbiAgY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpZGVOYXYuY2xhc3NMaXN0LmFkZChcInNpZGUtbmF2XCIpO1xuXG4gIGNvbnN0IG5hdiA9IG5hdkxpc3QoW1wiSW5ib3hcIiwgXCJUb2RheVwiLCBcIlVwY29taW5nXCJdKTtcblxuICBzaWRlTmF2LmFwcGVuZENoaWxkKG5hdik7XG4gIHNpZGVOYXYuYXBwZW5kQ2hpbGQobmF2TGlzdChwcm9qZWN0cykpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XG59XG5cbmNvbnN0IG5hdkxpc3QgPSAobGlzdCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICBmb3IgKGxldCBpdGVtIG9mIGxpc3QpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGxpbmspO1xuICAgIGxpbmsudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIHVsLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICB9XG5cbiAgbmF2LmFwcGVuZENoaWxkKHVsKTtcbiAgcmV0dXJuIG5hdjtcbn07XG4iLCJpbXBvcnQgVmlldyBmcm9tIFwiLi4vVmlld1wiO1xuaW1wb3J0IGVkaXRGb3JtIGZyb20gXCIuL2VkaXRmb3JtXCI7XG5cbi8vZXhwZWN0OiBsaXN0IG9mIHRvZG8gb2JqZWN0c1xuLy9kbzogcmVuZGVyIGVhY2ggb2JqZWN0IHRvIC50YXNrTGlzdCBhbmQgcmV0dXJuIGl0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodG9kb3MsIHByb2plY3RzKSB7XG4gIGNvbnN0IGxpc3QgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrTGlzdFwiKTtcblxuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBjcmVhdGVUYXNrKHRvZG8sIHByb2plY3RzKTtcbiAgICBsaXN0LmFwcGVuZChsaXN0SXRlbSk7XG4gIH0pO1xuXG4gIHJldHVybiBsaXN0O1xufVxuXG5jb25zdCBjcmVhdGVUYXNrID0gKHRvZG8sIHByb2plY3RzKSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24gfSA9IHRvZG87XG4gIGNvbnN0IHRhc2sgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrXCIpO1xuICBjb25zdCBjaGVja2JveCA9IFZpZXcuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImNpcmNsZS1jaGVja2JveFwiKTtcbiAgY29uc3QgdGFza05hbWUgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJ0YXNrLW5hbWVcIik7XG4gIHRhc2tOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgdGFzay5hcHBlbmQoY2hlY2tib3gsIHRhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24pO1xuXG4gIHRhc2sub25jbGljayA9ICgpID0+IHtcbiAgICBlZGl0Rm9ybSh0b2RvLCBwcm9qZWN0cyk7XG4gIH07XG5cbiAgcmV0dXJuIHRhc2s7XG59O1xuIiwiY29uc3QgTGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZCA9ICh0YXNrKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlLmxlbmd0aCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmUgPSAodGFzaykgPT4ge1xuICAgIGZvciAobGV0IHZhbHVlIGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChpbmRleCwgdGFzaykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGluZGV4KSwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICB9O1xuXG4gIGNvbnN0IHRvQXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpKSk7XG4gICAgICBsaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIGNvbnN0IGxlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGQsIHJlbW92ZUFsbCwgcmVtb3ZlLCBpc0VtcHR5LCB1cGRhdGUsIHRvQXJyYXksIGxlbmd0aCwgZ2V0SXRlbSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlTmF2XCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBsaXN0IGZyb20gXCIuL2RhdGEvdGFza3NcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9Nb2RlbFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vVmlld1wiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vQ29udHJvbGxlclwiO1xuXG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcbmNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCk7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcih2aWV3LCBtb2RlbCk7XG5cbmNvbnRyb2xsZXIuaW5pdCgpO1xuY29udHJvbGxlci5iaW5kaGFuZGxlcnMoKTtcbi8vIGNvbnN0IG5hdiA9IE5hdigpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuYXYpO1xuLy8gY29uc3Qgc2lkZU5hdiA9IFNpZGVOYXYoKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZU5hdik7XG4vLyBjb25zdCBtYWluID0gTWFpbigpO1xuLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==