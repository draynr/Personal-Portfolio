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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction rotateOut(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Voxel1 = function() {\n    _s();\n    var url = \"/pc.glb\";\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var renderer = refRenderer.current;\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n            var target = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0);\n            var initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.005 + 4.8;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.autoRotateSpeed = 0.75;\n            controls.enableDamping = true;\n            controls.enablePan = false;\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_4__.loadGLTFModel)(scene, url, {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                controls.update();\n                renderer.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"animation1\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-10px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-30px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px-var(--spiner-size)/2\",\n            mt: \"calc(0px-var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"/Users/jasondang/website/components/animatex.js\",\n            lineNumber: 119,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jasondang/website/components/animatex.js\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, _this);\n};\n_s(Voxel1, \"tQX7FDdQkd22ZOvWUXnxPCpF4o4=\");\n_c = Voxel1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voxel1);\nvar _c;\n$RefreshReg$(_c, \"Voxel1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgQm94LCBTcGlubmVyLCBjYWxjLCBDb250YWluZXIsIFRyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGlicy9tb2RlbFwiO1xuaW1wb3J0IHsgSW9QaXp6YSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcblxuZnVuY3Rpb24gcm90YXRlT3V0KHgpIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKTtcbn1cblxuY29uc3QgVm94ZWwxID0gKCkgPT4ge1xuICBjb25zdCB1cmwgPSBcIi9wYy5nbGJcIjtcblxuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHJlZlJlbmRlcmVyID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGNvbnN0IHsgY3VycmVudDogcmVuZGVyZXIgfSA9IHJlZlJlbmRlcmVyO1xuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXI7XG4gICAgaWYgKGNvbnRhaW5lciAmJiByZW5kZXJlcikge1xuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lcjtcblxuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgIGFscGhhOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKTtcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICByZWZSZW5kZXJlci5jdXJyZW50ID0gcmVuZGVyZXI7XG5cbiAgICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgIGNvbnN0IHRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCk7XG4gICAgICBjb25zdCBpbml0aWFsQ2FtZXJhUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICk7XG5cbiAgICAgIC8vIDY0MCAtPiAyNDBcbiAgICAgIC8vIDggICAtPiA2XG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDA1ICsgNC44O1xuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgLXNjYWxlLFxuICAgICAgICBzY2FsZSxcbiAgICAgICAgc2NhbGUsXG4gICAgICAgIC1zY2FsZSxcbiAgICAgICAgMC4wMSxcbiAgICAgICAgNTAwMDBcbiAgICAgICk7XG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pO1xuICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpO1xuXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKTtcbiAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG4gICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZTtcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IDAuNzU7XG4gICAgICBjb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcbiAgICAgIGNvbnRyb2xzLmVuYWJsZVBhbiA9IGZhbHNlO1xuXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmwsIHtcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgIGNhc3RTaGFkb3c6IGZhbHNlLFxuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIGFuaW1hdGUoKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9KTtcblxuICAgICAgbGV0IHJlcSA9IG51bGw7XG4gICAgICBsZXQgZnJhbWUgPSAwO1xuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWU7XG5cbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7XG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSk7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcbiAgICAgIH07XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcmVmPXtyZWZDb250YWluZXJ9XG4gICAgICBjbGFzc05hbWU9XCJhbmltYXRpb24xXCJcbiAgICAgIG09XCJhdXRvXCJcbiAgICAgIGF0PXtbXCItMjBweFwiLCBcIi02MHB4XCIsIFwiLTEwcHhcIl19XG4gICAgICBtYj17W1wiLTQwcHhcIiwgXCItMTQwcHhcIiwgXCItMzBweFwiXX1cbiAgICAgIHc9e1syODAsIDQ4MCwgNjQwXX1cbiAgICAgIGg9e1syODAsIDQ4MCwgNjQwXX1cbiAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgID5cbiAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgbWw9XCJjYWxjKDBweC12YXIoLS1zcGluZXItc2l6ZSkvMlwiXG4gICAgICAgICAgbXQ9XCJjYWxjKDBweC12YXIoLS1zcGlubmVyLXNpemUpKVwiXG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFZveGVsMTtcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkJveCIsIlNwaW5uZXIiLCJjYWxjIiwiQ29udGFpbmVyIiwiVHIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVmVjdG9yMyIsIk9yYml0Q29udHJvbHMiLCJyZW5kZXIiLCJsb2FkR0xURk1vZGVsIiwiSW9QaXp6YSIsInJvdGF0ZU91dCIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsMSIsInVybCIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmUmVuZGVyZXIiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NlbmUiLCJTY2VuZSIsInRhcmdldCIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsInNpbiIsIlBJIiwiY29zIiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJhdXRvUm90YXRlU3BlZWQiLCJlbmFibGVEYW1waW5nIiwiZW5hYmxlUGFuIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJyZW1vdmUiLCJkaXNwb3NlIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/animatex.js\n"));

/***/ })

});