import{j as e}from"./iframe-D_Ge_mXs.js";import{G as s}from"./Grid-D3ifnwEc.js";import{C as h}from"./Card-d9A2bOT2.js";import{T as O}from"./Text-XuzN2cL6.js";import"./preload-helper-Dp1pzeXC.js";import"./useTheme-D-PcNNCi.js";import"./isMuiElement-ozmoV6no.js";import"./styled-BttFQQzV.js";import"./memoTheme-DFWEAMDJ.js";import"./useThemeProps-DAuk4jKe.js";import"./Paper-a15gmM2l.js";import"./Typography-QzjwPM-S.js";import"./Typography-B89A9aX7.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";const J={title:"UI-Kit/Grid",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Grid is a responsive grid layout hand-composed from MUI's own Grid, providing column sizing, offsets, ordering, and breakpoint-based visibility using MUI's native prop names. Defaults to the design system's own layout-grid tokens: 6 columns, with design-system-managed column-gutter/row-gutter/margin values applied automatically (not integrator-configurable)."}},controls:{include:["children","columns","direction","wrap"]}},argTypes:{columns:{control:"number",description:"Number of columns in each row. Defaults to the design system's default column count (6)."}}},n=({children:i})=>e.jsx(h,{children:e.jsx(h.Content,{children:e.jsx(O,{children:i})})}),t={render:({withLayer:i,layer:o,...r})=>e.jsxs(s,{...r,children:[e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 of 6 (default)"})}),e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 of 6 (default)"})}),e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 of 6 (default)"})})]})},a={args:{columns:12},render:({withLayer:i,layer:o,...r})=>e.jsxs(s,{...r,children:[e.jsx(s.Col,{size:{xs:12,sm:6,md:3},children:e.jsx(n,{children:"xs 12 / sm 6 / md 3"})}),e.jsx(s.Col,{size:{xs:12,sm:6,md:3},children:e.jsx(n,{children:"xs 12 / sm 6 / md 3"})}),e.jsx(s.Col,{size:{xs:12,sm:6,md:3},children:e.jsx(n,{children:"xs 12 / sm 6 / md 3"})}),e.jsx(s.Col,{size:{xs:12,sm:6,md:3},children:e.jsx(n,{children:"xs 12 / sm 6 / md 3"})})]})},d={render:({withLayer:i,layer:o,...r})=>e.jsxs(s,{...r,children:[e.jsx(s.Col,{size:2,offset:2,children:e.jsx(n,{children:"size 2, offset 2 (of 6)"})}),e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 (of 6)"})})]})},l={render:({withLayer:i,layer:o,...r})=>e.jsxs(s,{...r,children:[e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 (of 6)"})}),e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 (of 6)"})}),e.jsx(s.Col,{size:"grow",children:e.jsx(n,{children:'size "grow" (fills remaining space)'})})]})},c={args:{columns:4},render:({withLayer:i,layer:o,...r})=>e.jsxs(s,{...r,children:[e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 of 4"})}),e.jsx(s.Col,{size:2,children:e.jsx(n,{children:"size 2 of 4"})})]})},m={render:({withLayer:i,layer:o,...r})=>e.jsxs(s,{...r,children:[e.jsx(s.Col,{size:3,hiddenFrom:"sm",children:e.jsx(n,{children:"hidden from sm and up"})}),e.jsx(s.Col,{size:3,visibleFrom:"sm",children:e.jsx(n,{children:"visible from sm and up"})})]})},P=["Default","ResponsiveSizes","Offset","Grow","CustomColumnCount","VisibleHiddenFrom"];var p,u,x;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col size={2}>
        <Swatch>size 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 of 6 (default)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 of 6 (default)</Swatch>
      </Grid.Col>
    </Grid>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,w,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    columns: 12
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
      <Grid.Col size={{
      xs: 12,
      sm: 6,
      md: 3
    }}>
        <Swatch>xs 12 / sm 6 / md 3</Swatch>
      </Grid.Col>
    </Grid>
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var y,z,G;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col size={2} offset={2}>
        <Swatch>size 2, offset 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 (of 6)</Swatch>
      </Grid.Col>
    </Grid>
}`,...(G=(z=d.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var g,j,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col size={2}>
        <Swatch>size 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 (of 6)</Swatch>
      </Grid.Col>
      <Grid.Col size="grow">
        <Swatch>size &quot;grow&quot; (fills remaining space)</Swatch>
      </Grid.Col>
    </Grid>
}`,...(S=(j=l.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var b,v,L;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: 4
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col size={2}>
        <Swatch>size 2 of 4</Swatch>
      </Grid.Col>
      <Grid.Col size={2}>
        <Swatch>size 2 of 4</Swatch>
      </Grid.Col>
    </Grid>
}`,...(L=(v=c.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var F,D,I;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Grid {...args}>
      <Grid.Col size={3} hiddenFrom="sm">
        <Swatch>hidden from sm and up</Swatch>
      </Grid.Col>
      <Grid.Col size={3} visibleFrom="sm">
        <Swatch>visible from sm and up</Swatch>
      </Grid.Col>
    </Grid>
}`,...(I=(D=m.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};export{c as CustomColumnCount,t as Default,l as Grow,d as Offset,a as ResponsiveSizes,m as VisibleHiddenFrom,P as __namedExportsOrder,J as default};
