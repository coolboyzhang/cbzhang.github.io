(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-307c"],{4274:function(t,s,a){"use strict";var e=a("f689"),n=a.n(e);n.a},"504c":function(t,s,a){var e=a("0d58"),n=a("6821"),i=a("52a7").f;t.exports=function(t){return function(s){var a,o=n(s),l=e(o),c=l.length,r=0,u=[];while(c>r)i.call(o,a=l[r++])&&u.push(t?[a,o[a]]:o[a]);return u}}},6410:function(t,s,a){"use strict";var e=a("fb29"),n=a.n(e);n.a},8615:function(t,s,a){var e=a("5ca1"),n=a("504c")(!1);e(e.S,"Object",{values:function(t){return n(t)}})},bb6c:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"tag-container"},[a("el-radio-group",{on:{change:t.changeOwner},model:{value:t.tagOwner,callback:function(s){t.tagOwner=s},expression:"tagOwner"}},[a("el-radio-button",{attrs:{label:"系统"}}),a("el-radio-button",{attrs:{label:"我的"}})],1),a("div",{staticClass:"tag-list"},[a("div",{class:""===t.tag?"selected tag-item":"tag-item",on:{click:function(s){t.selectTag("")}}},[t._v("全部")]),t._l(t.tags,function(s,e){return a("div",{key:"tag-"+e,class:t.tag===s?"selected tag-item":"tag-item",on:{click:function(a){t.selectTag(s)}}},[t._v("\n        "+t._s(s)+"\n      ")])})],2)],1),a("div",{staticClass:"song-container"},[a("SongList",{attrs:{isSys:"系统"===t.tagOwner,tag:t.tag}})],1)])},n=[],i=(a("cadf"),a("551c"),a("097d"),function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"song-list"},[t.hideHeader?t._e():a("div",{staticClass:"list-header song-item"},[a("span",{staticClass:"song-title"},[t._v("歌名")]),a("span",{staticClass:"song-artist"},[t._v("歌手")]),a("span",{staticClass:"song-album"},[t._v("专辑")])]),t._l(t.list,function(s){return a("div",{key:s.objectId,class:t.$store.state.playNow.objectId===s.objectId?"song-item playing":"song-item",on:{click:function(a){t.playMusic(s.objectId)}}},[a("span",{staticClass:"song-title"},[t._v(t._s(s.title))]),a("span",{staticClass:"song-artist"},[t._v(t._s(s.artist))]),a("span",{staticClass:"song-album"},[t._v(t._s(s.album))])])}),0===t.list.length?a("div",{staticClass:"empty-status"},[t._v("空空如也！")]):t._e()],2)}),o=[],l=(a("456d"),a("ac6a"),a("8615"),a("aa67"),{name:"SongList",props:{isSys:Boolean,tag:String,hideHeader:Boolean},watch:{tag:function(){this.updateList()}},data:function(){return{list:[]}},created:function(){this.updateList(!0)},methods:{updateList:function(t){var s=this.$store.state;Object.values(s.allSongs).length||setTimeout(this.updateList,100);var a=[],e={};if(this.isSys&&(e=s.sysSongs),this.tag){var n=e[this.tag]||[];a=n.map(function(t){return s.allSongs[t]})}else a=Object.values(s.allSongs);this.list=a,t&&this.playMusic(Object.keys(s.allSongs)[0],!1)},playMusic:function(t){var s=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=this.$store.state;s&&(this.$store.state.playing=!0);var e=this.list.map(function(t){return t.objectId});this.$store.commit("updatePlayNow",{obj:a.allSongs[t],list:e})}}}),c=l,r=(a("4274"),a("2877")),u=Object(r["a"])(c,i,o,!1,null,null,null);u.options.__file="SongList.vue";var g=u.exports,h={name:"Storehouse",components:{SongList:g},data:function(){return{tag:"",tags:[],tagOwner:"系统"}},mounted:function(){this.getTags()},methods:{getTags:function(){this.$store.state.sysTags.length||setTimeout(this.getTags,100),this.tags=this.$store.state.sysTags},selectTag:function(t){this.tag=t},changeOwner:function(){"系统"===this.tagOwner?this.tags=this.$store.state.sysTags:this.tags=[],this.tag=""}}},d=h,f=(a("6410"),Object(r["a"])(d,e,n,!1,null,null,null));f.options.__file="Storehouse.vue";s["default"]=f.exports},f689:function(t,s,a){},fb29:function(t,s,a){}}]);
//# sourceMappingURL=chunk-307c.96791baf.js.map