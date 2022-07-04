(globalThis["webpackChunkwindvane"]=globalThis["webpackChunkwindvane"]||[]).push([[8955],{73171:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};const r=a;var i=n(27029),l=function(e,t){return o.createElement(i.Z,Object.assign({},e,{ref:t,icon:r}))};l.displayName="DeleteOutlined";const s=o.forwardRef(l)},54977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"};const r=a;var i=n(27029),l=function(e,t){return o.createElement(i.Z,Object.assign({},e,{ref:t,icon:r}))};l.displayName="FormOutlined";const s=o.forwardRef(l)},9047:e=>{e.exports={uplaodFileW:"_3lL8XS",uplaodFileImg:"_23iPkH",uplaodFileVedio:"_2Dviay",uplaodFileIcons:"_LI4nCw"}},75091:e=>{e.exports={userCommontListWrap:"_3uPmTE",userCommontContent:"_3CzhMm",userCommontChunkHead:"_3qRTYv",disableBtn:"_2QxkHc",footerPage:"_2mcxTB"}},58188:e=>{e.exports={chunkTitle:"_2pr8FO",chunkTitleText:"_EHsePZ",commonItem:"_3LVpDJ",productionImg:"_35t7Sc",productionInfo:"_3eCvkM",productionInfoText:"_qHn3fA",expertIdentity:"_1Iwkzp",userCommontHead:"_3NP8X5",userCommontInfoW:"_245GOa",userCommontInfo:"_3V2svW",ChildCommontListWrap:"_Y_2DaH",footerPage:"_HdL8xY",showChild:"_pZexIE",showChildText:"_1ut6DW",commontPre:"_3tC4Kh",AddPraiseNum:"_2PTttn",AddPraiseNumBtn:"_21QG_I",pourCommont:"_1nhAUO",goodComment:"_16yqxu"}},71221:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});n(71194);var o=n(50146),a=(n(47673),n(59193)),r=n(20594),i=(n(9715),n(69733)),l=n(67294),s=(n(58188),n(83619)),c=n(85893);const u=i.Z.Item,d=[{width:400,height:400,text:"\u5934\u50cf"}],p=(e,t)=>{const n=e.visible,p=e.onOk,m=e.onCancel,v=e.targetExport,f=i.Z.useForm(),g=(0,r.Z)(f,1),h=g[0],y=(0,l.useState)(!1),b=(0,r.Z)(y,2),w=b[0],x=b[1];(0,l.useImperativeHandle)(t,(()=>({form:h}))),(0,l.useEffect)((()=>{h.setFieldsValue({nickName:null===v||void 0===v?void 0:v.nickName,avatar:null!==v&&void 0!==v&&v.userAvatar?[{uid:(new Date).getTime(),name:(new Date).getTime(),status:"done",url:null===v||void 0===v?void 0:v.userAvatar}]:[],description:null===v||void 0===v?void 0:v.userDescription})}),[v,h]);const C=()=>{h.validateFields().then((async e=>{var t,n;x(!0),await p({...e,userId:null===v||void 0===v?void 0:v.userId,avatar:(null===e||void 0===e||null===(t=e.avatar)||void 0===t?void 0:t.length)&&(null===e||void 0===e||null===(n=e.avatar[0])||void 0===n?void 0:n.url)}),x(!1)}))};return(0,c.jsx)(o.Z,{title:(null!==v&&void 0!==v&&v.userId?"\u7f16\u8f91":"\u65b0\u589e")+"\u4e13\u5bb6",visible:n,onOk:C,onCancel:m,confirmLoading:w,width:600,children:(0,c.jsxs)(i.Z,{form:h,labelCol:{span:4},wrapperCol:{span:18},children:[(0,c.jsx)(u,{label:"\u540d\u79f0",name:"nickName",rules:[{required:!0}],children:(0,c.jsx)(a.Z,{placeholder:"\u8bf7\u8f93\u5165\u4e13\u5bb6\u540d\u79f0"})}),(0,c.jsx)(u,{label:"\u5934\u50cf",name:"avatar",valuePropName:"fileList",rules:[{required:!0,message:"\u8bf7\u4e0a\u4f20\u5934\u50cf"}],children:(0,c.jsx)(s.Z,{sizeOptions:d,isSingle:!0,listType:"picture-card"})}),(0,c.jsx)(u,{label:"\u4e13\u5bb6\u8eab\u4efd",name:"description",rules:[{required:!0}],children:(0,c.jsx)(a.Z.TextArea,{autoSize:{minRows:10},placeholder:"\u8bf7\u8f93\u5165\u4e13\u5bb6\u8eab\u4efd"})})]})})},m=(0,l.forwardRef)(p)},82225:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});n(34792);var o=n(78042),a=n(69417),r=n(67294),i=n(74855),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const s=l;var c=n(27029),u=function(e,t){return r.createElement(c.Z,Object.assign({},e,{ref:t,icon:s}))};u.displayName="CopyOutlined";const d=r.forwardRef(u);var p=n(85893);const m=({data:e,...t})=>{const n=t.text,r=t.iconStyle,l=(0,a.Z)(t,["text","iconStyle"]);return(0,p.jsx)(i.CopyToClipboard,{text:n,onCopy:()=>{o.default.success("\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f")},...l,children:(0,p.jsx)(d,{style:r,title:`${n}\uff0c\u70b9\u51fb\u53ef\u590d\u5236`})})},v=m},83619:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});n(43185);var o=n(72587),a=n(20594),r=n(69417),i=n(33610),l=n.n(i),s=n(73662),c=n.n(s),u=n(67294),d=n(73171),p=n(54977),m=n(49101),v=n(11968),f=n(9047),g=n.n(f),h=(n(34792),n(78042)),y=n(44721),b=n.n(y),w=n(33909),x=n(85893);const C=u.lazy((()=>Promise.all([n.e(8536),n.e(1871),n.e(5808)]).then(n.bind(n,55808)))),k={appname:"\u98ce\u5411\u6807",namespace:"windvane",alias:"windvane",debug:!0,port:3e3,domain:".ifeng.com",logs:{level:"debug"},cdnCacheTime:120,linkLoginUrl:"/platform/user/login",authority:"manager_wingvane",basePath:".",publicPath:"/platform-windVane/",configToken:"prodToken",proxy:{"/platform/windvane/userRole":{target:"http://auth-server.cpdt.ifengidc.com",changeOrigin:!0,key:"/platform/windvane",value:""},"/platform/windvane/wingvate":{target:"http://picus.ifeng.com/api",changeOrigin:!0,key:"/platform/windvane/wingvate",value:""},"/platform/windvane/Cmpp":{target:"http://g.cmpp.ifeng.com",changeOrigin:!0,key:"/platform/windvane",value:""},"/platform/windvane/comment":{target:"http://comment-base-admin.ifengidc.com",changeOrigin:!0,key:"/platform/windvane/comment",value:""},"/platform/windvane/blackList":{target:"http://galio.ifeng.com",changeOrigin:!0,key:"/platform/windvane/blackList",value:""},"/platform/windvane/ucms":{target:"https://ucms.ifeng.com",changeOrigin:!0,key:"/platform/windvane/ucms",value:""},"/platform/windvane/fxb":{target:"https://local.datacenter.ifengidc.com",changeOrigin:!0,key:"/platform/windvane/fxb",value:""}}},j=k.configToken,O=(v.Z.get(j),[{width:690,height:388,text:"\u5927\u56fe",safeHeight:345},{width:230,height:152,text:"\u5c0f\u56fe"},{width:720,height:1280,text:"\u5c0f\u89c6\u9891"}]),P=({src:e,onSuccess:t,visible:n,changeVisible:o,...r})=>{const i=(0,u.useState)(!1),l=(0,a.Z)(i,2),s=l[0],c=l[1],d=(0,u.useCallback)((async({base64:e,crop:n,mediaSrc:a,type:r})=>{const i=e;try{if(c(!0),null!==i&&void 0!==i&&b()(i).call(i,"base64")){var l;const e=await(0,w.Ti)(i);t(null===e||void 0===e||null===(l=e.data)||void 0===l?void 0:l.url),o(!1)}else h.default.error("\u56fe\u7247\u8f6c\u5316\u5931\u8d25")}catch(s){console.error(s),h.default.error(s.message)}finally{c(!1)}}),[t,o]);return n&&e?(0,x.jsx)(u.Suspense,{fallback:null,children:(0,x.jsx)(C,{src:e,visible:!0,sizeOptions:r.sizeOptions||O,onOk:d,loading:s,mount:!0,onCancel:()=>{o(!1)}})}):null},Z=P;var I=n(26052);const S={appname:"\u98ce\u5411\u6807",namespace:"windvane",alias:"windvane",debug:!0,port:3e3,domain:".ifeng.com",logs:{level:"debug"},cdnCacheTime:120,linkLoginUrl:"/platform/user/login",authority:"manager_wingvane",basePath:".",publicPath:"/platform-windVane/",configToken:"prodToken",proxy:{"/platform/windvane/userRole":{target:"http://auth-server.cpdt.ifengidc.com",changeOrigin:!0,key:"/platform/windvane",value:""},"/platform/windvane/wingvate":{target:"http://picus.ifeng.com/api",changeOrigin:!0,key:"/platform/windvane/wingvate",value:""},"/platform/windvane/Cmpp":{target:"http://g.cmpp.ifeng.com",changeOrigin:!0,key:"/platform/windvane",value:""},"/platform/windvane/comment":{target:"http://comment-base-admin.ifengidc.com",changeOrigin:!0,key:"/platform/windvane/comment",value:""},"/platform/windvane/blackList":{target:"http://galio.ifeng.com",changeOrigin:!0,key:"/platform/windvane/blackList",value:""},"/platform/windvane/ucms":{target:"https://ucms.ifeng.com",changeOrigin:!0,key:"/platform/windvane/ucms",value:""},"/platform/windvane/fxb":{target:"https://local.datacenter.ifengidc.com",changeOrigin:!0,key:"/platform/windvane/fxb",value:""}}},T=S.configToken;v.Z.get(T);function _(e){const t=e.fileList,n=void 0===t?[]:t,i=e.onChange,s=e.isSingle,v=e.sizeOptions,f=(0,r.Z)(e,["fileList","onChange","isSingle","sizeOptions"]),h=(0,u.useState)(),y=(0,a.Z)(h,2),b=y[0],w=y[1],C=(0,u.useState)(!1),k=(0,a.Z)(C,2),j=k[0],O=k[1];async function P(e){try{const t=await(0,I.y3)(e);w(t),O(!0)}catch(t){console.error(t.message)}}function S(e){const t=(new Date).getTime();O(!1),s&&i([{uid:String(t),name:String(t),status:"done",url:e}])}const T=e=>{const t=l()(n).call(n,(t=>t.uid===e.uid)),o=[...n];null===o||void 0===o||c()(o).call(o,t,1),i(o)},_=e=>(P(e),!1);return(0,x.jsxs)("div",{className:g().uplaodFileW,children:[(0,x.jsx)(Z,{src:b||"",onSuccess:S,visible:j,changeVisible:O,sizeOptions:v}),(0,x.jsx)(o.Z,{beforeUpload:_,fileList:n,listType:"picture-card",onRemove:T,onDownload:e=>{w(null===e||void 0===e?void 0:e.url),O(!0)},showUploadList:{showPreviewIcon:!0,showRemoveIcon:!0,showDownloadIcon:!0,removeIcon:(0,x.jsx)(d.Z,{style:{color:"#fff"}}),downloadIcon:(0,x.jsx)(p.Z,{title:"\u7f16\u8f91\u6587\u4ef6",style:{color:"#fff"}})},...f,children:(0,x.jsx)(m.Z,{})})]})}},81731:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var o=n(69417),a=n(67294),r=n(10893),i=n(72709);const l={fetcher:i.ZP,revalidateOnFocus:!1,shouldRetryOnError:!1},s=(e,t)=>{const n=(0,a.useRef)(),s=t||{},c=s.requestParams,u=(0,o.Z)(s,["requestParams"]),d={...l,...u};c&&(d.fetcher=e=>(0,i.ZP)(e,c));const p=(0,r.ZP)(e,d),m=p.data,v=p.isValidating,f=(0,o.Z)(p,["data","isValidating"]);return m&&(n.current=m),{data:n.current,isValidating:v,...f}},c=s},64950:(e,t,n)=>{"use strict";n.d(t,{E:()=>r,n:()=>i});var o=n(72709),a=n(17778);function r(e){return(0,o.ZP)(`${a.tW}/wingvate/wind-vane-backend/user/createExpertUser`,{method:"POST",body:e})}function i(e){return(0,o.ZP)(`${a.tW}/wingvate/wind-vane-backend/user/updateExpertUser`,{method:"POST",body:{content:e,userId:e.userId}})}},93505:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>H});n(14781);var o=n(9366),a=(n(13254),n(14277)),r=(n(20228),n(11382)),i=(n(49111),n(19650)),l=(n(57663),n(71577)),s=(n(34792),n(78042)),c=n(20594),u=n(50047),d=n.n(u),p=n(42825),m=n.n(p),v=n(67294),f=n(73340),g=n(7084),h=n(59867),y=n(64074),b=n(75091),w=n.n(b),x=n(71221),C=(n(94233),n(51890)),k=n(89366),j=n(18598),O=n(8135),P=n.n(O),Z=n(82225),I=n(85893);const S=e=>{const t=e.user,n=e.btnRender,o=e.isExport;return(0,I.jsxs)("div",{className:P().userCommontHead,children:[(0,I.jsxs)("div",{className:P().userCommontInfoW,children:[(0,I.jsx)(C.C,{src:null===t||void 0===t?void 0:t.userAvatar,icon:(0,I.jsx)(k.Z,{})}),(0,I.jsxs)("div",{className:P().userCommontInfo,children:[(0,I.jsxs)("h3",{children:[null===t||void 0===t?void 0:t.nickName,o?null:(0,I.jsx)(Z.Z,{text:null===t||void 0===t?void 0:t.userId,iconStyle:{marginLeft:8,color:"#1890ff",verticalAlign:"middle"}}),(0,I.jsx)(j.J0,{status:null===t||void 0===t?void 0:t.status,isExpert:o})]}),o?(0,I.jsx)("p",{children:null===t||void 0===t?void 0:t.userDescription}):null]})]}),(0,I.jsx)("div",{children:n})]})},T=S;var _=n(64950),E=n(33909),D=n(81731),L=n(96625),N=n(17778);function z(e){var t;const n=e||{},o=n.query,a=n.pagination,r=(0,D.Z)(e&&(null!==o&&void 0!==o&&o.subjectId||null!==o&&void 0!==o&&o.commentUserId)?[`${N.tW}/comment/queryUserCommentForPage`,e]:null,{requestParams:{method:"POST",body:{pagination:a,query:{...o,appId:L.AF}}}}),i=r.data,l=r.isValidating,s=r.mutate,c=(0,v.useMemo)((()=>{var e;return(null===i||void 0===i||null===(e=i.data)||void 0===e?void 0:e.list)||[]}),[i]),u=(0,v.useMemo)((()=>d()(c).call(c,(e=>({movieId:null===e||void 0===e?void 0:e.subjectId,commentUserId:null===e||void 0===e?void 0:e.commentUserId})))),[c]),p=(0,E.jk)(u),m=p.CommontCount,f=p.isValidating;return{commontList:c,pagination:(null===i||void 0===i||null===(t=i.data)||void 0===t?void 0:t.pagination)||{},isValidating:l||f,CommontCount:m||{},mutate:s}}const R=10,U=e=>{const t=(0,v.useMemo)((()=>{var t,n,o,a;return{userId:null===e||void 0===e||null===(t=e.match)||void 0===t||null===(n=t.params)||void 0===n?void 0:n.id,isExport:Boolean(null===e||void 0===e||null===(o=e.location)||void 0===o||null===(a=o.query)||void 0===a?void 0:a.isExport)}}),[e]),n=t.userId,u=t.isExport,p={pagination:{pageSize:R,current:1},query:{commentUserId:n}},g=(0,v.useState)(!1),h=(0,c.Z)(g,2),b=h[0],C=h[1],k=(0,v.useState)(p),O=(0,c.Z)(k,2),P=O[0],Z=O[1],S=(0,E.pU)(n),D=S.userInfo,L=S.userInfoLoading,N=S.refreshUser,U=z(P),H=U.commontList,V=U.pagination,M=U.CommontCount,A=U.isValidating,q=U.mutate,F=(0,v.useMemo)((()=>(null===H||void 0===H?void 0:d()(H).call(H,(e=>null===e||void 0===e?void 0:e.subjectId)))||[]),[H]),W=(0,E.eL)(F),B=W.productionGroupDetail,X=(W.detailLoading,(0,v.useCallback)((()=>{C(!0)}),[])),$=(0,v.useCallback)((()=>{C(!1)}),[]),G=(0,f.k6)(),Y=(0,v.useCallback)((async e=>{try{const t=await(0,_.n)(e);200===(null===t||void 0===t?void 0:t.code)&&(s.default.success("\u64cd\u4f5c\u6210\u529f\uff01"),$(),N())}catch(t){console.error((null===t||void 0===t?void 0:t.message)||"\u670d\u52a1\u5668\u51fa\u95ee\u9898\u5566")}}),[$,N]),J=(0,v.useCallback)((e=>{Z((t=>({...t,pagination:{pageSize:R,current:e}})))}),[]),Q=(0,v.useCallback)((()=>{sessionStorage.setItem("expertInfo",m()(D)),G.push("/commont-manage/expert-comment-manage")}),[D]);return(0,I.jsxs)("div",{className:w().userCommontListWrap,children:[(0,I.jsx)(x.Z,{targetExport:D,visible:b,onCancel:$,onOk:Y}),(0,I.jsx)(r.Z,{tip:"\u52a0\u8f7d\u4e2d...",spinning:L,children:(0,I.jsx)(T,{user:D,isExport:u,btnRender:u?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(l.Z,{type:"primary",style:{marginLeft:"10px"},onClick:X,children:"\u4fee\u6539\u8d44\u6599"})}):(0,I.jsx)(i.Z,{size:8,children:(0,I.jsx)(j.ab,{user:D,isEnter:!0})})})}),(0,I.jsx)(r.Z,{tip:"\u52a0\u8f7d\u4e2d...",spinning:A,children:(0,I.jsxs)("div",{className:w().userCommontContent,children:[(0,I.jsxs)("div",{className:w().userCommontChunkHead,children:[(0,I.jsx)("span",{children:u?"\u6211\u7684\u4e13\u4e1a\u8bc4\u8bba":"\u8bc4\u8bba\u5217\u8868"}),u?(0,I.jsx)(l.Z,{type:"primary",onClick:Q,children:"\u6dfb\u52a0\u4e13\u4e1a\u8bc4\u8bba"}):null]}),null!==H&&void 0!==H&&H.length?null===H||void 0===H?void 0:d()(H).call(H,((e,t)=>(0,I.jsx)(y.Z,{showProductionName:!0,hiddenUser:!0,refresh:q,common:e,CommontCount:M,productionGroupDetail:B,commontUser:D},t))):(0,I.jsx)(a.Z,{}),(0,I.jsx)("div",{className:w().footerPage,children:(0,I.jsx)(o.Z,{total:Number(null===V||void 0===V?void 0:V.total),showTotal:e=>`\u603b\u8ba1 ${e} \u6761`,pageSize:Number((null===V||void 0===V?void 0:V.pageSize)||R),current:Number(null===V||void 0===V?void 0:V.current),showQuickJumper:!0,onChange:J})})]})})]})},H=(0,h.IX)(U,[g.uU.SYSTEM,g.uU.COMMENT,g.uU.EXPERT])},20640:(e,t,n)=>{"use strict";var o=n(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"},r="Copy to clipboard: #{key}, Enter";function i(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function l(e,t){var n,l,s,c,u,d,p=!1;t||(t={}),n=t.debug||!1;try{s=o(),c=document.createRange(),u=document.getSelection(),d=document.createElement("span"),d.textContent=e,d.style.all="unset",d.style.position="fixed",d.style.top=0,d.style.clip="rect(0, 0, 0, 0)",d.style.whiteSpace="pre",d.style.webkitUserSelect="text",d.style.MozUserSelect="text",d.style.msUserSelect="text",d.style.userSelect="text",d.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=a[t.format]||a["default"];window.clipboardData.setData(r,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(d),c.selectNodeContents(d),u.addRange(c);var m=document.execCommand("copy");if(!m)throw new Error("copy command was unsuccessful");p=!0}catch(v){n&&console.error("unable to copy using execCommand: ",v),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(v){n&&console.error("unable to copy using clipboardData: ",v),n&&console.error("falling back to prompt"),l=i("message"in t?t.message:r),window.prompt(l,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(c):u.removeAllRanges()),d&&document.body.removeChild(d),s()}return p}e.exports=l},74300:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=r(n(67294)),a=r(n(20640));function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=u(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function u(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function v(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?g(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){function t(){var e,n;d(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return n=v(this,(e=f(t)).call.apply(e,[this].concat(i))),b(g(n),"onClick",(function(e){var t=n.props,r=t.text,i=t.onCopy,l=t.children,s=t.options,c=o["default"].Children.only(l),u=(0,a["default"])(r,s);i&&i(r,u),c&&c.props&&"function"===typeof c.props.onClick&&c.props.onClick(e)})),n}return h(t,e),m(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,["text","onCopy","options","children"]),a=o["default"].Children.only(t);return o["default"].cloneElement(a,s({},n,{onClick:this.onClick}))}}]),t}(o["default"].PureComponent);t.CopyToClipboard=w,b(w,"defaultProps",{onCopy:void 0,options:void 0})},74855:(e,t,n)=>{"use strict";var o=n(74300),a=o.CopyToClipboard;a.CopyToClipboard=a,e.exports=a},11742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=p__UserManage__UserCommontList.43dc837a.async.js.map