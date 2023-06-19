"use strict";
(() => {
var exports = {};
exports.id = 17;
exports.ids = [17];
exports.modules = {

/***/ 6544:
/***/ ((module) => {

module.exports = import("node-fetch");;

/***/ }),

/***/ 2664:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
node_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({
            message: "Method not allowed"
        });
        return;
    }
    // 获取客户端 IP 地址
    const clientIp = req.headers["cf-connecting-ip"] || req.headers["x-real-ip"] || req.connection.remoteAddress;
    // 获取客户端的 User-Agent
    const userAgent = req.headers["user-agent"];
    const { userInput  } = req.body;
    try {
        const response = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(//   `http://127.0.0.1:8000/tuocibao/summary?keyword=${encodeURIComponent(userInput)}&ip=${encodeURIComponent(clientIp)}&ua=${encodeURIComponent(userAgent)}`
        `http://127.0.0.1:5000/tuocibao/summary?keyword=${encodeURIComponent(userInput)}&ip=${encodeURIComponent(clientIp)}&ua=${encodeURIComponent(userAgent)}`);
        const data = await response.json();
        res.status(200).json({
            status: "success",
            data
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch data"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2664));
module.exports = __webpack_exports__;

})();