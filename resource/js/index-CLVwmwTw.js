import{_ as e}from"./ScrollView-DaG0IhIx.js";import{_ as a}from"./Btn-BQ5zHeyl.js";import{w as t,C as l,i as n,b as s,M as r,N as o,q as i,e as u,f as c,v as d,t as p,s as m,z as v}from"./index-30tzVDQE.js";import{_ as y}from"./index-B7umTcYS.js";import{i as g,a as _}from"./index-DPr-pNgQ.js";import{_ as h}from"./table_line-BIUfuQbI.js";import{d as f,H as D,b,w,p as k,v as x,o as M,e as C,g as N,B as V,i as I,t as j,F as T,S as O,n as S,r as A,l as $,h as L,a8 as U,a9 as B,j as z,x as W,G as Y,a as q,m as E,_ as F,$ as R,I as P,s as Z,a0 as H}from"./vue-DH2RNpQ3.js";const G={isLeapYear:function(e){return e%4==0&&e%100!=0||e%400==0},getWhatDay:function(e,a,t){return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][new Date(e+"/"+a+"/"+t).getDay()]},getMonthPreDay:function(e,a){let t=new Date(e+"/"+a+"/01").getDay();return 0==t&&(t=7),t},getMonthDays:function(e,a){return/^0/.test(a)&&(a=a.split("")[1]),[0,31,this.isLeapYear(Number(e))?29:28,31,30,31,30,31,31,30,31,30,31][a]},getNumTwoBit:function(e){return((e=Number(e))>9?"":"0")+e},date2Str:function(e,a){a=a||"-";return[e.getFullYear(),this.getNumTwoBit(e.getMonth()+1),this.getNumTwoBit(e.getDate())].join(a)},getDay:function(e){e=e||0;let a=new Date;const t=864e5*e;return a=new Date(a.getTime()+t),this.date2Str(a)},compareDate:function(e,a){return!(new Date(e.replace("-","/").replace("-","/"))>=new Date(a.replace("-","/").replace("-","/")))},isEqual:function(e,a){return new Date(e).getTime()==new Date(a).getTime()},getMonthWeek:function(e,a,t,l=0){const n=new Date(Number(e),parseInt(a)-1,Number(t));let s=n.getDay();const r=n.getDate();let o=6-s;return 0!==l&&(s=0==s?7:s,o=7-s),Math.ceil((r+o)/7)},getYearWeek:function(e,a,t,l=0){const n=new Date(Number(e),parseInt(a)-1,Number(t)),s=new Date(Number(e),0,1),r=Math.round((n.valueOf()-s.valueOf())/864e5);return Math.ceil((r+(s.getDay()+1-1))/7)},getWeekDate:function(e,a,t,l=0){const n=new Date(Number(e),parseInt(a)-1,Number(t)),s=n.getTime();let r=n.getDay();if(0===l){const e=864e5,a=s-r*e,t=s+(6-r)*e;return[this.date2Str(new Date(a)),this.date2Str(new Date(t))]}{r=0==r?7:r;const e=864e5,a=s-(r-1)*e,t=s+(7-r)*e;return[this.date2Str(new Date(a)),this.date2Str(new Date(t))]}},formatResultDate:function(e){const a=[...e.split("-")];return a[2]=G.getNumTwoBit(Number(a[2])),a[3]=`${a[0]}-${a[1]}-${a[2]}`,a[4]=G.getWhatDay(+a[0],+a[1],+a[2]),a}};var J=Object.defineProperty,K=Object.defineProperties,Q=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,te=(e,a,t)=>a in e?J(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;const le=()=>L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[L("path",{d:"M6.605 9.49a.771.771 0 0 1 0-.98l3.6-4.372a.771.771 0 0 1 1.19.981L8.2 9l3.197 3.881a.771.771 0 1 1-1.191.98l-3.6-4.37Z"})]),ne=()=>L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[L("path",{d:"M11.396 9.49a.771.771 0 0 0 0-.98l-3.6-4.372a.771.771 0 0 0-1.191.981L9.8 9l-3.196 3.881a.771.771 0 0 0 1.19.98l3.6-4.37Z"})]),se=()=>L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[L("path",{d:"M13.853 4.026a.771.771 0 0 1 .12 1.085L10.864 9l3.11 3.889a.771.771 0 1 1-1.204.963L9.272 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.084-.12Zm-5.245 0a.771.771 0 0 1 .12 1.085L5.617 9l3.111 3.889a.771.771 0 0 1-1.205.963L4.026 9.482a.771.771 0 0 1 0-.964l3.497-4.371a.771.771 0 0 1 1.085-.12Z"})]),re=()=>L("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[L("path",{d:"M4.147 13.974a.771.771 0 0 1-.12-1.085L7.136 9 4.028 5.11a.771.771 0 1 1 1.204-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.084.12Zm5.245 0a.771.771 0 0 1-.12-1.085L12.383 9 9.272 5.11a.771.771 0 1 1 1.205-.963l3.497 4.371a.771.771 0 0 1 0 .964l-3.497 4.371a.771.771 0 0 1-1.085.12Z"})]),oe=e=>e?{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate()}:null,ie=e=>e?new Date(e.year,e.month-1,e.date):null,ue=e=>Array.isArray(e)?e.map((e=>oe(e))):e?[oe(e)]:[],ce=(e,a,t)=>{let l=a-1,n=e;l<=0&&(l=12,n-=1);let s=G.getMonthPreDay(e,a);s-=t,s>=7&&(s-=7);const r=G.getMonthDays(`${n}`,`${l}`);return Array.from(Array(r),((e,a)=>({type:"prev",year:n,month:l,date:a+1}))).slice(r-s)},de=(e,a)=>{const t=G.getMonthDays(`${e}`,`${a}`);return Array.from(Array(t),((t,l)=>({type:"current",year:e,month:a,date:l+1})))},pe=(e,a)=>{if(e&&a)return e.year===a.year?e.month===a.month?e.date-a.date:e.month-a.month:e.year-a.year},me=(e,a)=>0===pe(e,a),ve={class:"nut-calendarcard"},ye={class:"nut-calendarcard-header"},ge={class:"nut-calendarcard-header-left"},_e={class:"nut-calendarcard-header-title"},he={class:"nut-calendarcard-header-right"},fe={class:"nut-calendarcard-content"},De={class:"nut-calendarcard-days"},be={class:"nut-calendarcard-days"},we=["onClick"],ke={class:"nut-calendarcard-day-top"},xe={class:"nut-calendarcard-day-inner"},Me={class:"nut-calendarcard-day-bottom"},Ce="NutCalendarCard",Ne=f((Ve=((e,a)=>{for(var t in a||(a={}))ee.call(a,t)&&te(e,t,a[t]);if(X)for(var t of X(a))ae.call(a,t)&&te(e,t,a[t]);return e})({},{name:Ce}),Ie={__name:"calendar-card",props:{type:{default:"single"},firstDayOfWeek:{default:0},modelValue:{default:null},startDate:{default:null},endDate:{default:null},disableDay:{type:Function,default:()=>!1}},emits:["update:modelValue","change","dayClick","pageChange"],setup(e,{expose:a,emit:t}){const n=e,s=t,r=l(Ce),o=D((()=>{let e=new Date(Date.now());const a=n.modelValue;return Array.isArray(a)?a.length&&(e=a[0]):a&&(e=a),{year:e.getFullYear(),month:e.getMonth()+1}})()),i=D([]),u=b((()=>{const e=r("weekdays").map(((e,a)=>({name:e,key:a})));return[...e.slice(n.firstDayOfWeek,7),...e.slice(0,n.firstDayOfWeek)]})),c=D(n.modelValue?ue(n.modelValue):[]);w((()=>{const e=n.modelValue?ue(n.modelValue):[];c.value=e}));const d=e=>{if(c.value=e,"single"===n.type){const a=ie(e[0]);s("update:modelValue",a),s("change",a)}else if("multiple"===n.type||"range"===n.type||"week"===n.type){const t=(a=e,Array.isArray(a)?a.map((e=>ie(e))):a?[ie(a)]:[]);s("update:modelValue",t),s("change",t)}var a};w((()=>{const e=((e,a)=>{const t=e.year,l=e.month,n=[...ce(t,l,a),...de(t,l)],s=n.length,r=12===e.month?e.year+1:e.year,o=12===e.month?1:e.month+1;for(let i=1;i<=42-s;i++)n.push({type:"next",year:r,month:o,date:i});return n})(o.value,n.firstDayOfWeek);i.value=e,s("pageChange",o.value)}));const p=e=>!(!n.disableDay||!n.disableDay(e))||!!(n.startDate&&Number(pe(e,oe(n.startDate)))<0)||!!(n.endDate&&Number(pe(e,oe(n.endDate)))>0),m=e=>{if(p(e))return["disabled"];const a=[];return"current"===e.type&&((e=>{if("single"===n.type||"multiple"===n.type){for(const a in c.value)if(me(e,c.value[a]))return!0}else if("range"===n.type&&1===c.value.length&&me(c.value[0],e))return!0;return!1})(e)&&a.push("active"),(e=>("range"===n.type||"week"===n.type)&&2===c.value.length&&me(e,c.value[0]))(e)&&a.push("start"),(e=>("range"===n.type||"week"===n.type)&&2===c.value.length&&me(e,c.value[1]))(e)&&a.push("end"),(e=>{if(("range"===n.type||"week"===n.type)&&2===c.value.length){const a=pe(c.value[0],e),t=pe(e,c.value[1]);if(a&&a<0&&t&&t<0)return!0}return!1})(e)&&a.push("mid"),(e=>{const a=new Date(e.year,e.month-1,e.date).getDay();return 0===a||6===a})(e)&&a.push("weekend")),a},v=(e,a)=>{if(n.startDate){const t=pe({year:e,month:a,date:31},oe(n.startDate));if(t&&t<0)return}if(n.endDate){const t=pe({year:e,month:a,date:1},oe(n.endDate));if(t&&t>0)return}o.value={year:e,month:a}},y=(e=1)=>{const a=12*o.value.year+o.value.month;let t=(a+e)%12;0===t&&(t=12);const l=Math.floor((a+e-t)/12);v(l,t)},g=e=>{if("prev"!==e.type&&"next"!==e.type&&!p(e))switch(s("dayClick",e),n.type){case"single":c.value[0]&&me(c.value[0],e)?d([]):d([e]);break;case"multiple":{const a=c.value.find((a=>me(a,e)));d(a?c.value.filter((e=>e!==a)):[...c.value,e]);break}case"range":{const a=c.value.length;if(0===a||2===a)d([e]);else if(1===a){const a=pe(c.value[0],e);d(null==a?[]:a<0?[c.value[0],e]:[e,c.value[0]])}else console.warn("[NutUI] Calendar range error");break}case"week":if(2===c.value.length||0===c.value.length){const[a,t]=((e,a)=>{const t=new Date(e.year,e.month-1,e.date),l=(t.getDay()+7-a)%7;return[oe(new Date(t.getTime()-864e5*l)),oe(new Date(t.getTime()+864e5*(6-l)))]})(e,n.firstDayOfWeek);d([a,t])}else console.warn("[NutUI] Calendar week error");break;default:console.warn("[NutUI] Calendar type error")}};return a({jump:y,jumpTo:v}),(e,a)=>k((M(),C("div",ve,[N("div",ye,[N("div",ge,[N("div",{class:"double-left",onClick:a[0]||(a[0]=e=>y(-12))},[V(I(se))]),N("div",{class:"left",onClick:a[1]||(a[1]=e=>y(-1))},[V(I(le))])]),N("div",_e,j(I(r)("monthTitle",o.value.year,o.value.month)),1),N("div",he,[N("div",{class:"right",onClick:a[2]||(a[2]=e=>y(1))},[V(I(ne))]),N("div",{class:"double-right",onClick:a[3]||(a[3]=e=>y(12))},[V(I(re))])])]),N("div",fe,[N("div",De,[(M(!0),C(T,null,O(u.value,(e=>(M(),C("div",{key:e.name,class:S(["nut-calendarcard-day header",0===e.key||6===e.key?"weekend":""])},j(e.name),3)))),128))]),N("div",be,[(M(!0),C(T,null,O(i.value,(a=>(M(),C("div",{key:`${a.year}-${a.month}-${a.date}`,class:S(["nut-calendarcard-day",[a.type,...m(a)]]),onClick:e=>g(a)},[N("div",ke,[A(e.$slots,"top",{day:a})]),N("div",xe,[A(e.$slots,"default",{day:a},(()=>[$(j(a.date),1)]))]),N("div",Me,[A(e.$slots,"bottom",{day:a})])],10,we)))),128))])])],512)),[[x,i.value.length>0]])}},K(Ve,Q(Ie))));var Ve,Ie;t(Ne);const je=n.global.t,Te={1:je("identity_map_1"),2:je("identity_map_2"),3:je("identity_map_3"),4:je("identity_map_4"),5:je("identity_map_5")},Oe={class:"form-select-wrap"},Se={key:0,class:"options-box"},Ae=["onClick"],$e=s(f({__name:"Select",props:U({options:{}},{modelValue:{},modelModifiers:{}}),emits:U(["change"],["update:modelValue"]),setup(e,{emit:a}){const t=e,l=a,n=B(e,"modelValue"),s=b((()=>t.options.find((e=>e.value==n.value)))),r=D(!1),o=()=>{r.value=!r.value};return(e,a)=>(M(),C("div",Oe,[N("div",{class:"form-select",onClick:o},[N("span",null,j(s.value?.label),1),N("iconpark-icon",{name:"signicon09",color:"#ebe9f3",size:"20",class:S(["refresh",{rotate:r.value}])},null,2)]),r.value?(M(),C("div",Se,[(M(!0),C(T,null,O(e.options,(e=>(M(),C("div",{class:S(["option",{active:e.value===n.value}]),onClick:a=>{return t=e.value,r.value=!1,void(t!==n.value&&(n.value=t,l("change")));var t}},j(e.label),11,Ae)))),256))])):z("",!0)]))}}),[["__scopeId","data-v-7f702fa8"]]),Le=e=>(F("data-v-54f06dbc"),e=e(),R(),e),Ue={class:"popup_body"},Be={class:"account"},ze=Le((()=>N("span",null,"会员账号：",-1))),We={class:"select"},Ye=Le((()=>N("span",null,"代理层级",-1))),qe={class:"btn"},Ee=s(f({__name:"levelManage",props:U(["currentUser","IdentityMap"],{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const t=e,l=B(e,"modelValue"),n=D(""),s=D({}),d=b((()=>{const e=[];return Object.keys(t.IdentityMap).map((a=>{(s.value.level||0)<=Number(a)&&e.push({label:t.IdentityMap[a],value:a})})),e}));W(l,(()=>{n.value=String(t.currentUser.level)}));const p=()=>{const e=u.req_improve_agent_lev();e.role_id=s.value.role_id,e.level=n.value,c.instance.sendRequest(e)};return r.addMsgEvent(o.msgType.msg_notify_improve_agent_lev,(e=>{e&&e.result&&(l.value=!1)})),Y((()=>{r.removeMsgEvent(o.msgType.msg_notify_improve_agent_lev,null)})),(t,s)=>(M(),q(i,{visible:l.value,"onUpdate:visible":s[1]||(s[1]=e=>l.value=e),title:"层级管理"},{default:E((()=>[N("div",Ue,[N("div",Be,[ze,N("span",null,j(e.currentUser.username),1)]),N("div",We,[Ye,V($e,{modelValue:n.value,"onUpdate:modelValue":s[0]||(s[0]=e=>n.value=e),options:d.value},null,8,["modelValue","options"])]),N("div",qe,[V(a,{width:"200px",height:"42px",fontSize:"14px",onClick:p},{default:E((()=>[$("代理介绍")])),_:1})])])])),_:1},8,["visible"]))}}),[["__scopeId","data-v-54f06dbc"]]),Fe=e=>(F("data-v-d8696e02"),e=e(),R(),e),Re={class:"table-content"},Pe={class:"tab"},Ze={class:"form"},He={class:"form_one"},Ge=Fe((()=>N("iconpark-icon",{"icon-id":"dailiicon02",size:"1.2rem",class:"refresh"},null,-1))),Je={class:"form_two mt-5"},Ke={class:"form_date"},Qe=Fe((()=>N("iconpark-icon",{"icon-id":"majesticonssearch-line",size:"1.2rem",class:"refresh"},null,-1))),Xe={class:"level_info"},ea={class:"table_column"},aa=Fe((()=>N("img",{src:h,alt:""},null,-1))),ta=["onClick","innerHTML"],la=f({__name:"agentTable",props:{proxyInfo:{type:Object,default:()=>{}}},setup(e){const{t:a}=d.useI18n();P((()=>{F()}));const t=e,l=D(1),n=D(),s=b((()=>({1:[{title:"会员账号",key:"username",lang:"Account No"},{title:"层级",key:"level",lang:"proxy_page_tag"},{title:"团队佣金",key:"team_return",isNumber:!0,isMoney:!0,lang:"proxy_page_teamYj"},{title:"直属佣金",key:"personal_return",isNumber:!0,isMoney:!0,lang:"proxy_page_zsCommission"}],2:[{title:"会员账号",key:"username",lang:"Account No"},{title:"层级",key:"level",lang:"proxy_page_tag"},{title:"有效投注",key:"personal_bet",isNumber:!0,isMoney:!0,lang:"proxy_page_yxBet"},{title:"直属佣金",key:"personal_return",isNumber:!0,isMoney:!0,lang:"proxy_page_zsCommission"}],3:[{title:"会员账号",key:"username",lang:"Account No"},{title:"层级",key:"level",lang:"proxy_page_tag"},{title:"团队投注",key:"team_bet",isNumber:!0,isMoney:!0,lang:"proxy_page_teamBet"},{title:"团队佣金",key:"team_return",isNumber:!0,isMoney:!0,lang:"proxy_page_teamYj"},{title:"人数",key:"team_num",isNumber:!0,lang:"proxy_page_numBer"},{title:"操作",key:"operate",lang:"proxy_page_caoZ"}]}[l.value]))),i=Z({total_page:0,list:[]}),m=Z({page:1,search_name:"",search_lev:"0"}),v=b((()=>{const e=[];return Object.keys(Te).map((a=>{(t.proxyInfo.level||0)>Number(a)&&e.push({label:Te[a],value:a})})),e.unshift({label:"全部",value:"0"}),e})),h=D(!1),f=D({}),w=D("today"),k=D([{label:a("Day_1"),value:"today",lang:"Day_1"},{label:a("Day_2"),value:3,lang:"Day_2"},{label:a("Day_3"),value:"week",lang:"Day_3"},{label:a("Day_4"),value:"month",lang:"Day_4"},{label:a("Day_5"),value:7,lang:"Day_5"},{label:a("Day_6"),value:15,lang:"Day_6"},{label:a("Day_7"),value:30,lang:"Day_7"}]),x=D(),A=b((()=>2===x.value?.length?x.value[0].toLocaleDateString()+"-"+x.value[1].toLocaleDateString():"")),$=D(null),L=e=>{2===e.length&&$.value?.toggle()};function U(e){const a=new Date;let t,l;switch(e){case"today":t=new Date(a),l=new Date(a);break;case"week":t=new Date(a),t.setDate(a.getDate()-a.getDay()+1),l=new Date(t),l.setDate(t.getDate()+6);break;case"month":t=new Date(a.getFullYear(),a.getMonth(),1),l=new Date(a.getFullYear(),a.getMonth()+1,0);break;default:if("number"!=typeof e)throw new Error("Invalid value");t=new Date(a),t.setDate(a.getDate()-e+1),l=new Date(a)}return[t,l]}W(w,(e=>{console.log(U(e),"getDateRange(val)"),x.value=U(e)}),{immediate:!0}),W(x,(e=>{2===e?.length&&F()}));const B=()=>{F()},F=()=>{m.page=1,H()};function R(e){return{year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()}}const H=()=>{i.total_page=0,i.list=[];const e=u.req_daily_return_his();Object.assign(e.start_time,R(x.value[0])),Object.assign(e.end_time,R(x.value[1])),e.page=m.page,e.search_name=m.search_name,e.search_lev=m.search_lev,c.instance.sendRequest(e)},G=(e,a)=>{let t="",l=e[a];switch(a){case"level":t=Te[l]||"--";break;case"team_num":case"team_bet":case"personal_bet":case"personal_return":case"team_return":t=Number(l).toLocaleString();break;case"operate":t='<span  class="td_btn" style="color: #80FF44;cursor: pointer;user-select: none;">123</span>';break;default:t=l}return t};return r.addMsgEvent(o.msgType.msg_notify_daily_return_his,(e=>{console.log("=>(agentTable.vue:92) rs",e,"----------------------------------"),i.total_page=e.total||0,i.list=e.records||[]})),Y((()=>{r.removeMsgEvent(o.msgType.msg_notify_daily_return_his,null)})),(e,t)=>{const r=Ne,o=g,u=_,c=p,d=y;return M(),C("div",Re,[N("div",Pe,[N("div",{class:S({tab_ac:1==l.value}),onClick:t[0]||(t[0]=e=>l.value=1)},j(I(a)("General Report")),3),N("div",{class:S({tab_ac:2==l.value}),onClick:t[1]||(t[1]=e=>l.value=2)},j(I(a)("Direct Report")),3),N("div",{class:S({tab_ac:3==l.value}),onClick:t[2]||(t[2]=e=>l.value=3)},j(I(a)("Team Report")),3)]),N("div",Ze,[N("div",He,[V(u,{class:"form_date",overlay:!1},{icon:E((()=>[Ge])),default:E((()=>[V(o,{title:A.value,ref_key:"calendarItemRef",ref:$},{default:E((()=>[V(r,{modelValue:x.value,"onUpdate:modelValue":t[3]||(t[3]=e=>x.value=e),type:"range",onChange:L},null,8,["modelValue"])])),_:1},8,["title"])])),_:1}),V($e,{modelValue:w.value,"onUpdate:modelValue":t[4]||(t[4]=e=>w.value=e),options:k.value},null,8,["modelValue","options"])]),N("div",Je,[N("div",Ke,[V(c,{modelValue:m.search_name,"onUpdate:modelValue":t[5]||(t[5]=e=>m.search_name=e),placeholder:I(a)("home_page_inputAccount"),onChange:B},{left:E((()=>[Qe])),_:1},8,["modelValue","placeholder"])]),V($e,{modelValue:m.search_lev,"onUpdate:modelValue":t[6]||(t[6]=e=>m.search_lev=e),options:v.value,onChange:F},null,8,["modelValue","options"])])]),N("div",null,[N("div",Xe,[N("div",ea,[(M(!0),C(T,null,O(s.value,((e,t)=>(M(),C("div",{class:"td",key:t},[N("span",null,j(I(a)(e.lang||"--")),1),aa])))),128))]),(M(!0),C(T,null,O(i.list,((e,a)=>(M(),C("div",{class:"tr",key:a},[(M(!0),C(T,null,O(s.value,((a,t)=>(M(),C("div",{class:S(["td",{td_money:a.isMoney}]),key:t,onClick:t=>((e,a)=>{"username"===a&&(f.value=e,h.value=!0),"operate"===a&&n.value.openModal(e)})(e,a.key),innerHTML:G(e,a.key)},null,10,ta)))),128))])))),128))])]),i.list.length?z("",!0):(M(),q(d,{key:0,description:I(a)("nomore_data")},null,8,["description"])),V(Ee,{modelValue:h.value,"onUpdate:modelValue":t[7]||(t[7]=e=>h.value=e),currentUser:f.value,IdentityMap:I(Te)},null,8,["modelValue","currentUser","IdentityMap"])])}}}),na=s(la,[["__scopeId","data-v-d8696e02"]]),sa={class:"content"},ra={class:"top_title"},oa={class:"main_top"},ia={class:"commission"},ua={class:"commission"},ca={class:"commission"},da={class:"top_btns"},pa={class:"link"},ma={class:"text"},va={class:"link-right"},ya=f({__name:"index",setup(t){const{t:l}=d.useI18n(),n=H(),s=D({}),i={1:"identity_map_1",2:"identity_map_2",3:"identity_map_3",4:"identity_map_4",5:"identity_map_5"};r.addMsgEvent(o.msgType.msg_notify_daily_return_info,(e=>{s.value=e||{}}));const p=()=>{v("测试文本"),m.text("复制成功")},y=D(!1),g=()=>{y.value=!0,_(),setTimeout((()=>{y.value=!1}),1e3)},_=()=>{const e=u.req_daily_return_info();c.instance.sendRequest(e)};_();const h=()=>{const e=u.req_daily_return_claim();c.instance.sendRequest(e)};return r.addMsgEvent(o.msgType.msg_notify_daily_return_claim,(e=>{0===e.result?(m.success(l("promo_page_applySuc")),_()):m.fail(l("可领取佣金不足"))})),(t,r)=>{const o=e;return M(),C("div",sa,[V(o,{class:"main_content"},{default:E((()=>[N("div",ra,[N("div",null,[N("span",null,j(I(l)("identity")),1),N("span",null,j(I(l)(i[s.value.level]||"--")||"--"),1)]),N("div",null,[N("span",null,j(I(l)("Casino draws")),1),N("span",null,j(s.value.ratio?`${s.value.ratio/100}%（${I(l)("proxy_page_value")}）`:"--"),1)])]),N("div",oa,[N("div",ia,[N("span",null,j(I(l)("total_commission"))+":",1),N("span",null,j(s.value.personal_money+s.value.team_money||"0"),1)]),N("div",ua,[N("span",null,j(I(l)("Team_commission"))+":",1),N("span",null,j(s.value.team_money||"0"),1)]),N("div",ca,[N("span",null,j(I(l)("Direct player commission"))+":",1),N("span",null,j(s.value.personal_money||"0"),1)]),N("div",da,[V(a,{height:"39px",width:"109px",fontSize:"12px",onClick:r[0]||(r[0]=e=>I(n).push("/account_record"))},{default:E((()=>[$(j(I(l)("mine_myaudit")),1)])),_:1}),V(a,{height:"39px",width:"109px",fontSize:"12px",onClick:h},{default:E((()=>[$(j(I(l)("WithDraw_Commission")),1)])),_:1})]),N("iconpark-icon",{"icon-id":"signicon08",size:"1.8rem",class:S(["refresh",y.value&&"refreshing"]),onClick:g},null,2)]),N("div",pa,[N("div",ma,j(s.value.s_link),1),N("div",va,[V(a,{height:"30px",width:"60px",fontSize:"12px",onClick:p},{default:E((()=>[$(j(I(l)("Copy")),1)])),_:1}),V(a,{height:"30px",width:"101px",fontSize:"12px",onClick:r[1]||(r[1]=e=>I(n).push("/agentIntroduction"))},{default:E((()=>[$(j(I(l)("Agentintroduction")),1)])),_:1})])]),V(na,{proxyInfo:s.value},null,8,["proxyInfo"])])),_:1})])}}}),ga=s(ya,[["__scopeId","data-v-b76af63d"]]);export{ga as default};