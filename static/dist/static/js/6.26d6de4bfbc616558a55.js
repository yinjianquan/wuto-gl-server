webpackJsonp([6],{161:function(t,e,n){n(196);var i=n(16)(n(171),n(207),"data-v-468c0d8c",null);t.exports=i.exports},171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),a=n.n(i),s=n(27);e.default={data:function(){return{}},computed:n.i(s.a)(["userInfo","isLogin"]),created:function(){this.isLogin||this.$router.push({name:"login"})},mounted:function(){this.UPDATE_TITLE("个人信息")},methods:a()({},n.i(s.b)(["UPDATE_TITLE","EDIT_USER"]),{toUpdate:function(t,e){var n=this.userInfo[e],i={title:t,option:e,optionValue:n};this.EDIT_USER(i),this.$router.push({name:"edit",params:{}})},logout:function(){this.$router.push({name:"login"})}})}},184:function(t,e,n){e=t.exports=n(156)(!0),e.push([t.i,".portrait[data-v-468c0d8c]{padding:0 10px;height:75px;background:#fff;margin-top:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.portrait img[data-v-468c0d8c]{width:60px;height:60px}.portrait span[data-v-468c0d8c]{margin-left:10px}.item[data-v-468c0d8c]{margin-top:10px}.mint-cell[data-v-468c0d8c]{color:#000}","",{version:3,sources:["/Users/yinjianquan/Documents/wotu/yidong/wt-manage/src/views/account/index.vue"],names:[],mappings:"AACA,2BACE,eAAgB,AAChB,YAAa,AACb,gBAAiB,AACjB,gBAAiB,AACjB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,uBAAwB,AACpB,oBAAqB,AACjB,2BAA4B,AACpC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC7B,AACD,+BACI,WAAY,AACZ,WAAa,CAChB,AACD,gCACI,gBAAkB,CACrB,AACD,uBACE,eAAiB,CAClB,AACD,4BACE,UAAY,CACb",file:"index.vue",sourcesContent:["\n.portrait[data-v-468c0d8c] {\n  padding: 0 10px;\n  height: 75px;\n  background: #fff;\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.portrait img[data-v-468c0d8c] {\n    width: 60px;\n    height: 60px;\n}\n.portrait span[data-v-468c0d8c] {\n    margin-left: 10px;\n}\n.item[data-v-468c0d8c] {\n  margin-top: 10px;\n}\n.mint-cell[data-v-468c0d8c] {\n  color: #000;\n}\n"],sourceRoot:""}])},196:function(t,e,n){var i=n(184);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(157)("19743892",i,!0)},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"me"},[n("mt-index-list",[n("div",{staticClass:"portrait"},[n("img",{attrs:{src:t.userInfo.headImg,alt:"头像"}}),t._v(" "),n("span",{nativeOn:{click:function(e){t.toUpdate("昵称","nickName")}}},[t._v(t._s(t.userInfo.nickName||"未设置"))]),t._v(" "),n("span",{style:{color:1==t.userInfo.sex?"rgb(50, 154, 228)":"rgb(212, 79, 196)",fontWeight:"bold",marginLeft:"4px"},domProps:{textContent:t._s(1==t.userInfo.sex?"♂":"♀")}})]),t._v(" "),n("div",{staticClass:"item"},[n("mt-cell",{attrs:{title:"手机号码","is-link":"",value:t.userInfo.phone},nativeOn:{click:function(e){t.toUpdate("手机号码","phone")}}}),t._v(" "),n("mt-cell",{attrs:{title:"真实姓名","is-link":"",value:t.userInfo.realName||"未设置"},nativeOn:{click:function(e){t.toUpdate("真实姓名","realName")}}}),t._v(" "),n("mt-cell",{attrs:{title:"年龄","is-link":"",value:t.userInfo.age||"未设置"},nativeOn:{click:function(e){t.toUpdate("年龄","age")}}}),t._v(" "),n("mt-cell",{attrs:{title:"籍贯","is-link":"",value:t.userInfo.nativePlace||"未设置"},nativeOn:{click:function(e){t.toUpdate("籍贯","nativePlace")}}}),t._v(" "),n("mt-cell",{attrs:{title:"github地址","is-link":"",value:t.userInfo.github||"未设置"},nativeOn:{click:function(e){t.toUpdate("github地址","github")}}})],1),t._v(" "),n("div",{staticClass:"item"},[n("mt-cell",{attrs:{title:"常用开发技术"}}),t._v(" "),n("mt-cell",{attrs:{title:t.userInfo.skillTree,"is-link":"",value:t.userInfo.skillTree?"":"未设置"},nativeOn:{click:function(e){t.toUpdate("常用开发技术","skillTree")}}})],1),t._v(" "),n("div",{staticClass:"item"},[n("mt-cell",{attrs:{title:"公司","is-link":"",value:t.userInfo.company||"未设置"},nativeOn:{click:function(e){t.toUpdate("公司","company")}}}),t._v(" "),n("mt-cell",{attrs:{title:"权限","is-link":"",value:t.userInfo.jurisdiction||"未设置"},nativeOn:{click:function(e){t.toUpdate("权限","jurisdiction")}}})],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=6.26d6de4bfbc616558a55.js.map