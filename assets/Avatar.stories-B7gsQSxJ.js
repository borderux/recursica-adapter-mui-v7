import{j as r}from"./iframe-CNqlkkjj.js";import{A as t}from"./Avatar-DboZxnFQ.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-BctWOu7p.js";import"./styled-BOMwbGdU.js";import"./createSvgIcon-DlfjyTeQ.js";import"./useSlot-CKrkbH7u.js";import"./mergeSlotProps-Cw63YBDw.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DEfvK4bR.js";const B={title:"UI-Kit/Avatar",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","ghost"],description:"The visual variant of the avatar (applies to icon/text styles)"},size:{control:"radio",options:["default","small","large"],description:"The size of the avatar"},src:{control:"text",description:"Image URL for the image style avatar"},icon:{table:{disable:!0}}}},a={args:{size:"default",variant:"solid"},render:({withLayer:o,layer:l,...e})=>r.jsx(t,{...e})},s={args:{children:"JD",variant:"solid",size:"default"},render:({withLayer:o,layer:l,...e})=>r.jsx(t,{...e})},n={args:{src:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",size:"large"},render:({withLayer:o,layer:l,...e})=>r.jsx(t,{...e})},i={args:{size:"small",variant:"ghost",icon:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),r.jsx("circle",{cx:"12",cy:"7",r:"4"})]})},render:({withLayer:o,layer:l,...e})=>r.jsx(t,{...e})},G=["Default","TextSolidDefault","ImageLarge","IconSmallGhost"];var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "default",
    variant: "solid"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => {
    return <Avatar {...args} />;
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "JD",
    variant: "solid",
    size: "default"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Avatar {...args} />
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
    size: "large"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Avatar {...args} />
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,v,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: "small",
    variant: "ghost",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Avatar {...args} />
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};export{a as Default,i as IconSmallGhost,n as ImageLarge,s as TextSolidDefault,G as __namedExportsOrder,B as default};
