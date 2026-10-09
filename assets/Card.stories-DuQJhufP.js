import{j as e,w as d}from"./iframe-BcYNtbXy.js";import{C as r}from"./Card-Bh3sEtAT.js";import{B as y}from"./Button-Rrm23fn1.js";import{G as u}from"./Group-DU6cRwq-.js";import{H as v}from"./Heading-BTys-b-0.js";import{T as a}from"./Text-DKl6SoyK.js";import"./preload-helper-Dp1pzeXC.js";import"./styled-BaABD3LC.js";import"./memoTheme-DNF-D01w.js";import"./Paper-BEtk-kUF.js";import"./useTheme-CGXhI8eM.js";import"./Loader-CGFAeq3e.js";import"./Button-DBFlcnWp.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-B7vofou2.js";import"./useTimeout-DHT5O6EU.js";import"./useForkRef-C035WVAu.js";import"./useEventCallback-DqfGE2EB.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-NZf7pRKx.js";import"./Stack-DycBZZzc.js";import"./styled-CnxUEG7K.js";import"./useThemeProps-BbKY_CrP.js";import"./Typography-DphmJB0f.js";import"./Typography-Dz2TDiQ2.js";const z={title:"UI-Kit/Card",component:r,subcomponents:{"Card.Header":r.Header,"Card.Content":r.Content,"Card.Footer":r.Footer,"Card.Section":r.Section},tags:["autodocs"],parameters:{docs:{description:{component:"The Card component acts as the foundational padded surface for grouping related information. It relies on standard internal compositional nodes (`Card.Header`, `Card.Content`, `Card.Footer`) mapped directly to the active Recursica design tokens to enforce layout gaps and margins seamlessly. Use the provided dot-notation wrappers rather than building ad-hoc generic sections."}}},argTypes:{}},t={args:{},render:({...n})=>e.jsx("div",{style:{padding:"48px",backgroundColor:"#e9ecef"},children:e.jsx(d,{layer:0,children:e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"Customer Activity Report"}),e.jsxs(r.Content,{children:[e.jsx(a,{children:"Card inner section content body. Notice how this acts as padded content natively based on the overarching properties. Recursica's vertical gutter governs vertical spacing between siblings in the flex container."}),e.jsx(a,{children:"Another section showing the vertical gutter spacing."})]}),e.jsx(r.Footer,{children:e.jsxs(u,{justify:"space-between",align:"center",children:[e.jsx(a,{variant:"caption",children:"Generated today"}),e.jsx(y,{variant:"solid",children:"View Details"})]})})]})})})},o={args:{},render:({...n})=>e.jsx("div",{style:{padding:"48px",backgroundColor:"#e9ecef"},children:e.jsx(d,{layer:0,children:e.jsx(r,{...n,children:e.jsxs(r.Content,{children:[e.jsx(v,{order:6,children:"Notice"}),e.jsx(a,{children:"This is a completely generic card payload dropping the Header and Footer specific elements, simply acting as a padded elevation boundary box directly mirroring native composability!"}),e.jsx(y,{variant:"solid",children:"Acknowledge"})]})})})})},i={args:{},render:({...n})=>e.jsxs("div",{style:{display:"flex",gap:"32px",backgroundColor:"#e9ecef",padding:"32px"},children:[e.jsx(d,{layer:1,children:e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"Layer 1 Wrapper"}),e.jsx(r.Content,{children:e.jsx(a,{children:"Content inside layer 1 card."})})]})}),e.jsx(d,{layer:2,children:e.jsxs(r,{...n,children:[e.jsx(r.Header,{children:"Layer 2 Wrapper"}),e.jsx(r.Content,{children:e.jsx(a,{children:"Content inside layer 2 card exposing a higher elevation drop shadow inherently cascaded."})})]})})]})},J=["Default","HeaderlessAndFooterless","LayerDemonstration"];var s,c,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <div style={{
      padding: "48px",
      backgroundColor: "#e9ecef"
    }}>
        <Layer layer={0}>
          <Card {...args}>
            <Card.Header>Customer Activity Report</Card.Header>
            <Card.Content>
              <Text>
                Card inner section content body. Notice how this acts as padded
                content natively based on the overarching properties.
                Recursica's vertical gutter governs vertical spacing between
                siblings in the flex container.
              </Text>
              <Text>Another section showing the vertical gutter spacing.</Text>
            </Card.Content>
            <Card.Footer>
              <Group justify="space-between" align="center">
                <Text variant="caption">Generated today</Text>
                <Button variant="solid">View Details</Button>
              </Group>
            </Card.Footer>
          </Card>
        </Layer>
      </div>;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <div style={{
      padding: "48px",
      backgroundColor: "#e9ecef"
    }}>
        <Layer layer={0}>
          <Card {...args}>
            <Card.Content>
              <Heading order={6}>Notice</Heading>
              <Text>
                This is a completely generic card payload dropping the Header
                and Footer specific elements, simply acting as a padded
                elevation boundary box directly mirroring native composability!
              </Text>
              <Button variant="solid">Acknowledge</Button>
            </Card.Content>
          </Card>
        </Layer>
      </div>;
  }
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var h,C,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {},
  render: ({
    ...args
  }) => {
    return <div style={{
      display: "flex",
      gap: "32px",
      backgroundColor: "#e9ecef",
      padding: "32px"
    }}>
        <Layer layer={1}>
          <Card {...args}>
            <Card.Header>Layer 1 Wrapper</Card.Header>
            <Card.Content>
              <Text>Content inside layer 1 card.</Text>
            </Card.Content>
          </Card>
        </Layer>

        <Layer layer={2}>
          <Card {...args}>
            <Card.Header>Layer 2 Wrapper</Card.Header>
            <Card.Content>
              <Text>
                Content inside layer 2 card exposing a higher elevation drop
                shadow inherently cascaded.
              </Text>
            </Card.Content>
          </Card>
        </Layer>
      </div>;
  }
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};export{t as Default,o as HeaderlessAndFooterless,i as LayerDemonstration,J as __namedExportsOrder,z as default};
