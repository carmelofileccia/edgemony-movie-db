"use strict";(self.webpackChunkedgemony_movie_db=self.webpackChunkedgemony_movie_db||[]).push([[40],{537:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(861),a=n(885),s=n(757),i=n.n(s),c=n(791),o=n(871),u=n(129),l="styles_CreateCardForm__j0Ueu",d="styles_CreateCardForm__form__TAs8d",p="styles_CreateCardForm__label__EHUzy",m="styles_CreateCardForm__input__iV8Zt",f="styles_CreateCardForm__inputSub__1RhSy",h=n(184);var v=function(e){var t=e.callType,n=e.compCallBack,s=e.compPut,v=(0,c.useState)(""),_=(0,a.Z)(v,2),y=_[0],x=_[1],C=(0,c.useState)(""),g=(0,a.Z)(C,2),j=g[0],b=g[1],N=(0,c.useState)(""),S=(0,a.Z)(N,2),k=S[0],F=S[1],T=(0,c.useState)(""),Z=(0,a.Z)(T,2),w=Z[0],A=Z[1],O=(0,c.useState)(""),P=(0,a.Z)(O,2),q=P[0],M=P[1],E=(0,o.TH)().pathname.split("/").reverse()[0],H=function(e){return e.split(",")},U=function(){var e=(0,r.Z)(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),"POST"!==t){e.next=7;break}return e.next=4,(0,u.a4)({title:y,year:j,poster:k,genres:H(w),description:q});case 4:n(),e.next=10;break;case 7:return e.next=9,(0,u.uO)(E,{title:y,year:j,poster:k,genres:H(w),description:q});case 9:s();case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:l,children:(0,h.jsxs)("form",{onSubmit:U,className:d,children:[(0,h.jsx)("label",{className:p,htmlFor:"title",children:"Title:"}),(0,h.jsx)("input",{className:m,value:y,onChange:function(e){return x(e.target.value)},type:"text",id:"title",name:"title",placeholder:"Titolo Film",required:!0}),(0,h.jsx)("label",{className:p,htmlFor:"year",children:"Year:"}),(0,h.jsx)("input",{className:m,value:j,onChange:function(e){return b(e.target.value)},type:"text",id:"year",name:"year",placeholder:"Anno",required:!0}),(0,h.jsx)("label",{className:p,htmlFor:"poster",children:"Poster:"}),(0,h.jsx)("input",{className:m,value:k,onChange:function(e){return F(e.target.value)},type:"text",id:"poster",name:"poster",placeholder:"Poster Film",required:!0}),(0,h.jsx)("label",{className:p,htmlFor:"genres",children:"Genres:"}),(0,h.jsx)("input",{className:m,value:w,onChange:function(e){return A(e.target.value)},type:"text",id:"genres",name:"genres",required:!0}),(0,h.jsx)("label",{className:p,htmlFor:"description",children:"Description:"}),(0,h.jsx)("input",{className:m,value:q,onChange:function(e){return M(e.target.value)},type:"text",id:"description",name:"description",required:!0}),(0,h.jsx)("input",{className:f,type:"submit",value:"Conferma Modifica"})]})})}},314:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var r=n(871),a=n(537),s={AddMovie__title:"styles_AddMovie__title__HUdcV"},i=n(184);var c=function(e){var t=(0,r.s0)();return(0,i.jsxs)("div",{className:s.AddMovie,children:[(0,i.jsx)("h1",{className:s.AddMovie__title,children:"Add a new movie."}),(0,i.jsx)(a.Z,{compCallBack:function(){e.addSucces(),t("/")},callType:"POST"})]})}},129:function(e,t,n){n.d(t,{HT:function(){return c},a4:function(){return o},uO:function(){return l},yY:function(){return u}});var r=n(861),a=n(757),s=n.n(a),i="https://edgemony-backend.herokuapp.com/movies",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(i,"/").concat(e)).then((function(e){return e.json()}))},o=function(e){return fetch(i,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})},u=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(i,"/").concat(t),{method:"DELETE"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e,t){return fetch("".concat(i,"/").concat(e),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)})}}}]);
//# sourceMappingURL=add.fbee22e8.chunk.js.map