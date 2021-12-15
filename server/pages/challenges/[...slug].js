(() => {
var exports = {};
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 5248:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./css/404-not-found": [
		8144,
		730,
		664,
		144
	],
	"./css/404-not-found.jsx": [
		8144,
		730,
		664,
		144
	],
	"./javascript/drum-kit": [
		2524,
		524
	],
	"./javascript/drum-kit.jsx": [
		2524,
		524
	],
	"./javascript/expanding-card": [
		8114,
		114
	],
	"./javascript/expanding-card.jsx": [
		8114,
		114
	],
	"./javascript/hidden-search-widget": [
		9249,
		249
	],
	"./javascript/hidden-search-widget.jsx": [
		9249,
		249
	],
	"./javascript/progress-steps": [
		7667,
		667
	],
	"./javascript/progress-steps.jsx": [
		7667,
		667
	],
	"./javascript/rotating-nav-animation": [
		5015,
		15
	],
	"./javascript/rotating-nav-animation.jsx": [
		5015,
		15
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
webpackAsyncContext.id = 5248;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 1206:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 1335:
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
/* harmony import */ var api_getAllChallenges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1206);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_getAllChallenges__WEBPACK_IMPORTED_MODULE_1__]);
api_getAllChallenges__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function Playground(props) {
    const CustomComponent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(()=>__webpack_require__(5248)(`./${props.slug.join('/')}`)
    );
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomComponent, {
    }));
};
async function getStaticPaths() {
    const paths = await (0,api_getAllChallenges__WEBPACK_IMPORTED_MODULE_1__/* .getAllChallenges */ .W)();
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

/***/ 1143:
/***/ ((module) => {

"use strict";
module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

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
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(1335)));
module.exports = __webpack_exports__;

})();