(function() {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 2562:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7765);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var actions_actionUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5902);
/* harmony import */ var actions_actionCommunity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(247);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3177);













const BoxStyleCard = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/* import() */ 7917).then(__webpack_require__.bind(__webpack_require__, 7917)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7917)],
    modules: ["index.tsx -> " + 'components/Cards/BoxStyleCard']
  }
});
const HomeLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/* import() */ 8498).then(__webpack_require__.bind(__webpack_require__, 8498)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8498)],
    modules: ["index.tsx -> " + 'components/Layouts/HomeLayout']
  }
});
const AppLayout = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => __webpack_require__.e(/* import() */ 7964).then(__webpack_require__.bind(__webpack_require__, 7964)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7964)],
    modules: ["index.tsx -> " + 'components/Layouts/AppLayout']
  }
});

function Home() {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const {
    me
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.user);
  const {
    mainCommunities,
    changableCommunities,
    hasMoreCommunity,
    loadCommunitiesLoading
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.community);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (me !== null && me !== void 0 && me.country) {
      dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_9__/* .loadCountryCommunitiesRequestAction */ .X0)({
        country: me.country,
        communityId: 0
      }));
    }
  }, [me === null || me === void 0 ? void 0 : me.country]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    function onScroll() {
      if (me !== null && me !== void 0 && me.country && changableCommunities.length) {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 200) {
          if (hasMoreCommunity && !loadCommunitiesLoading) {
            const lastId = changableCommunities[changableCommunities.length - 1].id;
            dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_9__/* .loadCountryCommunitiesRequestAction */ .X0)({
              country: me.country,
              communityId: lastId
            }));
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMoreCommunity, loadCommunitiesLoading, changableCommunities, me]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap",
        rel: "stylesheet"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppLayout, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HomeLayout, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "\uC0C8\uB85C\uC6B4 \uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uB9CC\uB098\uBCF4\uC138\uC694"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cards-container",
            children: mainCommunities.map(community => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                href: `/community/${community.id}`,
                prefetch: false,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxStyleCard, {
                    profilePhoto: community.profilePhoto,
                    categoryName: community.Categories[0].name,
                    country: community.country,
                    communityName: community.communityName
                  })
                })
              })
            }, `new${community.id}`))
          })]
        }), me && changableCommunities && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            children: "\uC6B0\uB9AC\uB3D9\uB124 \uCEE4\uBBA4\uB2C8\uD2F0"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "cards-container",
            children: changableCommunities.map(community => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__.default, {
                href: `/community/${community.id}`,
                prefetch: false,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BoxStyleCard, {
                    profilePhoto: community.profilePhoto,
                    categoryName: community.Categories[0].name,
                    country: community.country,
                    communityName: community.communityName
                  })
                })
              })
            }, `country${community.id}`))
          })]
        })]
      })
    })]
  });
}

const getServerSideProps = store_configureStore__WEBPACK_IMPORTED_MODULE_10__/* .default.getServerSideProps */ .Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.Cookie) = '';

  if (context.req && cookie) {
    (axios__WEBPACK_IMPORTED_MODULE_1___default().defaults.headers.Cookie) = cookie;
  }

  context.store.dispatch((0,actions_actionUser__WEBPACK_IMPORTED_MODULE_8__/* .loadMyInfoRequestAction */ .J5)());
  context.store.dispatch((0,actions_actionCommunity__WEBPACK_IMPORTED_MODULE_9__/* .loadCommunitiesRequestAction */ .Cj)());
  context.store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_4__.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(Home));

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

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,2245,5902,3177,247], function() { return __webpack_exec__(2562); });
module.exports = __webpack_exports__;

})();