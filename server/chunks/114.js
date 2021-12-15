"use strict";
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 8114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



class Index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    state = {
        list: [
            {
                title: 'Explore The World',
                imgUrl: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                active: true
            },
            {
                title: 'Wild Forest',
                imgUrl: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                active: false
            },
            {
                title: 'Sunny Beach',
                imgUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
                active: false
            },
            {
                title: 'City on Winter',
                imgUrl: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                active: false
            },
            {
                title: 'Mountains - Clouds',
                imgUrl: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                active: false
            }, 
        ]
    };
    _click(key1) {
        const _state = this.state.list.map((item, idx)=>({
                ...item,
                active: key1 === idx
            })
        );
        this.setState({
            list: _state
        });
    }
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "cards bg-white",
                children: this.state.list.map((item, key)=>{
                    const _class = item.active ? 'card active' : 'card';
                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: _class,
                        onClick: this._click.bind(this, key),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: item.imgUrl,
                                alt: item.title,
                                loading: "lazy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: item.title
                            })
                        ]
                    }, item.title));
                })
            })
        }));
    }
};
const Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  .cards {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    align-items: center;
    padding: 15vh 15vw;
    gap: 1vw;
    position: absolute;
    left: 0;
    top: 4rem;
    width: 100vw;
  }

  .cards .card {
    position: relative;
    border-radius: 7.5vw;
    width: 7.5vw;
    height: 100%;
    overflow: hidden;
    transition: width 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .cards .card h3 {
    position: absolute;
    left: 3rem;
    bottom: 1rem;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.5s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .cards .card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cards .card.active {
    width: 50vw;
  }

  .cards .card.active h3 {
    opacity: 1;
  }
`;


/***/ })

};
;