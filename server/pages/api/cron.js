"use strict";
(() => {
var exports = {};
exports.id = 267;
exports.ids = [267];
exports.modules = {

/***/ 1504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res1) {
    // if (req.method === 'POST') {
    //   try {
    //     const { authorization } = req.headers;
    //     if (authorization === `Bearer ${process.env.API_SECRET_KEY}`) {
    //       res.status(200).json({ success: true });
    //     } else {
    //       res.status(401).json({ success: false });
    //     }
    //   } catch (err) {
    //     res.status(500).json({ statusCode: 500, message: err.message });
    //   }
    // } else {
    //   res.setHeader('Allow', 'POST');
    //   res.status(405).end('Method Not Allowed');
    // }
    fetch('http://finance.sina.com.cn/7x24/').then((res)=>res.text()
    ).then((response)=>{
        console.log(res1);
        res1.status(200).json({
            success: true,
            data: response
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1504));
module.exports = __webpack_exports__;

})();