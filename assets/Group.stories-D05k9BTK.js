import{j as t}from"./iframe-1B3c6W_w.js";import{G as s}from"./Group-DW1_N05a.js";import{B as e}from"./Button-js86bqg8.js";import{T as f}from"./Text-BygqAEDX.js";import"./preload-helper-Dp1pzeXC.js";import"./Stack-Ce7RMbcw.js";import"./memoTheme-BnM7lbYg.js";import"./styled-DTBekJon.js";import"./useThemeProps-iJa7qR1-.js";import"./Loader-BDCFfYXj.js";import"./Button-DkkbJz_2.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BhSMpMgb.js";import"./useTimeout-X_40gxL0.js";import"./useForkRef-gntbjHp8.js";import"./useEventCallback-i4YrD8Fk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DbL9aRtC.js";import"./Typography-CFrvYAZN.js";import"./Typography-DSyy4Ole.js";const K={title:"UI-Kit/Group",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Group is a flex horizontal layout container that maps directly to Mantine's Group component allowing safe layout property passing."}}},args:{gap:"rec-default",align:"center",justify:"flex-start",wrap:"wrap"},argTypes:{gap:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Gap between elements"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},wrap:{control:"select",options:["wrap","nowrap","wrap-reverse"],description:"Flex-wrap property"},defaultChecked:{table:{disable:!0}},rowGap:{table:{disable:!0}},columnGap:{table:{disable:!0}}}},n={render:({withLayer:i,layer:p,...r})=>t.jsxs(s,{...r,children:[t.jsx(e,{variant:"solid",children:"Primary"}),t.jsx(e,{variant:"outline",children:"Secondary"}),t.jsx(f,{children:"Text element within Group"})]})},a={args:{gap:"rec-sm"},render:({withLayer:i,layer:p,...r})=>t.jsxs(s,{...r,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},o={args:{gap:"rec-xl"},render:({withLayer:i,layer:p,...r})=>t.jsxs(s,{...r,children:[t.jsx(e,{variant:"solid",children:"Item 1"}),t.jsx(e,{variant:"solid",children:"Item 2"}),t.jsx(e,{variant:"solid",children:"Item 3"})]})},M=["Default","StaticGapSmall","StaticGapLarge"];var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Group {...args}>
      <Button variant="solid">Primary</Button>
      <Button variant="outline">Secondary</Button>
      <Text>Text element within Group</Text>
    </Group>
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: "rec-sm"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Group {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Group>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    gap: "rec-xl"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Group {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Group>
}`,...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};export{n as Default,o as StaticGapLarge,a as StaticGapSmall,M as __namedExportsOrder,K as default};
