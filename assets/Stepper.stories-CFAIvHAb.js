import{j as t,r as I}from"./iframe-Ct48WTvw.js";import{S as u,a as w,b as A}from"./Stepper-6ztQL82u.js";import{B as d}from"./Button-4IFU8AZC.js";import{G as V}from"./Group-B4YbZZAc.js";import{F as E}from"./Flex-DXViVjOn.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-DYEJ69YG.js";import"./useSlot-B9ohJ97y.js";import"./mergeSlotProps-Ckix2cPU.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DU9swbnb.js";import"./createSvgIcon-CWtFkW02.js";import"./isMuiElement-tI9r8AKM.js";import"./ButtonBase-EPH6VC7P.js";import"./useTimeout-z8WObsgL.js";import"./useEventCallback-F0UOZzXH.js";import"./isFocusVisible-B8k4qzLc.js";import"./Loader-0-XdPjn4.js";import"./Button-BpJw8fAz.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-CspnsrhL.js";import"./Stack-BGEeG-rW.js";import"./styled-Cs9bNKfe.js";import"./useThemeProps-28X7pTfb.js";const ie={title:"UI-Kit/Stepper",component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","large"]},orientation:{control:"radio",options:["horizontal","vertical"]}}},x=r=>{const[s,i]=I.useState(1),m=()=>i(e=>e<3?e+1:e),g=()=>i(e=>e>0?e-1:e),o=[{label:"First step",description:"Create an account and set up your billing profile"},{label:"Second step",description:"Verify email and ensure all notification preferences are correct"},{label:"Final step",description:"Get full access"}];return t.jsxs(E,{direction:"column",style:{width:600},children:[t.jsx(u,{...r,activeStep:s,children:o.map((e,a)=>t.jsx(w,{completed:s>a,children:t.jsx(A,{description:e.description,children:e.label})},a))}),s===o.length&&t.jsx("div",{style:{marginTop:24,textAlign:"center"},children:"Completed, click back button to get to previous step"}),t.jsxs(V,{mt:24,justify:"center",gap:8,children:[t.jsx(d,{variant:"outline",onClick:g,disabled:s===0,children:"Previous step"}),t.jsx(d,{variant:"outline",onClick:m,disabled:s===3,children:"Next step"})]})]})},n={render:r=>t.jsx(x,{...r}),args:{size:"large",orientation:"horizontal"}},l={render:r=>t.jsx(x,{...r}),args:{size:"small",orientation:"horizontal"}},p={render:r=>t.jsx(x,{...r}),args:{size:"large",orientation:"vertical"}},G=r=>{const[s,i]=I.useState(1),m=()=>i(e=>e<3?e+1:e),g=()=>i(e=>e>0?e-1:e),o=[{label:"This is an extremely long step title designed to test how the layout handles multiline text wrapping and constraints",description:"Create an account and set up your billing profile"},{label:"Second step",description:"Verify email and ensure all notification preferences are correct"},{label:"Final step",description:void 0}];return t.jsxs(E,{direction:"column",style:{width:600},children:[t.jsx(u,{...r,activeStep:s,children:o.map((e,a)=>t.jsx(w,{completed:s>a,children:t.jsx(A,{description:e.description,children:e.label})},a))}),s===o.length&&t.jsx("div",{style:{marginTop:24,textAlign:"center"},children:"Completed, click back button to get to previous step"}),t.jsxs(V,{mt:24,justify:"center",gap:8,children:[t.jsx(d,{variant:"outline",onClick:g,disabled:s===0,children:"Previous step"}),t.jsx(d,{variant:"outline",onClick:m,disabled:s===3,children:"Next step"})]})]})},c={render:r=>t.jsx(G,{...r}),args:{size:"large",orientation:"horizontal"}},oe=["Default","Small","Vertical","LayoutStressTest"];var h,S,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <InteractiveStepper {...args} />,
  args: {
    size: "large",
    orientation: "horizontal"
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,b,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <InteractiveStepper {...args} />,
  args: {
    size: "small",
    orientation: "horizontal"
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,z,k;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <InteractiveStepper {...args} />,
  args: {
    size: "large",
    orientation: "vertical"
  }
}`,...(k=(z=p.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,T,F;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <StressTestStepper {...args} />,
  args: {
    size: "large",
    orientation: "horizontal"
  }
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};export{n as Default,c as LayoutStressTest,l as Small,p as Vertical,oe as __namedExportsOrder,ie as default};
