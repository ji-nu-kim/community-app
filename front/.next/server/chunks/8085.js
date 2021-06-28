exports.id = 8085;
exports.ids = [8085];
exports.modules = {

/***/ 32:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_ImageInsert; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./actions/actionUser.ts
var actionUser = __webpack_require__(5902);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ImageInsert/styles.tsx

const ProfileImgContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__ProfileImgContainer",
  componentId: "sc-1cujmv9-0"
})(["position:relative;img{position:absolute;z-index:-1;top:-1px;left:-1px;border-radius:50%;object-fit:cover;}.img-input-btn{margin:0.5rem 0;position:relative;width:100px;height:100px;background:rgba(0,0,0,0.1);.img-input-icon{color:#cacaca;font-size:2rem;}}.img-delete-btn{position:absolute;top:-1px;left:-1px;width:100px;height:100px;border-radius:50%;background:rgba(0,0,0,0.5);color:#fff;display:flex;justify-content:center;align-items:center;transition:opacity 0.3s linear;opacity:0;:hover{opacity:1;transition:opacity 0.3s linear;}}"]);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./actions/actionCommunity.ts
var actionCommunity = __webpack_require__(247);
;// CONCATENATED MODULE: ./components/ImageInsert/index.tsx












function ImageInsert({
  imagePath,
  profilePhoto
}) {
  const router = (0,router_.useRouter)();
  const dispatch = (0,external_react_redux_.useDispatch)();
  const imageInputRef = (0,external_react_.useRef)(null);
  const {
    uploadImageDone
  } = (0,external_react_redux_.useSelector)(state => state.user);
  const {
    uploadCommunityImageDone
  } = (0,external_react_redux_.useSelector)(state => state.community);
  const onClickImageUpload = (0,external_react_.useCallback)(() => {
    const route = router.route.split('/')[1];

    if (route === 'profile' && !uploadImageDone) {
      var _imageInputRef$curren;

      (_imageInputRef$curren = imageInputRef.current) === null || _imageInputRef$curren === void 0 ? void 0 : _imageInputRef$curren.click();
    } else if (route === 'community' && !uploadCommunityImageDone) {
      var _imageInputRef$curren2;

      (_imageInputRef$curren2 = imageInputRef.current) === null || _imageInputRef$curren2 === void 0 ? void 0 : _imageInputRef$curren2.click();
    }
  }, [imageInputRef.current, uploadImageDone, uploadCommunityImageDone]);
  const onChangeImages = (0,external_react_.useCallback)(e => {
    var _e$target$files;

    if ((_e$target$files = e.target.files) !== null && _e$target$files !== void 0 && _e$target$files.length) {
      const route = router.route.split('/')[1];
      const imageFormData = new FormData();
      [].forEach.call(e.target.files, f => {
        imageFormData.append('image', f);
      });

      if (route === 'profile') {
        return dispatch((0,actionUser/* uploadImageRequestAction */.CS)(imageFormData));
      } else if (route === 'community') {
        return dispatch((0,actionCommunity/* uploadCommunityImageRequestAction */.Rc)(imageFormData));
      }
    }
  }, []);
  const onRemoveImage = (0,external_react_.useCallback)(() => {
    const route = router.route.split('/')[1];

    if (imagePath.length) {
      if (route === 'profile') {
        return dispatch((0,actionUser/* removeImage */.CM)());
      } else if (route === 'community') {
        return dispatch((0,actionCommunity/* removeCommunityImage */.u9)());
      }
    }
  }, [imagePath]);
  return /*#__PURE__*/jsx_runtime_.jsx(ProfileImgContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "file",
        name: "image",
        hidden: true,
        ref: imageInputRef,
        onChange: onChangeImages
      }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Button, {
        onClick: onClickImageUpload,
        shape: "circle",
        className: "img-input-btn",
        children: imagePath.length ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            width: "100",
            height: "100",
            src: imagePath[0].replace(/\/resize\//, '/original/'),
            alt: "profileimage"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: onRemoveImage,
            className: "img-delete-btn",
            children: "\uC9C0\uC6B0\uAE30"
          })]
        }) : profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
          width: "100",
          height: "100",
          src: profilePhoto,
          alt: "profileimage"
        }) : /*#__PURE__*/jsx_runtime_.jsx(icons_.CameraOutlined, {
          className: "img-input-icon"
        })
      })]
    })
  });
}

/* harmony default export */ var components_ImageInsert = (/*#__PURE__*/(0,external_react_.memo)(ImageInsert));

/***/ })

};
;