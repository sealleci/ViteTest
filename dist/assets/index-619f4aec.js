import{d as f,u as m,a as h,r as y,c as a,b as l,F as _,e as v,f as g,o as i,t as b,g as P,h as H,i as O,j as A}from"./vue-e1a960e6.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const L={class:"button_row"},x=["onClick"],N=f({__name:"App",setup(r){const o=m();h();const n=[{name:"Hello",path:"/hello"},{name:"Privet",path:"/privet"}];function s(e){o.push(e)}return(e,t)=>{const c=y("router-view");return i(),a(_,null,[l("div",L,[(i(),a(_,null,v(n,(p,d)=>l("button",{key:d,onClick:j=>s(p.path)},b(p.name),9,x)),64))]),l("main",null,[g(c)])],64)}}});const u=(r,o)=>{const n=r.__vccOpts||r;for(const[s,e]of o)n[s]=e;return n},w=u(N,[["__scopeId","data-v-c72ba172"]]);const C={};function R(r,o){return i(),a("h1",null,"Hello!")}const $=u(C,[["render",R]]),B={};function F(r,o){return i(),a("h1",null,"Привет!")}const V=u(B,[["render",F]]),E=[{path:"/",redirect:{name:"Hello"}},{path:"/hello",name:"Hello",component:$},{path:"/privet",name:"Privet",component:V},{path:"/:catchAll(.*)",redirect:{name:"Hello"}}],I=P({history:H("/ViteTest/dist"),routes:E}),S=O();A(w).use(S).use(I).mount("#app");
