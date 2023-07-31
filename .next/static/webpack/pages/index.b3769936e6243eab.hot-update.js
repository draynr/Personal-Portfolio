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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Voxel1 = function() {\n    _s();\n    var url = \"/pc22.glb\";\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var renderer = refRenderer.current;\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n            var target = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0);\n            var initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(100 * Math.sin(0.2 * Math.PI), 10, 50 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.009;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 10, 100000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.autoRotateSpeed = 2;\n            controls.enableDamping = true;\n            controls.enablePan = false;\n            controls.zoomSpeed = 0.000000000000000000000000000000000001;\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_4__.loadGLTFModel)(scene, url, {\n                receiveShadow: true,\n                castShadow: true\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 10 ? frame + 1 : frame;\n                controls.update();\n                renderer.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"animation1\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-20px\",\n            \"-10px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-20px\",\n            \"-20px\"\n        ],\n        w: [\n            80,\n            280,\n            500\n        ],\n        h: [\n            80,\n            280,\n            500\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px-var(--spiner-size)/2\",\n            mt: \"calc(0px-var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\animatex.js\",\n            lineNumber: 116,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\animatex.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, _this);\n};\n_s(Voxel1, \"tQX7FDdQkd22ZOvWUXnxPCpF4o4=\");\n_c = Voxel1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voxel1);\nvar _c;\n$RefreshReg$(_c, \"Voxel1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLENBQUMsQ0FBQztnQkFDMUI1QyxRQUFRLENBQUNnQixVQUFVLENBQUNpQyxNQUFNLEVBQUUsQ0FBQztnQkFDN0JqRCxRQUFRLENBQUNrRCxPQUFPLEVBQUUsQ0FBQzthQUNwQixDQUFDO1NBQ0g7S0FDRixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1AscUJBQ0UsOERBQUN4RSxpREFBRztRQUNGeUUsR0FBRyxFQUFFekQsWUFBWTtRQUNqQjBELFNBQVMsRUFBQyxZQUFZO1FBQ3RCQyxDQUFDLEVBQUMsTUFBTTtRQUNSQyxFQUFFLEVBQUU7WUFBQyxPQUFPO1lBQUUsT0FBTztZQUFFLE9BQU87U0FBQztRQUMvQkMsRUFBRSxFQUFFO1lBQUMsT0FBTztZQUFFLE9BQU87WUFBRSxPQUFPO1NBQUM7UUFDL0JDLENBQUMsRUFBRTtBQUFDLGNBQUU7QUFBRSxlQUFHO0FBQUUsZUFBRztTQUFDO1FBQ2pCQyxDQUFDLEVBQUU7QUFBQyxjQUFFO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNqQjdCLFFBQVEsRUFBQyxVQUFVO2tCQUVsQmpDLE9BQU8sa0JBQ04sOERBQUNoQixxREFBTztZQUNOK0UsSUFBSSxFQUFDLElBQUk7WUFDVDlCLFFBQVEsRUFBQyxVQUFVO1lBQ25CK0IsSUFBSSxFQUFDLEtBQUs7WUFDVkMsR0FBRyxFQUFDLEtBQUs7WUFDVEMsRUFBRSxFQUFDLCtCQUErQjtZQUNsQ0MsRUFBRSxFQUFDLCtCQUErQjs7Ozs7aUJBQ2xDOzs7OzthQUVBLENBQ047Q0FDSDtHQXJIS3RFLE1BQU07QUFBTkEsS0FBQUEsTUFBTTtBQXNIWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYW5pbWF0ZXguanM/YWE0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyLCBjYWxjLCBDb250YWluZXIsIFRyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHNcIjtcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYnMvbW9kZWxcIjtcclxuaW1wb3J0IHsgSW9QaXp6YSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuXHJcbmNvbnN0IFZveGVsMSA9ICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBcIi9wYzIyLmdsYlwiO1xyXG5cclxuICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByZWZSZW5kZXJlciA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3dSZXNpemUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IHJlbmRlcmVyIH0gPSByZWZSZW5kZXJlcjtcclxuICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXI7XHJcbiAgICBpZiAoY29udGFpbmVyICYmIHJlbmRlcmVyKSB7XHJcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lcjtcclxuXHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aDtcclxuICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgIGFudGlhbGlhczogdHJ1ZSxcclxuICAgICAgICBhbHBoYTogdHJ1ZSxcclxuICAgICAgfSk7XHJcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKTtcclxuICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2Rpbmc7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgcmVmUmVuZGVyZXIuY3VycmVudCA9IHJlbmRlcmVyO1xyXG5cclxuICAgICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCk7XHJcbiAgICAgIGNvbnN0IGluaXRpYWxDYW1lcmFQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgIDEwMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxyXG4gICAgICAgIDEwLFxyXG4gICAgICAgIDUwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIDY0MCAtPiAyNDBcclxuICAgICAgLy8gOCAgIC0+IDZcclxuICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwOTtcclxuICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgc2NhbGUsXHJcbiAgICAgICAgLXNjYWxlLFxyXG4gICAgICAgIDEwLFxyXG4gICAgICAgIDEwMDAwMFxyXG4gICAgICApO1xyXG4gICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pO1xyXG4gICAgICBjYW1lcmEubG9va0F0KHRhcmdldCk7XHJcblxyXG4gICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKTtcclxuICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XHJcblxyXG4gICAgICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlO1xyXG4gICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGVTcGVlZCA9IDI7XHJcbiAgICAgIGNvbnRyb2xzLmVuYWJsZURhbXBpbmcgPSB0cnVlO1xyXG4gICAgICBjb250cm9scy5lbmFibGVQYW4gPSBmYWxzZTtcclxuICAgICAgY29udHJvbHMuem9vbVNwZWVkID0gMC4wMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDE7XHJcblxyXG4gICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCB1cmwsIHtcclxuICAgICAgICByZWNlaXZlU2hhZG93OiB0cnVlLFxyXG4gICAgICAgIGNhc3RTaGFkb3c6IHRydWUsXHJcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgcmVxID0gbnVsbDtcclxuICAgICAgbGV0IGZyYW1lID0gMDtcclxuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcblxyXG4gICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAgPyBmcmFtZSArIDEgOiBmcmFtZTtcclxuXHJcbiAgICAgICAgY29udHJvbHMudXBkYXRlKCk7XHJcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyZXEpO1xyXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICByZWY9e3JlZkNvbnRhaW5lcn1cclxuICAgICAgY2xhc3NOYW1lPVwiYW5pbWF0aW9uMVwiXHJcbiAgICAgIG09XCJhdXRvXCJcclxuICAgICAgYXQ9e1tcIi0yMHB4XCIsIFwiLTIwcHhcIiwgXCItMTBweFwiXX1cclxuICAgICAgbWI9e1tcIi00MHB4XCIsIFwiLTIwcHhcIiwgXCItMjBweFwiXX1cclxuICAgICAgdz17WzgwLCAyODAsIDUwMF19XHJcbiAgICAgIGg9e1s4MCwgMjgwLCA1MDBdfVxyXG4gICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgID5cclxuICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgIDxTcGlubmVyXHJcbiAgICAgICAgICBzaXplPVwieGxcIlxyXG4gICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgICBsZWZ0PVwiNTAlXCJcclxuICAgICAgICAgIHRvcD1cIjUwJVwiXHJcbiAgICAgICAgICBtbD1cImNhbGMoMHB4LXZhcigtLXNwaW5lci1zaXplKS8yXCJcclxuICAgICAgICAgIG10PVwiY2FsYygwcHgtdmFyKC0tc3Bpbm5lci1zaXplKSlcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBWb3hlbDE7XHJcbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkJveCIsIlNwaW5uZXIiLCJjYWxjIiwiQ29udGFpbmVyIiwiVHIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiVmVjdG9yMyIsIk9yYml0Q29udHJvbHMiLCJyZW5kZXIiLCJsb2FkR0xURk1vZGVsIiwiSW9QaXp6YSIsIlZveGVsMSIsInVybCIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVmUmVuZGVyZXIiLCJoYW5kbGVXaW5kb3dSZXNpemUiLCJjdXJyZW50IiwicmVuZGVyZXIiLCJjb250YWluZXIiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NlbmUiLCJTY2VuZSIsInRhcmdldCIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIk1hdGgiLCJzaW4iLCJQSSIsImNvcyIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJhdXRvUm90YXRlIiwiYXV0b1JvdGF0ZVNwZWVkIiwiZW5hYmxlRGFtcGluZyIsImVuYWJsZVBhbiIsInpvb21TcGVlZCIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlIiwiZGlzcG9zZSIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/animatex.js\n"));

/***/ })

});