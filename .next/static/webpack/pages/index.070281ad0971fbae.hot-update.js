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

/***/ "./components/animated-background.js":
/*!*******************************************!*\
  !*** ./components/animated-background.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles-slim */ \"./node_modules/tsparticles-slim/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n // loads tsparticles-slim\n // loads tsparticles\n\n// tsParticles Repository: https://github.com/matteobruni/tsparticles\n// tsParticles Website: https://particles.js.org/\nvar ParticlesComponent = function(props) {\n    _s();\n    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static\n    var options = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function() {\n        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color\n        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html\n        return {\n            autoplay: true,\n            background: {\n                color: \"whiteAlpha.500\"\n            },\n            fullScreen: {\n                enable: true,\n                zIndex: -1\n            },\n            interactivity: {\n                events: {\n                    onClick: {\n                        enable: true,\n                        mode: \"push\"\n                    },\n                    onHover: {\n                        enable: true,\n                        mode: \"repulse\"\n                    }\n                },\n                modes: {\n                    push: {\n                        quantity: 1\n                    },\n                    repulse: {\n                        distance: 200\n                    }\n                }\n            },\n            collsions: {\n                enable: true\n            },\n            particles: {\n                color: {\n                    value: \"#123123\"\n                },\n                links: {\n                    enable: true,\n                    distance: 200\n                },\n                move: {\n                    enable: true,\n                    speed: {\n                        min: 1,\n                        max: 6\n                    }\n                },\n                opacity: {\n                    value: {\n                        min: 0.5,\n                        max: 1\n                    }\n                },\n                number: {\n                    density: {\n                        enable: true\n                    },\n                    value: 10\n                },\n                size: {\n                    value: {\n                        min: 1,\n                        max: 2\n                    }\n                }\n            }\n        };\n    }, []);\n    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static\n    var particlesInit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(main);\n                        _ctx.next = 3;\n                        return (0,tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__.loadSlim)(main);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: props.id,\n        init: particlesInit,\n        options: options\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\animated-background.js\",\n        lineNumber: 84,\n        columnNumber: 10\n    }, _this);\n};\n_s(ParticlesComponent, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n_c = ParticlesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticlesComponent);\nvar _c;\n$RefreshReg$(_c, \"ParticlesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGVkLWJhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMEM7QUFDRSxDQUFDLHlCQUF5QjtBQUMvQixDQUFDLG9CQUFvQjtBQUNmO0FBRTdDLHFFQUFxRTtBQUNyRSxpREFBaUQ7QUFDakQsSUFBTUssa0JBQWtCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUNwQyxrR0FBa0c7SUFFbEcsSUFBTUMsT0FBTyxHQUFHSCw4Q0FBTyxDQUFDLFdBQU07UUFDNUIsdUpBQXVKO1FBQ3ZKLG9IQUFvSDtRQUNwSCxPQUFPO1lBQ0xJLFFBQVEsRUFBRSxJQUFJO1lBQ2RDLFVBQVUsRUFBRTtnQkFDVkMsS0FBSyxFQUFFLGdCQUFnQjthQUN4QjtZQUNEQyxVQUFVLEVBQUU7Z0JBQ1ZDLE1BQU0sRUFBRSxJQUFJO2dCQUNaQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ1g7WUFDREMsYUFBYSxFQUFFO2dCQUNiQyxNQUFNLEVBQUU7b0JBQ05DLE9BQU8sRUFBRTt3QkFDUEosTUFBTSxFQUFFLElBQUk7d0JBQ1pLLElBQUksRUFBRSxNQUFNO3FCQUNiO29CQUNEQyxPQUFPLEVBQUU7d0JBQ1BOLE1BQU0sRUFBRSxJQUFJO3dCQUNaSyxJQUFJLEVBQUUsU0FBUztxQkFDaEI7aUJBQ0Y7Z0JBQ0RFLEtBQUssRUFBRTtvQkFDTEMsSUFBSSxFQUFFO3dCQUNKQyxRQUFRLEVBQUUsQ0FBQztxQkFDWjtvQkFDREMsT0FBTyxFQUFFO3dCQUNQQyxRQUFRLEVBQUUsR0FBRztxQkFDZDtpQkFDRjthQUNGO1lBQ0RDLFNBQVMsRUFBRTtnQkFDVFosTUFBTSxFQUFFLElBQUk7YUFDYjtZQUVEYSxTQUFTLEVBQUU7Z0JBQ1RmLEtBQUssRUFBRTtvQkFBRWdCLEtBQUssRUFBRSxTQUFTO2lCQUFFO2dCQUMzQkMsS0FBSyxFQUFFO29CQUNMZixNQUFNLEVBQUUsSUFBSTtvQkFDWlcsUUFBUSxFQUFFLEdBQUc7aUJBQ2Q7Z0JBQ0RLLElBQUksRUFBRTtvQkFDSmhCLE1BQU0sRUFBRSxJQUFJO29CQUNaaUIsS0FBSyxFQUFFO3dCQUFFQyxHQUFHLEVBQUUsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7cUJBQUU7aUJBQzFCO2dCQUNEQyxPQUFPLEVBQUU7b0JBQ1BOLEtBQUssRUFBRTt3QkFBRUksR0FBRyxFQUFFLEdBQUc7d0JBQUVDLEdBQUcsRUFBRSxDQUFDO3FCQUFFO2lCQUM1QjtnQkFDREUsTUFBTSxFQUFFO29CQUNOQyxPQUFPLEVBQUU7d0JBQ1B0QixNQUFNLEVBQUUsSUFBSTtxQkFDYjtvQkFDRGMsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0RTLElBQUksRUFBRTtvQkFDSlQsS0FBSyxFQUFFO3dCQUFFSSxHQUFHLEVBQUUsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7cUJBQUU7aUJBQzFCO2FBQ0Y7U0FDRixDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUM7SUFFTixtR0FBbUc7SUFDbkcsSUFBTUssYUFBYTttQkFBRyxzT0FBT0MsSUFBSSxFQUFLOzs7O3dCQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQyxDQUFDOzsrQkFLWnBDLDBEQUFRLENBQUNvQyxJQUFJLENBQUM7Ozs7OztTQUNyQjt3QkFQS0QsYUFBYSxDQUFVQyxJQUFJOzs7T0FPaEM7SUFFRCwwSUFBMEk7SUFDMUkscUJBQU8sOERBQUNyQyx5REFBUztRQUFDd0MsRUFBRSxFQUFFbEMsS0FBSyxDQUFDa0MsRUFBRTtRQUFFQyxJQUFJLEVBQUVMLGFBQWE7UUFBRTdCLE9BQU8sRUFBRUEsT0FBTzs7Ozs7YUFBSSxDQUFDO0NBQzNFO0dBN0VLRixrQkFBa0I7QUFBbEJBLEtBQUFBLGtCQUFrQjtBQStFeEIsK0RBQWVBLGtCQUFrQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYW5pbWF0ZWQtYmFja2dyb3VuZC5qcz8xNjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXRzcGFydGljbGVzXCI7XHJcbmltcG9ydCB7IGxvYWRTbGltIH0gZnJvbSBcInRzcGFydGljbGVzLXNsaW1cIjsgLy8gbG9hZHMgdHNwYXJ0aWNsZXMtc2xpbVxyXG5pbXBvcnQgeyBsb2FkRnVsbCB9IGZyb20gXCJ0c3BhcnRpY2xlc1wiOyAvLyBsb2FkcyB0c3BhcnRpY2xlc1xyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gdHNQYXJ0aWNsZXMgUmVwb3NpdG9yeTogaHR0cHM6Ly9naXRodWIuY29tL21hdHRlb2JydW5pL3RzcGFydGljbGVzXHJcbi8vIHRzUGFydGljbGVzIFdlYnNpdGU6IGh0dHBzOi8vcGFydGljbGVzLmpzLm9yZy9cclxuY29uc3QgUGFydGljbGVzQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gdXNpbmcgdXNlTWVtbyBpcyBub3QgbWFuZGF0b3J5LCBidXQgaXQncyByZWNvbW1lbmRlZCBzaW5jZSB0aGlzIHZhbHVlIGNhbiBiZSBtZW1vaXplZCBpZiBzdGF0aWNcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgLy8gdXNpbmcgYW4gZW1wdHkgb3B0aW9ucyBvYmplY3Qgd2lsbCBsb2FkIHRoZSBkZWZhdWx0IG9wdGlvbnMsIHdoaWNoIGFyZSBzdGF0aWMgcGFydGljbGVzIHdpdGggbm8gYmFja2dyb3VuZCBhbmQgM3B4IHJhZGl1cywgb3BhY2l0eSAxMDAlLCB3aGl0ZSBjb2xvclxyXG4gICAgLy8gYWxsIG9wdGlvbnMgY2FuIGJlIGZvdW5kIGhlcmU6IGh0dHBzOi8vcGFydGljbGVzLmpzLm9yZy9kb2NzL2ludGVyZmFjZXMvT3B0aW9uc19JbnRlcmZhY2VzX0lPcHRpb25zLklPcHRpb25zLmh0bWxcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgY29sb3I6IFwid2hpdGVBbHBoYS41MDBcIiwgLy8gdGhpcyBzZXRzIGEgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIGNhbnZhc1xyXG4gICAgICB9LFxyXG4gICAgICBmdWxsU2NyZWVuOiB7XHJcbiAgICAgICAgZW5hYmxlOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIHdpbGwgbWFrZSB0aGUgY2FudmFzIGZpbGwgdGhlIGVudGlyZSBzY3JlZW4sIGl0J3MgZW5hYmxlZCBieSBkZWZhdWx0XHJcbiAgICAgICAgekluZGV4OiAtMSwgLy8gdGhpcyBpcyB0aGUgei1pbmRleCB2YWx1ZSB1c2VkIHdoZW4gdGhlIGZ1bGxTY3JlZW4gaXMgZW5hYmxlZCwgaXQncyAwIGJ5IGRlZmF1bHRcclxuICAgICAgfSxcclxuICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgb25DbGljazoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsZXMgdGhlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICAgIG1vZGU6IFwicHVzaFwiLCAvLyBhZGRzIHRoZSBwYXJ0aWNsZXMgb24gY2xpY2tcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbkhvdmVyOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSwgLy8gZW5hYmxlcyB0aGUgaG92ZXIgZXZlbnRcclxuICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsIC8vIG1ha2UgdGhlIHBhcnRpY2xlcyBydW4gYXdheSBmcm9tIHRoZSBjdXJzb3JcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBxdWFudGl0eTogMSwgLy8gbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBhZGQgb24gY2xpY2tcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsIC8vIGRpc3RhbmNlIG9mIHRoZSBwYXJ0aWNsZXMgZnJvbSB0aGUgY3Vyc29yXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbGxzaW9uczoge1xyXG4gICAgICAgIGVuYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHBhcnRpY2xlczoge1xyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBcIiMxMjMxMjNcIiB9LFxyXG4gICAgICAgIGxpbmtzOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgd2lsbCBtYWtlIHBhcnRpY2xlcyBsaW5rZWQgdG9nZXRoZXJcclxuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsIC8vIG1heGltdW0gZGlzdGFuY2UgZm9yIGxpbmtpbmcgdGhlIHBhcnRpY2xlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW92ZToge1xyXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIHdpbGwgbWFrZSBwYXJ0aWNsZXMgbW92ZSBpbiB0aGUgY2FudmFzXHJcbiAgICAgICAgICBzcGVlZDogeyBtaW46IDEsIG1heDogNiB9LCAvLyB1c2luZyBhIHJhbmdlIGluIHNwZWVkIHZhbHVlIHdpbGwgbWFrZSBwYXJ0aWNsZXMgbW92ZSBpbiBhIHJhbmRvbSBzcGVlZCBiZXR3ZWVuIG1pbi9tYXggdmFsdWVzLCBlYWNoIHBhcnRpY2xlcyBoYXZlIGl0cyBvd24gdmFsdWUsIGl0IHdvbid0IGNoYW5nZSBpbiB0aW1lIGJ5IGRlZmF1bHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgIHZhbHVlOiB7IG1pbjogMC41LCBtYXg6IDEgfSwgLy8gdXNpbmcgYSBkaWZmZXJlbnQgb3BhY2l0eSwgdG8gaGF2ZSBzb21lIHNlbWl0cmFuc3BhcmVudCBlZmZlY3RzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiAxMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgIHZhbHVlOiB7IG1pbjogMSwgbWF4OiAyIH0sIC8vIGxldCdzIHJhbmRvbWl6ZSB0aGUgcGFydGljbGVzIHNpemUgYSBiaXRcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIHVzZUNhbGxiYWNrIGlzIG5vdCBtYW5kYXRvcnksIGJ1dCBpdCdzIHJlY29tbWVuZGVkIHNpbmNlIHRoaXMgY2FsbGJhY2sgY2FuIGJlIG1lbW9pemVkIGlmIHN0YXRpY1xyXG4gIGNvbnN0IHBhcnRpY2xlc0luaXQgPSBhc3luYyAobWFpbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobWFpbik7XHJcblxyXG4gICAgLy8geW91IGNhbiBpbml0aWFsaXplIHRoZSB0c1BhcnRpY2xlcyBpbnN0YW5jZSAobWFpbikgaGVyZSwgYWRkaW5nIGN1c3RvbSBzaGFwZXMgb3IgcHJlc2V0c1xyXG4gICAgLy8gdGhpcyBsb2FkcyB0aGUgdHNwYXJ0aWNsZXMgcGFja2FnZSBidW5kbGUsIGl0J3MgdGhlIGVhc2llc3QgbWV0aG9kIGZvciBnZXR0aW5nIGV2ZXJ5dGhpbmcgcmVhZHlcclxuICAgIC8vIHN0YXJ0aW5nIGZyb20gdjIgeW91IGNhbiBhZGQgb25seSB0aGUgZmVhdHVyZXMgeW91IG5lZWQgcmVkdWNpbmcgdGhlIGJ1bmRsZSBzaXplXHJcbiAgICBhd2FpdCBsb2FkU2xpbShtYWluKTtcclxuICB9O1xyXG5cclxuICAvLyBzZXR0aW5nIGFuIGlkIGNhbiBiZSB1c2VmdWwgZm9yIGlkZW50aWZ5aW5nIHRoZSByaWdodCBwYXJ0aWNsZXMgY29tcG9uZW50LCB0aGlzIGlzIHVzZWZ1bCBmb3IgbXVsdGlwbGUgaW5zdGFuY2VzIG9yIHJldXNhYmxlIGNvbXBvbmVudHNcclxuICByZXR1cm4gPFBhcnRpY2xlcyBpZD17cHJvcHMuaWR9IGluaXQ9e3BhcnRpY2xlc0luaXR9IG9wdGlvbnM9e29wdGlvbnN9IC8+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFydGljbGVzQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUGFydGljbGVzIiwibG9hZFNsaW0iLCJsb2FkRnVsbCIsInVzZUNhbGxiYWNrIiwidXNlTWVtbyIsIlBhcnRpY2xlc0NvbXBvbmVudCIsInByb3BzIiwib3B0aW9ucyIsImF1dG9wbGF5IiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZnVsbFNjcmVlbiIsImVuYWJsZSIsInpJbmRleCIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkNsaWNrIiwibW9kZSIsIm9uSG92ZXIiLCJtb2RlcyIsInB1c2giLCJxdWFudGl0eSIsInJlcHVsc2UiLCJkaXN0YW5jZSIsImNvbGxzaW9ucyIsInBhcnRpY2xlcyIsInZhbHVlIiwibGlua3MiLCJtb3ZlIiwic3BlZWQiLCJtaW4iLCJtYXgiLCJvcGFjaXR5IiwibnVtYmVyIiwiZGVuc2l0eSIsInNpemUiLCJwYXJ0aWNsZXNJbml0IiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/animated-background.js\n"));

/***/ })

});