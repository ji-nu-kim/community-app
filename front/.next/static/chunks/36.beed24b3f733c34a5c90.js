(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"2BaD":function(e,t,i){"use strict";var a=i("q1tI"),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"},n=i("6VBw"),o=function(e,t){return a.createElement(n.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="CloseCircleOutlined";t.a=a.forwardRef(o)},GHRU:function(e,t,i){"use strict";i.r(t);var a=i("nKUr"),r=i("q1tI"),n=i("vOnD"),o=i("oZZd"),s=n.b.div.withConfig({displayName:"styles__ModalExternal",componentId:"sc-1xyicst-0"})(["position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;"]),c=n.b.div.withConfig({displayName:"styles__ModalContainer",componentId:"sc-1xyicst-1"})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;width:600px;height:500px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);display:grid;grid-template-rows:44px auto;label{color:#e4e4e4;}"]),l=n.b.header.withConfig({displayName:"styles__ModalHeader",componentId:"sc-1xyicst-2"})(["display:flex;color:#e4e4e4;font-weight:bold;align-items:center;justify-content:space-between;background:rgba(0,0,0,0.1);border-bottom:1px solid rgba(255,255,255,0.1);.modal-title{margin-left:1rem;}.close-btn{margin-right:1rem;cursor:pointer;:hover{color:coral;animation:"," 0.5s linear infinite;}}"],o.a),d=n.b.div.withConfig({displayName:"styles__ModalBody",componentId:"sc-1xyicst-3"})(["padding:1rem;display:flex;flex-wrap:wrap;align-content:flex-start;overflow:auto;.user-container{display:flex;flex-direction:column;align-items:center;border:2px solid rgba(255,255,255,0.3);border-radius:10px;padding:0.5rem;margin-bottom:1rem;margin-right:1rem;:hover{border:2px solid #039be5;background:rgba(0,0,0,0.1);}.user-name{padding:0.25rem;display:flex;align-items:center;img{border-radius:50%;object-fit:cover;}.fake-image{width:24px;height:24px;background:rgba(255,255,255,0.5);border-radius:50%;display:flex;justify-content:center;align-items:center;color:#fff;}.user-nickname{margin-left:4px;font-weight:bold;color:#b3b3b3;}}.user-country{padding:0.25rem;color:#039be5;font-size:0.75rem;}}"]),m=i("2BaD");t.default=function(e){var t=e.setShowCommunityUserModal,i=e.singleCommunity,n=Object(r.useCallback)((function(){t(!1)}),[t]);return Object(a.jsx)(s,{onClick:n,children:Object(a.jsxs)(c,{onClick:function(e){return e.stopPropagation()},children:[Object(a.jsxs)(l,{children:[Object(a.jsx)("div",{className:"modal-title",children:"\ucee4\ubba4\ub2c8\ud2f0 \ud68c\uc6d0"}),Object(a.jsx)("div",{className:"close-btn",onClick:n,children:Object(a.jsx)(m.a,{})})]}),Object(a.jsx)(d,{children:i.Users.map((function(e){return Object(a.jsxs)("div",{className:"user-container",children:[Object(a.jsxs)("div",{className:"user-name",children:[e.profilePhoto?Object(a.jsx)("img",{width:"24px",height:"24px",src:"".concat("http://localhost:3065","/").concat(e.profilePhoto),alt:"user-image"}):Object(a.jsx)("div",{className:"fake-image",children:e.nickname[0]}),Object(a.jsx)("div",{className:"user-nickname",children:e.nickname})]}),Object(a.jsx)("div",{className:"user-country",children:e.country})]},e.nickname)}))})]})})}}}]);