(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74ae09a0"],{"841cd":function(n,t,r){"use strict";r.d(t,"r",(function(){return u})),r.d(t,"Y",(function(){return i})),r.d(t,"gb",(function(){return c})),r.d(t,"q",(function(){return o})),r.d(t,"cb",(function(){return b})),r.d(t,"bb",(function(){return f})),r.d(t,"ab",(function(){return d})),r.d(t,"eb",(function(){return p})),r.d(t,"fb",(function(){return s})),r.d(t,"Z",(function(){return j})),r.d(t,"db",(function(){return O})),r.d(t,"u",(function(){return a})),r.d(t,"v",(function(){return l})),r.d(t,"t",(function(){return g})),r.d(t,"D",(function(){return v})),r.d(t,"A",(function(){return m})),r.d(t,"z",(function(){return I})),r.d(t,"B",(function(){return w})),r.d(t,"C",(function(){return h})),r.d(t,"w",(function(){return k})),r.d(t,"x",(function(){return y})),r.d(t,"E",(function(){return V})),r.d(t,"R",(function(){return $})),r.d(t,"l",(function(){return E})),r.d(t,"G",(function(){return J})),r.d(t,"y",(function(){return U})),r.d(t,"s",(function(){return q})),r.d(t,"F",(function(){return x})),r.d(t,"S",(function(){return z})),r.d(t,"L",(function(){return A})),r.d(t,"J",(function(){return B})),r.d(t,"I",(function(){return C})),r.d(t,"m",(function(){return D})),r.d(t,"k",(function(){return F})),r.d(t,"K",(function(){return G})),r.d(t,"V",(function(){return H})),r.d(t,"o",(function(){return K})),r.d(t,"H",(function(){return L})),r.d(t,"T",(function(){return M})),r.d(t,"n",(function(){return N})),r.d(t,"ib",(function(){return P})),r.d(t,"hb",(function(){return Q})),r.d(t,"Q",(function(){return R})),r.d(t,"O",(function(){return S})),r.d(t,"M",(function(){return T})),r.d(t,"N",(function(){return W})),r.d(t,"P",(function(){return X})),r.d(t,"c",(function(){return Y})),r.d(t,"b",(function(){return Z})),r.d(t,"a",(function(){return _})),r.d(t,"e",(function(){return nn})),r.d(t,"d",(function(){return tn})),r.d(t,"g",(function(){return rn})),r.d(t,"f",(function(){return en})),r.d(t,"i",(function(){return un})),r.d(t,"h",(function(){return cn})),r.d(t,"j",(function(){return on})),r.d(t,"W",(function(){return bn})),r.d(t,"U",(function(){return fn})),r.d(t,"p",(function(){return dn})),r.d(t,"X",(function(){return pn}));var e=r("a474"),u=function(n,t){return Object(e["b"])("/lg/login",{name:n,pass:t})},i=function(){return Object(e["b"])("/lg/info",{})},c=function(n,t,r){var e=t.response?t.response.status:0;if(403==e)return n.$store.commit("clearUserInfo"),void n.$router.push("/login");var u=!1;r&&"function"===typeof r&&(u=r(t,n)),1!=u&&(404==e?n.$msgErr("未找到内容"):405==e?n.$msgErr("无权限"):n.$msgErr(t.response?t.response.data||"服务器错误":"网络错误"))},o=function(){return Object(e["b"])("/version")},b=function(n){return Object(e["b"])("/user/page",n)},f=function(n){return Object(e["b"])("/user/new",n)},d=function(n){return Object(e["b"])("/user/info",{id:n})},p=function(n){return Object(e["b"])("/user/upinfo",n)},s=function(n){return Object(e["b"])("/user/upass",n)},j=function(n,t){return Object(e["b"])("/user/active",{id:n,act:t})},O=function(n){return Object(e["b"])("/user/perm",n)},a=function(n){return Object(e["b"])("/org/list",n)},l=function(n){return Object(e["b"])("/org/new",n)},g=function(n){return Object(e["b"])("/org/info",{id:n})},v=function(n){return Object(e["b"])("/org/users",{id:n})},m=function(n){return Object(e["b"])("/org/save",n)},I=function(n){return Object(e["b"])("/org/rm",{id:n})},w=function(n){return Object(e["b"])("/org/user/edit",n)},h=function(n,t){return Object(e["b"])("/org/user/rm",{id:n,uid:t})},k=function(n,t){return Object(e["b"])("/org/pipe/add",{id:n,pipeId:t})},y=function(n,t){return Object(e["b"])("/org/pipe/rm",{id:n,pipeId:t})},V=function(n){return Object(e["b"])("/org/vars",n)},$=function(n){return Object(e["b"])("org/var/save",n)},E=function(n){return Object(e["b"])("/org/var/del",n)},J=function(n){return Object(e["b"])("/pipeline/pipelines",n)},U=function(n){return Object(e["b"])("/pipeline/org/pipelines",n)},q=function(n){return Object(e["b"])("/pipeline/new",n)},x=function(n){return Object(e["b"])("/pipeline/info",n)},z=function(n){return Object(e["b"])("/pipeline/save",n)},A=function(n){return Object(e["b"])("/pipeline/run",n)},B=function(n){return Object(e["b"])("/pipeline/pipelineVersions",n)},C=function(n){return Object(e["b"])("/pipeline/pipelineVersion",{id:n})},D=function(n){return Object(e["b"])("/pipeline/delete",{id:n})},F=function(n){return Object(e["b"])("/pipeline/copy",{pipelineId:n})},G=function(n){return Object(e["b"])("/pipeline/rebuild",{pipelineVersionId:n})},H=function(n){return Object(e["b"])("/pipeline/search/sha",n)},K=function(n){return Object(e["b"])("/pipelineVersion/delete",{id:n})},L=function(n){return Object(e["b"])("/pipeline/vars",n)},M=function(n){return Object(e["b"])("pipeline/var/save",n)},N=function(n){return Object(e["b"])("/pipeline/var/del",n)},P=function(){return Object(e["b"])("/yml/templates")},Q=function(){return Object(e["b"])("/yml/plugins")},R=function(n){return Object(e["b"])("/runtime/stages",{pvId:n})},S=function(n){return Object(e["b"])("/runtime/cmds",{stepId:n})},T=function(n){return Object(e["b"])("/runtime/build",{buildId:n})},W=function(n){return Object(e["b"])("/runtime/cancel",{buildId:n})},X=function(n,t,r){return Object(e["b"])("/runtime/logs",{buildId:n,stepId:t,offset:r})},Y=function(n){return Object(e["b"])("/art/org-list",n)},Z=function(n){return Object(e["b"])("/art/info",{id:n})},_=function(n){return Object(e["b"])("/art/edit",n)},nn=function(n){return Object(e["b"])("/art/rm",{id:n})},tn=function(n){return Object(e["b"])("/art/package/list",n)},rn=function(n){return Object(e["b"])("/art/version/list",n)},en=function(n){return Object(e["b"])("/art/version/infos",{id:n})},un=function(n){return Object(e["b"])("/art/version/save",n)},cn=function(n){return Object(e["b"])("/art/version/rm",{id:n})},on=function(n,t){return Object(e["b"])("/art/version/url",{id:n,path:t})},bn=function(n){return Object(e["b"])("/trigger/triggers",n)},fn=function(n){return Object(e["b"])("/trigger/save",n)},dn=function(n){return Object(e["b"])("/trigger/delete",{id:n})},pn=function(n){return Object(e["b"])("/trigger/runs",n)}}}]);
//# sourceMappingURL=chunk-74ae09a0.a40b8bc0.js.map