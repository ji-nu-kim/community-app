exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 979:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CommunityBody_Post; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: ./actions/actionPost.ts
var actionPost = __webpack_require__(8188);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/CommunityBody/Post/styles.tsx

const PostContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__PostContainer",
  componentId: "glwfg8-0"
})(["overflow:auto;height:100%;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0,0,0,0.4);.post-form-container{background:rgba(255,255,255,0.4);padding:1rem;margin-bottom:2rem;}.visitor-post{height:100%;display:flex;justify-content:center;align-items:center;}.header{position:relative;display:flex;justify-content:space-between;.header-left{display:flex;align-items:center;.left-profile-image{width:24px;height:24px;border-radius:50%;object-fit:cover;margin-right:8px;}.left-fake-image{width:24px;height:24px;border-radius:50%;margin-right:8px;background:rgba(0,0,0,0.5);text-align:center;}.left-nickname{font-weight:bold;}}.header-right{display:flex;align-items:center;position:relative;.right-day{font-size:0.75rem;}.right-buttons{margin-left:8px;font-size:16px;cursor:pointer;:hover{color:rgba(0,0,0,0.4);}}}}.post-body-container{position:relative;background:rgba(255,255,255,0.4);:not(:last-child){margin-bottom:1rem;}.post-body-header{border-bottom:1px solid rgba(0,0,0,0.2);padding:0.5rem;}.post-image{width:100%;object-fit:cover;}.post-text{padding:1rem 0.5rem;white-space:pre;}.post-comment-info{border-top:1px solid rgba(0,0,0,0.2);padding:0.5rem;}.post-comment-container{position:relative;margin:0.5rem 0;padding:0.5rem;background:linear-gradient( 120deg,rgba(69,104,220,0.7),rgba(176,106,179,0.7) );.comment-header{}.comment-text{margin-top:0.5rem;text-align:justify;white-space:pre;}}.post-comment-form-container{text-align:end;}}"]);
;// CONCATENATED MODULE: ./components/CommunityBody/Post/index.tsx










const PostSettingModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 3167).then(__webpack_require__.bind(__webpack_require__, 3167)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3167)],
    modules: ["..\\components\\CommunityBody\\Post\\index.tsx -> " + 'components/Modals/PostSettingModal']
  }
});
const PostEditModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 6864).then(__webpack_require__.bind(__webpack_require__, 6864)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6864)],
    modules: ["..\\components\\CommunityBody\\Post\\index.tsx -> " + 'components/Modals/PostEditModal']
  }
});
const CommentSettingModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 1037).then(__webpack_require__.bind(__webpack_require__, 1037)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1037)],
    modules: ["..\\components\\CommunityBody\\Post\\index.tsx -> " + 'components/Modals/CommentSettingModal']
  }
});
const CommentEditModal = dynamic_default()(() => __webpack_require__.e(/* import() */ 6547).then(__webpack_require__.bind(__webpack_require__, 6547)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6547)],
    modules: ["..\\components\\CommunityBody\\Post\\index.tsx -> " + 'components/Modals/CommentEditModal']
  }
});
const PostForm = dynamic_default()(() => __webpack_require__.e(/* import() */ 4199).then(__webpack_require__.bind(__webpack_require__, 4199)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4199)],
    modules: ["..\\components\\CommunityBody\\Post\\index.tsx -> " + 'components/PostForm']
  }
});
const CommentForm = dynamic_default()(() => __webpack_require__.e(/* import() */ 1469).then(__webpack_require__.bind(__webpack_require__, 1469)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1469)],
    modules: ["..\\components\\CommunityBody\\Post\\index.tsx -> " + 'components/CommentForm']
  }
});

function Post({
  singleCommunity,
  communityUser
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    mainPosts,
    hasMorePost,
    loadPostsLoading,
    updateCommentDone
  } = (0,external_react_redux_.useSelector)(state => state.post);
  const {
    0: editMode,
    1: setEditMode
  } = (0,external_react_.useState)(false);
  const {
    0: showPostSettingButton,
    1: setShowPostSettingButton
  } = (0,external_react_.useState)(false); // 포스트설정 모달 보여주기

  const {
    0: CurrentPostSettingButton,
    1: setCurrentPostSettingButton
  } = (0,external_react_.useState)(0); // 현재 보여지고 있는 포스트설정 모달

  const {
    0: currentModifyPost,
    1: setCurrentModifyPost
  } = (0,external_react_.useState)(0); // 현재 수정중인 포스트

  const {
    0: showCommentSettingButton,
    1: setShowCommentSettingButton
  } = (0,external_react_.useState)(false);
  const {
    0: currentCommentSettingButton,
    1: setCurrentCommentSettingButton
  } = (0,external_react_.useState)(0);
  const {
    0: currentModifyComment,
    1: setCurrentModifyComment
  } = (0,external_react_.useState)(0);
  const {
    0: openPostCommentForm,
    1: setOpenPostCommentForm
  } = (0,external_react_.useState)(false);
  const {
    0: currentPostCommentForm,
    1: setCurrentPostCommentForm
  } = (0,external_react_.useState)(0);
  const postContainerRef = (0,external_react_.useRef)(null);
  const onClickPostSettingButton = (0,external_react_.useCallback)(postId => () => {
    setCurrentPostSettingButton(postId);
    setShowPostSettingButton(true);
  }, []);
  const onClickCommentSettingButton = (0,external_react_.useCallback)(commentId => () => {
    setCurrentCommentSettingButton(commentId);
    setShowCommentSettingButton(true);
  }, []);
  const onTogglePostCommentForm = (0,external_react_.useCallback)(postId => () => {
    setCurrentPostCommentForm(postId);
    setOpenPostCommentForm(prev => !prev);
  }, []);
  const onCloseSettingModal = (0,external_react_.useCallback)(() => {
    if (showPostSettingButton || showCommentSettingButton) {
      setShowPostSettingButton(false);
      setShowCommentSettingButton(false);
    }
  }, [showPostSettingButton, showCommentSettingButton]);
  (0,external_react_.useEffect)(() => {
    if (updateCommentDone) {
      setEditMode(false);
    }
  }, [updateCommentDone]);
  (0,external_react_.useEffect)(() => {
    const postContainer = postContainerRef.current;
    if (!postContainer) return;

    function onScroll(e) {
      if (communityUser && mainPosts.length) {
        if (e.target.scrollTop >= e.target.scrollHeight - e.target.offsetHeight - 300) {
          if (hasMorePost && !loadPostsLoading) {
            const lastId = mainPosts[mainPosts.length - 1].id;
            dispatch((0,actionPost/* loadPostsRequestAction */.th)({
              communityId: singleCommunity.id,
              postId: lastId
            }));
          }
        }
      }
    }

    postContainer.addEventListener('scroll', onScroll);
    return () => postContainer.removeEventListener('scroll', onScroll);
  }, [communityUser, mainPosts, hasMorePost, loadPostsLoading, singleCommunity, postContainerRef.current]);
  return /*#__PURE__*/jsx_runtime_.jsx(PostContainer, {
    onClick: onCloseSettingModal,
    ref: postContainerRef,
    children: communityUser ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "post-form-container",
        children: /*#__PURE__*/jsx_runtime_.jsx(PostForm, {})
      }), mainPosts.length ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: mainPosts.map(post => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "post-body-container",
          children: [editMode && post.id === currentModifyPost && /*#__PURE__*/jsx_runtime_.jsx(PostEditModal, {
            setEditMode: setEditMode,
            setCurrentModifyPost: setCurrentModifyPost,
            currentPostText: post.content,
            postId: post.id,
            communityId: singleCommunity.id
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "header post-body-header",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "header-left",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: post.User.profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                  className: "left-profile-image",
                  src: post.User.profilePhoto,
                  alt: "profile image"
                }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "left-fake-image",
                  children: post.User.nickname[0]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "left-nickname",
                children: post.User.nickname
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "header-right",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "right-day",
                children: external_moment_default()(post.createdAt).locale('ko').format('LLL')
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "right-buttons",
                onClick: onClickPostSettingButton(post.id),
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_.MoreOutlined, {})
              }), showPostSettingButton && post.id === CurrentPostSettingButton && /*#__PURE__*/jsx_runtime_.jsx(PostSettingModal, {
                setCurrentModifyPost: setCurrentModifyPost,
                setEditMode: setEditMode,
                postId: post.id,
                communityId: singleCommunity.id,
                postOwnerId: post.User.id,
                communityUserId: communityUser.id,
                content: post.content
              })]
            })]
          }), post.Images.length ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: post.Images[0].src.replace(/\/resize\//, '/original/'),
            alt: "image",
            className: "post-image"
          }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "post-text",
            children: post.content
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "post-comment-info",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              onClick: onTogglePostCommentForm(post.id),
              style: {
                cursor: 'pointer'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                style: {
                  marginRight: '4px'
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_.MessageOutlined, {})
              }), post.Comments.length ? `댓글 ${post.Comments.length}개 모두보기` : '댓글 작성하기']
            }), openPostCommentForm && currentPostCommentForm === post.id && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [post.Comments && post.Comments.map(comment => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "post-comment-container",
                children: [editMode && comment.id === currentModifyComment && /*#__PURE__*/jsx_runtime_.jsx(CommentEditModal, {
                  setEditMode: setEditMode,
                  setCurrentModifyComment: setCurrentModifyComment,
                  currentCommentText: comment.content,
                  postId: post.id,
                  commentId: comment.id
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "header comment-header",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "header-left",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: comment.User.profilePhoto ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                        className: "left-profile-image",
                        src: comment.User.profilePhoto,
                        alt: "profile image"
                      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: "left-fake-image",
                        children: comment.User.nickname[0]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "left-nickname",
                      children: comment.User.nickname
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "header-right",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "right-day",
                      children: external_moment_default()(comment.createdAt).locale('ko').format('LLL')
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "right-buttons",
                      onClick: onClickCommentSettingButton(comment.id),
                      children: /*#__PURE__*/jsx_runtime_.jsx(icons_.MoreOutlined, {})
                    })]
                  }), showCommentSettingButton && comment.id === currentCommentSettingButton && /*#__PURE__*/jsx_runtime_.jsx(CommentSettingModal, {
                    setCurrentModifyComment: setCurrentModifyComment,
                    setEditMode: setEditMode,
                    postId: post.id,
                    commentId: comment.id,
                    commentOwnerId: comment.User.id,
                    communityUserId: communityUser.id,
                    content: comment.content
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "comment-text",
                  children: comment.content
                })]
              }, comment.id)), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "post-comment-form-container",
                children: /*#__PURE__*/jsx_runtime_.jsx(CommentForm, {
                  postId: post.id
                })
              })]
            })]
          })]
        }, post.id))
      }) : null]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "visitor-post",
      children: "\uCEE4\uBBA4\uB2C8\uD2F0\uC720\uC800\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4"
    })
  });
}

/* harmony default export */ var CommunityBody_Post = (/*#__PURE__*/(0,external_react_.memo)(Post));

/***/ })

};
;