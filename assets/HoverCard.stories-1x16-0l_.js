import{j as e}from"./iframe-qCjK8Ppk.js";import{H as r}from"./HoverCard-DqRNN_Im.js";import{B as s}from"./Button-Cq3naGmX.js";import{T as i}from"./Text-Df7FP7Ml.js";import{G as y}from"./Group-fvTYIPgQ.js";import{S as x}from"./Stack-33w1TWk0.js";import{A as C}from"./Avatar-ASfP_7DH.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-DP6Zo4g7.js";import"./useTheme-CbTUk7Sj.js";import"./memoTheme-DjbLHl_q.js";import"./useSlot-CowepA8s.js";import"./mergeSlotProps-B2FB3Tkl.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-D3uppWyq.js";import"./useTimeout-G7_qeC_s.js";import"./useControlled-Bq_qjM_z.js";import"./useEventCallback-B3zUYIhu.js";import"./Portal-BArQz4NL.js";import"./index-BIHWQzuF.js";import"./index-Cqqzb3p7.js";import"./Grow-BrpmQhDJ.js";import"./utils-C39l9ZgQ.js";import"./Popper-B3VVKavi.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-D22I-s2C.js";import"./isFocusVisible-B8k4qzLc.js";import"./Loader-H541wFN_.js";import"./Button-EvTDGuok.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-C4Ww6xF6.js";import"./CircularProgress-BlQPvaiN.js";import"./Typography-BhRAEGIh.js";import"./Typography-AUVo-XBv.js";import"./Stack-C1SVrfOy.js";import"./styled-CtMLNtJ-.js";import"./useThemeProps-B-N44Vdu.js";import"./createSvgIcon-EVrwW3-b.js";const ie={title:"UI-Kit/HoverCard",component:r,tags:["autodocs"],argTypes:{position:{control:"select",options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end"],description:"The position of the dropdown relative to the target."},withBeak:{control:"boolean",description:"Whether to display a beak (arrow) pointing to the target. Recursica equivalent of Mantine's withArrow."},offset:{control:"number",description:"Distance in px between the dropdown and the target element."},openDelay:{control:"number",description:"Delay in ms before the dropdown opens on hover."},closeDelay:{control:"number",description:"Delay in ms before the dropdown closes when hover ends."},disabled:{control:"boolean",description:"If set, the hover card dropdown will not be rendered."}},parameters:{layout:"centered",docs:{description:{component:"\nThe `HoverCard` component displays a popover-style dropdown when the user hovers over a target element. It wraps Mantine's composable `HoverCard` while enforcing strict Recursica design token styling.\n\n### Composable API\n\nHoverCard uses a dot-notation composition pattern:\n- `<HoverCard>` — Root container managing open/close state on hover\n- `<HoverCard.Target>` — Wrapper for the trigger element (must be a single element supporting ref)\n- `<HoverCard.Dropdown>` — The popup panel displaying content on hover\n\n### Key Behaviors\n- The dropdown opens when the user hovers over the target and closes when they move away\n- `openDelay` and `closeDelay` control the timing of open/close transitions\n- The dropdown stays open while the user hovers over it, allowing interaction with its content\n        "}}}},t={args:{position:"top",withBeak:!0,offset:5,openDelay:0,closeDelay:150},render:({withLayer:p,layer:d,...o})=>e.jsxs(r,{...o,children:[e.jsx(r.Target,{children:e.jsx(s,{variant:"solid",children:"Hover me"})}),e.jsx(r.Dropdown,{children:e.jsx(i,{children:"This is a hover card with informational content that appears when you hover over the target element."})})]})},n={args:{position:"top",withBeak:!1,offset:5},render:({withLayer:p,layer:d,...o})=>e.jsxs(r,{...o,children:[e.jsx(r.Target,{children:e.jsx(s,{variant:"outline",children:"Without Beak"})}),e.jsx(r.Dropdown,{children:e.jsx(i,{children:"This hover card has the beak disabled, showing a clean dropdown without the pointing indicator."})})]})},a={args:{position:"top",offset:5},render:({withLayer:p,layer:d,...o})=>e.jsxs(r,{...o,children:[e.jsx(r.Target,{children:e.jsx(s,{variant:"solid",children:"User Profile"})}),e.jsx(r.Dropdown,{children:e.jsxs(y,{children:[e.jsx(C,{src:void 0,alt:"User avatar"}),e.jsxs(x,{children:[e.jsx(i,{children:"Jane Doe"}),e.jsx(i,{children:"Software Engineer at Recursica"})]})]})})]})},se=["Default","WithoutBeak","RichContent"];var l,c,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    position: "top",
    withBeak: true,
    offset: 5,
    openDelay: 0,
    closeDelay: 150
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: HoverCardStoryArgs) => {
    return <HoverCard {...args}>
        <HoverCard.Target>
          <Button variant="solid">Hover me</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>
          <Text>
            This is a hover card with informational content that appears when
            you hover over the target element.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>;
  }
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,v,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    position: "top",
    withBeak: false,
    offset: 5
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: HoverCardStoryArgs) => {
    return <HoverCard {...args}>
        <HoverCard.Target>
          <Button variant="outline">Without Beak</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>
          <Text>
            This hover card has the beak disabled, showing a clean dropdown
            without the pointing indicator.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>;
  }
}`,...(u=(v=n.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var g,w,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    position: "top",
    offset: 5
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: HoverCardStoryArgs) => {
    return <HoverCard {...args}>
        <HoverCard.Target>
          <Button variant="solid">User Profile</Button>
        </HoverCard.Target>

        <HoverCard.Dropdown>
          <Group>
            <Avatar src={undefined} alt="User avatar" />
            <Stack>
              <Text>Jane Doe</Text>
              <Text>Software Engineer at Recursica</Text>
            </Stack>
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>;
  }
}`,...(f=(w=a.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};export{t as Default,a as RichContent,n as WithoutBeak,se as __namedExportsOrder,ie as default};
