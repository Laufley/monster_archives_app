(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/dummy.e23bb253.jpeg"},function(e,t,n){e.exports=n.p+"static/media/music.cccf0798.jpeg"},function(e,t,n){e.exports=n.p+"static/media/ancient-wind-112528.bee5ae93.mp3"},function(e,t,n){e.exports=n.p+"static/media/electronic-rock-king-around-here-15045.64daf639.mp3"},function(e,t,n){e.exports=n(21)},,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(3),r=n.n(c),i=(n(17),n(19),n(1)),o=n(4),s=n.n(o),u=function(e){var t=e.details,n=void 0===t?{}:t,a=("https://www.dnd5eapi.co".concat(n.image),s.a);return l.a.createElement("div",{className:"monster-details"},n&&n.name&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"details"},l.a.createElement("ul",{className:"stats"},l.a.createElement("li",null,l.a.createElement("strong",null,"Name:")," ",n.name," "),l.a.createElement("li",null,l.a.createElement("strong",null,"Type: "),n.type),l.a.createElement("li",null,l.a.createElement("strong",null,"Alignment: "),n.alignment,"  "),l.a.createElement("li",null,l.a.createElement("strong",null,"Size: "),n.size," "),l.a.createElement("li",null,l.a.createElement("strong",null,"Stats:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Strength:")," ",n.strength),l.a.createElement("li",null,l.a.createElement("strong",null,"Dexterity:")," ",n.dexterity),l.a.createElement("li",null,l.a.createElement("strong",null,"Constitution:")," ",n.constitution),l.a.createElement("li",null,l.a.createElement("strong",null,"Intelligence:")," ",n.intelligence),l.a.createElement("li",null,l.a.createElement("strong",null,"Wisdom: ")," ",n.wisdom),l.a.createElement("li",null,l.a.createElement("strong",null,"Charisma:")," ",n.charisma)))),l.a.createElement("img",{className:"image",src:n.image?"https://www.dnd5eapi.co".concat(n.image):a,height:"300px",width:"300px"}))))},m=function(e){var t=e.monster,n=e.onMonsterClicked;return l.a.createElement("ul",null,l.a.createElement("li",{onClick:function(){fetch("https://www.dnd5eapi.co"+t.url).then(function(e){return e.json()}).then(function(e){return n(e)})}},t.name))},E=function(e){var t=e.monsters,n=e.onMonsterClicked,a=t.map(function(e,t){return l.a.createElement(m,{key:t,monster:e,onMonsterClicked:n})});return l.a.createElement("div",{className:"monster-list"},l.a.createElement("ul",null,a))},f=n(5),d=n.n(f),p=function(e){var t=e.musicItem,n=Object(a.useState)(!1),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useRef)(new Audio(t));return Object(a.useEffect)(function(){r?(console.log("it tickles!"),s.current.play()):(console.log("finneee i'll stop"),s.current.pause())},[r]),l.a.createElement("div",null,l.a.createElement("img",{src:d.a,height:"50px",width:"50px",onClick:function(){o(!r)}}))},g=n(6),h=n.n(g),b=n(7),w=n.n(b),v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),s=o[0],m=o[1],f=Object(a.useState)(""),d=Object(i.a)(f,2),g=d[0],b=d[1],v=Object(a.useState)(1),j=Object(i.a)(v,2),N=j[0],C=j[1],k=20*N-20,x=n.slice(k,20+k);Object(a.useEffect)(function(){fetch("https://www.dnd5eapi.co/api/monsters").then(function(e){return e.json()}).then(function(e){return c(e.results)})},[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,"\ud83d\udd25 D&D Monster archives"),l.a.createElement("div",{className:"music-click"},l.a.createElement(p,{musicItem:h.a}),l.a.createElement(p,{musicItem:w.a}))),l.a.createElement("div",{className:"main-container"},l.a.createElement("form",{className:"search-by-name",onSubmit:function(e){e.preventDefault();var t=n.filter(function(e){return g.toLowerCase()==e.name.toLowerCase()});t.length>0&&fetch("https://www.dnd5eapi.co"+t[0].url).then(function(e){return e.json()}).then(function(e){return m(e)})}},l.a.createElement("label",null,"Search by Name "),l.a.createElement("input",{className:"input",type:"text",onChange:function(e){b(e.target.value)},value:g}),l.a.createElement("button",{className:"button-search",type:"submit"},"Search")),l.a.createElement(E,{monsters:x,onMonsterClicked:function(e){console.log("It tickles!"),m(e)}}),l.a.createElement("div",{className:".button-container "},l.a.createElement("button",{className:"button-previous",onClick:function(){1!==N&&C(N-1)}}," \xab Previous page"),l.a.createElement("button",{className:"button-next",onClick:function(){C(N+1)}},"Next Page \xbb")),l.a.createElement(u,{details:s})),l.a.createElement("div",{className:"footer"}," project: API fetching D&D samples for REACT app"))};var j=function(){return l.a.createElement(v,null)},N=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,22)).then(function(t){var n=t.getCLS,a=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null))),N()}],[[8,3,2]]]);
//# sourceMappingURL=main.4eece61a.chunk.js.map