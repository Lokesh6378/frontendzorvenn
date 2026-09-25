import{c as s,n as d,j as e,o as n,q as m,v as h,O as g}from"./index-TJuRnTVJ.js";import{M as p}from"./mail-l0ccB-61.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=s("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Inbox",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=s("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),y=[{to:"/admin",label:"Dashboard",icon:b,end:!0},{to:"/admin/leads",label:"Leads",icon:u,end:!1},{to:"/admin/subscribers",label:"Subscribers",icon:p,end:!1}];function k(){const{admin:t,logout:a}=d();return e.jsxs("div",{className:"flex min-h-screen flex-col lg:flex-row",children:[e.jsxs("aside",{className:"flex shrink-0 flex-col gap-6 border-b border-line bg-card p-4 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:border-r lg:border-b-0 lg:p-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("span",{className:"flex size-8 items-center justify-center rounded-lg bg-accent font-display font-extrabold text-white",children:"Z"}),e.jsx("span",{className:"font-display font-extrabold tracking-[0.1em]",children:"ADMIN"})]}),e.jsx("div",{className:"lg:hidden",children:e.jsx(n,{})})]}),e.jsx("nav",{"aria-label":"Admin",className:"flex gap-1 overflow-x-auto lg:flex-col",children:y.map(({to:l,label:r,icon:c,end:o})=>e.jsxs(m,{to:l,end:o,className:({isActive:x})=>h("flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[15px] whitespace-nowrap transition",x?"bg-accent-soft font-semibold text-fg":"text-muted hover:text-fg"),children:[e.jsx(c,{className:"size-4"}),r]},l))}),e.jsxs("div",{className:"mt-auto hidden flex-col gap-3 lg:flex",children:[e.jsxs("a",{href:"/",target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 text-sm text-muted hover:text-fg",children:[e.jsx(f,{className:"size-4"})," View website"]}),e.jsxs("div",{className:"flex items-center justify-between gap-2 border-t border-line pt-4",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"truncate text-sm font-semibold",children:t==null?void 0:t.name}),e.jsx("p",{className:"truncate text-xs text-muted",children:t==null?void 0:t.email})]}),e.jsx(n,{})]}),e.jsxs("button",{type:"button",onClick:a,className:"flex items-center gap-2 text-sm text-muted hover:text-fg",children:[e.jsx(i,{className:"size-4"})," Sign out"]})]})]}),e.jsxs("main",{className:"min-w-0 flex-1 p-5 lg:p-10",children:[e.jsx(g,{}),e.jsxs("button",{type:"button",onClick:a,className:"mt-10 flex items-center gap-2 text-sm text-muted lg:hidden",children:[e.jsx(i,{className:"size-4"})," Sign out"]})]})]})}export{k as AdminLayout};
