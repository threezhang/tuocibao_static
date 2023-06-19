"use strict";
exports.id = 793;
exports.ids = [793];
exports.modules = {

/***/ 5825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const baseStyles = {
    solid: "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
    outline: "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none"
};
const variantStyles = {
    solid: {
        slate: "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
        blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
        white: "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
    },
    outline: {
        slate: "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
        white: "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"
    }
};
function Button({ variant ="solid" , color ="slate" , className , href , ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(baseStyles[variant], variantStyles[variant][color], className);
    return href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props
    });
}


/***/ }),

/***/ 4251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "T": () => (/* binding */ Logo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/images/logos/tuocibao_logo.png
/* harmony default export */ const tuocibao_logo = ({"src":"https://cdn.jsdelivr.net/gh/threezhang/tuocibao_static@v1.0.0//_next/static/media/tuocibao_logo.10d8f433.png","height":366,"width":402,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAARVBMVEUhBwUpYIUpWnckeakhDgonJCoeNkYbJCQfDAgiGhYfDQouhK4thLgviL0hVHclHBgvhrArY4cjFxYsW3cjGRUxkcg0ndoidUL5AAAAFXRSTlNNhYH3QxxjBFlQNKTG+fQ+paSWS3kX6e41AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBBwLAIAgAsVNBwA678P9PbYJNBvoNhH6//jjeM1sXw7c824XidR2rooSUvUgYFkCY/T5vAc4UizDJAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./src/components/Logo.jsx



function Logo(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: tuocibao_logo,
                    alt: "Tuocibao Logo",
                    height: 40,
                    width: 40
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("text", {
                className: "h-10 text-md p-2 align-middle text-gray-800 font-semibold",
                children: "拓词宝"
            })
        ]
    });
}


/***/ })

};
;