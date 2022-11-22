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

/***/ "./components/animatex.js":
/*!********************************!*\
  !*** ./components/animatex.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction rotateOut(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Voxel1 = function() {\n    _s();\n    var url = \"/pc.glb\";\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var renderer = refRenderer.current;\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n            var target = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0);\n            var initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale * 2, scale * 2, scale, -scale, 10, 100000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.autoRotateSpeed = 0.75;\n            controls.enableDamping = true;\n            controls.enablePan = false;\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_4__.loadGLTFModel)(scene, url, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                controls.update();\n                renderer.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"animation1\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-10px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-30px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px-var(--spiner-size)/2\",\n            mt: \"calc(0px-var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/jasondang/website/components/animatex.js\",\n            lineNumber: 119,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jasondang/website/components/animatex.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, _this);\n};\n_s(Voxel1, \"tQX7FDdQkd22ZOvWUXnxPCpF4o4=\");\n_c = Voxel1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voxel1);\nvar _c;\n$RefreshReg$(_c, \"Voxel1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b25lbnRzL2FuaW1hdGV4LmpzP2FhNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIsIGNhbGMsIENvbnRhaW5lciwgVHIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWJzL21vZGVsXCI7XG5pbXBvcnQgeyBJb1BpenphIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xuXG5mdW5jdGlvbiByb3RhdGVPdXQoeCkge1xuICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpO1xufVxuXG5jb25zdCBWb3hlbDEgPSAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IFwiL3BjLmdsYlwiO1xuXG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgcmVmUmVuZGVyZXIgPSB1c2VSZWYoKTtcblxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiByZW5kZXJlciB9ID0gcmVmUmVuZGVyZXI7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lcjtcbiAgICBpZiAoY29udGFpbmVyICYmIHJlbmRlcmVyKSB7XG4gICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyO1xuXG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgYWxwaGE6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSCk7XG4gICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZztcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgIHJlZlJlbmRlcmVyLmN1cnJlbnQgPSByZW5kZXJlcjtcblxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKTtcbiAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmFQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKFxuICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxuICAgICAgICAxMCxcbiAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgICAgKTtcblxuICAgICAgLy8gNjQwIC0+IDI0MFxuICAgICAgLy8gOCAgIC0+IDZcbiAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0Ljg7XG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxuICAgICAgICAtc2NhbGUgKiAyLFxuICAgICAgICBzY2FsZSAqIDIsXG4gICAgICAgIHNjYWxlLFxuICAgICAgICAtc2NhbGUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpO1xuXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKTtcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IDAuNzU7XG4gICAgICBjb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcbiAgICAgIGNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmwsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlLFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IHJlcSA9IG51bGw7XG4gICAgICBsZXQgZnJhbWUgPSAwO1xuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWU7XG5cbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcmVmPXtyZWZDb250YWluZXJ9XG4gICAgICBjbGFzc05hbWU9XCJhbmltYXRpb24xXCJcbiAgICAgIG09XCJhdXRvXCJcbiAgICAgIGF0PXtbXCItMjBweFwiLCBcIi02MHB4XCIsIFwiLTEwcHhcIl19XG4gICAgICBtYj17W1wiLTQwcHhcIiwgXCItMTQwcHhcIiwgXCItMzBweFwiXX1cbiAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cbiAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgID5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgbWw9XCJjYWxjKDBweC12YXIoLS1zcGluZXItc2l6ZSkvMlwiXG4gICAgICAgICAgbXQ9XCJjYWxjKDBweC12YXIoLS1zcGlubmVyLXNpemUpKVwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFZveGVsMTtcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkJveCIsIlNwaW5uZXIiLCJjYWxjIiwiQ29udGFpbmVyIiwiVHIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVmVjdG9yMyIsIk9yYml0Q29udHJvbHMiLCJyZW5kZXIiLCJsb2FkR0xURk1vZGVsIiwiSW9QaXp6YSIsInJvdGF0ZU91dCIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsMSIsInVybCIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmUmVuZGVyZXIiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NlbmUiLCJTY2VuZSIsInRhcmdldCIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVEYW1waW5nIiwiZW5hYmxlUGFuIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJkaXNwb3NlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animatex.js\n"));

/***/ })

});