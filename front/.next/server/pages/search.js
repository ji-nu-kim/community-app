(function() {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 234:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ search; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Layouts/AppLayout.tsx
var AppLayout = __webpack_require__(7964);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Message/index.tsx



const MessageContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "Message__MessageContainer",
  componentId: "sc-13ctnji-0"
})(["position:relative;width:100%;height:100%;background:url('/errorimage.png');background-position:center;background-repeat:repeat-x;background-size:20%;.message-text{position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);font-family:'Yeon Sung',cursive;width:100%;font-size:3rem;font-weight:bold;text-align:center;background:linear-gradient(#e1eec3,#f05053);-webkit-background-clip:text;-webkit-text-fill-color:transparent;@media (min-width:1440px){top:35%;}}"]);

function Message({
  text
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(MessageContainer, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "message-text",
      children: text
    })
  });
}

/* harmony default export */ var components_Message = (Message);
// EXTERNAL MODULE: ./store/configureStore.tsx + 9 modules
var configureStore = __webpack_require__(3177);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__(5902);
// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__(7765);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/search/index.tsx












function Search() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "community - \uAC80\uC0C9"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(AppLayout.default, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Message, {
        text: "\uCEE4\uBBA4\uB2C8\uD2F0\uB97C \uAC80\uC0C9\uD558\uC138\uC694!"
      })
    })]
  });
}

/* harmony default export */ var search = (Search);
const getServerSideProps = configureStore/* default.getServerSideProps */.Z.getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  (external_axios_default()).defaults.headers.Cookie = '';

  if (context.req && cookie) {
    (external_axios_default()).defaults.headers.Cookie = cookie;
  }

  context.store.dispatch((0,actionUser/* loadMyInfoRequestAction */.J5)());
  context.store.dispatch(external_redux_saga_.END);
  await context.store.sagaTask.toPromise();
});

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [2245,5902,3177,7964], function() { return __webpack_exec__(234); });
module.exports = __webpack_exports__;

})();