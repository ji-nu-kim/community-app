_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20,38],{"+wdE":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n("btdU")}])},"1ObW":function(e,t,n){"use strict";n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return o}));var r=n("nKUr"),c=(n("q1tI"),n("vOnD")),i=c.b.div.withConfig({displayName:"ProfileLayout__ProfileContainer",componentId:"sc-1u88ywv-0"})(["display:grid;grid-template-rows:200px auto;width:100%;height:100%;"]),E=c.b.div.withConfig({displayName:"ProfileLayout__ProfileHeader",componentId:"sc-1u88ywv-1"})(["padding:1rem;background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3));display:grid;grid-template-columns:auto 76px;.header-left{display:flex;align-items:center;.header-image{width:150px;height:150px;background:rgba(0,0,0,0.1);border-radius:50%;display:flex;justify-content:center;align-items:center;img{border-radius:50%;object-fit:cover;}.header-icon{color:#cacaca;font-size:3rem;}}.header-text{margin-left:1rem;height:100%;display:flex;flex-direction:column;justify-content:center;p{font-size:0.75rem;color:#039be5;font-weight:bold;}h1{color:#fff;font-weight:bold;font-size:2rem;}.text-country{cursor:pointer;color:#cdcedf;font-size:0.8rem;font-weight:bold;:hover{color:#039be5;}}}}.header-right{button{border:none;color:#fff;background:#039be5;height:28px;font-size:0.75rem;:hover{cursor:pointer;background:#007bb8;}}}"]),o=c.b.div.withConfig({displayName:"ProfileLayout__ProfileContent",componentId:"sc-1u88ywv-2"})(["display:grid;grid-template-rows:auto;padding:1rem;gap:1rem;h1{font-family:'Black Han Sans',sans-serif;font-size:2rem;color:hotpink;margin-bottom:1rem;}.cards-container{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,minmax(250px,auto));}"]);t.c=function(e){var t=e.children;return Object(r.jsx)(i,{children:t})}},Lwpp:function(e,t,n){"use strict";n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return E})),n.d(t,"j",(function(){return o})),n.d(t,"i",(function(){return a})),n.d(t,"d",(function(){return _})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return l}));var r=n("ov2J"),c=function(e){return{type:r.a.LOG_IN_REQUEST,data:e}},i=function(){return{type:r.a.LOG_OUT_REQUEST}},E=function(){return{type:r.a.REMOVE_IMAGE}},o=function(e){return{type:r.a.UPLOAD_IMAGE_REQUEST,data:e}},a=function(e){return{type:r.a.SIGN_UP_REQUEST,data:e}},_=function(e){return{type:r.a.LEAVE_REQUEST,data:e}},O=function(e){return{type:r.a.CHANGE_PROFILE_REQUEST,data:e}},d=function(e){return{type:r.a.CHANGE_COUNTRY_REQUEST,data:e}},u=function(){return{type:r.a.CHECK_NOTIFICATION_REQUEST}},l=function(e){return{type:r.a.REMOVE_NOTIFICATION_REQUEST,data:e}}},btdU:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"__N_SSP",(function(){return b}));var r=n("nKUr"),c=n("awaa"),i=n("YFqc"),E=n.n(i),o=n("g4pe"),a=n.n(o),_=n("20a2"),O=n.n(_),d=n("Vvt1"),u=n.n(d),l=n("q1tI"),s=n("/MKj"),R=n("Lwpp"),f=n("cJ7L"),C=n("1ObW"),S=n("X3JM"),h=u()((function(){return Promise.all([n.e(5),n.e(28)]).then(n.bind(null,"hRAx"))}),{loadableGenerated:{webpack:function(){return["hRAx"]},modules:["components/Modals/UserProfileModifyModal"]}}),N=u()((function(){return Promise.all([n.e(1),n.e(25)]).then(n.bind(null,"yNRX"))}),{loadableGenerated:{webpack:function(){return["yNRX"]},modules:["components/Modals/SearchAddressModal"]}});function I(){var t,n,i=Object(s.b)(),o=Object(s.c)((function(e){return e.user})),_=o.me,d=o.changeProfileDone,u=Object(l.useState)(!1),I=u[0],b=u[1],U=Object(l.useState)(!1),T=U[0],j=U[1],m=Object(l.useState)(""),p=m[0],M=m[1],A=Object(l.useCallback)((function(){j(!0)}),[]),g=Object(l.useCallback)((function(){j(!1),M("")}),[]),L=Object(l.useCallback)((function(){b((function(e){return!e}))}),[]);return Object(l.useEffect)((function(){d&&b(!1)}),[d]),Object(l.useEffect)((function(){""!==p&&(confirm("\uc8fc\uc18c\ub97c ".concat(p,"\ub85c \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?"))?i(Object(R.a)({country:p})):alert("\ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4"))}),[p]),Object(l.useEffect)((function(){_||O.a.push("/")}),[_]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.a,{children:Object(r.jsx)("title",{children:"\ud504\ub85c\ud544 - community"})}),Object(r.jsxs)(c.default,{children:[Object(r.jsxs)(C.c,{children:[Object(r.jsxs)(C.b,{children:[Object(r.jsxs)("div",{className:"header-left",children:[Object(r.jsx)("div",{className:"header-image",children:null!==_&&void 0!==_&&_.profilePhoto?Object(r.jsx)("img",{src:null===_||void 0===_?void 0:_.profilePhoto,width:"150",height:"150",alt:"profile-image"}):Object(r.jsx)(f.a,{className:"header-icon"})}),Object(r.jsxs)("div",{className:"header-text",children:[Object(r.jsx)("p",{children:"\ud504\ub85c\ud544"}),Object(r.jsx)("h1",{children:null===_||void 0===_?void 0:_.nickname}),Object(r.jsx)("p",{className:"text-country",onClick:A,children:null===_||void 0===_?void 0:_.country})]})]}),Object(r.jsx)("div",{className:"header-right",children:Object(r.jsx)("button",{onClick:L,children:"\uc218\uc815\ud558\uae30"})})]}),Object(r.jsxs)(C.a,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\ub098\uc758 \uce74\ud14c\uace0\ub9ac \ub9ac\uc2a4\ud2b8"}),Object(r.jsx)("div",{className:"cards-container",children:null===_||void 0===_||null===(t=_.Categories)||void 0===t?void 0:t.map((function(t){return Object(r.jsx)("div",{children:Object(r.jsx)(E.a,{href:"/category/".concat(t.id),prefetch:!1,children:Object(r.jsx)("a",{children:Object(r.jsx)(S.a,{name:t.name,img:"".concat(e.env.NEXT_PUBLIC_BACK_URL_KEY,"/").concat(t.profilePhoto),width:"240",height:"220"})})})},t.name)}))})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\ub098\uc758 \ucee4\ubba4\ub2c8\ud2f0 \ub9ac\uc2a4\ud2b8"}),Object(r.jsx)("div",{className:"cards-container",children:null===_||void 0===_||null===(n=_.Communities)||void 0===n?void 0:n.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(E.a,{href:"/community/".concat(e.id),prefetch:!1,children:Object(r.jsx)("a",{children:Object(r.jsx)(S.a,{name:e.communityName,img:e.profilePhoto?e.profilePhoto:null,width:"240",height:"220"})})})},e.communityName)}))})]})]})]}),I&&Object(r.jsx)(h,{setUserProfileModifyModal:b}),T&&Object(r.jsx)(N,{closeSearchAddressModal:g,setCountry:M,type:"village"})]})]})}var b=!0;t.default=Object(l.memo)(I)}.call(this,n("8oxB"))},cJ7L:function(e,t,n){"use strict";var r=n("q1tI"),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"},i=n("6VBw"),E=function(e,t){return r.createElement(i.a,Object.assign({},e,{ref:t,icon:c}))};E.displayName="UserOutlined";t.a=r.forwardRef(E)},ov2J:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={LOG_IN_REQUEST:"LOG_IN_REQUEST",LOG_IN_SUCCESS:"LOG_IN_SUCCESS",LOG_IN_ERROR:"LOG_IN_ERROR",LOG_OUT_REQUEST:"LOG_OUT_REQUEST",LOG_OUT_SUCCESS:"LOG_OUT_SUCCESS",LOG_OUT_ERROR:"LOG_OUT_ERROR",LOAD_MY_INFO_REQUEST:"LOAD_MY_INFO_REQUEST",LOAD_MY_INFO_SUCCESS:"LOAD_MY_INFO_SUCCESS",LOAD_MY_INFO_ERROR:"LOAD_MY_INFO_ERROR",UPLOAD_IMAGE_REQUEST:"UPLOAD_IMAGE_REQUEST",UPLOAD_IMAGE_SUCCESS:"UPLOAD_IMAGE_SUCCESS",UPLOAD_IMAGE_ERROR:"UPLOAD_IMAGE_ERROR",REMOVE_IMAGE:"REMOVE_IMAGE",SIGN_UP_REQUEST:"SIGN_UP_REQUEST",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_ERROR:"SIGN_UP_ERROR",LEAVE_REQUEST:"LEAVE_REQUEST",LEAVE_SUCCESS:"LEAVE_SUCCESS",LEAVE_ERROR:"LEAVE_ERROR",CHANGE_PROFILE_REQUEST:"CHANGE_PROFILE_REQUEST",CHANGE_PROFILE_SUCCESS:"CHANGE_PROFILE_SUCCESS",CHANGE_PROFILE_ERROR:"CHANGE_PROFILE_ERROR",CHANGE_COUNTRY_REQUEST:"CHANGE_COUNTRY_REQUEST",CHANGE_COUNTRY_SUCCESS:"CHANGE_COUNTRY_SUCCESS",CHANGE_COUNTRY_ERROR:"CHANGE_COUNTRY_ERROR",CHECK_NOTIFICATION_REQUEST:"CHECK_NOTIFICATION_REQUEST",CHECK_NOTIFICATION_SUCCESS:"CHECK_NOTIFICATION_SUCCESS",CHECK_NOTIFICATION_ERROR:"CHECK_NOTIFICATION_ERROR",REMOVE_NOTIFICATION_REQUEST:"REMOVE_NOTIFICATION_REQUEST",REMOVE_NOTIFICATION_SUCCESS:"REMOVE_NOTIFICATION_SUCCESS",REMOVE_NOTIFICATION_ERROR:"REMOVE_NOTIFICATION_ERROR",ADD_MEET_OF_ME:"ADD_MEET_OF_ME",REMOVE_MEET_OF_ME:"REMOVE_MEET_OF_ME",MODIFY_MEET_OF_ME:"MODIFY_MEET_OF_ME",JOIN_MEET_OF_ME:"JOIN_MEET_OF_ME",LEAVE_MEET_OF_ME:"LEAVE_MEET_OF_ME",LEAVE_COMMUNITY_OF_ME:"LEAVE_COMMUNITY_OF_ME",CHANGE_COMMUNITY_OF_ME:"CHANGE_COMMUNITY_OF_ME"}}},[["+wdE",2,3,0,4,6,8]]]);