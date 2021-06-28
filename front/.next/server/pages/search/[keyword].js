(function() {
var exports = {};
exports.id = 1565;
exports.ids = [1565];
exports.modules = {

/***/ 4510:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var actions_actionCommunity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(247);
/* harmony import */ var actions_actionUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5902);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7964);
/* harmony import */ var components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3620);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7765);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3177);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var components_Cards_BoxStyleCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7917);

















function keyword() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  const {
    changableCommunities
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(state => state.community);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        children: ["community - ", router.query.keyword, " \uAC80\uC0C9"]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_5__/* .default */ .ZP, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_5__/* .CategoryHeader */ .Wt, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            children: ["\u201C", router.query.keyword, "\u201D\uC640", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), "\uC5F0\uAD00\uC788\uB294 \uCEE4\uBBA4\uB2C8\uD2F0 ", changableCommunities.length, "\uAC1C"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_5__/* .CategoryContent */ .pI, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cards-container",
            children: changableCommunities.map(community => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_12__.default, {
                href: `/community/${community.id}`,
                prefetch: false,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Cards_BoxStyleCard__WEBPACK_IMPORTED_MODULE_13__.default, {
                    profilePhoto: community.profilePhoto,
                    categoryName: community.Categories[0].name,
                    country: community.country,
                    communityName: community.communityName
                  })
                })
              })
            }, community.id))
          })
        })]
      })
    })]
  });
}

const getServerSideProps = store_configureStore__WEBPACK_IMPORTED_MODULE_9__/* .default.getServerSideProps */ .Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  const keyword = String(context.query.keyword);
  (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.Cookie) = '';

  if (context.req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.Cookie) = cookie;
  }

  context.store.dispatch((0,actions_actionUser__WEBPACK_IMPORTED_MODULE_2__/* .loadMyInfoRequestAction */ .J5)());
  context.store.dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_1__/* .searchCommunitiesRequestAction */ .VX)({
    keyword
  }));
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_8__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_6__.memo)(keyword));

/***/ }),

/***/ 2372:
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4584:
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 2744:
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9639:
/***/ (function(module) {

"use strict";
module.exports = require("next/dynamic");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

/***/ }),

/***/ 5176:
/***/ (function(module) {

"use strict";
module.exports = require("redux-devtools-extension");;

/***/ }),

/***/ 7765:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga");;

/***/ }),

/***/ 5060:
/***/ (function(module) {

"use strict";
module.exports = require("redux-saga/effects");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,2245,5902,3177,7964,247,7917,3240], function() { return __webpack_exec__(4510); });
module.exports = __webpack_exports__;

})();