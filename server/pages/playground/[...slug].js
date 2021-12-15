(() => {
var exports = {};
exports.id = 795;
exports.ids = [795];
exports.modules = {

/***/ 8447:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./css/battery": [
		2874,
		874
	],
	"./css/battery.jsx": [
		2874,
		874
	],
	"./javascript/battery": [
		7153,
		351,
		153
	],
	"./javascript/battery.jsx": [
		7153,
		351,
		153
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 8447;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 914:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getPlaygrounds)
/* harmony export */ });
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([globby__WEBPACK_IMPORTED_MODULE_0__]);
globby__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const getPlaygrounds = async ()=>{
    const playgrounds = await (0,globby__WEBPACK_IMPORTED_MODULE_0__.globby)([
        '_playground'
    ]);
    return playgrounds.reduce((acc, playground)=>{
        const arr = playground.replace('.jsx', '').replace(/^_playground\//, '').split('/');
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

/***/ 7209:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Playground),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_getPlaygrounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(914);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_getPlaygrounds__WEBPACK_IMPORTED_MODULE_1__]);
api_getPlaygrounds__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function Playground(props) {
    const CustomComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__(8447)(`./${props.slug.join('/')}`)
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomComponent, {
    }));
};
async function getStaticPaths() {
    const paths = await (0,api_getPlaygrounds__WEBPACK_IMPORTED_MODULE_1__/* .getPlaygrounds */ .L)();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    return {
        props: {
            slug: params.slug
        }
    };
}

});

/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 702:
/***/ ((module) => {

"use strict";
module.exports = import("globby");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(7209)));
module.exports = __webpack_exports__;

})();