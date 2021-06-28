(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1662],{5902:function(t,e,n){"use strict";n.d(e,{tP:function(){return r},pt:function(){return u},CM:function(){return a},CS:function(){return c},JE:function(){return o},WZ:function(){return l},eI:function(){return f},S3:function(){return s},K4:function(){return p},_9:function(){return m}});var i=n(2245),r=function(t){return{type:i.u.LOG_IN_REQUEST,data:t}},u=function(){return{type:i.u.LOG_OUT_REQUEST}},a=function(){return{type:i.u.REMOVE_IMAGE}},c=function(t){return{type:i.u.UPLOAD_IMAGE_REQUEST,data:t}},o=function(t){return{type:i.u.SIGN_UP_REQUEST,data:t}},l=function(t){return{type:i.u.LEAVE_REQUEST,data:t}},f=function(t){return{type:i.u.CHANGE_PROFILE_REQUEST,data:t}},s=function(t){return{type:i.u.CHANGE_COUNTRY_REQUEST,data:t}},p=function(){return{type:i.u.CHECK_NOTIFICATION_REQUEST}},m=function(t){return{type:i.u.REMOVE_NOTIFICATION_REQUEST,data:t}}},5789:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return h}});var i=n(5893),r=n(7294),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 248H728l-32.4-90.8a32.07 32.07 0 00-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80zm8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8 22.9-64.2h250.5l22.9 64.2 17.1 47.8H864c4.4 0 8 3.6 8 8v456zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160 160-71.6 160-160-71.6-160-160-160zm0 256c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z"}}]},name:"camera",theme:"outlined"},a=n(9408),c=function(t,e){return r.createElement(a.Z,Object.assign({},t,{ref:e,icon:u}))};c.displayName="CameraOutlined";var o=r.forwardRef(c),l=n(4751),f=n(5902),s=n(9163).ZP.div.withConfig({displayName:"styles__ProfileImgContainer",componentId:"sc-1cujmv9-0"})(["position:relative;img{position:absolute;z-index:-1;top:-1px;left:-1px;border-radius:50%;object-fit:cover;}.img-input-btn{margin:0.5rem 0;position:relative;width:100px;height:100px;background:rgba(0,0,0,0.1);.img-input-icon{color:#cacaca;font-size:2rem;}}.img-delete-btn{position:absolute;top:-1px;left:-1px;width:100px;height:100px;border-radius:50%;background:rgba(0,0,0,0.5);color:#fff;display:flex;justify-content:center;align-items:center;transition:opacity 0.3s linear;opacity:0;:hover{opacity:1;transition:opacity 0.3s linear;}}"]),p=n(8222),m=n(1163),d=n(247);function g(t){var e=t.imagePath,n=t.profilePhoto,u=(0,m.useRouter)(),a=(0,l.I0)(),c=(0,r.useRef)(null),g=(0,l.v9)((function(t){return t.user})).uploadImageDone,h=(0,l.v9)((function(t){return t.community})).uploadCommunityImageDone,E=(0,r.useCallback)((function(){var t,e=u.route.split("/")[1];if("profile"!==e||g){if("community"===e&&!h){var n;null===(n=c.current)||void 0===n||n.click()}}else null===(t=c.current)||void 0===t||t.click()}),[c.current,g,h]),v=(0,r.useCallback)((function(t){var e;if(null!==(e=t.target.files)&&void 0!==e&&e.length){var n=u.route.split("/")[1],i=new FormData;if([].forEach.call(t.target.files,(function(t){i.append("image",t)})),"profile"===n)return a((0,f.CS)(i));if("community"===n)return a((0,d.Rc)(i))}}),[]),y=(0,r.useCallback)((function(){var t=u.route.split("/")[1];if(e.length){if("profile"===t)return a((0,f.CM)());if("community"===t)return a((0,d.u9)())}}),[e]);return(0,i.jsx)(s,{children:(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"file",name:"image",hidden:!0,ref:c,onChange:v}),(0,i.jsx)(p.Z,{onClick:E,shape:"circle",className:"img-input-btn",children:e.length?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{width:"100",height:"100",src:e[0].replace(/\/resize\//,"/original/"),alt:"profileimage"}),(0,i.jsx)("div",{onClick:y,className:"img-delete-btn",children:"\uc9c0\uc6b0\uae30"})]}):n?(0,i.jsx)("img",{width:"100",height:"100",src:n,alt:"profileimage"}):(0,i.jsx)(o,{className:"img-input-icon"})})]})})}var h=(0,r.memo)(g)}}]);