import{c as o,r as n,j as t}from"./index-TJuRnTVJ.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=o("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);function u(e,s=300){const[r,c]=n.useState(e);return n.useEffect(()=>{const i=setTimeout(()=>c(e),s);return()=>clearTimeout(i)},[e,s]),r}function l({page:e,pages:s,total:r,onChange:c}){return t.jsxs("div",{className:"flex items-center justify-between gap-4 text-sm text-muted",children:[t.jsxs("span",{children:[r," total"]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{type:"button",disabled:e<=1,onClick:()=>c(e-1),className:"rounded-full border border-line px-4 py-2 disabled:opacity-40",children:"Previous"}),t.jsxs("span",{className:"px-2",children:["Page ",e," of ",s]}),t.jsx("button",{type:"button",disabled:e>=s,onClick:()=>c(e+1),className:"rounded-full border border-line px-4 py-2 disabled:opacity-40",children:"Next"})]})]})}export{l as P,a as S,u};
