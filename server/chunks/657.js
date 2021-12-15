"use strict";
exports.id = 657;
exports.ids = [657];
exports.modules = {

/***/ 1657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Unsplash)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Unsplash(props) {
    const [photos, setPhotos] = react__WEBPACK_IMPORTED_MODULE_2___default().useState('https://source.unsplash.com/random');
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetch(`https://api.unsplash.com/search/photos/?client_id=rqPMZ8Ur7rQa6x2P1oPOSziry4m5XXod9KWStukAAy4&query=` + props.tags[0] || 0).then((response)=>response.json()
        ).then(({ results  })=>{
            const random = Math.floor(Math.random() * results.length);
            setPhotos(results[random].urls.regular);
        });
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
        borderRadius: "md",
        aspectratio: 1 / 0.382,
        src: photos,
        loading: "lazy",
        alt: props.title
    }));
};


/***/ })

};
;