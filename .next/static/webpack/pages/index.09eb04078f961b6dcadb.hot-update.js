webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackToTop; });\n/* harmony import */ var _Users_kojima_Documents_create_git_blackcatnon_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/kojima/Documents/create/git/blackcatnon/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar useStyles = makeStyles(function (theme) {\n  return {\n    root: {\n      position: 'fixed',\n      bottom: theme.spacing(2),\n      right: theme.spacing(2)\n    }\n  };\n});\n\nfunction ScrollTop(props) {\n  _s();\n\n  var children = props.children,\n      window = props.window;\n  var classes = useStyles();\n  var trigger = useScrollTrigger({\n    target: window ? window() : undefined,\n    disableHysteresis: true,\n    threshold: 100\n  });\n\n  var handleClick = function handleClick(event) {\n    var anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');\n\n    if (anchor) {\n      anchor.scrollIntoView({\n        behavior: 'smooth',\n        block: 'center'\n      });\n    }\n  };\n\n  return __jsx(\"div\", {\n    \"in\": trigger,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    onClick: handleClick,\n    role: \"presentation\",\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  }, children));\n}\n\n_s(ScrollTop, \"9Nfgud74OrM4vTJnK2jFFR7w1m0=\", true, function () {\n  return [useStyles];\n});\n\n_c = ScrollTop;\nScrollTop.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired,\n  window: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func\n};\nfunction BackToTop(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, \"\\u9ED2\\u732B\\u30CE\\u30F3\\u3061\\u3083\\u3093\"), __jsx(\"div\", {\n    id: \"back-to-top-anchor\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }), props.children, __jsx(\"div\", Object(_Users_kojima_Documents_create_git_blackcatnon_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, props, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }), \"top\"));\n}\n_c2 = BackToTop;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"ScrollTop\");\n$RefreshReg$(_c2, \"BackToTop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwicG9zaXRpb24iLCJib3R0b20iLCJzcGFjaW5nIiwicmlnaHQiLCJTY3JvbGxUb3AiLCJwcm9wcyIsImNoaWxkcmVuIiwid2luZG93IiwiY2xhc3NlcyIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJoYW5kbGVDbGljayIsImV2ZW50IiwiYW5jaG9yIiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIkJhY2tUb1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLFVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNyQ0MsUUFBSSxFQUFFO0FBQ0ZDLGNBQVEsRUFBRSxPQURSO0FBRUZDLFlBQU0sRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZCxDQUZOO0FBR0ZDLFdBQUssRUFBRUwsS0FBSyxDQUFDSSxPQUFOLENBQWMsQ0FBZDtBQUhMO0FBRCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVFBLFNBQVNFLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQUEsTUFDZEMsUUFEYyxHQUNPRCxLQURQLENBQ2RDLFFBRGM7QUFBQSxNQUNKQyxNQURJLEdBQ09GLEtBRFAsQ0FDSkUsTUFESTtBQUV0QixNQUFNQyxPQUFPLEdBQUdaLFNBQVMsRUFBekI7QUFDQSxNQUFNYSxPQUFPLEdBQUdDLGdCQUFnQixDQUFDO0FBQzdCQyxVQUFNLEVBQUVKLE1BQU0sR0FBR0EsTUFBTSxFQUFULEdBQWNLLFNBREM7QUFFN0JDLHFCQUFpQixFQUFFLElBRlU7QUFHN0JDLGFBQVMsRUFBRTtBQUhrQixHQUFELENBQWhDOztBQU1BLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQixRQUFNQyxNQUFNLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDTCxNQUFOLENBQWFPLGFBQWIsSUFBOEJDLFFBQS9CLEVBQXlDQyxhQUF6QyxDQUF1RCxxQkFBdkQsQ0FBZjs7QUFFQSxRQUFJSCxNQUFKLEVBQVk7QUFDUkEsWUFBTSxDQUFDSSxjQUFQLENBQXNCO0FBQUVDLGdCQUFRLEVBQUUsUUFBWjtBQUFzQkMsYUFBSyxFQUFFO0FBQTdCLE9BQXRCO0FBQ0g7QUFDSixHQU5EOztBQVFBLFNBQ0k7QUFBSyxVQUFLZCxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFdBQU8sRUFBR00sV0FBZjtBQUE2QixRQUFJLEVBQUMsY0FBbEM7QUFBaUQsYUFBUyxFQUFHUCxPQUFPLENBQUNULElBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTU8sUUFETixDQURKLENBREo7QUFPSDs7R0F4QlFGLFM7VUFFV1IsUzs7O0tBRlhRLFM7QUEwQlRBLFNBQVMsQ0FBQ29CLFNBQVYsR0FBc0I7QUFDbEJsQixVQUFRLEVBQUVtQixpREFBUyxDQUFDQyxPQUFWLENBQWtCQyxVQURWO0FBRWxCcEIsUUFBTSxFQUFFa0IsaURBQVMsQ0FBQ0c7QUFGQSxDQUF0QjtBQUtlLFNBQVNDLFNBQVQsQ0FBbUJ4QixLQUFuQixFQUEwQjtBQUNyQyxTQUNJLE1BQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtEQURKLEVBRUk7QUFBSyxNQUFFLEVBQUMsb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR01BLEtBQUssQ0FBQ0MsUUFIWixFQUlJLCtKQUFVRCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixDQURKO0FBVUg7TUFYdUJ3QixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gICAgcm9vdDoge1xuICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxuICAgICAgICByaWdodDogdGhlbWUuc3BhY2luZygyKSxcbiAgICB9LFxufSkpO1xuXG5mdW5jdGlvbiBTY3JvbGxUb3AocHJvcHMpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XG4gICAgICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxuICAgICAgICB0aHJlc2hvbGQ6IDEwMCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGFuY2hvciA9IChldmVudC50YXJnZXQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvcignI2JhY2stdG8tdG9wLWFuY2hvcicpO1xuXG4gICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICAgIGFuY2hvci5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdjZW50ZXInIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaW49eyB0cmlnZ2VyIH0+XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyBoYW5kbGVDbGljayB9IHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzc05hbWU9eyBjbGFzc2VzLnJvb3QgfT5cbiAgICAgICAgICAgICAgICB7IGNoaWxkcmVuIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5TY3JvbGxUb3AucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuZWxlbWVudC5pc1JlcXVpcmVkLFxuICAgIHdpbmRvdzogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrVG9Ub3AocHJvcHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8aDMgPum7kueMq+ODjuODs+OBoeOCg+OCkzwvaDM+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYmFjay10by10b3AtYW5jaG9yXCIgLz5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPGRpdiB7IC4uLnByb3BzIH0+XG4gICAgICAgICAgICAgICAgdG9wXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ }),

/***/ "./components/Menu.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grow/Grow.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Grow/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js":
false,

/***/ "./node_modules/@material-ui/core/esm/IconButton/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/List/List.js":
false,

/***/ "./node_modules/@material-ui/core/esm/List/ListContext.js":
false,

/***/ "./node_modules/@material-ui/core/esm/List/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ListItem/ListItem.js":
false,

/***/ "./node_modules/@material-ui/core/esm/ListItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Menu/Menu.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Menu/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuItem/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuList/MenuList.js":
false,

/***/ "./node_modules/@material-ui/core/esm/MenuList/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/Modal.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/ModalManager.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Modal/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Popover/Popover.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Popover/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Portal/Portal.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Portal/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SvgIcon/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js":
false,

/***/ "./node_modules/@material-ui/core/esm/Unstable_TrapFocus/index.js":
false,

/***/ "./node_modules/@material-ui/core/esm/transitions/utils.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js":
false,

/***/ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js":
false,

/***/ "./node_modules/@material-ui/icons/MoreVert.js":
false,

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
false

})