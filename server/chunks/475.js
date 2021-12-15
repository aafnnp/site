"use strict";
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 3475:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Comments)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Comments extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    componentDidMount() {
        const script = document.createElement('script');
        const anchor = document.getElementById('inject-comments-for-uterances');
        script.setAttribute('src', 'https://giscus.app/client.js');
        script.setAttribute('crossorigin', 'anonymous');
        script.setAttribute('data-repo', 'Manonicu/site');
        script.setAttribute('data-repo-id', 'MDEwOlJlcG9zaXRvcnkzMjY4ODQyMjM=');
        script.setAttribute('data-category', 'General');
        script.setAttribute('data-category-id', 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyMzU1OTIz');
        script.setAttribute('data-mapping', 'og:title');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '1');
        script.setAttribute('data-theme', 'light');
        anchor.appendChild(script);
    }
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "inject-comments-for-uterances"
        }));
    }
};


/***/ })

};
;