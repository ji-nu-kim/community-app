(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"/i6i":function(t,e,n){"use strict";n.r(e);var o=n("nKUr"),r=n("7pp9"),i=n("q1tI"),c=n("/MKj"),a=n("vOnD").b.div.withConfig({displayName:"styles__ModalContainer",componentId:"nf56ya-0"})(["position:absolute;z-index:2000;top:0;right:-5px;width:60px;background:rgba(0,0,0,0.7);box-shadow:0 4px 8px rgba(0,0,0,0.6);backdrop-filter:saturate(180%) blur(12px);-webkit-backdrop-filter:saturate(180%) blur(12px);cursor:pointer;ul{height:inherit;list-style:none;padding:0;display:grid;grid-template-rows:auto;margin-bottom:0;li{height:30px;font-size:0.5rem;position:relative;color:#fff;display:flex;align-items:center;justify-content:center;border-bottom:1px solid rgba(255,255,255,0.15);:last-child{border-bottom:none;}:hover{background:rgba(0,0,0,0.3);}}}"]);function d(t){var e=t.setCurrentModifyComment,n=t.setEditMode,d=t.postId,l=t.commentId,s=t.commentOwnerId,b=t.communityUserId,p=t.content,u=Object(c.b)(),m=s===b,j=Object(i.useCallback)((function(){e(l),n((function(t){return!t}))}),[l]),f=Object(i.useCallback)((function(){if(confirm("\ub313\uae00\uc744 \uc9c0\uc6b0\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))return u(Object(r.d)({postId:d,commentId:l}))}),[d,l]),h=Object(i.useCallback)((function(){var t=prompt("\uc2e0\uace0\ud558\ub294 \uc774\uc720\ub97c \uc801\uc5b4\uc8fc\uc138\uc694");t&&b&&u(Object(r.g)({contentId:l,reporter:b,reportedPerson:s,reason:t,variety:"comment",content:p}))}),[s,b,l,p]);return Object(o.jsx)(a,{children:Object(o.jsx)("ul",{children:m?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("li",{onClick:j,children:"\uc218\uc815"}),Object(o.jsx)("li",{onClick:f,children:"\uc0ad\uc81c"})]}):Object(o.jsx)("li",{onClick:h,children:"\uc2e0\uace0\ud558\uae30"})})})}e.default=Object(i.memo)(d)}}]);