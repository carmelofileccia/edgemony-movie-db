"use strict";(self.webpackChunkedgemony_movie_db=self.webpackChunkedgemony_movie_db||[]).push([[922],{752:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(504),a=r(129),s={CardItem:"styles_CardItem__QIsX0",CardItem__btn:"styles_CardItem__btn__kdQps",CardItem__img:"styles_CardItem__img__0YMjP",CardItem__title:"styles_CardItem__title__8Xi6k",CardItem__p:"styles_CardItem__p__kWqhj",CardItem__ul:"styles_CardItem__ul__9Gw1l",CardItem__genre:"styles_CardItem__genre__oqVv8",CardItem__desc:"styles_CardItem__desc__YeUow"},i=r(184);var c=function(e){var t=e.cardData;return(0,i.jsxs)("div",{className:s.CardItem,children:[(0,i.jsx)(n.rU,{className:s.CardItem__link,to:"/edit-movie/".concat(t.id),children:(0,i.jsx)("h2",{className:s.CardItem__title,children:t.title})}),(0,i.jsx)("p",{className:s.CardItem__year,children:t.year}),(0,i.jsx)("img",{className:s.CardItem__img,src:t.poster,alt:t.title}),(0,i.jsx)("p",{className:s.CardItem__desc,children:t.description}),(0,i.jsx)("div",{className:s.CardItem__genre,children:(0,i.jsx)("ul",{className:s.CardItem__ul,children:t.genres&&t.genres.map((function(e,t){return(0,i.jsx)("li",{className:s.CardItem__genre,children:e},t)}))})}),(0,i.jsx)("button",{onClick:function(){(0,a.yY)(t.id).then((function(e){return window.location.reload("/")}))},className:s.CardItem__btn,children:"\u2716\ufe0f"})]})}},537:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(861),a=r(885),s=r(757),i=r.n(s),c=r(791),l=r(871),u=r(129),o="styles_CreateCardForm__j0Ueu",d="styles_CreateCardForm__form__TAs8d",_="styles_CreateCardForm__label__EHUzy",m="styles_CreateCardForm__input__iV8Zt",p="styles_CreateCardForm__inputSub__1RhSy",f=r(184);var h=function(e){var t=e.callType,r=e.compCallBack,s=e.compPut,h=(0,c.useState)(""),C=(0,a.Z)(h,2),y=C[0],v=C[1],x=(0,c.useState)(""),j=(0,a.Z)(x,2),g=j[0],I=j[1],N=(0,c.useState)(""),b=(0,a.Z)(N,2),k=b[0],S=b[1],T=(0,c.useState)(""),Z=(0,a.Z)(T,2),F=Z[0],w=Z[1],P=(0,c.useState)(""),q=(0,a.Z)(P,2),E=q[0],O=q[1],U=(0,l.TH)().pathname.split("/").reverse()[0],D=function(e){return e.split(",")},H=function(){var e=(0,n.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"POST"!==t){e.next=7;break}return e.next=4,(0,u.a4)({title:y,year:g,poster:k,genres:D(F),description:E});case 4:r(),e.next=10;break;case 7:return e.next=9,(0,u.uO)(U,{title:y,year:g,poster:k,genres:D(F),description:E});case 9:s();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsx)("div",{className:o,children:(0,f.jsxs)("form",{onSubmit:H,className:d,children:[(0,f.jsx)("label",{className:_,htmlFor:"title",children:"Title:"}),(0,f.jsx)("input",{className:m,value:y,onChange:function(e){return v(e.target.value)},type:"text",id:"title",name:"title",placeholder:"Titolo Film",required:!0}),(0,f.jsx)("label",{className:_,htmlFor:"year",children:"Year:"}),(0,f.jsx)("input",{className:m,value:g,onChange:function(e){return I(e.target.value)},type:"text",id:"year",name:"year",placeholder:"Anno",required:!0}),(0,f.jsx)("label",{className:_,htmlFor:"poster",children:"Poster:"}),(0,f.jsx)("input",{className:m,value:k,onChange:function(e){return S(e.target.value)},type:"text",id:"poster",name:"poster",placeholder:"Poster Film",required:!0}),(0,f.jsx)("label",{className:_,htmlFor:"genres",children:"Genres:"}),(0,f.jsx)("input",{className:m,value:F,onChange:function(e){return w(e.target.value)},type:"text",id:"genres",name:"genres",required:!0}),(0,f.jsx)("label",{className:_,htmlFor:"description",children:"Description:"}),(0,f.jsx)("input",{className:m,value:E,onChange:function(e){return O(e.target.value)},type:"text",id:"description",name:"description",required:!0}),(0,f.jsx)("input",{className:p,type:"submit",value:"Conferma Modifica"})]})})}},663:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(885),a=r(791),s=r(871),i=r(129),c=r(752),l=r(537),u="styles_EditMovie__0ZtzC",o=r(184);var d=function(e){var t=(0,s.s0)(),r=(0,s.TH)(),d=(0,a.useState)({}),_=(0,n.Z)(d,2),m=_[0],p=_[1],f=r.pathname.split("/").reverse()[0];return(0,a.useEffect)((function(){(0,i.HT)(f).then((function(e){return p(e)}))}),[f]),(0,o.jsxs)("div",{className:u,children:[(0,o.jsx)(c.Z,{cardData:m}),(0,o.jsx)(l.Z,{callType:"PUT",compPut:function(){e.editSucces(),t("/")}})]})}},129:function(e,t,r){r.d(t,{HT:function(){return c},a4:function(){return l},uO:function(){return o},yY:function(){return u}});var n=r(861),a=r(757),s=r.n(a),i="https://edgemony-backend.herokuapp.com/movies",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(i,"/").concat(e)).then((function(e){return e.json()}))},l=function(e){return fetch(i,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},u=function(){var e=(0,n.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/").concat(t),{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(e,t){return fetch("".concat(i,"/").concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})}}}]);
//# sourceMappingURL=edit.64b3a138.chunk.js.map