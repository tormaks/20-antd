(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{142:function(e,t,a){e.exports={component:"AboutPage_component__1wjXl",text:"AboutPage_text__2ZoRr",btn:"AboutPage_btn__1ZGBS"}},143:function(e,t,a){e.exports={component:"Chars_component__1Uhp_",cards:"Chars_cards__1O8jN",btn:"Chars_btn__3OsUa"}},144:function(e,t,a){e.exports={component:"CharCardItem_component__2ogCC",image:"CharCardItem_image__3BoEP",name:"CharCardItem_name__1nHev"}},145:function(e,t,a){e.exports={component:"AppHeader_component__46yw5",container:"AppHeader_container__2CbaO",title:"AppHeader_title__2ELPQ"}},178:function(e,t,a){e.exports={component:"CharListItem_component__1I9ZN",image:"CharListItem_image__3W2e7"}},243:function(e,t,a){e.exports={component:"Search_component__3oo-c"}},249:function(e,t,a){},250:function(e,t,a){},251:function(e,t,a){},492:function(e,t,a){},493:function(e,t,a){"use strict";a.r(t);a(256);var n=a(0),s=a.n(n),r=a(87),c=a.n(r),i=a(9),o=a(51),l=a(253),h=(a(471),a(142)),j=a.n(h),b=a(2),m=function(e){return Object(b.jsxs)("div",{className:j.a.component,children:[Object(b.jsx)("p",{className:j.a.text,children:"\u041f\u0440\u043e\u0435\u043a\u0442 \u043f\u043e\u0441\u0432\u044f\u0449\u0435\u043d \u0444\u0430\u043d\u0430\u0442\u0430\u043c \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 MARVEL, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u043e\u0442\u044f\u0442 \u043d\u0430\u0439\u0442\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430."}),Object(b.jsx)(o.b,{to:"/chars",children:Object(b.jsx)(l.a,{className:j.a.btn,children:"\u041d\u0430\u0439\u0442\u0438 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"})})]})},u=a(141),d=a(241),x=a(24),O=a(25),f=a(177),p=a.n(f),g=a(17),y=a(242),C=a.n(y),_={getSomeData:function(){return C()("".concat("https://gateway.marvel.com:443/v1/public/characters?","limit=50&offset=210&apikey=7b278298a152832e44b30fbabfc1fdbd")).then((function(e){return e.data.data.results}))}},v=function(){function e(){var t=this;Object(x.a)(this,e),this.chars=[],this.search="",this.isLoading=!0,this.isErrorLoading=!1,this.isShowChars=!0,this.showCharsNumber=8,this.isShowButtonMoreChars=!0,this.handleSearch=function(e){t.search=e.target.value},Object(g.f)(this,{chars:g.g,filterChars:g.c,isLoading:g.g,isErrorLoading:g.g,isShowChars:g.g,search:g.g,showCharsNumber:g.g,isShowButtonMoreChars:g.g,onToggleShowChars:g.b.bound,onShowChars:g.b.bound})}return Object(O.a)(e,[{key:"loadData",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.getSomeData().then((function(e){t.chars=e,t.isLoading=!1})).catch((function(){t.isLoading=!1,t.isErrorLoading=!0}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"filterChars",get:function(){var e=this;return this.search.length>2?(this.onToggleButtonShowMoreChars(!1),this.chars.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}))):(this.onToggleButtonShowMoreChars(!0),this.chars)}},{key:"onToggleButtonShowMoreChars",value:function(e){this.isShowButtonMoreChars=e}},{key:"onToggleShowChars",value:function(){this.isShowChars=!this.isShowChars}},{key:"onShowChars",value:function(){this.showCharsNumber=this.showCharsNumber+8}}]),e}(),F=new v,N=a(496),w=a(498),k=a(243),T=a.n(k),S=function(e){var t=e.search,a=e.handleSearch;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(N.a,{id:"name",size:"large",prefix:Object(b.jsx)(w.a,{}),className:T.a.component,type:"text",placeholder:"Enter the name of char",value:t,onChange:a})})},L=a(72),E=a.n(L),M=a(5),B=a(178),P=a.n(B),A=function(e){var t=e.id,a=e.name,n=e.path,s=e.extension;return Object(b.jsxs)("li",{className:P.a.component,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:a})]}),Object(b.jsx)("img",{src:"".concat(n,".").concat(s),alt:a,className:P.a.image})]})},I=a(249),D=a.n(I),H=function(){return Object(b.jsx)("div",{className:D.a.component,children:Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(b.jsx)("g",{transform:"translate(80,50)",children:Object(b.jsx)("g",{transform:"rotate(0)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"1",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(b.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(b.jsx)("g",{transform:"rotate(45)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.875",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(b.jsx)("g",{transform:"translate(50,80)",children:Object(b.jsx)("g",{transform:"rotate(90)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.75",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(b.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(b.jsx)("g",{transform:"rotate(135)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.625",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(b.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(b.jsx)("g",{transform:"rotate(180)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.5",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(b.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(b.jsx)("g",{transform:"rotate(225)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.375",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(b.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(b.jsx)("g",{transform:"rotate(270)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.25",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(b.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(b.jsx)("g",{transform:"rotate(315)",children:Object(b.jsxs)("circle",{cx:"0",cy:"0",r:"7",fill:"#FFFFFF",fillOpacity:"0.125",children:[Object(b.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(b.jsx)("animate",{attributeName:"fillOpacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})})},R=a(250),Z=a.n(R),J=function(){return Object(b.jsx)("div",{className:Z.a.component,children:"Error"})},U=a(143),V=a.n(U),W=a(144),X=a.n(W),q=function(e){e.id;var t=e.name,a=e.path,n=e.extension;return Object(b.jsxs)("li",{className:X.a.component,tabIndex:0,children:[Object(b.jsx)("img",{src:"".concat(a,".").concat(n),alt:t,className:X.a.image}),Object(b.jsx)("div",{className:X.a.name,children:t})]})},z=a(251),G=a.n(z),Q=function(e){return Object(b.jsx)("div",{className:G.a.component,children:"In progress..."})},Y=Object(u.a)((function(e){var t=Object(i.h)().view,a=void 0===t?"list":t,n=e.errorLoading,s=e.charsLoading,r=e.chars,c=e.active,o=(e.search,Object(b.jsxs)("div",{children:[Object(b.jsxs)("ul",{style:{display:c?"grid":"none"},className:"cards"===a?V.a.cards:V.a.component,children:[F.filterChars.slice(0,F.showCharsNumber).map((function(e){return"list"===a?Object(b.jsx)(A,Object(M.a)(Object(M.a)({},e),{},{path:e.thumbnail.path,extension:e.thumbnail.extension}),e.id):"cards"===a?Object(b.jsx)(q,Object(M.a)(Object(M.a)({},e),{},{path:e.thumbnail.path,extension:e.thumbnail.extension}),e.id):void 0})),"graph"===a&&Object(b.jsx)(Q,{})]}),"graph"!==a&&Object(b.jsx)(l.a,{onClick:F.onShowChars,style:{display:F.isShowButtonMoreChars&&c&&!s?"block":"none"},disabled:F.showCharsNumber===r.length,className:V.a.btn,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"})]})),h=s?Object(b.jsx)(H,{}):null,j=n?Object(b.jsx)(J,{}):null;return Object(b.jsxs)(b.Fragment,{children:[h,j,o]})})),K=Object(u.a)((function(){return Object(n.useEffect)((function(){F.loadData()}),[]),Object(b.jsxs)("main",{className:E.a.component,children:[Object(b.jsx)(o.b,{to:"/about",style:{marginTop:"20px"},children:Object(b.jsx)(l.a,{type:"primary",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})}),Object(b.jsxs)("section",{className:E.a.content,children:[Object(b.jsx)(S,{search:F.search,handleSearch:F.handleSearch}),Object(b.jsxs)("div",{className:E.a.btns,children:[Object(b.jsx)(l.a,{className:E.a.btn,onClick:F.onToggleShowChars,children:"\u0421\u043a\u0440\u044b\u0442\u044c/\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),Object(b.jsx)(o.b,{to:"/chars/list",children:Object(b.jsx)(l.a,{className:E.a.btn,children:"\u0421\u043f\u0438\u0441\u043e\u043a"})}),Object(b.jsx)(o.b,{to:"/chars/cards",children:Object(b.jsx)(l.a,{className:E.a.btn,children:"\u041a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"})}),Object(b.jsx)(o.b,{to:"/chars/graph",children:Object(b.jsx)(l.a,{className:E.a.btn,children:"\u0413\u0440\u0430\u0444\u0438\u043a\u0430"})})]}),Object(b.jsx)(Y,{errorLoading:F.isErrorLoading,charsLoading:F.isLoading,chars:F.chars,active:F.isShowChars,search:F.search})]})]})})),$=a(145),ee=a.n($),te=function(e){return Object(b.jsx)("header",{className:ee.a.component,children:Object(b.jsx)("div",{className:ee.a.container,children:Object(b.jsx)("h1",{className:ee.a.title,children:"\u041d\u0430\u0439\u0434\u0438 \u0441\u0432\u043e\u0435\u0433\u043e \u043b\u044e\u0431\u0438\u043c\u043e\u0433\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430 \u0438\u0437 \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439 MARVEL"})})})},ae=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(te,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"*",element:Object(b.jsx)(i.a,{to:"/about"})}),Object(b.jsx)(i.b,{path:"/about",element:Object(b.jsx)(m,{})}),Object(b.jsx)(i.b,{path:"/chars",element:Object(b.jsx)(K,{})}),Object(b.jsx)(i.b,{path:"/chars/:view",element:Object(b.jsx)(K,{})})]})]})};a(492);c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(ae,{})}),document.getElementById("root"))},72:function(e,t,a){e.exports={component:"CharsPage_component__2qw-c",content:"CharsPage_content__3NXnl",link:"CharsPage_link__1CW3x",btns:"CharsPage_btns__1F7Zt",btn:"CharsPage_btn__2jdrr"}}},[[493,1,2]]]);
//# sourceMappingURL=main.edfb47c8.chunk.js.map