webpackHotUpdate_N_E("pages/index",{

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kojima/Documents/create/git/blackcatnon/static/Style.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (__jsx(\"style\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 16\n  }\n}, \"\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, font, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td{\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\toutline: 0;\\n\\tfont-size: 100%;\\n\\tvertical-align: baseline;\\n\\tbackground: transparent;\\n}\\nbody{\\n\\tline-height:1;\\n}\\nol, ul{\\n\\tlist-style:none;\\n}\\nblockquote, q{\\n\\tquotes:none;\\n}\\nblockquote:before, blockquote:after, q:before, q:after{\\n\\tcontent:'';\\n\\tcontent:none;\\n}\\n \\n:focus{\\n\\toutline:0;\\n}\\n \\nins{\\n\\ttext-decoration:none;\\n}\\ndel{\\n\\ttext-decoration:line-through;\\n}\\n \\ntable{\\n\\tborder-collapse:collapse;\\n\\tborder-spacing:0;\\n}\\n\\n\\ntr {\\n    margin:0px;\\n}\\nth {\\n  font-size:14pt;\\n  font-weight:plain;\\n  text-align:left;\\n  padding:0px 20px;\\n  margin:0px;\\n}\\ntd {\\n  font-size:14pt;\\n  font-weight:plain;\\n  text-align:left;\\n  padding:0px 20px;\\n  margin:0px;\\n}\\n.label {\\n  font-size:14pt;\\n  margin:20px 5px;\\n}\\n.login {\\n  text-align:right;\\n}\\n.account {\\n  cursor:pointer;\\n  font-size:12pt;\\n  padding:5px 10px;\\n  color:gray;\\n  border:2px solid lightgray;\\n}\\nfieldset {\\n  margin:0px 0px 30px 0px;\\n}\\ninput {\\n  border: 0px solid white;\\n  border-bottom:1px solid gray;\\n  font-size:14pt;\\n}\\nbutton {\\n  font-size:14pt;\\n  padding: 0px 20px;\\n}\\nli {\\n  font-size:14pt;\\n  cursor:pointer;\\n}\\na {\\n  text-decoration: none;\\n}\\n.logo a{\\n  color: #FFF;\\n}\\n.slider div {\\n  height: 200px;\\n}\\n.slider img {\\n  width: 100%;\\n}\\n#index #blog{\\n  display: flex;\\n  justify-content: center;\\n  align-items: flex-start;\\n  flex-wrap: wrap\\n}\\n#index section{\\n  padding: 0 2%;\\n}\\n#index section>div:nth-child(odd){\\n  background: #f5f5f5;\\n}\\n\")); // /* CSS HEX */\n// --ming 深い緑: #006d77ff;\n// --middle - blue - green　浅い緑: #83c5beff;\n// --alice - blue: 白に近い青　#edf6f9ff;\n// --unbleached - silk:薄いピンク　 #ffddd2ff;\n// --dark - salmon:　濃いピンク #e29578ff;\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RhdGljL1N0eWxlLmpzPzcxYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnMkRBQWYsRSxDQTBIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdGF0aWMvU3R5bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgPHN0eWxlPnsgYFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBmb250LCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRke1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0b3V0bGluZTogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYm9keXtcblx0bGluZS1oZWlnaHQ6MTtcbn1cbm9sLCB1bHtcblx0bGlzdC1zdHlsZTpub25lO1xufVxuYmxvY2txdW90ZSwgcXtcblx0cXVvdGVzOm5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXJ7XG5cdGNvbnRlbnQ6Jyc7XG5cdGNvbnRlbnQ6bm9uZTtcbn1cbiBcbjpmb2N1c3tcblx0b3V0bGluZTowO1xufVxuIFxuaW5ze1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbmRlbHtcblx0dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcbn1cbiBcbnRhYmxle1xuXHRib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOjA7XG59XG5cblxudHIge1xuICAgIG1hcmdpbjowcHg7XG59XG50aCB7XG4gIGZvbnQtc2l6ZToxNHB0O1xuICBmb250LXdlaWdodDpwbGFpbjtcbiAgdGV4dC1hbGlnbjpsZWZ0O1xuICBwYWRkaW5nOjBweCAyMHB4O1xuICBtYXJnaW46MHB4O1xufVxudGQge1xuICBmb250LXNpemU6MTRwdDtcbiAgZm9udC13ZWlnaHQ6cGxhaW47XG4gIHRleHQtYWxpZ246bGVmdDtcbiAgcGFkZGluZzowcHggMjBweDtcbiAgbWFyZ2luOjBweDtcbn1cbi5sYWJlbCB7XG4gIGZvbnQtc2l6ZToxNHB0O1xuICBtYXJnaW46MjBweCA1cHg7XG59XG4ubG9naW4ge1xuICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLmFjY291bnQge1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgZm9udC1zaXplOjEycHQ7XG4gIHBhZGRpbmc6NXB4IDEwcHg7XG4gIGNvbG9yOmdyYXk7XG4gIGJvcmRlcjoycHggc29saWQgbGlnaHRncmF5O1xufVxuZmllbGRzZXQge1xuICBtYXJnaW46MHB4IDBweCAzMHB4IDBweDtcbn1cbmlucHV0IHtcbiAgYm9yZGVyOiAwcHggc29saWQgd2hpdGU7XG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGdyYXk7XG4gIGZvbnQtc2l6ZToxNHB0O1xufVxuYnV0dG9uIHtcbiAgZm9udC1zaXplOjE0cHQ7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxubGkge1xuICBmb250LXNpemU6MTRwdDtcbiAgY3Vyc29yOnBvaW50ZXI7XG59XG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmxvZ28gYXtcbiAgY29sb3I6ICNGRkY7XG59XG4uc2xpZGVyIGRpdiB7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uc2xpZGVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuI2luZGV4ICNibG9ne1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcFxufVxuI2luZGV4IHNlY3Rpb257XG4gIHBhZGRpbmc6IDAgMiU7XG59XG4jaW5kZXggc2VjdGlvbj5kaXY6bnRoLWNoaWxkKG9kZCl7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5gfTwvc3R5bGU+XG5cbi8vIC8qIENTUyBIRVggKi9cbi8vIC0tbWluZyDmt7HjgYTnt5E6ICMwMDZkNzdmZjtcbi8vIC0tbWlkZGxlIC0gYmx1ZSAtIGdyZWVu44CA5rWF44GE57eROiAjODNjNWJlZmY7XG4vLyAtLWFsaWNlIC0gYmx1ZTog55m944Gr6L+R44GE6Z2S44CAI2VkZjZmOWZmO1xuLy8gLS11bmJsZWFjaGVkIC0gc2lsazroloTjgYTjg5Tjg7Pjgq/jgIAgI2ZmZGRkMmZmO1xuLy8gLS1kYXJrIC0gc2FsbW9uOuOAgOa/g+OBhOODlOODs+OCryAjZTI5NTc4ZmY7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ })

})