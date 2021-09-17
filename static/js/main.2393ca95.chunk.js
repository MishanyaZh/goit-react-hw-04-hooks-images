(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2p3hn",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2pjDk"}},16:function(e,t,a){e.exports={overlay:"Modal_overlay__3cwDI",modal:"Modal_modal__1Fjzy"}},30:function(e,t,a){e.exports={app:"App_app__3QtC2"}},32:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__2qWaS"}},33:function(e,t,a){e.exports={button:"Button_button__3sx-E"}},40:function(e,t,a){},6:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__2vDj3",searchForm:"Searchbar_searchForm__3aI6b",searchFormButton:"Searchbar_searchFormButton__3yrfd",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__34-Ix",searchFormInput:"Searchbar_searchFormInput__2nBVZ"}},85:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(26),i=a.n(o),s=(a(40),a(17)),l=a(5),u=a(4),m=a(27),b=a.n(m),d=a(28),j=a(34).a.div(n||(n=Object(d.a)(["\n  position: relative;\n  text-align: center;\n  display: inline-block;\n\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),h=a(30),p=a.n(h),g=a(12),f=a.n(g),O=a(31),_=a(13),v=a.n(_);v.a.defaults.baseURL="https://pixabay.com/api/";var x=function(){var e=Object(O.a)(f.a.mark((function e(t,a){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("?q=".concat(t,"&page=").concat(a,"&key=").concat("22670626-c734a5ab3fb2edefe4011dc83","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits.map((function(e){return{id:e.id,webImg:e.webformatURL,largeImg:e.largeImageURL}})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),y=a(6),I=a.n(y),S=a(1),w=function(e){var t=e.handleFormSubmit,a=e.imgValue;return Object(S.jsxs)("header",{className:I.a.searchbar,children:[Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.elements.imgValue.value;""!==n.trim()&a!==n?t(n):u.b.error("Pleas write something"),e.target.elements.imgValue.value=""},className:I.a.searchForm,children:[Object(S.jsx)("button",{type:"submit",className:I.a.searchFormButton,children:Object(S.jsx)("span",{className:I.a.searchFormButtonLabel,children:"Search"})}),Object(S.jsx)("input",{name:"imgValue",className:I.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]}),Object(S.jsx)(u.a,{position:"top-right",reverseOrder:!1})]})},F=a(14),k=a(15),G=a.n(k),N=function(e){var t=e.id,a=e.webImg,n=e.largeImg,r=e.handleSelectImage;return Object(S.jsx)("li",{onClick:function(){r(n)},className:G.a.imageGalleryItem,children:Object(S.jsx)("img",{src:a,alt:t,className:G.a.imageGalleryItemImage})})},L=a(32),B=a.n(L),C=function(e){var t=e.images,a=e.handleSelectImage;return Object(S.jsx)("ul",{className:B.a.imageGallery,children:t.map((function(e){return Object(r.createElement)(N,Object(F.a)(Object(F.a)({handleSelectImage:a},e),{},{key:e.id}))}))})},E=a(33),M=a.n(E),V=function(e){var t=e.onClickLoadMore;return Object(S.jsx)("button",{onClick:function(e){e.preventDefault(),t()},className:M.a.button,type:"button",children:"Load more"})},D=a(16),R=a.n(D),U=function(e){var t=e.image,a=e.onCloseModal;Object(r.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&a()};return Object(S.jsx)("div",{onClick:a,className:R.a.overlay,children:Object(S.jsx)("div",{className:R.a.modal,children:Object(S.jsx)("img",{src:t,alt:t})})})},q=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),o=Object(l.a)(c,2),i=o[0],m=o[1],d=Object(r.useState)("idle"),h=Object(l.a)(d,2),g=h[0],f=h[1],O=Object(r.useState)(1),_=Object(l.a)(O,2),v=_[0],y=_[1],I=Object(r.useState)(!1),F=Object(l.a)(I,2),k=F[0],G=F[1],N=Object(r.useState)(null),L=Object(l.a)(N,2),B=L[0],E=L[1];Object(r.useEffect)((function(){if(""!==a.trim())try{f("idle"),x(a,v).then((function(e){if(G(!0),!e.length)return G(!1),m([]),f("rejected"),y(1),void u.b.error("your images not find.");m((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))})),G(!1),M(),f("resolved"),Object(u.b)("its your, ".concat(a,"s!"),{icon:"\ud83d\udc4f"})}))}catch(e){f("rejected"),u.b.error("This didn't work.")}finally{G(!1)}}),[a,v]);var M=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(S.jsxs)("div",{className:p.a.app,children:[Object(S.jsx)(w,{handleFormSubmit:function(e){n(e),y(1),m([]),G(!0)},imgValue:a}),Object(S.jsx)(C,{images:i,handleSelectImage:function(e){E(e)}}),B&&Object(S.jsx)(U,{image:B,onCloseModal:function(){E(null)}}),Object(S.jsxs)(j,{children:["resolved"===g&&!k&&Object(S.jsx)(V,{onClickLoadMore:function(e){y(v+1),G(!0)}}),!1!==k&&Object(S.jsx)(b.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})]}),Object(S.jsx)(u.a,{position:"top-right",reverseOrder:!1})]})};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(q,{})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.2393ca95.chunk.js.map