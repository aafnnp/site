"use strict";
exports.id = 351;
exports.ids = [351];
exports.modules = {

/***/ 1351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CanIUse)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



class CanIUse extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    state = {
        desktop: [],
        mobile: []
    };
    componentDidMount() {
        fetch('https://raw.githubusercontent.com/Fyrd/caniuse/main/data.json').then((res)=>res.json()
        ).then((res)=>{
            const { stats: { chrome , firefox , ie , edge , safari , and_chr , and_ff , android , ios_saf ,  } ,  } = res.data[this.props.tag];
            this.setState({
                desktop: this.getSupportData([
                    chrome,
                    firefox,
                    ie,
                    edge,
                    safari
                ]),
                mobile: this.getSupportData([
                    and_chr,
                    and_ff,
                    android,
                    ios_saf
                ])
            });
        });
    }
    getSupportData = (arr)=>{
        return arr.map((item)=>{
            const firstSupportItems = Object.entries(item).find((el)=>el[1] === 'y'
            );
            return firstSupportItems ? firstSupportItems[0] : 'No';
        });
    };
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
            mx: "auto",
            my: 10,
            w: "80%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    color: "gray.500",
                    fontSize: "xs",
                    fontFamily: "Gugi",
                    children: [
                        "This browser support data is from",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            href: `https://caniuse.com/#feat=${this.props.tag}`,
                            color: "#ff0024",
                            px: 2,
                            children: "Caniuse"
                        }),
                        ",which has more detail. A number indicates that browser supports the feature at that version and up."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "caniuse-section",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            as: "h5",
                            fontSize: "xs",
                            py: 4,
                            children: "Desktop"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            templateColumns: "repeat(5, 1fr)",
                            mb: 2,
                            gap: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/CDWccX.jpg",
                                        alt: "chrome",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mqRvLw.jpg",
                                        alt: "firefox",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/uKn6gH.jpg",
                                        alt: "IE",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/aoF7l0.jpg",
                                        alt: "Edge",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mIxpPG.jpg",
                                        alt: "Safari",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            templateColumns: "repeat(5, 1fr)",
                            gap: 6,
                            children: this.state.desktop.map((item, index)=>{
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "white",
                                    rounded: "md",
                                    textAlign: "center",
                                    p: 2,
                                    fontWeight: "bold",
                                    bg: this.state.desktop[index] === 'No' ? '#ff0024' : '#47ca4c',
                                    children: item
                                }, index));
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "caniuse-section mt-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            as: "h5",
                            fontSize: "xs",
                            py: 4,
                            children: "Mobile / Tablet"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            templateColumns: "repeat(4, 1fr)",
                            mb: 2,
                            gap: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/CDWccX.jpg",
                                        alt: "Android Chrome",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mqRvLw.jpg",
                                        alt: "Android Firefox",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/VK4LoM.jpg",
                                        alt: "Android",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                    display: "flex",
                                    justifyContent: "center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                        src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/mIxpPG.jpg",
                                        alt: "Safari",
                                        loading: "lazy",
                                        boxSize: "3rem",
                                        htmlWidth: "3rem",
                                        htmlHeight: "3rem"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                            templateColumns: "repeat(4, 1fr)",
                            gap: 6,
                            children: this.state.mobile.map((item, index)=>{
                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "white",
                                    rounded: "md",
                                    textAlign: "center",
                                    p: 2,
                                    fontWeight: "bold",
                                    bg: this.state.desktop[index] === 'No' ? '#ff0024' : '#47ca4c',
                                    children: item
                                }, index));
                            })
                        })
                    ]
                })
            ]
        }));
    }
};


/***/ })

};
;