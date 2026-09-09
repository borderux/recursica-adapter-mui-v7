import{j as r}from"./iframe-kU2uZ2mD.js";import{C as s}from"./Chip-3W69bd6P.js";import"./preload-helper-Dp1pzeXC.js";import"./Chip-Cp27jXW9.js";import"./createSvgIcon-DBTpmFLT.js";import"./memoTheme-CUiA9Tdx.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useSlot-DCQ0gCga.js";import"./mergeSlotProps-R7_noUIN.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQw5XC3-.js";import"./ButtonBase-BK_3hQ-U.js";import"./useTimeout-9ok1YRN7.js";import"./useEventCallback-DCTRcHjQ.js";import"./isFocusVisible-B8k4qzLc.js";const ee={title:"UI-Kit/Chip",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The Chip component is used to represent interactive selections, descriptive tags, or dynamic filters natively bounded to Recursica variables. It can be used as a toggleable input, can render a custom leading `icon`, and handles close constraints automatically via the `onDelete` property."}}},argTypes:{error:{control:"boolean",description:"Applies the error state styling dynamically."},disabled:{control:"boolean",description:"Applies disabled token states."},checked:{control:"boolean",description:"Forces the visual selected state."}}},n={args:{children:"Default Chip",error:!1,disabled:!1,checked:!1},render:e=>r.jsx(s,{...e})},a={args:{children:"Unselected",checked:!1},render:e=>r.jsx(s,{...e})},t={args:{children:"Selected",checked:!0},render:e=>r.jsx(s,{...e,onChange:()=>{}})},c={args:{children:"Error",error:!0,checked:!1},render:e=>r.jsx(s,{...e})},i={args:{children:"Error Selected",error:!0,checked:!0},render:e=>r.jsx(s,{...e,onChange:()=>{}})},d={args:{children:"Dismissible",checked:!1,onDelete:()=>console.log("Removal Action Triggered")},render:e=>r.jsx(s,{...e})},o={args:{children:"Leading Icon",checked:!1,icon:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M12 8v4"}),r.jsx("path",{d:"M12 16h.01"})]})},render:e=>r.jsx(s,{...e})},l={args:{...o.args,children:"Leading Icon Selected",checked:!0},render:e=>r.jsx(s,{...e,onChange:()=>{}})},p={args:{children:"A very long chip label that exceeds the maximum width and should truncate with an ellipsis",checked:!1,icon:r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10"}),r.jsx("path",{d:"M12 8v4"}),r.jsx("path",{d:"M12 16h.01"})]}),onDelete:()=>console.log("Removal Action Triggered")},render:e=>r.jsx(s,{...e})},re=["Default","Unselected","Selected","ErrorState","ErrorSelected","Removable","WithLeadingIcon","WithLeadingIconSelected","MaxWidthEllipsis"];var h,g,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Default Chip",
    error: false,
    disabled: false,
    checked: false
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var u,x,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Unselected",
    checked: false
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var C,v,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: "Selected",
    checked: true
  },
  render: (args: ChipStoryProps) => <Chip {...args} onChange={() => {}} />
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var f,w,j;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Error",
    error: true,
    checked: false
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(j=(w=c.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var y,b,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Error Selected",
    error: true,
    checked: true
  },
  render: (args: ChipStoryProps) => <Chip {...args} onChange={() => {}} />
}`,...(L=(b=i.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var E,D,I;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: "Dismissible",
    checked: false,
    onDelete: () => console.log("Removal Action Triggered")
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(I=(D=d.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var W,M,P;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Leading Icon",
    checked: false,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(P=(M=o.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var A,R,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...WithLeadingIcon.args,
    children: "Leading Icon Selected",
    checked: true
  },
  render: (args: ChipStoryProps) => <Chip {...args} onChange={() => {}} />
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var U,B,_;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: "A very long chip label that exceeds the maximum width and should truncate with an ellipsis",
    checked: false,
    icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 8v4"></path>
        <path d="M12 16h.01"></path>
      </svg>,
    onDelete: () => console.log("Removal Action Triggered")
  },
  render: (args: ChipStoryProps) => <Chip {...args} />
}`,...(_=(B=p.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};export{n as Default,i as ErrorSelected,c as ErrorState,p as MaxWidthEllipsis,d as Removable,t as Selected,a as Unselected,o as WithLeadingIcon,l as WithLeadingIconSelected,re as __namedExportsOrder,ee as default};
