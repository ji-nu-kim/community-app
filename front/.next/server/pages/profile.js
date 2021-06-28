(function() {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 8586:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ profile; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Layouts/AppLayout.tsx
var AppLayout = __webpack_require__(7964);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__(5902);
// EXTERNAL MODULE: ./store/configureStore.tsx + 9 modules
var configureStore = __webpack_require__(3177);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "@redux-saga/core"
var core_ = __webpack_require__(3530);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Layouts/ProfileLayout.tsx



const ProfileContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "ProfileLayout__ProfileContainer",
  componentId: "sc-1u88ywv-0"
})(["display:grid;grid-template-rows:200px auto;width:100%;height:100%;"]);
const ProfileHeader = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "ProfileLayout__ProfileHeader",
  componentId: "sc-1u88ywv-1"
})(["padding:1rem;background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3));display:grid;grid-template-columns:auto 76px;.header-left{display:flex;align-items:center;.header-image{width:150px;height:150px;background:rgba(0,0,0,0.1);border-radius:50%;display:flex;justify-content:center;align-items:center;img{border-radius:50%;object-fit:cover;}.header-icon{color:#cacaca;font-size:3rem;}}.header-text{margin-left:1rem;height:100%;display:flex;flex-direction:column;justify-content:center;p{font-size:0.75rem;color:#039be5;font-weight:bold;}h1{color:#fff;font-weight:bold;font-size:2rem;}.text-country{cursor:pointer;color:#cdcedf;font-size:0.8rem;font-weight:bold;:hover{color:#039be5;}}}}.header-right{button{border:none;color:#fff;background:#039be5;height:28px;font-size:0.75rem;:hover{cursor:pointer;background:#007bb8;}}}"]);
const ProfileContent = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "ProfileLayout__ProfileContent",
  componentId: "sc-1u88ywv-2"
})(["display:grid;grid-template-rows:auto;padding:1rem;gap:1rem;h1{font-family:'Black Han Sans',sans-serif;font-size:2rem;color:hotpink;margin-bottom:1rem;}.cards-container{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(250px,auto));}"]);

function ProfileLayout({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(ProfileContainer, {
    children: children
  });
}

/* harmony default export */ var Layouts_ProfileLayout = (ProfileLayout);
// EXTERNAL MODULE: ./actions/actionCommunity.ts
var actionCommunity = __webpack_require__(247);
// EXTERNAL MODULE: ./components/Cards/RoundStyleCard/index.tsx + 1 modules
var RoundStyleCard = __webpack_require__(3046);
;// CONCATENATED MODULE: ./pages/profile.tsx


















const UserProfileModifyModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 8578).then(__webpack_require__.bind(__webpack_require__, 8578)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8578)],
    modules: ["profile.tsx -> " + 'components/Modals/UserProfileModifyModal']
  }
});
const SearchAddressModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 5660).then(__webpack_require__.bind(__webpack_require__, 5660)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5660)],
    modules: ["profile.tsx -> " + 'components/Modals/SearchAddressModal']
  }
});

function Profile() {
  var _me$Categories, _me$Communities;

  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    me,
    changeProfileDone
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    0: userProfileModifyModal,
    1: setUserProfileModifyModal
  } = (0,external_react_.useState)(false);
  const {
    0: showSearchAddressModal,
    1: setShowSearchAdressModal
  } = (0,external_react_.useState)(false);
  const {
    0: modifyCountry,
    1: setModifyCountry
  } = (0,external_react_.useState)('');
  const openSearchAddressModal = (0,external_react_.useCallback)(() => {
    setShowSearchAdressModal(true);
  }, []);
  const closeSearchAddressModal = (0,external_react_.useCallback)(() => {
    setShowSearchAdressModal(false);
    setModifyCountry('');
  }, []);
  const profileModifyModalTrigger = (0,external_react_.useCallback)(() => {
    setUserProfileModifyModal(prev => !prev);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (changeProfileDone) {
      setUserProfileModifyModal(false);
    }
  }, [changeProfileDone]);
  (0,external_react_.useEffect)(() => {
    if (modifyCountry !== '') {
      if (confirm(`주소를 ${modifyCountry}로 변경하시겠습니까?`)) {
        dispatch((0,actionUser/* changeCountryRequestAction */.S3)({
          country: modifyCountry
        }));
      } else {
        alert('취소했습니다');
      }
    }
  }, [modifyCountry]);
  (0,external_react_.useEffect)(() => {
    if (!me) {
      router_default().push('/');
    }
  }, [me]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uD504\uB85C\uD544 - community"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppLayout.default, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Layouts_ProfileLayout, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileHeader, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "header-left",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "header-image",
              children: me !== null && me !== void 0 && me.profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: me === null || me === void 0 ? void 0 : me.profilePhoto,
                width: "150",
                height: "150",
                alt: "profile-image"
              }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {
                className: "header-icon"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "header-text",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: "\uD504\uB85C\uD544"
              }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: me === null || me === void 0 ? void 0 : me.nickname
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "text-country",
                onClick: openSearchAddressModal,
                children: me === null || me === void 0 ? void 0 : me.country
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "header-right",
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: profileModifyModalTrigger,
              children: "\uC218\uC815\uD558\uAE30"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileContent, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "\uB098\uC758 \uCE74\uD14C\uACE0\uB9AC \uB9AC\uC2A4\uD2B8"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cards-container",
              children: me === null || me === void 0 ? void 0 : (_me$Categories = me.Categories) === null || _me$Categories === void 0 ? void 0 : _me$Categories.map(category => /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `/category/${category.id}`,
                  prefetch: false,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(RoundStyleCard/* default */.Z, {
                      name: category.name,
                      img: `${"https://api.jinu-community.site"}/${category.profilePhoto}`,
                      width: "240",
                      height: "220"
                    })
                  })
                })
              }, category.name))
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: "\uB098\uC758 \uCEE4\uBBA4\uB2C8\uD2F0 \uB9AC\uC2A4\uD2B8"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "cards-container",
              children: me === null || me === void 0 ? void 0 : (_me$Communities = me.Communities) === null || _me$Communities === void 0 ? void 0 : _me$Communities.map(community => /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `/community/${community.id}`,
                  prefetch: false,
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(RoundStyleCard/* default */.Z, {
                      name: community.communityName,
                      img: community.profilePhoto ? community.profilePhoto : null,
                      width: "240",
                      height: "220"
                    })
                  })
                })
              }, community.communityName))
            })]
          })]
        })]
      }), userProfileModifyModal && /*#__PURE__*/jsx_runtime_.jsx(UserProfileModifyModal, {
        setUserProfileModifyModal: setUserProfileModifyModal
      }), showSearchAddressModal && /*#__PURE__*/jsx_runtime_.jsx(SearchAddressModal, {
        closeSearchAddressModal: closeSearchAddressModal,
        setCountry: setModifyCountry,
        type: "village"
      })]
    })]
  });
}

const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  (external_axios_default()).defaults.headers.Cookie = '';

  if (context.req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  context.store.dispatch((0,actionUser/* loadMyInfoRequestAction */.J5)());
  context.store.dispatch((0,actionCommunity/* loadCategoriesRequestAction */.Rh)());
  context.store.dispatch(core_.END);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ var profile = (/*#__PURE__*/(0,external_react_.memo)(Profile));

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

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

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

/***/ 3903:
/***/ (function(module) {

"use strict";
module.exports = require("react-daum-postcode");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,2245,5902,3177,7964,247,8887], function() { return __webpack_exec__(8586); });
module.exports = __webpack_exports__;

})();