"use strict";
exports.id = 479;
exports.ids = [479];
exports.modules = {

/***/ 1479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_ExportModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/images/xq_wechat.jpeg
/* harmony default export */ const xq_wechat = ({"src":"https://cdn.jsdelivr.net/gh/threezhang/tuocibao_static@v1.0.0//_next/static/media/xq_wechat.0de4f83d.jpeg","height":978,"width":823,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAcDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABAwQDAAAAAAAAAAAAAAACAAERAwQSIQUUQf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC4tb7kSu+vTrONDIsTFh28lLRHkNtERB//2Q==","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./src/components/ExportModal.jsx




const ExportModal = ({ onClose  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "bg-white p-8 rounded-lg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-xl font-semibold mb-4",
                    children: "导出功能"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "mb-4",
                    children: "请扫描下方二维码解锁 VIP 功能"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: xq_wechat,
                    alt: "QR Code",
                    width: 240,
                    height: 240,
                    className: "mb-4"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md",
                    onClick: onClose,
                    children: "关闭"
                })
            ]
        })
    });
};
/* harmony default export */ const components_ExportModal = (ExportModal);


/***/ })

};
;