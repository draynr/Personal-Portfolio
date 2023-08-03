"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/voxel-2.js":
/*!*******************************!*\
  !*** ./components/voxel-2.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _libs_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/model */ \"./libs/model.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Voxel2 = function() {\n    _s();\n    var url = \"/pc.glb\";\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var refRenderer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var renderer = refRenderer.current;\n        var container = refContainer.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer = new three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer.setPixelRatio(window.devicePixelRatio);\n            renderer.setSize(scW, scH);\n            renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;\n            container.appendChild(renderer.domElement);\n            refRenderer.current = renderer;\n            var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\n            var target = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(-0.5, 1.2, 0);\n            var initialCameraPosition = new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(100 * Math.sin(0.2 * Math.PI), 10, 50 * Math.cos(0.2 * Math.PI));\n            // 640 -> 240\n            // 8   -> 6\n            var scale = scH * 0.002;\n            var camera = new three__WEBPACK_IMPORTED_MODULE_5__.OrthographicCamera(-scale, scale, scale, -scale, 10, 100000);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_5__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            controls.autoRotateSpeed = 1.5;\n            controls.enableDamping = true;\n            controls.enablePan = false;\n            controls.zoomSpeed = 0.000000000000000000000000000000000001;\n            (0,_libs_model__WEBPACK_IMPORTED_MODULE_4__.loadGLTFModel)(scene, url, {\n                receiveShadow: true,\n                castShadow: true\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 10 ? frame + 1 : frame;\n                controls.update();\n                renderer.render(scene, camera);\n            };\n            return function() {\n                cancelAnimationFrame(req);\n                renderer.domElement.remove();\n                renderer.dispose();\n            };\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        ref: refContainer,\n        className: \"animation1\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-20px\",\n            \"-10px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-20px\",\n            \"-20px\"\n        ],\n        w: [\n            80,\n            280,\n            500\n        ],\n        h: [\n            80,\n            280,\n            500\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px-var(--spiner-size)/2\",\n            mt: \"calc(0px-var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\voxel-2.js\",\n            lineNumber: 116,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\dangj\\\\website\\\\components\\\\voxel-2.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, _this);\n};\n_s(Voxel2, \"tQX7FDdQkd22ZOvWUXnxPCpF4o4=\");\n_c = Voxel2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Voxel2);\nvar _c;\n$RefreshReg$(_c, \"Voxel2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQyxDQUFDO2dCQUMxQjVDLFFBQVEsQ0FBQ2dCLFVBQVUsQ0FBQ2lDLE1BQU0sRUFBRSxDQUFDO2dCQUM3QmpELFFBQVEsQ0FBQ2tELE9BQU8sRUFBRSxDQUFDO2FBQ3BCLENBQUM7U0FDSDtLQUNGLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ3hFLGlEQUFHO1FBQ0Z5RSxHQUFHLEVBQUV6RCxZQUFZO1FBQ2pCMEQsU0FBUyxFQUFDLFlBQVk7UUFDdEJDLENBQUMsRUFBQyxNQUFNO1FBQ1JDLEVBQUUsRUFBRTtZQUFDLE9BQU87WUFBRSxPQUFPO1lBQUUsT0FBTztTQUFDO1FBQy9CQyxFQUFFLEVBQUU7WUFBQyxPQUFPO1lBQUUsT0FBTztZQUFFLE9BQU87U0FBQztRQUMvQkMsQ0FBQyxFQUFFO0FBQUMsY0FBRTtBQUFFLGVBQUc7QUFBRSxlQUFHO1NBQUM7UUFDakJDLENBQUMsRUFBRTtBQUFDLGNBQUU7QUFBRSxlQUFHO0FBQUUsZUFBRztTQUFDO1FBQ2pCN0IsUUFBUSxFQUFDLFVBQVU7a0JBRWxCakMsT0FBTyxrQkFDTiw4REFBQ2hCLHFEQUFPO1lBQ04rRSxJQUFJLEVBQUMsSUFBSTtZQUNUOUIsUUFBUSxFQUFDLFVBQVU7WUFDbkIrQixJQUFJLEVBQUMsS0FBSztZQUNWQyxHQUFHLEVBQUMsS0FBSztZQUNUQyxFQUFFLEVBQUMsK0JBQStCO1lBQ2xDQyxFQUFFLEVBQUMsK0JBQStCOzs7OztpQkFDbEM7Ozs7O2FBRUEsQ0FDTjtDQUNIO0dBckhLdEUsTUFBTTtBQUFOQSxLQUFBQSxNQUFNO0FBc0haLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC0yLmpzP2NhYzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEJveCwgU3Bpbm5lciwgY2FsYywgQ29udGFpbmVyLCBUciB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gXCJ0aHJlZVwiO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzXCI7XHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWJzL21vZGVsXCI7XHJcbmltcG9ydCB7IElvUGl6emEgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XHJcblxyXG5jb25zdCBWb3hlbDIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gXCIvcGMuZ2xiXCI7XHJcblxyXG4gIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IHJlZlJlbmRlcmVyID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGNvbnN0IHsgY3VycmVudDogcmVuZGVyZXIgfSA9IHJlZlJlbmRlcmVyO1xyXG4gICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lcjtcclxuICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcclxuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQ29udGFpbmVyO1xyXG5cclxuICAgIGlmIChjb250YWluZXIpIHtcclxuICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xyXG4gICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgIGFscGhhOiB0cnVlLFxyXG4gICAgICB9KTtcclxuICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyk7XHJcbiAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpO1xyXG4gICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZztcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgICByZWZSZW5kZXJlci5jdXJyZW50ID0gcmVuZGVyZXI7XHJcblxyXG4gICAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuICAgICAgY29uc3QgdGFyZ2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLTAuNSwgMS4yLCAwKTtcclxuICAgICAgY29uc3QgaW5pdGlhbENhbWVyYVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICAgMTAwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXHJcbiAgICAgICAgMTAsXHJcbiAgICAgICAgNTAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gNjQwIC0+IDI0MFxyXG4gICAgICAvLyA4ICAgLT4gNlxyXG4gICAgICBjb25zdCBzY2FsZSA9IHNjSCAqIDAuMDAyO1xyXG4gICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKFxyXG4gICAgICAgIC1zY2FsZSxcclxuICAgICAgICBzY2FsZSxcclxuICAgICAgICBzY2FsZSxcclxuICAgICAgICAtc2NhbGUsXHJcbiAgICAgICAgMTAsXHJcbiAgICAgICAgMTAwMDAwXHJcbiAgICAgICk7XHJcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbik7XHJcbiAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KTtcclxuXHJcbiAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsIDEpO1xyXG4gICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcclxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWU7XHJcbiAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZVNwZWVkID0gMS41O1xyXG4gICAgICBjb250cm9scy5lbmFibGVEYW1waW5nID0gdHJ1ZTtcclxuICAgICAgY29udHJvbHMuZW5hYmxlUGFuID0gZmFsc2U7XHJcbiAgICAgIGNvbnRyb2xzLnpvb21TcGVlZCA9IDAuMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxO1xyXG5cclxuICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgdXJsLCB7XHJcbiAgICAgICAgcmVjZWl2ZVNoYWRvdzogdHJ1ZSxcclxuICAgICAgICBjYXN0U2hhZG93OiB0cnVlLFxyXG4gICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IHJlcSA9IG51bGw7XHJcbiAgICAgIGxldCBmcmFtZSA9IDA7XHJcbiAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG5cclxuICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwID8gZnJhbWUgKyAxIDogZnJhbWU7XHJcblxyXG4gICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKTtcclxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcmVmPXtyZWZDb250YWluZXJ9XHJcbiAgICAgIGNsYXNzTmFtZT1cImFuaW1hdGlvbjFcIlxyXG4gICAgICBtPVwiYXV0b1wiXHJcbiAgICAgIGF0PXtbXCItMjBweFwiLCBcIi0yMHB4XCIsIFwiLTEwcHhcIl19XHJcbiAgICAgIG1iPXtbXCItNDBweFwiLCBcIi0yMHB4XCIsIFwiLTIwcHhcIl19XHJcbiAgICAgIHc9e1s4MCwgMjgwLCA1MDBdfVxyXG4gICAgICBoPXtbODAsIDI4MCwgNTAwXX1cclxuICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICA+XHJcbiAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICA8U3Bpbm5lclxyXG4gICAgICAgICAgc2l6ZT1cInhsXCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgICAgbGVmdD1cIjUwJVwiXHJcbiAgICAgICAgICB0b3A9XCI1MCVcIlxyXG4gICAgICAgICAgbWw9XCJjYWxjKDBweC12YXIoLS1zcGluZXItc2l6ZSkvMlwiXHJcbiAgICAgICAgICBtdD1cImNhbGMoMHB4LXZhcigtLXNwaW5uZXItc2l6ZSkpXCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVm94ZWwyO1xyXG4iXSwibmFtZXMiOlsiVEhSRUUiLCJCb3giLCJTcGlubmVyIiwiY2FsYyIsIkNvbnRhaW5lciIsIlRyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VDYWxsYmFjayIsIlZlY3RvcjMiLCJPcmJpdENvbnRyb2xzIiwicmVuZGVyIiwibG9hZEdMVEZNb2RlbCIsIklvUGl6emEiLCJWb3hlbDIiLCJ1cmwiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlZlJlbmRlcmVyIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsInJlbmRlcmVyIiwiY29udGFpbmVyIiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjZW5lIiwiU2NlbmUiLCJ0YXJnZXQiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJNYXRoIiwic2luIiwiUEkiLCJjb3MiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsImF1dG9Sb3RhdGVTcGVlZCIsImVuYWJsZURhbXBpbmciLCJlbmFibGVQYW4iLCJ6b29tU3BlZWQiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ1cGRhdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZSIsImRpc3Bvc2UiLCJyZWYiLCJjbGFzc05hbWUiLCJtIiwiYXQiLCJtYiIsInciLCJoIiwic2l6ZSIsImxlZnQiLCJ0b3AiLCJtbCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-2.js\n"));

/***/ })

});