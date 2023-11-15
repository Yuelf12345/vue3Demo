import{r as w,e as L,t as y,x as P,y as O,z as T,A as q,B as D,C as b,D as V,E as $,F as k,G as S,H as N,I as B,J as U,K as C,N as u,L as M,M as E,O as F}from"./vendor-264a87e9.js";import{_ as G,U as H,g as A,s as J,a as K}from"./view-3ce6d0e0.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const W={};function j(e,i){const n=w("router-view");return L(),y(n)}const z=G(W,[["render",j]]);P([T,q,D,b,V,$,k,S,N,B]);const Q="modulepreload",X=function(e,i){return new URL(e,i).href},g={},s=function(i,n,l){if(!n||n.length===0)return i();const r=document.getElementsByTagName("link");return Promise.all(n.map(t=>{if(t=X(t,l),t in g)return;g[t]=!0;const o=t.endsWith(".css"),R=o?'[rel="stylesheet"]':"";if(!!l)for(let m=r.length-1;m>=0;m--){const d=r[m];if(d.href===t&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${R}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":Q,o||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),o)return new Promise((m,d)=>{a.addEventListener("load",m),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i()).catch(t=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t})},h=()=>s(()=>import("./index-aea0f79a.js"),["./index-aea0f79a.js","./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css","./index-a67e1371.css"],import.meta.url),v=[{path:"/",component:h,redirect:"/dashboard",meta:{title:"首页",icon:"HomeFilled",requiresAuth:!0,roles:["admin","user"]},children:[{path:"/dashboard",name:"dashboard",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.i),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),meta:{requiresAuth:!0,roles:["admin","user"]},children:[]}]},{path:"/login",name:"login",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.l),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),meta:{requiresAuth:!0},children:[]},{path:"/404",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.b),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),meta:{requiresAuth:!0},children:[]}],Y=[{path:"/one",name:"one",component:h,meta:{icon:"Management",title:"数据管理",requiresAuth:!0,roles:["admin","user"]},redirect:"/one/oneItem1",children:[{path:"/one/oneItem1",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.c),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"oneItem1",meta:{title:"用户数据",requiresAuth:!0,roles:["admin","user"]},children:[]},{path:"/one/oneItem2",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.d),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"oneItem2",meta:{title:"角色数据",requiresAuth:!0,roles:["admin","user"]},children:[]}]},{path:"/two",name:"two",component:h,meta:{title:"菜单管理",icon:"menu",requiresAuth:!0,roles:["admin","user"]},redirect:"/two/oneItem1",children:[{path:"/two/twoItem1",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.e),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"twoItem1",meta:{title:"用户菜单",requiresAuth:!0,roles:["admin","user"]},children:[]},{path:"/two/twoItem2",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.f),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"twoItem2",meta:{title:"角色菜单",requiresAuth:!0,roles:["admin","user"]},children:[]}]},{path:"/three",name:"three",component:h,meta:{title:"权限管理",icon:"Tools",requiresAuth:!0,roles:["admin","user"]},redirect:"/three/threeItem1",children:[{path:"/three/threeItem1",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.h),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"threeItem1",meta:{title:"用户权限",requiresAuth:!0,roles:["admin","user"]},children:[]},{path:"/three/threeItem2",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.j),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"threeItem2",meta:{title:"角色权限",requiresAuth:!0,roles:["admin","user"]},children:[]}]},{path:"/four",name:"four",component:h,meta:{requiresAuth:!0,roles:["admin","user"]},redirect:"/four/oneItem1",children:[{path:"/four/oneItem1",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.k),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"oneItem1",meta:{requiresAuth:!0,roles:["admin","user"]},children:[]},{path:"/four/twoItem2",component:()=>s(()=>import("./view-3ce6d0e0.js").then(e=>e.m),["./view-3ce6d0e0.js","./vendor-264a87e9.js","./vendor-7a685838.css","./view-9eeb0743.css"],import.meta.url),name:"twoItem2",meta:{requiresAuth:!0,roles:["admin","user"]},children:[]}]}],f=U({history:C(),routes:v}),p=H();let Z=["/404","/login"],_=v;u.configure({showSpinner:!1});f.beforeEach(async(e,i,n)=>{if(u.start(),A("AccessToken"))if(e.path=="/login")n({path:"/"}),u.done();else{let r=A("userRouter",!1);if(p.$state.user.router&&r)n(),u.done();else try{let t=A("uID",!1);await p.userGetInfo(t),await p.GenerateRoutes(Y).then(o=>{o.forEach(I=>{_.push(I),f.addRoute(I)}),f.addRoute({path:"/:pathMatch(.*)",redirect:"/404"}),console.log("constantRoutes",_),J("userRouter",JSON.stringify(_),!1),_=[],n({...e,replace:!0}),u.done()})}catch{await p.resetUser(),n({path:"/login"})}}else Z.includes(e.path)?(n(),u.done()):(n({path:"/login"}),u.done())});const c=M(z);for(let e in E)Reflect.has(E,e)&&c.component(e,E[e]);c.use(F);c.config.globalProperties.$echarts=O;c.use(K);c.use(f);c.mount("#app");