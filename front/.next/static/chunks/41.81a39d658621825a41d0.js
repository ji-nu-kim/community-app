(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{K0fG:function(e,n,t){"use strict";t.r(n);var a=t("nKUr"),r=t("KQm4"),c=t("q1tI"),i=t("vOnD"),o=t("oZZd"),l=i.b.fieldset.withConfig({displayName:"styles__CheckBoxContainer",componentId:"g7swgl-0"})(["margin:0.5rem 0;display:grid;grid-template-columns:repeat(5,85px);grid-template-rows:auto;div{label{color:#fff;margin-left:4px;:hover{color:coral;animation:"," 0.5s infinite linear;}}}"],o.a);n.default=function(e){var n=e.mainCategories,t=e.setCategories,i=e.categories,o=Object(c.useCallback)((function(e){return function(n){i.length<5?n.target.checked?t((function(n){return[].concat(Object(r.a)(n),[e])})):t((function(n){return Object(r.a)(n).filter((function(n){return n!=e}))})):n.target.checked?(alert("5\uac1c\ub9cc \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4"),n.target.checked=!1):t((function(n){return Object(r.a)(n).filter((function(n){return n!=e}))}))}}),[i]);return Object(a.jsx)(l,{children:n&&n.map((function(e){return Object(a.jsxs)("div",{children:[i.includes(e.name)?Object(a.jsx)("input",{type:"checkbox",id:e.name,onChange:o(e.name),defaultChecked:!0}):Object(a.jsx)("input",{type:"checkbox",id:e.name,onChange:o(e.name)}),Object(a.jsx)("label",{htmlFor:e.name,children:e.name})]},e.name)}))})}}}]);