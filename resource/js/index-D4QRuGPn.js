import{l as e,a as t,_ as l,c as o,a0 as a,p as i,F as n,a9 as s,D as r}from"./index-30tzVDQE.js";import{g as u}from"./index-BvmDLUYP-ZbkWU4Li.js";import{o as c,e as d,n as p,f as v,g as f,H as y,s as m,b,x as h,I as g,G as S,r as _,D as w,a5 as k,J as T,z as x,a as N,m as z,F as E,S as K,j as O,B as j,t as $,E as P}from"./vue-DH2RNpQ3.js";const R=t("joy-smile"),V=[f("path",{d:"M2185.74 479.429a117.992 117.992 0 1 0-162.829-170.852c-284.772 271.204-732.314 271.204-1017.087 0A118.05 118.05 0 0 0 842.996 479.43c375.98 358.045 966.705 358.045 1342.744 0",fill:"currentColor","fill-opacity":"0.9"},null,-1)];const B=e(R,[["render",function(e,t,l,o,a,i){return c(),d("svg",{class:p(e.classes),style:v(e.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 3072 1024",role:"presentation"},V,6)}]]),{create:C}=o("sticky");const H=l(C({props:{position:{type:String,default:"top"},top:{type:[Number,String],default:0},bottom:{type:[Number,String],default:0},container:{type:Object,default:null},zIndex:{type:[Number,String],default:99}},emits:["change"],setup(e,{emit:t}){const l=y(),o=y(),i=m({fixed:!1,height:0,width:0,transform:0}),n=b((()=>"top"===e.position?Number(e.top):Number(e.bottom))),s=b((()=>i.fixed?{height:`${i.height}px`}:{})),r=b((()=>i.fixed?{[e.position]:`${n.value}px`,height:`${i.height}px`,width:`${i.width}px`,transform:i.transform?`translate3d(0, ${i.transform}px, 0)`:void 0,position:i.fixed?"fixed":void 0,zIndex:Number(e.zIndex)}:{})),c=()=>{const t=e.container;if(!l.value&&!t)return;const s=a(l),r=o.value,u=a(r),c=a(t);i.height=s.height,i.width=s.width;i.transform=(()=>{if(t){if("top"===e.position){const e=c.bottom-n.value-u.height;return e<0?e:0}{const e=document.documentElement.clientHeight,t=c.bottom-(e-n.value);return t<0?t:0}}return 0})(),i.fixed=(()=>{let l=!1;if("top"===e.position)l=t?n.value>s.top&&c.bottom>0:n.value>s.top;else{const e=document.documentElement.clientHeight;l=t?c.bottom>0&&e-n.value-u.height>c.top:e-n.value<s.bottom}return l})()};return h((()=>i.fixed),(e=>{t("change",e)})),g((()=>{c();u(l.value).addEventListener("scroll",c,!0)})),S((()=>{u(l.value).removeEventListener("scroll",c)})),{rootRef:l,rootStyle:s,stickyRef:o,stickyStyle:r}}}),[["render",function(e,t,l,o,a,i){return c(),d("div",{ref:"rootRef",class:"nut-sticky",style:v(e.rootStyle)},[f("div",{ref:"stickyRef",class:"nut-sticky__box",style:v(e.stickyStyle)},[_(e.$slots,"default")],4)],4)}]]),M=Symbol("nut-tab");var I=Object.defineProperty,D=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable,G=(e,t,l)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,Y=(e,t)=>{for(var l in t||(t={}))L.call(t,l)&&G(e,l,t[l]);if(D)for(var l of D(t))A.call(t,l)&&G(e,l,t[l]);return e},J=(e,t,l)=>(G(e,"symbol"!=typeof t?t+"":t,l),l);const W=(e,t,l,o)=>{const a=y(),i=y({width:0,height:0}),s=()=>{return e=void 0,t=null,l=function*(){var e,t;i.value.width=(null==(e=a.value)?void 0:e.clientWidth)||0,i.value.height=(null==(t=a.value)?void 0:t.clientHeight)||0},new Promise(((o,a)=>{var i=e=>{try{s(l.next(e))}catch(t){a(t)}},n=e=>{try{s(l.throw(e))}catch(t){a(t)}},s=e=>e.done?o(e.value):Promise.resolve(e.value).then(i,n);s((l=l.apply(e,t)).next())}));var e,t,l};g((()=>{setTimeout((()=>{s()}),100)}));const r=m({offset:0,moving:!1}),u=n();let c="";return{touchMethods:{onTouchStart(t){e.swipeable&&u.start(t)},onTouchMove(l){e.swipeable&&(u.move(l),r.moving=!0,((l,o)=>{var a;let n=l;switch("horizontal"==e.direction?(c=l>0?"right":"left",n=Math.abs(n)/i.value.width*100):(c=o>0?"bottom":"top",n=o,n=Math.abs(n)/(null==(a=i.value)?void 0:a.height)*100),n>85&&(n=85),c){case"left":case"top":t.isEnd()&&(n=0,r.moving=!1);break;case"right":case"bottom":n=-n,t.isBegin()&&(n=0,r.moving=!1)}r.offset=n})(u.deltaX.value,u.deltaY.value),"horizontal"==e.direction&&u.isHorizontal()&&(l.preventDefault(),l.stopPropagation()),"vertical"==e.direction&&u.isVertical()&&(l.preventDefault(),l.stopPropagation()))},onTouchEnd(){if(r.moving)switch(r.moving=!1,c){case"left":case"top":r.offset>35&&t.next();break;case"right":case"bottom":r.offset<-35&&t.prev()}}},touchState:r,tabsContentRef:a}};class F{constructor(){J(this,"title",""),J(this,"titleSlot"),J(this,"paneKey",""),J(this,"disabled",!1)}}const{create:U}=o("tabs"),X=U({components:{NutSticky:H,JoySmile:B},props:{modelValue:{type:[String,Number],default:0},color:{type:String,default:""},direction:{type:String,default:"horizontal"},size:{type:String,default:"normal"},type:{type:String,default:"line"},titleScroll:{type:Boolean,default:!1},ellipsis:{type:Boolean,default:!0},swipeable:{type:Boolean,default:!1},autoHeight:{type:Boolean,default:!1},background:{type:String,default:""},animatedTime:{type:[Number,String],default:300},titleGutter:{type:[Number,String],default:0},sticky:{type:Boolean,default:!1},top:{type:Number,default:0},align:{type:String,default:"center"}},emits:["update:modelValue","click","change"],setup(e,{emit:t,slots:l}){const o=y(null);let n;w(M,{activeKey:b((()=>e.modelValue||"0")),autoHeight:b((()=>e.autoHeight)),animatedTime:b((()=>e.animatedTime))});const u=y([]),c=e=>{e.forEach(((e,t)=>{var l,o,a,i,n,r,d,p,v;let f=e.type;if(f=f.name||f,"NutTabPane"==f){let c=new F;if((null==(l=e.props)?void 0:l.title)||(null==(o=e.props)?void 0:o["pane-key"])||(null==(a=e.props)?void 0:a.paneKey)){let l=s(null==(i=e.props)?void 0:i["pane-key"]),o="number"==l||"string"==l?String(null==(n=e.props)?void 0:n["pane-key"]):null,a=s(null==(r=e.props)?void 0:r.paneKey),u="number"==a||"string"==a?String(null==(d=e.props)?void 0:d.paneKey):null;c.title=null==(p=e.props)?void 0:p.title,c.paneKey=o||u||String(t),c.disabled=null==(v=e.props)?void 0:v.disabled}u.value.push(c)}else{if(" "==e.children)return;c(e.children)}}))},d=y(e.modelValue||0),p=e=>{let t=u.value.findIndex((t=>t.paneKey==e));0==u.value.length||-1==t||(d.value=t)},v=b((()=>e.titleScroll&&"vertical"===e.direction)),f=y(),m=y([]),S=t=>{const l=f.value,o=m.value;if(!l||!o||!o[d.value])return;const a=o[d.value];let i=0;if("vertical"===e.direction){i=a.offsetTop-l.offsetTop+10-(l.offsetHeight-a.offsetHeight)/2}else i=a.offsetLeft-(l.offsetWidth-a.offsetWidth)/2;_(l,i,.3,e.direction)},_=(e,t,l,o)=>{let a=0;const i="horizontal"===o?e.scrollLeft:e.scrollTop,n=Math.round(1e3*l/16);!function l(){"horizontal"===o?e.scrollLeft+=(t-i)/n:e.scrollTop+=(t-i)/n,++a<n&&r(l)}()},x=(t=(e=>null==(e=l.default)?void 0:e.call(l))())=>{u.value=[],(t=null==t?void 0:t.filter((e=>"string"!=typeof e.children)))&&t.length&&c(t),p(e.modelValue),T((()=>{S()}))};h((()=>{var e;return null==(e=l.default)?void 0:e.call(l)}),(e=>{x(e)}));h((()=>e.modelValue),(t=>{if(p(t),S(),n){let t=a(o.value).top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),l=Math.ceil(t-e.top);window.scrollTo({top:l,behavior:"smooth"})}})),g(x),k(x);const N={isBegin:()=>0==d.value,isEnd:()=>d.value==u.value.length-1,next:()=>{d.value+=1;const e=u.value[d.value].disabled;N.isEnd()&&e?N.prev():e&&d.value<u.value.length-1?N.next():N.updateValue(u.value[d.value])},prev:()=>{d.value-=1;const e=u.value[d.value].disabled;N.isBegin()&&e?N.next():e&&d.value>0?N.prev():N.updateValue(u.value[d.value])},updateValue:e=>{t("update:modelValue",e.paneKey),t("change",e)},tabChange:(e,l)=>{t("click",e),e.disabled||d.value==l||(d.value=l,N.updateValue(e))},setTabItemRef:(e,t)=>{m.value[t]=e}},{tabsContentRef:z,touchState:E,touchMethods:K}=W(e,N),O=b((()=>{let t=100*d.value;E.moving&&(t+=E.offset);let l={transform:"horizontal"==e.direction?`translate3d(-${t}%, 0, 0)`:`translate3d( 0,-${t}%, 0)`,transitionDuration:E.moving?void 0:`${e.animatedTime}ms`};return 0==e.animatedTime&&(l={}),l})),j=b((()=>({background:e.background}))),$=b((()=>({color:"smile"==e.type?e.color:"",background:"line"==e.type?e.color:""}))),P=b((()=>{if(!e.titleGutter)return{};const t=i(e.titleGutter);return"vertical"===e.direction?{paddingTop:t,paddingBottom:t}:{paddingLeft:t,paddingRight:t}}));return Y(Y({navRef:f,tabsContentRef:z,titles:u,contentStyle:O,tabsNavStyle:j,titleStyle:P,tabsActiveStyle:$,container:o,getScrollY:v,onStickyScroll:e=>{n=e.fixed}},N),K)}}),q=["onClick"],Q=["onClick"];const Z=l(X,[["render",function(e,t,l,o,a,i){const n=x("JoySmile"),s=x("nut-sticky");return c(),d("view",{ref:"container",class:p(["nut-tabs",[e.direction]])},[e.sticky?(c(),N(s,{key:0,top:e.top,container:e.container,onScroll:e.onStickyScroll},{default:z((()=>[f("view",{ref:"navRef",class:p(["nut-tabs__titles",{"nut-tabs__titles-left":"left"===e.align,[e.type]:e.type,scrollable:e.titleScroll,[e.size]:e.size}]),style:v(e.tabsNavStyle)},[e.$slots.titles?_(e.$slots,"titles",{key:0}):(c(!0),d(E,{key:1},K(e.titles,((t,l)=>(c(),d("view",{key:t.paneKey,class:p(["nut-tabs__titles-item",{"nut-tabs__titles-item-left":"left"===e.align,active:t.paneKey==e.modelValue,disabled:t.disabled}]),style:v(e.titleStyle),onClick:o=>e.tabChange(t,l)},["line"==e.type?(c(),d("view",{key:0,class:"nut-tabs__titles-item__line",style:v(e.tabsActiveStyle)},null,4)):O("",!0),"smile"==e.type?(c(),d("view",{key:1,class:"nut-tabs__titles-item__smile",style:v(e.tabsActiveStyle)},[j(n,{color:e.color},null,8,["color"])],4)):O("",!0),f("view",{class:p(["nut-tabs__titles-item__text",{ellipsis:e.ellipsis}])},$(t.title),3)],14,q)))),128))],6)])),_:3},8,["top","container","onScroll"])):(c(),d("view",{key:1,ref:"navRef",class:p(["nut-tabs__titles",{"nut-tabs__titles-left":"left"===e.align,[e.type]:e.type,scrollable:e.titleScroll,[e.size]:e.size}]),style:v(e.tabsNavStyle)},[e.$slots.titles?_(e.$slots,"titles",{key:0}):(c(!0),d(E,{key:1},K(e.titles,((t,l)=>(c(),d("view",{key:t.paneKey,ref_for:!0,ref:t=>e.setTabItemRef(t,l),class:p(["nut-tabs__titles-item",{"nut-tabs__titles-item-left":"left"===e.align,active:t.paneKey==e.modelValue,disabled:t.disabled}]),style:v(e.titleStyle),onClick:o=>e.tabChange(t,l)},["line"==e.type?(c(),d("view",{key:0,class:"nut-tabs__titles-item__line",style:v(e.tabsActiveStyle)},null,4)):O("",!0),"smile"==e.type?(c(),d("view",{key:1,class:"nut-tabs__titles-item__smile",style:v(e.tabsActiveStyle)},[j(n,{color:e.color},null,8,["color"])],4)):O("",!0),f("view",{class:p(["nut-tabs__titles-item__text",{ellipsis:e.ellipsis}])},$(t.title),3)],14,Q)))),128))],6)),f("view",{ref:"tabsContentRef",class:"nut-tabs__content",style:v(e.contentStyle),onTouchstart:t[0]||(t[0]=(...t)=>e.onTouchStart&&e.onTouchStart(...t)),onTouchmove:t[1]||(t[1]=(...t)=>e.onTouchMove&&e.onTouchMove(...t)),onTouchend:t[2]||(t[2]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t)),onTouchcancel:t[3]||(t[3]=(...t)=>e.onTouchEnd&&e.onTouchEnd(...t))},[_(e.$slots,"default")],36)],2)}]]);var ee=Object.defineProperty,te=Object.defineProperties,le=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,ne=(e,t,l)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;const{create:se}=o("tab-pane"),re=se({props:{title:{type:[String,Number],default:""},paneKey:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e){const t=P(M),l=b((()=>({display:0==(null==t?void 0:t.animatedTime.value)&&e.paneKey!=(null==t?void 0:t.activeKey.value)?"none":void 0})));return((e,t)=>te(e,le(t)))(((e,t)=>{for(var l in t||(t={}))ae.call(t,l)&&ne(e,l,t[l]);if(oe)for(var l of oe(t))ie.call(t,l)&&ne(e,l,t[l]);return e})({},t),{paneStyle:l})}});const ue=l(re,[["render",function(e,t,l,o,a,i){return c(),d("view",{class:p(["nut-tab-pane",{inactive:e.paneKey!=e.activeKey&&e.autoHeight}]),style:v(e.paneStyle)},[_(e.$slots,"default")],6)}]]);export{Z as N,ue as a};