!function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,n){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,a){"use strict";t.a={name:"SequenceDiagram",props:{dataList:{type:Array}},data:function(){return{rowList:[],columnList:[],colorList:["SteelBlue","coral","DeepSkyBlue","lightgreen","SlateBlue","HotPink","Olive","Sienna","Tan"],lineStyles:[],labelStyles:[],resizeFunction:null}},created:function(){for(var e=0;e<this.dataList.length;++e){var t=Object.assign({},this.dataList[e]);if(this.rowList.push(t),t.from===t.to){var a=this._ensureColumnIndex(t.name);this.columnList[a].rowNumbers.push(e),t.fromColumnIdx=a,t.toColumnIdx=a,t.lineType=t.isDash?"dashlink":"link"}else{var n=this._ensureColumnIndex(t.from);this.columnList[n].rowNumbers.push(e),t.fromColumnIdx=n;var i=this._ensureColumnIndex(t.to);this.columnList[i].rowNumbers.push(e),t.toColumnIdx=i,t.lineType=t.isDash?"dashline":"line"}}for(var e=0;e<this.columnList.length;++e)this._generateColumnSegment(this.columnList[e])},mounted:function(){var e=this;this.$nextTick(function(){e.reCalculateLinePosition()});var t=this;this.resizeFunction=function(){t.reCalculateLinePosition()},window.addEventListener("resize",this.resizeFunction)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeFunction)},methods:{_ensureColumnIndex:function(e){for(var t=0;t<this.columnList.length;++t)if(this.columnList[t].name==e)return t;var a=this.columnList.length;return this.columnList.push({idx:a,name:e,color:this.colorList[a%this.colorList.length],rowNumbers:[]}),a},_generateColumnSegment:function(e){e.segments=[];for(var t=[],a=0;a<this.dataList.length;++a)t.push(0);for(var a=0;a<e.rowNumbers.length;++a)t[e.rowNumbers[a]]=1;for(var n=0,i=!1,a=0;a<t.length;++a)t[a]?i||(a>n&&e.segments.push({begin:n,end:a-1,isBlock:!1}),n=a,i=!0):i&&(a>n&&e.segments.push({begin:n,end:a-1,isBlock:!0}),n=a,i=!1);e.segments.push({begin:n,end:t.length-1,isBlock:i})},reCalculateLinePosition:function(){if(console.log("===========recal_line==========="),0!==this.rowList.length){var e={left:0,top:0},t=document.querySelector("[name=subsys0] .segment-block");if(t){var a=t.clientWidth,n=document.querySelector("[name=subsys0] .bodybox");this.lineStyles.length=0,this.labelStyles.length=0;for(var i=0;i<this.rowList.length;++i){var s=this.rowList[i],r=(this.$refs.line[i],0),o=0,l=0,c=this.rowList.length+1,d=n.offsetHeight/c,u=n.offsetTop;if(s.fromColumnIdx===s.toColumnIdx){var m=this.$refs.subsys[s.fromColumnIdx],f=m.offsetLeft+m.clientWidth/2+a/2;r=m.clientWidth,o=u+(i+1)*d-5-e.top,l=f-e.left}else{var g=this.$refs.subsys[s.fromColumnIdx],v=this.$refs.subsys[s.toColumnIdx],h=null,b=null;s.fromColumnIdx<s.toColumnIdx?(h=g,b=v):(h=v,b=g);var f=h.offsetLeft+h.clientWidth/2+a/2;r=b.offsetLeft+b.clientWidth/2-a/2-f,o=u+(i+1)*d-5-e.top,l=f-e.left}this.lineStyles.push({width:r+"px",top:o+"px",left:l+"px"}),this.labelStyles.push({left:-1*l+"px"})}}}}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),i={install:function(e){e.component(n.a.name,n.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(i),t.default=i},function(e,t,a){"use strict";function n(e){a(3)}var i=a(0),s=a(9),r=a(8),o=n,l=r(i.a,s.a,!1,o,"data-v-117cc0ca",null);t.a=l.exports},function(e,t,a){var n=a(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(6)("03ffdf4f",n,!0,{})},function(e,t,a){t=e.exports=a(5)(!1),t.push([e.i,'.seqdiagram[data-v-117cc0ca]{margin:0;padding:0;color:#191970;width:100%;height:100%;position:relative;display:flex;flex-direction:column}.seqdiagram [data-v-117cc0ca]{margin:0;padding:0}.seqdiagram .seqdiagram_title[data-v-117cc0ca]{display:flex;font-size:.75em;text-shadow:.125em .125em .125em #b3b3b3}.seqdiagram .seqdiagram_title .box[data-v-117cc0ca]{padding:.3125em .625em;border:.0625em solid gray;border-top:0;background-color:#fffacd}.seqdiagram .seqdiagram_title .west[data-v-117cc0ca]{border-left:0;border-bottom-right-radius:1em}.seqdiagram .seqdiagram_title .center[data-v-117cc0ca]{flex:1}.seqdiagram .seqdiagram_title .east[data-v-117cc0ca]{border-right:0;border-bottom-left-radius:1em}.seqdiagram .seqdiagram_sysbox[data-v-117cc0ca]{display:flex;justify-content:space-around;position:relative;flex:1}.seqdiagram .seqdiagram_sysbox .subsys[data-v-117cc0ca]{flex:1;display:flex;flex-direction:column;justify-content:space-between;max-width:12.5em;margin:.625em}.seqdiagram .seqdiagram_sysbox .subsys .title[data-v-117cc0ca]{border:.0625em solid #000;border-radius:.375em;padding:.3125em;text-align:center;text-shadow:.125em .125em .125em #b3b3b3;box-shadow:.25em .25em .25em #b3b3b3;font-size:.875em;background-image:linear-gradient(180deg,#ccc,#fff);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.seqdiagram .seqdiagram_sysbox .subsys .bodybox[data-v-117cc0ca]{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.seqdiagram .seqdiagram_sysbox .subsys .bodybox .segment-line[data-v-117cc0ca]{position:relative;top:0;left:0;z-index:0;width:0;border-left:1px dashed #000;flex:0.5}.seqdiagram .seqdiagram_sysbox .subsys .bodybox .segment-block[data-v-117cc0ca]{width:.625em;background-color:pink;flex:1;box-shadow:.25em .25em .25em #b3b3b3;z-index:1}.seqdiagram .seqdiagram_bottom[data-v-117cc0ca]{display:flex;font-size:.75em;text-shadow:.125em .125em .125em #b3b3b3;margin:.3125em}.seqdiagram .seqdiagram_bottom .side[data-v-117cc0ca]{flex:1}.seqdiagram .seqdiagram_bottom .center[data-v-117cc0ca]{padding:.9375em;border:.0625em solid gray;border-radius:1em;background-color:#fffacd}.seqdiagram .arrow_line[data-v-117cc0ca]{position:absolute;display:flex;justify-content:center;align-items:center;height:.625em;z-index:0;width:200px}.seqdiagram .arrow_line .line[data-v-117cc0ca]{border-bottom:.0625em solid #000;height:0;flex:1}.seqdiagram .arrow_line .dashline[data-v-117cc0ca]{border-bottom:.0625em dashed #000;height:0;flex:1}.seqdiagram .arrow_line .arrow_to_right[data-v-117cc0ca]:before{content:"\\25B6";color:#000}.seqdiagram .arrow_line .arrow_to_left[data-v-117cc0ca]:before{content:"\\25C0";color:#000}.seqdiagram .arrow_line .note[data-v-117cc0ca]{position:absolute;margin:auto;top:-1em;left:0;bottom:0;right:0;text-align:center;font-size:.875em;text-shadow:.125em .125em .125em #b3b3b3;paddng:0 .5em 0 .5em;color:dimgray}.seqdiagram .self_msg_line[data-v-117cc0ca]{position:absolute;display:flex;justify-content:center;align-items:center;height:.625em;z-index:0;width:200px}.seqdiagram .self_msg_line .link[data-v-117cc0ca]{width:1.5em;height:1.5em;border:.0625em solid #000;border-left:0}.seqdiagram .self_msg_line .dashlink[data-v-117cc0ca]{width:1.5em;height:1.5em;border:.0625em dashed #000;border-left:0}.seqdiagram .self_msg_line .arrow[data-v-117cc0ca]:before{content:"\\25C0";color:#000;position:absolute;left:0;bottom:-1.09375em}.seqdiagram .self_msg_line .note[data-v-117cc0ca]{flex:1;text-align:left;font-size:.875em;text-shadow:.125em .125em .125em #b3b3b3;color:dimgray;padding-left:.3125em}.seqdiagram .arrow_line[data-v-117cc0ca]:hover{cursor:pointer;background:#ccc}.seqdiagram .arrow_line:hover .line[data-v-117cc0ca]{border-bottom:.0625em solid red}.seqdiagram .arrow_line:hover .dashline[data-v-117cc0ca]{border-bottom:.0625em dashed red}.seqdiagram .arrow_line:hover .arrow_to_left[data-v-117cc0ca]:before,.seqdiagram .arrow_line:hover .arrow_to_right[data-v-117cc0ca]:before,.seqdiagram .arrow_line:hover .line_label[data-v-117cc0ca]{color:red}.seqdiagram .self_msg_line[data-v-117cc0ca]:hover{cursor:pointer}.seqdiagram .self_msg_line:hover .link[data-v-117cc0ca]{border:.0625em solid red;border-left:0}.seqdiagram .self_msg_line:hover .arrow[data-v-117cc0ca]:before,.seqdiagram .self_msg_line:hover .line_label[data-v-117cc0ca]{color:red}.seqdiagram .line_label[data-v-117cc0ca]{position:absolute;font-size:.875em;z-index:0;text-align:left}',""])},function(e,t){function a(e,t){var a=e[1]||"",i=e[3];if(!i)return a;if(t&&"function"==typeof btoa){var s=n(i);return[a].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([s]).join("\n")}return[a].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=a(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,a){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var s=this[i][0];"number"==typeof s&&(n[s]=!0)}for(i=0;i<e.length;i++){var r=e[i];"number"==typeof r[0]&&n[r[0]]||(a&&!r[2]?r[2]=a:a&&(r[2]="("+r[2]+") and ("+a+")"),t.push(r))}},t}},function(e,t,a){function n(e){for(var t=0;t<e.length;t++){var a=e[t],n=d[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(s(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var r=[],i=0;i<a.parts.length;i++)r.push(s(a.parts[i]));d[a.id]={id:a.id,refs:1,parts:r}}}}function i(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var t,a,n=document.querySelector("style["+b+'~="'+e.id+'"]');if(n){if(g)return v;n.parentNode.removeChild(n)}if(p){var s=f++;n=m||(m=i()),t=r.bind(null,n,s,!1),a=r.bind(null,n,s,!0)}else n=i(),t=o.bind(null,n),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else a()}}function r(e,t,a,n){var i=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=_(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function o(e,t){var a=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),h.ssrId&&e.setAttribute(b,t.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=a(7),d={},u=l&&(document.head||document.getElementsByTagName("head")[0]),m=null,f=0,g=!1,v=function(){},h=null,b="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,a,i){g=a,h=i||{};var s=c(e,t);return n(s),function(t){for(var a=[],i=0;i<s.length;i++){var r=s[i],o=d[r.id];o.refs--,a.push(o)}t?(s=c(e,t),n(s)):s=[];for(var i=0;i<a.length;i++){var o=a[i];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete d[o.id]}}}};var _=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var a=[],n={},i=0;i<t.length;i++){var s=t[i],r=s[0],o=s[1],l=s[2],c=s[3],d={id:e+":"+i,css:o,media:l,sourceMap:c};n[r]?n[r].parts.push(d):a.push(n[r]={id:r,parts:[d]})}return a}},function(e,t){e.exports=function(e,t,a,n,i,s){var r,o=e=e||{},l=typeof e.default;"object"!==l&&"function"!==l||(r=e,o=e.default);var c="function"==typeof o?o.options:o;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId=i);var d;if(s?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=d):n&&(d=n),d){var u=c.functional,m=u?c.render:c.beforeCreate;u?(c._injectStyles=d,c.render=function(e,t){return d.call(t),m(e,t)}):c.beforeCreate=m?[].concat(m,d):[d]}return{esModule:r,exports:o,options:c}}},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"seqdiagram",staticClass:"seqdiagram"},[a("div",{staticClass:"seqdiagram_sysbox"},e._l(e.columnList,function(t,n){return a("div",{key:t.name,ref:"subsys",refInFor:!0,staticClass:"subsys",attrs:{name:"subsys"+n}},[a("div",{staticClass:"title"},[e._v(e._s(t.name))]),e._v(" "),a("div",{staticClass:"bodybox"},[a("div",{staticClass:"segment-line"}),e._v(" "),e._l(t.segments,function(i,s){return[i.isBlock?a("div",{key:n+"-"+s,staticClass:"segment-block",style:{flex:i.end-i.begin+1,backgroundColor:t.color}}):e._e(),e._v(" "),i.isBlock?e._e():a("div",{key:n+"-"+s,staticClass:"segment-line",style:{flex:i.end-i.begin+1}})]}),e._v(" "),a("div",{staticClass:"segment-line"})],2),e._v(" "),a("div",{staticClass:"title"},[e._v(e._s(t.name))])])}),0),e._v(" "),e._l(e.rowList,function(t,n){return[t.fromColumnIdx<t.toColumnIdx?a("div",{key:"line-"+n,ref:"line",refInFor:!0,staticClass:"arrow_line",style:e.lineStyles[n],on:{click:function(a){return e.$emit("line-click",n,t)}}},[a("div",{class:t.lineType}),e._v(" "),a("div",{staticClass:"arrow_to_right"}),e._v(" "),a("div",{staticClass:"note"},[e._v(e._s(t.note))]),e._v(" "),a("div",{staticClass:"line_label",style:e.labelStyles[n]},[e._v(e._s(t.label))])]):e._e(),e._v(" "),t.fromColumnIdx>t.toColumnIdx?a("div",{key:"line-"+n,ref:"line",refInFor:!0,staticClass:"arrow_line",style:e.lineStyles[n],on:{click:function(a){return e.$emit("line-click",n,t)}}},[a("div",{staticClass:"arrow_to_left"}),e._v(" "),a("div",{class:t.lineType}),e._v(" "),a("div",{staticClass:"note"},[e._v(e._s(t.note))]),e._v(" "),a("div",{staticClass:"line_label",style:e.labelStyles[n]},[e._v(e._s(t.label))])]):e._e(),e._v(" "),t.fromColumnIdx==t.toColumnIdx?a("div",{key:"line-"+n,ref:"line",refInFor:!0,staticClass:"self_msg_line",style:e.lineStyles[n],on:{click:function(a){return e.$emit("line-click",n,t)}}},[a("div",{class:t.lineType}),e._v(" "),a("div",{staticClass:"arrow"}),e._v(" "),a("div",{staticClass:"note"},[e._v(e._s(t.note))]),e._v(" "),a("div",{staticClass:"line_label",style:e.labelStyles[n]},[e._v(e._s(t.label))])]):e._e()]})],2)},i=[],s={render:n,staticRenderFns:i};t.a=s}]);
//# sourceMappingURL=sequence-diagram.js.map