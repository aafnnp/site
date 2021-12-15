"use strict";
exports.id = 524;
exports.ids = [524];
exports.modules = {

/***/ 2524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



class Index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        const keys = document.querySelectorAll('.key');
        document.addEventListener('keydown', function(e) {
            const { keyCode  } = e;
            const key = document.querySelector(`div[data-key="${keyCode}"]`);
            const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
            if (key) {
                key.classList.add('playing');
                audio.play();
            }
            keys.forEach((item)=>{
                item.classList.remove('playing');
                document.addEventListener('transitionend', function() {
                    item.classList.remove('playing');
                });
            });
        });
    }
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "keys",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "65",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "A"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "clap"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "83",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "S"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "hihat"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "68",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "D"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "kick"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "70",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "F"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "openhat"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "71",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "G"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "boom"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "72",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "H"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "ride"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "74",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "J"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "snare"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "75",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "K"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "tom"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            "data-key": "76",
                            className: "key",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("kbd", {
                                    children: "L"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sound",
                                    children: "tink"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "65",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/clap.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "83",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/hihat.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "68",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/kick.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "70",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/openhat.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "71",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/boom.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "72",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/ride.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "74",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/snare.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "75",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/tom.wav"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("audio", {
                    "data-key": "76",
                    src: "https://raw.githubusercontent.com/Manonicu/pics/master/uPic/sounds/tink.wav"
                })
            ]
        }));
    }
};
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  .keys {
    display: flex;
    flex: 1;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    background: url('https://i.imgur.com/b9r5sEL.jpg') no-repeat;
  }

  .key {
    border: 0.4rem solid black;
    border-radius: 0.5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    transition: all 0.07s ease;
    width: 10rem;
    text-align: center;
    color: white;
    background: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 0.5rem black;
  }

  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }

  kbd {
    display: block;
    font-size: 4rem;
  }

  .sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #ffc600;
  }
`;


/***/ })

};
;