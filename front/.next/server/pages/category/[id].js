(function() {
var exports = {};
exports.id = 7300;
exports.ids = [7300];
exports.modules = {

/***/ 5310:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3530);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(247);
/* harmony import */ var actions_actionUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5902);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7964);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3177);
/* harmony import */ var components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3620);
/* harmony import */ var components_Cards_BoxStyleCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7917);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);

















function Category() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    changableCommunities,
    hasMoreCommunity,
    loadCommunitiesLoading,
    singleCategory,
    communityLength
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(state => state.community);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    function onScroll() {
      if (changableCommunities.length) {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 300) {
          if (hasMoreCommunity && !loadCommunitiesLoading) {
            const categoryId = Number(router.query.id);
            const lastId = changableCommunities[changableCommunities.length - 1].id;
            dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__/* .loadCategoryCommunitiesRequestAction */ .pc)({
              categoryId,
              communityId: lastId
            }));
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMoreCommunity, loadCommunitiesLoading, changableCommunities, router.query.id]);

  if (!singleCategory) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694"
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_13___default()), {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        children: ["community - ", singleCategory.name, " \uCE74\uD14C\uACE0\uB9AC"]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__/* .default */ .ZP, {
        img: singleCategory.profilePhoto,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__/* .CategoryHeader */ .Wt, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
            children: [singleCategory.name, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), communityLength, "\uAC1C\uC758 \uCEE4\uBBA4\uB2C8\uD2F0"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__/* .CategoryContent */ .pI, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cards-container",
            children: changableCommunities.map(community => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_12__.default, {
                href: `/community/${community.id}`,
                prefetch: false,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Cards_BoxStyleCard__WEBPACK_IMPORTED_MODULE_11__.default, {
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
  const categoryId = Number(context.query.id);
  (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.Cookie) = '';

  if (context.req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_4___default().defaults.headers.Cookie) = cookie;
  }

  context.store.dispatch((0,actions_actionUser__WEBPACK_IMPORTED_MODULE_3__/* .loadMyInfoRequestAction */ .J5)());
  context.store.dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__/* .loadCategoryRequestAction */ .VE)({
    categoryId
  }));
  context.store.dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__/* .loadCategoryCommunitiesRequestAction */ .pc)({
    categoryId,
    communityId: 0
  }));
  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ 2372:
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ 3530:
/***/ (function(module) {

"use strict";
module.exports = require("@redux-saga/core");;

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
var __webpack_exports__ = __webpack_require__.X(0, [1664,2245,5902,3177,7964,247,7917,3240], function() { return __webpack_exec__(5310); });
module.exports = __webpack_exports__;

})();