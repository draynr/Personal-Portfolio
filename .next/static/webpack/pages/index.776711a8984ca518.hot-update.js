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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles-slim */ \"./node_modules/tsparticles-slim/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n // loads tsparticles-slim\n // loads tsparticles\n\n// tsParticles Repository: https://github.com/matteobruni/tsparticles\n// tsParticles Website: https://particles.js.org/\nvar ParticlesComponent = function(props) {\n    _s();\n    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static\n    var options = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(function() {\n        return {\n            background: {\n                color: \"whiteAlpha.500\"\n            },\n            fullScreen: {\n                enable: true,\n                zIndex: -10\n            },\n            interactivity: {\n                events: {\n                    onClick: {\n                        enable: true,\n                        mode: \"push\"\n                    },\n                    onHover: {\n                        enable: true,\n                        mode: \"repulse\"\n                    }\n                },\n                modes: {\n                    push: {\n                        quantity: 1\n                    },\n                    repulse: {\n                        distance: 20\n                    }\n                }\n            },\n            particles: {\n                triangles: {\n                    enable: true,\n                    distance: 200\n                },\n                move: {\n                    enable: true,\n                    speed: {\n                        min: 1,\n                        max: 6\n                    }\n                },\n                opacity: {\n                    value: {\n                        min: 0.1,\n                        max: 0.75\n                    }\n                },\n                number: {\n                    density: {\n                        enable: true\n                    },\n                    value: 50\n                },\n                shape: {\n                    type: \"circle\"\n                },\n                size: {\n                    value: {\n                        min: 1,\n                        max: 5\n                    }\n                }\n            },\n            detectRetina: false\n        };\n    }, []);\n    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static\n    var particlesInit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return C_Users_dangj_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(main);\n                        _ctx.next = 3;\n                        return (0,tsparticles__WEBPACK_IMPORTED_MODULE_4__.loadFull)(main);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: props.id,\n        init: particlesInit,\n        options: options\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\animated-background.js\",\n        lineNumber: 80,\n        columnNumber: 10\n    }, _this);\n};\n_s(ParticlesComponent, \"UfleS4trXWGxzhzYTKqqYygmjCE=\");\n_c = ParticlesComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ParticlesComponent);\nvar _c;\n$RefreshReg$(_c, \"ParticlesComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2FuaW1hdGVkLWJhY2tncm91bmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBMEM7QUFDRSxDQUFDLHlCQUF5QjtBQUMvQixDQUFDLG9CQUFvQjtBQUNmO0FBRTdDLHFFQUFxRTtBQUNyRSxpREFBaUQ7QUFDakQsSUFBTUssa0JBQWtCLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUNwQyxrR0FBa0c7SUFFbEcsSUFBTUMsT0FBTyxHQUFHSCw4Q0FBTyxDQUFDLFdBQU07UUFDNUIsT0FBTztZQUNMSSxVQUFVLEVBQUU7Z0JBQ1ZDLEtBQUssRUFBRSxnQkFBZ0I7YUFDeEI7WUFDREMsVUFBVSxFQUFFO2dCQUNWQyxNQUFNLEVBQUUsSUFBSTtnQkFDWkMsTUFBTSxFQUFFLENBQUMsRUFBRTthQUNaO1lBQ0RDLGFBQWEsRUFBRTtnQkFDYkMsTUFBTSxFQUFFO29CQUNOQyxPQUFPLEVBQUU7d0JBQ1BKLE1BQU0sRUFBRSxJQUFJO3dCQUNaSyxJQUFJLEVBQUUsTUFBTTtxQkFDYjtvQkFDREMsT0FBTyxFQUFFO3dCQUNQTixNQUFNLEVBQUUsSUFBSTt3QkFDWkssSUFBSSxFQUFFLFNBQVM7cUJBQ2hCO2lCQUNGO2dCQUNERSxLQUFLLEVBQUU7b0JBQ0xDLElBQUksRUFBRTt3QkFDSkMsUUFBUSxFQUFFLENBQUM7cUJBQ1o7b0JBQ0RDLE9BQU8sRUFBRTt3QkFDUEMsUUFBUSxFQUFFLEVBQUU7cUJBQ2I7aUJBQ0Y7YUFDRjtZQUNEQyxTQUFTLEVBQUU7Z0JBQ1RDLFNBQVMsRUFBRTtvQkFDVGIsTUFBTSxFQUFFLElBQUk7b0JBQ1pXLFFBQVEsRUFBRSxHQUFHO2lCQUNkO2dCQUNERyxJQUFJLEVBQUU7b0JBQ0pkLE1BQU0sRUFBRSxJQUFJO29CQUNaZSxLQUFLLEVBQUU7d0JBQUVDLEdBQUcsRUFBRSxDQUFDO3dCQUFFQyxHQUFHLEVBQUUsQ0FBQztxQkFBRTtpQkFDMUI7Z0JBQ0RDLE9BQU8sRUFBRTtvQkFDUEMsS0FBSyxFQUFFO3dCQUFFSCxHQUFHLEVBQUUsR0FBRzt3QkFBRUMsR0FBRyxFQUFFLElBQUk7cUJBQUU7aUJBQy9CO2dCQUNERyxNQUFNLEVBQUU7b0JBQ05DLE9BQU8sRUFBRTt3QkFDUHJCLE1BQU0sRUFBRSxJQUFJO3FCQUNiO29CQUNEbUIsS0FBSyxFQUFFLEVBQUU7aUJBQ1Y7Z0JBQ0RHLEtBQUssRUFBRTtvQkFDTEMsSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7Z0JBQ0RDLElBQUksRUFBRTtvQkFDSkwsS0FBSyxFQUFFO3dCQUFFSCxHQUFHLEVBQUUsQ0FBQzt3QkFBRUMsR0FBRyxFQUFFLENBQUM7cUJBQUU7aUJBQzFCO2FBQ0Y7WUFDRFEsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDO0lBRU4sbUdBQW1HO0lBQ25HLElBQU1DLGFBQWE7bUJBQUcsc09BQU9DLElBQUksRUFBSzs7Ozt3QkFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQzs7K0JBS1pwQyxxREFBUSxDQUFDb0MsSUFBSSxDQUFDOzs7Ozs7U0FDckI7d0JBUEtELGFBQWEsQ0FBVUMsSUFBSTs7O09BT2hDO0lBRUQsMElBQTBJO0lBQzFJLHFCQUFPLDhEQUFDdEMseURBQVM7UUFBQ3lDLEVBQUUsRUFBRW5DLEtBQUssQ0FBQ21DLEVBQUU7UUFBRUMsSUFBSSxFQUFFTCxhQUFhO1FBQUU5QixPQUFPLEVBQUVBLE9BQU87Ozs7O2FBQUksQ0FBQztDQUMzRTtHQXpFS0Ysa0JBQWtCO0FBQWxCQSxLQUFBQSxrQkFBa0I7QUEyRXhCLCtEQUFlQSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2FuaW1hdGVkLWJhY2tncm91bmQuanM/MTY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC10c3BhcnRpY2xlc1wiO1xyXG5pbXBvcnQgeyBsb2FkU2xpbSB9IGZyb20gXCJ0c3BhcnRpY2xlcy1zbGltXCI7IC8vIGxvYWRzIHRzcGFydGljbGVzLXNsaW1cclxuaW1wb3J0IHsgbG9hZEZ1bGwgfSBmcm9tIFwidHNwYXJ0aWNsZXNcIjsgLy8gbG9hZHMgdHNwYXJ0aWNsZXNcclxuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIHRzUGFydGljbGVzIFJlcG9zaXRvcnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZW9icnVuaS90c3BhcnRpY2xlc1xyXG4vLyB0c1BhcnRpY2xlcyBXZWJzaXRlOiBodHRwczovL3BhcnRpY2xlcy5qcy5vcmcvXHJcbmNvbnN0IFBhcnRpY2xlc0NvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gIC8vIHVzaW5nIHVzZU1lbW8gaXMgbm90IG1hbmRhdG9yeSwgYnV0IGl0J3MgcmVjb21tZW5kZWQgc2luY2UgdGhpcyB2YWx1ZSBjYW4gYmUgbWVtb2l6ZWQgaWYgc3RhdGljXHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgICBjb2xvcjogXCJ3aGl0ZUFscGhhLjUwMFwiLCAvLyB0aGlzIHNldHMgYSBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgY2FudmFzXHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bGxTY3JlZW46IHtcclxuICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgd2lsbCBtYWtlIHRoZSBjYW52YXMgZmlsbCB0aGUgZW50aXJlIHNjcmVlbiwgaXQncyBlbmFibGVkIGJ5IGRlZmF1bHRcclxuICAgICAgICB6SW5kZXg6IC0xMCwgLy8gdGhpcyBpcyB0aGUgei1pbmRleCB2YWx1ZSB1c2VkIHdoZW4gdGhlIGZ1bGxTY3JlZW4gaXMgZW5hYmxlZCwgaXQncyAwIGJ5IGRlZmF1bHRcclxuICAgICAgfSxcclxuICAgICAgaW50ZXJhY3Rpdml0eToge1xyXG4gICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgb25DbGljazoge1xyXG4gICAgICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsZXMgdGhlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgICAgIG1vZGU6IFwicHVzaFwiLCAvLyBhZGRzIHRoZSBwYXJ0aWNsZXMgb24gY2xpY2tcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvbkhvdmVyOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSwgLy8gZW5hYmxlcyB0aGUgaG92ZXIgZXZlbnRcclxuICAgICAgICAgICAgbW9kZTogXCJyZXB1bHNlXCIsIC8vIG1ha2UgdGhlIHBhcnRpY2xlcyBydW4gYXdheSBmcm9tIHRoZSBjdXJzb3JcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2Rlczoge1xyXG4gICAgICAgICAgcHVzaDoge1xyXG4gICAgICAgICAgICBxdWFudGl0eTogMSwgLy8gbnVtYmVyIG9mIHBhcnRpY2xlcyB0byBhZGQgb24gY2xpY2tcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXB1bHNlOiB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlOiAyMCwgLy8gZGlzdGFuY2Ugb2YgdGhlIHBhcnRpY2xlcyBmcm9tIHRoZSBjdXJzb3JcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcGFydGljbGVzOiB7XHJcbiAgICAgICAgdHJpYW5nbGVzOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRydWUsIC8vIGVuYWJsaW5nIHRoaXMgd2lsbCBtYWtlIHBhcnRpY2xlcyBsaW5rZWQgdG9nZXRoZXJcclxuICAgICAgICAgIGRpc3RhbmNlOiAyMDAsIC8vIG1heGltdW0gZGlzdGFuY2UgZm9yIGxpbmtpbmcgdGhlIHBhcnRpY2xlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW92ZToge1xyXG4gICAgICAgICAgZW5hYmxlOiB0cnVlLCAvLyBlbmFibGluZyB0aGlzIHdpbGwgbWFrZSBwYXJ0aWNsZXMgbW92ZSBpbiB0aGUgY2FudmFzXHJcbiAgICAgICAgICBzcGVlZDogeyBtaW46IDEsIG1heDogNiB9LCAvLyB1c2luZyBhIHJhbmdlIGluIHNwZWVkIHZhbHVlIHdpbGwgbWFrZSBwYXJ0aWNsZXMgbW92ZSBpbiBhIHJhbmRvbSBzcGVlZCBiZXR3ZWVuIG1pbi9tYXggdmFsdWVzLCBlYWNoIHBhcnRpY2xlcyBoYXZlIGl0cyBvd24gdmFsdWUsIGl0IHdvbid0IGNoYW5nZSBpbiB0aW1lIGJ5IGRlZmF1bHRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9wYWNpdHk6IHtcclxuICAgICAgICAgIHZhbHVlOiB7IG1pbjogMC4xLCBtYXg6IDAuNzUgfSwgLy8gdXNpbmcgYSBkaWZmZXJlbnQgb3BhY2l0eSwgdG8gaGF2ZSBzb21lIHNlbWl0cmFuc3BhcmVudCBlZmZlY3RzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBudW1iZXI6IHtcclxuICAgICAgICAgIGRlbnNpdHk6IHtcclxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiA1MCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgdmFsdWU6IHsgbWluOiAxLCBtYXg6IDUgfSwgLy8gbGV0J3MgcmFuZG9taXplIHRoZSBwYXJ0aWNsZXMgc2l6ZSBhIGJpdFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGVjdFJldGluYTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gdXNlQ2FsbGJhY2sgaXMgbm90IG1hbmRhdG9yeSwgYnV0IGl0J3MgcmVjb21tZW5kZWQgc2luY2UgdGhpcyBjYWxsYmFjayBjYW4gYmUgbWVtb2l6ZWQgaWYgc3RhdGljXHJcbiAgY29uc3QgcGFydGljbGVzSW5pdCA9IGFzeW5jIChtYWluKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhtYWluKTtcclxuXHJcbiAgICAvLyB5b3UgY2FuIGluaXRpYWxpemUgdGhlIHRzUGFydGljbGVzIGluc3RhbmNlIChtYWluKSBoZXJlLCBhZGRpbmcgY3VzdG9tIHNoYXBlcyBvciBwcmVzZXRzXHJcbiAgICAvLyB0aGlzIGxvYWRzIHRoZSB0c3BhcnRpY2xlcyBwYWNrYWdlIGJ1bmRsZSwgaXQncyB0aGUgZWFzaWVzdCBtZXRob2QgZm9yIGdldHRpbmcgZXZlcnl0aGluZyByZWFkeVxyXG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MiB5b3UgY2FuIGFkZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgbmVlZCByZWR1Y2luZyB0aGUgYnVuZGxlIHNpemVcclxuICAgIGF3YWl0IGxvYWRGdWxsKG1haW4pO1xyXG4gIH07XHJcblxyXG4gIC8vIHNldHRpbmcgYW4gaWQgY2FuIGJlIHVzZWZ1bCBmb3IgaWRlbnRpZnlpbmcgdGhlIHJpZ2h0IHBhcnRpY2xlcyBjb21wb25lbnQsIHRoaXMgaXMgdXNlZnVsIGZvciBtdWx0aXBsZSBpbnN0YW5jZXMgb3IgcmV1c2FibGUgY29tcG9uZW50c1xyXG4gIHJldHVybiA8UGFydGljbGVzIGlkPXtwcm9wcy5pZH0gaW5pdD17cGFydGljbGVzSW5pdH0gb3B0aW9ucz17b3B0aW9uc30gLz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWNsZXNDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJQYXJ0aWNsZXMiLCJsb2FkU2xpbSIsImxvYWRGdWxsIiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwiUGFydGljbGVzQ29tcG9uZW50IiwicHJvcHMiLCJvcHRpb25zIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZnVsbFNjcmVlbiIsImVuYWJsZSIsInpJbmRleCIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbkNsaWNrIiwibW9kZSIsIm9uSG92ZXIiLCJtb2RlcyIsInB1c2giLCJxdWFudGl0eSIsInJlcHVsc2UiLCJkaXN0YW5jZSIsInBhcnRpY2xlcyIsInRyaWFuZ2xlcyIsIm1vdmUiLCJzcGVlZCIsIm1pbiIsIm1heCIsIm9wYWNpdHkiLCJ2YWx1ZSIsIm51bWJlciIsImRlbnNpdHkiLCJzaGFwZSIsInR5cGUiLCJzaXplIiwiZGV0ZWN0UmV0aW5hIiwicGFydGljbGVzSW5pdCIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwiaWQiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/animated-background.js\n"));

/***/ })

});