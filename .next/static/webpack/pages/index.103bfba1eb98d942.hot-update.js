"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid_item.js */ \"./components/grid_item.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.66,\n            type: \"easeInOut\"\n        },\n        style: {\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \" \",\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            title,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jasondang/website/components/layouts/article.js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jasondang/website/components/layouts/article.js\",\n                    lineNumber: 23,\n                    columnNumber: 11\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item_js__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"/Users/jasondang/website/components/layouts/article.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/jasondang/website/components/layouts/article.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXVDO0FBQ1Y7QUFDbUI7QUFFaEQsSUFBTUcsUUFBUSxHQUFHO0lBQ2ZDLE1BQU0sRUFBRTtRQUFFQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtLQUFFO0lBQ25DQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxFQUFFO0tBQUU7Q0FDbEM7QUFDRCxJQUFNRyxNQUFNLEdBQUcsZ0JBQXlCO1FBQXRCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsS0FBSyxTQUFMQSxLQUFLO0lBQy9CLHFCQUNFLDhEQUFDWix5REFBYztRQUNiYyxPQUFPLEVBQUMsUUFBUTtRQUNoQkMsT0FBTyxFQUFDLE9BQU87UUFDZk4sSUFBSSxFQUFDLE1BQU07UUFDWE4sUUFBUSxFQUFFQSxRQUFRO1FBQ2xCYSxVQUFVLEVBQUU7WUFBRUMsUUFBUSxFQUFFLElBQUk7WUFBRUMsSUFBSSxFQUFFLFdBQVc7U0FBRTtRQUNqREMsS0FBSyxFQUFFO1lBQUVDLFFBQVEsRUFBRSxVQUFVO1NBQUU7a0JBRS9COztnQkFDRyxHQUFHO2dCQUNIUixLQUFLLGtCQUNKLDhEQUFDWCxrREFBSTs4QkFDSCw0RUFBQ1csT0FBSzs7NEJBQUVBLEtBQUs7NEJBQUMsR0FBQzs7Ozs7OzZCQUFROzs7Ozt5QkFDbEI7Z0JBRVJELFFBQVE7OEJBQ1QsOERBQUNULHdEQUFhOzs7O3lCQUFHOzt3QkFDaEI7Ozs7O2FBQ1ksQ0FDakI7Q0FDSDtBQXRCS1EsS0FBQUEsTUFBTTtBQXVCWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlLmpzP2VmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEdyaWRJdGVtU3R5bGUgfSBmcm9tIFwiLi4vZ3JpZF9pdGVtLmpzXCI7XG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeDogMCwgeTogMjAgfSxcbiAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMCB9LFxuICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDAsIHk6IDIwIH0sXG59O1xuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmFydGljbGVcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgYW5pbWF0ZT1cImVudGVyXCJcbiAgICAgIGV4aXQ9XCJleGl0XCJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNjYsIHR5cGU6IFwiZWFzZUluT3V0XCIgfX1cbiAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX1cbiAgICA+XG4gICAgICA8PlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIHt0aXRsZSAmJiAoXG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfSA8L3RpdGxlPlxuICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgKX1cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8R3JpZEl0ZW1TdHlsZSAvPlxuICAgICAgPC8+XG4gICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkdyaWRJdGVtU3R5bGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ })

});