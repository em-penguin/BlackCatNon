webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HideAppBar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"./node_modules/@material-ui/core/esm/AppBar/index.js\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"./node_modules/@material-ui/core/esm/Toolbar/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ \"./node_modules/@material-ui/core/esm/useScrollTrigger/index.js\");\n/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Slide */ \"./node_modules/@material-ui/core/esm/Slide/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Menu */ \"./node_modules/@material-ui/icons/Menu.js\");\n/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/kojima/Documents/create/git/blackcatnon/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\nfunction HideOnScroll(props) {\n  _s();\n\n  var children = props.children,\n      window = props.window; // Note that you normally won't need to set the window ref as useScrollTrigger\n  // will default to window.\n  // This is only being set here because the demo is in an iframe.\n\n  var trigger = Object(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n    target: window ? window() : undefined\n  });\n  return __jsx(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    appear: false,\n    direction: \"down\",\n    \"in\": !trigger,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, children);\n}\n\n_s(HideOnScroll, \"EC2GbbZl9x3XKoXLVx1H89cOBi0=\", false, function () {\n  return [_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\n});\n\n_c = HideOnScroll;\nHideOnScroll.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired,\n\n  /**\n   * Injected by the documentation to work in an iframe.\n   * You won't need it on your project.\n   */\n  window: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n};\nfunction HideAppBar(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    position: \"static\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    variant: \"dense\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    edge: \"start\",\n    color: \"inherit\",\n    \"aria-label\": \"menu\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 25\n    }\n  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    variant: \"h6\",\n    color: \"inherit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 21\n    }\n  }, \"Photos\"))));\n}\n_c2 = HideAppBar;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"HideOnScroll\");\n$RefreshReg$(_c2, \"HideAppBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIaWRlT25TY3JvbGwiLCJwcm9wcyIsImNoaWxkcmVuIiwid2luZG93IiwidHJpZ2dlciIsInVzZVNjcm9sbFRyaWdnZXIiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50IiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJIaWRlQXBwQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFBQTs7QUFBQSxNQUNqQkMsUUFEaUIsR0FDSUQsS0FESixDQUNqQkMsUUFEaUI7QUFBQSxNQUNQQyxNQURPLEdBQ0lGLEtBREosQ0FDUEUsTUFETyxFQUV6QjtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxrRkFBZ0IsQ0FBQztBQUFFQyxVQUFNLEVBQUVILE1BQU0sR0FBR0EsTUFBTSxFQUFULEdBQWNJO0FBQTlCLEdBQUQsQ0FBaEM7QUFFQSxTQUNJLE1BQUMsK0RBQUQ7QUFBTyxVQUFNLEVBQUcsS0FBaEI7QUFBd0IsYUFBUyxFQUFDLE1BQWxDO0FBQXlDLFVBQUssQ0FBQ0gsT0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNRixRQUROLENBREo7QUFLSDs7R0FaUUYsWTtVQUtXSywwRTs7O0tBTFhMLFk7QUFjVEEsWUFBWSxDQUFDUSxTQUFiLEdBQXlCO0FBQ3JCTixVQUFRLEVBQUVPLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JDLFVBRFA7O0FBRXJCO0FBQ0o7QUFDQTtBQUNBO0FBQ0lSLFFBQU0sRUFBRU0saURBQVMsQ0FBQ0c7QUFORyxDQUF6QjtBQVNlLFNBQVNDLFVBQVQsQ0FBb0JaLEtBQXBCLEVBQTJCO0FBQ3RDLFNBQ0ksTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsZ0VBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsaUVBQUQ7QUFBUyxXQUFPLEVBQUMsT0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFBWSxRQUFJLEVBQUMsT0FBakI7QUFBeUIsU0FBSyxFQUFDLFNBQS9CO0FBQXlDLGtCQUFXLE1BQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxvRUFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUF5QixTQUFLLEVBQUMsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLENBREosQ0FESixDQURKO0FBY0g7TUFmdUJZLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXInO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcblxuZnVuY3Rpb24gSGlkZU9uU2Nyb2xsKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgd2luZG93IH0gPSBwcm9wcztcbiAgICAvLyBOb3RlIHRoYXQgeW91IG5vcm1hbGx5IHdvbid0IG5lZWQgdG8gc2V0IHRoZSB3aW5kb3cgcmVmIGFzIHVzZVNjcm9sbFRyaWdnZXJcbiAgICAvLyB3aWxsIGRlZmF1bHQgdG8gd2luZG93LlxuICAgIC8vIFRoaXMgaXMgb25seSBiZWluZyBzZXQgaGVyZSBiZWNhdXNlIHRoZSBkZW1vIGlzIGluIGFuIGlmcmFtZS5cbiAgICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7IHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8U2xpZGUgYXBwZWFyPXsgZmFsc2UgfSBkaXJlY3Rpb249XCJkb3duXCIgaW49eyAhdHJpZ2dlciB9PlxuICAgICAgICAgICAgeyBjaGlsZHJlbiB9XG4gICAgICAgIDwvU2xpZGU+XG4gICAgKTtcbn1cblxuSGlkZU9uU2Nyb2xsLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCxcbiAgICAvKipcbiAgICAgKiBJbmplY3RlZCBieSB0aGUgZG9jdW1lbnRhdGlvbiB0byB3b3JrIGluIGFuIGlmcmFtZS5cbiAgICAgKiBZb3Ugd29uJ3QgbmVlZCBpdCBvbiB5b3VyIHByb2plY3QuXG4gICAgICovXG4gICAgd2luZG93OiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhpZGVBcHBCYXIocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgICAgICAgICAgPFRvb2xiYXIgdmFyaWFudD1cImRlbnNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBob3Rvc1xuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICAgICAgPC9BcHBCYXI+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})