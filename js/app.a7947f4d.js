(function(e){function t(t){for(var a,c,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},r=[];function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/fold_my_paper/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},b590:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=Object(a["g"])('<div class="py-5 border-bottom"><div class="container"><h1 class="display-3">Fold my paper!</h1><p class="lead"> How many times can you fold a sheet of paper?<br>Experiments shows that any sheet of paper can me folded for maximum 7 times. This happens because the thickness of the paper becomes so hight that is impossibile to fold. </p><p class="lead"> This simple project show how much the thickness of the paper rises exponentially when folded and allow us to calculate what thickness we would have if we could fold it more than X times. </p><p><em>Someone even says that if we fold a sheet of paper for 45 times, its thickness would be so hight that would cover the distance from Earth to the Moon. Let&#39;s try it! </em></p></div></div>',1),r={class:"py-5 border-bottom bg-light"},c={class:"container"},i={class:"row row-cols-1 row-cols-md-2"},s={class:"col"},l=Object(a["e"])("option",{value:"um"},"Micron",-1),u=Object(a["e"])("option",{value:"mm"},"Millimeters",-1),d=[l,u],b={class:"col"},p={class:"row justify-content-center"},m={class:"col col-md-8"},f={class:"input-group-text"},h={class:"bg-dark text-light"},j={class:"py-5"},O={class:"container"},v=Object(a["e"])("h2",{class:"mb-4"}," Let's see where can you arrive... maybe to the Moon! ",-1),y={class:"list-group"};function g(e,t,n,l,u,g){var w=Object(a["o"])("FormInput");return Object(a["k"])(),Object(a["d"])("div",null,[o,Object(a["e"])("div",r,[Object(a["e"])("div",c,[Object(a["e"])("div",i,[Object(a["e"])("div",s,[Object(a["i"])(w,{label:"Paper thickness",modelValue:e.thickness,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.thickness=t}),type:"number"},{after:Object(a["s"])((function(){return[Object(a["t"])(Object(a["e"])("select",{class:"form-select",style:{"min-width":"140px",flex:"0"},"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.unit=t})},d,512),[[a["q"],e.unit]])]})),_:1},8,["modelValue"])]),Object(a["e"])("div",b,[Object(a["i"])(w,{label:"Folding times",modelValue:e.foldingTimes,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.foldingTimes=t}),type:"number"},null,8,["modelValue"])])]),Object(a["e"])("div",p,[Object(a["e"])("div",m,[Object(a["i"])(w,{label:"Final thickness","model-value":e.formatNumber(e.finalThickness)+" "+e.finalThicknessUnit,readonly:""},Object(a["f"])({after:Object(a["s"])((function(){return[Object(a["e"])("div",f,Object(a["p"])(e.formatNumber(e.sheetsCount))+" sheets ",1)]})),_:2},["au"===e.finalThicknessUnit?{name:"message",fn:Object(a["s"])((function(){return[Object(a["e"])("small",null,Object(a["p"])(e.formatNumber(e.finalThicknessKm))+" km",1)]}))}:void 0]),1032,["model-value"])])])])]),Object(a["e"])("div",h,[Object(a["e"])("div",j,[Object(a["e"])("div",O,[v,Object(a["e"])("ul",y,[(Object(a["k"])(!0),Object(a["d"])(a["a"],null,Object(a["m"])(e.reachedDistances,(function(t){return Object(a["k"])(),Object(a["d"])("li",{class:"list-group-item",key:t.destination},[Object(a["e"])("strong",null,Object(a["p"])(t.destination),1),Object(a["h"])(" - OK! ("+Object(a["p"])(e.formatNumber(t.distance))+" km) ",1)])})),128))])])])])])}n("d3b7"),n("cb29"),n("4de4"),n("b680"),n("25f0"),n("ac1f"),n("466d");var w={class:"mb-3"},k={class:"form-label"},x={class:"input-group"},T=["type","value","min","readonly"],S={class:"ms-3"};function V(e,t,n,o,r,c){return Object(a["k"])(),Object(a["d"])("div",w,[Object(a["e"])("label",k,Object(a["p"])(e.label),1),Object(a["e"])("div",x,[Object(a["e"])("input",{type:e.type,class:"form-control",value:e.modelValue,min:e.minValue,readonly:e.readonly,onInput:t[0]||(t[0]=function(){return e.onInput&&e.onInput.apply(e,arguments)})},null,40,T),Object(a["n"])(e.$slots,"after")]),Object(a["e"])("div",S,[Object(a["n"])(e.$slots,"message",{class:""})])])}n("a9e3");var M=n("5c40"),_=Object(M["n"])({name:"FormInput",props:{label:String,modelValue:[String,Number],type:{type:String,default:"text"},minValue:{default:0,type:Number},readonly:Boolean},setup:function(e,t){var n=t.emit;function a(t){var a=t.currentTarget.value;"number"===e.type&&(a=+a),n("update:modelValue",a)}return{onInput:a}}}),F=n("6b0d"),N=n.n(F);const I=N()(_,[["render",V]]);var P=I,U=n("99ab"),D=Object(a["j"])({name:"App",components:{FormInput:P},setup:function(){var e=1496e5,t=Object(a["l"])(80),n=Object(a["l"])("um"),o=Object(a["l"])(2),r=[{destination:"Moon",distance:384400},{destination:"Mars",distance:7834e4},{destination:"Sun",distance:147390321},{destination:"Jupiter",distance:62873e4},{destination:"Saturn",distance:1275e6},{destination:"Uranus",distance:272395e4},{destination:"Neptune",distance:43514e5}],c=Object(a["b"])((function(){return Array(o.value).fill(0).reduce((function(e){return 2*e}),1)})),i=Object(a["l"])(""),s=Object(a["l"])(0),l=Object(a["l"])(0);Object(a["r"])([c,t,n],(function(){return d()}),{immediate:!0});var u=Object(a["b"])((function(){return r.filter((function(e){return e.distance<=l.value}))}));function d(){var a=c.value*t.value,o=a;"um"==n.value&&(o=a/1e3),o=+o.toFixed(2),l.value=Object(U["a"])(o,"mm").to("km");var r=Object(U["a"])(o,"mm").to("best","metric").toString(),u=r.match(/([\d.]+)(\w+)/);if(u&&3===u.length){var d=+u[1],b=u[2];d>e&&(b="au",d/=1496e5),i.value=b,s.value=d}else i.value="",s.value=0}function b(e){return new Intl.NumberFormat(navigator.language,{maximumFractionDigits:2}).format(e)}return{thickness:t,unit:n,foldingTimes:o,finalThickness:s,finalThicknessUnit:i,finalThicknessKm:l,sheetsCount:c,formatNumber:b,reachedDistances:u}}});n("ebf8");const J=N()(D,[["render",g]]);var K=J;n("ab8b");Object(a["c"])(K).mount("#app")},ebf8:function(e,t,n){"use strict";n("b590")}});
//# sourceMappingURL=app.a7947f4d.js.map