exports.id = 2673;
exports.ids = [2673];
exports.modules = {

/***/ 3125:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_SideBar; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/SideBar/styles.tsx

const SideBarContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__SideBarContainer",
  componentId: "sc-1smoamj-0"
})(["font-family:'Noto Sans KR',sans-serif;background:rgba(0,0,0,0.8);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);padding:4px;height:calc(100vh - 44px);position:sticky;top:44px;overflow:auto;span{margin-right:4px;pointer-events:none;}h2{font-size:1.25rem;padding:0.5rem;margin:0;color:#e4e4e4;font-weight:bold;}.menu-section{margin-top:1rem;ul{list-style:none;padding-left:0;display:grid;height:120px;grid-template-rows:repeat(3,1fr);margin:0;li{a{display:flex;align-items:center;padding-left:1rem;color:#b3b3b3;height:100%;width:100%;:hover{background:rgba(255,255,255,0.1);border-radius:10px;color:#fff;}}}.active{background:rgba(255,255,255,0.2);border-radius:10px;color:#fff;}}}.community-section{border-top:1px solid rgba(255,255,255,0.1);margin-top:1rem;padding:4px;.make-community{display:flex;align-items:center;height:40px;color:#b3b3b3;padding-left:1rem;cursor:pointer;:hover{background:rgba(255,255,255,0.1);border-radius:10px;color:#fff;}}ul{list-style:none;padding-left:0;margin:0;li{height:40px;a{display:flex;align-items:center;padding-left:1rem;color:#b3b3b3;height:100%;width:100%;span{position:relative;width:24px;height:24px;background:linear-gradient(to right,#40e0d0,#ff8c00,#ff0080);border-radius:50%;color:#fff;text-align:center;img{position:absolute;z-index:10;top:0;left:0;border-radius:50%;object-fit:cover;}}:hover{background:rgba(255,255,255,0.1);border-radius:10px;color:#fff;}}}.active{background:rgba(255,255,255,0.2);border-radius:10px;color:#fff;}}}"]);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./components/SideBar/index.tsx










function SideBar() {
  const router = (0,router_.useRouter)();
  const {
    me
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const path = router.asPath.split('/');
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SideBarContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "menu-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "\uBA54\uC778\uBA54\uB274"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              prefetch: false,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: path[1] === '' ? 'active' : 'null',
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(icons_.HomeOutlined, {})
                }), "\uD648"]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/category",
              prefetch: false,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: path[1] === 'category' ? 'active' : 'null',
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(icons_.AppstoreOutlined, {})
                }), "\uCE74\uD14C\uACE0\uB9AC"]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/search",
              prefetch: false,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: path[1] === 'search' ? 'active' : 'null',
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: /*#__PURE__*/jsx_runtime_.jsx(icons_.SearchOutlined, {})
                }), "\uAC80\uC0C9"]
              })
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "community-section",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          children: "\uCEE4\uBBA4\uB2C8\uD2F0\uBA54\uB274"
        }), me && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/makecommunity",
          prefetch: false,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            className: "make-community",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusSquareOutlined, {})
            }), "\uCEE4\uBBA4\uB2C8\uD2F0 \uB9CC\uB4E4\uAE30"]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          children: (me === null || me === void 0 ? void 0 : me.Communities) && me.Communities.map(v => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: `/community/${v.id}`,
              prefetch: false,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                className: path[1] === 'community' && Number(path[2]) === v.id ? 'active' : 'null',
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: v.profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                    width: "24px",
                    height: "24px",
                    src: v.profilePhoto,
                    alt: "profile image"
                  }) : v.communityName[0]
                }), v.communityName.length > 10 ? `${v.communityName.slice(0, 10)}...` : v.communityName]
              })
            })
          }, v.communityName))
        })]
      })]
    })
  });
}

/* harmony default export */ var components_SideBar = (/*#__PURE__*/(0,external_react_.memo)(SideBar));

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;