(function(e){function t(t){for(var o,a,r=t[0],l=t[1],c=t[2],u=0,d=[];u<r.length;u++)a=r[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==i[r]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},i={app:0},s=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-e9ba919a":"9765d926","chunk-edef687e":"7714b89b"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-e9ba919a":1,"chunk-edef687e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-e9ba919a":"c48f3a12","chunk-edef687e":"6152bbcd"}[e]+".css",i=l.p+o,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var c=s[r],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===i))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){c=d[r],u=c.getAttribute("data-href");if(u===o||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=o,delete a[e],p.parentNode.removeChild(p),n(s)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var o=i[e];if(0!==o)if(o)t.push(o[2]);else{var s=new Promise((function(t,n){o=i[e]=[t,n]}));t.push(o[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=r(e);var d=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",d.name="ChunkLoadError",d.type=o,d.request=a,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"24f5":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"uploadPage"},[n("div",{staticClass:"text",staticStyle:{"text-align":"center",padding:"10px"}},[n("i",{staticClass:"layui-icon layui-icon-close-fill",staticStyle:{"font-size":"40px",color:"#1E9FFF"},on:{click:e.goHome}}),n("p",{staticStyle:{"margin-top":"20px","font-size":"20px"}},[e._v("请牢记以下验证码")]),e._m(0),e._m(1),n("div",{staticClass:"modal-layer-popup-number"},e._l(e.code,(function(t,o){return n("span",{key:o},[e._v(e._s(t))])})),0),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.backHome,expression:"!backHome"}],staticClass:"wrapper",attrs:{type:"primary"}},[n("label",{ref:"label",staticClass:"btn",attrs:{for:"fileUpload",tab:"0"}},[e._v("记住了，开始录制")])]),n("input",{directives:[{name:"show",rawName:"v-show",value:!e.backHome,expression:"!backHome"}],ref:"file",staticStyle:{position:"absolute",clip:"rect(0 0 0 0)"},attrs:{type:"file",accept:"video/*",id:"fileUpload",capture:"camera",mutiple:"mutiple"},on:{change:function(t){return e.uploadVideo(t)}}}),n("video",{ref:"videoPlayer",staticStyle:{display:"none"},attrs:{src:e.videoUrl,controls:"",preload:"auto",muted:""},domProps:{muted:!0}}),n("button",{directives:[{name:"show",rawName:"v-show",value:e.backHome,expression:"backHome"}],staticClass:"wrapper",on:{click:e.goHome}},[e._v("获取验证码失败")])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{"margin-top":"8px","margin-bottom":"8px"}},[e._v(" 并在 "),n("span",{staticStyle:{color:"red"}},[e._v("5分钟")]),e._v("之内完成验证 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticStyle:{color:"#666"}},[e._v(" 用普通话朗读数字，保持视频在 "),n("span",{staticStyle:{color:"red"}},[e._v("3-8")]),e._v("秒 ")])}],i=(n("7db0"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("ddb0"),n("2b3d"),{props:{isShow:{type:Boolean}},data:function(){return{sessionId:null,code:null,videoBase64:null,sessionIdIem:null,time:null,for:"fileUpload",backHome:!1,isAcs:null,msg:null,getToken:null,videoUrl:null,videoLength:null,message:null,isUpload:!0}},created:function(){var e=this;this.$http.post("http://wallet.adpaytoken.com:8181/face/sessioncode").then((function(t){e.sessionId=t.data.data.sessionId,e.code=t.data.data.code,console.log(t),console.log("这是我拿到的sessionId"+e.sessionId),console.log("这是我拿到的code"+e.code)})).catch((function(t){console.log(t),e.backHome=!0,console.log(e.backHome)})),this.getToken=sessionStorage.getItem("token"),this.countDown()},methods:{goHome:function(){this.isUpload=!1,this.$emit("goHome",this.isUpload)},getObjectUrl:function(e){var t=this,n=null;void 0!=window.createObjectURL?n=window.createObjectURL(e):void 0!=window.webkitURL?n=window.webkitURL.createObjectURL(e):void 0!=window.URL&&(n=window.URL.createObjectURL(e)),this.videoUrl=n,console.log("这是视频的url"+n),setTimeout((function(){t.videoLength=t.$refs.videoPlayer.duration,console.log("这是视频时长"+t.videoLength)}),1e3)},uploadVideo:function(e){var t=this,n=e.target.files[0];this.getObjectUrl(n),console.log("这是视屏"),console.log(n);var o=new FormData;o.append("sessionId",this.sessionId),console.log("这是我发送的sessionId"+this.sessionId),o.append("file",n),o.append("token",this.getToken),layui.use("layer",(function(){var e=layui.layer;e.ready((function(){e.load(2,{shade:[.5,"gray"],content:"上传中...",success:function(e){e.find(".layui-layer-content").css({"padding-top":"39px",width:"60px"})}})}))})),setTimeout((function(){t.videoLength<=2?layui.use("layer",(function(){var e=layui.layer;e.msg("视频太短，请保持在3-8秒"),e.closeAll("loading")})):t.videoLength>=9?layui.use("layer",(function(){var e=layui.layer;e.msg("视频过长，请保持在8秒内"),e.closeAll("loading")})):(console.log("正在上传视频..."),t.doUpload(o))}),3e3)},doUpload:function(e){var t=this;this.$http.post("http://wallet.adpaytoken.com:8181/face/verify",e).then((function(e){return t.isAcs=e.data.code,t.message=e.data.message,sessionStorage.setItem("message",t.message),100===t.isAcs?Promise.resolve(e):Promise.reject("errow")})).then((function(e){console.log("我是成功的code"+t.isAcs),layui.use("layer",(function(){var e=layui.layer;e.closeAll("loading")})),t.$router.replace("/suc")})).catch((function(e){console.log("我是失败的code"+t.isAcs),layui.use("layer",(function(){var e=layui.layer;e.closeAll("loading")})),console.log(e+"失败"),t.$router.replace("/fail")}))},countDown:function(){var e=this,t=8,n=setInterval((function(){e.time=t,t--,t<0&&clearInterval(n)}),1e3)}}}),s=i,r=(n("d64d"),n("2877")),l=Object(r["a"])(s,o,a,!1,null,"3e03292c",null);t["default"]=l.exports},4121:function(e,t,n){},5229:function(e,t,n){"use strict";var o=n("fb31"),a=n.n(o);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("7c55"),n("2877")),r={},l=Object(s["a"])(r,a,i,!1,null,null,null),c=l.exports,u=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("next",{attrs:{isShow:e.isShow},on:{goNext:e.goNext}}),n("up-load",{directives:[{name:"show",rawName:"v-show",value:!e.isShow,expression:"!isShow"}],attrs:{isShow:e.isShow},on:{goHome:e.goHome}})],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"next"},[e._m(0),e._m(1),n("div",{staticClass:"footer"},[n("button",{staticClass:"next-btn wrapper",attrs:{type:"button"},on:{click:e.goUpload}},[e._v("下一步")])]),n("br")])},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"head"},[o("img",{attrs:{src:n("fbf5"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content layui-timeline",staticStyle:{width:"300px",margin:"40px auto"}},[n("ul",{staticClass:"layui-timeline"},[n("div",{staticClass:"layui-text"},[n("span",{staticClass:"prompt-box-text-number"},[e._v("1")]),n("span",{staticClass:"layui-timeline-title"},[e._v("牢记验证码，点击开始录制")])]),n("div",{staticClass:"layui-text"},[n("span",{staticClass:"prompt-box-text-number"},[e._v("2")]),n("span",{staticClass:"layui-timeline-title"},[e._v("开启前置摄像头，用普通话朗读数字")])]),n("div",{staticClass:"layui-text"},[n("span",{staticClass:"prompt-box-text-number"},[e._v("3")]),n("span",{staticClass:"layui-timeline-title"},[e._v("完成录制，等待验证结果")])])])])}],h=(n("c975"),n("ac1f"),n("841c"),n("1276"),{name:"next",props:{isShow:{type:Boolean}},data:function(){return{iconShow:!0,token:""}},components:{},created:function(){this.getToken()},methods:{goUpload:function(){this.iconShow=!1,this.$emit("goNext",this.iconShow)},getToken:function(){function e(){var e=location.search,t=new Object;if(-1!=e.indexOf("?"))for(var n=e.substr(1),o=n.split("&"),a=0;a<o.length;a++)t[o[a].split("=")[0]]=unescape(o[a].split("=")[1]);return t}var t=new Object;t=e(),this.token=t["token"],sessionStorage.setItem("token",this.token),console.log("这是我一进首页就保存的token"+this.token)}}}),v=h,g=(n("fd55"),Object(s["a"])(v,f,m,!1,null,"308e84fa",null)),y=g.exports,b=n("24f5"),w={name:"Home",components:{Next:y,UpLoad:b["default"]},data:function(){return{isShow:!0}},methods:{goNext:function(e){this.isShow=e},goHome:function(e){this.isShow=!e}}},x=w,_=(n("5229"),Object(s["a"])(x,d,p,!1,null,"c2451f52",null)),k=_.exports;o["a"].use(u["a"]);var S=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:k},{path:"/fail",name:"fail",component:function(){return n.e("chunk-e9ba919a").then(n.bind(null,"7e71"))}},{path:"/upLoad",name:"upLoad",component:function(){return Promise.resolve().then(n.bind(null,"24f5"))}},{path:"/suc",name:"suc",component:function(){return n.e("chunk-edef687e").then(n.bind(null,"305e"))}}],C=new u["a"]({mode:"history",base:"/",routes:S}),O=C,L=n("2f62");o["a"].use(L["a"]);var U=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),j=(n("f1a7"),n("bc3a")),E=n.n(j);o["a"].prototype.$http=E.a,o["a"].config.productionTip=!1,new o["a"]({router:O,store:U,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var o=n("2395"),a=n.n(o);a.a},ac74:function(e,t,n){},d64d:function(e,t,n){"use strict";var o=n("ac74"),a=n.n(o);a.a},f1a7:function(e,t){(function(e,t,n){var o=t.documentElement,a="orientationchange"in e?"orientationchange":"resize",i=function(){var e=o.clientWidth;e!==n&&(o.style.fontSize=e/20+"px")};t.addEventListener!==n&&(e.addEventListener(a,i,!1),t.addEventListener("DOMContentLoaded",i,!1),console.log("xxx"))})(window,document)},fb31:function(e,t,n){},fbf5:function(e,t,n){e.exports=n.p+"img/home.12557086.png"},fd55:function(e,t,n){"use strict";var o=n("4121"),a=n.n(o);a.a}});
//# sourceMappingURL=app.a57a915d.js.map