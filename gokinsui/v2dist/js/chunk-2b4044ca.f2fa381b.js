(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b4044ca","chunk-74ae09a0"],{"156b":function(t,n,e){},2602:function(t,n,e){},"2f14":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i=function(t){var n=!1;try{window.getSelection().removeAllRanges()}catch(i){console.log(i)}var e=document.createElement("textarea");e.value=t,document.body.appendChild(e);try{e.select(),n=document.execCommand("copy",!1,null)}catch(i){console.log(i)}return document.body.removeChild(e),n}},"455c":function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t._self._c;return n("div",[n("CCard",[n("CCardHeader",[n("i",{staticClass:"iconfont icon-zhipinku"}),t._v("  "),n("strong",[t._v(t._s(t.arty.name)+" ")]),n("small",[t._v("ID: "+t._s(t.arty.identifier))]),n("i",{directives:[{name:"c-tooltip",rawName:"v-c-tooltip.hover.click",value:"复制制品库ID",expression:"'复制制品库ID'",modifiers:{hover:!0,click:!0}}],staticClass:"iconfont icon-bianhao cpicn",on:{click:function(n){return n.stopPropagation(),t.copyIds(t.arty.identifier)}}}),n("div",{staticClass:"card-header-actions"},[1==t.perm.write?n("CButton",{attrs:{size:"sm",color:"primary",variant:"outline"},on:{click:function(n){t.selArt=!0}}},[t._v(" 修改制品库 ")]):t._e()],1)]),n("CCardBody",[n("PacklistView",{attrs:{items:t.packitems,loading:t.loading},scopedSlots:t._u([{key:"default",fn:function(t){t.item}}])})],1)],1),1==t.perm.write?n("EditArt",{attrs:{shown:t.selArt,orgId:t.arty.orgId,info:t.arty},on:{"update:shown":function(n){t.selArt=n},subOk:function(n){return t.getInfo(t.arty.id)}}}):t._e()],1)},r=[],o=e("841cd"),s=e("2f14"),c=e("e27f"),a=function(){var t=this,n=t._self._c;return n("div",[n("ul",{staticClass:"tlist"},t._l(t.items,(function(e){return n("li",{key:"art:"+e.id,on:{click:function(n){t.verItem=e,t.verShow=!0}}},[n("div",{staticClass:"tit"},[n("div",{staticClass:"tits"},[t._v(" "+t._s(e.name)+" "),n("span")]),"1"==e.disabled?n("div",{directives:[{name:"c-tooltip",rawName:"v-c-tooltip.hover.click",value:"无法在上传制品",expression:"'无法在上传制品'",modifiers:{hover:!0,click:!0}}],staticClass:"tips"},[t._v(" 已归档 ")]):t._e(),n("div",{staticStyle:{flex:"1"}}),n("div",{staticClass:"tipln"},[n("i",{directives:[{name:"c-tooltip",rawName:"v-c-tooltip.hover.click",value:"制品数量",expression:"'制品数量'",modifiers:{hover:!0,click:!0}}],staticClass:"iconfont icon-zhipinku"}),t._v("  "+t._s(e.verln)+" ")]),t._t("default",null,{item:e})],2),n("div",{staticClass:"infos"},[e.desc&&""!=e.desc?n("div",{staticClass:"fg"},[t._v(t._s(e.desc))]):t._e(),n("div",{staticClass:"fg"},[t._v(t._s(t.$dateFmt(e.created)))]),e.build&&""!=e.build.id?n("div",{staticClass:"fg"},[t._v("上一次构建: "+t._s(t.$dateFmt(e.build.created)))]):t._e(),n("div",{staticStyle:{flex:"1"}}),t._v(" 创建者:  "),n("myavatar",{staticClass:"avat",attrs:{src:e.avat,nick:e.nick,imgw:"18px"}})],1)])})),0),t.loading?n("div",{staticClass:"loadingCont"},[n("div",{staticStyle:{flex:"1"}}),t._m(0),n("div",[t._v("加载中")]),n("div",{staticStyle:{flex:"1"}})]):!t.items||t.items.length<=0?n("div",{staticClass:"emptyCont"},[n("i",{staticClass:"iconfont icon-jinzhide"}),t._v("没有内容")]):t._e(),n("ViewArtVer",{attrs:{shown:t.verShow,packArt:t.verItem},on:{"update:shown":function(n){t.verShow=n}}})],1)},u=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"rotateDiv"},[n("i",{staticClass:"iconfont icon-Loadingalt2"})])}],d=e("7150"),f=function(){var t=this,n=t._self._c;return n("CModal",{attrs:{title:"查看制品详情",size:"lg",show:t.shown},on:{"update:show":function(n){return t.$emit("update:shown",n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("span")]},proxy:!0}])},[n("div",{staticStyle:{display:"flex"}},[n("div",{staticClass:"tlistDiv"},[n("ul",t._l(t.items,(function(e){return n("li",{key:"actver:"+e.id,on:{click:function(n){return t.showVer(e.id)}}},[n("div",{staticClass:"tits"},[t._v(" "+t._s(e.version?e.version:e.sha)+" "),1!=e.preview?n("i",{directives:[{name:"c-tooltip",rawName:"v-c-tooltip.hover.click",value:"release",expression:"'release'",modifiers:{hover:!0,click:!0}}],staticClass:"iconfont icon-release releaseCls"}):t._e()])])})),0),n("CPagination",{staticStyle:{float:"right"},attrs:{activePage:t.page,pages:t.pages},on:{"update:activePage":t.getList}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.infoShow&&t.infos.id,expression:"infoShow&&infos.id"}],staticClass:"verInfos"},[n("CCard",[n("CCardHeader",[n("strong",[t._v(" "+t._s(t.infos.version?t.infos.version:t.infos.sha)+" "),1!=t.infos.preview?n("i",{directives:[{name:"c-tooltip",rawName:"v-c-tooltip.hover.click",value:"release",expression:"'release'",modifiers:{hover:!0,click:!0}}],staticClass:"iconfont icon-release releaseCls"}):t._e()]),1==t.perm.write?n("div",{staticClass:"card-header-actions"},[n("CButton",{attrs:{size:"sm",color:"info",variant:"outline"},on:{click:t.editFun}},[t._v(" "+t._s(t.editFlag?"保存":"编辑")+" ")]),n("CButton",{attrs:{size:"sm",color:"warning",variant:"outline"},on:{click:t.rmFun}},[t._v(" 删除 ")])],1):t._e()]),t.editFlag?n("CCardBody",[n("CInput",{attrs:{label:"版本TAG",placeholder:"eg: v1.0.0"},model:{value:t.formData.version,callback:function(n){t.$set(t.formData,"version",n)},expression:"formData.version"}}),n("CInput",{attrs:{label:"描述",placeholder:"请输入描述"},model:{value:t.formData.desc,callback:function(n){t.$set(t.formData,"desc",n)},expression:"formData.desc"}}),n("div",[t._v("这是一个preview:     "),n("CSwitch",{attrs:{color:"info",variant:"3d",checked:t.formData.ispre},on:{"update:checked":function(n){return t.$set(t.formData,"ispre",n)}}})],1)],1):n("CCardBody",[n("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("sha&id: "+t._s(t.infos.sha))]),n("div",{staticStyle:{"margin-bottom":"10px"}},[t._v("创建时间: "+t._s(t.$dateFmt(t.infos.created)))]),n("div",[t._v(t._s(t.infos.desc))])])],1),n("div",{staticClass:"fls"},[n("DirsItem",{attrs:{verid:t.infos.id,items:t.infos.files,pths:""}})],1)],1)])])},l=[],p=e("08c7"),b=function(){var t=this,n=t._self._c;return t.items&&t.items.length>0?n("div",t._l(t.items,(function(e,i){return n("div",{key:"zipit:"+i,staticClass:"zipItem"},[n("div",{staticClass:"tits",on:{click:function(n){return t.toggleBody(e,i)}}},[e.dir?n("CIcon",{staticClass:"exIcon",staticStyle:{color:"#b9730a"},attrs:{name:1!=t.hideBody[i]?"cil-folder-open":"cil-folder",width:"16px"}}):n("CIcon",{staticClass:"exIcon",attrs:{name:"cil-file",width:"12px"}}),n("div",[t._v(t._s(e.name))]),n("CButton",{staticClass:"downBtn",attrs:{color:"link"},on:{click:function(n){return n.stopPropagation(),t.goDown(e)}}},[t._v("下载")])],1),n("transition",{attrs:{name:"el-fade-in"}},[n("DirsItem",{directives:[{name:"show",rawName:"v-show",value:1!=t.hideBody[i],expression:"hideBody[$k]!=true"}],attrs:{verid:t.verid,items:e.child,pths:t.getPath(e)}})],1)],1)})),0):t._e()},v=[],h={name:"DirsItem",props:{verid:String,items:Array,pths:String},data:function(){return{hideBody:{}}},methods:{getPath:function(t){return this.pths?this.pths+"/"+t.name:t.name},toggleBody:function(t,n){1==t.dir&&(console.log("toggleBody",n,this.hideBody[n]),null==this.hideBody[n]?this.hideBody[n]=!0:this.hideBody[n]=!this.hideBody[n],this.$forceUpdate())},goDown:function(t){var n=this;Object(o["j"])(this.verid,this.getPath(t)).then((function(t){console.log("goDown url:",t.data.url),window.open(t.data.url)})).catch((function(t){return Object(o["gb"])(n,t)}))}}},m=h,g=(e("8056"),e("f900")),O=Object(g["a"])(m,b,v,!1,null,"79769259",null),j=O.exports,w={props:{shown:Boolean,packArt:Object},watch:{shown:function(t){1==t&&this.getList(0)}},components:{DirsItem:j},data:function(){return{items:[],page:0,pages:0,infoShow:!1,infos:{},perm:{},editFlag:!1,formData:{}}},methods:{getList:function(t){var n=this;this.infoShow=!1,Object(o["g"])({packId:this.packArt.id,page:t}).then((function(t){n.page=t.data.page,n.pages=t.data.pages,n.items=t.data.data})).catch((function(t){return Object(o["gb"])(n,t)}))},addFun:function(t){var n=this;this.$emit("addFun",t.id,(function(e){1==e&&(t.added=!0,n.$refs.table.$forceUpdate())}))},showVer:function(t){var n=this;Object(o["f"])(t).then((function(t){n.infoShow=!0,n.infos=t.data.info,n.perm=t.data.perm,n.editFlag=!1,n.formData.id=n.infos.id,n.formData.version=n.infos.version,n.formData.desc=n.infos.desc,n.formData.ispre=1==n.infos.preview})).catch((function(t){return Object(o["gb"])(n,t)}))},tokens:function(){return Object(p["a"])()},editFun:function(){var t=this;this.editFlag?Object(o["i"])(this.formData).then((function(n){t.getList(t.page),t.showVer(n.data)})).catch((function(n){return Object(o["gb"])(t,n)})):this.editFlag=!0},rmFun:function(){var t=this;this.$confirm("确定删除此制品包括文件吗(无法恢复)?",null,(function(){Object(o["h"])(t.infos.id).then((function(){t.$msgOk("操作成功"),t.infoShow=!1,t.infos={},t.getList(t.page)})).catch((function(n){return Object(o["gb"])(t,n)}))}))}}},C=w,_=(e("bf0b"),Object(g["a"])(C,f,l,!1,null,"add2f558",null)),k=_.exports,y={components:{myavatar:d["a"],ViewArtVer:k},props:{items:Array,loading:Boolean},data:function(){return{verItem:{},verShow:!1}},methods:{copyIds:function(t){Object(s["a"])(t)?this.$msgOk("已成功复制制品库ID"):this.$msgErr("复制制品库ID失败")}}},I=y,D=(e("7766"),Object(g["a"])(I,a,u,!1,null,"c41a5ad0",null)),x=D.exports,$={components:{EditArt:c["a"],PacklistView:x},data:function(){return{arty:{},user:{},perm:{},selArt:!1,loading:!0,packitems:[]}},mounted:function(){null!=this.$route.params&&null!=this.$route.params.id&&""!=this.$route.params.id?this.getInfo(this.$route.params.id):this.$router.push("/404")},methods:{getInfo:function(t){var n=this;Object(o["b"])(t).then((function(t){n.arty=t.data.arty,n.user=t.data.user,n.perm=t.data.perm,n.getPackList()})).catch((function(t){return Object(o["gb"])(n,t)}))},getPackList:function(t){var n=this;this.loading=!0,Object(o["d"])({repoId:this.arty.id,page:t}).then((function(t){n.loading=!1,n.packitems=t.data.data})).catch((function(t){return Object(o["gb"])(n,t)}))},copyIds:function(t){Object(s["a"])(t)?this.$msgOk("已成功复制制品库ID"):this.$msgErr("复制制品库ID失败")}}},S=$,B=(e("7bc6"),Object(g["a"])(S,i,r,!1,null,"0ee5d726",null));n["default"]=B.exports},7150:function(t,n,e){"use strict";var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"users"},[n("div",{staticClass:"c-avatar avat",style:{width:t.imgw&&""!=t.imgw?t.imgw:"auto"}},[n("img",{staticClass:"c-avatar-img",attrs:{src:t.src&&""!=t.src?t.src:"/jjenkins/gokinsui/imgs/avatars/def.png"}})]),n("div",{staticClass:"nicks"},[t._v(t._s(t.nick))])])},r=[],o={props:{src:String,nick:String,imgw:String},data:function(){return{}}},s=o,c=(e("81a2"),e("f900")),a=Object(c["a"])(s,i,r,!1,null,"07836378",null);n["a"]=a.exports},7766:function(t,n,e){"use strict";e("2602")},"7bc6":function(t,n,e){"use strict";e("8693")},8056:function(t,n,e){"use strict";e("156b")},"81a2":function(t,n,e){"use strict";e("ec34")},"841cd":function(t,n,e){"use strict";e.d(n,"r",(function(){return r})),e.d(n,"Y",(function(){return o})),e.d(n,"gb",(function(){return s})),e.d(n,"q",(function(){return c})),e.d(n,"cb",(function(){return a})),e.d(n,"bb",(function(){return u})),e.d(n,"ab",(function(){return d})),e.d(n,"eb",(function(){return f})),e.d(n,"fb",(function(){return l})),e.d(n,"Z",(function(){return p})),e.d(n,"db",(function(){return b})),e.d(n,"u",(function(){return v})),e.d(n,"v",(function(){return h})),e.d(n,"t",(function(){return m})),e.d(n,"D",(function(){return g})),e.d(n,"A",(function(){return O})),e.d(n,"z",(function(){return j})),e.d(n,"B",(function(){return w})),e.d(n,"C",(function(){return C})),e.d(n,"w",(function(){return _})),e.d(n,"x",(function(){return k})),e.d(n,"E",(function(){return y})),e.d(n,"R",(function(){return I})),e.d(n,"l",(function(){return D})),e.d(n,"G",(function(){return x})),e.d(n,"y",(function(){return $})),e.d(n,"s",(function(){return S})),e.d(n,"F",(function(){return B})),e.d(n,"S",(function(){return F})),e.d(n,"L",(function(){return A})),e.d(n,"J",(function(){return V})),e.d(n,"I",(function(){return P})),e.d(n,"m",(function(){return z})),e.d(n,"k",(function(){return E})),e.d(n,"K",(function(){return L})),e.d(n,"V",(function(){return N})),e.d(n,"o",(function(){return U})),e.d(n,"H",(function(){return H})),e.d(n,"T",(function(){return J})),e.d(n,"n",(function(){return M})),e.d(n,"ib",(function(){return T})),e.d(n,"hb",(function(){return G})),e.d(n,"Q",(function(){return R})),e.d(n,"O",(function(){return q})),e.d(n,"M",(function(){return K})),e.d(n,"N",(function(){return Q})),e.d(n,"P",(function(){return W})),e.d(n,"c",(function(){return X})),e.d(n,"b",(function(){return Y})),e.d(n,"a",(function(){return Z})),e.d(n,"e",(function(){return tt})),e.d(n,"d",(function(){return nt})),e.d(n,"g",(function(){return et})),e.d(n,"f",(function(){return it})),e.d(n,"i",(function(){return rt})),e.d(n,"h",(function(){return ot})),e.d(n,"j",(function(){return st})),e.d(n,"W",(function(){return ct})),e.d(n,"U",(function(){return at})),e.d(n,"p",(function(){return ut})),e.d(n,"X",(function(){return dt}));var i=e("a474"),r=function(t,n){return Object(i["b"])("/lg/login",{name:t,pass:n})},o=function(){return Object(i["b"])("/lg/info",{})},s=function(t,n,e){var i=n.response?n.response.status:0;if(403==i)return t.$store.commit("clearUserInfo"),void t.$router.push("/login");var r=!1;e&&"function"===typeof e&&(r=e(n,t)),1!=r&&(404==i?t.$msgErr("未找到内容"):405==i?t.$msgErr("无权限"):t.$msgErr(n.response?n.response.data||"服务器错误":"网络错误"))},c=function(){return Object(i["b"])("/version")},a=function(t){return Object(i["b"])("/user/page",t)},u=function(t){return Object(i["b"])("/user/new",t)},d=function(t){return Object(i["b"])("/user/info",{id:t})},f=function(t){return Object(i["b"])("/user/upinfo",t)},l=function(t){return Object(i["b"])("/user/upass",t)},p=function(t,n){return Object(i["b"])("/user/active",{id:t,act:n})},b=function(t){return Object(i["b"])("/user/perm",t)},v=function(t){return Object(i["b"])("/org/list",t)},h=function(t){return Object(i["b"])("/org/new",t)},m=function(t){return Object(i["b"])("/org/info",{id:t})},g=function(t){return Object(i["b"])("/org/users",{id:t})},O=function(t){return Object(i["b"])("/org/save",t)},j=function(t){return Object(i["b"])("/org/rm",{id:t})},w=function(t){return Object(i["b"])("/org/user/edit",t)},C=function(t,n){return Object(i["b"])("/org/user/rm",{id:t,uid:n})},_=function(t,n){return Object(i["b"])("/org/pipe/add",{id:t,pipeId:n})},k=function(t,n){return Object(i["b"])("/org/pipe/rm",{id:t,pipeId:n})},y=function(t){return Object(i["b"])("/org/vars",t)},I=function(t){return Object(i["b"])("org/var/save",t)},D=function(t){return Object(i["b"])("/org/var/del",t)},x=function(t){return Object(i["b"])("/pipeline/pipelines",t)},$=function(t){return Object(i["b"])("/pipeline/org/pipelines",t)},S=function(t){return Object(i["b"])("/pipeline/new",t)},B=function(t){return Object(i["b"])("/pipeline/info",t)},F=function(t){return Object(i["b"])("/pipeline/save",t)},A=function(t){return Object(i["b"])("/pipeline/run",t)},V=function(t){return Object(i["b"])("/pipeline/pipelineVersions",t)},P=function(t){return Object(i["b"])("/pipeline/pipelineVersion",{id:t})},z=function(t){return Object(i["b"])("/pipeline/delete",{id:t})},E=function(t){return Object(i["b"])("/pipeline/copy",{pipelineId:t})},L=function(t){return Object(i["b"])("/pipeline/rebuild",{pipelineVersionId:t})},N=function(t){return Object(i["b"])("/pipeline/search/sha",t)},U=function(t){return Object(i["b"])("/pipelineVersion/delete",{id:t})},H=function(t){return Object(i["b"])("/pipeline/vars",t)},J=function(t){return Object(i["b"])("pipeline/var/save",t)},M=function(t){return Object(i["b"])("/pipeline/var/del",t)},T=function(){return Object(i["b"])("/yml/templates")},G=function(){return Object(i["b"])("/yml/plugins")},R=function(t){return Object(i["b"])("/runtime/stages",{pvId:t})},q=function(t){return Object(i["b"])("/runtime/cmds",{stepId:t})},K=function(t){return Object(i["b"])("/runtime/build",{buildId:t})},Q=function(t){return Object(i["b"])("/runtime/cancel",{buildId:t})},W=function(t,n,e){return Object(i["b"])("/runtime/logs",{buildId:t,stepId:n,offset:e})},X=function(t){return Object(i["b"])("/art/org-list",t)},Y=function(t){return Object(i["b"])("/art/info",{id:t})},Z=function(t){return Object(i["b"])("/art/edit",t)},tt=function(t){return Object(i["b"])("/art/rm",{id:t})},nt=function(t){return Object(i["b"])("/art/package/list",t)},et=function(t){return Object(i["b"])("/art/version/list",t)},it=function(t){return Object(i["b"])("/art/version/infos",{id:t})},rt=function(t){return Object(i["b"])("/art/version/save",t)},ot=function(t){return Object(i["b"])("/art/version/rm",{id:t})},st=function(t,n){return Object(i["b"])("/art/version/url",{id:t,path:n})},ct=function(t){return Object(i["b"])("/trigger/triggers",t)},at=function(t){return Object(i["b"])("/trigger/save",t)},ut=function(t){return Object(i["b"])("/trigger/delete",{id:t})},dt=function(t){return Object(i["b"])("/trigger/runs",t)}},8693:function(t,n,e){},b3c3:function(t,n,e){},bf0b:function(t,n,e){"use strict";e("b3c3")},e27f:function(t,n,e){"use strict";var i=function(){var t=this,n=t._self._c;return n("CModal",{attrs:{title:"编辑制品库",closeOnBackdrop:!1,show:t.shown},on:{"update:show":function(n){return t.$emit("update:shown",n)}},scopedSlots:t._u([{key:"footer",fn:function(){return[n("CButton",{attrs:{color:"warning",variant:"outline"},on:{click:function(n){return t.$emit("update:shown",!1)}}},[t._v("取消")]),n("CButton",{attrs:{color:"info",disabled:t.subing},on:{click:t.subFun}},[t._v("提交")])]},proxy:!0}])},[n("CInput",{attrs:{label:"名称",placeholder:"请输入名称(必填)"},model:{value:t.formData.name,callback:function(n){t.$set(t.formData,"name",n)},expression:"formData.name"}}),n("div",{staticStyle:{"margin-bottom":"10px",display:"flex"}},[n("div",{staticStyle:{"line-height":"27x"}},[t._v("是否已归档:    ")]),n("CSwitch",{attrs:{color:"info",variant:"3d",checked:t.formData.disabled},on:{"update:checked":function(n){return t.$set(t.formData,"disabled",n)}}})],1),n("CTextarea",{attrs:{label:"描述",placeholder:"请输入描述",rows:"10"},model:{value:t.formData.desc,callback:function(n){t.$set(t.formData,"desc",n)},expression:"formData.desc"}})],1)},r=[],o=e("841cd"),s={props:{shown:Boolean,orgId:String,info:Object},watch:{shown:function(t){if(1==t){if(!this.orgId)return void this.$emit("update:shown",!1);this.subing=!1,this.formData={name:"",disabled:!1,desc:""},this.info&&this.info.id&&""!=this.info.id&&(this.formData.id=this.info.id,this.formData.name=this.info.name,this.formData.disabled=1==this.info.disabled,this.formData.desc=this.info.desc)}}},data:function(){return{subing:!1,formData:{}}},methods:{subFun:function(){var t=this;this.formData.name?(this.subing=!0,this.formData.orgId=this.orgId,Object(o["a"])(this.formData).then((function(n){t.$emit("update:shown",!1),t.$emit("subOk",n.data)})).catch((function(n){return Object(o["gb"])(t,n,(function(){t.subing=!1}))}))):this.$msgErr("用户名必填")}}},c=s,a=e("f900"),u=Object(a["a"])(c,i,r,!1,null,null,null);n["a"]=u.exports},ec34:function(t,n,e){}}]);
//# sourceMappingURL=chunk-2b4044ca.f2fa381b.js.map