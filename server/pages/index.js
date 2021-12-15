"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1878:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var api_getAllPosts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1829);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_getAllPosts__WEBPACK_IMPORTED_MODULE_3__]);
api_getAllPosts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






function IndexPage(props) {
    const [curPage, setCurPage] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(1);
    const postList = props.posts[curPage - 1];
    const breakpoints = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useBreakpointValue)({
        base: {
            columns: '100%',
            gap: 0,
            display: 'none'
        },
        xs: {
            columns: '100%',
            gap: 0,
            display: 'none'
        },
        sm: {
            columns: '100%',
            gap: 0,
            display: 'none'
        },
        md: {
            columns: '100%',
            gap: 0,
            display: 'none'
        },
        xl: {
            columns: '30% auto',
            gap: 6,
            display: 'block'
        },
        lg: {
            columns: '30% auto',
            gap: 6,
            display: 'block'
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            postList.map((item)=>{
                var ref;
                const { slug , data  } = item;
                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    templateColumns: (breakpoints === null || breakpoints === void 0 ? void 0 : breakpoints.columns) || '100%',
                    gap: (breakpoints === null || breakpoints === void 0 ? void 0 : breakpoints.gap) || 0,
                    py: 2,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            width: "100%",
                            color: "gray",
                            textAlign: "right",
                            display: (breakpoints === null || breakpoints === void 0 ? void 0 : breakpoints.display) || 'none',
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                color: "gray.500",
                                isTruncated: true,
                                children: data.date
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            width: "100%",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        href: `/blog/${slug}`,
                                        children: data.title
                                    }),
                                    (ref = data.tags) === null || ref === void 0 ? void 0 : ref.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                                            boxSize: "1rem",
                                            alt: tag,
                                            htmlWidth: "1rem",
                                            htmlHeight: "1rem",
                                            src: `https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/icons/${tag}.svg`
                                        }, tag)
                                    )
                                ]
                            })
                        })
                    ]
                }, item.slug));
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                py: 4,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
                    total: props.posts.length,
                    initialPage: curPage,
                    onChange: (page)=>setCurPage(page)
                })
            })
        ]
    }));
};
async function getStaticProps() {
    const posts = await (0,api_getAllPosts__WEBPACK_IMPORTED_MODULE_3__/* .getAllPosts */ .Bd)();
    return {
        props: {
            posts
        }
    };
}

});

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 4195:
/***/ ((module) => {

module.exports = require("dayjs/plugin/relativeTime");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 702:
/***/ ((module) => {

module.exports = import("globby");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [611], () => (__webpack_exec__(1878)));
module.exports = __webpack_exports__;

})();