exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 638:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
__webpack_unused_export__ = noSSR;
exports["default"] = dynamic;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _loadable = _interopRequireDefault(__webpack_require__(5832));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const isServerSide = "undefined" === 'undefined';
function noSSR(LoadableInitializer, loadableOptions) {
    // Removing webpack and modules means react-loadable won't try preloading
    delete loadableOptions.webpack;
    delete loadableOptions.modules;
    // This check is necessary to prevent react-loadable from initializing on the server
    if (!isServerSide) {
        return LoadableInitializer(loadableOptions);
    }
    const Loading = loadableOptions.loading;
    // This will only be rendered on the server side
    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {
            error: null,
            isLoading: true,
            pastDelay: false,
            timedOut: false
        })
    ;
}
function dynamic(dynamicOptions, options) {
    let loadableFn = _loadable.default;
    let loadableOptions = {
        // A loading component is not required, so we default it
        loading: ({ error , isLoading , pastDelay  })=>{
            if (!pastDelay) return null;
            if (false) {}
            return null;
        }
    };
    // Support for direct import(), eg: dynamic(import('../hello-world'))
    // Note that this is only kept for the edge case where someone is passing in a promise as first argument
    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
    // To make sure we don't execute the import without rendering first
    if (dynamicOptions instanceof Promise) {
        loadableOptions.loader = ()=>dynamicOptions
        ;
    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))
    } else if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
    } else if (typeof dynamicOptions === 'object') {
        loadableOptions = {
            ...loadableOptions,
            ...dynamicOptions
        };
    }
    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})
    loadableOptions = {
        ...loadableOptions,
        ...options
    };
    const suspenseOptions = loadableOptions;
    if (true) {
        // Error if react root is not enabled and `suspense` option is set to true
        if ( true && suspenseOptions.suspense) {
            // TODO: add error doc when this feature is stable
            throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
        }
    }
    if (suspenseOptions.suspense) {
        return loadableFn(suspenseOptions);
    }
    // coming from build/babel/plugins/react-loadable-plugin.js
    if (loadableOptions.loadableGenerated) {
        loadableOptions = {
            ...loadableOptions,
            ...loadableOptions.loadableGenerated
        };
        delete loadableOptions.loadableGenerated;
    }
    // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})
    if (typeof loadableOptions.ssr === 'boolean') {
        if (!loadableOptions.ssr) {
            delete loadableOptions.ssr;
            return noSSR(loadableFn, loadableOptions);
        }
        delete loadableOptions.ssr;
    }
    return loadableFn(loadableOptions);
} //# sourceMappingURL=dynamic.js.map


/***/ }),

/***/ 5152:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(638)


/***/ })

};
;