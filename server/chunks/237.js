"use strict";
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 1237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1000);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([highlight_js__WEBPACK_IMPORTED_MODULE_1__]);
highlight_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




class PostPage extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {
    componentDidMount() {
        this.updateCodeSyntaxHighlighting();
    }
    componentDidUpdate() {
        this.updateCodeSyntaxHighlighting();
    }
    updateCodeSyntaxHighlighting() {
        document.querySelectorAll('pre code').forEach((el)=>{
            highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightElement(el);
        });
    }
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: this.props.children
        }));
    }
};

});

/***/ })

};
;