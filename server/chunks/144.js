"use strict";
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 8144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




function Index() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "page-not-found",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "title",
                    children: "404 NOT FOUND"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "page-not-found-content",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "slogan",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/Scarecrow.png",
                                alt: "404 not found"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "detail",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "I have bad news for you"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "The page you are looking for might be removed or is temporarily unavailable"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        children: "Back to homepage"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "footer",
                            children: "created by username - devChallenges.io"
                        })
                    ]
                })
            ]
        })
    }));
};
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  @import url('https://fonts.loli.net/css2?family=Space+Mono&display=swap');
  @import url('https://fonts.loli.net/css2?family=Montserrat&display=swap');
  .page-not-found {
    position: absolute;
    left: 0;
    top: 4rem;
    width: 100vw;
  }
  .page-not-found-content {
    display: flex;
    width: 100vw;
    min-height: 100vh;
    height: 100vh;
    padding: 40px 77px;
    justify-content: center;
    align-items: center;
    font-family: 'Space Mono', monospace;
  }

  .title {
    position: absolute;
    top: 44px;
    left: 77px;
    font-size: 24px;
    color: #333;
    font-weight: 700;
    font-family: 'Montserrat', monospace;
  }

  //width={540} height={448}
  .slogan {
    margin-bottom: 30px;
    width: 540px;
  }

  .detail {
    flex: 1;
  }

  .detail h2 {
    font-size: 64px;
    font-weight: bold;
    line-height: 95px;
    letter-spacing: -0.035em;
    color: #333;
  }

  .detail p {
    margin: 36px 0 64px;
    color: #4f4f4f;
    font-size: 24px;
    line-height: 36px;
  }

  .detail a {
    display: block;
    padding: 0 15px;
    width: max-content;
    height: 68px;
    line-height: 68px;
    background-color: #333;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
  }

  .footer {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 14px;
    color: #bdbdbd;
    font-weight: 700;
    bottom: 24px;
    left: 0;
    font-family: 'Montserrat', monospace;
  }

  @media only screen and (max-width: 375px) {
    .page-not-found-content {
      padding: 20px 24px;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .title {
      top: 20px;
      left: 24px;
      font-size: 12px;
    }

    .slogan {
      width: 286px;
    }

    .detail {
      flex: none;
    }

    .detail h2 {
      font-size: 24px;
      line-height: 35px;
    }

    .detail p {
      margin: 15px 0 33px;
      font-size: 9px;
      line-height: 27px;
    }

    .detail a {
      display: block;
      height: 34px;
      line-height: 34px;
    }

    .footer {
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 768px) {
    .page-not-found-content {
      padding: 20px 24px;
    }

    .title {
      top: 20px;
      left: 24px;
      font-size: 12px;
    }

    .slogan,
    .detail {
      flex: 1;
    }
    .detail h2 {
      font-size: 36px;
      line-height: 35px;
    }
    .detail p {
      margin: 15px 0 33px;
      font-size: 16px;
      line-height: 32px;
    }
    .detail a {
      display: block;
      height: 34px;
      line-height: 34px;
    }

    .footer {
      font-weight: 500;
    }
  }
`;


/***/ })

};
;