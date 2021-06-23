exports.ids = [2];
exports.modules = {

/***/ "MQtY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__("Lwpp");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/ImageInsert/styles.tsx

const ProfileImgContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__ProfileImgContainer",
  componentId: "sc-1cujmv9-0"
})(["position:relative;img{position:absolute;z-index:-1;top:-1px;left:-1px;border-radius:50%;object-fit:cover;}.img-input-btn{margin:0.5rem 0;position:relative;width:100px;height:100px;background:rgba(0,0,0,0.1);.img-input-icon{color:#cacaca;font-size:2rem;}}.img-delete-btn{position:absolute;top:-1px;left:-1px;width:100px;height:100px;border-radius:50%;background:rgba(0,0,0,0.5);color:#fff;display:flex;justify-content:center;align-items:center;transition:opacity 0.3s linear;opacity:0;:hover{opacity:1;transition:opacity 0.3s linear;}}"]);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./actions/actionCommunity.ts
var actionCommunity = __webpack_require__("YXRT");

// CONCATENATED MODULE: ./components/ImageInsert/index.tsx












function ImageInsert({
  imagePath,
  profilePhoto
}) {
  const router = Object(router_["useRouter"])();
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const imageInputRef = Object(external_react_["useRef"])(null);
  const {
    uploadImageDone
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    uploadCommunityImageDone
  } = Object(external_react_redux_["useSelector"])(state => state.community);
  const onClickImageUpload = Object(external_react_["useCallback"])(() => {
    const route = router.route.split('/')[1];

    if (route === 'profile' && !uploadImageDone) {
      var _imageInputRef$curren;

      (_imageInputRef$curren = imageInputRef.current) === null || _imageInputRef$curren === void 0 ? void 0 : _imageInputRef$curren.click();
    } else if (route === 'community' && !uploadCommunityImageDone) {
      var _imageInputRef$curren2;

      (_imageInputRef$curren2 = imageInputRef.current) === null || _imageInputRef$curren2 === void 0 ? void 0 : _imageInputRef$curren2.click();
    }
  }, [imageInputRef.current, uploadImageDone, uploadCommunityImageDone]);
  const onChangeImages = Object(external_react_["useCallback"])(e => {
    var _e$target$files;

    if ((_e$target$files = e.target.files) !== null && _e$target$files !== void 0 && _e$target$files.length) {
      const route = router.route.split('/')[1];
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append('image', f);
      });

      if (route === 'profile') {
        return dispatch(Object(actionUser["k" /* uploadImageRequestAction */])(imageFormData));
      } else if (route === 'community') {
        return dispatch(Object(actionCommunity["u" /* uploadCommunityImageRequestAction */])(imageFormData));
      }
    }
  }, []);
  const onRemoveImage = Object(external_react_["useCallback"])(() => {
    const route = router.route.split('/')[1];

    if (imagePath.length) {
      if (route === 'profile') {
        return dispatch(Object(actionUser["h" /* removeImage */])());
      } else if (route === 'community') {
        return dispatch(Object(actionCommunity["q" /* removeCommunityImage */])());
      }
    }
  }, [imagePath]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfileImgContainer, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
        type: "file",
        name: "image",
        hidden: true,
        ref: imageInputRef,
        onChange: onChangeImages
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_antd_["Button"], {
        onClick: onClickImageUpload,
        shape: "circle",
        className: "img-input-btn",
        children: imagePath.length ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            width: "100",
            height: "100",
            src: imagePath[0],
            alt: "profileimage"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            onClick: onRemoveImage,
            className: "img-delete-btn",
            children: "\uC9C0\uC6B0\uAE30"
          })]
        }) : profilePhoto ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          width: "100",
          height: "100",
          src: profilePhoto,
          alt: "profileimage"
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["CameraOutlined"], {
          className: "img-input-icon"
        })
      })]
    })
  });
}

/* harmony default export */ var components_ImageInsert = __webpack_exports__["default"] = (/*#__PURE__*/Object(external_react_["memo"])(ImageInsert));

/***/ })

};;