"use strict";
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 7667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProgressSteps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




class ProgressSteps extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
    state = {
        step: 0
    };
    handleClick(type = 'prev') {
        const { step  } = this.state;
        if (type === 'prev' && step === 0) return false;
        if (type === 'next' && step === 3) return false;
        this.setState({
            step: type === 'prev' ? step - 1 : step + 1
        });
    }
    render() {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
            children: [
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "b3e1b6a7c9b96113",
                    children: ""
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-b3e1b6a7c9b96113" + " " + "progress-steps",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-b3e1b6a7c9b96113" + " " + `steps steps-${this.state.step}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-b3e1b6a7c9b96113" + " " + "step",
                                    /*#__PURE__*/ children: "1"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-b3e1b6a7c9b96113" + " " + "step",
                                    children: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-b3e1b6a7c9b96113" + " " + "step",
                                    children: "3"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "jsx-b3e1b6a7c9b96113" + " " + "step",
                                    children: "4"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "jsx-b3e1b6a7c9b96113" + " " + "btn-group",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: this.handleClick.bind(this, 'prev'),
                                    className: "jsx-b3e1b6a7c9b96113" + " " + ((this.state.step === 0 ? 'disabled' : '') || ""),
                                    children: "Prev"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: this.handleClick.bind(this, 'next'),
                                    className: "jsx-b3e1b6a7c9b96113" + " " + ((this.state.step === 3 ? 'disabled' : '') || ""),
                                    children: "Next"
                                })
                            ]
                        })
                    ]
                })
            ]
        }));
    }
};
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  .progress-steps {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .steps {
    position: relative;
    height: 2rem;
    width: 38.2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .steps::after,
  .steps::before {
    position: absolute;
    display: block;
    content: '';
    height: 0.25rem;
    width: 100%;
    left: 0;
    top: 50%;
    margin-top: -0.125rem;
    background-color: #efefef;
    z-index: -1;
  }

  .steps::before {
    z-index: 1;
    background-color: burlywood;
    width: 0;
  }

  .steps-1::before {
    width: 33.333333%;
  }

  .steps-2::before {
    width: 66.666667%;
  }

  .steps-3::before {
    width: 100%;
  }

  .steps .step {
    position: relative;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    background-color: burlywood;
    text-align: center;
    line-height: 2rem;
    color: #ffffff;
    z-index: 99;
  }

  .btn-group {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  .btn-group button {
    width: 6rem;
    height: 2rem;
    background-color: burlywood;
    color: #ffffff;
    border-radius: 0.25rem;
  }

  .btn-group button.disabled {
    cursor: not-allowed;
    background: lightgrey;
  }
`;


/***/ })

};
;