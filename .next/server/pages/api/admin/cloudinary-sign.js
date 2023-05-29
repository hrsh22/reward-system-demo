"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/admin/cloudinary-sign";
exports.ids = ["pages/api/admin/cloudinary-sign"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "(api)/./pages/api/admin/cloudinary-sign.js":
/*!********************************************!*\
  !*** ./pages/api/admin/cloudinary-sign.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ signature)\n/* harmony export */ });\nconst cloudinary = (__webpack_require__(/*! cloudinary */ \"cloudinary\").v2);\nfunction signature(req, res) {\n    const timestamp = Math.round(new Date().getTime() / 1000);\n    const signature = cloudinary.utils.api_sign_request({\n        timestamp: timestamp\n    }, process.env.CLOUDINARY_SECRET);\n    res.statusCode = 200;\n    res.json({\n        signature,\n        timestamp\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vY2xvdWRpbmFyeS1zaWduLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxhQUFhQyx3REFBd0I7QUFFNUIsU0FBU0UsVUFBVUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDMUMsTUFBTUMsWUFBWUMsS0FBS0MsS0FBSyxDQUFDLElBQUlDLE9BQU9DLE9BQU8sS0FBSztJQUNwRCxNQUFNUCxZQUFZSCxXQUFXVyxLQUFLLENBQUNDLGdCQUFnQixDQUNqRDtRQUNFTixXQUFXQTtJQUNiLEdBQ0FPLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0lBRy9CVixJQUFJVyxVQUFVLEdBQUc7SUFDakJYLElBQUlZLElBQUksQ0FBQztRQUFFZDtRQUFXRztJQUFVO0FBQ2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXdhcmQtc3lzdGVtLWRlbW8vLi9wYWdlcy9hcGkvYWRtaW4vY2xvdWRpbmFyeS1zaWduLmpzP2U2MGEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xvdWRpbmFyeSA9IHJlcXVpcmUoJ2Nsb3VkaW5hcnknKS52MjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZ25hdHVyZShyZXEsIHJlcykge1xyXG4gIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGgucm91bmQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxuICBjb25zdCBzaWduYXR1cmUgPSBjbG91ZGluYXJ5LnV0aWxzLmFwaV9zaWduX3JlcXVlc3QoXHJcbiAgICB7XHJcbiAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wLFxyXG4gICAgfSxcclxuICAgIHByb2Nlc3MuZW52LkNMT1VESU5BUllfU0VDUkVUXHJcbiAgKTtcclxuXHJcbiAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgcmVzLmpzb24oeyBzaWduYXR1cmUsIHRpbWVzdGFtcCB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY2xvdWRpbmFyeSIsInJlcXVpcmUiLCJ2MiIsInNpZ25hdHVyZSIsInJlcSIsInJlcyIsInRpbWVzdGFtcCIsIk1hdGgiLCJyb3VuZCIsIkRhdGUiLCJnZXRUaW1lIiwidXRpbHMiLCJhcGlfc2lnbl9yZXF1ZXN0IiwicHJvY2VzcyIsImVudiIsIkNMT1VESU5BUllfU0VDUkVUIiwic3RhdHVzQ29kZSIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/cloudinary-sign.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/cloudinary-sign.js"));
module.exports = __webpack_exports__;

})();