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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @paypal/react-paypal-js */ \"@paypal/react-paypal-js\");\n/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_3__.StoreProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_5__.PayPalScriptProvider, {\n                deferLoading: true,\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    adminOnly: Component.auth.adminOnly,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n                        lineNumber: 14,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children , adminOnly  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status , data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\pages\\\\_app.js\",\n            lineNumber: 34,\n            columnNumber: 12\n        }, this);\n    }\n    if (adminOnly && !session.user.isAdmin) {\n        router.push(\"/unauthorized?message=admin login required\");\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDK0I7QUFDZjtBQUNQO0FBQ3VCO0FBRS9ELFNBQVNLLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxXQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHRCxXQUFXLEdBQUUsRUFBRTtJQUNsRSxxQkFDRSw4REFBQ1AsNERBQWVBO1FBQUNRLFNBQVNBO2tCQUN4Qiw0RUFBQ04sdURBQWFBO3NCQUNaLDRFQUFDRSx5RUFBb0JBO2dCQUFDSyxjQUFjLElBQUk7MEJBQ3JDSCxVQUFVSSxJQUFJLGlCQUNiLDhEQUFDQztvQkFBS0MsV0FBV04sVUFBVUksSUFBSSxDQUFDRSxTQUFTOzhCQUN2Qyw0RUFBQ047d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozt5Q0FHMUIsOERBQUNEO29CQUFXLEdBQUdDLFNBQVM7Ozs7O3dCQUN6Qjs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0FBRUEsU0FBU0ksS0FBSyxFQUFFRSxTQUFRLEVBQUVELFVBQVMsRUFBRSxFQUFFO0lBQ3JDLE1BQU1FLFNBQVNYLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVZLE9BQU0sRUFBRUMsTUFBTVIsUUFBTyxFQUFFLEdBQUdQLDJEQUFVQSxDQUFDO1FBQzNDZ0IsVUFBVSxJQUFJO1FBQ2RDLHFCQUFvQjtZQUNsQkosT0FBT0ssSUFBSSxDQUFDO1FBQ2Q7SUFDRjtJQUNBLElBQUlKLFdBQVcsV0FBVztRQUN4QixxQkFBTyw4REFBQ0s7c0JBQUk7Ozs7OztJQUNkLENBQUM7SUFDRCxJQUFJUixhQUFhLENBQUNKLFFBQVFhLElBQUksQ0FBQ0MsT0FBTyxFQUFFO1FBQ3RDUixPQUFPSyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsT0FBT047QUFDVDtBQUVBLGlFQUFlUixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV3YXJkLXN5c3RlbS1kZW1vLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyLCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gJy4uL3V0aWxzL1N0b3JlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBQYXlQYWxTY3JpcHRQcm92aWRlciB9IGZyb20gJ0BwYXlwYWwvcmVhY3QtcGF5cGFsLWpzJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxyXG4gICAgICA8U3RvcmVQcm92aWRlcj5cclxuICAgICAgICA8UGF5UGFsU2NyaXB0UHJvdmlkZXIgZGVmZXJMb2FkaW5nPXt0cnVlfT5cclxuICAgICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcclxuICAgICAgICAgICAgPEF1dGggYWRtaW5Pbmx5PXtDb21wb25lbnQuYXV0aC5hZG1pbk9ubHl9PlxyXG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgPC9BdXRoPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxyXG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XHJcbiAgICA8L1Nlc3Npb25Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4sIGFkbWluT25seSB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBzdGF0dXMsIGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oe1xyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy91bmF1dGhvcml6ZWQ/bWVzc2FnZT1sb2dpbiByZXF1aXJlZCcpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG4gIGlmIChhZG1pbk9ubHkgJiYgIXNlc3Npb24udXNlci5pc0FkbWluKSB7XHJcbiAgICByb3V0ZXIucHVzaCgnL3VuYXV0aG9yaXplZD9tZXNzYWdlPWFkbWluIGxvZ2luIHJlcXVpcmVkJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2hpbGRyZW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwidXNlU2Vzc2lvbiIsIlN0b3JlUHJvdmlkZXIiLCJ1c2VSb3V0ZXIiLCJQYXlQYWxTY3JpcHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImRlZmVyTG9hZGluZyIsImF1dGgiLCJBdXRoIiwiYWRtaW5Pbmx5IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzdGF0dXMiLCJkYXRhIiwicmVxdWlyZWQiLCJvblVuYXV0aGVudGljYXRlZCIsInB1c2giLCJkaXYiLCJ1c2VyIiwiaXNBZG1pbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {},\n        paymentMethod: \"\"\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug);\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug);\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_RESET\":\n            return {\n                ...state,\n                cart: {\n                    cartItems: [],\n                    shippingAddress: {\n                        location: {}\n                    },\n                    paymentMethod: \"\"\n                }\n            };\n        case \"CART_CLEAR_ITEMS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    cartItems: []\n                }\n            };\n        case \"SAVE_SHIPPING_ADDRESS\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    shippingAddress: {\n                        ...state.cart.shippingAddress,\n                        ...action.payload\n                    }\n                }\n            };\n        case \"SAVE_PAYMENT_METHOD\":\n            return {\n                ...state,\n                cart: {\n                    ...state.cart,\n                    paymentMethod: action.payload\n                }\n            };\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Reward Sysytem BC\\\\reward-demo\\\\reward-system-demo\\\\utils\\\\Store.js\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUN4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmV3YXJkLXN5c3RlbS1kZW1vLy4vdXRpbHMvU3RvcmUuanM/OGI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGNhcnQ6IENvb2tpZXMuZ2V0KCdjYXJ0JylcclxuICAgID8gSlNPTi5wYXJzZShDb29raWVzLmdldCgnY2FydCcpKVxyXG4gICAgOiB7IGNhcnRJdGVtczogW10sIHNoaXBwaW5nQWRkcmVzczoge30sIHBheW1lbnRNZXRob2Q6ICcnIH0sXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdDQVJUX0FERF9JVEVNJzoge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbmQoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uc2x1ZyA9PT0gbmV3SXRlbS5zbHVnXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IGV4aXN0SXRlbVxyXG4gICAgICAgID8gc3RhdGUuY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgICBpdGVtLm5hbWUgPT09IGV4aXN0SXRlbS5uYW1lID8gbmV3SXRlbSA6IGl0ZW1cclxuICAgICAgICAgIClcclxuICAgICAgICA6IFsuLi5zdGF0ZS5jYXJ0LmNhcnRJdGVtcywgbmV3SXRlbV07XHJcbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkoeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSkpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xyXG4gICAgfVxyXG4gICAgY2FzZSAnQ0FSVF9SRU1PVkVfSVRFTSc6IHtcclxuICAgICAgY29uc3QgY2FydEl0ZW1zID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgIT09IGFjdGlvbi5wYXlsb2FkLnNsdWdcclxuICAgICAgKTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XHJcbiAgICB9XHJcbiAgICBjYXNlICdDQVJUX1JFU0VUJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0OiB7XHJcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxyXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7IGxvY2F0aW9uOiB7fSB9LFxyXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ0NBUlRfQ0xFQVJfSVRFTVMnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXM6IFtdIH0gfTtcclxuXHJcbiAgICBjYXNlICdTQVZFX1NISVBQSU5HX0FERFJFU1MnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXHJcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnU0FWRV9QQVlNRU5UX01FVEhPRCc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcclxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH07XHJcbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPjtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJDb29raWVzIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjYXJ0IiwiZ2V0IiwiSlNPTiIsInBhcnNlIiwiY2FydEl0ZW1zIiwic2hpcHBpbmdBZGRyZXNzIiwicGF5bWVudE1ldGhvZCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwic2x1ZyIsIm1hcCIsIm5hbWUiLCJzZXQiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJsb2NhdGlvbiIsIlN0b3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();