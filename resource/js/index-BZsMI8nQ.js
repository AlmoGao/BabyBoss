import{v as a,M as e,N as s,e as l,f as n,H as t,I as i,L as c,J as p,K as m,s as r,b as o}from"./index-30tzVDQE.js";import{d as _,a0 as u,H as d,I as v,G as y,e as g,F as h,S as f,B as b,m as k,o as x,n as w,g as $,t as C,i as E,_ as I,$ as j}from"./vue-DH2RNpQ3.js";const q={class:"body vertical center"},M={class:"flex align_center item_list_l"},N={class:"bank_icon"},T=["src"],B={class:"bank-txt"},D={class:"flex bank_name"},G={class:"bank_payName"},H={class:"bank_limit"},L={class:"item_list_r"},O=["onClick"],R={class:"form_card"},W={class:"form_container vertical"},z={class:"header rel center"},F={class:"weight_5"},J={class:"close abs center pointer"},K={class:"body vertical center"},S=(a=>(I("data-v-83622243"),a=a(),j(),a))((()=>$("div",{class:"flex align_center justify_center sm_txt"},[$("span",null,"占位图")],-1))),A={class:"flex space_between bank_list_item"},P=["src"],Q=_({__name:"index",setup(o){const{t:_}=a.useI18n(),I=u(),j=d(!1),Q=d(),U=d([]),V=d({payname:""}),X={label:_("addBank_page_pChoose"),value:-1,minrecharge:0,maxrecharge:0,paymethod:""},Y=d([{...X}]),Z={label:_("deposit_page_notOffer"),value:0},aa=d([{...Z}]),ea=d([]),sa=d({label:"",value:""}),la=a=>{V.value={payname:""},Y.value=[{...X}],aa.value=[{...Z}],sa.value={label:"",value:""};const e=[...a.rechargelist_by_paymenttype].filter((a=>t.includes(a.paymenttype)));e.forEach((a=>{i.forEach((e=>{a.paymenttype===e.paymenttype&&(a.payname=e.payname)}))})),console.log("-----",e);const s=e.find((a=>"bankcard"===a.payname)),l=[];s.paymethod&&s.paymethod.split(",").map(((a,e)=>{l.push({maxrecharge:s.maxrecharge,minrecharge:s.minrecharge,paymenttype:100+e,paymethod:a,payname:`bankcard_${e}`})}));const n=e.filter((a=>"bankcard"!==a.payname)).map((a=>({...a,paymenttype:100*a.paymenttype})));Q.value=l.concat(n),ea.value=a.discount_list.filter((a=>a.limit)),ea.value.forEach((a=>aa.value.push({label:a.name,value:a.discount_ID}))),console.log("-------",Q.value),Q.value.map((a=>{U.value.push(a),Y.value.push({minrecharge:a.minrecharge,maxrecharge:a.maxrecharge,paymethod:a.paymethod,payname:a.payname,label:_(`api_${a.payname}`),value:a.paymenttype})})),c.set("depositWayObj",{legalRecharge:U.value,mtdList:Y.value})},na=()=>{},ta=a=>{c.set("curDepositWay",a),V.value=a,(()=>{if(!V.value.payname)return r.fail(_("method_error"));I.push("/depositNext")})()};return v((()=>{setTimeout((()=>{(()=>{const a=l.req_get_shop_info();n.instance.sendRequest(a)})()}),600),e.addMsgEvent(s.msgType.msg_notify_req_get_shop_info,la)})),y((()=>{e.removeMsgEvent(s.msgType.msg_notify_req_get_shop_info,null)})),(a,e)=>{const s=p;return x(),g("div",q,[(x(!0),g(h,null,f(Q.value,((a,e)=>(x(),g("div",{class:w("flex space_between item_list "+(V.value.payname===a.payname?"active":"")),key:e},[$("div",M,[$("div",N,[$("img",{src:`/imgs/payment/icon/icon_${a.payname}.webp`},null,8,T)]),$("div",B,[$("div",D,[$("span",G,C(E(_)(`api_${a.payname}`)),1),$("a",{class:"wh-icon",onClick:na})]),$("div",H,C(a.minrecharge)+" ~ "+C(a.maxrecharge),1)])]),$("div",L,[$("a",{onClick:e=>ta(a)},C(E(_)("deposit_page_use")),9,O)])],2)))),128)),b(s,{class:"deposit_sm_modal",visible:j.value,"mask-closable":!1},{default:k((()=>[$("div",R,[$("div",W,[$("div",z,[$("span",F,C(E(_)("deposit_page_instructions")),1),$("span",J,[b(E(m),{onClick:na,"icon-id":"Group39368",color:"#fff",size:"1.5em"})])]),$("div",K,[S,$("div",A,[(x(!0),g(h,null,f(Q.value,((a,e)=>(x(),g("a",{key:e},[$("img",{src:`/imgs/payment/icon/icon_${a.payname}.webp`},null,8,P)])))),128))])])])])])),_:1},8,["visible"])])}}}),U=o(Q,[["__scopeId","data-v-83622243"]]);export{U as default};