(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[753],{3161:function(e,t,n){Promise.resolve().then(n.bind(n,5034))},5034:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var s=n(7437),c=n(9222);let a=c.Z.create({baseURL:"http://fstv-electro.github.io/admin-banner/api"});var i={getAll:async()=>{try{let e=await a.get("/users");return e.data}catch(e){console.log(e)}},getById:async e=>{try{let t=await a.get("/users/".concat(e));return t.data}catch(e){console.log(e)}}},l=n(2265);function Sections(){let[e,t]=(0,l.useState)(null),[n,c]=(0,l.useState)(!0),[a,r]=(0,l.useState)(null);(0,l.useEffect)(()=>{fetchData()},[]);let fetchData=()=>{i.getAll().then(e=>{t(e),c(!1)})},getUserById=async e=>{let t=await i.getById(e);r(t)};return n?(0,s.jsx)("p",{children:"Loading..."}):e?(0,s.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[e&&(null==e?void 0:e.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:e.name}),(0,s.jsx)("p",{children:e.email})]},e._id))),(0,s.jsx)("button",{type:"button",onClick:()=>getUserById("65450f5bcf71e1106836cf7f"),children:" Отримай авокадо "}),a&&(0,s.jsx)("div",{children:(0,s.jsx)("p",{children:a.name})})]}):(0,s.jsx)("p",{children:"No profile data"})}function Home(){return(0,s.jsx)("div",{children:(0,s.jsx)(Sections,{})})}}},function(e){e.O(0,[750,971,472,744],function(){return e(e.s=3161)}),_N_E=e.O()}]);