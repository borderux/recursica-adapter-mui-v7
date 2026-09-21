import{j as e}from"./iframe-zHbuWXVb.js";import{H as r}from"./HoverCard-0jjXvBBx.js";import{B as s}from"./Button-BRb6AlqJ.js";import{T as i}from"./Text-crQ4xwvB.js";import{G as y}from"./Group-CAouE4xj.js";import{S as x}from"./Stack-DS_WbRkp.js";import{A as C}from"./Avatar-B9SIY3xe.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-BPH6725t.js";import"./useTheme-vCBnygtU.js";import"./memoTheme-DaZN_KSh.js";import"./useSlot-CZ1BLcwQ.js";import"./mergeSlotProps-Ddue_vOL.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-A__s4Aqj.js";import"./useTimeout-WMsJSFpm.js";import"./useControlled-LN_JT46b.js";import"./useEventCallback-DwzJF7Lb.js";import"./Portal-IMLgvQ_-.js";import"./index-D4o0uMdp.js";import"./index-BX7KkcF9.js";import"./Grow-Bgwv6x4f.js";import"./utils-DmHWvcY1.js";import"./Popper-ChIGDIlI.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-UoVSs--a.js";import"./isFocusVisible-B8k4qzLc.js";import"./Loader-Cef5ikf8.js";import"./Button-M6rjhdrB.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BuLU6a8-.js";import"./CircularProgress-C91Mqz59.js";import"./Typography-D6nXFPIm.js";import"./Typography-CBVRtWJu.js";import"./Stack-BNHfH4I0.js";import"./styled-BcMdzC5p.js";import"./useThemeProps-BgzAUIF9.js";import"./createSvgIcon-BXzVdzla.js";const ie={title:"UI-Kit/HoverCard",component:r,tags:["autodocs"],argTypes:{position:{control:"select",options:["bottom","bottom-start","bottom-end","top","top-start","top-end","left","left-start","left-end","right","right-start","right-end"],description:"The position of the dropdown relative to the target."},withBeak:{control:"boolean",description:"Whether to display a beak (arrow) pointing to the target. Recursica equivalent of Mantine's withArrow."},offset:{control:"number",description:"Distance in px between the dropdown and the target element."},openDelay:{control:"number",description:"Delay in ms before the dropdown opens on hover."},closeDelay:{control:"number",description:"Delay in ms before the dropdown closes when hover ends."},disabled:{control:"boolean",description:"If set, the hover card dropdown will not be rendered."}},parameters:{layout:"centered",docs:{description:{component:"\nThe `HoverCard` component displays a popover-style dropdown when the user hovers over a target element. It wraps Mantine's composable `HoverCard` while enforcing strict Recursica design token styling.\n\n### Composable API\n\nHoverCard uses a dot-notation composition pattern:\n- `<HoverCard>` — Root container managing open/close state on hover\n- `<HoverCard.Target>` — Wrapper for the trigger element (must be a single element supporting ref)\n- `<HoverCard.Dropdown>` — The popup panel displaying content on hover\n\n### Key Behaviors\n- The dropdown opens when the user hovers over the target and closes when they move away\n- `openDelay` and `closeDelay` control the timing of open/close transitions\n- The dropdown stays open while the user hovers over it, allowing interaction with its content\n        "}}}},t={args:{position:"top",withBeak:!0,offset:5,openDelay:0,closeDelay:150},render:({withLayer:p,layer:d,...o})=>e.jsxs(r,{...o,children:[e.jsx(r.Target,{children:e.jsx(s,{variant:"solid",children:"Hover me"})}),e.jsx(r.Dropdown,{children:e.jsx(i,{children:"This is a hover card with informational content that appears when you hover over the target element."})})]})},n={args:{position:"top",withBeak:!1,offset:5},render:({withLayer:p,layer:d,...o})=>e.jsxs(r,{...o,children:[e.jsx(r.Target,{children:e.jsx(s,{variant:"outline",children:"Without Beak"})}),e.jsx(r.Dropdown,{children:e.jsx(i,{children:"This hover card has the beak disabled, showing a clean dropdown without the pointing indicator."})})]})},a={args:{position:"top",offset:5},render:({withLayer:p,layer:d,...o})=>e.jsxs(r,{...o,children:[e.jsx(r.Target,{children:e.jsx(s,{variant:"solid",children:"User Profile"})}),e.jsx(r.Dropdown,{children:e.jsxs(y,{children:[e.jsx(C,{src:void 0,alt:"User avatar"}),e.jsxs(x,{children:[e.jsx(i,{children:"Jane Doe"}),e.jsx(i,{children:"Software Engineer at Recursica"})]})]})})]})},se=["Default","WithoutBeak","RichContent"];var l,c,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
