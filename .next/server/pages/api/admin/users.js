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
exports.id = "pages/api/admin/users";
exports.ids = ["pages/api/admin/users"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtJQUFDO0lBQ3JDQyxPQUFPO1FBQUVILE1BQU1DO1FBQVFDLFVBQVUsSUFBSTtRQUFFRSxRQUFRLElBQUk7SUFBQztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVLElBQUk7SUFBQztJQUN6Q0ksU0FBUztRQUFFTixNQUFNTztRQUFTTCxVQUFVLElBQUk7UUFBRU0sU0FBUyxLQUFLO0lBQUM7QUFDM0QsR0FDQTtJQUNFQyxZQUFZLElBQUk7QUFDbEI7QUFHRixNQUFNQyxPQUFPZCw2REFBb0IsSUFBSUEscURBQWMsQ0FBQyxRQUFRQztBQUM1RCxpRUFBZWEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jld2FyZC1zeXN0ZW0tZGVtby8uL21vZGVscy9Vc2VyLmpzPzczNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpc0FkbWluOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCB1c2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwidXNlclNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInVuaXF1ZSIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/admin/users/index.js":
/*!****************************************!*\
  !*** ./pages/api/admin/users/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/db */ \"(api)/./utils/db.js\");\n\n\n\nconst handler = async (req, res)=>{\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n        req\n    });\n    if (!session || !session.user.isAdmin) {\n        return res.status(401).send(\"admin signin required\");\n    }\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n    const users = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n    await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n    res.send(users);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRtaW4vdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDRjtBQUNMO0FBRXRDLE1BQU1HLFVBQVUsT0FBT0MsS0FBS0MsTUFBUTtJQUNsQyxNQUFNQyxVQUFVLE1BQU1OLDJEQUFVQSxDQUFDO1FBQUVJO0lBQUk7SUFDdkMsSUFBSSxDQUFDRSxXQUFXLENBQUNBLFFBQVFDLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ3JDLE9BQU9ILElBQUlJLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUNELE1BQU1SLHlEQUFVO0lBQ2hCLE1BQU1VLFFBQVEsTUFBTVgseURBQVMsQ0FBQyxDQUFDO0lBQy9CLE1BQU1DLDREQUFhO0lBQ25CRyxJQUFJSyxJQUFJLENBQUNFO0FBQ1g7QUFFQSxpRUFBZVQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jld2FyZC1zeXN0ZW0tZGVtby8uL3BhZ2VzL2FwaS9hZG1pbi91c2Vycy9pbmRleC5qcz8yNTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xyXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvVXNlcic7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9kYic7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSk7XHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIuaXNBZG1pbikge1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdhZG1pbiBzaWduaW4gcmVxdWlyZWQnKTtcclxuICB9XHJcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xyXG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgVXNlci5maW5kKHt9KTtcclxuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgcmVzLnNlbmQodXNlcnMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJVc2VyIiwiZGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic2Vzc2lvbiIsInVzZXIiLCJpc0FkbWluIiwic3RhdHVzIiwic2VuZCIsImNvbm5lY3QiLCJ1c2VycyIsImZpbmQiLCJkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/admin/users/index.js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log(\"already connected\");\n        return;\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log(\"use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"new connection\");\n    connection.isConnected = db.connections[0].readyState;\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"not disconnected\");\n        }\n    }\n}\nfunction convertDocToObj(doc) {\n    doc._id = doc._id.toString();\n    doc.createdAt = doc.createdAt.toString();\n    doc.updatedAt = doc.updatedAt.toString();\n    return doc;\n}\nconst db = {\n    connect,\n    disconnect,\n    convertDocToObj\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxDQUFDO0FBRXBCLGVBQWVDLFVBQVU7SUFDdkIsSUFBSUQsV0FBV0UsV0FBVyxFQUFFO1FBQzFCQyxRQUFRQyxHQUFHLENBQUM7UUFDWjtJQUNGLENBQUM7SUFDRCxJQUFJTCxvRUFBMkIsR0FBRyxHQUFHO1FBQ25DQyxXQUFXRSxXQUFXLEdBQUdILDJFQUFrQztRQUMzRCxJQUFJQyxXQUFXRSxXQUFXLEtBQUssR0FBRztZQUNoQ0MsUUFBUUMsR0FBRyxDQUFDO1lBQ1o7UUFDRixDQUFDO1FBQ0QsTUFBTUwsMERBQW1CO0lBQzNCLENBQUM7SUFDRCxNQUFNVSxLQUFLLE1BQU1WLHVEQUFnQixDQUFDVyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7SUFDekRULFFBQVFDLEdBQUcsQ0FBQztJQUNaSixXQUFXRSxXQUFXLEdBQUdPLEdBQUdKLFdBQVcsQ0FBQyxFQUFFLENBQUNFLFVBQVU7QUFDdkQ7QUFFQSxlQUFlQyxhQUFhO0lBQzFCLElBQUlSLFdBQVdFLFdBQVcsRUFBRTtRQUMxQixJQUFJUSxLQUF5QixFQUFjLEVBRzFDLE1BQU07WUFDTFAsUUFBUUMsR0FBRyxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7QUFDSDtBQUNBLFNBQVNTLGdCQUFnQkMsR0FBRyxFQUFFO0lBQzVCQSxJQUFJQyxHQUFHLEdBQUdELElBQUlDLEdBQUcsQ0FBQ0MsUUFBUTtJQUMxQkYsSUFBSUcsU0FBUyxHQUFHSCxJQUFJRyxTQUFTLENBQUNELFFBQVE7SUFDdENGLElBQUlJLFNBQVMsR0FBR0osSUFBSUksU0FBUyxDQUFDRixRQUFRO0lBQ3RDLE9BQU9GO0FBQ1Q7QUFFQSxNQUFNTCxLQUFLO0lBQUVSO0lBQVNPO0lBQVlLO0FBQWdCO0FBQ2xELGlFQUFlSixFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV3YXJkLXN5c3RlbS1kZW1vLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FscmVhZHkgY29ubmVjdGVkJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2UgcHJldmlvdXMgY29ubmVjdGlvbicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XHJcbiAgY29uc29sZS5sb2coJ25ldyBjb25uZWN0aW9uJyk7XHJcbiAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBkaXNjb25uZWN0ZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY29udmVydERvY1RvT2JqKGRvYykge1xyXG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKCk7XHJcbiAgZG9jLmNyZWF0ZWRBdCA9IGRvYy5jcmVhdGVkQXQudG9TdHJpbmcoKTtcclxuICBkb2MudXBkYXRlZEF0ID0gZG9jLnVwZGF0ZWRBdC50b1N0cmluZygpO1xyXG4gIHJldHVybiBkb2M7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0geyBjb25uZWN0LCBkaXNjb25uZWN0LCBjb252ZXJ0RG9jVG9PYmogfTtcclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJsZW5ndGgiLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCIsImRiIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiY29udmVydERvY1RvT2JqIiwiZG9jIiwiX2lkIiwidG9TdHJpbmciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/admin/users/index.js"));
module.exports = __webpack_exports__;

})();