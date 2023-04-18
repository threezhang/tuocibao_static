"use strict";
exports.id = 604;
exports.ids = [604];
exports.modules = {

/***/ 5937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ AuthLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/images/background-auth.jpg
/* harmony default export */ const background_auth = ({"src":"https://cdn.jsdelivr.net/gh/threezhang/tuocibao_static@v1.0.0//_next/static/media/background-auth.4bcf3f4b.jpg","height":1866,"width":1664,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDBBIh/8QAFQEBAQAAAAAAAAAAAAAAAAAABQb/xAAZEQEAAgMAAAAAAAAAAAAAAAABAAIRIUH/2gAMAwEAAhEDEQA/AL05cteJelWZb2HABYGXsALFtoT/2Q==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/AuthLayout.jsx



function AuthLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex min-h-full justify-center md:px-12 lg:px-0",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0",
                        children: children
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden sm:contents lg:relative lg:block lg:flex-1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "absolute inset-0 h-full w-full object-cover",
                        src: background_auth,
                        alt: "",
                        unoptimized: true
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 9050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ SelectField),
/* harmony export */   "n": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


const formClasses = "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";
function Label({ id , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: id,
        className: "mb-3 block text-sm font-medium text-gray-700",
        children: children
    });
}
function TextField({ id , label , type ="text" , className ="" , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                id: id,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: id,
                type: type,
                ...props,
                className: formClasses
            })
        ]
    });
}
function SelectField({ id , label , className ="" , ...props }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Label, {
                id: id,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                id: id,
                ...props,
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(formClasses, "pr-8")
            })
        ]
    });
}


/***/ })

};
;