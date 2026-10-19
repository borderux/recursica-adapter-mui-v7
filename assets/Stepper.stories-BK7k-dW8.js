import{j as t,r as I}from"./iframe-CwTuip9d.js";import{S as u,a as w,b as A}from"./Stepper-EWDGd-kk.js";import{B as d}from"./Button-Dm6D-kAc.js";import{G as V}from"./Group-Da_n8aYt.js";import{F as E}from"./Flex-Dh40d8Wd.js";import"./preload-helper-Dp1pzeXC.js";import"./styled-CzVehDyJ.js";import"./memoTheme-B3wfdgRS.js";import"./useSlot-DsEmgcxX.js";import"./mergeSlotProps-CsCxLQIt.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D0QERLAt.js";import"./createSvgIcon-Cekss8FN.js";import"./isMuiElement-BhqCMDtL.js";import"./ButtonBase-Rh5sWtyC.js";import"./useTimeout-B7jM48cb.js";import"./useEventCallback-D6t812Tq.js";import"./isFocusVisible-B8k4qzLc.js";import"./Loader-BqsdYoj1.js";import"./Button-BAPeuPMm.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./CircularProgress-sz6CVs4t.js";import"./Stack-qEyLEZ-B.js";import"./styled-CxPWorav.js";import"./useThemeProps-0220serv.js";const oe={title:"UI-Kit/Stepper",component:u,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["small","large"]},orientation:{control:"radio",options:["horizontal","vertical"]}}},x=r=>{const[s,i]=I.useState(1),m=()=>i(e=>e<3?e+1:e),g=()=>i(e=>e>0?e-1:e),o=[{label:"First step",description:"Create an account and set up your billing profile"},{label:"Second step",description:"Verify email and ensure all notification preferences are correct"},{label:"Final step",description:"Get full access"}];return t.jsxs(E,{direction:"column",style:{width:600},children:[t.jsx(u,{...r,activeStep:s,children:o.map((e,a)=>t.jsx(w,{completed:s>a,children:t.jsx(A,{description:e.description,children:e.label})},a))}),s===o.length&&t.jsx("div",{style:{marginTop:24,textAlign:"center"},children:"Completed, click back button to get to previous step"}),t.jsxs(V,{mt:24,justify:"center",gap:8,children:[t.jsx(d,{variant:"outline",onClick:g,disabled:s===0,children:"Previous step"}),t.jsx(d,{variant:"outline",onClick:m,disabled:s===3,children:"Next step"})]})]})},n={render:r=>t.jsx(x,{...r}),args:{size:"large",orientation:"horizontal"}},l={render:r=>t.jsx(x,{...r}),args:{size:"small",orientation:"horizontal"}},p={render:r=>t.jsx(x,{...r}),args:{size:"large",orientation:"vertical"}},G=r=>{const[s,i]=I.useState(1),m=()=>i(e=>e<3?e+1:e),g=()=>i(e=>e>0?e-1:e),o=[{label:"This is an extremely long step title designed to test how the layout handles multiline text wrapping and constraints",description:"Create an account and set up your billing profile"},{label:"Second step",description:"Verify email and ensure all notification preferences are correct"},{label:"Final step",description:void 0}];return t.jsxs(E,{direction:"column",style:{width:600},children:[t.jsx(u,{...r,activeStep:s,children:o.map((e,a)=>t.jsx(w,{completed:s>a,children:t.jsx(A,{description:e.description,children:e.label})},a))}),s===o.length&&t.jsx("div",{style:{marginTop:24,textAlign:"center"},children:"Completed, click back button to get to previous step"}),t.jsxs(V,{mt:24,justify:"center",gap:8,children:[t.jsx(d,{variant:"outline",onClick:g,disabled:s===0,children:"Previous step"}),t.jsx(d,{variant:"outline",onClick:m,disabled:s===3,children:"Next step"})]})]})},c={render:r=>t.jsx(G,{...r}),args:{size:"large",orientation:"horizontal"}},ae=["Default","Small","Vertical","LayoutStressTest"];var h,S,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};export{n as Default,c as LayoutStressTest,l as Small,p as Vertical,ae as __namedExportsOrder,oe as default};
