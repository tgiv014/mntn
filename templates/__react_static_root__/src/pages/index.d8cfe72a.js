(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{62:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(15),l=a(10),o=function(e){var t=e.bg_color?e.bg_color:"#638475",a={background:e.bg?"url("+e.bg+"), no-repeat, "+t:t,"background-size":"cover"},r=n.a.createElement("div",{className:"project-tile",style:a},n.a.createElement("h1",null,e.title),n.a.createElement("div",null),n.a.createElement("p",null,e.description));return e.to?n.a.createElement(l.a,{to:e.to},r):r};t.default=function(){var e=Object(c.useRouteData)().posts;return n.a.createElement("div",null,n.a.createElement("h1",null,"Featured Projects"),n.a.createElement("div",{className:"project-grid"},e.map((function(e){return e.data.featured?n.a.createElement(o,{title:e.data.title,description:e.data.description,to:"/project/".concat(e.stripped,"/"),bg:e.data.bg,bg_color:e.data.color}):null}))))}}}]);