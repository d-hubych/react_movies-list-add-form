(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(4),n=i.n(a),c=(i(13),i(2)),s=i(8),l=i(1),r=(i(14),i(15),i(16),i(0)),o=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movie-card",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8",children:t.title})})]}),Object(r.jsxs)("div",{className:"content",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(o,{movie:e},e.imdbId)}))})},m=i(5),j=i.n(m),b=i(6),u=i.n(b),h=function(e){var t=e.name,i=e.value,a=e.label,n=e.required,s=void 0!==n&&n,o=e.onChange,d=e.onValidation,m=void 0===d?function(){return!0}:d,b=Object(l.useState)(u()("".concat(t,"-"))),h=Object(c.a)(b,1)[0],O=Object(l.useState)(!1),g=Object(c.a)(O,2),p=g[0],v=g[1],f=p&&s&&!i,w=i&&!m(i);return Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:h,children:a}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{id:h,"data-cy":"movie-".concat(t),className:j()("input",{"is-danger":f}),type:"text",placeholder:"Enter ".concat(a),value:i,onChange:function(e){return o(e.target.value)},onBlur:function(){return v(!0)}})}),f&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(a," is required")}),w&&Object(r.jsx)("p",{className:"help is-danger",children:"".concat(a," is not valid")})]})},O=function(e){var t=e.onAdd,i=Object(l.useState)(0),a=Object(c.a)(i,2),n=a[0],s=a[1],o=Object(l.useState)(""),d=Object(c.a)(o,2),m=d[0],j=d[1],b=Object(l.useState)(""),u=Object(c.a)(b,2),O=u[0],g=u[1],p=Object(l.useState)(""),v=Object(c.a)(p,2),f=v[0],w=v[1],x=Object(l.useState)(""),M=Object(c.a)(x,2),N=M[0],U=M[1],y=Object(l.useState)(""),I=Object(c.a)(y,2),T=I[0],B=I[1],_=function(e){return/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@,.\w_]*)#?(?:[,.!/\\\w]*))?)$/.test(e)},k=!_(f)||!_(N),z=!m||!f||!N||!T||k;return Object(r.jsxs)("form",{className:"NewMovie",onSubmit:function(e){return function(e){e.preventDefault(),t({title:m,description:O,imgUrl:f,imdbUrl:N,imdbId:T}),j(""),g(""),w(""),U(""),B(""),s((function(e){return e+1}))}(e)},children:[Object(r.jsx)("h2",{className:"title",children:"Add a movie"}),Object(r.jsx)(h,{name:"title",label:"Title",value:m,onChange:j,required:!0}),Object(r.jsx)(h,{name:"description",label:"Description",value:O,onChange:g}),Object(r.jsx)(h,{name:"imgUrl",label:"Image URL",value:f,onChange:w,onValidation:_,required:!0}),Object(r.jsx)(h,{name:"imdbUrl",label:"Imdb URL",value:N,onChange:U,onValidation:_,required:!0}),Object(r.jsx)(h,{name:"imdbId",label:"Imdb ID",value:T,onChange:B,required:!0}),Object(r.jsx)("div",{className:"field is-grouped",children:Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{type:"submit","data-cy":"submit-button",className:"button is-link",disabled:z,children:"Add"})})})]},n)},g=i(7),p=function(e){return e.map((function(e){return Object(s.a)({},e)}))},v=function(){var e=Object(l.useState)(p(g)),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(d,{movies:i})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{onAdd:function(e){var t=p(i);t.push(e),a(t)}})})]})};n.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.8c6e04a5.chunk.js.map