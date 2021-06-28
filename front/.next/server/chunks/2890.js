exports.id = 2890;
exports.ids = [2890];
exports.modules = {

/***/ 2890:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CommunityBody_Meet; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(2372);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/CommunityBody/Meet/styles.tsx

const MeetContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__MeetContainer",
  componentId: "sc-1ti3ajz-0"
})(["position:relative;height:100%;backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);background:rgba(0,0,0,0.4);display:grid;grid-template-rows:auto 55px;.visitor-post{height:100%;display:flex;justify-content:center;align-items:center;}.joined-meet,.new-meet{display:grid;grid-template-rows:44px auto;.meet-members,.meet-place{cursor:pointer;:hover{color:#039be5;}}.meet-name{margin-left:1rem;align-self:center;font-weight:bold;font-size:1rem;}}"]);
const CardContainer = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__CardContainer",
  componentId: "sc-1ti3ajz-1"
})(["padding:1rem;position:relative;width:100%;height:300px;display:grid;grid-template-columns:1fr 1fr;.card-left{display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:10;filter:", ";background:", ";text-align:center;.card-header{font-size:1.5rem;font-weight:bold;margin-bottom:2rem;}.card-body{font-size:0.75rem;div{margin-bottom:0.5rem;}.meet-button{button{cursor:pointer;border:none;background:#039be5;height:30px;:hover{background:#0282c2;}}.owner-buttons{button:first-child{margin-right:1rem;}}}}}.card-right{background:rgba(255,255,255,0.4);z-index:5;.show-members{width:100%;height:100%;display:grid;grid-template-rows:30% 70%;align-items:center;justify-items:center;font-weight:bold;font-size:1rem;.member-container{width:100%;height:100%;padding:1rem;p{margin-right:1rem;display:inline;}}}}"], props => `hue-rotate(${props.number * 60}deg)`, props => `linear-gradient(
      ${props.number * 60}deg,
      rgba(255, 252, 0, 0.85) 0%,
      rgba(252, 0, 255, 0.85) 45%,
      rgba(0, 255, 252, 0.85) 100%
    )`);
const MakeMeetButton = /*#__PURE__*/external_styled_components_default().div.withConfig({
  displayName: "styles__MakeMeetButton",
  componentId: "sc-1ti3ajz-2"
})(["margin-right:1rem;align-self:center;justify-self:end;cursor:pointer;width:30px;height:30px;border-radius:50%;border:2px solid hotpink;color:hotpink;display:flex;justify-content:center;align-items:center;z-index:100;:hover{filter:hue-rotate(180deg);}"]);
// EXTERNAL MODULE: ./actions/actionCommunity.ts
var actionCommunity = __webpack_require__(247);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: ./components/CommunityBody/Meet/index.tsx









const ModifyMeetModal = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(8285), __webpack_require__.e(9121), __webpack_require__.e(5721)]).then(__webpack_require__.bind(__webpack_require__, 5721)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5721)],
    modules: ["..\\components\\CommunityBody\\Meet\\index.tsx -> " + 'components/Modals/ModifyMeetModal']
  }
});
const CreateMeetModal = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(8285), __webpack_require__.e(9121), __webpack_require__.e(5419)]).then(__webpack_require__.bind(__webpack_require__, 5419)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5419)],
    modules: ["..\\components\\CommunityBody\\Meet\\index.tsx -> " + 'components/Modals/CreateMeetModal']
  }
});
const Map = dynamic_default()(() => __webpack_require__.e(/* import() */ 8093).then(__webpack_require__.bind(__webpack_require__, 8093)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8093)],
    modules: ["..\\components\\CommunityBody\\Meet\\index.tsx -> " + 'components/Map']
  }
});

function Meet({
  singleCommunity,
  communityUser,
  me
}) {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    addMeetDone,
    joinMeetDone,
    joinMeetError
  } = (0,external_react_redux_.useSelector)(state => state.community);
  const {
    0: showCreateMeetModal,
    1: setShowCreateMeetModal
  } = (0,external_react_.useState)(false);
  const {
    0: showModifyMeetModal,
    1: setShowModifyMeetModal
  } = (0,external_react_.useState)(false);
  const {
    0: currentMeet,
    1: setCurrentMeet
  } = (0,external_react_.useState)([]);
  const {
    0: currentModifyMeet,
    1: setCurrentModifyMeet
  } = (0,external_react_.useState)(-9999);
  const joinedMeetIndex = me === null || me === void 0 ? void 0 : me.Meets.map(meet => meet.id);
  const joinedMeetList = singleCommunity.Meets.filter(meet => joinedMeetIndex === null || joinedMeetIndex === void 0 ? void 0 : joinedMeetIndex.includes(meet.id));
  const notJoinedMeetList = singleCommunity.Meets.filter(meet => !(joinedMeetIndex !== null && joinedMeetIndex !== void 0 && joinedMeetIndex.includes(meet.id)));
  const onClickPlace = (0,external_react_.useCallback)(meetId => () => {
    if (currentMeet.includes(meetId)) {
      return;
    }

    setCurrentMeet([...currentMeet, meetId]);
  }, [currentMeet]);
  const onClickMember = (0,external_react_.useCallback)(meetId => () => {
    setCurrentMeet([...currentMeet].filter(current => current !== meetId));
  }, [currentMeet]);
  const onClickCreateMeetButton = (0,external_react_.useCallback)(() => {
    setShowCreateMeetModal(true);
  }, []);
  const onClickDeleteMeetButton = (0,external_react_.useCallback)(meetId => () => {
    if (confirm('모임을 삭제하시겠습니까?')) {
      return dispatch((0,actionCommunity/* removeMeetRequestAction */.$0)({
        meetId,
        communityId: singleCommunity.id
      }));
    }
  }, [singleCommunity]);
  const onClickJoinMeetButton = (0,external_react_.useCallback)((meetId, currentMembers, totalMembers) => () => {
    if (currentMembers >= totalMembers) {
      return alert('인원 수가 초과되었습니다');
    }

    if (confirm('모임에 참가하시겠습니까?')) {
      return dispatch((0,actionCommunity/* joinMeetRequestAction */.rv)({
        meetId,
        communityId: singleCommunity.id
      }));
    }
  }, [singleCommunity]);
  const onClickLeaveMeetButton = (0,external_react_.useCallback)(meetId => () => {
    if (confirm('모임을 탈퇴하시겠습니까?')) {
      return dispatch((0,actionCommunity/* leaveMeetRequestAction */.lg)({
        communityId: singleCommunity.id,
        meetId
      }));
    }
  }, [singleCommunity]);
  const onClickModifyMeetButton = (0,external_react_.useCallback)(meetId => () => {
    setCurrentModifyMeet(meetId);
    setShowModifyMeetModal(true);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (addMeetDone) {
      setShowCreateMeetModal(false);
    }
  }, [addMeetDone]);
  (0,external_react_.useEffect)(() => {
    if (joinMeetDone) {
      setShowModifyMeetModal(false);
    }
  }, [joinMeetDone]);
  (0,external_react_.useEffect)(() => {
    if (joinMeetError) {
      alert(joinMeetError);
    }
  }, [joinMeetError]);
  return /*#__PURE__*/jsx_runtime_.jsx(MeetContainer, {
    children: communityUser ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          overflow: 'auto'
        },
        children: [joinedMeetList.length ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "joined-meet",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "meet-name",
            children: "\uCC38\uAC00\uD55C \uBAA8\uC784"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "meet-card-grid",
            children: joinedMeetList.map((meet, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContainer, {
                number: i,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "card-left",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "card-header",
                    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "meet-title",
                      children: meet.title
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "meet-date",
                      children: [meet.date, "\uC2DC"]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "meet-fee",
                      children: ["\uCC38\uAC00\uBE44: ", meet.fee, "\uC6D0"]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "meet-members",
                      onClick: onClickMember(meet.id),
                      children: ["\uC778\uC6D0: ", meet.Users.length, " / ", meet.members, "\uBA85"]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "meet-place",
                      onClick: onClickPlace(meet.id),
                      children: ["\uC7A5\uC18C: ", meet.place]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "meet-owner",
                      children: ["\uBAA8\uC784\uB9AC\uB354:", ' ', meet.Users.map(user => user.id === meet.MeetOwnerId && user.nickname)]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "meet-button",
                      children: meet.MeetOwnerId === (me === null || me === void 0 ? void 0 : me.id) ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "owner-buttons",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                          onClick: onClickModifyMeetButton(meet.id),
                          children: "\uC218\uC815"
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          onClick: onClickDeleteMeetButton(meet.id),
                          children: "\uC0AD\uC81C"
                        })]
                      }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
                        onClick: onClickLeaveMeetButton(meet.id),
                        children: "\uD0C8\uD1F4"
                      })
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "card-right",
                  children: currentMeet.includes(meet.id) ? /*#__PURE__*/jsx_runtime_.jsx(Map, {
                    address: meet.place,
                    number: meet.id
                  }, meet.id) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "show-members",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: "\uCC38\uAC00\uBA64\uBC84"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "member-container",
                      children: meet.Users.map(user => /*#__PURE__*/jsx_runtime_.jsx("p", {
                        children: user.nickname
                      }, user.id))
                    })]
                  })
                })]
              })
            }, meet.id))
          })]
        }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "new-meet",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "meet-name",
            children: "\uC0C8\uB85C\uC6B4 \uBAA8\uC784"
          }), notJoinedMeetList.length ? notJoinedMeetList.map((meet, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardContainer, {
              number: i,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "card-left",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "card-header",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "meet-title",
                    children: meet.title
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "meet-date",
                    children: [meet.date, "\uC2DC"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "meet-fee",
                    children: ["\uCC38\uAC00\uBE44: ", meet.fee, "\uC6D0"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "meet-members",
                    onClick: onClickMember(meet.id),
                    children: ["\uC778\uC6D0: ", meet.Users.length, " / ", meet.members, "\uBA85"]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "meet-place",
                    onClick: onClickPlace(meet.id),
                    children: ["\uC7A5\uC18C: ", meet.place]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "meet-owner",
                    children: ["\uBAA8\uC784\uB9AC\uB354:", ' ', meet.Users.map(user => user.id === meet.MeetOwnerId && user.nickname)]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "meet-button",
                    children: meet.Users.length < meet.members ? /*#__PURE__*/jsx_runtime_.jsx("button", {
                      onClick: onClickJoinMeetButton(meet.id, meet.Users.length, meet.members),
                      children: "\uCC38\uAC00\uD558\uAE30"
                    }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
                      children: "\uC778\uC6D0\uC81C\uD55C"
                    })
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "card-right",
                children: currentMeet.includes(meet.id) ? /*#__PURE__*/jsx_runtime_.jsx(Map, {
                  address: meet.place,
                  number: meet.id
                }, meet.id) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "show-members",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    children: "\uCC38\uAC00\uBA64\uBC84"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "member-container",
                    children: meet.Users.map(user => /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: user.nickname
                    }, user.id))
                  })]
                })
              })]
            })
          }, meet.id)) : null]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(MakeMeetButton, {
        onClick: onClickCreateMeetButton,
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {})
      }), showCreateMeetModal && /*#__PURE__*/jsx_runtime_.jsx(CreateMeetModal, {
        setShowCreateMeetModal: setShowCreateMeetModal,
        communityId: singleCommunity.id
      }), showModifyMeetModal && /*#__PURE__*/jsx_runtime_.jsx(ModifyMeetModal, {
        setShowModifyMeetModal: setShowModifyMeetModal,
        communityId: singleCommunity.id,
        meetInfo: joinedMeetList.find(meet => meet.id === currentModifyMeet)
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "visitor-post",
      children: "\uCEE4\uBBA4\uB2C8\uD2F0 \uC720\uC800\uB9CC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4"
    })
  });
}

/* harmony default export */ var CommunityBody_Meet = (/*#__PURE__*/(0,external_react_.memo)(Meet));

/***/ })

};
;