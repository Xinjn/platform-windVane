(globalThis["webpackChunkwindvane"]=globalThis["webpackChunkwindvane"]||[]).push([[3909],{33909:(e,t,n)=>{"use strict";n.d(t,{Ti:()=>u,pf:()=>l,Hy:()=>p,pU:()=>g,JP:()=>v,jk:()=>f,tm:()=>T,cw:()=>h,Hm:()=>b,eL:()=>w,OL:()=>I,zR:()=>y,PL:()=>C,Um:()=>U,vY:()=>_});var a=n(50047),o=n.n(a),i=n(80129),c=n(72709),m=n(26052),d=n(67294),r=n(96625),s=n(17778);function u(e){return(0,c.ZP)(`${s.tW}/ucms/api/resource/upload`,{method:"POST",body:{data:e}})}function l(e){return(0,c.ZP)(`${s.tW}/wingvate/wind-vane-backend/drama/operate/changeDramaOnlineStatus?${(0,i.stringify)(e)}`)}function p(e){return(0,c.ZP)(`${s.tW}/comment/auditComment?${(0,i.stringify)(e)}`)}function g(e){const t={code:200,level:200,message:"success",description:"",data:{id:null,status:1,userId:"694239520336590035v",unionId:"6942395203365900357",roleTypes:["common"],roleType:"common",appId:"ifeng-wind-vane",userName:"6942395203365900357",nickName:"\u6a59\u5b50",registerFrom:"weChatApplet",phoneNumberBinding:"nothing",weChatBinding:"nothing",aliBinding:"nothing",ifengBinding:"nothing",userAvatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eqoqCCafSuHeb5kYgnzbYNDVoUMCpibLGt5df0icRjUicVmiagQEU5iaHJ6atHJCXlJkiaUdYt84vWIiaib7g/132",userDescription:"nothing",createTime:1655207919575,updateTime:1655444355399},succeed:!0,msg:"success"},n=!1,a=()=>{};return{userInfo:(null===t||void 0===t?void 0:t.data)||{},userInfoLoading:n,refreshUser:a}}function v(e){const t={code:200,level:200,message:"success",description:"",data:[{userId:"6841299663245549619",commentTotal:2},{userId:"6841299663300071441",commentTotal:51},{userId:"6942395203365900357",commentTotal:8}],succeed:!0,msg:"success"},n=!1,a=()=>{};return{UserCommontNum:(0,m.tn)((null===t||void 0===t?void 0:t.data)||[],"userId","commentTotal"),isValidating:n,mutate:a}}function f(e){const t={code:200,level:200,message:"success",data:[{id:"77666c4e-22a5-4cd3-b5e2-2bf0006ef14a",createTime:"2022-06-23T17:35:25",updateTime:"2022-06-23T17:38:11",movieGrade:7,movieId:"6841299653275684897",commentUserId:"6923116002918015031",commentUserRank:"common",subjectType:"default"},{id:"0bdc9fd1-9438-4cb2-a494-f18b15dcfb9f",createTime:"2022-06-23T17:39:54",updateTime:null,movieGrade:7,movieId:"6841299653275684905",commentUserId:"6923116002918015031",commentUserRank:"common",subjectType:"default"},{id:"b19f014d-5abc-4e10-93e5-91cf55ecee14",createTime:"2022-06-24T14:48:19",updateTime:null,movieGrade:8,movieId:"6841299661978865683",commentUserId:"6942395203365900357",commentUserRank:"common",subjectType:"default"},{id:"1adb3cf0-71c7-4210-a5b9-c81070a3644a",createTime:"2022-06-24T17:04:00",updateTime:null,movieGrade:3,movieId:"6945309547955228744",commentUserId:"6815260744779571235",commentUserRank:"common",subjectType:"default"},{id:"a9cec473-d0b2-4e49-a567-30e065765008",createTime:"2022-06-24T17:04:00",updateTime:null,movieGrade:1,movieId:"6945309547955228744",commentUserId:"6815260880259784747",commentUserRank:"common",subjectType:"default"},{id:"a8f139e0-406a-4a0f-be4e-c9dc7b217a2f",createTime:"2022-06-23T19:40:00",updateTime:null,movieGrade:2,movieId:"6945309547955228744",commentUserId:"6815260987206148117",commentUserRank:"common",subjectType:"default"},{id:"3982a683-84b3-4517-b9a4-7c15bb9e3fd4",createTime:"2022-06-23T18:08:00",updateTime:null,movieGrade:4,movieId:"6945309547955228744",commentUserId:"6815261067111833651",commentUserRank:"common",subjectType:"default"},{id:"02d90ed0-1e04-4e7a-96a1-0e2bf4e8d479",createTime:"2022-06-23T16:46:00",updateTime:null,movieGrade:10,movieId:"6945309547955228744",commentUserId:"6923116002918015031",commentUserRank:"common",subjectType:"default"}]},n=!1,a=()=>{};return{CommontCount:(0,m.SD)((null===t||void 0===t?void 0:t.data)||[],"movieGrade","commentUserId","movieId"),isHighQuality:(0,m.SD)((null===t||void 0===t?void 0:t.data)||[],"isHighQuality","commentUserId","movieId"),isValidating:n,mutate:a}}function T(e){return(0,c.ZP)(`${s.tW}/comment/updateHighQualityComment`,{method:"POST",body:{data:{...e,appId:r.AF}}})}function h(e){return(0,c.ZP)(`${s.tW}/comment/updateHighQualityComment`,{method:"POST",body:{data:{...e,appId:r.AF}}})}function b(e){var t;const n={code:200,level:200,message:"success",data:{pagination:{current:"1",total:"0",pageSize:"2"},list:[]}},a=!1,i=()=>{},c=(0,d.useMemo)((()=>{var e;return(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.list)||[]}),[n]),m=(0,d.useMemo)((()=>o()(c).call(c,(e=>({movieId:null===e||void 0===e?void 0:e.subjectId,commentUserId:null===e||void 0===e?void 0:e.commentUserId})))),[c]),r=f(m),s=r.CommontCount,u=r.isValidating,l=r.isHighQuality;return{commontList:c,pagination:(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.pagination)||{},isValidating:a||u,CommontCount:s||{},mutate:i,isHighQuality:l}}function w(e){const t={code:200,level:200,message:"success",description:"",data:[{list_id:"6942453087697117255",title:"\u524b\u53ef\u7231",cover_image_url:"https://x0.ifengimg.com/ucms/2022_25/F48F7E1F75EF0171B85F441E65171F47F4A1C979_size25_w300_h300.jpg",description:"\u53ef\u7231",tmp_title:"\u524b\u53ef\u7231",tmp_cover_image_url:"https://x0.ifengimg.com/ucms/2022_25/F48F7E1F75EF0171B85F441E65171F47F4A1C979_size25_w300_h300.jpg",tmp_description:"\u53ef\u7231",type:1,default_flag:0,online_status:1,audit_status:100,audit_reason:null,audit_version:null,visibility:1,creator_id:"6816546784735662149",create_time:"2022-06-15T14:32:27",operator:"jiajx3",update_time:"2022-06-15T14:32:34",source:"backend",online_source:"default"}],succeed:!0,msg:"success"},n=!1,a=()=>{};return{productionGroupDetail:{...null===t||void 0===t?void 0:t.data}||{},detailLoading:n,mutate:a}}function I(e){const t={code:200,level:200,message:"success",description:"",data:{status:1,dramaId:"6946047772109836387",title:"\u6211\u662f\u6d4b\u8bd5\u5206\u54c8\u54c8\u54c8\u54c8",category:"tv-play",platform:"[]",coverImage:'["https://x0.ifengimg.com/ucms/2022_27/A38CBAC877EB335986F31F925398E7321C18C031_size1055_w1035_h1035.png"]',description:"\u98de\u51e4\u98de\u98de",onlineStatus:1,publicScore:8.4,publicScoreDistribution:'{"fiveStarCount":0,"fourHalfStarCount":100,"fourStarCount":0,"halfStarCount":0,"oneHalfStarCount":0,"oneStarCount":0,"threeHalfStarCount":0,"threeStarCount":0,"twoHalfStarCount":0,"twoStarCount":0}',performanceScore:0,commentTotal:0,commentPeople:0,publicScorePeople:100,performanceScorePeople:0,searchHeat:0,operator:"sunyf1",topDeadline:1656314418164,showTime:1655740799999,finishTime:1656431999999,createTime:1656314446e3,updateTime:165631494e4},succeed:!0,msg:"success"},n=!1,a=()=>{};return{productionDetail:(null===t||void 0===t?void 0:t.data)||{},detailLoading:n,mutate:a}}function y(e){const t={code:200,level:200,message:"success",data:null},n=!1,a=()=>{};return{adjustGrade:(null===t||void 0===t?void 0:t.data)||{},isValidating:n,mutate:a}}function C(e,t="default"){const n={code:200,level:200,message:"success",data:{subjectId:"6946047772109836387",subjectType:"default",status:1,appId:"wxae1b8c979eebd164",adjustStartTime:"2022-07-04T15:19:13",adjustEndTime:"2022-07-04T21:19:13",updateTime:"2022-07-04T15:19:12",adjustTime:null,commentSource:"excel",commentFileUrl:"http://x0.ifengimg.com/cmpp/2022_28/d34241be249709b.xlsx",commentText:null,opUser:"sunyf1"}},a=!1,o=()=>{};return{adjustComment:(null===n||void 0===n?void 0:n.data)||{},isValidating:a,mutate:o}}function U(e){return(0,c.ZP)(`${s.tW}/comment/updateCommentLikeCount?${(0,i.stringify)(e)}`)}function _(e){const t={code:200,level:200,message:"success",description:"",data:{listId:"6949611253794873419",title:"hi",coverImageUrl:"https://x0.ifengimg.com/ucms/2022_26/847E4FA4EA50C1038F741CC99B341AA9733331A5_size41_w318_h318.png",description:null,type:2,creatorId:"6942820186655301653",operator:"6942820186655301653",onlineStatus:0,defaultFlag:0,visibility:1,auditStatus:22,followTotal:0,dramaTotal:0,createTimeLong:1656925468e3,updateTimeLong:1656925468e3,commentTotal:0,userAvatar:"https://thirdwx.qlogo.cn/mmopen/vi_32/7hsTKSE9wTFVoMHmJYA6VPlhGZcOumSysAhVovuInpwrz7JSSjRsSeUMaIhbIzx5slnkfDemibeNbK4Qzvxdndw/132",nickName:"\u5c0f\u7f8a\u9a7c\u9a7c\u9a7c\u9a7c\u9a7c\u9a7c\u9a7c\u9a7c\u9a7c",userDescription:"nothing",dramas:null},succeed:!0,msg:"success"};return t}},26052:(e,t,n)=>{"use strict";n.d(t,{cc:()=>g,jt:()=>v,tn:()=>f,SD:()=>T,y3:()=>h,Uh:()=>b});n(50047),n(30699),n(89356),n(33610);var a=n(28834),o=n.n(a),i=n(37247),c=n.n(i),m=n(69798),d=n.n(m),r=n(11968);const s={appname:"\u98ce\u5411\u6807",namespace:"windvane",alias:"windvane",debug:!0,port:3e3,domain:".ifeng.com",logs:{level:"debug"},cdnCacheTime:120,linkLoginUrl:"/platform/user/login",authority:"manager_wingvane",basePath:".",publicPath:"/platform-windVane/",configToken:"prodToken",proxy:{"/platform/windvane/userRole":{target:"http://auth-server.cpdt.ifengidc.com",changeOrigin:!0,key:"/platform/windvane",value:""},"/platform/windvane/wingvate":{target:"http://picus.ifeng.com/api",changeOrigin:!0,key:"/platform/windvane/wingvate",value:""},"/platform/windvane/Cmpp":{target:"http://g.cmpp.ifeng.com",changeOrigin:!0,key:"/platform/windvane",value:""},"/platform/windvane/comment":{target:"http://comment-base-admin.ifengidc.com",changeOrigin:!0,key:"/platform/windvane/comment",value:""},"/platform/windvane/blackList":{target:"http://galio.ifeng.com",changeOrigin:!0,key:"/platform/windvane/blackList",value:""},"/platform/windvane/ucms":{target:"https://ucms.ifeng.com",changeOrigin:!0,key:"/platform/windvane/ucms",value:""},"/platform/windvane/fxb":{target:"https://local.datacenter.ifengidc.com",changeOrigin:!0,key:"/platform/windvane/fxb",value:""}}},u=s.domain,l=s.configToken,p=s.linkLoginUrl;function g(){r.Z.remove(l,{domain:u}),window.frames.length!==window.parent.frames.length&&window.parent.postMessage({logout:!0},"*"),window.location.href=`${p}?url=${encodeURIComponent(location.pathname)}`}function v(e){const t={};for(const n in e)void 0!==e[n]&&(t[n]=e[n]);return t}function f(e,t,n){const a={};return o()(e).call(e,(e=>{a[e[t]]=e[n]})),a}function T(e,t,...n){const a={};return o()(e).call(e,(e=>{const o=null===n||void 0===n?void 0:c()(n).call(n,((t,n)=>t+e[n]),"");a[o]=e[t]})),a}function h(e){return new(d())(((t,n)=>{const a=new FileReader;a.readAsDataURL(e),a.onload=()=>t(a.result),a.onerror=e=>n(e)}))}function b(){const e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&window.scrollTo(0,0)}}}]);
//# sourceMappingURL=3909.0d60244f.async.js.map