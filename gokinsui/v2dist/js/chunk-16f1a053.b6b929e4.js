(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16f1a053"],{"01cb":function(t,s,i){},"15bf":function(t,s,i){"use strict";i("5131")},"26fd":function(t,s,i){},"3eda":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t._self._c;return s("div",[s("CCard",[s("CCardHeader",[s("div",{staticClass:"hd-tit"},[s("div",{staticClass:"icons rotateDiv"},["ok"==t.build.status?s("i",{staticClass:"iconfont icon-success color-success",staticStyle:{"font-size":"30px"}}):"error"==t.build.status?s("i",{staticClass:"iconfont icon-chacha color-error",staticStyle:{"font-size":"30px"}}):"cancel"==t.build.status?s("i",{staticClass:"iconfont icon-jinzhide color-cancel",staticStyle:{"font-size":"30px"}}):s("i",{staticClass:"iconfont icon-jiazaizhong color-runing",staticStyle:{"font-size":"25px"}})]),s("div",[s("a",{attrs:{href:"javascript:;"},on:{click:function(s){return t.goPipline(t.pipe.id)}}},[t._v(t._s(t.pipe.name))]),t._v("  :  "),s("strong",[t._v("#"+t._s(t.pv.number))])]),s("div",{staticClass:"sha"},[t._v(" "+t._s(t.getEvents(t.pv.events))+" ")]),s("div",{staticClass:"sha"},[s("i",{staticClass:"iconfont icon-branches",staticStyle:{"font-size":"14px"}}),t._v(" "+t._s(t.pv.sha||"默认分支")+" ")]),s("div",{staticStyle:{flex:"1"}}),s("div",[t._v("   "),1!=t.perm.exec||this.builded?t._e():s("CButton",{attrs:{size:"sm",color:"warning",variant:"outline"},on:{click:t.cancelFun}},[t._v(" 停止构建 ")]),t._v("   "),1==t.perm.exec&&this.builded?s("CButton",{attrs:{size:"sm",color:"danger",variant:"outline"},on:{click:t.delVersion}},[t._v(" 删除构建 ")]):t._e(),t._v("   "),1==t.perm.exec?s("CButton",{attrs:{size:"sm",color:"info",variant:"outline"},on:{click:t.rebuildFun}},[t._v(" 重新构建 ")]):t._e(),t._v("   "),s("CButton",{attrs:{size:"sm",color:"dark",variant:"outline"},on:{click:function(s){t.pluginShow=!0}}},[t._v(" 查看配置 ")])],1)]),s("div",{staticClass:"hd-infos"},[s("myavatar",{staticClass:"avat",attrs:{src:t.usr.avat,nick:t.usr.nick,imgw:"18px"}}),t._v("  "),s("div",{staticStyle:{flex:"1"}},[s("small",[t._v("仓库地址: "),s("a",{attrs:{href:t.pipe.url,target:"_blank"}},[t._v(t._s(t.pipe.url))])]),s("small",{staticStyle:{color:"#333"}},[t._v("开始时间: "+t._s(t.$dateFmt(t.pv.created)))]),s("small",{staticStyle:{color:"#333"}},[t._v("运行: "+t._s(t.$dateCha(t.build.started,t.build.finished)))])])],1),s("div",{staticClass:"hd-infos"},[t._v(t._s(t.pipe.displayName))])]),s("CCardBody",{staticClass:"contbody"},[s("div",{staticClass:"buildcont"},[s("div",{staticClass:"stages"},[s("div",{staticClass:"tit"},[t._v("流水线阶段")]),s("div",{staticClass:"stage"},[s("div",{staticClass:"kktit"},[s("div",{staticClass:"iconstage",staticStyle:{margin:"2px 5px 0 8px"}},[s("i",{staticClass:"iconfont icon-git",staticStyle:{"font-size":"25px"}})]),s("div",{staticClass:"titcont"},[t._v(" 工作目录文件准备 ")]),s("div",{staticClass:"pgss"},[s("CProgress",{attrs:{value:t.workpgss,color:"info",striped:!0,"show-percentage":"",animated:t.workpgss<100}})],1)])]),"error"==t.build.status&&t.build.error&&""!=t.build.error?s("div",{staticClass:"hd-errs"},[t._v(" 初始化错误: "+t._s(t.build.error)+" ")]):t._e(),t._l(this.stageids,(function(i){return s("div",{key:"stage:"+i,staticClass:"stage"},[s("div",{staticClass:"tits clickitem",on:{click:function(s){return t.toggleStage(i)}}},[s("div",{staticClass:"kktit"},[s("div",{staticClass:"iconstage"},[s("CIcon",{attrs:{content:t.$options.coreics[1==t.stages[i].collapse?"cilCaretBottom":"cilCaretLeft"]}})],1),s("div",{staticClass:"icons rotateDiv"},["ok"==t.stages[i].status?s("i",{staticClass:"iconfont icon-success color-success",staticStyle:{"font-size":"20px"}}):"error"==t.stages[i].status?s("i",{staticClass:"iconfont icon-chacha color-error",staticStyle:{"font-size":"20px"}}):"cancel"==t.stages[i].status?s("i",{staticClass:"iconfont icon-jinzhide color-cancel",staticStyle:{"font-size":"20px"}}):s("i",{staticClass:"iconfont icon-jiazaizhong color-runing",staticStyle:{"font-size":"20px"}})]),s("div",{staticClass:"titcont"},[t._v(" "+t._s(t.stages[i].name)+" ")]),s("div",{staticClass:"times"},[t._v(t._s(t.$dateCha(t.stages[i].started,t.stages[i].finished)))])]),s("div",{staticClass:"infos",staticStyle:{"margin-left":"60px"}},[s("div",[t._v(t._s(t.stages[i].displayName))])])]),s("CCollapse",{attrs:{show:t.stages[i].collapse,duration:400}},[s("ul",t._l(t.stages[i].stepids,(function(i){return s("li",{key:"step:"+i,staticClass:"clickitem",class:[i==t.showStepid?"clickitems":""],on:{click:function(s){return t.showStep(i)}}},[s("div",{staticClass:"kktit"},[s("div",{staticClass:"icons rotateDiv"},["ok"==t.steps[i].status?s("i",{staticClass:"iconfont icon-success color-success",staticStyle:{"font-size":"20px"}}):"error"==t.steps[i].status?s("i",{staticClass:"iconfont icon-chacha color-error",staticStyle:{"font-size":"20px"}}):"cancel"==t.steps[i].status?s("i",{staticClass:"iconfont icon-jinzhide color-cancel",staticStyle:{"font-size":"20px"}}):s("i",{staticClass:"iconfont icon-jiazaizhong color-runing",staticStyle:{"font-size":"20px"}})]),s("div",{staticClass:"titcont"},[t._v(" "+t._s(t.steps[i].name)+" ")]),s("div",{staticClass:"times"},[t._v(t._s(t.$dateCha(t.steps[i].started,t.steps[i].finished)))])]),s("div",{staticClass:"infos"},[s("div",[t._v(t._s(t.steps[i].displayName))]),s("div",{staticStyle:{flex:"1"}}),t.steps[i].waits&&t.steps[i].waits.length>0?s("div",{directives:[{name:"c-tooltip",rawName:"v-c-tooltip.hover.click",value:{content:"等待的步骤",placement:"bottom"},expression:"{ content: '等待的步骤', placement: 'bottom' }",modifiers:{hover:!0,click:!0}}]},[s("i",{staticClass:"iconfont icon-shijian",staticStyle:{"font-size":"15px",color:"#ad34ea"}}),t._v(" "+t._s(t.steps[i].waits.join(","))+" ")]):t._e()])])})),0)])],1)}))],2),s("div",{staticClass:"logdiv"},[""!=t.showStepid&&t.stepcmdids[t.showStepid]?s("div",[s("div",{staticClass:"logs"},t._l(t.stepcmdids[t.showStepid],(function(i){return s("div",{key:"cmd:"+i,staticClass:"cmdcont"},[s("div",{staticClass:"cmdline"},[s("div",{staticClass:"rotateDiv"},["ok"==t.stepcmds[i].status?s("i",{staticClass:"iconfont icon-success color-success",staticStyle:{"font-size":"10px"}}):"error"==t.stepcmds[i].status?s("i",{staticClass:"iconfont icon-chacha color-error",staticStyle:{"font-size":"10px"}}):"cancel"==t.stepcmds[i].status?s("i",{staticClass:"iconfont icon-jinzhide color-cancel",staticStyle:{"font-size":"10px"}}):s("i",{staticClass:"iconfont icon-jiazaizhong color-runing",staticStyle:{"font-size":"8px"}})]),s("div",{staticStyle:{flex:"1"}},[t._v(t._s(t.stepcmds[i].content))]),s("div",[t._v(t._s(t.$dateCha(t.stepcmds[i].started,t.stepcmds[i].finished)))])]),t.steplogs[t.showStepid]&&t.steplogs[t.showStepid].logs?s("ul",t._l(t.steplogs[t.showStepid].logs[i],(function(i,e){return s("li",{key:"log:"+i.id+"-"+e},[s("div",{staticClass:"num"},[t._v(t._s(e+1))]),s("div",{staticClass:"cont"},[s("div",{staticStyle:{float:"right"}},[t._v(t._s(t.$dateFmt(i.times)))]),1==i.errs?s("div",{staticStyle:{color:"#ff0042"}},[t._v(t._s(i.content))]):s("div",[t._v(t._s(i.content))])])])})),0):t._e()])})),0),s("div",{staticClass:"status"},[s("div",{staticClass:"icons rotateDiv"},["ok"==t.steps[t.showStepid].status?s("i",{staticClass:"iconfont icon-success color-success",staticStyle:{"font-size":"30px"}}):"error"==t.steps[t.showStepid].status?s("i",{staticClass:"iconfont icon-chacha color-error",staticStyle:{"font-size":"30px"}}):"cancel"==t.steps[t.showStepid].status?s("i",{staticClass:"iconfont icon-jinzhide color-cancel",staticStyle:{"font-size":"30px"}}):s("i",{staticClass:"iconfont icon-jiazaizhong color-runing",staticStyle:{"font-size":"30px"}})]),"ok"==t.steps[t.showStepid].status?s("div",{staticClass:"suc"},[t._v("Success")]):t._e(),"error"==t.steps[t.showStepid].status?s("div",{staticClass:"err"},[t._v(t._s(t.steps[t.showStepid].error))]):t._e(),"cancel"==t.steps[t.showStepid].status?s("div",{staticClass:"cncl"},[t._v("Cancel")]):t._e()])]):t._e()])])])],1),s("pluginView",{attrs:{title:"流水线YAML",shown:t.pluginShow,pluginyml:t.pv.content},on:{"update:shown":function(s){t.pluginShow=s}}})],1)},a=[],n=i("841cd"),o=i("7606"),c=i("7150"),r=i("aec4"),l={coreics:o["a"],components:{myavatar:c["a"],pluginView:r["a"]},data:function(){return{orgId:"",pv:{},usr:{},pipe:{},perm:{},build:{},stageids:{},stages:{},steps:{},showStepid:"",stepcmdids:{},stepcmds:{},steplogs:{},builded:!0,isrun:!1,workpgss:0,pluginShow:!1}},computed:{uinfo:function(){return this.$store.state.uinfo||{}}},destroyed:function(){this.isrun=!1},mounted:function(){null!=this.$route.params&&null!=this.$route.params.id&&""!=this.$route.params.id?(this.isrun=!0,this.orgId=this.$route.query.org||"",this.getInfo(this.$route.params.id,!0)):this.$router.push("/404")},methods:{goPipline:function(t){this.orgId&&""!=this.orgId?this.$router.push("/pipeline/info/".concat(t,"?org=").concat(this.orgId)):this.$router.push("/pipeline/info/".concat(t))},getInfo:function(t,s){var i=this;Object(n["I"])(t).then((function(t){i.pv=t.data.pv,i.usr=t.data.usr,i.pipe=t.data.pipe,i.perm=t.data.perm,i.build=t.data.build,i.builded=i.$isEndStatus(i.build.status),i.builded&&(i.workpgss=100),i.getStages(s)})).catch((function(t){return Object(n["gb"])(i,t)}))},getStages:function(t){var s=this;Object(n["Q"])(this.pv.id).then((function(i){for(var e in i.data.ids){var a=i.data.ids[e];i.data.stages[a].collapse=!0}if(s.steps=i.data.steps,s.stages=i.data.stages,s.stageids=i.data.ids,t&&s.stageids&&s.stageids.length>0){var n=s.stages[s.stageids[0]];n&&n.stepids&&n.stepids.length>0&&s.showStep(s.steps[n.stepids[0]].id)}s.builded||s.upBuild()})).catch((function(t){return Object(n["gb"])(s,t)}))},toggleStage:function(t){this.stages[t].collapse=!this.stages[t].collapse,this.$forceUpdate()},showStep:function(t){this.showStepid=t,this.stepcmdids[t]||this.getCmds(),this.builded&&this.getLogs().catch((function(t){return console.log("getLogs err",t)}))},getCmds:function(t){var s=this;this.showStepid&&""!=this.showStepid&&(1==t&&this.stepcmdids[this.showStepid]&&this.stepcmdids[this.showStepid].length>0||Object(n["O"])(this.showStepid).then((function(t){if(t.data.stepId&&""!=t.data.stepId){var i=[];for(var e in t.data.cmds){var a=t.data.cmds[e];a.logs=[],i.push(a.id),s.stepcmds[a.id]=a}s.stepcmdids[t.data.stepId]=i,s.$forceUpdate()}})).catch((function(t){return Object(n["gb"])(s,t)})))},getLogs:function(){var t=this;return new Promise((function(s,i){var e;if(t.showStepid&&""!=t.showStepid){var a=null===(e=t.steplogs[t.showStepid])||void 0===e?void 0:e.offset;Object(n["P"])(t.build.id,t.showStepid,a).then((function(e){var a;if(e.data.stepId&&""!=e.data.stepId){var n=null===(a=t.steplogs[e.data.stepId])||void 0===a?void 0:a.logs;for(var o in n||(n={},t.steplogs[e.data.stepId]={},t.steplogs[e.data.stepId].logs=n),e.data.lastoff>0&&(t.steplogs[e.data.stepId].offset=e.data.lastoff),e.data.logs){var c=e.data.logs[o],r=n[c.id];r?r.push(c):(r=[],r.push(c),n[c.id]=r)}t.$forceUpdate(),s(e.data)}else i("no")})).catch((function(t){i(t)}))}else i("no")}))},upBuild:function(){var t=this,s=!1;this.getCmds(!0);var i=(new Date).getTime();this.getLogs().then((function(){s=!0})).catch((function(){s=!0}));var e=function(){var e=(new Date).getTime();while(!s&&e-i<3);console.log("getLogs contine?"),t.isrun&&!t.builded&&t.upBuild()};Object(n["M"])(this.build.id).then((function(s){var i=s.data.show;if(t.workpgss=s.data.workpgss,t.build.status=i.status,t.build.error=i.error,t.build.event=i.event,t.build.started=i.started,t.build.finished=i.finished,t.build.updated=i.updated,i.stages)for(var a in i.stages){var n=i.stages[a],o=t.stages[n.id];if(o&&(o.status=n.status,o.event=n.event,o.error=n.error,o.started=n.started,o.finished=n.finished,o.updated=n.updated,n.steps))for(var c in n.steps){var r=n.steps[c],l=t.steps[r.id];if(l&&(l.status=r.status,l.event=r.event,l.error=r.error,l.started=r.started,l.finished=r.finished,l.updated=r.updated,r.cmds))for(var d in r.cmds){var u=r.cmds[d],p=t.stepcmds[u.id];p&&(p.status=u.status,p.started=u.started,p.finished=u.finished)}}}t.$forceUpdate(),setTimeout(e,1e3)})).catch((function(a){var n=a.response?a.response.status:0;if(404==n){var o=(new Date).getTime();while(!s&&o-i<3);return t.getInfo(t.pv.id),void t.getCmds()}setTimeout(e,1e3)}))},cancelFun:function(){var t=this;this.$confirm("确定停止构建?",null,(function(){Object(n["N"])(t.build.id).then((function(){t.$msgOk("操作成功")})).catch((function(s){return Object(n["gb"])(t,s)}))}))},rebuildFun:function(){var t=this;this.$confirm("确定重新构建?",null,(function(){Object(n["K"])(t.pv.id).then((function(s){t.$router.push("/pipeline/build/".concat(s.data.id,"?org=").concat(t.orgId))})).catch((function(s){return Object(n["gb"])(t,s)}))}))},delVersion:function(){var t=this;this.$confirm("确定删除?",null,(function(){Object(n["o"])(t.pv.id).then((function(s){t.$router.back(-1)})).catch((function(s){return Object(n["gb"])(t,s)}))}))},getEvents:function(t){switch(t){case"web":return"Api出发";case"webHook":return"webhook触发";case"timer":return"定时器触发"}return"手动运行"}}},d=l,u=(i("9435"),i("f900")),p=Object(u["a"])(d,e,a,!1,null,"772d04cc",null);s["default"]=p.exports},5131:function(t,s,i){},7150:function(t,s,i){"use strict";var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"users"},[s("div",{staticClass:"c-avatar avat",style:{width:t.imgw&&""!=t.imgw?t.imgw:"auto"}},[s("img",{staticClass:"c-avatar-img",attrs:{src:t.src&&""!=t.src?t.src:"/jjenkins/gokinsui/imgs/avatars/def.png"}})]),s("div",{staticClass:"nicks"},[t._v(t._s(t.nick))])])},a=[],n={props:{src:String,nick:String,imgw:String},data:function(){return{}}},o=n,c=(i("81a2"),i("f900")),r=Object(c["a"])(o,e,a,!1,null,"07836378",null);s["a"]=r.exports},"81a2":function(t,s,i){"use strict";i("ec34")},9435:function(t,s,i){"use strict";i("26fd")},aec4:function(t,s,i){"use strict";var e=function(){var t=this,s=t._self._c;return s("CModal",{attrs:{title:t.title||"Step示例",size:"lg",show:t.shown,pluginyml:t.pluginyml,centered:!0},on:{"update:show":function(s){return t.$emit("update:shown",s)}},scopedSlots:t._u([{key:"footer",fn:function(){return[s("CButton",{attrs:{color:"warning"},on:{click:function(s){return t.$emit("update:shown",!1)}}},[t._v("关闭")])]},proxy:!0}])},[s("codemirror",{attrs:{options:t.cOptions},model:{value:t.pluginyml,callback:function(s){t.pluginyml=s},expression:"pluginyml"}})],1)},a=[],n=i("8f94"),o=(i("a7be"),i("01cb"),i("ced0"),i("f4ba"),{components:{codemirror:n["codemirror"]},props:{title:String,shown:Boolean,pluginyml:String},watch:{},data:function(){return{cOptions:{lineNumbers:!0,mode:"text/x-yaml",gutters:["CodeMirror-lint-markers"],theme:"eclipse",readOnly:!0,autoRefresh:!0}}},methods:{}}),c=o,r=(i("15bf"),i("f900")),l=Object(r["a"])(c,e,a,!1,null,null,null);s["a"]=l.exports},ced0:function(t,s,i){(function(t){t(i("56b3"))})((function(t){"use strict";t.defineMode("yaml",(function(){var t=["true","false","on","off","yes","no"],s=new RegExp("\\b(("+t.join(")|(")+"))$","i");return{token:function(t,i){var e=t.peek(),a=i.escaped;if(i.escaped=!1,"#"==e&&(0==t.pos||/\s/.test(t.string.charAt(t.pos-1))))return t.skipToEnd(),"comment";if(t.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(i.literal&&t.indentation()>i.keyCol)return t.skipToEnd(),"string";if(i.literal&&(i.literal=!1),t.sol()){if(i.keyCol=0,i.pair=!1,i.pairStart=!1,t.match("---"))return"def";if(t.match("..."))return"def";if(t.match(/\s*-\s+/))return"meta"}if(t.match(/^(\{|\}|\[|\])/))return"{"==e?i.inlinePairs++:"}"==e?i.inlinePairs--:"["==e?i.inlineList++:i.inlineList--,"meta";if(i.inlineList>0&&!a&&","==e)return t.next(),"meta";if(i.inlinePairs>0&&!a&&","==e)return i.keyCol=0,i.pair=!1,i.pairStart=!1,t.next(),"meta";if(i.pairStart){if(t.match(/^\s*(\||\>)\s*/))return i.literal=!0,"meta";if(t.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==i.inlinePairs&&t.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(i.inlinePairs>0&&t.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(t.match(s))return"keyword"}return!i.pair&&t.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(i.pair=!0,i.keyCol=t.indentation(),"atom"):i.pair&&t.match(/^:\s*/)?(i.pairStart=!0,"meta"):(i.pairStart=!1,i.escaped="\\"==e,t.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}))},ec34:function(t,s,i){},f4ba:function(t,s,i){(function(t){t(i("56b3"))})((function(t){"use strict";function s(s,e){function a(){s.display.wrapper.offsetHeight?(i(s,e),s.display.lastWrapHeight!=s.display.wrapper.clientHeight&&s.refresh()):e.timeout=setTimeout(a,e.delay)}e.timeout=setTimeout(a,e.delay),e.hurry=function(){clearTimeout(e.timeout),e.timeout=setTimeout(a,50)},t.on(window,"mouseup",e.hurry),t.on(window,"keyup",e.hurry)}function i(s,i){clearTimeout(i.timeout),t.off(window,"mouseup",i.hurry),t.off(window,"keyup",i.hurry)}t.defineOption("autoRefresh",!1,(function(t,e){t.state.autoRefresh&&(i(t,t.state.autoRefresh),t.state.autoRefresh=null),e&&0==t.display.wrapper.offsetHeight&&s(t,t.state.autoRefresh={delay:e.delay||250})}))}))}}]);
//# sourceMappingURL=chunk-16f1a053.b6b929e4.js.map