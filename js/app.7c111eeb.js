(function(t){function a(a){for(var n,o,c=a[0],i=a[1],l=a[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,c=1;c<e.length;c++){var i=e[c];0!==s[i]&&(n=!1)}n&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},s={app:0},r=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/vue_shop/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=i;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0536":function(t,a,e){"use strict";var n=e("92cc"),s=e.n(n);s.a},1214:function(t,a,e){},"1bec":function(t,a,e){"use strict";var n=e("1214"),s=e.n(n);s.a},"1e3b":function(t,a,e){"use strict";var n=e("b3f8"),s=e.n(n);s.a},"1fe5":function(t,a,e){},"2aae":function(t,a,e){"use strict";var n=e("a2dc"),s=e.n(n);s.a},"35d5":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),s=e("bc3a"),r=e.n(s),o=e("a7fe"),c=e.n(o),i=(e("1157"),e("4989"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view"),e("Shoppingcar")],1)}),l=[],u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.throwcar?e("div",{staticClass:"container"},[e("div",{staticClass:"shoping-t",on:{click:t.closecar}},[e("h1",[t._v("CART")])]),t._l(t.shoppingcar,(function(a){return e("div",{key:a.name,staticClass:"shoping ml-3"},[e("div",{staticClass:"shoping-car-item"},[e("img",{attrs:{src:a.imgUrl,alt:""}}),e("div",{staticClass:"shopinc-car-content"},[e("h5",[t._v(t._s(a.name))]),e("h5",[t._v("$"+t._s(a.price))]),e("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[e("ul",{staticClass:"counter"},[e("li",{attrs:{id:"minus"},on:{click:function(e){return t.del(a.name)}}},[e("input",{attrs:{type:"button",value:"-"}})]),e("li",{attrs:{id:"countnum"}},[t._v(t._s(a.count))]),e("li",{attrs:{id:"plus"},on:{click:function(e){return t.add(a.name)}}},[e("input",{attrs:{type:"button",value:"+"}})])])])])])])}))],2):t._e()},p=[],d=e("5530"),m=e("2f62"),v={name:"Shoppingcar",props:[],data:function(){return{shopcar:!1}},methods:{toggle:function(){this.shopcar=!this.shopcar,console.log(this.shopcar)},closecar:function(){this.$store.dispatch("Closecar")},add:function(t){this.$store.dispatch("Additemcount",t)},del:function(t){this.$store.dispatch("Delitemcount",t)}},computed:Object(d["a"])({},Object(m["b"])(["throwcar","shoppingcar"])),watch:{}},f=v,h=(e("0536"),e("2877")),b=Object(h["a"])(f,u,p,!1,null,"4c5fde98",null),g=b.exports,_={components:{Shoppingcar:g}},C=_,y=(e("5c0b"),Object(h["a"])(C,i,l,!1,null,null,null)),O=y.exports,S=e("8c4f"),w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("Navbar"),e("Carousell"),e("h1",{staticClass:"color-green"},[t._v("/MOST POPULAR")]),e("Product",{attrs:{num:t.num}}),e("Footer")],1)},k=[],E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light",staticStyle:{"background-color":"#fff"}},[t._m(0),e("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"navbarNavAltMarkup"}},[e("div",{staticClass:"navbar-nav mt-5"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"nav-item nav-link  mr-lg-4",attrs:{href:"#"}},[t._v("Home")])]),e("router-link",{attrs:{to:"/shop"}},[e("a",{staticClass:"nav-item nav-link   mr-lg-4",attrs:{href:"#"}},[t._v("Shop")])]),e("router-link",{attrs:{to:"/about"}},[e("a",{staticClass:"nav-item nav-link mr-lg-4",attrs:{href:"#"}},[t._v("About Me")])]),e("a",{staticClass:"navbar-brand mr-lg-4",attrs:{href:"#"}},[t._v("Sport's Hunt")]),e("a",{staticClass:"nav-item nav-link mr-lg-4",attrs:{href:"#"}},[t._v("Instgram")]),e("a",{staticClass:"nav-item nav-link mr-lg-4",attrs:{href:"#"}},[t._v(" Facebook")]),e("a",{staticClass:"nav-item nav-link",attrs:{href:"#"}},[t._v("Youtube")]),e("a",{staticClass:" nav-link ml-lg-4",on:{click:t.togglecar}},[t._v("Car")])],1)])])},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}],x={name:"Navbar",methods:{togglecar:function(){this.$store.dispatch("Togglecar")}}},A=x,P=Object(h["a"])(A,E,j,!1,null,"54ebb275",null),$=P.exports,T=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box mt-5"},[e("div",{staticClass:"carousel slide carousel-fade",attrs:{id:"carouselExampleFade","data-ride":"carousel"}},[e("div",{staticClass:"carousel-inner"},[e("div",{staticClass:"carousel-item active"},[e("img",{staticClass:"d-block img-fluid",attrs:{src:"https://picsum.photos/1260/700/?seed=1",alt:"..."}}),e("div",{staticClass:"carousel-caption text-left mb-5 ml-n5"},[e("h1",{staticClass:"display-4 ml-n5"},[t._v("100% HAND-MADE")]),e("h1",{staticClass:"display-4 ml-n5"},[t._v("COMFORTABLE")]),e("h1",{staticClass:"display-4 mb-5 ml-n5"},[t._v("LIGHT")])])]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block img-fluid",attrs:{src:"https://picsum.photos/1260/700/?seed=2",alt:"..."}}),e("div",{staticClass:"carousel-caption text-left mb-5 ml-n5"},[e("h1",{staticClass:"display-4 ml-n5"},[t._v("100% HAND-MADE")]),e("h1",{staticClass:"display-4 ml-n5"},[t._v("COMFORTABLE")]),e("h1",{staticClass:"display-4 mb-5 ml-n5"},[t._v("LIGHT")])])]),e("div",{staticClass:"carousel-item"},[e("img",{staticClass:"d-block img-fluid",attrs:{src:"https://picsum.photos/1260/700/?seed=3",alt:"..."}}),e("div",{staticClass:"carousel-caption text-left mb-5 ml-n5"},[e("h1",{staticClass:"display-4 ml-n5"},[t._v("100% HAND-MADE")]),e("h1",{staticClass:"display-4 ml-n5"},[t._v("COMFORTABLE")]),e("h1",{staticClass:"display-4 mb-5 ml-n5"},[t._v("LIGHT")])])])])])])}],F={name:"Carousell"},N=F,D=(e("c088"),Object(h["a"])(N,T,M,!1,null,"7d6bdf39",null)),H=D.exports,I=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},t._l(t.throwdata,(function(a,n){return e("div",{key:a.name},[n<t.num&2!=n?e("div",{staticClass:"card",on:{click:function(e){return t.addtocar(a)}}},[e("img",{staticClass:"card-img-top",attrs:{src:a.imgUrl}}),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(a.name))]),e("p",{staticClass:"card-text"},[t._v("$"+t._s(a.price))])])]):t._e()])})),0)},R=[],B={name:"Product",props:["num"],methods:{test:function(){console.log(this.$store)},addtocar:function(t){this.$store.dispatch("Addcarlist",t)}},created:function(){this.$store.dispatch("Getproduct")},computed:Object(d["a"])({},Object(m["b"])(["throwdata"]))},L=B,U=(e("a17f"),Object(h["a"])(L,I,R,!1,null,"5ba23e65",null)),G=U.exports,Y=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer-ls"},[e("ul",[e("li",[t._v("SHOP:")]),e("li",[t._v("About")]),e("li",[t._v("FAQ")]),e("li",[t._v("Shipping / Pick Up ")]),e("li",[t._v("Store Policy")]),e("li",[t._v("Contact Me")])]),e("ul",[e("li",[t._v("OPENIN")]),e("li",[t._v("Mon - Fri: 7am - 10pm")]),e("li",[t._v("Saturday: 8am - 10pm")]),e("li",[t._v("Saturday: 8am - 11pm")])]),e("ul",[e("li",[t._v("ADDRESS")]),e("li",[t._v("543 Betty Francois")]),e("li",[t._v("Street Fan Francisco")]),e("li",[t._v("CGA 4158 ")])]),e("ul",[e("li",[t._v("SUBSCRIPTION")]),e("li",[e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v("SUBSCRIBE NOW")])]),e("li")])]),e("div",[e("a",[t._v("© 2023 by Sport's Hunt. ")])])])}],K={name:"Footer"},W=K,Q=(e("7ea4"),Object(h["a"])(W,Y,J,!1,null,"cd5995d8",null)),q=Q.exports,z={name:"Home",components:{Navbar:$,Carousell:H,Product:G,Footer:q},data:function(){return{num:4}}},V=z,X=(e("1e3b"),Object(h["a"])(V,w,k,!1,null,null,null)),Z=X.exports,tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Shop"},[e("Navbar"),e("h1",{staticClass:"color-green"},[t._v("/CHOSE YOUR STYLE")]),e("Product",{attrs:{num:t.num}}),e("Footer")],1)},at=[],et={name:"Shop",components:{Navbar:$,Product:G,Footer:q},data:function(){return{num:7}}},nt=et,st=(e("1bec"),Object(h["a"])(nt,tt,at,!1,null,null,null)),rt=st.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Shop"},[e("Navbar"),e("Profile"),e("Footer"),e("Shoppingcar")],1)},ct=[],it=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"profile-box"},[e("div",{staticClass:"p-img mt-5"}),e("div",{staticClass:"infomation"},[e("h1",[t._v("My STORY")]),e("a",[t._v("My name is David. I hold a bachelor’s degree with a major in Economics which was awarded to me by Fu-Jen University in Taipei in 2000. Besides my major, I have also taken many course related to computer science like Data Management, C-Language and Calculus, which have prepared me for software programming in the field of finance and investment.")]),e("br"),e("br"),e("a",[t._v("Moreover, I was not only active in the university but also a participant in a 1998 International Conference of Web Technology Development in Taiwan. The experience brought me into contact with professional societies and helped me improve my social skills when interacting and communicating with professional people. This experience also taught me how to work with people efficiently.")])])])}],ut={name:"Profile"},pt=ut,dt=(e("6fee"),Object(h["a"])(pt,it,lt,!1,null,"bfcb2f70",null)),mt=dt.exports,vt={name:"Shop",components:{Navbar:$,Footer:q,Profile:mt,Shoppingcar:g}},ft=vt,ht=(e("2aae"),Object(h["a"])(ft,ot,ct,!1,null,null,null)),bt=ht.exports;n["a"].use(S["a"]);var gt=[{path:"/",name:"Home",component:Z},{path:"/about",name:"About",component:bt},{path:"/shop",name:"Shop",component:rt}],_t=new S["a"]({mode:"history",base:"/vue_shop/",routes:gt}),Ct=_t;e("7db0"),e("4160"),e("b0c0"),e("159b");n["a"].use(m["a"],r.a);var yt=new m["a"].Store({state:{products:[],shoppingcar:[],shopcar:!1},mutations:{add:function(t,a){a.forEach((function(t){t.count=1})),console.log(a),t.products=a},addshop:function(t,a){var e=t.shoppingcar.find((function(t){return t.name==a.name}));e||(t.shoppingcar.push(a),console.log(t.shoppingcar))},togglecar:function(t){t.shopcar=!t.shopcar},closecar:function(t){t.shopcar=!1},additemcount:function(t,a){t.shoppingcar.forEach((function(t){a==t.name&&(console.log("OK"),t.count=t.count+1)})),console.log(t.products)},delitemcount:function(t,a){t.shoppingcar.forEach((function(t){a==t.name&t.count>0&&(console.log("OK"),t.count=t.count-1)}))}},actions:{Getproduct:function(t){var a=t.commit,e="https://my-json-server.typicode.com/jubs16/Products/Products";r.a.get(e).then((function(t){return console.log(t.data),t.data})).then((function(t){a("add",t)}))},Addcarlist:function(t,a){var e=t.commit;e("addshop",a)},Togglecar:function(t){var a=t.commit;a("togglecar")},Closecar:function(t){var a=t.commit;a("closecar")},Additemcount:function(t,a){var e=t.commit;console.log(a),e("additemcount",a)},Delitemcount:function(t,a){var e=t.commit;e("delitemcount",a)}},getters:{throwdata:function(t){return t.products},throwcar:function(t){return t.shopcar},shoppingcar:function(t){return t.shoppingcar}}});n["a"].use(c.a,r.a),n["a"].config.productionTip=!1,new n["a"]({router:Ct,store:yt,render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var n=e("9c0c"),s=e.n(n);s.a},"6fee":function(t,a,e){"use strict";var n=e("aa7f"),s=e.n(n);s.a},"7ea4":function(t,a,e){"use strict";var n=e("1fe5"),s=e.n(n);s.a},"8eec":function(t,a,e){},"92cc":function(t,a,e){},"9c0c":function(t,a,e){},a17f:function(t,a,e){"use strict";var n=e("35d5"),s=e.n(n);s.a},a2dc:function(t,a,e){},aa7f:function(t,a,e){},b3f8:function(t,a,e){},c088:function(t,a,e){"use strict";var n=e("8eec"),s=e.n(n);s.a}});
//# sourceMappingURL=app.7c111eeb.js.map