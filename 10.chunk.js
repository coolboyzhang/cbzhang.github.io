webpackJsonp([10],{"./app/containers/Notebook/index.js":function(e,t,o){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments[1];switch(t.type){case C:return e;case P:return e.set("list",Object(x.fromJS)(t.data));case R:return e.set("tagsBmob",Object(x.fromJS)(t.data||{})).set("tags",Object(x.fromJS)(t.data?t.data.notebook:[]));case A:var o=E.a.get("uName");return E.a.set("p_n_select_tags_"+o,t.data||[],!0),e.set("sTags",Object(x.fromJS)(t.data||[]));default:return e}}function r(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},H,this)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function f(e){return{type:P,data:e}}function p(e){return{type:A,data:e}}function d(e){return{type:R,data:e}}function v(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function h(e){return{updateNotebook:function(t){return e(f(t))},selectTags:function(t){return e(p(t))},changeTags:function(t){return e(d(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var y=o("./node_modules/_react@16.5.2@react/index.js"),_=o.n(y),k=(o("./node_modules/_prop-types@15.5.10@prop-types/index.js"),o("./node_modules/_react-redux@5.0.5@react-redux/es/index.js")),j=o("./node_modules/_react-helmet@5.1.3@react-helmet/lib/Helmet.js"),O=o("./node_modules/_reselect@3.0.1@reselect/es/index.js"),N=o("./node_modules/_redux@3.6.0@redux/es/index.js"),T=o("./app/utils/injectSaga.js"),w=o("./app/utils/injectReducer.js"),I=function(e){return e.get("notebook")},S=function(){return Object(O.a)(I,function(e){return e.toJS()})},B=S,x=o("./node_modules/_immutable@3.8.1@immutable/dist/immutable.js"),E=o("./app/utils/Storage.js"),C="app/Notebook/DEFAULT_ACTION",P="app/Notebook/UPDATE_NOTEBOOK",A="app/Notebook/SELECT_TAGS",R="app/Notebook/CHANGE_TAGS",J=Object(x.fromJS)({list:[],tags:[],sTags:[],tagsBmob:{}}),q=n,H=regeneratorRuntime.mark(r),U=o("./node_modules/_antd@3.5.2@antd/lib/index.js"),D=o("./app/utils/timer.js"),M=o("./app/utils/stringHelper.js"),Y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),$=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),L=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),$(t,[{key:"render",value:function(){var e=this,t=this.props.info;return Y("div",{className:"inline-block vat",style:{width:"20%",margin:"10px 2.5%"}},void 0,Y(U.Card,{onClick:function(){window.location="#/kit/notebook/detail/?id="+e.props.info.objectId},title:t.title||"无题",hoverable:!0},void 0,Y("div",{style:{minHeight:"100px",wordBreak:"break-all"}},void 0,t.content?Object(M.d)(t.content,57):"啥都没有。。。"),Y("div",{className:"pull-right ft_12 fc_999"},void 0,"上次编辑时间：",Object(D.a)(t.lastEdit).str("YY-M-D HH:mm:ss"))))}}]),t}(_.a.PureComponent),W=L,z=o("./app/utils/arrayHelper.js"),G=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),F=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),K=U.Input.TextArea,Q=U.Select.Option,V=G("a",{href:"#/kit/notebook/"},void 0,G(U.Icon,{type:"arrow-left",className:"pointer ft_20 mr_10 mt_5 vat"})),X=function(e){function t(e){c(this,t);var o=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.state={tags:e.tags,edit:e.edit,editInfo:JSON.parse(JSON.stringify(e.info))},o}return l(t,e),F(t,[{key:"componentWillReceiveProps",value:function(e){e.tags.length===this.state.tags?this.setState({edit:e.edit,editInfo:JSON.parse(JSON.stringify(e.info))}):this.setState({tags:e.tags})}},{key:"changeInfo",value:function(e,t){var o=this.props.tags,n=this.state.editInfo;if(n[t]=e,"tags"===t){var r=z.a.delDuplicate(o,e);r.length>o.length&&this.props.updateTags(r)}this.setState({editInfo:n})}},{key:"changeEdit",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var o=this,n=function(){U.message.success("保存成功~"),o.changeEdit(e,!1)};this.props.saveChange(this.state.editInfo,n)}Object(M.a)({edit:!e}),this.setState({edit:!e,editInfo:t?this.state.editInfo:JSON.parse(JSON.stringify(this.props.info))})}},{key:"delNote",value:function(){var e=this;U.Modal.confirm({title:"删除",content:"确定要删除"+this.props.info.title+"？",okText:"确认",cancelText:"取消",onOk:function(){e.props.delNote(e.props.info.objectId)}})}},{key:"render",value:function(){var e=this,t=this.props.info,o=this.state,n=o.edit,r=o.editInfo,i=o.tags;return G("div",{},void 0,G("div",{className:"title mb_15"},void 0,G("span",{className:"ft_18"},void 0,n?G("div",{},void 0,G(U.Input,{style:{width:"300px",fontSize:"18px"},className:"inline-block",size:"large",onChange:function(t){return e.changeInfo(t.target.value,"title")},value:r.title}),G(U.Tooltip,{placement:"top",title:"要不要标为重要"},void 0,G(U.Icon,{type:r.star?"star":"star-o",className:"ml_20 pointer",style:{color:r.star?"#ffcc00":"#999",fontSize:"40"},onClick:function(){return e.changeInfo(!r.star,"star")}}))):G("span",{},void 0,V,t.title||"无题")),G("span",{className:"pull-right"},void 0,G(U.Button,{type:"primary",onClick:function(){return e.changeEdit(n,n)},className:"mr_10"},void 0,n?"保存":"编辑"),n?G("div",{className:"inline-block"},void 0,G(U.Button,{type:"primary",className:"mr_10",onClick:function(){return e.changeEdit(!1,!0)}},void 0,"暂存"),G(U.Button,{onClick:function(){return e.changeEdit(n,!1)}},void 0,"取消")):G(U.Button,{type:"danger",onClick:function(){return e.delNote()}},void 0,"删除"))),n?G("div",{},void 0,"标签：",G(U.Select,{className:"mr_20",style:{minWidth:"200px"},value:r.tags,mode:"tags",placeholder:"Select tags",onChange:function(t){return e.changeInfo(t,"tags")}},void 0,i.map(function(e){return G(Q,{value:e},"tag-o-"+e,e)})),"(tips: 也可以直接在输入框中新增一个标签)"):0!==t.tags.length&&G("div",{className:"mt_20 ft_12"},void 0,"标签：",t.tags.join(", ")),G("div",{className:"info-content mt_20 pt_20",style:{borderTop:"1px solid #ccc"}},void 0,n?G(K,{placeholder:"markdown语法～",autosize:{minRows:6},value:r.content,onChange:function(t){return e.changeInfo(t.target.value,"content")}}):G("div",{id:"notebook-pre"},void 0,G("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:Object(M.c)(r.content)}})||"啥也没有。。。")),G("div",{className:"pull-right ft_12 fc_999 text-right mt_20"},void 0,G("div",{},void 0,"创建时间：",Object(D.a)(t.createTime).str("YY-M-D HH:mm:ss")),G("div",{},void 0,"上次编辑时间：",Object(D.a)(t.lastEditTime).str("YY-M-D HH:mm:ss"))))}}]),t}(_.a.Component),Z=X,ee=o("./app/utils/recentlyUsed.js"),te=o("./app/containers/App/selectors.js"),oe=o("./app/containers/App/index.js");o.d(t,"Notebook",function(){return ue});var ne=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var s in i)void 0===o[s]&&(o[s]=i[s]);else o||(o=i||{});if(1===a)o.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}(),re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},ie=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=U.Select.Option,se=ne(j.Helmet,{},void 0,ne("title",{},void 0,"记事本"),ne("meta",{name:"记事本",content:"记事本"})),ce=ne(U.Icon,{type:"arrow-left",className:"pointer ft_20 mr_20 mt_5 vat"}),ue=function(e){function t(){return b(this,t),m(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return g(t,e),ie(t,[{key:"componentWillMount",value:function(){Object(oe.a)("记事本")?(this.queryNoteBooks(),this.queryAllTags(),ee.a.set("记事本","kit")):this.props.updateNotebook([])}},{key:"componentDidMount",value:function(){var e=this.props.user,t=E.a.get("p_n_select_tags_"+e.username,!0,"[]");this.props.selectTags(t)}},{key:"componentWillReceiveProps",value:function(e){if(e.user.objectId&&e.user.objectId!==this.props.user.objectId){this.queryNoteBooks(null,e.user),this.queryAllTags(e.user);var t=e.user,o=E.a.get("p_n_select_tags_"+t.username,!0,"[]");this.props.selectTags(o)}}},{key:"queryNoteBooks",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.user;o.login&&E.a.queryBmob("Notebook",function(e){return e.equalTo("userId",o.objectId),e.limit(1e3),e},function(o){var n=o||[];n.sort(function(e,t){return Boolean(t.star)!==Boolean(e.star)?Boolean(t.star)-Boolean(e.star):t.lastEdit-e.lastEdit}),t.props.updateNotebook(n.map(function(e){return re({},e,{title:decodeURI(decodeURI(e.title)),content:decodeURI(decodeURI(e.content))})})),e&&e()},function(){U.message.error("找着找着就出问题了 = =||")},"find")}},{key:"createNote",value:function(){var e=this,t=this.props.user;t.login&&E.a.createBmob("Notebook",{userId:t.objectId,created:Object(D.a)().time,lastEdit:Object(D.a)().time,title:"",content:"",tags:[]},function(t){e.queryNoteBooks(function(){window.location="#/kit/notebook/detail/?id="+t.id+"&edit=true"})},function(){U.message.error("创建失败 = =||")})}},{key:"queryAllTags",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.user;E.a.queryBmob("Tags",function(e){return e.equalTo("userId",t.objectId),e},function(t){e.props.changeTags(t)})}},{key:"updateTags",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return U.message.success("新增成功~")},n=this.props,r=n.user,i=n.notebook,a=i.tagsBmob,s={userId:r.objectId,notebook:e},c=function(){t.queryAllTags(),o()};a.objectId?E.a.setBmob("Tags",a.objectId,s,c):E.a.createBmob("Tags",s,c)}},{key:"saveChange",value:function(e,t){var o=this,n=re({},JSON.parse(JSON.stringify(e)),{lastEdit:Object(D.a)().time,title:encodeURI(encodeURI(e.title)),content:encodeURI(encodeURI(e.content))});E.a.setBmob("Notebook",e.objectId,n,function(){return o.queryNoteBooks(t)},function(){return U.message.error("保存出问题了呀")})}},{key:"delNote",value:function(e){var t=this;E.a.delBmob("Notebook",e,function(){return t.queryNoteBooks(function(){return window.location="#/kit/notebook"})},function(){return U.message.error("删除出错啦")})}},{key:"clearTags",value:function(){var e=this,t=this.props.user,o=[];this.props.notebook.list.forEach(function(e){return o=[].concat(v(o),v(e.tags))}),o=z.a.delDuplicate(o),this.updateTags(o,function(){U.message.success("已清空空标签~"),e.props.selectTags(z.a.getDuplicate(o,E.a.get("p_n_select_tags_"+t.username,!0,"[]")))})}},{key:"render",value:function(){var e=this,t=this.props,o=t.location,n=t.notebook,r=t.selectTags,i="/kit/notebook/detail/"!==o.pathname,a={},s=!1;if(!i){var c=Object(M.b)();a=n.list.find(function(e){return e.objectId===c.id}),a?s=!!c.edit&&JSON.parse(c.edit):i=!0}var u=n.sTags.length>0?n.list.filter(function(e){return z.a.hasDuplicate(e.tags,n.sTags)}):n.list;return ne("div",{},void 0,se,ne("div",{},void 0,i&&ne("div",{},void 0,ne("a",{href:"#/kit/",style:{marginLeft:"2.5%"}},void 0,ce),ne(U.Button,{type:"primary",onClick:function(){return e.createNote()}},void 0,"新建"),ne("div",{className:"inline-block"},void 0,ne(U.Select,{value:n.sTags,className:"ml_20",style:{minWidth:"200px"},mode:"tags",placeholder:"Select tags",onChange:r},void 0,n.tags.map(function(e){return ne(ae,{value:e},"tag-o-"+e,e)})),ne(U.Button,{className:"ml_5",onClick:function(){return e.clearTags()},type:"danger"},void 0,"清空空标签")),0===u.length&&ne("div",{className:"mt_20",style:{marginLeft:"2.5%"}},void 0,"啥也没有，还不快去记笔记"),ne("div",{className:"mt_15"},void 0,u.map(function(e){return ne(W,{info:e},"nb-"+e.objectId)}))),!i&&ne(Z,{edit:s,tags:n.tags||[],updateTags:function(t){return e.updateTags(t)},delNote:function(t){return e.delNote(t)},saveChange:function(t){return e.saveChange(t)},info:a})))}}]),t}(_.a.PureComponent),le=Object(O.b)({notebook:B(),user:Object(te.b)()}),fe=Object(k.b)(le,h),pe=Object(w.a)({key:"notebook",reducer:q}),de=Object(T.a)({key:"notebook",saga:r});t.default=Object(N.c)(pe,de,fe)(ue)}});