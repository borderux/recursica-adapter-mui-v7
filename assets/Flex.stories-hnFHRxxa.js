import{j as e}from"./iframe-ZHvPiY6C.js";import{F as i}from"./Flex-CF8WzKmD.js";import{B as t}from"./Button-CjUYvIxY.js";import{T as w}from"./Text-BNLow__k.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-D92pcBrW.js";import"./Loader-DLARl6Vy.js";import"./Button-DeReH07d.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DHV1INGJ.js";import"./useTimeout-CPvmxmOU.js";import"./useForkRef-DG_pO7af.js";import"./useEventCallback-DGtVvX2O.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BlR6JP4F.js";import"./Typography-BGwcuKOR.js";import"./Typography-Cg71fuRI.js";const _={title:"UI-Kit/Flex",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Flex is a bare-metal flex container that maps directly to Mantine's Flex component, providing unopinionated control over direction, alignment, and wrapping."}}},args:{gap:"rec-default",align:"center",justify:"flex-start",direction:"row",wrap:"wrap"},argTypes:{gap:{control:"select",options:["rec-none","rec-sm","rec-default","rec-md","rec-lg","rec-xl","rec-2xl","xs","sm","md","lg","xl"],description:"Gap between elements"},direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"Flex-direction property"},align:{control:"select",options:["flex-start","center","flex-end","stretch"],description:"Align-items property"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around"],description:"Justify-content property"},wrap:{control:"select",options:["wrap","nowrap","wrap-reverse"],description:"Flex-wrap property"},defaultChecked:{table:{disable:!0}},rowGap:{table:{disable:!0}},columnGap:{table:{disable:!0}}}},n={render:({withLayer:s,layer:l,...r})=>e.jsxs(i,{...r,children:[e.jsx(t,{variant:"solid",children:"Block A"}),e.jsx(t,{variant:"outline",children:"Block B"}),e.jsx(w,{children:"Text inside Flex"})]})},o={args:{gap:"rec-sm",direction:"column"},render:({withLayer:s,layer:l,...r})=>e.jsxs(i,{...r,children:[e.jsx(t,{variant:"solid",children:"Item 1"}),e.jsx(t,{variant:"solid",children:"Item 2"}),e.jsx(t,{variant:"solid",children:"Item 3"})]})},a={args:{gap:"rec-xl",direction:"row"},render:({withLayer:s,layer:l,...r})=>e.jsxs(i,{...r,children:[e.jsx(t,{variant:"solid",children:"Item 1"}),e.jsx(t,{variant:"solid",children:"Item 2"}),e.jsx(t,{variant:"solid",children:"Item 3"})]})},J=["Default","StaticGapSmallColumn","StaticGapLargeRow"];var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Flex {...args}>
      <Button variant="solid">Block A</Button>
      <Button variant="outline">Block B</Button>
      <Text>Text inside Flex</Text>
    </Flex>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gap: "rec-sm",
    direction: "column"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Flex {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Flex>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var y,g,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    gap: "rec-xl",
    direction: "row"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Flex {...args}>
      <Button variant="solid">Item 1</Button>
      <Button variant="solid">Item 2</Button>
      <Button variant="solid">Item 3</Button>
    </Flex>
}`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};export{n as Default,a as StaticGapLargeRow,o as StaticGapSmallColumn,J as __namedExportsOrder,_ as default};
