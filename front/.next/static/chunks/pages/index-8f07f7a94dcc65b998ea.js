(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{247:function(e,t,n){"use strict";n.d(t,{u9:function(){return o},Rc:function(){return u},mK:function(){return i},AS:function(){return a},s:function(){return c},rE:function(){return l},PQ:function(){return s},uR:function(){return f},oe:function(){return d},X0:function(){return p},pc:function(){return y},tk:function(){return m},$0:function(){return h},QW:function(){return v},rv:function(){return _},lg:function(){return b}});var r=n(8420),o=function(){return{type:r.I.REMOVE_COMMUNITY_IMAGE}},u=function(e){return{type:r.I.UPLOAD_COMMUNITY_IMAGE_REQUEST,data:e}},i=function(e){return{type:r.I.CHANGE_COMMUNITY_INFO_REQUEST,data:e}},a=function(e){return{type:r.I.ADD_COMMUNITY_REQUEST,data:e}},c=function(e){return{type:r.I.REMOVE_COMMUNITY_REQUEST,data:e}},l=function(e){return{type:r.I.JOIN_COMMUNITY_REQUEST,data:e}},s=function(e){return{type:r.I.ACCEPT_COMMUNITY_REQUEST,data:e}},f=function(e){return{type:r.I.REFUSE_COMMUNITY_REQUEST,data:e}},d=function(e){return{type:r.I.LEAVE_COMMUNITY_REQUEST,data:e}},p=function(e){return{type:r.I.LOAD_COUNTRY_COMMUNITIES_REQUEST,data:e}},y=function(e){return{type:r.I.LOAD_CATEGORY_COMMUNITIES_REQUEST,data:e}},m=function(e){return{type:r.I.ADD_MEET_REQUEST,data:e}},h=function(e){return{type:r.I.REMOVE_MEET_REQUEST,data:e}},v=function(e){return{type:r.I.MODIFY_MEET_REQUEST,data:e}},_=function(e){return{type:r.I.JOIN_MEET_REQUEST,data:e}},b=function(e){return{type:r.I.LEAVE_MEET_REQUEST,data:e}}},2167:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var u=o(n(7294)),i=n(9414),a=n(4651),c=n(7426),l={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,a.useRouter)(),f=u.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),u=n[0],a=n[1];return{href:u,as:e.as?(0,i.resolveHref)(o,e.as):a||u}}),[o,e.href,e.as]),d=f.href,p=f.as,y=e.children,m=e.replace,h=e.shallow,v=e.scroll,_=e.locale;"string"===typeof y&&(y=u.default.createElement("a",null,y));var b=(t=u.Children.only(y))&&"object"===typeof t&&t.ref,E=(0,c.useIntersection)({rootMargin:"200px"}),O=r(E,2),g=O[0],M=O[1],w=u.default.useCallback((function(e){g(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,g]);(0,u.useEffect)((function(){var e=M&&n&&(0,i.isLocalURL)(d),t="undefined"!==typeof _?_:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,M,_,n,o]);var I={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:a}))}(e,o,d,p,m,h,v,_)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof _?_:o&&o.locale,j=o&&o.isLocaleDomain&&(0,i.getDomainLocale)(p,T,o&&o.locales,o&&o.domainLocales);I.href=j||(0,i.addBasePath)((0,i.addLocale)(p,T,o&&o.defaultLocale))}return u.default.cloneElement(t,I)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,i=r.elements;return i.set(e,t),u.observe(e),function(){i.delete(e),u.unobserve(e),0===i.size&&(u.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,u.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,u.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),u=n(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},7999:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u(u({},r),e));(r=u(u({},r),t)).loadableGenerated&&delete(r=u(u({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,c(n,r);delete r.ssr}return n(r)};a(n(7294));var i=a(n(7653));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return delete t.webpack,delete t.modules,e(t)}},519:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},7653:function(e,t,n){"use strict";var r=n(9713),o=n(4575),u=n(3913);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,u=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw u}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,f=(s=n(7294))&&s.__esModule?s:{default:s},d=n(7161),p=n(519);var y=[],m=[],h=!1;function v(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var _=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return function(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new _(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var u=n.webpack();m.push((function(e){var t,n=c(u);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(i){n.e(i)}finally{n.f()}}))}var i=function(e,t){o();var u=f.default.useContext(p.LoadableContext),i=(0,d.useSubscription)(r);return f.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),u&&Array.isArray(n.modules)&&n.modules.forEach((function(e){u(e)})),f.default.useMemo((function(){return i.loading||i.error?f.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?f.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return i.preload=function(){return o()},i.displayName="LoadableComponent",f.default.forwardRef(i)}(v,e)}function E(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return E(e,t)}))}b.preloadAll=function(){return new Promise((function(e,t){E(y).then(e,t)}))},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};E(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=b.preloadReady;var O=b;t.default=O},2562:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return p}});var r=n(5893),o=n(7294),u=n(4751),i=n(5152),a=n(1664),c=n(247),l=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(7917)]).then(n.bind(n,7917))}),{loadableGenerated:{webpack:function(){return[7917]},modules:["index.tsx -> components/Cards/BoxStyleCard"]}}),s=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(8498)]).then(n.bind(n,8498))}),{loadableGenerated:{webpack:function(){return[8498]},modules:["index.tsx -> components/Layouts/HomeLayout"]}}),f=(0,i.default)((function(){return Promise.all([n.e(9351),n.e(7964)]).then(n.bind(n,7964))}),{loadableGenerated:{webpack:function(){return[7964]},modules:["index.tsx -> components/Layouts/AppLayout"]}});function d(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.user})).me,n=(0,u.v9)((function(e){return e.community})),i=n.mainCommunities,d=n.changableCommunities,p=n.hasMoreCommunity,y=n.loadCommunitiesLoading;return(0,o.useEffect)((function(){null!==t&&void 0!==t&&t.country&&e((0,c.X0)({country:t.country,communityId:0}))}),[null===t||void 0===t?void 0:t.country]),(0,o.useEffect)((function(){function n(){if(null!==t&&void 0!==t&&t.country&&d.length&&window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-200&&p&&!y){var n=d[d.length-1].id;e((0,c.X0)({country:t.country,communityId:n}))}}return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[p,y,d,t]),(0,r.jsx)(f,{children:(0,r.jsxs)(s,{children:[(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{children:"\uc0c8\ub85c\uc6b4 \ucee4\ubba4\ub2c8\ud2f0\ub97c \ub9cc\ub098\ubcf4\uc138\uc694"}),(0,r.jsx)("div",{className:"cards-container",children:i.map((function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{href:"/community/".concat(e.id),prefetch:!1,children:(0,r.jsx)("a",{children:(0,r.jsx)(l,{profilePhoto:e.profilePhoto,categoryName:e.Categories[0].name,country:e.country,communityName:e.communityName})})})},"new".concat(e.id))}))})]}),t&&d&&(0,r.jsxs)("section",{children:[(0,r.jsx)("h1",{children:"\uc6b0\ub9ac\ub3d9\ub124 \ucee4\ubba4\ub2c8\ud2f0"}),(0,r.jsx)("div",{className:"cards-container",children:d.map((function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{href:"/community/".concat(e.id),prefetch:!1,children:(0,r.jsx)("a",{children:(0,r.jsx)(l,{profilePhoto:e.profilePhoto,categoryName:e.Categories[0].name,country:e.country,communityName:e.communityName})})})},"country".concat(e.id))}))})]})]})})}var p=!0;t.default=(0,o.memo)(d)},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2562)}])},5152:function(e,t,n){e.exports=n(7999)},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[9774,2888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);