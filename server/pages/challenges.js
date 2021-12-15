"use strict";
(() => {
var exports = {};
exports.id = 33;
exports.ids = [33];
exports.modules = {

/***/ 1206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getAllChallenges)
/* harmony export */ });
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([globby__WEBPACK_IMPORTED_MODULE_0__]);
globby__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const getAllChallenges = async ()=>{
    const challenges = await (0,globby__WEBPACK_IMPORTED_MODULE_0__.globby)([
        '_challenges'
    ]);
    return challenges.reduce((acc, playground)=>{
        const arr = playground.replace('.jsx', '').replace(/^_challenges\//, '').split('/');
        acc.push({
            params: {
                slug: arr
            }
        });
        return acc;
    }, []);
};

});

/***/ }),

/***/ 3470:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_getAllChallenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1206);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_getAllChallenges__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([api_getAllChallenges__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const MotionHeading = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading);
const MotionGrid = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid);
const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box);
function IndexPage(props) {
    const { allChallenges  } = props;
    const gridPoints = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: 'repeat(1, 1fr)',
        xs: 'repeat(2,1fr)',
        sm: 'repeat(2,1fr)',
        md: 'repeat(3,1fr)',
        lg: 'repeat(4,1fr)',
        xl: 'repeat(4,1fr)'
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        pb: 4,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotionHeading, {
                as: "h1",
                mb: 4,
                textAlign: "center",
                animate: {
                    x: 0,
                    opacity: 1
                },
                initial: {
                    x: -100,
                    opacity: 0
                },
                transition: {
                    ease: 'easeOut',
                    duration: 0.5
                },
                children: "Challenges"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotionGrid, {
                templateColumns: gridPoints,
                gap: 6,
                initial: "hidden",
                animate: "visible",
                children: allChallenges.map((challenge, i)=>{
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MotionBox, {
                        custom: i,
                        boxShadow: "lg",
                        rounded: "md",
                        overflow: "hidden",
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        initial: {
                            y: 100,
                            opacity: 0
                        },
                        transition: {
                            ease: 'easeOut',
                            duration: 0.5,
                            delay: i * 0.1
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                className: "flex-none rounded-l-md",
                                src: `/screenshots/${challenge.title}.png`,
                                alt: challenge.title
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                p: 4,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        display: "flex",
                                        mb: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                                boxSize: 18,
                                                alt: challenge.group,
                                                src: `https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${challenge.group}.svg`
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                                as: "h3",
                                                fontSize: "sm",
                                                fontWeight: "bold",
                                                ml: 1.5,
                                                children: challenge.title
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        templateColumns: "repeat(2,1fr)",
                                        gap: 4,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                size: "sm",
                                                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaLink, {
                                                }),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                    href: challenge.link,
                                                    children: "Link"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                size: "sm",
                                                leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaGithub, {
                                                }),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                                    isExternal: true,
                                                    href: `https://github.com/Manonicu/site/tree/master/_challenges/${challenge.group}/${challenge.title}.jsx`,
                                                    children: "Source"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }, challenge.link));
                })
            })
        ]
    }));
};
async function getStaticProps() {
    const allChallenges = await (0,api_getAllChallenges__WEBPACK_IMPORTED_MODULE_2__/* .getAllChallenges */ .W)();
    const challenges = allChallenges.map((item)=>{
        const { params: { slug: [group, title] ,  } ,  } = item;
        return {
            title: title,
            group: group,
            link: `/challenges/${group}/${title}`
        };
    });
    return {
        props: {
            allChallenges: challenges
        }
    };
}

});

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 702:
/***/ ((module) => {

module.exports = import("globby");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3470));
module.exports = __webpack_exports__;

})();