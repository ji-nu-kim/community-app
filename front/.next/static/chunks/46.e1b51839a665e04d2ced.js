(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{NLB4:function(e,a,n){"use strict";n.r(a);var o=n("nKUr"),t=n("q1tI");a.default=function(e){var a=e.address,n=e.number;return Object(t.useEffect)((function(){var e=document.getElementById("map".concat(n));(new window.kakao.maps.services.Geocoder).addressSearch(a,(function(a,n){if(n===window.kakao.maps.services.Status.OK){var o=a[0],t={center:new window.kakao.maps.LatLng(o.y,o.x),level:5},s=new window.kakao.maps.Map(e,t),r=new window.kakao.maps.Marker({position:s.getCenter()});r.setMap(s),console.log(o.address_name);var d='<div style="padding:5px;"><a href="https://map.kakao.com/link/search/'.concat(o.address_name,'" target="_blank" rel="noreferer">\ud070 \uc9c0\ub3c4 \ubcf4\uae30</a></div>'),i=new window.kakao.maps.InfoWindow({content:d,removable:!0});new window.kakao.maps.event.addListener(r,"click",(function(){i.open(s,r)}))}}))}),[]),Object(o.jsx)("div",{id:"map".concat(n),style:{width:"100%",height:"100%"}})}}}]);