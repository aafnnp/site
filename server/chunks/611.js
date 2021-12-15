"use strict";
exports.id = 611;
exports.ids = [611];
exports.modules = {

/***/ 1829:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ getAllPosts),
/* harmony export */   "LR": () => (/* binding */ GetPostBySlug),
/* harmony export */   "pm": () => (/* binding */ GetRandomPost)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var globby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(702);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([globby__WEBPACK_IMPORTED_MODULE_1__]);
globby__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const dayjs = __webpack_require__(1635);
const relativeTime = __webpack_require__(4195);
dayjs.extend(relativeTime);
const getAllPosts = async ()=>{
    const posts = await (0,globby__WEBPACK_IMPORTED_MODULE_1__.globby)([
        '_posts'
    ]);
    const postsArray = [];
    for await (const post1 of posts){
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(post1, 'utf8');
        const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
        const postData = {
            data: {
                ...data,
                date: dayjs(data.date).format('MMMM D, YYYY'),
                fromNow: dayjs(data.date).fromNow()
            },
            content,
            slug: post1.replace(/^_posts\//, '').replace(/\.mdx$/, '')
        };
        postsArray.push(postData);
    }
    const visiblePosts = postsArray.sort((a, b)=>dayjs(b.data.date) - dayjs(a.data.date)
    ).filter((post)=>post.data.draft !== true
    );
    return (0,utils_index__WEBPACK_IMPORTED_MODULE_3__/* .chunk */ .y)(visiblePosts, 20);
};
// 根据slug导出文章
const GetPostBySlug = async (slug)=>{
    const realslug = `${slug.join('/')}`;
    const allPosts = await getAllPosts();
    return allPosts.flat(2).find((post)=>post.slug.includes(realslug)
    );
};
// 根据tag导出随机文章
const GetRandomPost = async ()=>{
    const randomPost = (await getAllPosts()).flat(2);
    return (0,utils_index__WEBPACK_IMPORTED_MODULE_3__/* .getRandomArrayElements */ .x)(randomPost, randomPost.length < 6 ? randomPost.length - 1 : 6);
};

});

/***/ }),

/***/ 7267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Layout = ({ children , title , description  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: title,
                description: description,
                openGraph: {
                    title,
                    description
                }
            }),
            children
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);


/***/ }),

/***/ 5313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ getRandomArrayElements),
/* harmony export */   "y": () => (/* binding */ chunk)
/* harmony export */ });
const getRandomArrayElements = (arr, count)=>{
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - count;
    let temp;
    let index;
    while((i--) > min){
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
};
// Chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
const chunk = (arr, size)=>Array.from({
        length: Math.ceil(arr.length / size)
    }, (v, i)=>arr.slice(i * size, i * size + size)
    )
;


/***/ })

};
;