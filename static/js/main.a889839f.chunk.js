(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{46:function(e,t,a){e.exports=a(77)},51:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),o=a.n(c),l=(a(51),a(43)),i=a(5),s=(a(52),a(53),a(54),a(18)),u=a(14),d=a(8),p="GET_PRODUCTS",m="GET_PRODUCT",h={};var f=Object(u.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(d.a)(Object(d.a)({},e),{},{products:Object(d.a)(Object(d.a)({},e.products),t.payload)});case m:return Object(d.a)(Object(d.a)({},e),{},{product:Object(d.a)({},t.payload)});default:return Object(d.a)({},e)}}}),E=a(34),b="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,g=Object(u.e)(f,b(Object(u.a)(E.a))),v=a(80),O=a(35),j=a(36),w=a(45),y=a(42);var S=function(e){var t=e.item,a=e.productDetailsHandler;return r.a.createElement("li",null,r.a.createElement("div",{onClick:function(){return a(t)},className:"item-card"},r.a.createElement("img",{alt:t.Title,src:t.Poster}),r.a.createElement("span",null,t.Title)))},M=a(37),N=a(38),D=a(39),k=a(15),R=a(44),C=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).productDetailsHandler=function(e){n.props.getProduct(e.imdbID),n.handleDescModal()},n.handleDescModal=function(){n.setState({descModal:!n.state.descModal})},n.filterItems=function(){return n.props.products&&n.props.products.filter((function(e){var t=e.Title.toLowerCase(),a=n.state.searchString.toLowerCase();return t.includes(a)}))},n.handleSearchBarModal=function(){n.setState({searchBarModal:!0},(function(){n.inputRef.current.focus()}))},n.inputRef=r.a.createRef(),n.state={searchString:"",descModal:!1,productDetail:null},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getProducts()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"home-content main-content"},r.a.createElement("div",{className:"top-sec"},r.a.createElement("div",{className:"container"},!this.state.searchBarModal&&r.a.createElement("div",{className:"info"},r.a.createElement("span",{to:""},"Movies List"),r.a.createElement(M.a,{onClick:this.handleSearchBarModal,className:"icon search"})),this.state.searchBarModal&&r.a.createElement("div",{className:"search-bar"},r.a.createElement(N.a,{onClick:function(){return e.setState({searchBarModal:!1})},className:"icon left-arrow-icon"}),r.a.createElement("input",{ref:this.inputRef,placeholder:"Search",className:"search-input",value:this.state.searchString,onChange:function(t){e.setState({searchString:t.target.value})}}),r.a.createElement(D.a,{onClick:function(){return e.setState({searchString:""})},className:"icon close"})))),r.a.createElement("div",{className:"container container-products"},r.a.createElement("ul",{className:"products"},this.filterItems()&&this.filterItems().map((function(t,a){return r.a.createElement(S,{key:t.imdbID,item:t,productDetailsHandler:e.productDetailsHandler})}))),this.filterItems()&&0===this.filterItems().length&&r.a.createElement("div",{className:"no-records"},"No Records ")),r.a.createElement(k.a,{show:this.state.descModal,onHide:this.handleDescModal},r.a.createElement(k.a.Header,null,r.a.createElement(k.a.Title,null,"Description")),this.props.product&&r.a.createElement(k.a.Body,null,r.a.createElement("span",null,this.props.product.Title),r.a.createElement("span",null,"Year: ",this.props.product.Year),this.props.product.imdbRating&&"N/A"!==this.props.product.imdbRating&&r.a.createElement("strong",null,"boxoffice:"," ",parseFloat(this.props.product.imdbRating)>7&&"hit",parseFloat(this.props.product.imdbRating)<=7&&"flop"),r.a.createElement("p",null,this.props.product.Plot)),r.a.createElement(k.a.Footer,null,r.a.createElement(R.a,{variant:"secondary",onClick:this.handleDescModal},"Close"))))}}]),a}(r.a.Component),P=a(41),I={API_URL:"http://www.omdbapi.com"},T=a.n(P).a.create({baseURL:I.API_URL}),_=function(e){return{type:p,payload:e}},B=function(e){return{type:m,payload:e}},L=Object(s.b)((function(e){return{products:Object(v.a)(["products","products","Search"],e),loading:Object(v.a)(["products","products","loading"],e),product:Object(v.a)(["products","product"],e)}}),(function(e){return{getProducts:function(t){return e((function(e){return new Promise((function(t,a){e(_({loading:!0})),T({method:"get",url:"/?s=x men&y=2000&apikey=f82e2f54"}).then((function(a){e(_(Object(d.a)(Object(d.a)({},a.data),{},{loading:!1}))),t(a)})).catch((function(e){console.log(e),a()}))}))}))},getProduct:function(t){return e(function(e){return function(t){return new Promise((function(a,n){t(B({loading:!0})),T({method:"get",url:"/?i=".concat(e,"&plot=full&apikey=f82e2f54")}).then((function(e){t(B(Object(d.a)(Object(d.a)({},e.data),{},{loading:!1}))),a(e)})).catch((function(e){console.log(e),n()}))}))}}(t))}}}))(C);var H=function(){return r.a.createElement(s.a,{store:g},r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(L,null)),r.a.createElement(i.a,{exact:!0,path:"/react-workshop-diagnal"},r.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.a889839f.chunk.js.map