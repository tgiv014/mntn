(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{63:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t(0),r=t.n(n),l=t(15),c=t(10),u=t(134),i=t.n(u),o=t(135),s=t.n(o),g=t(136),p=t.n(g),m=t(137),d=t.n(m),E=t(138),h=t.n(E),b=t(139),f=t.n(b),v=function(e){e.bg_color&&e.bg_color;var a=Array.isArray(e.repos)?e.repos:[e.repos];return r.a.createElement("div",{className:"github-tile"},r.a.createElement("div",null,r.a.createElement("img",{src:"/GitHub-Mark-120px-plus.png"})),r.a.createElement("div",null,r.a.createElement("p",null,"GitHub Repos:"),r.a.createElement("ul",null,a.map((function(e){var a=e.replace("https://","").replace("www.","").split(/\/(.+)/)[1];return r.a.createElement("li",{key:e},r.a.createElement("a",{href:e},a))})))))};function w(){var e=Object(l.useRouteData)(),a=e.post,t=e.html;Object(n.useEffect)((function(){document.querySelectorAll("pre code").forEach((function(e){i.a.highlightBlock(e)}))}));var u=a.data.github?r.a.createElement(v,{repos:a.data.github}):null;return r.a.createElement("div",null,r.a.createElement("div",{className:"backline"},r.a.createElement(c.a,{to:"/"},r.a.createElement("h1",null,"<")),r.a.createElement("h1",null,a.data.title)),r.a.createElement("div",{dangerouslySetInnerHTML:t}),u)}i.a.registerLanguage("javascript",s.a),i.a.registerLanguage("rust",p.a),i.a.registerLanguage("go",d.a),i.a.registerLanguage("markdown",h.a),i.a.registerLanguage("python",f.a)}}]);