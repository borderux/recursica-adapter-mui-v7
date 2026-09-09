import{j as e}from"./iframe-kU2uZ2mD.js";import{P as t}from"./Popover-ByJUBAHi.js";import{B as i}from"./Button-qBfEpj1_.js";import{T as s}from"./Text-C7Vqo0_N.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-COKe-k3i.js";import"./useTheme-CESx5Tvs.js";import"./memoTheme-CUiA9Tdx.js";import"./useSlot-DCQ0gCga.js";import"./mergeSlotProps-R7_noUIN.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQw5XC3-.js";import"./useTimeout-9ok1YRN7.js";import"./useControlled-D-BE26Ek.js";import"./useEventCallback-DCTRcHjQ.js";import"./Portal-WIkLfS27.js";import"./index-if8tH4Ju.js";import"./index-BynENOvw.js";import"./Grow-DpWEYcyD.js";import"./utils-BaIwlAfN.js";import"./Popper-CNI5_dxW.js";import"./ownerDocument-DW-IO8s5.js";import"./useSlotProps-nni_0svl.js";import"./isFocusVisible-B8k4qzLc.js";import"./Loader-CejfQM53.js";import"./Button-BExKw4mg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-BK_3hQ-U.js";import"./CircularProgress-D6qmhZYM.js";import"./Typography-_kDiR3LQ.js";import"./Typography-CMwl3LrY.js";const X={title:"UI-Kit/Popover",component:t,tags:["autodocs"],parameters:{controls:{include:["withBeak","position","defaultOpened"]},docs:{description:{component:"The `Popover` component is a composable wrapper around Mui's Tooltip in click-controlled mode. It displays a dropdown panel when the user clicks a target element."}}},argTypes:{withBeak:{control:"boolean",description:"Whether to display a beak (arrow) pointing from the dropdown to the target."},position:{control:"select",options:["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],description:"Dropdown position relative to target"},defaultOpened:{control:"boolean",description:"Initial opened state"}}},r={args:{withBeak:!0,position:"top"},render:({withLayer:p,layer:d,...o})=>e.jsxs(t,{width:250,...o,children:[e.jsx(t.Target,{children:e.jsx(i,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{children:"This is the popover content. It can contain any elements you want to display when the user clicks the target."})})]})},n={args:{withBeak:!0,position:"top",defaultOpened:!0},parameters:{layout:"centered",controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(i,{variant:"solid",children:"Toggle Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{children:"This is a static representation of an opened popover with a beak."})})]})},a={args:{withBeak:!1,position:"bottom",defaultOpened:!0},parameters:{layout:"centered",controls:{disable:!0}},render:({withLayer:p,layer:d,...o})=>e.jsxs(t,{width:200,...o,children:[e.jsx(t.Target,{children:e.jsx(i,{variant:"outline",children:"Bottom Popover"})}),e.jsx(t.Dropdown,{children:e.jsx(s,{children:"This popover is positioned at the bottom and has no beak."})})]})},Y=["Default","SolidDefault","WithoutBeak"];var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    withBeak: true,
    position: "top"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PopoverStoryArgs) => {
    return <Popover width={250} {...args}>
        <Popover.Target>
          <Button variant="solid">Toggle Popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text>
            This is the popover content. It can contain any elements you want to
            display when the user clicks the target.
          </Text>
        </Popover.Dropdown>
      </Popover>;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    withBeak: true,
    position: "top",
    defaultOpened: true
  },
  parameters: {
    layout: "centered",
    controls: {
      disable: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PopoverStoryArgs) => {
    return <Popover width={200} {...args}>
        <Popover.Target>
          <Button variant="solid">Toggle Popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text>
            This is a static representation of an opened popover with a beak.
          </Text>
        </Popover.Dropdown>
      </Popover>;
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,w,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    withBeak: false,
    position: "bottom",
    defaultOpened: true
  },
  parameters: {
    layout: "centered",
    controls: {
      disable: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: PopoverStoryArgs) => {
    return <Popover width={200} {...args}>
        <Popover.Target>
          <Button variant="outline">Bottom Popover</Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text>This popover is positioned at the bottom and has no beak.</Text>
        </Popover.Dropdown>
      </Popover>;
  }
}`,...(y=(w=a.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};export{r as Default,n as SolidDefault,a as WithoutBeak,Y as __namedExportsOrder,X as default};
