(this["webpackJsonprick-morty-app"]=this["webpackJsonprick-morty-app"]||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(2),i=a(11),m=(a(27),a(28),a(29),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",null,r.a.createElement(o.c,{exact:!0,to:"/rick-morty/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/rick-morty/characters"},"Characters")),r.a.createElement("li",null,r.a.createElement(o.c,{to:"/rick-morty/layout"},"Layout")))))}),s=(a(35),function(){return r.a.createElement("footer",null,r.a.createElement("p",{className:"footer-text"},"\xa9 2019 by Anna Fedosova"))}),u=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(m,null),t,r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=a(6),h=a(7),E=a(9),f=a(8),d=a(10),y=(a(36),"https://rickandmortyapi.com/api/character/?page="),v=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={data:{}},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(y).then((function(e){return e.json()})).then((function(t){return e.updateData(t)})).catch((function(e){return e}))}},{key:"forFetch",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){return t.updateData(e)})).catch((function(e){return e}))}},{key:"updateData",value:function(e){this.setState({data:e})}},{key:"changePage",value:function(e){this.forFetch(e);var t=document.querySelector(".current"),a=e.split(y).join(""),n=a.indexOf("&");if(-1===n)t.innerHTML=a;else{var r=a.slice(0,n);t.innerHTML=r}}},{key:"findCharacter",value:function(e){var t="".concat(y,"&name=").concat(e),a=document.querySelector(".current");a&&(a.innerHTML="1"),this.forFetch(t)}},{key:"openName",value:function(e){e.lastChild.firstChild.click()}},{key:"render",value:function(){var e,t,a=this,n=this.state.data,c=n.results,l=n.info;return l&&(e=l.prev,t=l.next),r.a.createElement("section",{className:"characters-wrapper"},r.a.createElement("h1",{className:"characters-title"},"Rick & Morty characters list"),r.a.createElement("input",{className:"search-line",type:"text",placeholder:"Search",onChange:function(e){return a.findCharacter(e.target.value)}}),c&&r.a.createElement("table",null,r.a.createElement("tbody",null,c.map((function(e){var t=e.id,n=e.name,c=e.image;return r.a.createElement("tr",{key:t,className:"hero-row",onClick:function(e){return a.openName(e.currentTarget)}},r.a.createElement("td",{className:"hero-photo-data"},r.a.createElement("img",{className:"hero-photo",src:c,alt:n})),r.a.createElement("td",{className:"hero-name-data"},r.a.createElement(o.b,{to:"/rick-morty"+"/characters/".concat(t)},n)))})))),r.a.createElement("div",{className:"pages-wrapper"},e&&r.a.createElement("button",{className:"prev",onClick:function(){return a.changePage(e)}},"<"),!e&&r.a.createElement("button",{className:"prev hidden"},"<"),c&&r.a.createElement("p",{className:"current"},"1"),t&&c&&r.a.createElement("button",{className:"next",onClick:function(){return a.changePage(t)}},">"),!t&&r.a.createElement("button",{className:"next hidden"},">")))}}]),t}(n.Component),k=function(){return r.a.createElement(v,null)},N=(a(37),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={hero:{},id:a.props.id},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state.id;fetch("".concat("https://rickandmortyapi.com/api/character","/").concat(t)).then((function(e){return e.json()})).then((function(t){return e.setState({hero:t})})).catch((function(e){return e}))}},{key:"render",value:function(){var e=this.state.hero,t=e.name,a=e.status,c=e.species,l=e.gender,o=e.image,i=e.created,m=e.origin,s=e.location;return r.a.createElement(n.Fragment,null,t&&r.a.createElement("section",{className:"hero-wrapper"},r.a.createElement("img",{className:"hero-photo",src:o,alt:t}),r.a.createElement("h1",{className:"hero-name"},t),r.a.createElement("p",null,r.a.createElement("span",null,"Status: "),a),r.a.createElement("p",null,r.a.createElement("span",null,"Species: "),c),r.a.createElement("p",null,r.a.createElement("span",null,"Gender: "),l),r.a.createElement("p",null,r.a.createElement("span",null,"Origin: "),m.name),r.a.createElement("p",null,r.a.createElement("span",null,"Location: "),s.name),r.a.createElement("p",null,r.a.createElement("span",null,"Created: "),i.slice(0,10))))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={id:a.props.match.params.id},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(N,{id:this.state.id})}}]),t}(n.Component),g=(a(38),function(){return r.a.createElement("section",{className:"home-wrapper"},r.a.createElement("h1",{className:"title"},"Frontend Test Task"),r.a.createElement("p",null,"You can find Rick & Morty cartoon characters info and an example of given layout on this website"),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/rick-morty/characters"},"Rick & Morty"),r.a.createElement(o.b,{to:"/rick-morty/layout"},"Layout")))}),w=function(){return r.a.createElement(g,null)},j=(a(39),function(e){function t(){return Object(p.a)(this,t),Object(E.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"percentageChange",value:function(){var e=Math.floor(10+91*Math.random()),t=document.querySelector(".percentage");document.querySelector(".percentage-text").innerHTML="".concat(e,"%"),t.style.width="".concat(e,"%")}},{key:"render",value:function(){return r.a.createElement("section",{className:"layout-wrapper"},r.a.createElement("h1",null,"Layout example"),r.a.createElement("div",{className:"ratio-layout-wrapper"},r.a.createElement("div",{className:"outer-layout-wrapper"},r.a.createElement("div",{className:"inner-layout-wrapper"},r.a.createElement("p",{className:"sales-title"},"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0430\u043c"),r.a.createElement("p",{className:"sales-number"},"\u0412\u044b \u0441\u0434\u0435\u043b\u0430\u043b\u0438 ",r.a.createElement("span",{id:"sales-number-js"},"13")," \u043f\u0440\u043e\u0434\u0430\u0436 \u0438 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043b\u0438:"),r.a.createElement("p",{className:"sales-money"},"$ 2 000"),r.a.createElement("div",{className:"plan-wrapper"},r.a.createElement("p",{className:"plan-rusult"},"\u041c\u0435\u0441\u044f\u0447\u043d\u044b\u0439 \u043f\u043b\u0430\u043d \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u043d\u0430"),r.a.createElement("div",{className:"percentage-wrapper"},r.a.createElement("span",{className:"percentage-text"},"75%"),r.a.createElement("div",{className:"percentage"})),r.a.createElement("div",{className:"continue-wrapper"},r.a.createElement("button",{className:"continue",onClick:this.percentageChange},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),r.a.createElement("p",null,"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c 8 \u0434\u043d\u0435\u0439")))),r.a.createElement("div",{className:"member-number"},r.a.createElement("span",null,"25")))))}}]),t}(n.Component)),O=function(){return r.a.createElement(j,null)},C=(a(40),function(){return r.a.createElement("section",{className:"error-wrapper"},r.a.createElement("p",{className:"error"},"Ooops... Error!"),r.a.createElement("p",{className:"error-main"},"You can return to ",r.a.createElement(o.c,{exact:!0,to:"/rick-morty/"},"Home page")))}),x=function(){return r.a.createElement(C,null)};l.a.render(r.a.createElement(o.a,null,r.a.createElement(u,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/rick-morty/",component:w}),r.a.createElement(i.a,{path:"/rick-morty/characters/:id",component:b}),r.a.createElement(i.a,{exact:!0,path:"/rick-morty/characters",component:k}),r.a.createElement(i.a,{path:"/rick-morty/layout",component:O}),r.a.createElement(i.a,{path:"/rick-morty/*",component:x})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.db2a1138.chunk.js.map