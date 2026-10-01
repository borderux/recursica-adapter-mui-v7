import{j as t}from"./iframe-1B3c6W_w.js";import{S as i}from"./Stack-D4_f80FI.js";import{B as e}from"./Button-js86bqg8.js";import{T as h}from"./Text-BygqAEDX.js";import"./preload-helper-Dp1pzeXC.js";import"./Stack-Ce7RMbcw.js";import"./memoTheme-BnM7lbYg.js";import"./styled-DTBekJon.js";import"./useThemeProps-iJa7qR1-.js";import"./Loader-BDCFfYXj.js";import"./Button-DkkbJz_2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BhSMpMgb.js";import"./useTimeout-X_40gxL0.js";import"./useForkRef-gntbjHp8.js";import"./useEventCallback-i4YrD8Fk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DbL9aRtC.js";import"./Typography-CFrvYAZN.js";import"./Typography-DSyy4Ole.js";const O={title:"UI-Kit/Stack",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Stack is a flex vertical layout container that maps directly to Mantine's Stack component allowing safe layout property passing."}}},args:{spacing:"rec-default",alignItems:"stretch",justifyContent:"flex-start"},argTypes:{spacing:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Space between elements"},alignItems:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justifyContent:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},defaultChecked:{table:{disable:!0}}}},r={render:({withLayer:o,layer:c,...n})=>t.jsxs(i,{...n,children:[t.jsx(e,{variant:"solid",children:"Primary Block"}),t.jsx(e,{variant:"outline",children:"Secondary Block"}),t.jsx(h,{children:"Text element within Stack"})]})},a={args:{spacing:"rec-sm"},render:({withLayer:o,layer:c,...n})=>t.jsxs(i,{...n,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},s={args:{spacing:"rec-xl"},render:({withLayer:o,layer:c,...n})=>t.jsxs(i,{...n,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},R=["Default","StaticGapSmall","StaticGapLarge"];var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Stack {...args}>
      <Button variant="solid">Primary Block</Button>
      <Button variant="outline">Secondary Block</Button>
      <Text>Text element within Stack</Text>
    </Stack>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    spacing: "rec-sm"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Stack {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Stack>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    spacing: "rec-xl"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Stack {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Stack>
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};export{r as Default,s as StaticGapLarge,a as StaticGapSmall,R as __namedExportsOrder,O as default};
