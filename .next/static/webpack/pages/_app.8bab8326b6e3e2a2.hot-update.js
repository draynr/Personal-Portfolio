"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./libs/theme.js":
/*!***********************!*\
  !*** ./libs/theme.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/index.esm.js\");\n\n\nvar styles = {\n    global: function(props) {\n        return {\n            body: {\n                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#C6D4E2\", \"white\")(props)\n            }\n        };\n    }\n};\nvar components = {\n    Heading: {\n        variants: {\n            \"section-title\": {\n                textDecoration: \"underline\",\n                fontSize: 30,\n                textUnderlineOffset: 6,\n                textDecorationColor: \"#525252\",\n                textDecorationThickness: 4,\n                marginTop: 3,\n                marginBottom: 4\n            }\n        }\n    },\n    Link: {\n        baseStyle: function(props) {\n            return {\n                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)(\"#FAFAFA\", \"black\")(props),\n                textUnderlineOffset: 3\n            };\n        }\n    }\n};\nvar fonts = {\n    heading: \"Inter\",\n    body: \"Lexend Deca\"\n};\nvar colors = {\n    grassTeal: \"#D2B48C\"\n};\nvar config = {\n    initialColorMode: \"dark\",\n    useSystemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n    config: config,\n    styles: styles,\n    components: components,\n    colors: colors,\n    fonts: fonts\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWJzL3RoZW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUErQztBQUNEO0FBQzlDLElBQU1FLE1BQU0sR0FBRztJQUNiQyxNQUFNLEVBQUUsU0FBQ0MsS0FBSztlQUFNO1lBQ2xCQyxJQUFJLEVBQUU7Z0JBQ0pDLEVBQUUsRUFBRUwsNERBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUNHLEtBQUssQ0FBQzthQUNwQztTQUNGO0tBQUM7Q0FDSDtBQUVELElBQU1HLFVBQVUsR0FBRztJQUNqQkMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRTtZQUNSLGVBQWUsRUFBRTtnQkFDZkMsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDdEJDLG1CQUFtQixFQUFFLFNBQVM7Z0JBQzlCQyx1QkFBdUIsRUFBRSxDQUFDO2dCQUMxQkMsU0FBUyxFQUFFLENBQUM7Z0JBQ1pDLFlBQVksRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNEQyxJQUFJLEVBQUU7UUFDSkMsU0FBUyxFQUFFLFNBQUNkLEtBQUs7bUJBQU07Z0JBQ3JCZSxLQUFLLEVBQUVsQiw0REFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQ0csS0FBSyxDQUFDO2dCQUN0Q1EsbUJBQW1CLEVBQUUsQ0FBQzthQUN2QjtTQUFDO0tBQ0g7Q0FDRjtBQUNELElBQU1RLEtBQUssR0FBRztJQUNaQyxPQUFPLEVBQUUsT0FBTztJQUNoQmhCLElBQUksRUFBRSxhQUFhO0NBQ3BCO0FBQ0QsSUFBTWlCLE1BQU0sR0FBRztJQUNiQyxTQUFTLEVBQUUsU0FBUztDQUNyQjtBQUNELElBQU1DLE1BQU0sR0FBRztJQUNiQyxnQkFBZ0IsRUFBRSxNQUFNO0lBQ3hCQyxrQkFBa0IsRUFBRSxJQUFJO0NBQ3pCO0FBQ0QsSUFBTUMsS0FBSyxHQUFHM0IsNkRBQVcsQ0FBQztJQUN4QndCLE1BQU0sRUFBTkEsTUFBTTtJQUNOdEIsTUFBTSxFQUFOQSxNQUFNO0lBQ05LLFVBQVUsRUFBVkEsVUFBVTtJQUNWZSxNQUFNLEVBQU5BLE1BQU07SUFDTkYsS0FBSyxFQUFMQSxLQUFLO0NBQ04sQ0FBQztBQUNGLCtEQUFlTyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGlicy90aGVtZS5qcz8yMjc2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IG1vZGUgfSBmcm9tIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiO1xuY29uc3Qgc3R5bGVzID0ge1xuICBnbG9iYWw6IChwcm9wcykgPT4gKHtcbiAgICBib2R5OiB7XG4gICAgICBiZzogbW9kZShcIiNDNkQ0RTJcIiwgXCJ3aGl0ZVwiKShwcm9wcyksXG4gICAgfSxcbiAgfSksXG59O1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBIZWFkaW5nOiB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIFwic2VjdGlvbi10aXRsZVwiOiB7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZVwiLFxuICAgICAgICBmb250U2l6ZTogMzAsXG4gICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDYsXG4gICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6IFwiIzUyNTI1MlwiLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcbiAgICAgICAgbWFyZ2luVG9wOiAzLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIExpbms6IHtcbiAgICBiYXNlU3R5bGU6IChwcm9wcykgPT4gKHtcbiAgICAgIGNvbG9yOiBtb2RlKFwiI0ZBRkFGQVwiLCBcImJsYWNrXCIpKHByb3BzKSxcbiAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDMsXG4gICAgfSksXG4gIH0sXG59O1xuY29uc3QgZm9udHMgPSB7XG4gIGhlYWRpbmc6IFwiSW50ZXJcIixcbiAgYm9keTogXCJMZXhlbmQgRGVjYVwiLFxufTtcbmNvbnN0IGNvbG9ycyA9IHtcbiAgZ3Jhc3NUZWFsOiBcIiNEMkI0OENcIixcbn07XG5jb25zdCBjb25maWcgPSB7XG4gIGluaXRpYWxDb2xvck1vZGU6IFwiZGFya1wiLFxuICB1c2VTeXN0ZW1Db2xvck1vZGU6IHRydWUsXG59O1xuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG4gIGNvbmZpZyxcbiAgc3R5bGVzLFxuICBjb21wb25lbnRzLFxuICBjb2xvcnMsXG4gIGZvbnRzLFxufSk7XG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsIm1vZGUiLCJzdHlsZXMiLCJnbG9iYWwiLCJwcm9wcyIsImJvZHkiLCJiZyIsImNvbXBvbmVudHMiLCJIZWFkaW5nIiwidmFyaWFudHMiLCJ0ZXh0RGVjb3JhdGlvbiIsImZvbnRTaXplIiwidGV4dFVuZGVybGluZU9mZnNldCIsInRleHREZWNvcmF0aW9uQ29sb3IiLCJ0ZXh0RGVjb3JhdGlvblRoaWNrbmVzcyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIkxpbmsiLCJiYXNlU3R5bGUiLCJjb2xvciIsImZvbnRzIiwiaGVhZGluZyIsImNvbG9ycyIsImdyYXNzVGVhbCIsImNvbmZpZyIsImluaXRpYWxDb2xvck1vZGUiLCJ1c2VTeXN0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./libs/theme.js\n"));

/***/ })

});