(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{59:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return c}));var l=a(0),n=a.n(l),o=a(15),r=a(10);function c(){var t=Object(o.useRouteData)().posts;return n.a.createElement("div",null,n.a.createElement("h1",null,"It's blog time."),n.a.createElement("div",null,n.a.createElement("a",{href:"#bottom",id:"top"},"Scroll to bottom!")),n.a.createElement("br",null),"All Posts:",n.a.createElement("ul",null,t.map((function(t){return n.a.createElement("li",{key:t.id},n.a.createElement(r.a,{to:"/blog/post/".concat(t.stripped,"/")},t.data.title))}))),n.a.createElement("a",{href:"#top",id:"bottom"},"Scroll to top!"))}}}]);