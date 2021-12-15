"use strict";
exports.id = 15;
exports.ids = [15];
exports.modules = {

/***/ 5015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressSteps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




class ProgressSteps extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    handleClick(e) {
        e.currentTarget.classList.toggle('active');
        document.querySelector('.rotating-main').classList.toggle('active');
        document.querySelector('.rotating-nav').classList.toggle('active');
    }
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rotating",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rotating-main",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("hgroup", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: "Amazing Article"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            children: "Manon.icu"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "rotating-content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "My Dog"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
                                            alt: "My Dog"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "rotating-btn",
                        onClick: this.handleClick.bind(this),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.MenuIcon, {
                                className: "w-10 h-10 absolute top-3/4 left-3/4 -ml-5 -mt-5"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.XIcon, {
                                className: "w-10 h-10 absolute top-3/4 left-1/4 -ml-5 -mt-5"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "rotating-nav",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.HomeIcon, {
                                        className: "w-4 h-4 mr-4"
                                    }),
                                    "HOME"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.UserIcon, {
                                        className: "w-4 h-4 mr-4"
                                    }),
                                    "ABOUT"
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_1__.MailIcon, {
                                        className: "w-4 h-4 mr-4"
                                    }),
                                    "CONTACT"
                                ]
                            })
                        ]
                    })
                ]
            })
        }));
    }
};
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  .rotating {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #2d2d2d;
  }

  .rotating-main {
    position: relative;
    padding: 100px;
    width: 100%;
    height: 100%;
    background-color: #fff;
    font-size: 16px;
    transition: transform 0.5s ease-in-out;
    transform-origin: 0 0;
    z-index: 10;
  }

  .rotating-main.active {
    transform-origin: 0 0;
    transform: rotateZ(-15deg);
  }

  .rotating-main hgroup {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .rotating-main i {
    font-size: 16px;
    color: #999999;
    font-weight: normal;
  }

  .rotating-content p {
    line-height: 1.5;
    margin: 1rem 0;
  }

  .rotating-content h2 {
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: 500;
  }

  .rotating-btn {
    position: absolute;
    width: 200px;
    height: 200px;
    background-color: #ff6371;
    color: #ffffff;
    top: -100px;
    left: -100px;
    border-radius: 100%;
    transition: transform 0.5s ease-in-out;
    z-index: 99;
  }

  .rotating-btn.active {
    transform: rotateZ(-90deg);
  }

  .rotating-nav {
    position: absolute;
    z-index: 1;
    left: 2rem;
    bottom: 2rem;
    color: #ffffff;
  }

  .rotating-nav li {
    position: relative;
    display: flex;
    align-items: center;
    height: 2rem;
    opacity: 0;
    transition: all 0.5s ease-in-out 0.25s;
  }

  .rotating-nav.active li {
    opacity: 1;
    transform: translateX(0.5rem);
  }

  .rotating-nav li:nth-child(2) {
    transition-delay: 0.5s;
  }

  .rotating-nav li:nth-child(3) {
    transition-delay: 0.75s;
  }

  .rotating-nav.active li:nth-child(2) {
    transform: translateX(1rem);
  }

  .rotating-nav.active li:nth-child(3) {
    transform: translateX(2rem);
  }
`;


/***/ })

};
;