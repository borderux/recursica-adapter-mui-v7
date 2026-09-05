import{j as t}from"./iframe-C9L8H00S.js";import{S as i}from"./Stack-CbGJ2DXs.js";import{B as e}from"./Button-BZC_8q1E.js";import{T as h}from"./Text-D58rMwF8.js";import"./preload-helper-Dp1pzeXC.js";import"./Stack-E9eSsvkG.js";import"./memoTheme-BKxrc4lv.js";import"./styled-DKuJBv0x.js";import"./useThemeProps-Cj3nA8h0.js";import"./Loader-Cq1IMIFg.js";import"./Button-XBKGuMHr.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BgWs-ejp.js";import"./useTimeout-C1sHeUaZ.js";import"./useForkRef-Cd6OhXZR.js";import"./useEventCallback-B8BUMsS6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jjDTOO14.js";import"./Typography-Cc4YZsY0.js";import"./Typography-JCiUd7HK.js";const O={title:"UI-Kit/Stack",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Stack is a flex vertical layout container that maps directly to Mantine's Stack component allowing safe layout property passing."}}},args:{spacing:"rec-default",alignItems:"stretch",justifyContent:"flex-start"},argTypes:{spacing:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Space between elements"},alignItems:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justifyContent:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},defaultChecked:{table:{disable:!0}}}},r={render:({withLayer:o,layer:c,...n})=>t.jsxs(i,{...n,children:[t.jsx(e,{variant:"solid",children:"Primary Block"}),t.jsx(e,{variant:"outline",children:"Secondary Block"}),t.jsx(h,{children:"Text element within Stack"})]})},a={args:{spacing:"rec-sm"},render:({withLayer:o,layer:c,...n})=>t.jsxs(i,{...n,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},s={args:{spacing:"rec-xl"},render:({withLayer:o,layer:c,...n})=>t.jsxs(i,{...n,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},R=["Default","StaticGapSmall","StaticGapLarge"];var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
