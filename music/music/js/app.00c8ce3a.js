(function(e){function t(t){for(var r,o,u=t[0],l=t[1],i=t[2],c=0,f=[];c<u.length;c++)o=u[c],a[o]&&f.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(f.length)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function u(e){return l.p+"music/js/"+({about:"about"}[e]||e)+"."+{about:"04b5f69a","chunk-1925":"c64fa2ed","chunk-25be":"45cee24d","chunk-307c":"16aa1405"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-1925":1,"chunk-25be":1,"chunk-307c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="music/css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-1925":"689bda00","chunk-25be":"271579bc","chunk-307c":"09dc9f9f"}[e]+".css",o=l.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],i=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(i===r||i===o))return t()}var c=document.getElementsByTagName("style");for(s=0;s<c.length;s++){u=c[s],i=u.getAttribute("data-href");if(i===r||i===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=s);var i,c=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,l.nc&&f.setAttribute("nonce",l.nc),f.src=u(e),i=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,c.appendChild(f)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var p=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"106f":function(e,t,n){},"21fa":function(e,t,n){},"3b9d":function(e,t,n){"use strict";var r=n("21fa"),o=n.n(r);o.a},"42e1":function(e,t,n){"use strict";n("c5f6");var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e=Number(e||0);var r=.499999999;return Number((e+n*r).toFixed(t))};t["a"]=r},"524c":function(e,t,n){"use strict";var r=n("6313"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("8afe"),o=(n("cadf"),n("551c"),n("097d"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"left-menu"},[n("el-menu",{attrs:{"default-active":"/"+e.defaultActive,router:!0}},[n("el-menu-item",{attrs:{index:"/me"}},[n("icon",{attrs:{name:"user"}})],1),n("el-menu-item",{attrs:{index:"/"}},[n("icon",{attrs:{name:"play-circle"}})],1),n("el-menu-item",{attrs:{index:"/storehouse"}},[n("icon",{attrs:{name:"hdd"}})],1),n("a",{staticClass:"text-center block fc_999 mt_10",attrs:{target:"_blank",href:"//jsososo.com"}},[n("span",{attrs:{target:"_blank"}},[e._v("So")])])],1)],1),n("div",{staticClass:"main-container"},[n("router-view"),n("Player")],1)])},s=[],u=(n("ac6a"),n("456d"),n("28a5"),n("aa67")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"player-container"},[n("div",[n("div",{staticClass:"control-btn"},[n("icon",{attrs:{name:"step-backward",scale:"1.5"}}),e.$store.state.playing?e._e():n("div",{staticClass:"inline-block",on:{click:function(t){e.$store.state.playing=!0}}},[n("icon",{attrs:{name:"play",scale:"1.5"}})],1),e.$store.state.playing?n("div",{staticClass:"inline-block",on:{click:function(t){e.$store.state.playing=!1}}},[n("icon",{attrs:{name:"pause",scale:"1.5"}})],1):e._e(),n("div",{staticClass:"inline-block",on:{click:function(t){e.$store.commit("playNext")}}},[n("icon",{attrs:{name:"step-forward",scale:"1.5"}})],1)],1),n("div",{staticClass:"inline-block progress-container"},[n("div",{staticClass:"song-info"},[n("span",[e._v(e._s(e.$store.state.playNow.title))]),n("span",{staticStyle:{"padding-left":"30px"}},[e._v(e._s(e.$store.state.playNow.artist))])]),n("div",{staticClass:"play-time"},[n("span",[e._v("\n          "+e._s(e.formatTooltip(e.currentTime))+"\n          /\n          "+e._s(e.formatTooltip(e.$store.state.playerInfo.duration))+"\n        ")])]),n("div",{staticClass:"progress",attrs:{id:"player-progress"}},[n("el-slider",{attrs:{"format-tooltip":e.formatTooltip,max:e.$store.state.playerInfo.duration},on:{change:function(t){return e.playerDom.currentTime=t}},model:{value:e.currentTime,callback:function(t){e.currentTime=t},expression:"currentTime"}})],1)]),n("div",{staticClass:"other-control inline-block",on:{mouseover:function(t){e.showVolume=!0},mouseout:function(t){e.showVolume=!1}}},[n("div",{staticClass:"volume-control"},[n("div",{class:e.showVolume?"":"hidden",staticStyle:{"margin-top":"10px"}},[n("el-slider",{attrs:{vertical:!0,height:"60px",max:100},on:{change:e.changeVolume},model:{value:e.volume,callback:function(t){e.volume=t},expression:"volume"}})],1),e.showVolume?e._e():n("icon",{staticStyle:{margin:"40px 10px"},attrs:{name:"volume-up",scale:"1.3"}})],1),n("div",{staticClass:"order-control"})])]),n("audio",{attrs:{id:"m-player",src:e.$store.state.playNow.url,controls:""}})])},i=[],c=n("42e1"),f={name:"PlayerPage",data:function(){return{playerDom:null,currentTime:0,volume:0,stopUpdateCurrent:!1,stopVolume:!1,showVolume:!1}},watch:{},mounted:function(){var e=this;this.playerDom=document.getElementById("m-player"),this.playerDom.volume=u["a"].get("volume")||1;var t=this.$store.state;if(t.playerDom=this.playerDom,!window.onMouseDownRange){var n=document.getElementsByClassName("el-slider__button el-tooltip"),r=["stopUpdateCurrent","stopVolume"];window.onMouseDownRange=!0,r.forEach(function(t,r){n[r].onmousedown=function(){e[t]=!0},n[r].onmouseup=function(){e[t]=!1}})}window.checkPlayer||(window.checkPlayer=setInterval(function(){var n=e.playerDom;if(!t.loading&&!t.playNow.url&&t.playNow.objectId){var r=t.playNow.objectId;t.loading=!0,e.getMusicInfo(r,function(e){t.playNow=e,t.allSongs[r]=e,t.loading=!1})}e.stopUpdateCurrent||(e.currentTime=t.playNow&&t.playNow.url?n.currentTime:0),e.stopVolume||(e.volume=100*n.volume),t.playing&&t.playNow&&t.playNow.url&&n.paused&&!n.ended&&n.play(),t.playing&&t.playNow.url||n.paused||n.pause(),t.playing&&n.ended&&t.playNow.url&&e.$store.commit("playNext"),e.$store.commit("updatePlayer",{duration:n.duration})},100))},methods:{getMusicInfo:function(e,t){u["a"].queryBmob("MusicSongs",function(t){return t.equalTo("objectId",e),t},t,function(){alert("down不下来")})},formatTooltip:function(e){return"".concat(Object(c["a"])(e/60,0,-1),":").concat(Object(c["a"])(e%60,0)<10?"0".concat(Object(c["a"])(e%60,0)):Object(c["a"])(e%60,0))},changeVolume:function(e){this.playerDom.volume=e/100,u["a"].set("volume",e/100)}}},p=f,m=(n("74c9"),n("2877")),d=Object(m["a"])(p,l,i,!1,null,null,null);d.options.__file="Player.vue";var v=d.exports,h={name:"App",components:{Player:v},data:function(){return{defaultActive:"/"}},created:function(){var e=this;this.defaultActive=window.location.hash.split("/")[1],u["a"].queryBmob("MusicTag",function(e){return e.equalTo("userId","a605fbce83"),e},function(t){e.$store.state.sysObjectId=t.objectId,e.$store.state.sysSongs=t.tags,e.$store.state.sysTags=Object.keys(t.tags)}),u["a"].queryBmob("MusicSongs",function(e){return e.select("artist","album","title"),e},function(t){var n={};t.forEach(function(e){return n[e.objectId]=e}),e.$store.state.allSongs=n},null,"find")}},g=h,b=(n("5c0b"),Object(m["a"])(g,a,s,!1,null,null,null));b.options.__file="App.vue";var y=b.exports,_=n("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},k=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._m(0),n("h3",[e._v("Installed CLI Plugins")]),e._m(1),n("h3",[e._v("Essential Links")]),e._m(2),n("h3",[e._v("Ecosystem")]),e._m(3)])},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),n("br"),e._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],O={name:"HelloWorld",props:{msg:String}},N=O,B=(n("524c"),Object(m["a"])(N,j,x,!1,null,"b6a59770",null));B.options.__file="HelloWorld.vue";var C=B.exports,T={name:"home",components:{HelloWorld:C}},$=T,E=Object(m["a"])($,w,k,!1,null,null,null);E.options.__file="Home.vue";E.exports;var S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  player page\n")])},I=[],P={name:"playerpage"},A=P,M=(n("3b9d"),Object(m["a"])(A,S,I,!1,null,"08c206da",null));M.options.__file="PlayerPage.vue";var V=M.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:"#/me/upload"}},[n("el-button",[e._v("自己上传一哈")])],1)])},L=[],q={name:"Me"},U=q,J=(n("cee3"),Object(m["a"])(U,D,L,!1,null,"070c8cc1",null));J.options.__file="Me.vue";var F=J.exports;o["default"].use(_["a"]);var H=new _["a"]({routes:[{path:"/",name:"player",component:V,meta:{title:"音乐哟"}},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/me/upload",name:"upload",meta:{title:"上传"},component:function(){return n.e("chunk-1925").then(n.bind(null,"2679"))}},{path:"/me",name:"me",meta:{title:"我的歌单"},component:F},{path:"/storehouse",name:"storehouse",component:function(){return n.e("chunk-307c").then(n.bind(null,"bb6c"))},meta:{title:"曲库"}},{path:"/development",name:"development",component:function(){return n.e("chunk-25be").then(n.bind(null,"e440"))},meta:{title:"大后门"}}]});H.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title),n()});var Q,W=H,z=n("2f62"),R=(n("0fae"),n("5c96")),Y=n.n(R),G=["722fd36cfde950349f5533aabbd33439","dc6d4b8254a412fb5896c1348fab2f5f"],K=(n("d06d"),n("0874"));(Q=Bmob).initialize.apply(Q,Object(r["a"])(G)),o["default"].use(Y.a,{size:"small"}),o["default"].component("icon",K["a"]),o["default"].use(z["a"]);var X=new z["a"].Store({state:{sysTags:[],allSongs:{},playNow:{},playing:!1,playingList:[],playerInfo:{duration:0,current:0,paused:!0},loading:!1},mutations:{updatePlayNow:function(e,t){e.playNow=t.obj,e.playingList=t.list||e.playingList},updatePlayer:function(e,t){e.playerInfo=t},playNext:function(e){var t=e.playNow.objectId,n=e.playingList.indexOf(t)+1;n===e.playingList.length&&(n=0),e.playNow=e.allSongs[e.playingList[n]]}}});new o["default"]({router:W,store:X,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("106f"),o=n.n(r);o.a},6313:function(e,t,n){},"74c9":function(e,t,n){"use strict";var r=n("dba3"),o=n.n(r);o.a},aa67:function(e,t,n){"use strict";n("7f7f"),n("28a5");var r=n("8afe"),o=(n("456d"),n("ac6a"),n("cadf"),n("551c"),n("097d"),n("5c96")),a=window.localStorage,s=function(e,t,n){e.save(null,{success:function(e){return t&&t(e)},error:function(e){return n&&n(e)}})},u=function(e,t){return Object.keys(t).forEach(function(n){e.set(n,t[n])}),e},l=function(e,t){var n=Bmob.Object.extend(e),r=new Bmob.Query(n);return t?t(r):r},i={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=a.getItem(e)||n;return t&&(r=JSON.parse(r)),r},set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t;n&&(r=JSON.stringify(r)),a.setItem(e,r)},getBmob:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return e},o=arguments.length>4?arguments[4]:void 0,a=Bmob.Object.extend(e),s=new Bmob.Query(a);s.get(t,{success:function(e){return r(n?e[n]:e)},error:function(e){return o&&o(e)}})},setBmob:function(e,t,n,r,o){var a=function(e){s(u(e,n),r,o)};this.getBmob(e,t,null,a,o)},createBmob:function(e,t,n,r){var o=Bmob.Object.extend(e),a=new o;s(u(a,t),n,r)},delBmob:function(e,t,n,r){var o=function(e){e.destroy({success:function(e){return n&&n(e)},error:function(e){return r&&r(e)}})};this.getBmob(e,t,null,o,r)},delBmobs:function(e,t,n,r){l(e,t).destroyAll({success:function(e){return n&&n(e)},error:function(e){return r&&r(e)}})},queryBmob:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"first",a=l(e,t);a[o]({success:function(e){return n&&n(e&&JSON.parse(JSON.stringify(e)))},error:function(e){return r&&r(e)}})},queryBmobOr:function(e,t,n,o,a){var s,u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"find",i=t.map(function(t){return l(e,t)}),c=n((s=Bmob.Query).or.apply(s,Object(r["a"])(i)));c.limit=1e3,c[u]({success:function(e){return o&&o(e&&JSON.parse(JSON.stringify(e)))},error:function(e){return a&&a(e)}})},singUp:function(e,t,n){var r=new Bmob.User;r.set("username",e),r.set("password",t),r.signUp(null,{success:n,error:function(){o["message"].error("注册失败了 = =||")}})},logIn:function(e,t){if(!e){var n=i.get("user");if(!n)return;e={username:n.split("-")[0],password:n.split("-")[1].split("").reverse().join("")}}var r=e,a=r.username,s=r.password;Bmob.User.logIn(a,s,{success:t,error:function(){o["message"].error("登录失败了 TAT")}})},updateUser:function(e,t){var n=Bmob.User.current();Object.keys(e).forEach(function(t){n.set(t,e[t])}),n.save(null,{success:function(){o["message"].success("修改成功(*^▽^*)");var n=i.get("user");n="".concat(e.username,"-").concat(n.split("-")[1]),i.set("user",n),t()},error:function(){o["message"].warning("保存失败了 QAQ")}})},saveFile:function(e,t,n){var r=new Bmob.File(e.name,e);r.save(function(n){t({url:n._url,name:e.name})},n)}};t["a"]=i},cee3:function(e,t,n){"use strict";var r=n("dba4"),o=n.n(r);o.a},cf05:function(e,t,n){e.exports=n.p+"music/img/logo.82b9c7a5.png"},dba3:function(e,t,n){},dba4:function(e,t,n){}});
//# sourceMappingURL=app.00c8ce3a.js.map