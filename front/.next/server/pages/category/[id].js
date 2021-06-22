module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		9: 0,
/******/ 		31: 0,
/******/ 		35: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../" + ({}[chunkId]||chunkId) + "." + {"18":"034a93c2ce7f67f83789","19":"de998cf9f9c3a0437fa6","20":"e40b3d94ab9970d967c4","39":"257dc8bb3f6ae4918fdf"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZgDN");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3/Tn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Cards/BoxStyleCard/styles.tsx

const CardContainer = /*#__PURE__*/external_styled_components_default.a.div.withConfig({
  displayName: "styles__CardContainer",
  componentId: "sc-14t7usz-0"
})(["width:240px;height:260px;cursor:pointer;background:linear-gradient(to right,rgba(255,255,255,1),rgba(255,255,255,0.7));box-shadow:4px 4px 8px 4px rgba(0,0,0,0.4);:hover{outline:4px solid hotpink;}img{filter:saturate(120%);object-fit:cover;}.fake-image{border-bottom:1px solid rgba(0,0,0,0.2);height:166px;}.card-info{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem;.info-title{font-weight:bold;font-size:1rem;}.info-country{color:#aaabaf;font-size:0.75rem;}.info-category{font-weight:bold;color:#ff5edc;}}"]);
// CONCATENATED MODULE: ./components/Cards/BoxStyleCard/index.tsx





function BoxStyleCard({
  profilePhoto,
  communityName,
  categoryName,
  country
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(CardContainer, {
    children: [profilePhoto ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      width: "240",
      height: "166",
      src: `${"http://52.78.160.142"}/${profilePhoto}`,
      alt: "\uC0AC\uC9C4"
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "fake-image"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "card-info",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "info-title",
        children: communityName
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "info-category",
        children: categoryName
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: "info-country",
        children: country
      })]
    })]
  });
}

/* harmony default export */ var Cards_BoxStyleCard = __webpack_exports__["default"] = (BoxStyleCard);

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5aZt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypesCommunity; });
const actionTypesCommunity = {
  REMOVE_COMMUNITY_IMAGE: 'REMOVE_COMMUNITY_IMAGE',
  // 커뮤니티 프로필 미리보기 이미지 삭제
  UPLOAD_COMMUNITY_IMAGE_REQUEST: 'UPLOAD_COMMUNITY_IMAGE_REQUEST',
  // 커뮤니티 프로필 미리보기 이미지 업로드
  UPLOAD_COMMUNITY_IMAGE_SUCCESS: 'UPLOAD_COMMUNITY_IMAGE_SUCCESS',
  UPLOAD_COMMUNITY_IMAGE_ERROR: 'UPLOAD_COMMUNITY_IMAGE_ERROR',
  CHANGE_COMMUNITY_INFO_REQUEST: 'CHANGE_COMMUNITY_INFO_REQUEST',
  // 커뮤니티 정보 변경
  CHANGE_COMMUNITY_INFO_SUCCESS: 'CHANGE_COMMUNITY_INFO_SUCCESS',
  CHANGE_COMMUNITY_INFO_ERROR: 'CHANGE_COMMUNITY_INFO_ERROR',
  ADD_COMMUNITY_REQUEST: 'ADD_COMMUNITY_REQUEST',
  // 커뮤니티 생성
  ADD_COMMUNITY_SUCCESS: 'ADD_COMMUNITY_SUCCESS',
  ADD_COMMUNITY_ERROR: 'ADD_COMMUNITY_ERROR',
  REMOVE_COMMUNITY_REQUEST: 'REMOVE_COMMUNITY_REQUEST',
  // 커뮤니티 제거(유저가 없을 때만)
  REMOVE_COMMUNITY_SUCCESS: 'REMOVE_COMMUNITY_SUCCESS',
  REMOVE_COMMUNITY_ERROR: 'REMOVE_COMMUNITY_ERROR',
  JOIN_COMMUNITY_REQUEST: 'JOIN_COMMUNITY_REQUEST:',
  // 커뮤니티 가입신청(임시 DB에 저장)
  JOIN_COMMUNITY_SUCCESS: 'JOIN_COMMUNITY_SUCCESS:',
  JOIN_COMMUNITY_ERROR: 'JOIN_COMMUNITY_ERROR:',
  ACCEPT_COMMUNITY_REQUEST: 'ACCEPT_COMMUNITY_REQUEST',
  // 커뮤니티 가입승인(커뮤니티 DB에 저장)
  ACCEPT_COMMUNITY_SUCCESS: 'ACCEPT_COMMUNITY_SUCCESS',
  ACCEPT_COMMUNITY_ERROR: 'ACCEPT_COMMUNITY_ERROR',
  REFUSE_COMMUNITY_REQUEST: 'REFUSE_COMMUNITY_REQUEST',
  // 커뮤니티 가입거절(임시 DB에서 삭제)
  REFUSE_COMMUNITY_SUCCESS: 'REFUSE_COMMUNITY_SUCCESS',
  REFUSE_COMMUNITY_ERROR: 'REFUSE_COMMUNITY_ERROR',
  LEAVE_COMMUNITY_REQUEST: 'LEAVE_COMMUNITY_REQUEST',
  // 커뮤니티 탈퇴
  LEAVE_COMMUNITY_SUCCESS: 'LEAVE_COMMUNITY_SUCCESS',
  LEAVE_COMMUNITY_ERROR: 'LEAVE_COMMUNITY_ERROR',
  LOAD_COMMUNITY_REQUEST: 'LOAD_COMMUNITY_REQUEST',
  // 특정 커뮤니티 불러오기
  LOAD_COMMUNITY_SUCCESS: 'LOAD_COMMUNITY_SUCCESS',
  LOAD_COMMUNITY_ERROR: 'LOAD_COMMUNITY_ERROR',
  LOAD_COMMUNITIES_REQUEST: 'LOAD_COMMUNITIES_REQUEST',
  // 모든 커뮤니티 불러오기
  LOAD_COMMUNITIES_SUCCESS: 'LOAD_COMMUNITIES_SUCCESS',
  LOAD_COMMUNITIES_ERROR: 'LOAD_COMMUNITIES_ERROR',
  SEARCH_COMMUNITIES_REQUEST: 'SEARCH_COMMUNITIES_REQUEST',
  // 커뮤니티 검색
  SEARCH_COMMUNITIES_SUCCESS: 'SEARCH_COMMUNITIES_SUCCESS',
  SEARCH_COMMUNITIES_ERROR: 'SEARCH_COMMUNITIES_ERROR',
  LOAD_COUNTRY_COMMUNITIES_REQUEST: 'LOAD_COUNTRY_COMMUNITIES_REQUEST',
  // 해당 지역의 모든 커뮤니티 불러오기
  LOAD_COUNTRY_COMMUNITIES_SUCCESS: 'LOAD_COUNTRY_COMMUNITIES_SUCCESS',
  LOAD_COUNTRY_COMMUNITIES_ERROR: 'LOAD_COUNTRY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_COMMUNITIES_REQUEST: 'LOAD_CATEGORY_COMMUNITIES_REQUEST',
  // 해당 카테고리의 모든 커뮤니티 불러오기
  LOAD_CATEGORY_COMMUNITIES_SUCCESS: 'LOAD_CATEGORY_COMMUNITIES_SUCCESS',
  LOAD_CATEGORY_COMMUNITIES_ERROR: 'LOAD_CATEGORY_COMMUNITIES_ERROR',
  LOAD_CATEGORY_REQUEST: 'LOAD_CATEGORY_REQUEST',
  // 특정 카테고리 불러오기
  LOAD_CATEGORY_SUCCESS: 'LOAD_CATEGORY_SUCCESS',
  LOAD_CATEGORY_ERROR: 'LOAD_CATEGORY_ERROR',
  LOAD_CATEGORIES_REQUEST: 'LOAD_CATEGORIES_REQUEST',
  // 모든 카테고리 불러오기
  LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',
  LOAD_CATEGORIES_ERROR: 'LOAD_CATEGORIES_ERROR',
  ADD_MEET_REQUEST: 'ADD_MEET_REQUEST',
  // 모임 생성
  ADD_MEET_SUCCESS: 'ADD_MEET_SUCCESS',
  ADD_MEET_ERROR: 'ADD_MEET_ERROR',
  REMOVE_MEET_REQUEST: 'REMOVE_MEET_REQUEST',
  // 모임 제거
  REMOVE_MEET_SUCCESS: 'REMOVE_MEET_SUCCESS',
  REMOVE_MEET_ERROR: 'REMOVE_MEET_ERROR',
  MODIFY_MEET_REQUEST: 'MODIFY_MEET_REQUEST',
  // 모임 수정
  MODIFY_MEET_SUCCESS: 'MODIFY_MEET_SUCCESS',
  MODIFY_MEET_ERROR: 'MODIFY_MEET_ERROR',
  JOIN_MEET_REQUEST: 'JOIN_MEET_REQUEST',
  // 모임 가입
  JOIN_MEET_SUCCESS: 'JOIN_MEET_SUCCESS',
  JOIN_MEET_ERROR: 'JOIN_MEET_ERROR',
  LEAVE_MEET_REQUEST: 'LEAVE_MEET_REQUEST',
  // 모임 탈퇴
  LEAVE_MEET_SUCCESS: 'LEAVE_MEET_SUCCESS',
  LEAVE_MEET_ERROR: 'LEAVE_MEET_ERROR'
};

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7ubT":
/***/ (function(module, exports) {



/***/ }),

/***/ "DUEp":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "JHou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7ubT");
/* harmony import */ var _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__, "actionTypesCommunity")) __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__["actionTypesCommunity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__, "actionTypesPost")) __webpack_require__.d(__webpack_exports__, "actionTypesPost", function() { return _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__["actionTypesPost"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__, "actionTypesUser")) __webpack_require__.d(__webpack_exports__, "actionTypesUser", function() { return _user_user_interfaces__WEBPACK_IMPORTED_MODULE_0__["actionTypesUser"]; });

/* harmony import */ var _user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ov2J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypesUser", function() { return _user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("DUEp");
/* harmony import */ var _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__, "actionTypesCommunity")) __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__["actionTypesCommunity"]; });

/* harmony reexport (checked) */ if(__webpack_require__.o(_post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__, "actionTypesPost")) __webpack_require__.d(__webpack_exports__, "actionTypesPost", function() { return _post_post_interfaces__WEBPACK_IMPORTED_MODULE_2__["actionTypesPost"]; });

/* harmony import */ var _post_postAction_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("hiaJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypesPost", function() { return _post_postAction_interfaces__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aePX");
/* harmony import */ var _community_community_interfaces__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (checked) */ if(__webpack_require__.o(_community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__, "actionTypesCommunity")) __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _community_community_interfaces__WEBPACK_IMPORTED_MODULE_4__["actionTypesCommunity"]; });

/* harmony import */ var _community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("5aZt");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "actionTypesCommunity", function() { return _community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_5__["a"]; });








/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Lwpp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return logOutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return loadMyInfoRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return removeImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return uploadImageRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return signUpRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return leaveRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return changeProfileRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeCountryRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkNotificationRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeNotificationRequestAction; });
/* unused harmony export addMeetOfMe */
/* unused harmony export removeMeetOfMe */
/* unused harmony export modifyMeetOfMe */
/* unused harmony export joinMeetOfMe */
/* unused harmony export leaveMeetOfMe */
/* unused harmony export leaveCommunityOfMe */
/* harmony import */ var _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ov2J");

const loginRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].LOG_IN_REQUEST,
    data
  };
};
const logOutRequestAction = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].LOG_OUT_REQUEST
  };
};
const loadMyInfoRequestAction = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].LOAD_MY_INFO_REQUEST
  };
};
const removeImage = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].REMOVE_IMAGE
  };
};
const uploadImageRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].UPLOAD_IMAGE_REQUEST,
    data
  };
};
const signUpRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].SIGN_UP_REQUEST,
    data
  };
};
const leaveRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].LEAVE_REQUEST,
    data
  };
};
const changeProfileRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].CHANGE_PROFILE_REQUEST,
    data
  };
};
const changeCountryRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].CHANGE_COUNTRY_REQUEST,
    data
  };
};
const checkNotificationRequestAction = () => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].CHECK_NOTIFICATION_REQUEST
  };
};
const removeNotificationRequestAction = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].REMOVE_NOTIFICATION_REQUEST,
    data
  };
};
const addMeetOfMe = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].ADD_MEET_OF_ME,
    data
  };
};
const removeMeetOfMe = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].REMOVE_MEET_OF_ME,
    data
  };
};
const modifyMeetOfMe = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].MODIFY_MEET_OF_ME,
    data
  };
};
const joinMeetOfMe = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].JOIN_MEET_OF_ME,
    data
  };
};
const leaveMeetOfMe = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].LEAVE_MEET_OF_ME,
    data
  };
};
const leaveCommunityOfMe = data => {
  return {
    type: _interfaces_user_userAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesUser */ "a"].LEAVE_COMMUNITY_OF_ME,
    data
  };
};

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YXRT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return removeCommunityImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return uploadCommunityImageRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return changeCommunityInfoRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return joinCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acceptCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return refuseCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return leaveCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return loadCommunityRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return loadCommunitiesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return searchCommunitiesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return loadCountryCommunitiesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return loadCategoryCommunitiesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return loadCategoryRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return loadCategoriesRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return addMeetRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return removeMeetRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return modifyMeetRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return joinMeetRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return leaveMeetRequestAction; });
/* harmony import */ var _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5aZt");

const removeCommunityImage = () => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].REMOVE_COMMUNITY_IMAGE
  };
};
const uploadCommunityImageRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].UPLOAD_COMMUNITY_IMAGE_REQUEST,
    data
  };
};
const changeCommunityInfoRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].CHANGE_COMMUNITY_INFO_REQUEST,
    data
  };
};
const addCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].ADD_COMMUNITY_REQUEST,
    data
  };
};
const removeCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].REMOVE_COMMUNITY_REQUEST,
    data
  };
};
const joinCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].JOIN_COMMUNITY_REQUEST,
    data
  };
};
const acceptCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].ACCEPT_COMMUNITY_REQUEST,
    data
  };
};
const refuseCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].REFUSE_COMMUNITY_REQUEST,
    data
  };
};
const leaveCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LEAVE_COMMUNITY_REQUEST,
    data
  };
};
const loadCommunityRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LOAD_COMMUNITY_REQUEST,
    data
  };
};
const loadCommunitiesRequestAction = () => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LOAD_COMMUNITIES_REQUEST
  };
};
const searchCommunitiesRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].SEARCH_COMMUNITIES_REQUEST,
    data
  };
};
const loadCountryCommunitiesRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LOAD_COUNTRY_COMMUNITIES_REQUEST,
    data
  };
};
const loadCategoryCommunitiesRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LOAD_CATEGORY_COMMUNITIES_REQUEST,
    data
  };
};
const loadCategoryRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LOAD_CATEGORY_REQUEST,
    data
  };
};
const loadCategoriesRequestAction = () => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LOAD_CATEGORIES_REQUEST
  };
};
const addMeetRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].ADD_MEET_REQUEST,
    data
  };
};
const removeMeetRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].REMOVE_MEET_REQUEST,
    data
  };
};
const modifyMeetRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].MODIFY_MEET_REQUEST,
    data
  };
};
const joinMeetRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].JOIN_MEET_REQUEST,
    data
  };
};
const leaveMeetRequestAction = data => {
  return {
    type: _interfaces_community_communityAction_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* actionTypesCommunity */ "a"].LEAVE_MEET_REQUEST,
    data
  };
};

/***/ }),

/***/ "ZgDN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nUeB");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YXRT");
/* harmony import */ var actions_actionUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Lwpp");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("awaa");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var store_configureStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("sogr");
/* harmony import */ var components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("nt3J");
/* harmony import */ var components_Cards_BoxStyleCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("3/Tn");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);

















function Category() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const {
    changableCommunities,
    hasMoreCommunity,
    loadCommunitiesLoading,
    singleCategory,
    communityLength
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.community);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(() => {
    function onScroll() {
      if (changableCommunities.length) {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 300) {
          if (hasMoreCommunity && !loadCommunitiesLoading) {
            const categoryId = Number(router.query.id);
            const lastId = changableCommunities[changableCommunities.length - 1].id;
            dispatch(Object(actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__[/* loadCategoryCommunitiesRequestAction */ "j"])({
              categoryId,
              communityId: lastId
            }));
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMoreCommunity, loadCommunitiesLoading, changableCommunities, router.query.id]);

  if (!singleCategory) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      children: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694"
    });
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("title", {
        children: ["community - ", singleCategory.name, " \uCE74\uD14C\uACE0\uB9AC"]
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__[/* default */ "c"], {
        img: singleCategory.profilePhoto,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__[/* CategoryHeader */ "b"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("h1", {
            children: [singleCategory.name, /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("br", {}), communityLength, "\uAC1C\uC758 \uCEE4\uBBA4\uB2C8\uD2F0"]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Layouts_CategoryLayout__WEBPACK_IMPORTED_MODULE_10__[/* CategoryContent */ "a"], {
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
            className: "cards-container",
            children: changableCommunities.map(community => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
              children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
                href: `/community/${community.id}`,
                children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
                  children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(components_Cards_BoxStyleCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    profilePhoto: community.profilePhoto,
                    categoryName: community.Categories[0].name,
                    country: community.country,
                    communityName: community.communityName
                  })
                })
              })
            }, community.id))
          })
        })]
      })
    })]
  });
}

const getServerSideProps = store_configureStore__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].getServerSideProps(async context => {
  const cookie = context.req ? context.req.headers.cookie : '';
  const categoryId = Number(context.query.id);
  axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = '';

  if (context.req && cookie) {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.defaults.headers.Cookie = cookie;
  }

  context.store.dispatch(Object(actions_actionUser__WEBPACK_IMPORTED_MODULE_3__[/* loadMyInfoRequestAction */ "e"])());
  context.store.dispatch(Object(actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__[/* loadCategoryRequestAction */ "k"])({
    categoryId
  }));
  context.store.dispatch(Object(actions_actionCommunity__WEBPACK_IMPORTED_MODULE_2__[/* loadCategoryCommunitiesRequestAction */ "j"])({
    categoryId,
    communityId: 0
  }));
  context.store.dispatch(_redux_saga_core__WEBPACK_IMPORTED_MODULE_1__["END"]);
  await context.store.sagaTask.toPromise();
});
/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "aePX":
/***/ (function(module, exports) {



/***/ }),

/***/ "awaa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);






const NavBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "4EMY")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("4EMY")],
    modules: ['components/NavBar']
  }
});
const SideBar = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "fnIl")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("fnIl")],
    modules: ['components/SideBar']
  }
});
const UserInfoModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "yi+a")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("yi+a")],
    modules: ['components/Modals/UserInfoModal']
  }
});
const NotificationModal = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => __webpack_require__.e(/* import() */ 39).then(__webpack_require__.bind(null, "fT4A")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("fT4A")],
    modules: ['components/Modals/NotificationModal']
  }
});
const Global = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"]`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

function AppLayout({
  children
}) {
  const {
    me,
    leaveDone,
    leaveError
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.user);
  const {
    0: userInfoModal,
    1: setUserInfoModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: notificationModal,
    1: setNotificationModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (leaveDone) {
      alert('탈퇴처리가 완료되었습니다');
    }
  }, [leaveDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (leaveError) {
      alert(leaveError);
    }
  }, [leaveError]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Global, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(NavBar, {
      notices: me === null || me === void 0 ? void 0 : me.Notices,
      userInfoModal: userInfoModal,
      setUserInfoModal: setUserInfoModal,
      setNotificationModal: setNotificationModal
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '200px auto'
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(SideBar, {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
        children: children
      })]
    }), userInfoModal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(UserInfoModal, {
      setUserInfoModal: setUserInfoModal
    }), notificationModal && /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(NotificationModal, {
      setNotificationModal: setNotificationModal,
      notices: me === null || me === void 0 ? void 0 : me.Notices
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(AppLayout));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hiaJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypesPost; });
const actionTypesPost = {
  ADD_POST_REQUEST: 'ADD_POST_REQUEST',
  ADD_POST_SUCCESS: 'ADD_POST_SUCCESS',
  ADD_POST_ERROR: 'ADD_POST_ERROR',
  REMOVE_POST_REQUEST: 'REMOVE_POST_REQUEST',
  REMOVE_POST_SUCCESS: 'REMOVE_POST_SUCCESS',
  REMOVE_POST_ERROR: 'REMOVE_POST_ERROR',
  UPDATE_POST_REQUEST: 'UPDATE_POST_REQUEST',
  UPDATE_POST_SUCCESS: 'UPDATE_POST_SUCCESS',
  UPDATE_POST_ERROR: 'UPDATE_POST_ERROR',
  LOAD_POSTS_REQUEST: 'LOAD_POSTS_REQUEST',
  LOAD_POSTS_SUCCESS: 'LOAD_POSTS_SUCCESS',
  LOAD_POSTS_ERROR: 'LOAD_POSTS_ERROR',
  ADD_COMMENT_REQUEST: 'ADD_COMMENT_REQUEST',
  ADD_COMMENT_SUCCESS: 'ADD_COMMENT_SUCCESS',
  ADD_COMMENT_ERROR: 'ADD_COMMENT_ERROR',
  REMOVE_COMMENT_REQUEST: 'REMOVE_COMMENT_REQUEST',
  REMOVE_COMMENT_SUCCESS: 'REMOVE_COMMENT_SUCCESS',
  REMOVE_COMMENT_ERROR: 'REMOVE_COMMENT_ERROR',
  UPDATE_COMMENT_REQUEST: 'UPDATE_COMMENT_REQUEST',
  UPDATE_COMMENT_SUCCESS: 'UPDATE_COMMENT_SUCCESS',
  UPDATE_COMMENT_ERROR: 'UPDATE_COMMENT_ERROR',
  UPLOAD_IMAGES_REQUEST: 'UPLOAD_IMAGES_REQUEST',
  UPLOAD_IMAGES_SUCCESS: 'UPLOAD_IMAGES_SUCCESS',
  UPLOAD_IMAGES_ERROR: 'UPLOAD_IMAGES_ERROR',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  REPORT_REQUEST: 'REPORT_REQUEST',
  REPORT_SUCCESS: 'REPORT_SUCCESS',
  REPORT_ERROR: 'REPORT_ERROR'
};

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nUeB":
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "nt3J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategoryHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryContent; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const CategoryContainer = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CategoryLayout__CategoryContainer",
  componentId: "sc-1edo1oy-0"
})(["display:grid;grid-template-rows:200px auto;width:100%;height:100%;background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(", ");background-position:center;background-size:cover;"], props => props.img && props.img);
const CategoryHeader = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CategoryLayout__CategoryHeader",
  componentId: "sc-1edo1oy-1"
})(["height:200px;width:100%;background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3));position:relative;h1{white-space:pre-line;position:absolute;bottom:50px;left:50px;color:#fff;font-weight:bold;font-size:2rem;font-family:'Noto Sans KR',sans-serif;vertical-align:bottom;}"]);
const CategoryContent = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "CategoryLayout__CategoryContent",
  componentId: "sc-1edo1oy-2"
})(["padding:1rem;.cards-container{display:grid;gap:1rem;grid-template-columns:repeat(auto-fill,240px);justify-content:space-evenly;}"]);

function CategoryLayout({
  children,
  img
}) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(CategoryContainer, {
    img: img ? `${"http://52.78.160.142"}/${img}` : null,
    children: children
  });
}

/* harmony default export */ __webpack_exports__["c"] = (CategoryLayout);

/***/ }),

/***/ "ov2J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypesUser; });
const actionTypesUser = {
  LOG_IN_REQUEST: 'LOG_IN_REQUEST',
  LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
  LOG_IN_ERROR: 'LOG_IN_ERROR',
  LOG_OUT_REQUEST: 'LOG_OUT_REQUEST',
  LOG_OUT_SUCCESS: 'LOG_OUT_SUCCESS',
  LOG_OUT_ERROR: 'LOG_OUT_ERROR',
  LOAD_MY_INFO_REQUEST: 'LOAD_MY_INFO_REQUEST',
  LOAD_MY_INFO_SUCCESS: 'LOAD_MY_INFO_SUCCESS',
  LOAD_MY_INFO_ERROR: 'LOAD_MY_INFO_ERROR',
  UPLOAD_IMAGE_REQUEST: 'UPLOAD_IMAGE_REQUEST',
  UPLOAD_IMAGE_SUCCESS: 'UPLOAD_IMAGE_SUCCESS',
  UPLOAD_IMAGE_ERROR: 'UPLOAD_IMAGE_ERROR',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  SIGN_UP_REQUEST: 'SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: 'SIGN_UP_ERROR',
  LEAVE_REQUEST: 'LEAVE_REQUEST',
  LEAVE_SUCCESS: 'LEAVE_SUCCESS',
  LEAVE_ERROR: 'LEAVE_ERROR',
  CHANGE_PROFILE_REQUEST: 'CHANGE_PROFILE_REQUEST',
  CHANGE_PROFILE_SUCCESS: 'CHANGE_PROFILE_SUCCESS',
  CHANGE_PROFILE_ERROR: 'CHANGE_PROFILE_ERROR',
  CHANGE_COUNTRY_REQUEST: 'CHANGE_COUNTRY_REQUEST',
  CHANGE_COUNTRY_SUCCESS: 'CHANGE_COUNTRY_SUCCESS',
  CHANGE_COUNTRY_ERROR: 'CHANGE_COUNTRY_ERROR',
  CHECK_NOTIFICATION_REQUEST: 'CHECK_NOTIFICATION_REQUEST',
  CHECK_NOTIFICATION_SUCCESS: 'CHECK_NOTIFICATION_SUCCESS',
  CHECK_NOTIFICATION_ERROR: 'CHECK_NOTIFICATION_ERROR',
  REMOVE_NOTIFICATION_REQUEST: 'REMOVE_NOTIFICATION_REQUEST',
  REMOVE_NOTIFICATION_SUCCESS: 'REMOVE_NOTIFICATION_SUCCESS',
  REMOVE_NOTIFICATION_ERROR: 'REMOVE_NOTIFICATION_ERROR',
  ADD_MEET_OF_ME: 'ADD_MEET_OF_ME',
  REMOVE_MEET_OF_ME: 'REMOVE_MEET_OF_ME',
  MODIFY_MEET_OF_ME: 'MODIFY_MEET_OF_ME',
  JOIN_MEET_OF_ME: 'JOIN_MEET_OF_ME',
  LEAVE_MEET_OF_ME: 'LEAVE_MEET_OF_ME',
  LEAVE_COMMUNITY_OF_ME: 'LEAVE_COMMUNITY_OF_ME'
};

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "sogr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./interfaces/index.ts
var interfaces = __webpack_require__("JHou");

// EXTERNAL MODULE: external "immer"
var external_immer_ = __webpack_require__("T5ka");
var external_immer_default = /*#__PURE__*/__webpack_require__.n(external_immer_);

// CONCATENATED MODULE: ./reducers/user.ts


const initialState = {
  imagePath: [],
  me: null,
  userInfo: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  uploadImageLoading: false,
  uploadImageDone: false,
  uploadImageError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  leaveLoading: false,
  leaveDone: false,
  leaveError: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  changeProfileLoading: false,
  changeProfileDone: false,
  changeProfileError: null,
  changeCountryLoading: false,
  changeCountryDone: false,
  changeCountryError: null,
  checkNotificationLoading: false,
  checkNotificationDone: false,
  checkNotificationError: null,
  removeNotificationLoading: false,
  removeNotificationDone: false,
  removeNotificationError: null
};

const reducer = (state = initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case interfaces["actionTypesUser"].LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case interfaces["actionTypesUser"].LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        break;

      case interfaces["actionTypesUser"].LOG_IN_ERROR:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case interfaces["actionTypesUser"].LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case interfaces["actionTypesUser"].LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;

      case interfaces["actionTypesUser"].LOG_OUT_ERROR:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case interfaces["actionTypesUser"].LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case interfaces["actionTypesUser"].LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case interfaces["actionTypesUser"].LOAD_MY_INFO_ERROR:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case interfaces["actionTypesUser"].UPLOAD_IMAGE_REQUEST:
        draft.uploadImageLoading = true;
        draft.uploadImageDone = false;
        draft.uploadImageError = null;
        break;

      case interfaces["actionTypesUser"].UPLOAD_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadImageLoading = false;
        draft.uploadImageDone = true;
        break;

      case interfaces["actionTypesUser"].UPLOAD_IMAGE_ERROR:
        draft.uploadImageLoading = false;
        draft.uploadImageError = action.error;
        break;

      case interfaces["actionTypesUser"].REMOVE_IMAGE:
        draft.imagePath = [];
        draft.uploadImageDone = false;
        break;

      case interfaces["actionTypesUser"].SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case interfaces["actionTypesUser"].SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case interfaces["actionTypesUser"].SIGN_UP_ERROR:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case interfaces["actionTypesUser"].LEAVE_REQUEST:
        draft.leaveLoading = true;
        draft.leaveDone = false;
        draft.leaveError = null;
        break;

      case interfaces["actionTypesUser"].LEAVE_SUCCESS:
        draft.leaveLoading = false;
        draft.leaveDone = true;
        draft.me = null;
        break;

      case interfaces["actionTypesUser"].LEAVE_ERROR:
        draft.leaveLoading = false;
        draft.leaveError = action.error;
        break;

      case interfaces["actionTypesUser"].CHANGE_PROFILE_REQUEST:
        draft.changeProfileLoading = true;
        draft.changeProfileDone = false;
        draft.changeProfileError = null;
        break;

      case interfaces["actionTypesUser"].CHANGE_PROFILE_SUCCESS:
        draft.changeProfileLoading = false;
        draft.changeProfileDone = true;
        draft.me = action.data;
        break;

      case interfaces["actionTypesUser"].CHANGE_PROFILE_ERROR:
        draft.changeProfileLoading = false;
        draft.changeProfileError = action.error;
        break;

      case interfaces["actionTypesUser"].CHANGE_COUNTRY_REQUEST:
        draft.changeCountryLoading = true;
        draft.changeCountryDone = false;
        draft.changeCountryError = null;
        break;

      case interfaces["actionTypesUser"].CHANGE_COUNTRY_SUCCESS:
        draft.changeCountryLoading = false;
        draft.changeCountryDone = true;

        if (draft.me) {
          draft.me.country = action.data.country;
        }

        break;

      case interfaces["actionTypesUser"].CHANGE_COUNTRY_ERROR:
        draft.changeCountryLoading = false;
        draft.changeCountryError = action.error;
        break;

      case interfaces["actionTypesUser"].CHECK_NOTIFICATION_REQUEST:
        draft.checkNotificationLoading = true;
        draft.checkNotificationDone = false;
        draft.checkNotificationError = null;
        break;

      case interfaces["actionTypesUser"].CHECK_NOTIFICATION_SUCCESS:
        draft.checkNotificationLoading = false;
        draft.checkNotificationDone = true;

        if (draft.me) {
          draft.me.Notices = action.data;
        }

        break;

      case interfaces["actionTypesUser"].CHECK_NOTIFICATION_ERROR:
        draft.checkNotificationLoading = false;
        draft.checkNotificationError = action.error;
        break;

      case interfaces["actionTypesUser"].REMOVE_NOTIFICATION_REQUEST:
        draft.removeNotificationLoading = true;
        draft.removeNotificationDone = false;
        draft.removeNotificationError = null;
        break;

      case interfaces["actionTypesUser"].REMOVE_NOTIFICATION_SUCCESS:
        draft.removeNotificationLoading = false;
        draft.removeNotificationDone = true;

        if (draft.me) {
          draft.me.Notices = draft.me.Notices.filter(notice => notice.id !== action.data.notificationId);
        }

        break;

      case interfaces["actionTypesUser"].REMOVE_NOTIFICATION_ERROR:
        draft.removeNotificationLoading = false;
        draft.removeNotificationError = action.error;
        break;

      case interfaces["actionTypesUser"].JOIN_MEET_OF_ME:
      case interfaces["actionTypesUser"].ADD_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets.unshift(action.data);
        }

        break;

      case interfaces["actionTypesUser"].LEAVE_MEET_OF_ME:
      case interfaces["actionTypesUser"].REMOVE_MEET_OF_ME:
        if (draft.me) {
          draft.me.Meets = draft.me.Meets.filter(meet => meet.id !== action.data.meetId);
        }

        break;

      case interfaces["actionTypesUser"].MODIFY_MEET_OF_ME:
        if (draft.me) {
          const meetIndex = draft.me.Meets.findIndex(meet => meet.id === action.data.id);
          draft.me.Meets[meetIndex] = action.data;
        }

        break;

      case interfaces["actionTypesUser"].LEAVE_COMMUNITY_OF_ME:
        if (draft.me && draft.me.id === action.data.userId) {
          console.log(action.data.communityId);
          draft.me.Communities = draft.me.Communities.filter(community => community.id !== action.data.communityId);
        }

        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var user = (reducer);
// CONCATENATED MODULE: ./reducers/post.ts


const post_initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  hasMorePost: true,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  reportLoading: false,
  reportDone: false,
  reportError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null
};

const post_reducer = (state = post_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case interfaces["actionTypesPost"].ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case interfaces["actionTypesPost"].ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        draft.mainPosts.unshift(action.data);
        break;

      case interfaces["actionTypesPost"].ADD_POST_ERROR:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case interfaces["actionTypesPost"].REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case interfaces["actionTypesPost"].REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.postId);
        break;

      case interfaces["actionTypesPost"].REMOVE_POST_ERROR:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case interfaces["actionTypesPost"].UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case interfaces["actionTypesPost"].UPDATE_POST_SUCCESS:
        {
          draft.updatePostLoading = false;
          draft.updatePostDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            post.content = action.data.content;
          }

          break;
        }

      case interfaces["actionTypesPost"].UPDATE_POST_ERROR:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case interfaces["actionTypesPost"].REPORT_REQUEST:
        draft.reportLoading = true;
        draft.reportDone = false;
        draft.reportError = null;
        break;

      case interfaces["actionTypesPost"].REPORT_SUCCESS:
        draft.reportLoading = false;
        draft.reportDone = true;
        break;

      case interfaces["actionTypesPost"].REPORT_ERROR:
        draft.reportLoading = false;
        draft.reportError = action.error;
        break;

      case interfaces["actionTypesPost"].LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case interfaces["actionTypesPost"].LOAD_POSTS_SUCCESS:
        {
          draft.loadPostsLoading = false;
          draft.loadPostsDone = true;
          draft.mainPosts = draft.mainPosts.concat(action.data);
          draft.hasMorePost = action.data.length === 10;
          break;
        }

      case interfaces["actionTypesPost"].LOAD_POSTS_ERROR:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case interfaces["actionTypesPost"].ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case interfaces["actionTypesPost"].ADD_COMMENT_SUCCESS:
        {
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);

          if (post) {
            post.Comments.unshift(action.data);
          }

          break;
        }

      case interfaces["actionTypesPost"].ADD_COMMENT_ERROR:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case interfaces["actionTypesPost"].UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;

      case interfaces["actionTypesPost"].UPDATE_COMMENT_SUCCESS:
        {
          draft.updateCommentLoading = false;
          draft.updateCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            const comment = post.Comments.find(v => v.id === action.data.commentId);

            if (comment) {
              comment.content = action.data.content;
            }
          }

          break;
        }

      case interfaces["actionTypesPost"].UPDATE_COMMENT_ERROR:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.error;
        break;

      case interfaces["actionTypesPost"].REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case interfaces["actionTypesPost"].REMOVE_COMMENT_SUCCESS:
        {
          draft.removeCommentLoading = false;
          draft.removeCommentDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.postId);

          if (post) {
            post.Comments = post.Comments.filter(v => v.id !== action.data.commentId);
          }

          break;
        }

      case interfaces["actionTypesPost"].REMOVE_COMMENT_ERROR:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.error;
        break;

      case interfaces["actionTypesPost"].UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case interfaces["actionTypesPost"].UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths = action.data;
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case interfaces["actionTypesPost"].UPLOAD_IMAGES_ERROR:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case interfaces["actionTypesPost"].REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var post = (post_reducer);
// CONCATENATED MODULE: ./reducers/community.ts


const community_initialState = {
  imagePath: [],
  communityLength: 0,
  singleCommunity: null,
  mainCommunities: [],
  changableCommunities: [],
  singleCategory: null,
  mainCategories: [],
  hasMoreCommunity: true,
  uploadCommunityImageLoading: false,
  uploadCommunityImageDone: false,
  uploadCommunityImageError: null,
  changeCommunityInfoLoading: false,
  changeCommunityInfoDone: false,
  changeCommunityInfoError: null,
  addCommunityLoading: false,
  addCommunityDone: false,
  addCommunityError: null,
  removeCommunityLoading: false,
  removeCommunityDone: false,
  removeCommunityError: null,
  joinCommunityLoading: false,
  joinCommunityDone: false,
  joinCommunityError: null,
  acceptCommunityLoading: false,
  acceptCommunityDone: false,
  acceptCommunityError: null,
  refuseCommunityLoading: false,
  refuseCommunityDone: false,
  refuseCommunityError: null,
  leaveCommunityLoading: false,
  leaveCommunityDone: false,
  leaveCommunityError: null,
  loadCommunityLoading: false,
  loadCommunityDone: false,
  loadCommunityError: null,
  loadCommunitiesLoading: false,
  loadCommunitiesDone: false,
  loadCommunitiesError: null,
  searchCommunitiesLoading: false,
  searchCommunitiesDone: false,
  searchCommunitiesError: null,
  loadCategoryLoading: false,
  loadCategoryDone: false,
  loadCategoryError: null,
  loadCategoriesLoading: false,
  loadCategoriesDone: false,
  loadCategoriesError: null,
  addMeetLoading: false,
  addMeetDone: false,
  addMeetError: null,
  removeMeetLoading: false,
  removeMeetDone: false,
  removeMeetError: null,
  joinMeetLoading: false,
  joinMeetDone: false,
  joinMeetError: null,
  leaveMeetLoading: false,
  leaveMeetDone: false,
  leaveMeetError: null
};

const community_reducer = (state = community_initialState, action) => {
  return external_immer_default()(state, draft => {
    switch (action.type) {
      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_IMAGE:
        draft.imagePath = [];
        draft.uploadCommunityImageDone = false;
        break;

      case interfaces["actionTypesCommunity"].UPLOAD_COMMUNITY_IMAGE_REQUEST:
        draft.uploadCommunityImageLoading = true;
        draft.uploadCommunityImageDone = false;
        draft.uploadCommunityImageError = null;
        break;

      case interfaces["actionTypesCommunity"].UPLOAD_COMMUNITY_IMAGE_SUCCESS:
        draft.imagePath = action.data;
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageDone = true;
        break;

      case interfaces["actionTypesCommunity"].UPLOAD_COMMUNITY_IMAGE_ERROR:
        draft.uploadCommunityImageLoading = false;
        draft.uploadCommunityImageError = action.error;
        break;

      case interfaces["actionTypesCommunity"].CHANGE_COMMUNITY_INFO_REQUEST:
        draft.changeCommunityInfoLoading = true;
        draft.changeCommunityInfoDone = false;
        draft.changeCommunityInfoError = null;
        break;

      case interfaces["actionTypesCommunity"].CHANGE_COMMUNITY_INFO_SUCCESS:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.caution = action.data.caution;
          draft.singleCommunity.requirement = action.data.requirement;
          draft.singleCommunity.description = action.data.description;
          draft.singleCommunity.profilePhoto = action.data.profilePhoto;
        }

        break;

      case interfaces["actionTypesCommunity"].CHANGE_COMMUNITY_INFO_ERROR:
        draft.changeCommunityInfoLoading = false;
        draft.changeCommunityInfoError = action.error;
        break;

      case interfaces["actionTypesCommunity"].ADD_COMMUNITY_REQUEST:
        draft.addCommunityLoading = true;
        draft.addCommunityDone = false;
        draft.addCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].ADD_COMMUNITY_SUCCESS:
        draft.addCommunityLoading = false;
        draft.addCommunityDone = true;
        break;

      case interfaces["actionTypesCommunity"].ADD_COMMUNITY_ERROR:
        draft.addCommunityLoading = false;
        draft.addCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_REQUEST:
        draft.removeCommunityLoading = true;
        draft.removeCommunityDone = false;
        draft.removeCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_SUCCESS:
        draft.removeCommunityLoading = false;
        draft.removeCommunityDone = true;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_COMMUNITY_ERROR:
        draft.removeCommunityLoading = false;
        draft.removeCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].JOIN_COMMUNITY_REQUEST:
        draft.joinCommunityLoading = true;
        draft.joinCommunityDone = false;
        draft.joinCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].JOIN_COMMUNITY_SUCCESS:
        draft.joinCommunityLoading = false;
        draft.joinCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.concat(action.data);
        }

        break;

      case interfaces["actionTypesCommunity"].JOIN_COMMUNITY_ERROR:
        draft.joinCommunityLoading = false;
        draft.joinCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].ACCEPT_COMMUNITY_REQUEST:
        draft.acceptCommunityLoading = true;
        draft.acceptCommunityDone = false;
        draft.acceptCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].ACCEPT_COMMUNITY_SUCCESS:
        draft.acceptCommunityLoading = false;
        draft.acceptCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Users = draft.singleCommunity.Users.concat(action.data);
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.filter(user => user.id != action.data.id);
        }

        break;

      case interfaces["actionTypesCommunity"].ACCEPT_COMMUNITY_ERROR:
        draft.acceptCommunityLoading = false;
        draft.acceptCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].REFUSE_COMMUNITY_REQUEST:
        draft.refuseCommunityLoading = true;
        draft.refuseCommunityDone = false;
        draft.refuseCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].REFUSE_COMMUNITY_SUCCESS:
        draft.refuseCommunityLoading = false;
        draft.refuseCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.JoinUsers = draft.singleCommunity.JoinUsers.filter(user => user.id != action.data.userId);
        }

        break;

      case interfaces["actionTypesCommunity"].REFUSE_COMMUNITY_ERROR:
        draft.refuseCommunityLoading = true;
        draft.refuseCommunityDone = false;
        draft.refuseCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_COMMUNITY_REQUEST:
        draft.leaveCommunityLoading = true;
        draft.leaveCommunityDone = false;
        draft.leaveCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_COMMUNITY_SUCCESS:
        draft.leaveCommunityLoading = false;
        draft.leaveCommunityDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Users = draft.singleCommunity.Users.filter(user => user.id != action.data.userId);
        }

        break;

      case interfaces["actionTypesCommunity"].LEAVE_COMMUNITY_ERROR:
        draft.leaveCommunityLoading = true;
        draft.leaveCommunityDone = false;
        draft.leaveCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITY_REQUEST:
        draft.loadCommunityLoading = true;
        draft.loadCommunityDone = false;
        draft.loadCommunityError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITY_SUCCESS:
        draft.loadCommunityLoading = false;
        draft.loadCommunityDone = true;
        draft.singleCommunity = action.data;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITY_ERROR:
        draft.loadCommunityLoading = false;
        draft.loadCommunityError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.mainCommunities = draft.mainCommunities.concat(action.data);
        break;

      case interfaces["actionTypesCommunity"].LOAD_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].SEARCH_COMMUNITIES_REQUEST:
        draft.searchCommunitiesLoading = true;
        draft.searchCommunitiesDone = false;
        draft.searchCommunitiesError = null;
        break;

      case interfaces["actionTypesCommunity"].SEARCH_COMMUNITIES_SUCCESS:
        draft.searchCommunitiesLoading = false;
        draft.searchCommunitiesDone = true;
        draft.changableCommunities = draft.changableCommunities.concat(action.data);
        break;

      case interfaces["actionTypesCommunity"].SEARCH_COMMUNITIES_ERROR:
        draft.searchCommunitiesLoading = false;
        draft.searchCommunitiesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_COMMUNITIES_REQUEST:
      case interfaces["actionTypesCommunity"].LOAD_COUNTRY_COMMUNITIES_REQUEST:
        draft.loadCommunitiesLoading = true;
        draft.loadCommunitiesDone = false;
        draft.loadCommunitiesError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_COMMUNITIES_SUCCESS:
      case interfaces["actionTypesCommunity"].LOAD_COUNTRY_COMMUNITIES_SUCCESS:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesDone = true;
        draft.changableCommunities = draft.changableCommunities.concat(action.data);
        draft.hasMoreCommunity = action.data.length === 21;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_COMMUNITIES_ERROR:
      case interfaces["actionTypesCommunity"].LOAD_COUNTRY_COMMUNITIES_ERROR:
        draft.loadCommunitiesLoading = false;
        draft.loadCommunitiesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_REQUEST:
        draft.loadCategoryLoading = true;
        draft.loadCategoryDone = false;
        draft.loadCategoryError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_SUCCESS:
        draft.loadCategoryLoading = false;
        draft.loadCategoryDone = true;
        draft.singleCategory = action.data.category;
        draft.communityLength = action.data.communityLength;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORY_ERROR:
        draft.loadCategoryLoading = false;
        draft.loadCategoryError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORIES_REQUEST:
        draft.loadCategoriesLoading = true;
        draft.loadCategoriesDone = false;
        draft.loadCategoriesError = null;
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORIES_SUCCESS:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesDone = true;
        draft.mainCategories = draft.mainCategories.concat(action.data);
        break;

      case interfaces["actionTypesCommunity"].LOAD_CATEGORIES_ERROR:
        draft.loadCategoriesLoading = false;
        draft.loadCategoriesError = action.error;
        break;

      case interfaces["actionTypesCommunity"].ADD_MEET_REQUEST:
        draft.addMeetLoading = true;
        draft.addMeetDone = false;
        draft.addMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].ADD_MEET_SUCCESS:
        draft.addMeetLoading = false;
        draft.addMeetDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Meets.unshift(action.data);
        }

        break;

      case interfaces["actionTypesCommunity"].ADD_MEET_ERROR:
        draft.addMeetLoading = false;
        draft.addMeetError = action.error;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_MEET_REQUEST:
        draft.removeMeetLoading = true;
        draft.removeMeetDone = false;
        draft.removeMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].REMOVE_MEET_SUCCESS:
        draft.removeMeetLoading = false;
        draft.removeMeetDone = true;

        if (draft.singleCommunity) {
          draft.singleCommunity.Meets = draft.singleCommunity.Meets.filter(meet => meet.id !== action.data.meetId);
        }

        break;

      case interfaces["actionTypesCommunity"].REMOVE_MEET_ERROR:
        draft.removeMeetLoading = false;
        draft.removeMeetError = action.error;
        break;

      case interfaces["actionTypesCommunity"].MODIFY_MEET_REQUEST:
      case interfaces["actionTypesCommunity"].JOIN_MEET_REQUEST:
        draft.joinMeetLoading = true;
        draft.joinMeetDone = false;
        draft.joinMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].MODIFY_MEET_SUCCESS:
      case interfaces["actionTypesCommunity"].JOIN_MEET_SUCCESS:
        draft.joinMeetLoading = false;
        draft.joinMeetDone = true;

        if (draft.singleCommunity) {
          const meetIndex = draft.singleCommunity.Meets.findIndex(meet => meet.id === action.data.id);
          draft.singleCommunity.Meets[meetIndex] = action.data;
        }

        break;

      case interfaces["actionTypesCommunity"].MODIFY_MEET_ERROR:
      case interfaces["actionTypesCommunity"].JOIN_MEET_ERROR:
        draft.joinMeetLoading = false;
        draft.joinMeetError = action.error;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_MEET_REQUEST:
        draft.leaveMeetLoading = true;
        draft.leaveMeetDone = false;
        draft.leaveMeetError = null;
        break;

      case interfaces["actionTypesCommunity"].LEAVE_MEET_SUCCESS:
        draft.leaveMeetLoading = false;
        draft.leaveMeetDone = true;

        if (draft.singleCommunity) {
          const meet = draft.singleCommunity.Meets.find(meet => meet.id === action.data.meetId);

          if (meet) {
            meet.Users = meet.Users.filter(user => user.id !== action.data.userId);
          }
        }

        break;

      case interfaces["actionTypesCommunity"].LEAVE_MEET_ERROR:
        draft.leaveMeetLoading = false;
        draft.leaveMeetError = action.error;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ var community = (community_reducer);
// CONCATENATED MODULE: ./reducers/index.ts






const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      return action.payload;

    default:
      {
        const combinedReducers = Object(external_redux_["combineReducers"])({
          user: user,
          post: post,
          community: community
        });
        return combinedReducers(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./interfaces/user/userAction.interfaces.ts
var userAction_interfaces = __webpack_require__("ov2J");

// CONCATENATED MODULE: ./sagas/user.ts




function loginAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    yield Object(effects_["call"])(loginAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_IN_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_IN_ERROR,
      error: error.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post('/user/logout');
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_OUT_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOG_OUT_ERROR,
      error: error.response.data
    });
  }
}

function loadMyInfoAPI() {
  return external_axios_default.a.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOAD_MY_INFO_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LOAD_MY_INFO_ERROR,
      error: error.response.data
    });
  }
}

function uploadImageAPI(data) {
  return external_axios_default.a.post('/user/image', data);
}

function* uploadImage(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImageAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].UPLOAD_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].UPLOAD_IMAGE_ERROR,
      error: error.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post('/user/signup', data);
}

function* signUp(action) {
  try {
    yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].SIGN_UP_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].SIGN_UP_ERROR,
      error: error.response.data
    });
  }
}

function leaveAPI(data) {
  return external_axios_default.a.delete(`/user/${data.userId}`);
}

function* leave(action) {
  try {
    yield Object(effects_["call"])(leaveAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LEAVE_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].LEAVE_ERROR,
      error: error.response.data
    });
  }
}

function changeProfileAPI(data) {
  return external_axios_default.a.post('/user/profile', data);
}

function* changeProfile(action) {
  try {
    const result = yield Object(effects_["call"])(changeProfileAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_PROFILE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_PROFILE_ERROR,
      error: error.response.data
    });
  }
}

function changeCountryAPI(data) {
  return external_axios_default.a.patch('/user/country', data);
}

function* changeCountry(action) {
  try {
    const result = yield Object(effects_["call"])(changeCountryAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_COUNTRY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHANGE_COUNTRY_ERROR,
      error: error.response.data
    });
  }
}

function checkNotificationAPI() {
  return external_axios_default.a.patch('/user/notification');
}

function* checkNotification() {
  try {
    const result = yield Object(effects_["call"])(checkNotificationAPI);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHECK_NOTIFICATION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].CHECK_NOTIFICATION_ERROR,
      error: error.response.data
    });
  }
}

function removeNotificationAPI(data) {
  return external_axios_default.a.delete(`/user/notification/${data.notificationId}`);
}

function* removeNotification(action) {
  try {
    const result = yield Object(effects_["call"])(removeNotificationAPI, action.data);
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].REMOVE_NOTIFICATION_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: userAction_interfaces["a" /* actionTypesUser */].REMOVE_NOTIFICATION_ERROR,
      error: error.response.data
    });
  }
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LOG_OUT_REQUEST, logOut);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchUploadImage() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].UPLOAD_IMAGE_REQUEST, uploadImage);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].SIGN_UP_REQUEST, signUp);
}

function* watchLeave() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].LEAVE_REQUEST, leave);
}

function* watchChangeProfile() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].CHANGE_PROFILE_REQUEST, changeProfile);
}

function* watchChangeCountry() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].CHANGE_COUNTRY_REQUEST, changeCountry);
}

function* watchCheckNotification() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].CHECK_NOTIFICATION_REQUEST, checkNotification);
}

function* watchRemoveNotification() {
  yield Object(effects_["takeLatest"])(userAction_interfaces["a" /* actionTypesUser */].REMOVE_NOTIFICATION_REQUEST, removeNotification);
}

function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchUploadImage), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchLeave), Object(effects_["fork"])(watchChangeProfile), Object(effects_["fork"])(watchChangeCountry), Object(effects_["fork"])(watchCheckNotification), Object(effects_["fork"])(watchRemoveNotification)]);
}
// EXTERNAL MODULE: ./interfaces/post/postAction.interfaces.ts
var postAction_interfaces = __webpack_require__("hiaJ");

// CONCATENATED MODULE: ./sagas/post.ts




function postAPI(data) {
  return external_axios_default.a.post(`/post/${data.communityId}`, data.formData);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(postAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_POST_ERROR,
      error: error.response.data
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/community/${data.communityId}/post/${data.postId}`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_POST_ERROR,
      error: error.response.data
    });
  }
}

function updatePostAPI(data) {
  return external_axios_default.a.patch(`/post/community/${data.communityId}/post/${data.postId}`, data);
}

function* updatePost(action) {
  try {
    const result = yield Object(effects_["call"])(updatePostAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_POST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_POST_ERROR,
      error: error.response.data
    });
  }
}

function reportPostAPI(data) {
  return external_axios_default.a.post(`/post/${data.contentId}/report`, data);
}

function* reportPost(action) {
  try {
    yield Object(effects_["call"])(reportPostAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REPORT_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REPORT_ERROR,
      error: error.response.data
    });
  }
}

function loadPostsAPI(data) {
  return external_axios_default.a.get(`/posts/community/${data.communityId}/post?lastId=${data.postId}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].LOAD_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].LOAD_POSTS_ERROR,
      error: error.response.data
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].ADD_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function updateCommentAPI(data) {
  return external_axios_default.a.patch(`/post/${data.postId}/comment/${data.commentId}`, data);
}

function* updateComment(action) {
  try {
    const result = yield Object(effects_["call"])(updateCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPDATE_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function removeCommentAPI(data) {
  return external_axios_default.a.delete(`/post/${data.postId}/comment/${data.commentId}`);
}

function* removeComment(action) {
  try {
    const result = yield Object(effects_["call"])(removeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].REMOVE_COMMENT_ERROR,
      error: error.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPLOAD_IMAGES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: postAction_interfaces["a" /* actionTypesPost */].UPLOAD_IMAGES_ERROR,
      error: error.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].ADD_POST_REQUEST, addPost);
}

function* watchUpdatePost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].UPDATE_POST_REQUEST, updatePost);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].REMOVE_POST_REQUEST, removePost);
}

function* watchReportPost() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].REPORT_REQUEST, reportPost);
}

function* watchloadPosts() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].ADD_COMMENT_REQUEST, addComment);
}

function* watchUpdateComment() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].UPDATE_COMMENT_REQUEST, updateComment);
}

function* watchRemoveComment() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].REMOVE_COMMENT_REQUEST, removeComment);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(postAction_interfaces["a" /* actionTypesPost */].UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchUpdatePost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchReportPost), Object(effects_["fork"])(watchloadPosts), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchUpdateComment), Object(effects_["fork"])(watchRemoveComment), Object(effects_["fork"])(watchUploadImages)]);
}
// EXTERNAL MODULE: ./interfaces/community/communityAction.interfaces.ts
var communityAction_interfaces = __webpack_require__("5aZt");

// CONCATENATED MODULE: ./sagas/community.ts





function uploadCommunityImageAPI(data) {
  return external_axios_default.a.post('/community/image', data);
}

function* uploadCommunityImage(action) {
  try {
    const result = yield Object(effects_["call"])(uploadCommunityImageAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].UPLOAD_COMMUNITY_IMAGE_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].UPLOAD_COMMUNITY_IMAGE_ERROR,
      error: error.response.data
    });
  }
}

function changeCommunityInfoAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/info`, data);
}

function* changeCommunityInfo(action) {
  try {
    const result = yield Object(effects_["call"])(changeCommunityInfoAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].CHANGE_COMMUNITY_INFO_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].CHANGE_COMMUNITY_INFO_ERROR,
      error: error.response.data
    });
  }
}

function removeCommunityAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}`);
}

function* removeCommunity(action) {
  try {
    yield Object(effects_["call"])(removeCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_COMMUNITY_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function addCommunityAPI(data) {
  return external_axios_default.a.post('/community', data);
}

function* addCommunity(action) {
  try {
    yield Object(effects_["call"])(addCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_COMMUNITY_SUCCESS
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function joinCommunityAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/join`);
}

function* joinCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(joinCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function acceptCommunityAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/accept/${data.userId}`, data);
}

function* acceptCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(acceptCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ACCEPT_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ACCEPT_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function refuseCommunityAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/refuse/${data.userId}`);
}

function* refuseCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(refuseCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REFUSE_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REFUSE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function leaveCommunityAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/leave`);
}

function* leaveCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(leaveCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_COMMUNITY_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].LEAVE_COMMUNITY_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function loadCommunityAPI(data) {
  return external_axios_default.a.get(`/community/${data.communityId}`);
}

function* loadCommunity(action) {
  try {
    const result = yield Object(effects_["call"])(loadCommunityAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITY_ERROR,
      error: error.response.data
    });
  }
}

function loadCommunitiesAPI() {
  return external_axios_default.a.get('/communities');
}

function* loadCommunities() {
  try {
    const result = yield Object(effects_["call"])(loadCommunitiesAPI);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function searchCommunitiesAPI(data) {
  return external_axios_default.a.get(`/search/${encodeURIComponent(data.keyword)}`);
}

function* searchCommunities(action) {
  try {
    const result = yield Object(effects_["call"])(searchCommunitiesAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].SEARCH_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].SEARCH_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCountryCommunitiesAPI(data) {
  return external_axios_default.a.get(`/communities/country/${data.country}?lastId=${data.communityId}`);
}

function* loadCountryCommunities(action) {
  try {
    const result = yield Object(effects_["call"])(loadCountryCommunitiesAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COUNTRY_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COUNTRY_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoryCommunitiesAPI(data) {
  return external_axios_default.a.get(`/communities/category/${data.categoryId}?lastId=${data.communityId}`);
}

function* loadCategoryCommunities(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategoryCommunitiesAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_COMMUNITIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_COMMUNITIES_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoryAPI(data) {
  return external_axios_default.a.get(`/community/category/${data.categoryId}`);
}

function* loadCategory(action) {
  try {
    const result = yield Object(effects_["call"])(loadCategoryAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_ERROR,
      error: error.response.data
    });
  }
}

function loadCategoriesAPI() {
  return external_axios_default.a.get('/community/categories');
}

function* loadCategories() {
  try {
    const result = yield Object(effects_["call"])(loadCategoriesAPI);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORIES_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORIES_ERROR,
      error: error.response.data
    });
  }
}

function addMeetAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/meet`, data);
}

function* addMeet(action) {
  try {
    const result = yield Object(effects_["call"])(addMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].ADD_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].ADD_MEET_ERROR,
      error: error.response.data
    });
  }
}

function removeMeetAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/meet/${data.meetId}`);
}

function* removeMeet(action) {
  try {
    const result = yield Object(effects_["call"])(removeMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].REMOVE_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_MEET_ERROR,
      error: error.response.data
    });
  }
}

function joinMeetAPI(data) {
  return external_axios_default.a.post(`/community/${data.communityId}/meet/${data.meetId}/join`);
}

function* joinMeet(action) {
  try {
    const result = yield Object(effects_["call"])(joinMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].JOIN_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_MEET_ERROR,
      error: error.response.data
    });
  }
}

function leaveMeetAPI(data) {
  return external_axios_default.a.delete(`/community/${data.communityId}/meet/${data.meetId}/leave`);
}

function* leaveMeet(action) {
  try {
    const result = yield Object(effects_["call"])(leaveMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].LEAVE_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_MEET_ERROR,
      error: error.response.data
    });
  }
}

function modifyMeetAPI(data) {
  return external_axios_default.a.patch(`/community/${data.communityId}/meet/${data.meetId}`, data);
}

function* modifyMeet(action) {
  try {
    const result = yield Object(effects_["call"])(modifyMeetAPI, action.data);
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].MODIFY_MEET_SUCCESS,
      data: result.data
    });
    yield Object(effects_["put"])({
      type: interfaces["actionTypesUser"].MODIFY_MEET_OF_ME,
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: communityAction_interfaces["a" /* actionTypesCommunity */].MODIFY_MEET_ERROR,
      error: error.response.data
    });
  }
}

function* watchUploadCommunityImage() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].UPLOAD_COMMUNITY_IMAGE_REQUEST, uploadCommunityImage);
}

function* watchChangeCommunityInfo() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].CHANGE_COMMUNITY_INFO_REQUEST, changeCommunityInfo);
}

function* watchRemoveCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_COMMUNITY_REQUEST, removeCommunity);
}

function* watchAddCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].ADD_COMMUNITY_REQUEST, addCommunity);
}

function* watchJoinCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_COMMUNITY_REQUEST, joinCommunity);
}

function* watchAcceptCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].ACCEPT_COMMUNITY_REQUEST, acceptCommunity);
}

function* watchRefuseCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].REFUSE_COMMUNITY_REQUEST, refuseCommunity);
}

function* watchLeaveCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_COMMUNITY_REQUEST, leaveCommunity);
}

function* watchLoadCommunity() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITY_REQUEST, loadCommunity);
}

function* watchLoadCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COMMUNITIES_REQUEST, loadCommunities);
}

function* watchsearchCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].SEARCH_COMMUNITIES_REQUEST, searchCommunities);
}

function* watchLoadCountryCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_COUNTRY_COMMUNITIES_REQUEST, loadCountryCommunities);
}

function* watchLoadCategoryCommunities() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_COMMUNITIES_REQUEST, loadCategoryCommunities);
}

function* watchLoadCategory() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORY_REQUEST, loadCategory);
}

function* watchLoadCategories() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LOAD_CATEGORIES_REQUEST, loadCategories);
}

function* watchAddMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].ADD_MEET_REQUEST, addMeet);
}

function* watchRemoveMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].REMOVE_MEET_REQUEST, removeMeet);
}

function* watchJoinMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].JOIN_MEET_REQUEST, joinMeet);
}

function* watchLeaveMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].LEAVE_MEET_REQUEST, leaveMeet);
}

function* watchModifyMeet() {
  yield Object(effects_["takeLatest"])(communityAction_interfaces["a" /* actionTypesCommunity */].MODIFY_MEET_REQUEST, modifyMeet);
}

function* communitySaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchUploadCommunityImage), Object(effects_["fork"])(watchChangeCommunityInfo), Object(effects_["fork"])(watchRemoveCommunity), Object(effects_["fork"])(watchAddCommunity), Object(effects_["fork"])(watchJoinCommunity), Object(effects_["fork"])(watchAcceptCommunity), Object(effects_["fork"])(watchRefuseCommunity), Object(effects_["fork"])(watchLeaveCommunity), Object(effects_["fork"])(watchLoadCommunity), Object(effects_["fork"])(watchLoadCommunities), Object(effects_["fork"])(watchsearchCommunities), Object(effects_["fork"])(watchLoadCountryCommunities), Object(effects_["fork"])(watchLoadCategoryCommunities), Object(effects_["fork"])(watchLoadCategory), Object(effects_["fork"])(watchLoadCategories), Object(effects_["fork"])(watchAddMeet), Object(effects_["fork"])(watchRemoveMeet), Object(effects_["fork"])(watchJoinMeet), Object(effects_["fork"])(watchLeaveMeet), Object(effects_["fork"])(watchModifyMeet)]);
}
// CONCATENATED MODULE: ./sagas/index.ts





external_axios_default.a.defaults.baseURL = "http://52.78.160.142";
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(postSaga), Object(effects_["fork"])(communitySaga)]);
}
// CONCATENATED MODULE: ./store/configureStore.tsx







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });