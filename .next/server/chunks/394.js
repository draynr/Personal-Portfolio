"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 6394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4753);
/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tsparticles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7998);
/* harmony import */ var tsparticles_slim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tsparticles_slim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3047);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


 // loads tsparticles-slim
 // loads tsparticles

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props)=>{
    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
    const options = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
            background: {
                color: "whiteAlpha.500"
            },
            fullScreen: {
                enable: true,
                zIndex: -1
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    }
                },
                modes: {
                    push: {
                        quantity: 1
                    },
                    repulse: {
                        distance: 200
                    }
                }
            },
            collsions: {
                enable: true
            },
            particles: {
                links: {
                    enable: true,
                    distance: 200
                },
                move: {
                    enable: true,
                    speed: {
                        min: 1,
                        max: 6
                    }
                },
                opacity: {
                    value: {
                        min: 0.1,
                        max: 0.25
                    }
                },
                number: {
                    density: {
                        enable: true
                    },
                    value: 10
                },
                size: {
                    value: {
                        min: 1,
                        max: 2
                    }
                }
            },
            detectRetina: true
        };
    }, []);
    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = async (main)=>{
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await (0,tsparticles_slim__WEBPACK_IMPORTED_MODULE_2__.loadSlim)(main);
    };
    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_tsparticles__WEBPACK_IMPORTED_MODULE_1___default()), {
        id: props.id,
        init: particlesInit,
        options: options
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParticlesComponent);


/***/ })

};
;