(globalThis["webpackChunkwindvane"]=globalThis["webpackChunkwindvane"]||[]).push([[2764],{8135:e=>{e.exports={chunkTitle:"_2pr8FO",chunkTitleText:"_EHsePZ",commonItem:"_3LVpDJ",productionImg:"_35t7Sc",productionInfo:"_3eCvkM",productionInfoText:"_qHn3fA",expertIdentity:"_1Iwkzp",userCommontHead:"_3NP8X5",userCommontInfoW:"_245GOa",userCommontInfo:"_3V2svW",ChildCommontListWrap:"_Y_2DaH",footerPage:"_HdL8xY",showChild:"_pZexIE",showChildText:"_1ut6DW",commontPre:"_3tC4Kh",AddPraiseNum:"_2PTttn",AddPraiseNumBtn:"_21QG_I",pourCommont:"_1nhAUO",goodComment:"_16yqxu"}},30138:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});o(13062);var n=o(71230),a=(o(89032),o(15746)),i=o(67294),r=o(8135),l=o.n(r),s=o(33909),c=o(18598),u=o(85893);const d=(e,t)=>{const o=e.productionId,r=e.btnRender,d=e.imgSpan,m=e.detailSpan,p=e.btnSpan,f=(0,s.OL)(o),h=f.productionDetail,v=(f.detailLoading,f.mutate),y=(0,i.useMemo)((()=>(null===h||void 0===h?void 0:h.coverImage)&&JSON.parse(null===h||void 0===h?void 0:h.coverImage)),[h]);return(0,i.useImperativeHandle)(t,(()=>({refreshDetail:v,productionDetail:h}))),(0,u.jsxs)(n.Z,{children:[(0,u.jsx)(a.Z,{span:null!==d&&void 0!==d?d:4,children:null!==y&&void 0!==y&&y.length?(0,u.jsx)("img",{className:l().productionImg,src:y[0]}):""}),(0,u.jsxs)(a.Z,{span:null!==m&&void 0!==m?m:7,className:l().productionInfo,children:[(0,u.jsx)("h3",{children:null===h||void 0===h?void 0:h.title}),(0,u.jsxs)("p",{style:{fontSize:16},children:["\u5927\u4f17\u8bc4\u5206\uff1a",(0,u.jsx)("strong",{children:Number(null===h||void 0===h?void 0:h.publicScore).toFixed(1)})]}),(0,u.jsxs)("p",{children:["\u4e13\u4e1a\u8bc4\u5206\uff1a",Number(null===h||void 0===h?void 0:h.performanceScore).toFixed(1)]}),(0,u.jsxs)("p",{children:["\u6570\u636e\u72b6\u6001\uff1a",(0,u.jsx)(c.f0,{subjectId:o})]})]}),(0,u.jsx)(a.Z,{span:null!==p&&void 0!==p?p:10,children:r&&r(null===h||void 0===h?void 0:h.performanceScore)})]})},m=(0,i.forwardRef)(d)},11903:(e,t,o)=>{"use strict";o.d(t,{Z:()=>S});o(13254);var n=o(14277),a=o(20594),i=(o(43358),o(44477)),r=o(54579),l=o.n(r),s=o(50047),c=o.n(s),u=o(42825),d=o.n(u),m=o(67294),p=o(34165),f=o(85893);const h=i.Z.Option;let v;function y(e,t){function o(){(0,p.B)({title:e,onlineStatus:"1"}).then((e=>{var o;const n=(null===e||void 0===e||null===(o=e.data)||void 0===o?void 0:o.list)||[];t(n)}))}v&&(clearTimeout(v),v=null),v=l()(o,300)}const T=e=>{const t=e.value,o=e.onChange,r=e.width,l=(0,m.useState)([]),s=(0,a.Z)(l,2),u=s[0],p=s[1],v=e=>{e?y(e,(e=>p(e))):p([])},T=e=>{const t=e.value,n=JSON.parse(t),a=n.dramaId;o({...e,totalItem:t,value:a})};return(0,f.jsx)(i.Z,{showSearch:!0,labelInValue:!0,value:t,style:{width:r||"100%"},placeholder:"\u8f93\u5165\u540d\u79f0\u641c\u7d22\uff08\u6a21\u7cca\u641c\u7d22\uff09",defaultActiveFirstOption:!0,showArrow:!1,filterOption:!1,onSearch:v,onChange:T,notFoundContent:(0,f.jsx)(n.Z,{}),children:c()(u).call(u,(e=>(0,f.jsx)(h,{value:d()(e),children:e.title},e.dramaId)))})},S=T},34165:(e,t,o)=>{"use strict";o.d(t,{B:()=>i});var n=o(72709),a=o(17778);async function i(e){return await(0,n.ZP)(`${a.tW}/wingvate/wind-vane-backend/drama/query/queryDramaContentList`,{method:"POST",body:{query:e,sort:{type:"desc",key:"createTime"},pagination:{pageSize:100,current:1}}})}},18598:(e,t,o)=>{"use strict";o.d(t,{vk:()=>g,bw:()=>C,ZG:()=>x,a4:()=>Y,J0:()=>j,f0:()=>Z,ab:()=>w,R6:()=>b});o(71194);var n=o(50146),a=(o(77883),o(68470)),i=(o(13062),o(71230)),r=(o(89032),o(15746)),l=o(20594),s=(o(62350),o(75443)),c=(o(57663),o(71577)),u=(o(34792),o(78042)),d=o(54579),m=o.n(d),p=o(21052),f=o.n(p),h=o(67294),v=o(33909),y=o(99086),T=o(93606),S=o(85893);function g(){return(0,S.jsx)("span",{style:{color:"#333",verticalAlign:"middle"},children:"\u4e0a\u7ebf"})}function C(){return(0,S.jsx)("span",{style:{color:"red",verticalAlign:"middle"},children:"\u4e0b\u7ebf"})}function x(e){const t=e.production,o=e.refresh,n=e.style,a=(0,h.useMemo)((()=>1===(null===t||void 0===t?void 0:t.onlineStatus)),[t]),i=(0,h.useCallback)((async()=>{try{const e=await(0,v.pf)({dramaId:null===t||void 0===t?void 0:t.dramaId,onlineStatus:a?0:1});200===(null===e||void 0===e?void 0:e.code)&&(u.default.success("\u64cd\u4f5c\u6210\u529f\uff01"),o&&o())}catch(e){}}),[a,t,o]);return(0,S.jsx)(s.Z,{placement:"topRight",title:`\u786e\u8ba4 ${a?"\u4e0b\u7ebf":"\u4e0a\u7ebf"} \u8be5\u4f5c\u54c1\u5417`,onConfirm:i,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:a?(0,S.jsx)(c.Z,{danger:!0,style:n,children:"\u4e0b\u7ebf"}):(0,S.jsx)(c.Z,{type:"primary",style:n,children:"\u4e0a\u7ebf"})})}function Y(e){const t=e.commont,o=e.refresh,n=e.style,a=e.subjectType,i=void 0===a?"default":a,r=(0,h.useMemo)((()=>1===(null===t||void 0===t?void 0:t.checkStatus)),[t]),l=(0,h.useCallback)((async()=>{try{const e=await(0,v.Hy)({commentId:null===t||void 0===t?void 0:t.id,subjectId:null===t||void 0===t?void 0:t.subjectId,checkStatus:r?2:1,subjectType:i});200===(null===e||void 0===e?void 0:e.code)&&(u.default.success("\u64cd\u4f5c\u6210\u529f\uff01"),o&&o())}catch(e){console.log("error",e)}}),[r,t,o]);return(0,S.jsx)(s.Z,{placement:"topRight",title:`\u786e\u8ba4 ${r?"\u4e0b\u7ebf":"\u4e0a\u7ebf"} \u8be5\u8bc4\u8bba\u5417`,onConfirm:l,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:r?(0,S.jsx)(c.Z,{danger:!0,style:n,children:"\u4e0b\u7ebf"}):(0,S.jsx)(c.Z,{type:"primary",style:n,children:"\u4e0a\u7ebf"})})}function b(e){const t=e.notGoodComment,o=e.useName,d=e.currentScore,p=void 0===d?0:d,y=e.currentLevel,g=void 0===y?"lv.1":y,C=e.commentId,x=e.subjectId,Y=e.subjectType,b=void 0===Y?"":Y,j=e.refresh,w=(0,h.useState)(!1),Z=(0,l.Z)(w,2),I=Z[0],M=Z[1],P=(0,h.useState)(p),H=(0,l.Z)(P,2),_=H[0],D=H[1],E=(0,h.useState)(g),k=(0,l.Z)(E,2),F=k[0],O=k[1],L=(0,h.useRef)(0),B=async()=>{try{await(0,v.cw)({id:C,subjectId:x,isHighQualityStatus:!1,subjectType:b})}catch(e){u.default.error("\u8bc4\u4f18\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}j()},A=()=>{M(!1)},N=(0,h.useCallback)((async()=>{m()((async()=>{try{await(0,v.tm)({id:C,subjectId:x,isHighQualityStatus:!0,rate:L.current,subjectType:b}),u.default.success("\u64cd\u4f5c\u6210\u529f")}catch(e){u.default.error("\u8bc4\u4f18\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5")}A(),j()}),0)}),[]),q=(0,h.useCallback)((e=>{const t=f()(p+e);O(t<=300?"lv.1":t<=900?"lv.2":t<=1900?"lv.3":t<=3100?"lv.4":"lv.5"),D(t),L.current=t}),[]),z=(0,h.useCallback)((0,T.D)(q,600,!1),[]);return(0,S.jsxs)("div",{children:[t?(0,S.jsx)(s.Z,{placement:"topLeft",title:"\u786e\u8ba4\u8be5\u8bc4\u8bba\u4e3a\u4f18\u8d28\u5417\uff1f",onConfirm:N,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,S.jsx)(c.Z,{danger:!0,children:"\u4f18\u8d28"})}):(0,S.jsx)(s.Z,{placement:"topRight",title:"\u786e\u8ba4\u53d6\u6d88\u8be5\u8bc4\u8bba\u7684\u4f18\u8d28\u5417\uff1f",onConfirm:B,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:(0,S.jsx)(c.Z,{danger:!0,children:"\u53d6\u6d88\u4f18\u8d28"})}),(0,S.jsxs)(n.Z,{title:`\u8bbe\u7f6e${o}\u7684\u8bc4\u8bba\u4e3a\u4f18\u8d28`,visible:I,onOk:N,onCancel:A,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",children:[(0,S.jsxs)(i.Z,{children:[(0,S.jsx)(r.Z,{span:6,children:"\u5f53\u524d\u79ef\u5206\uff1a"}),(0,S.jsx)(r.Z,{span:8,children:p})]}),(0,S.jsxs)(i.Z,{children:[(0,S.jsx)(r.Z,{span:6,children:"\u589e\u52a0\u4f18\u8d28\u79ef\u5206\uff1a"}),(0,S.jsx)(r.Z,{span:8,children:(0,S.jsx)(a.Z,{min:1,onChange:z,style:{width:"200px"}})})]}),(0,S.jsxs)(i.Z,{children:[(0,S.jsx)(r.Z,{span:6,children:"\u9884\u8ba1\u79ef\u5206\uff1a"}),(0,S.jsx)(r.Z,{span:8,children:_})]}),(0,S.jsxs)(i.Z,{children:[(0,S.jsx)(r.Z,{span:6,children:"\u9884\u8ba1\u7b49\u7ea7\uff1a"}),(0,S.jsx)(r.Z,{span:8,children:F})]})]})]})}function j(e){const t=e.status,o=e.style;e.isExpert;return 1===t?(0,S.jsx)("span",{style:o,children:"\u6b63\u5e38"}):(0,S.jsx)("span",{style:{color:"red",...o},children:"\u5c01\u7981"})}function w(e){const t=e.user,o=e.refresh,n=e.style,a=e.isEnter,i=(0,h.useCallback)((async()=>{try{var e;let i={};var n;if(i=a?await(0,y.ER)({typeContent:"\u9ed1\u540d\u5355",businessId:"com_wind_vane",description:null===t||void 0===t?void 0:t.nickName,category:"userId",content:null===t||void 0===t?void 0:t.userId}):await(0,y.ZK)({idList:[t.id]}),200===(null===(e=i)||void 0===e?void 0:e.code))u.default.success("\u64cd\u4f5c\u6210\u529f\uff01"),o&&o();else u.default.error((null===(n=i)||void 0===n?void 0:n.message)||"\u670d\u52a1\u5668\u51fa\u95ee\u9898\u5566")}catch(i){}}),[a,t,o]);return(0,S.jsx)(s.Z,{placement:"topRight",title:`\u786e\u8ba4\u5c06\u8be5\u7528\u6237 ${a?"\u79fb\u5165":"\u79fb\u51fa"} \u9ed1\u540d\u5355\u5417`,onConfirm:i,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",children:a?(0,S.jsx)(c.Z,{danger:!0,style:n,children:"\u79fb\u5165\u9ed1\u540d\u5355"}):(0,S.jsx)(c.Z,{type:"primary",style:n,children:"\u79fb\u51fa\u9ed1\u540d\u5355"})})}function Z(e){const t=e.isCol,o=e.style,n=e.subjectId,a=(0,v.zR)(n),i=a.adjustGrade,r=(a.isValidating,(0,h.useMemo)((()=>{switch(null===i||void 0===i?void 0:i.status){case 0:return(0,S.jsx)("span",{style:o,children:"\u8c03\u63a7\u5b8c\u6210"});case 1:return(0,S.jsx)("span",{style:{color:"#1890ff",...o},children:"\u8c03\u63a7\u4e2d"});default:return(0,S.jsx)("span",{style:o,children:"\u672a\u8c03\u63a7"})}}),[null===i||void 0===i?void 0:i.status]));return(0,S.jsxs)(S.Fragment,{children:[r,t?(null===i||void 0===i?void 0:i.opUser)&&(0,S.jsxs)("p",{style:{color:"#999"},children:[(null===i||void 0===i?void 0:i.opUser)||"","\u6700\u65b0\u8c03\u63a7"]}):(null===i||void 0===i?void 0:i.opUser)&&(0,S.jsxs)("span",{style:{marginLeft:8},children:["(",(null===i||void 0===i?void 0:i.opUser)||"","\u6700\u65b0\u8c03\u63a7)"]})]})}},53571:(e,t,o)=>{"use strict";o.d(t,{V5:()=>i,TJ:()=>r,H0:()=>l,c7:()=>s,P4:()=>c,Yw:()=>u,sp:()=>d,Jo:()=>m});var n=o(72709),a=o(17778);async function i(){return await(0,n.ZP)(`${a.tW}/wingvate/wind-vane-backend/manager/heat/list?size=12`)}async function r(){const e={code:200,level:200,message:"success",description:"",data:[{position:1,listId:"6942453087697117255",type:1,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u524b\u53ef\u7231",followTotal:0,updateTimeLong:165595123e4},{position:2,listId:"6943108316696416341",type:1,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u653e\u98de\u68a6\u60f3",followTotal:0,updateTimeLong:165595123e4},{position:3,listId:"6841299667108499515",type:1,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u5c0f\u7f8a\u4e13\u4eab\u54c8\u54c8\u54c8\u54c8\u54c8\u54c8\u8d85\u8fc7\u4e24\u884c\u6253\u70b9\u6211\u8981\u770b\u4e00\u4e0b\u8d85\u4e86\u5417\u54c8\u54c8\u54c8\u54c8",followTotal:0,updateTimeLong:165595123e4},{position:4,listId:"6942820186655301671",type:1,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u6709\u591a\u5c11\u4e2a\u5b57\u6709\u591a\u5c11\u4e2a\u5b57\u6709\u591a\u5c11\u4e2a\u5b57\u963f\u963f\u963f",followTotal:0,updateTimeLong:165595123e4},{position:5,listId:"6942820186655301712",type:1,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u8c01\u90fd\u522b\u52a8\uff0c\u5f00\u53d1\u6d4b\u8bd5\u6570\u636e",followTotal:0,updateTimeLong:165595123e4},{position:6,listId:"6943480859743756308",type:2,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u4f60\u597d",followTotal:0,updateTimeLong:165595123e4},{position:7,listId:"6841299663685951574",type:1,endTime:1655978523e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u5b98\u65b9\u7247\u53559",followTotal:0,updateTimeLong:165595123e4},{position:8,listId:"6943108316696416318",type:2,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u5c0f\u53f6\u771f\u7684\u54c8\u54c8\u54c8",followTotal:0,updateTimeLong:165595123e4},{position:9,listId:"6943381454248222808",type:2,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u516c\u5f00\u7247\u5355",followTotal:0,updateTimeLong:165595123e4},{position:10,listId:"6841299667460821055",type:2,endTime:1656036907e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u7247\u5355\u65b0\u5efa\u4fee\u6539",followTotal:0,updateTimeLong:165595123e4},{position:11,listId:"6942453087697117217",type:2,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u5b66\u9738\u7247\u5355",followTotal:0,updateTimeLong:165595123e4},{position:12,listId:"6841299667855089737",type:2,endTime:1655961866e3,operator:"guyq",updateTime:"2022-06-23T10:27:10",title:"\u795e\u9a6c\u73a9\u610f",followTotal:0,updateTimeLong:165595123e4}],succeed:!0,msg:"success"};return e}async function l(){return await(0,n.ZP)(`${a.tW}/wingvate/wind-vane-backend/manager/heat/adjust/list`)}async function s(e){const t={code:200,level:200,message:"success",description:"",data:{"6874236891051335720":{status:1,dramaId:"6874236891051335720",title:"\u795e\u4ed9\u59d0\u59d0",category:"tv-play",platform:'["\u4f18\u9177\u89c6\u9891"]',coverImage:'["https://x0.ifengimg.com/ucms/2022_25/433D697B04AE782D4E6D646B8DEEFA1C6C9CEA2E_size247_w1080_h1512.jpg"]',description:"\u795e\u4ed9\u59d0\u59d0\u795e\u4ed9\u59d0\u59d0\u795e\u4ed9\u59d0\u59d0\u795e\u4ed9\u59d0\u59d0\u795e\u4ed9\u59d0\u59d0\u795e\u4ed9\u59d0\u59d0\u795e\u4ed9\u59d0\u59d0",onlineStatus:1,publicScore:7.4909,publicScoreDistribution:'{"fiveStarCount":11,"fourHalfStarCount":6,"fourStarCount":9,"halfStarCount":0,"oneHalfStarCount":0,"oneStarCount":1,"threeHalfStarCount":16,"threeStarCount":2,"twoHalfStarCount":10,"twoStarCount":0}',performanceScore:0,commentTotal:28,commentPeople:0,publicScorePeople:55,performanceScorePeople:0,searchHeat:0,operator:"chengshang",topDeadline:1642759685717,showTime:1642175999999,finishTime:1642262399999,createTime:164155009e4,updateTime:165692124e4},"6841299653275684906":{status:1,dramaId:"6841299653275684906",title:"C-TEST",category:"movie",platform:"[]",coverImage:'["https://x0.ifengimg.com/ucms/2021_49/F20891B688163778017A9360FD2F39B5418C6A49_size508_w831_h503.png"]',description:"1",onlineStatus:1,publicScore:6.1667,publicScoreDistribution:'{"fiveStarCount":0,"fourHalfStarCount":0,"fourStarCount":0,"halfStarCount":0,"oneHalfStarCount":1,"oneStarCount":0,"threeHalfStarCount":4,"threeStarCount":1,"twoHalfStarCount":0,"twoStarCount":0}',performanceScore:7.6875,commentTotal:3,commentPeople:0,publicScorePeople:6,performanceScorePeople:16,searchHeat:0,operator:"zhangkl5",topDeadline:1638787843143,showTime:1638201599999,finishTime:1675353599999,createTime:1638183052e3,updateTime:165690204e4},"6948592037478273118":{status:65535,dramaId:"6948592037478273118",title:null,category:null,platform:null,coverImage:null,description:null,onlineStatus:null,publicScore:null,publicScoreDistribution:null,performanceScore:null,commentTotal:null,commentPeople:null,publicScorePeople:null,performanceScorePeople:null,searchHeat:null,operator:null,topDeadline:null,showTime:null,finishTime:null,createTime:null,updateTime:null},"6841299653275684903":{status:1,dramaId:"6841299653275684903",title:"C-TEST-3",category:"movie",platform:"[]",coverImage:'["https://x0.ifengimg.com/ucms/2021_49/F20891B688163778017A9360FD2F39B5418C6A49_size508_w831_h503.png"]',description:"12",onlineStatus:1,publicScore:7.2,publicScoreDistribution:'{"fiveStarCount":2,"fourHalfStarCount":0,"fourStarCount":0,"halfStarCount":0,"oneHalfStarCount":0,"oneStarCount":0,"threeHalfStarCount":1,"threeStarCount":0,"twoHalfStarCount":1,"twoStarCount":1}',performanceScore:8,commentTotal:2,commentPeople:0,publicScorePeople:5,performanceScorePeople:4,searchHeat:0,operator:"zhangkl5",topDeadline:1638789502507,showTime:1638201599999,finishTime:1639756799999,createTime:1638184718e3,updateTime:165690204e4},"6821372143448629274":{status:1,dramaId:"6821372143448629274",title:"\u6211\u7684\u59d0\u59d0",category:"movie",platform:'["\u7231\u5947\u827a","\u817e\u8baf\u89c6\u9891"]',coverImage:'["https://x0.ifengimg.com/ucms/2021_29/CA33361E2B58536EBC8494C5E1840312887F5BBF_size343_w1080_h1584.jpg"]',description:"\u300a\u6211\u7684\u59d0\u59d0\u300b\u662f\u6bb7\u82e5\u6615\u6267\u5bfc\uff0c\u6e38\u6653\u9896\u7f16\u5267\uff0c\u5f20\u5b50\u67ab\u9886\u8854\u4e3b\u6f14\uff0c\u8096\u592e\u7279\u522b\u4e3b\u6f14\uff0c\u6731\u5a9b\u5a9b\u3001\u6bb5\u535a\u6587\u3001\u6881\u9756\u5eb7\u4e3b\u6f14\uff0c\u91d1\u9065\u6e90\u3001\u738b\u5723\u8fea\u7279\u522b\u51fa\u6f14\u7684\u5267\u60c5\u7535\u5f71 [1]  \u3002\n\u8be5\u7247\u8bb2\u8ff0\u4e86\u5931\u53bb\u7236\u6bcd\u7684\u59d0\u59d0\u5728\u9762\u5bf9\u8ffd\u6c42\u4e2a\u4eba\u72ec\u7acb\u751f\u6d3b\u8fd8\u662f\u629a\u517b\u5f1f\u5f1f\u7684\u95ee\u9898\u4e0a\uff0c\u53d1\u5c55\u7684\u4e00\u6bb5\u4eb2\u60c5\u6545\u4e8b [3]  \u3002\n\u8be5\u7247\u4e8e2021\u5e744\u67082\u65e5\u5728\u4e2d\u56fd\u5927\u9646\u4e0a\u6620 [4]  \uff0c4\u670822\u65e5\u5728\u5317\u7f8e\u3001\u6fb3\u65b0\u4e0a\u6620 [28]  \u3002",onlineStatus:1,publicScore:4.5,publicScoreDistribution:'{"fiveStarCount":17,"fourHalfStarCount":0,"fourStarCount":3,"halfStarCount":0,"oneHalfStarCount":0,"oneStarCount":90,"threeHalfStarCount":1,"threeStarCount":7,"twoHalfStarCount":2,"twoStarCount":0}',performanceScore:7.5556,commentTotal:56,commentPeople:0,publicScorePeople:120,performanceScorePeople:9,searchHeat:27,operator:"jiajx3",topDeadline:1627018874e3,showTime:1619107199999,finishTime:1721836799999,createTime:1626415106e3,updateTime:165690174e4},"6946047772109836308":{status:1,dramaId:"6946047772109836308",title:"\u6d4b\u8bd5\u8bc4\u5206\u54ce",category:"tv-play",platform:"[]",coverImage:'["https://x0.ifengimg.com/ucms/2022_27/049BC48042FC425F4E60A9341C1EB0A4C7C5348F_size979_w592_h800.png"]',description:"\u6211\u662f\u7b80\u4ecb\u54c8\u54c8\u54c8",onlineStatus:1,publicScore:8.4,publicScoreDistribution:'{"fiveStarCount":1,"fourHalfStarCount":100,"fourStarCount":1,"halfStarCount":0,"oneHalfStarCount":0,"oneStarCount":1,"threeHalfStarCount":0,"threeStarCount":2,"twoHalfStarCount":0,"twoStarCount":2}',performanceScore:0,commentTotal:2,commentPeople:0,publicScorePeople:107,performanceScorePeople:0,searchHeat:0,operator:"sunyf1",topDeadline:1656396954755,showTime:1655827199999,finishTime:1656604799999,createTime:1656310574e3,updateTime:165692334e4},"6841299653275684895":{status:1,dramaId:"6841299653275684895",title:"\u6d4b\u8bd5\u6d4b\u8bd5",category:"movie",platform:"[]",coverImage:'["https://x0.ifengimg.com/ucms/2021_49/EB9AFBD9EB787A1B2A77C75F07C7027739D0ECEA_size30_w296_h296.jpg"]',description:"12121",onlineStatus:1,publicScore:8.4,publicScoreDistribution:'{"fiveStarCount":101,"fourHalfStarCount":0,"fourStarCount":0,"halfStarCount":0,"oneHalfStarCount":0,"oneStarCount":0,"threeHalfStarCount":0,"threeStarCount":2,"twoHalfStarCount":0,"twoStarCount":0}',performanceScore:7,commentTotal:0,commentPeople:0,publicScorePeople:103,performanceScorePeople:3,searchHeat:3,operator:"qinyz",topDeadline:1638769152171,showTime:1638201599999,finishTime:1638460799999,createTime:1638164393e3,updateTime:165691824e4}},succeed:!0,msg:"success"};return t}async function c(e){return await(0,n.ZP)(`${a.tW}/wingvate/wind-vane-backend/manager/heat/adjust`,{method:"PUT",body:e})}async function u(e){return await(0,n.ZP)(`${a.tW}/wingvate/wind-vane-backend/manager/heat/recommendation/list`,{method:"PUT",body:e})}async function d(e){const t={code:200,level:200,message:"success",description:"",data:{status:1,dramaId:"6946047772109836387",title:"\u6211\u662f\u6d4b\u8bd5\u5206\u54c8\u54c8\u54c8\u54c8",category:"tv-play",platform:"[]",coverImage:'["https://x0.ifengimg.com/ucms/2022_27/A38CBAC877EB335986F31F925398E7321C18C031_size1055_w1035_h1035.png"]',description:"\u98de\u51e4\u98de\u98de",onlineStatus:1,publicScore:5.795,publicScoreDistribution:'{"fiveStarCount":30,"fourHalfStarCount":330,"fourStarCount":0,"halfStarCount":20,"oneHalfStarCount":0,"oneStarCount":4,"threeHalfStarCount":11,"threeStarCount":0,"twoHalfStarCount":0,"twoStarCount":605}',performanceScore:0,commentTotal:7,commentPeople:0,publicScorePeople:1e3,performanceScorePeople:0,searchHeat:0,operator:"sunyf1",topDeadline:165752445e4,showTime:1655740799999,finishTime:1656431999999,createTime:1656314446e3,updateTime:165692064e4},succeed:!0,msg:"success"};return t}async function m(e){return await(0,n.ZP)(`${a.tW}/wingvate/wind-vane-backend/hot/operate/upsertHotList`,{method:"POST",body:{dataList:e}})}},5925:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>V});o(49111);var n=o(19650),a=(o(95300),o(7277)),i=(o(57663),o(71577)),r=(o(58024),o(39144)),l=(o(13062),o(71230)),s=(o(89032),o(15746)),c=(o(34792),o(78042)),u=(o(9715),o(69733)),d=o(20594),m=(o(14965),o(3436)),p=(o(18106),o(49162)),f=o(44721),h=o.n(f),v=o(28834),y=o.n(v),T=o(98882),S=o.n(T),g=o(50047),C=o.n(g),x=o(67294),Y=o(59867),b=o(7084),j=o(81500),w=o(90032),Z=o(9257),I=o(30138),M=o(11903),P=o(76177),H=o(88454),_=o(72837),D=o(30731),E=o(4874),k=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]])}return o},F=(0,x.forwardRef)((function(e,t){var o=e.chartRef,n=e.style,a=void 0===n?{height:"inherit"}:n,i=e.className,r=e.loading,l=e.loadingTemplate,s=e.errorTemplate,c=k(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),u=(0,H.Z)(P.x1,c),d=u.chart,m=u.container;return(0,x.useEffect)((function(){(0,_.J)(o,d.current)}),[d.current]),(0,x.useImperativeHandle)(t,(function(){return{getChart:function(){return d.current}}})),x.createElement(D.Z,{errorTemplate:s},r&&x.createElement(E.Z,{loadingTemplate:l}),x.createElement("div",{className:i,style:a,ref:m}))}));const O=F;var L=o(30381),B=o.n(L),A=o(36038),N=o(53571),q=o(73340),z=o(85893);const R=p.Z.TabPane,$=m.Z.RangePicker,W=[{label:"12h",value:"12h",timeType:"hour",unit:12},{label:"24h",value:"24h",timeType:"hour",unit:24},{label:"3\u5929",value:"3d",timeType:"day",unit:3},{label:"\u4e00\u5468",value:"7d",timeType:"day",unit:7},{label:"\u4e00\u4e2a\u6708",value:"30d",timeType:"day",unit:30},{label:"\u5b8c\u7ed3",value:"finish",timeType:"day"}],U=()=>{var e,t,o,m,f;const v=(0,x.useState)(!1),T=(0,d.Z)(v,2),g=T[0],Y=T[1],P=(0,x.useState)("12h"),H=(0,d.Z)(P,2),_=H[0],D=H[1],E=(0,x.useState)("comment"),k=(0,d.Z)(E,2),F=k[0],L=k[1],U=(0,x.useState)([]),V=(0,d.Z)(U,2),J=V[0],G=V[1],K=(0,x.useState)([]),Q=(0,d.Z)(K,2),X=Q[0],ee=Q[1],te=(0,x.useState)({}),oe=(0,d.Z)(te,2),ne=oe[0],ae=oe[1],ie=(0,x.useState)(0),re=(0,d.Z)(ie,2),le=re[0],se=re[1],ce=(0,x.useState)(0),ue=(0,d.Z)(ce,2),de=ue[0],me=ue[1],pe=(0,x.useState)([]),fe=(0,d.Z)(pe,2),he=fe[0],ve=fe[1],ye=(0,b.Cz)(),Te=(0,q.TH)(),Se=(0,x.useState)([]),ge=(0,d.Z)(Se,2),Ce=ge[0],xe=ge[1],Ye=null===Te||void 0===Te||null===(e=Te.query)||void 0===e?void 0:e.dramaId,be=u.Z.useForm(),je=(0,d.Z)(be,1),we=je[0],Ze=h()(ye).call(ye,b.uU.SYSTEM),Ie=(e,t,o,n,a,i)=>{const r={hour:"YYYYMMDDHH",day:"YYYYMMDD",month:"YYYYMM"},l={hour:"h",day:"d",month:"months"},s=r[o],c=a||F,u="comment"===c?A.Td:A.Ep;u({timeType:o,startTime:e,endTime:t,dramaId:i||ne.dramaId}).then((e=>{if(200===e.code){const a=e.data,i=void 0===a?[]:a;let r=0;y()(i).call(i,(e=>{r+=e.count}));const u=[];Number((r/n).toFixed(0));let d=0;for(let e=1;e<=n;e++){const a=B()(t,s).subtract(n-e,l[o]).format(s),r=S()(i).call(i,(e=>e.time+""===a)),m="day"===o?B()(a,s).format("YYYY-MM-DD"):"month"===o?B()(a,s).format("YYYY-MM"):`${B()(a,s).format("HH")}\u65f6`;r?(u.push({time:m,count:"comment"===c?r.count:r.publicScore}),"comment"===c?d+=r.count:e>1&&(d+=r.publicScore-u[e-2]["count"])):(u.push({time:m,count:0}),"score"===c&&e>1&&(d+=0-u[e-2]["count"]))}"comment"===c?(G(u),se(d)):(ee(u),me(Number((d/(n-1)).toFixed(1))))}}))},Me=(e,t,o)=>{const n=""===e,a=ne.showTime,i=void 0===a?0:a,r=ne.finishTime,l=t||F;let s,u,m;if(D(e.value),n?(s="month",m="YYYYMM"):(s=e.timeType,u=e.unit,m="day"===s?"YYYYMMDD":"YYYYMMDDHH"),"finish"===e.value){if(!i||!r)return c.default.warn("\u5f53\u524d\u4f5c\u54c1\u5e76\u672a\u8bbe\u7f6e\u4e0a\u6620\u65f6\u95f4\u6216\u5b8c\u7ed3\u65f6\u95f4\uff0c\u8bf7\u5b8c\u5584"),void("comment"===l?G([]):ee([]));if(i>B()().valueOf())return c.default.warn("\u5f53\u524d\u4f5c\u54c1\u8fd8\u672a\u4e0a\u6620\uff0c\u6682\u65f6\u6ca1\u6709\u6570\u636e\uff01"),void("comment"===l?G([]):ee([]));if(r<=i)return c.default.warn("\u5f53\u524d\u4f5c\u54c1\u8bbe\u7f6e\u7684\u4e0a\u6620\u65f6\u95f4\u665a\u4e8e\u5b8c\u7ed3\u65f6\u95f4\uff0c\u8bf7\u4fee\u6539\uff01"),void("comment"===l?G([]):ee([]));if(i&&r){const e=B()(r).diff(B()(i),"d")+1;if(e>30){let e=B()(i).format("YYYYMM");const t=B()(r).format("YYYYMM");let n=B()(t,"YYYYMM").diff(B()(e,"YYYYMM"),"months")+1;n>24&&(e=B()(t,"YYYYMM").subtract(23,"months").format("YYYYMM"),n=24),Ie(e,t,"month",n,l,o)}else{const t=B()(i).format(m),n=B()(r).format(m);Ie(t,n,s,e,l,o)}}}else if(n){const e=(0,d.Z)(Ce,2),n=e[0],a=e[1];u=a.diff(n,"months")+1;const r=B()(i).format("YYYYMM");let l=n.format("YYYYMM");const m=a.format("YYYYMM"),p=B()(r,"YYYYMM");if(p.diff(B()(m,"YYYYMM"),"month")>0)return c.default.warn("\u5f53\u524d\u6240\u9009\u533a\u95f4\uff0c\u8be5\u4f5c\u54c1\u8fd8\u672a\u4e0a\u6620\uff01"),void("comment"===F?G([]):ee([]));p.diff(B()(l,"YYYYMM"),"month")>0&&(l=r,u=B()(m,"YYYYMM").diff(p,"months")+1),Ie(l,m,s,u,t,o)}else{let e=B()().subtract(u-1,"day"===s?"d":"h").format(m);const n=B()().format(m);if(i>B()().valueOf())return c.default.warn("\u5f53\u524d\u4f5c\u54c1\u8fd8\u672a\u4e0a\u6620\uff0c\u6682\u65f6\u6ca1\u6709\u6570\u636e\uff01"),void("comment"===l?G([]):ee([]));i>B()().subtract(u-1,"day"===s?"d":"h").valueOf()&&(e=B()(i).format(m),u=B()().diff(e,"day"===s?"d":"h")+1),Ie(e,n,s,u,t,o)}},Pe=e=>{if(e.length){const t=ne.showTime,o=void 0===t?0:t,n=(0,d.Z)(e,2),a=n[0],i=n[1];let r=i.diff(a,"months")+1;const l=B()(o).format("YYYYMM");let s=a.format("YYYYMM");const u=i.format("YYYYMM"),m=B()(l,"YYYYMM");if(m.diff(B()(u,"YYYYMM"),"month")>0)return c.default.warn("\u5f53\u524d\u6240\u9009\u533a\u95f4\uff0c\u8be5\u4f5c\u54c1\u8fd8\u672a\u4e0a\u6620\uff01"),void("comment"===F?G([]):ee([]));m.diff(B()(s,"YYYYMM"),"month")>0&&(s=l,r=B()(u,"YYYYMM").diff(m,"months")+1),xe(e),D(""),Ie(s,u,"month",r)}},He=e=>({data:"comment"===e?J:X,xField:"time",yField:"count",label:{},point:{size:5,shape:"diamond",style:{fill:"white",stroke:"#5B8FF9",lineWidth:2}},tooltip:{formatter:e=>({name:"comment"===F?"\u8bc4\u4ef7":"\u8bc4\u5206",value:e.count})},state:{active:{style:{shadowColor:"yellow",shadowBlur:4,stroke:"transparent",fill:"red"}}},theme:{geometries:{point:{diamond:{active:{style:{shadowColor:"#FCEBB9",shadowBlur:2,stroke:"#F6BD16"}}}}}},interactions:[{type:"marker-active"}]}),_e=e=>{L(e);const t=S()(W).call(W,(e=>e.value===_))||"";Me(t,e)},De=e=>{console.log("values:",e);const t=e.value;console.log("dramaId:",t),t&&(0,N.sp)(t).then((e=>{200===e.code&&(ae((null===e||void 0===e?void 0:e.data)||{}),Y(!0),L("comment"),Me(W[0],"comment",t))}))};(0,x.useEffect)((()=>{var e;const t=null===Te||void 0===Te||null===(e=Te.query)||void 0===e?void 0:e.dramaId;t&&(0,N.sp)(t).then((e=>{200===e.code&&(ae((null===e||void 0===e?void 0:e.data)||{}),Y(!0),L("comment"),Me(W[0],"comment",t))}))}),[]);const Ee=e=>{if(e.diff(B()())>0)return!0;if(!he||0===he.length)return!1;const t=he[0]&&e.diff(he[0],"months")>22,o=he[1]&&he[1].diff(e,"months")>22;return o||t},ke=()=>{_e(F)};return(0,z.jsxs)("div",{children:[!Ye&&(0,z.jsx)(r.Z,{title:"\u4f5c\u54c1\u641c\u7d22",size:"small",children:(0,z.jsx)(u.Z,{onFinish:De,form:we,children:(0,z.jsx)(l.Z,{gutter:24,children:(0,z.jsx)(s.Z,{span:8,children:(0,z.jsx)(u.Z.Item,{name:"drama",rules:[{required:!0,message:"\u8bf7\u5148\u9009\u62e9\u4f5c\u54c1\u540e\u518d\u67e5\u8be2"}],children:(0,z.jsx)(M.Z,{onChange:De})})})})})}),g&&(0,z.jsxs)(x.Fragment,{children:[(0,z.jsx)(r.Z,{style:{marginTop:"20px"},children:(0,z.jsx)(I.Z,{productionId:ne.dramaId})}),(0,z.jsx)(r.Z,{style:{marginTop:"20px"},title:ne.showTime&&ne.finishTime?`\u4f5c\u54c1\u4e0a\u6620\u3001\u5b8c\u7ed3\u65f6\u95f4\uff1a${B()(ne.showTime).format("YYYY-MM-DD")}~${B()(ne.finishTime).format("YYYY-MM-DD")}`:"",children:(0,z.jsxs)(p.Z,{activeKey:F,onChange:_e,tabBarExtraContent:(0,z.jsxs)(l.Z,{justify:"space-between",gutter:16,children:[C()(W).call(W,(e=>(0,z.jsx)(s.Z,{children:(0,z.jsx)(i.Z,{type:_===e.value?"primary":"text",onClick:()=>Me(e),children:e.label})},e.value))),(0,z.jsx)(s.Z,{children:(0,z.jsx)($,{picker:"month",onChange:Pe,disabledDate:Ee,onCalendarChange:e=>ve(e)})})]}),children:[(0,z.jsxs)(R,{tab:"\u8bc4\u4ef7\u6570",children:[(0,z.jsx)("div",{children:(0,z.jsxs)(n.Z,{direction:"vertical",children:[(0,z.jsx)("span",{children:"\u603b\u8bc4\u4ef7\u6570"}),(0,z.jsx)(a.Z,{value:le,style:{marginRight:"10px"}})]})}),(0,z.jsx)(O,{...He("comment")})]},"comment"),(0,z.jsxs)(R,{tab:"\u8bc4\u5206\u53d8\u5316",children:[(0,z.jsx)("div",{children:(0,z.jsxs)(n.Z,{direction:"vertical",children:[(0,z.jsx)("span",{children:"\u5e73\u5747\u8bc4\u5206\u53d8\u5316"}),(0,z.jsx)(a.Z,{value:de,style:{marginRight:"10px"}})]})}),(0,z.jsx)(O,{...He("score")})]},"score")]})}),Ze&&(0,z.jsx)(r.Z,{title:"\u8bc4\u5206\u4eba\u6570\u8c03\u63a7",style:{marginTop:"20px"},children:(0,z.jsx)(Z.Z,{dramaInfo:ne})}),Ze&&(0,z.jsx)(r.Z,{title:"\u8bc4\u5206\u8c03\u63a7\uff08\u8f93\u5165\u8c03\u63a7\uff09",style:{marginTop:"20px"},children:(0,z.jsx)(j.Z,{dramaId:(null===Te||void 0===Te||null===(t=Te.query)||void 0===t?void 0:t.dramaId)||(null===(o=we.getFieldValue("drama"))||void 0===o?void 0:o.value),successHandle:ke})}),Ze&&(0,z.jsx)(r.Z,{title:"\u704c\u8bc4",style:{marginTop:"20px"},children:(0,z.jsx)(w.Z,{dramaId:(null===Te||void 0===Te||null===(m=Te.query)||void 0===m?void 0:m.dramaId)||(null===(f=we.getFieldValue("drama"))||void 0===f?void 0:f.value),successHandle:ke})})]})]})},V=(0,Y.IX)(U,[b.uU.SYSTEM,b.uU.WORKS,b.uU.COMMENT,b.uU.EXPERT])},99086:(e,t,o)=>{"use strict";o.d(t,{YF:()=>i,ER:()=>r,ZK:()=>l,fY:()=>s});var n=o(72709),a=o(17778);const i="com_wind_vane";function r(e){return(0,n.ZP)(`${a.tW}/blackList/api/picus-namelist/addNameList`,{method:"POST",body:e})}function l(e){return(0,n.ZP)(`${a.tW}/blackList/api/picus-namelist/removeNameList`,{method:"POST",body:e})}function s(e){var t,o;const n={code:200,level:200,msg:"success",data:{pagination:{current:1,total:1,pageSize:10,countPage:1},sort:{type:"desc",key:"createTime"},list:[{typeContent:"\u9ed1\u540d\u5355",createTime:"2022-04-25 10:44:09",businessId:"com_wind_vane",description:"Honeycomb",updateTime:"2022-04-25 10:44:09",id:882941,category:"userId",deadline:"2122-04-25 10:44:09",content:"6903959929825005666",operator:"maoliang",status:1}]}},a=!1,i=()=>{};return{blackList:(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.list)||[],pagination:(null===n||void 0===n||null===(o=n.data)||void 0===o?void 0:o.pagination)||{},isValidating:a,mutate:i}}},93606:(e,t,o)=>{"use strict";o.d(t,{D:()=>i});var n=o(54579),a=o.n(n);function i(e,t,o){let n;return function(){o&&!n&&e.apply(this,arguments),n&&clearTimeout(n),n=a()((()=>e.apply(this,arguments)),t)}}},55241:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var n=o(22122),a=o(67294),i=o(31097),r=o(65632),l=o(81643),s=o(33603),c=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(o[n[a]]=e[n[a]])}return o},u=a.forwardRef((function(e,t){var o=e.prefixCls,u=e.title,d=e.content,m=c(e,["prefixCls","title","content"]),p=a.useContext(r.E_),f=p.getPrefixCls,h=function(e){return a.createElement(a.Fragment,null,u&&a.createElement("div",{className:"".concat(e,"-title")},(0,l.Z)(u)),a.createElement("div",{className:"".concat(e,"-inner-content")},(0,l.Z)(d)))},v=f("popover",o),y=f();return a.createElement(i.Z,(0,n.Z)({},m,{prefixCls:v,ref:t,overlay:h(v),transitionName:(0,s.m)(y,"zoom-big",m.transitionName)}))}));u.displayName="Popover",u.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};const d=u}}]);
//# sourceMappingURL=p__DataManage__DataControl__Index.eecadc72.async.js.map