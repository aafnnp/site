"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 8744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Ad = ({ children  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({
            });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ad);


/***/ }),

/***/ 4474:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var api_getAllPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1829);
/* harmony import */ var components_ad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8744);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7267);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(276);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7112);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5566);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9847);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_getAllPosts__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_13__]);
([api_getAllPosts__WEBPACK_IMPORTED_MODULE_2__, uuid__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);














const UnsplashImage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(()=>__webpack_require__.e(/* import() */ 657).then(__webpack_require__.bind(__webpack_require__, 1657))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1657)
            ]
        ,
        modules: [
            "blog/[...slug].jsx -> " + "components/Unsplash"
        ]
    }
});
const PostPage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(()=>__webpack_require__.e(/* import() */ 237).then(__webpack_require__.bind(__webpack_require__, 1237))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(1237)
            ]
        ,
        modules: [
            "blog/[...slug].jsx -> " + "components/PostPage"
        ]
    }
});
const Random = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(()=>__webpack_require__.e(/* import() */ 54).then(__webpack_require__.bind(__webpack_require__, 8054))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(8054)
            ]
        ,
        modules: [
            "blog/[...slug].jsx -> " + "components/RandomPost"
        ]
    }
});
function Post({ data , content , randomPost  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    if (!router.isFallback && !content) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_error__WEBPACK_IMPORTED_MODULE_9___default()), {
            statusCode: 404
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: data.title,
        description: data.description,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                as: "h1",
                children: data.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                color: "gray.500",
                fontSize: "12px",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: data.date
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        children: [
                            "Published ",
                            data.fromNow
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UnsplashImage, {
                    ...data
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                fontSize: "sm",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PostPage, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__.MDXRemote, {
                                ...content,
                                components: utils_components__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
                            }),
                            data.originUrl && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                                status: "info",
                                display: "grid",
                                gridTemplateColumns: "100px auto",
                                alignItems: "start",
                                children: [
                                    "本文翻译自：",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                        href: data.originUrl,
                                        children: data.originUrl
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_ad__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ins", {
                                className: "adsbygoogle",
                                style: {
                                    display: 'block'
                                },
                                "data-ad-client": "ca-pub-3854566314387093",
                                "data-ad-slot": "9901453595",
                                "data-ad-format": "auto",
                                "data-full-width-responsive": "true"
                            })
                        }, (0,uuid__WEBPACK_IMPORTED_MODULE_13__.v4)())
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Random, {
                        data: randomPost
                    })
                ]
            })
        ]
    }));
}
async function getStaticPaths() {
    const allPosts = await (0,api_getAllPosts__WEBPACK_IMPORTED_MODULE_2__/* .getAllPosts */ .Bd)();
    const paths = allPosts.flat(2).map((post)=>({
            params: {
                slug: post.slug.split('/')
            }
        })
    );
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const source = await (0,api_getAllPosts__WEBPACK_IMPORTED_MODULE_2__/* .GetPostBySlug */ .LR)(params.slug);
    const randomPost = await (0,api_getAllPosts__WEBPACK_IMPORTED_MODULE_2__/* .GetRandomPost */ .pm)();
    const { content , data  } = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(source);
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_7__.serialize)(content, {
        // Optionally pass remark/rehype plugins
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: []
        },
        scope: data
    });
    return {
        props: {
            data,
            content: mdxSource,
            randomPost
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

});

/***/ }),

/***/ 9847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./components/CanIUse.jsx
var CanIUse = __webpack_require__(1351);
;// CONCATENATED MODULE: external "mdx-embed"
const external_mdx_embed_namespaceObject = require("mdx-embed");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./utils/components.js





const components = {
    CodePen: external_mdx_embed_namespaceObject.CodePen,
    Gist: external_mdx_embed_namespaceObject.Gist,
    CodeSandbox: external_mdx_embed_namespaceObject.CodeSandbox,
    CanIUse: CanIUse/* default */.Z,
    h2: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
            mt: 8,
            mb: 4,
            size: "md",
            as: "h2",
            ...props
        })
    ,
    h3: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
            mt: 4,
            mb: 2,
            size: "sm",
            as: "h3",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                ...props
            })
        })
    ,
    h4: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
            mt: 2,
            mb: 1,
            size: "xs",
            as: "h4",
            ...props
        })
    ,
    p: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            mb: 4,
            ...props
        })
    ,
    pre: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            as: "pre",
            mb: 4,
            ...props
        })
    ,
    ul: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.OrderedList, {
            mb: 4,
            styleType: "circle",
            color: "gray.500",
            ...props
        })
    ,
    ol: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.OrderedList, {
            mb: 4,
            styleType: "circle",
            color: "gray.500",
            ...props
        })
    ,
    li: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.ListItem, {
            ...props
        })
    ,
    img: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            mt: 8,
            boxShadow: "2xl",
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                loading: "lazy",
                alt: props.alt,
                ...props
            })
        })
};
/* harmony default export */ const utils_components = (components);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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

/***/ 276:
/***/ ((module) => {

module.exports = require("next-mdx-remote");

/***/ }),

/***/ 7112:
/***/ ((module) => {

module.exports = require("next-mdx-remote/serialize");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ 1000:
/***/ ((module) => {

module.exports = import("highlight.js");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,351,611], () => (__webpack_exec__(4474)));
module.exports = __webpack_exports__;

})();