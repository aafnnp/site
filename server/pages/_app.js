"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(6641);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/_app.jsx









const Header = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 932).then(__webpack_require__.bind(__webpack_require__, 1932))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1932)
            ]
        ,
        modules: [
            "_app.jsx -> " + "components/Header"
        ]
    }
});
const Comments = (0,dynamic["default"])(()=>__webpack_require__.e(/* import() */ 475).then(__webpack_require__.bind(__webpack_require__, 3475))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(3475)
            ]
        ,
        modules: [
            "_app.jsx -> " + "components/Comments"
        ]
    }
});
const theme = (0,react_.extendTheme)({
    fonts: {
        body: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    }
});
const App = ({ Component , pageProps  })=>{
    const router = (0,router_.useRouter)();
    const url = `https://manon.icu${router.route}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,user-scalable=no"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Manon.icu,homepage"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Manon.icu | Home"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_next_seo_.NextSeo, {
                titleTemplate: "%s - Manon.icu",
                openGraph: {
                    type: 'website',
                    url,
                    description: 'The personal website for Manon, Frontend Web Developer.',
                    site_name: 'Manon | manon.icu',
                    image: 'https://cdn.jsdelivr.net/gh/manonicu/pics@master/uPic/9oh25b.jpg',
                    imageWidth: 900,
                    imageHeight: 900
                },
                canonical: url,
                twitter: {
                    handle: '@Manonicu',
                    cardType: 'summary_large_image'
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
                resetCSS: true,
                theme: theme,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ColorModeProvider, {
                    options: {
                        useSystemColorMode: true
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                            maxW: "container.md",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                                style: {
                                    color: '#fff'
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
                            maxW: /^\/(challenges|about)/.test(router.route) ? 'container.full' : 'container.md',
                            children: [
                                /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                                    ...pageProps,
                                    canonical: url,
                                    key: url
                                }),
                                router.route.startsWith('/blog') && /*#__PURE__*/ jsx_runtime_.jsx(Comments, {
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152], () => (__webpack_exec__(3575)));
module.exports = __webpack_exports__;

})();