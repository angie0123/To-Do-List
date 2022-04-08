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

/***/ "./src/components/addTask.js":
/*!***********************************!*\
  !*** ./src/components/addTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _editform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editform.js */ "./src/components/editform.js");
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/tasks */ "./src/data/tasks.js");



function addTask() {
  const addTask = document.createElement("div");
  addTask.classList.add("addTask");

  const addIcon = document.createElement("div");
  addIcon.classList.add("icon");
  addIcon.textContent = "+";

  addTask.appendChild(addIcon);

  const message = document.createElement("div");
  message.classList.add("prompt");
  message.textContent = "Add task";

  addTask.appendChild(message);

  addTask.onclick = () => {
    addTask.replaceWith(newTaskForm());
  };

  return addTask;
}

const newTaskForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "newForm");
  const formContent = document.createElement("div");
  formContent.classList.add("form-content");
  form.appendChild(formContent);

  addTextInputs(formContent);
  addBtnInputs(formContent);
  addButtons(form);

  return form;
};

const addTextInputs = (container) => {
  container.appendChild(nameField());
  container.appendChild(descriptionField());
};

const addButtons = (container) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const addBtn = document.createElement("button");
  addBtn.disabled = true;
  addBtn.addEventListener("click", submitHandler);
  addBtn.classList.add("primary-btn");
  addBtn.classList.add("button");
  addBtn.textContent = "Add Task";

  const cancelBtn = document.createElement("button");
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementById("newForm");
    const parent = form.parentNode;
    parent.removeChild(form);
    parent.appendChild(addTask());
  });
  cancelBtn.classList.add("secondary-btn");
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.appendChild(addBtn);
  btnContainer.appendChild(cancelBtn);

  container.appendChild(btnContainer);
};

const nameField = () => {
  const nameField = document.createElement("div");
  nameField.classList.add("input-container");

  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "name");
  inputName.setAttribute("placeholder", "eg. Take out the garbage by 10am");
  inputName.addEventListener("keyup", nameHandler);

  nameField.appendChild(labelName);
  nameField.appendChild(inputName);

  return nameField;
};

const descriptionField = () => {
  const descriptionField = document.createElement("div");
  descriptionField.classList.add("input-container");

  const descriptionName = document.createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "description");
  descriptionInput.setAttribute("placeholder", "Description");

  descriptionField.appendChild(descriptionName);
  descriptionField.appendChild(descriptionInput);
  return descriptionField;
};

const addBtnInputs = (container) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-inputs-container");

  const dateInput = document.createElement("input");
  dateInput.classList.add("button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  btnContainer.appendChild(dateInput);

  btnContainer.appendChild(projectDropDown());

  container.appendChild(btnContainer);
};

const nameHandler = (event) => {
  if (event.target.value != "") {
    const addBtn = document.querySelector(".primary-btn");
    addBtn.disabled = false;
  } else {
    addBtn.disabled = true;
  }
};
const projects = ["Welcome!", "New Project"];

const projectDropDown = () => {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("id", "project");
  dropdown.classList.add("button");
  const inbox = document.createElement("option");
  inbox.value = "inbox";
  inbox.textContent = "inbox";
  dropdown.appendChild(inbox);

  for (let project of projects) {
    const listItem = document.createElement("option");
    listItem.textContent = project;
    listItem.value = project;
    dropdown.appendChild(listItem);
  }
  return dropdown;
};

const submitHandler = (event) => {
  event.preventDefault();

  addTaskToList();

  const form = document.getElementById("newForm");
  const content = form.parentNode;
  const newForm = newTaskForm();
  const newList = taskList();
  content.removeChild(form);
  if (document.querySelector(".taskList")) {
    document.querySelector(".taskList").replaceWith(newList);
  } else {
    content.appendChild(newList);
  }
  content.appendChild(newForm);
};

const taskList = () => {
  // List.only ('inbox)   coming soon!
  const container = document.createElement("div");
  container.classList.add("taskList");

  for (let i = 0; i < _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].length(); i++) {
    const taskObj = _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getItem(i);
    const listItem = renderTask(taskObj, i);
    container.appendChild(listItem);
  }

  return container;
};

const renderTask = ({ name, description }, index) => {
  const task = document.createElement("div");
  task.classList.add("task");

  const checkbox = document.createElement("div");
  checkbox.classList.add("circle-checkbox");
  task.appendChild(checkbox);

  const taskName = document.createElement("div");
  taskName.classList.add("task-name");
  taskName.textContent = name;
  task.appendChild(taskName);

  const taskDescription = document.createElement("div");
  taskDescription.classList.add("description");
  taskDescription.textContent = description;
  task.appendChild(taskDescription);
  task.setAttribute("data-index", index);

  task.onclick = () => {
    (0,_editform_js__WEBPACK_IMPORTED_MODULE_0__["default"])(index);
  };

  return task;
};

const addTaskToList = () => {
  const form = document.getElementById("newForm");
  const formData = form.elements;

  const newTask = {};
  for (let input of formData) {
    if (input.id) {
      newTask[input.id] = input.value;
    }
  }

  _data_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].add(newTask);
};


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
/* harmony import */ var _data_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/tasks */ "./src/data/tasks.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(index) {
  const taskIndex = event.currentTarget.getAttribute("data-index");
  const task = _data_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getItem(index);

  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const card = document.createElement("div");
  card.classList.add("card");
  overlay.appendChild(card);

  card.appendChild(form(task, index));

  document.body.appendChild(overlay);
}

const form = (task, index) => {
  const form = document.createElement("form");
  form.setAttribute("id", "editForm");
  const formContent = document.createElement("div");
  formContent.classList.add("form-content");
  form.appendChild(formContent);

  addTextInputs(formContent, task);
  addBtnInputs(formContent, task);
  addButtons(form, index);

  return form;
};

const addTextInputs = (container, task) => {
  container.appendChild(nameField(task));
  container.appendChild(descriptionField(task));
};

const nameField = (task) => {
  const nameField = document.createElement("div");
  nameField.classList.add("input-container");

  const labelName = document.createElement("label");
  labelName.setAttribute("for", "name");
  labelName.textContent = "Task Name";

  const inputName = document.createElement("input");
  inputName.setAttribute("id", "name");
  inputName.value = task.name;

  nameField.appendChild(labelName);
  nameField.appendChild(inputName);

  return nameField;
};

const descriptionField = (task) => {
  const descriptionField = document.createElement("div");
  descriptionField.classList.add("input-container");

  const descriptionName = document.createElement("label");
  descriptionName.setAttribute("for", "description");
  descriptionName.textContent = "Task Description";

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("id", "description");

  if (task.description == "") {
    descriptionInput.setAttribute("placeholder", "Description");
  } else {
    descriptionInput.value = task.description;
  }

  descriptionField.appendChild(descriptionName);
  descriptionField.appendChild(descriptionInput);
  return descriptionField;
};

const addButtons = (container, index) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-container");

  const saveBtn = document.createElement("button");
  saveBtn.addEventListener("click", () => {
    submitHandler(index);
  });
  saveBtn.classList.add("primary-btn");
  saveBtn.classList.add("button");
  saveBtn.textContent = "Save";

  const cancelBtn = document.createElement("button");
  cancelBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const form = document.getElementById("editForm");
    const parent = form.parentNode;
    parent.removeChild(form);
    parent.appendChild(addTask());
  });
  cancelBtn.classList.add("secondary-btn");
  cancelBtn.classList.add("button");
  cancelBtn.textContent = "Cancel";

  btnContainer.appendChild(saveBtn);
  btnContainer.appendChild(cancelBtn);

  container.appendChild(btnContainer);
};

const addBtnInputs = (container, task) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("btn-inputs-container");

  const dateInput = document.createElement("input");
  dateInput.classList.add("button");
  dateInput.setAttribute("id", "date");
  dateInput.setAttribute("type", "date");

  if (task.date !== "") {
    dateInput.value = task.date;
  }

  btnContainer.appendChild(dateInput);

  btnContainer.appendChild(projectDropDown(task));

  container.appendChild(btnContainer);
};

//dummy projects
const projects = ["Welcome!", "New Project"];

const projectDropDown = (task) => {
  const dropdown = document.createElement("select");
  dropdown.setAttribute("id", "project");
  dropdown.classList.add("button");

  const projectOption = createProjectOption(task.project);
  dropdown.appendChild(projectOption);

  for (let project of projects) {
    const projectOption = createProjectOption(project);
    dropdown.appendChild(projectOption);
  }
  return dropdown;
};

const createProjectOption = (project) => {
  const projectOption = document.createElement("option");
  projectOption.value = project;
  projectOption.textContent = project;

  return projectOption;
};

const submitHandler = (index) => {
  event.preventDefault();

  updateList(index);
  updateMain();
  closeModal();
};

const closeModal = () => {
  const modal = document.querySelector(".overlay");
  modal.remove();
};

const updateList = (index) => {
  const form = document.getElementById("editForm");
  const formData = form.elements;

  const newTask = {};
  for (let input of formData) {
    if (input.id) {
      newTask[input.id] = input.value;
    }
  }

  _data_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].update(index, newTask);
};


/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/components/addTask.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view */ "./src/view.js");



// component inject route name and todos for that route
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(route, todos) {
  const container = _view__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", "main-container");
  const main = _view__WEBPACK_IMPORTED_MODULE_1__["default"].createElement("div", "main");
  const heading = createHeading(route);

  container.append(main);
  main.append(heading);

  // main.appendChild(addTask(myToDos));

  document.body.appendChild(container);
}

const createHeading = (route) => {
  const h1 = document.createElement("h1");
  h1.textContent = route;

  return h1;
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


/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
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

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
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
    (0,_components_sideNav__WEBPACK_IMPORTED_MODULE_1__["default"])(["projects"]); // insert projects here
    (0,_components_main__WEBPACK_IMPORTED_MODULE_2__["default"])("inbox", [
      { name: "ello", description: "meh", date: "", project: "inbox", id: 0 },
      { name: "two", description: "meh", date: "", project: "inbox", id: 1 },
      { name: "three", description: "meh", date: "", project: "inbox", id: 2 },
    ]); //insert route here
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


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
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/view.js");








const model = new _model__WEBPACK_IMPORTED_MODULE_5__["default"]();
const view = new _view__WEBPACK_IMPORTED_MODULE_6__["default"]();
view.render();

// const nav = Nav();
// document.body.appendChild(nav);
// const sideNav = SideNav();
// document.body.appendChild(sideNav);
// const main = Main();
// document.body.appendChild(main);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsc0VBQXNFO0FBQzlFLFFBQVE7QUFDUjtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQzdCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUNjO0FBQ1E7QUFDTjtBQUNMO0FBQ0o7QUFDRjs7QUFFMUIsa0JBQWtCLDhDQUFLO0FBQ3ZCLGlCQUFpQiw2Q0FBSTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2VkaXRmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlTmF2LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGF0YS90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIC0tcmVkOiAjZGQ0YjM5O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxufVxcblxcbi5uYXYge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI5MHB4IDFmcjtcXG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbn1cXG5cXG4ubmF2IC5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2lkZS1uYXYge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbiAgaGVpZ2h0OiA5NXZoO1xcbiAgcGFkZGluZzogNjBweCA0cHggMHB4IDYwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbm5hdiB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG51bCBsaSB7XFxuICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICBwYWRkaW5nOiA1cHggMCA1cHggNXB4O1xcbn1cXG5cXG51bCBsaTpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG5cXG51bCBsaSBhIHtcXG4gIHBhZGRpbmc6IGluaGVyaXQ7XFxufVxcblxcbm5hdiArIG5hdiB7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgcGFkZGluZzogNXZoIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gIHdpZHRoOiBjbGFtcCgzMDBweCwgNjAlLCA3MDBweCk7XFxufVxcblxcbi5tYWluIGgxIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi5hZGRUYXNrIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZFRhc2sgLmljb24ge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuXFxuLmFkZFRhc2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciAuaWNvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG4uYWRkVGFzayAucHJvbXB0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiBncmV5O1xcbn1cXG4uYWRkVGFzazpob3ZlciAucHJvbXB0IHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xcbn1cXG5cXG4uZm9ybS1jb250ZW50IHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDA7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQ6Zm9jdXMtd2l0aGluIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG5mb3JtIGlucHV0LFxcbmZvcm0gdGV4dGFyZWEsXFxuZm9ybSBidXR0b24sXFxuZm9ybSAuYnV0dG9uIHtcXG4gIGFsbDogdW5zZXQ7XFxufVxcblxcbmZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmZvcm0gdGV4dGFyZWEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0I25hbWU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvcm0gbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ0bi1pbnB1dHMtY29udGFpbmVyIHtcXG4gIGN1cnNvcjogdGV4dDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiA0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuZm9ybSAuYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM1NTU7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbn1cXG5cXG5mb3JtIC5idXR0b24gb3B0aW9uIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcblxcbi5idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG59XFxuXFxuLmJ0bi1pbnB1dHMtY29udGFpbmVyIC5idXR0b24ge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgd2lkdGg6IGF1dG87XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW4tbGVmdDogLTEycHg7XFxufVxcblxcbi5idG4tY29udGFpbmVyIC5idXR0b24ge1xcbiAgbWFyZ2luOiAxMnB4IDAgMCAxMnB4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5idXR0b24ucHJpbWFyeS1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGMzZjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uYnV0dG9uLnByaW1hcnktYnRuW2Rpc2FibGVkXSB7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYnV0dG9uLnNlY29uZGFyeS1idG4ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuLnRhc2sge1xcbiAgcGFkZGluZzogOHB4IDA7XFxufVxcblxcbi50YXNrOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogT1ZFUkxBWSBTVFlMRVMgKi9cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub3ZlcmxheSAuY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweCAyNHB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICB3aWR0aDogY2xhbXAoNDUwcHgsIDUwJSwgNjUwcHgpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9z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O0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgLS1yZWQ6ICNkZDRiMzk7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG59XFxuXFxuLm5hdiB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcXG4gIGhlaWdodDogNXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjkwcHggMWZyO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxufVxcblxcbi5uYXYgLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICBncmlkLWNvbHVtbjogMTtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICBwYWRkaW5nOiA2MHB4IDRweCAwcHggNjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxubmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbnVsIGxpIHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIHBhZGRpbmc6IDVweCAwIDVweCA1cHg7XFxufVxcblxcbnVsIGxpOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxufVxcblxcbnVsIGxpIGEge1xcbiAgcGFkZGluZzogaW5oZXJpdDtcXG59XFxuXFxubmF2ICsgbmF2IHtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBwYWRkaW5nOiA1dmggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA2MCUsIDcwMHB4KTtcXG59XFxuXFxuLm1haW4gaDEge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLmFkZFRhc2sge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkVGFzayAuaWNvbiB7XFxuICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG5cXG4uYWRkVGFzazpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGRUYXNrOmhvdmVyIC5pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XFxufVxcblxcbi5hZGRUYXNrIC5wcm9tcHQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY29sb3I6IGdyZXk7XFxufVxcbi5hZGRUYXNrOmhvdmVyIC5wcm9tcHQge1xcbiAgY29sb3I6IHZhcigtLXJlZCk7XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogNHB4IDA7XFxuICBtYXJnaW4tYm90dG9tOiA5cHg7XFxufVxcblxcbi5mb3JtLWNvbnRlbnQge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMDtcXG59XFxuXFxuLmZvcm0tY29udGVudDpmb2N1cy13aXRoaW4ge1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxufVxcblxcbmZvcm0gaW5wdXQsXFxuZm9ybSB0ZXh0YXJlYSxcXG5mb3JtIGJ1dHRvbixcXG5mb3JtIC5idXR0b24ge1xcbiAgYWxsOiB1bnNldDtcXG59XFxuXFxuZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZm9ybSB0ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQjbmFtZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnRuLWlucHV0cy1jb250YWluZXIge1xcbiAgY3Vyc29yOiB0ZXh0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbHVtbi1nYXA6IDRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5mb3JtIC5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzU1NTtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxufVxcblxcbmZvcm0gLmJ1dHRvbiBvcHRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbn1cXG5cXG4uYnRuLWlucHV0cy1jb250YWluZXIgLmJ1dHRvbiB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICB3aWR0aDogYXV0bztcXG59XFxuXFxuLmJ0bi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1sZWZ0OiAtMTJweDtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgLmJ1dHRvbiB7XFxuICBtYXJnaW46IDEycHggMCAwIDEycHg7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmJ1dHRvbi5wcmltYXJ5LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGI0YzNmO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5idXR0b24ucHJpbWFyeS1idG5bZGlzYWJsZWRdIHtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5idXR0b24uc2Vjb25kYXJ5LWJ0biB7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbn1cXG5cXG4udGFzayB7XFxuICBwYWRkaW5nOiA4cHggMDtcXG59XFxuXFxuLnRhc2s6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBPVkVSTEFZIFNUWUxFUyAqL1xcblxcbi5vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vdmVybGF5IC5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDI0cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIHdpZHRoOiBjbGFtcCg0NTBweCwgNTAlLCA2NTBweCk7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcblxuICBuYXYuYXBwZW5kQ2hpbGQobG9nbygpKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChuYXYpO1xufVxuXG5jb25zdCBsb2dvID0gKCkgPT4ge1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nb1wiKTtcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiVG8gZG8gbGlzdFwiO1xuXG4gIHJldHVybiBsb2dvO1xufTtcbiIsImltcG9ydCBlZGl0Rm9ybSBmcm9tIFwiLi9lZGl0Zm9ybS5qc1wiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4uL2RhdGEvdGFza3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVGFzaygpIHtcbiAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZFRhc2suY2xhc3NMaXN0LmFkZChcImFkZFRhc2tcIik7XG5cbiAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZEljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gIGFkZEljb24udGV4dENvbnRlbnQgPSBcIitcIjtcblxuICBhZGRUYXNrLmFwcGVuZENoaWxkKGFkZEljb24pO1xuXG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9tcHRcIik7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgYWRkVGFzay5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblxuICBhZGRUYXNrLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgYWRkVGFzay5yZXBsYWNlV2l0aChuZXdUYXNrRm9ybSgpKTtcbiAgfTtcblxuICByZXR1cm4gYWRkVGFzaztcbn1cblxuY29uc3QgbmV3VGFza0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld0Zvcm1cIik7XG4gIGNvbnN0IGZvcm1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGVudFwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29udGVudCk7XG5cbiAgYWRkVGV4dElucHV0cyhmb3JtQ29udGVudCk7XG4gIGFkZEJ0bklucHV0cyhmb3JtQ29udGVudCk7XG4gIGFkZEJ1dHRvbnMoZm9ybSk7XG5cbiAgcmV0dXJuIGZvcm07XG59O1xuXG5jb25zdCBhZGRUZXh0SW5wdXRzID0gKGNvbnRhaW5lcikgPT4ge1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZUZpZWxkKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25GaWVsZCgpKTtcbn07XG5cbmNvbnN0IGFkZEJ1dHRvbnMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEhhbmRsZXIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcInByaW1hcnktYnRuXCIpO1xuICBhZGRCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdGb3JtXCIpO1xuICAgIGNvbnN0IHBhcmVudCA9IGZvcm0ucGFyZW50Tm9kZTtcbiAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGFkZFRhc2soKSk7XG4gIH0pO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcInNlY29uZGFyeS1idG5cIik7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbn07XG5cbmNvbnN0IG5hbWVGaWVsZCA9ICgpID0+IHtcbiAgY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmFtZUZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbE5hbWUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmFtZVwiKTtcbiAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gXCJUYXNrIE5hbWVcIjtcblxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5hbWVcIik7XG4gIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcImVnLiBUYWtlIG91dCB0aGUgZ2FyYmFnZSBieSAxMGFtXCIpO1xuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIG5hbWVIYW5kbGVyKTtcblxuICBuYW1lRmllbGQuYXBwZW5kQ2hpbGQobGFiZWxOYW1lKTtcbiAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVGaWVsZDtcbn07XG5cbmNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSAoKSA9PiB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXNjcmlwdGlvbkZpZWxkLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbk5hbWUuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gIGRlc2NyaXB0aW9uTmFtZS50ZXh0Q29udGVudCA9IFwiVGFzayBEZXNjcmlwdGlvblwiO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuXG4gIGRlc2NyaXB0aW9uRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25OYW1lKTtcbiAgZGVzY3JpcHRpb25GaWVsZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgcmV0dXJuIGRlc2NyaXB0aW9uRmllbGQ7XG59O1xuXG5jb25zdCBhZGRCdG5JbnB1dHMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWlucHV0cy1jb250YWluZXJcIik7XG5cbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RHJvcERvd24oKSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBuYW1lSGFuZGxlciA9IChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlICE9IFwiXCIpIHtcbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW1hcnktYnRuXCIpO1xuICAgIGFkZEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGFkZEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gIH1cbn07XG5jb25zdCBwcm9qZWN0cyA9IFtcIldlbGNvbWUhXCIsIFwiTmV3IFByb2plY3RcIl07XG5cbmNvbnN0IHByb2plY3REcm9wRG93biA9ICgpID0+IHtcbiAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBkcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RcIik7XG4gIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGNvbnN0IGluYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgaW5ib3gudmFsdWUgPSBcImluYm94XCI7XG4gIGluYm94LnRleHRDb250ZW50ID0gXCJpbmJveFwiO1xuICBkcm9wZG93bi5hcHBlbmRDaGlsZChpbmJveCk7XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsaXN0SXRlbS50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgbGlzdEl0ZW0udmFsdWUgPSBwcm9qZWN0O1xuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfVxuICByZXR1cm4gZHJvcGRvd247XG59O1xuXG5jb25zdCBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgYWRkVGFza1RvTGlzdCgpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0Zvcm1cIik7XG4gIGNvbnN0IGNvbnRlbnQgPSBmb3JtLnBhcmVudE5vZGU7XG4gIGNvbnN0IG5ld0Zvcm0gPSBuZXdUYXNrRm9ybSgpO1xuICBjb25zdCBuZXdMaXN0ID0gdGFza0xpc3QoKTtcbiAgY29udGVudC5yZW1vdmVDaGlsZChmb3JtKTtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0xpc3RcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tMaXN0XCIpLnJlcGxhY2VXaXRoKG5ld0xpc3QpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG4gIH1cbiAgY29udGVudC5hcHBlbmRDaGlsZChuZXdGb3JtKTtcbn07XG5cbmNvbnN0IHRhc2tMaXN0ID0gKCkgPT4ge1xuICAvLyBMaXN0Lm9ubHkgKCdpbmJveCkgICBjb21pbmcgc29vbiFcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrTGlzdFwiKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IExpc3QubGVuZ3RoKCk7IGkrKykge1xuICAgIGNvbnN0IHRhc2tPYmogPSBMaXN0LmdldEl0ZW0oaSk7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSByZW5kZXJUYXNrKHRhc2tPYmosIGkpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuY29uc3QgcmVuZGVyVGFzayA9ICh7IG5hbWUsIGRlc2NyaXB0aW9uIH0sIGluZGV4KSA9PiB7XG4gIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuXG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZChcImNpcmNsZS1jaGVja2JveFwiKTtcbiAgdGFzay5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1uYW1lXCIpO1xuICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIHRhc2suYXBwZW5kQ2hpbGQodGFza05hbWUpO1xuXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICB0YXNrLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIHRhc2suc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpbmRleCk7XG5cbiAgdGFzay5vbmNsaWNrID0gKCkgPT4ge1xuICAgIGVkaXRGb3JtKGluZGV4KTtcbiAgfTtcblxuICByZXR1cm4gdGFzaztcbn07XG5cbmNvbnN0IGFkZFRhc2tUb0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld0Zvcm1cIik7XG4gIGNvbnN0IGZvcm1EYXRhID0gZm9ybS5lbGVtZW50cztcblxuICBjb25zdCBuZXdUYXNrID0ge307XG4gIGZvciAobGV0IGlucHV0IG9mIGZvcm1EYXRhKSB7XG4gICAgaWYgKGlucHV0LmlkKSB7XG4gICAgICBuZXdUYXNrW2lucHV0LmlkXSA9IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIExpc3QuYWRkKG5ld1Rhc2spO1xufTtcbiIsImltcG9ydCBMaXN0IGZyb20gXCIuLi9kYXRhL3Rhc2tzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpbmRleCkge1xuICBjb25zdCB0YXNrSW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIik7XG4gIGNvbnN0IHRhc2sgPSBMaXN0LmdldEl0ZW0oaW5kZXgpO1xuXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICBvdmVybGF5LmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZm9ybSh0YXNrLCBpbmRleCkpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG59XG5cbmNvbnN0IGZvcm0gPSAodGFzaywgaW5kZXgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdEZvcm1cIik7XG4gIGNvbnN0IGZvcm1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9ybUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGVudFwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQ29udGVudCk7XG5cbiAgYWRkVGV4dElucHV0cyhmb3JtQ29udGVudCwgdGFzayk7XG4gIGFkZEJ0bklucHV0cyhmb3JtQ29udGVudCwgdGFzayk7XG4gIGFkZEJ1dHRvbnMoZm9ybSwgaW5kZXgpO1xuXG4gIHJldHVybiBmb3JtO1xufTtcblxuY29uc3QgYWRkVGV4dElucHV0cyA9IChjb250YWluZXIsIHRhc2spID0+IHtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVGaWVsZCh0YXNrKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkZpZWxkKHRhc2spKTtcbn07XG5cbmNvbnN0IG5hbWVGaWVsZCA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IG5hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hbWVGaWVsZC5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWxOYW1lLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5hbWVcIik7XG4gIGxhYmVsTmFtZS50ZXh0Q29udGVudCA9IFwiVGFzayBOYW1lXCI7XG5cbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuYW1lXCIpO1xuICBpbnB1dE5hbWUudmFsdWUgPSB0YXNrLm5hbWU7XG5cbiAgbmFtZUZpZWxkLmFwcGVuZENoaWxkKGxhYmVsTmFtZSk7XG4gIG5hbWVGaWVsZC5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xuXG4gIHJldHVybiBuYW1lRmllbGQ7XG59O1xuXG5jb25zdCBkZXNjcmlwdGlvbkZpZWxkID0gKHRhc2spID0+IHtcbiAgY29uc3QgZGVzY3JpcHRpb25GaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRlc2NyaXB0aW9uRmllbGQuY2xhc3NMaXN0LmFkZChcImlucHV0LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGRlc2NyaXB0aW9uTmFtZS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgZGVzY3JpcHRpb25OYW1lLnRleHRDb250ZW50ID0gXCJUYXNrIERlc2NyaXB0aW9uXCI7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGlmICh0YXNrLmRlc2NyaXB0aW9uID09IFwiXCIpIHtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gIH0gZWxzZSB7XG4gICAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG4gIH1cblxuICBkZXNjcmlwdGlvbkZpZWxkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTmFtZSk7XG4gIGRlc2NyaXB0aW9uRmllbGQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIHJldHVybiBkZXNjcmlwdGlvbkZpZWxkO1xufTtcblxuY29uc3QgYWRkQnV0dG9ucyA9IChjb250YWluZXIsIGluZGV4KSA9PiB7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnRuLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN1Ym1pdEhhbmRsZXIoaW5kZXgpO1xuICB9KTtcbiAgc2F2ZUJ0bi5jbGFzc0xpc3QuYWRkKFwicHJpbWFyeS1idG5cIik7XG4gIHNhdmVCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9IFwiU2F2ZVwiO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0Rm9ybVwiKTtcbiAgICBjb25zdCBwYXJlbnQgPSBmb3JtLnBhcmVudE5vZGU7XG4gICAgcGFyZW50LnJlbW92ZUNoaWxkKGZvcm0pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChhZGRUYXNrKCkpO1xuICB9KTtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWNvbmRhcnktYnRuXCIpO1xuICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiKTtcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoc2F2ZUJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xufTtcblxuY29uc3QgYWRkQnRuSW5wdXRzID0gKGNvbnRhaW5lciwgdGFzaykgPT4ge1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ0bi1pbnB1dHMtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGVcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICBpZiAodGFzay5kYXRlICE9PSBcIlwiKSB7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gdGFzay5kYXRlO1xuICB9XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3REcm9wRG93bih0YXNrKSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG59O1xuXG4vL2R1bW15IHByb2plY3RzXG5jb25zdCBwcm9qZWN0cyA9IFtcIldlbGNvbWUhXCIsIFwiTmV3IFByb2plY3RcIl07XG5cbmNvbnN0IHByb2plY3REcm9wRG93biA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgZHJvcGRvd24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0XCIpO1xuICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIpO1xuXG4gIGNvbnN0IHByb2plY3RPcHRpb24gPSBjcmVhdGVQcm9qZWN0T3B0aW9uKHRhc2sucHJvamVjdCk7XG4gIGRyb3Bkb3duLmFwcGVuZENoaWxkKHByb2plY3RPcHRpb24pO1xuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9uID0gY3JlYXRlUHJvamVjdE9wdGlvbihwcm9qZWN0KTtcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uKTtcbiAgfVxuICByZXR1cm4gZHJvcGRvd247XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0T3B0aW9uID0gKHByb2plY3QpID0+IHtcbiAgY29uc3QgcHJvamVjdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHByb2plY3RPcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICBwcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcblxuICByZXR1cm4gcHJvamVjdE9wdGlvbjtcbn07XG5cbmNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoaW5kZXgpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICB1cGRhdGVMaXN0KGluZGV4KTtcbiAgdXBkYXRlTWFpbigpO1xuICBjbG9zZU1vZGFsKCk7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcbiAgbW9kYWwucmVtb3ZlKCk7XG59O1xuXG5jb25zdCB1cGRhdGVMaXN0ID0gKGluZGV4KSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRGb3JtXCIpO1xuICBjb25zdCBmb3JtRGF0YSA9IGZvcm0uZWxlbWVudHM7XG5cbiAgY29uc3QgbmV3VGFzayA9IHt9O1xuICBmb3IgKGxldCBpbnB1dCBvZiBmb3JtRGF0YSkge1xuICAgIGlmIChpbnB1dC5pZCkge1xuICAgICAgbmV3VGFza1tpbnB1dC5pZF0gPSBpbnB1dC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBMaXN0LnVwZGF0ZShpbmRleCwgbmV3VGFzayk7XG59O1xuIiwiaW1wb3J0IGFkZFRhc2sgZnJvbSBcIi4vYWRkVGFza1wiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4uL3ZpZXdcIjtcblxuLy8gY29tcG9uZW50IGluamVjdCByb3V0ZSBuYW1lIGFuZCB0b2RvcyBmb3IgdGhhdCByb3V0ZVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvdXRlLCB0b2Rvcykge1xuICBjb25zdCBjb250YWluZXIgPSBWaWV3LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtYWluLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbWFpbiA9IFZpZXcuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1haW5cIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVIZWFkaW5nKHJvdXRlKTtcblxuICBjb250YWluZXIuYXBwZW5kKG1haW4pO1xuICBtYWluLmFwcGVuZChoZWFkaW5nKTtcblxuICAvLyBtYWluLmFwcGVuZENoaWxkKGFkZFRhc2sobXlUb0RvcykpO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuY29uc3QgY3JlYXRlSGVhZGluZyA9IChyb3V0ZSkgPT4ge1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSByb3V0ZTtcblxuICByZXR1cm4gaDE7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHByb2plY3RzKSB7XG4gIGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoXCJzaWRlLW5hdlwiKTtcblxuICBjb25zdCBuYXYgPSBuYXZMaXN0KFtcIkluYm94XCIsIFwiVG9kYXlcIiwgXCJVcGNvbWluZ1wiXSk7XG5cbiAgc2lkZU5hdi5hcHBlbmRDaGlsZChuYXYpO1xuICBzaWRlTmF2LmFwcGVuZENoaWxkKG5hdkxpc3QocHJvamVjdHMpKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xufVxuXG5jb25zdCBuYXZMaXN0ID0gKGxpc3QpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgZm9yIChsZXQgaXRlbSBvZiBsaXN0KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICBsaW5rLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICB1bC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfVxuXG4gIG5hdi5hcHBlbmRDaGlsZCh1bCk7XG4gIHJldHVybiBuYXY7XG59O1xuIiwiY29uc3QgTGlzdCA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZCA9ICh0YXNrKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlLmxlbmd0aCwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUFsbCA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmUgPSAodGFzaykgPT4ge1xuICAgIGZvciAobGV0IHZhbHVlIGluIGxvY2FsU3RvcmFnZSkge1xuICAgICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0VtcHR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoID09PSAwO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZSA9IChpbmRleCwgdGFzaykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEpTT04uc3RyaW5naWZ5KGluZGV4KSwgSlNPTi5zdHJpbmdpZnkodGFzaykpO1xuICB9O1xuXG4gIGNvbnN0IHRvQXJyYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShpKSk7XG4gICAgICBsaXN0LnB1c2godGFzayk7XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xuICB9O1xuXG4gIGNvbnN0IGxlbmd0aCA9ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtID0gKGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpKTtcbiAgfTtcblxuICByZXR1cm4geyBhZGQsIHJlbW92ZUFsbCwgcmVtb3ZlLCBpc0VtcHR5LCB1cGRhdGUsIHRvQXJyYXksIGxlbmd0aCwgZ2V0SXRlbSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImNsYXNzIE1vZGVsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50b2RvcyA9IFtdO1xuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcbiAgfVxuXG4gIGFkZFRvZG8oeyBuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJvamVjdCB9KSB7XG4gICAgY29uc3QgdG9kbyA9IHtcbiAgICAgIG5hbWUsXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICAgIGRhdGUsXG4gICAgICBwcm9qZWN0LFxuICAgICAgaWQ6IHRoaXMudG9kb3MubGVuZ3RoLFxuICAgIH07XG4gICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICB9XG5cbiAgYWRkUHJvamVjdChuYW1lKSB7XG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKHsgbmFtZSwgaWQ6IHRoaXMucHJvamVjdHMubGVuZ3RoIH0pO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChpZCkge1xuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gaWQpO1xuICB9XG5cbiAgZGVsZXRlVG9kbyhpZCkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pZCAhPT0gaWQpO1xuICB9XG5cbiAgZWRpdFRvZG8oaWQsIHsgbmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIHByb2plY3QgfSkge1xuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcm9qZWN0LCBpZDogdG9kby5pZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZG87XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iLCJpbXBvcnQgcmVuZGVyTmF2IGZyb20gXCIuL2NvbXBvbmVudHMvTmF2XCI7XG5pbXBvcnQgcmVuZGVyc2lkZU5hdiBmcm9tIFwiLi9jb21wb25lbnRzL3NpZGVOYXZcIjtcbmltcG9ydCByZW5kZXJNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpblwiO1xuXG5jbGFzcyBWaWV3IHtcbiAgY29uc3RydWN0b3IodG9kb3MsIHByb2plY3RzKSB7XG4gICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVFbGVtZW50KHR5cGUsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZW5kZXJOYXYoKTtcbiAgICByZW5kZXJzaWRlTmF2KFtcInByb2plY3RzXCJdKTsgLy8gaW5zZXJ0IHByb2plY3RzIGhlcmVcbiAgICByZW5kZXJNYWluKFwiaW5ib3hcIiwgW1xuICAgICAgeyBuYW1lOiBcImVsbG9cIiwgZGVzY3JpcHRpb246IFwibWVoXCIsIGRhdGU6IFwiXCIsIHByb2plY3Q6IFwiaW5ib3hcIiwgaWQ6IDAgfSxcbiAgICAgIHsgbmFtZTogXCJ0d29cIiwgZGVzY3JpcHRpb246IFwibWVoXCIsIGRhdGU6IFwiXCIsIHByb2plY3Q6IFwiaW5ib3hcIiwgaWQ6IDEgfSxcbiAgICAgIHsgbmFtZTogXCJ0aHJlZVwiLCBkZXNjcmlwdGlvbjogXCJtZWhcIiwgZGF0ZTogXCJcIiwgcHJvamVjdDogXCJpbmJveFwiLCBpZDogMiB9LFxuICAgIF0pOyAvL2luc2VydCByb3V0ZSBoZXJlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4vY29tcG9uZW50cy9zaWRlTmF2XCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjtcbmltcG9ydCBsaXN0IGZyb20gXCIuL2RhdGEvdGFza3NcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IFZpZXcgZnJvbSBcIi4vdmlld1wiO1xuXG5jb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpO1xuY29uc3QgdmlldyA9IG5ldyBWaWV3KCk7XG52aWV3LnJlbmRlcigpO1xuXG4vLyBjb25zdCBuYXYgPSBOYXYoKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmF2KTtcbi8vIGNvbnN0IHNpZGVOYXYgPSBTaWRlTmF2KCk7XG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNpZGVOYXYpO1xuLy8gY29uc3QgbWFpbiA9IE1haW4oKTtcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=