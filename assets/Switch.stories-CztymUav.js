import{j as e}from"./iframe-PdDWfkDX.js";import{S as t}from"./Switch-XU9zqOTL.js";import{S as j}from"./Stack-BRJs8K4N.js";import"./preload-helper-Dp1pzeXC.js";import"./FormControlWrapper-DDVpMaub.js";import"./Label-_bV3hfza.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BMEXVZgl.js";import"./memoTheme-lgi3hnwf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-PpWM0OUD.js";import"./isMuiElement-RmyecoAY.js";import"./WithReadOnlyWrapper-CWitwj_u.js";import"./ReadOnlyField-Dsjf5iTN.js";import"./FormGroup-BClPKL7x.js";import"./SwitchBase-BqxUEtOF.js";import"./useSlot-DvzA4fiB.js";import"./mergeSlotProps-BGJHU0YL.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-c0Kl1hH6.js";import"./useControlled-C2Z14fIR.js";import"./ButtonBase-m9VNVcKq.js";import"./useTimeout-DnFjP3Pu.js";import"./useEventCallback-Bhjsv_xb.js";import"./isFocusVisible-B8k4qzLc.js";import"./mergeSlotProps-DaWZPMRy.js";import"./Stack-DupO4N1v.js";import"./styled-B4oBy5pr.js";import"./useThemeProps-Ck5GChhQ.js";const ae={title:"UI-Kit/Switch",component:t,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `Switch` component is an atomic form primitive representing boolean states, natively aligned to the Recursica design system.\n\n> [!IMPORTANT]  \n> Unlike `Checkbox`, the `Switch` is typically used for standalone settings toggles. It fully supports the universal `ReadOnlyField` boundaries when passed the `readOnly` attribute.\n\n### Usage\nTo render a standard switch:\n```tsx\n<Switch label="Enable Notifications" defaultChecked />\n```\n'}}},argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"boolean"},defaultChecked:{control:"boolean"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation bypassing interaction boundaries completely."},controlMaxWidth:{table:{disable:!0}},controlMinWidth:{table:{disable:!0}},emptyValueComponent:{table:{disable:!0}}}},a={args:{disabled:!1,label:"Standard Switch"},render:({withLayer:l,layer:d,...r})=>e.jsx(t,{...r})},n={args:{label:"Opt-in form alignment",formLayout:"side-by-side"},render:({withLayer:l,layer:d,...r})=>e.jsx(t,{...r})},s={args:{},render:()=>e.jsxs(j,{spacing:"rec-xl",children:[e.jsx(t,{label:"Default Unchecked State"}),e.jsx(t,{label:"Checked State",defaultChecked:!0}),e.jsx(t,{label:"Disabled Unchecked",disabled:!0}),e.jsx(t,{label:"Disabled Checked",defaultChecked:!0,disabled:!0})]})},i={args:{...a.args,readOnly:!0},render:({withLayer:l,layer:d,...r})=>e.jsx(t,{...r})},o={args:{...a.args,readOnly:!0},render:({withLayer:l,layer:d,...r})=>e.jsx(t,{...r,readOnlyComponent:({checked:c,label:L})=>e.jsxs("span",{style:{fontWeight:"bold",color:c?"green":"red"},children:[L," ",c?"ENABLED":"DISABLED"]})})},ne=["Default","SideBySideLayout","StaticVariations","ReadOnly","CustomReadOnly"];var p,m,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Standard Switch"
  },
  // We explicitly destructure global Storybook injected arguments so they do not leak into the DOM natively.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} />
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var y,h,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Opt-in form alignment",
    formLayout: "side-by-side"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} />
}`,...(b=(h=n.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,S,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {},
  render: () => <Stack spacing="rec-xl">
      <Switch label="Default Unchecked State" />
      <Switch label="Checked State" defaultChecked />
      <Switch label="Disabled Unchecked" disabled />
      <Switch label="Disabled Checked" defaultChecked disabled />
    </Stack>
}`,...(f=(S=s.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,w,k;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} />
}`,...(k=(w=i.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,D,C;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <Switch {...args} readOnlyComponent={({
    checked,
    label
  }) => <span style={{
    fontWeight: "bold",
    color: checked ? "green" : "red"
  }}>
          {label} {checked ? "ENABLED" : "DISABLED"}
        </span>} />
}`,...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};export{o as CustomReadOnly,a as Default,i as ReadOnly,n as SideBySideLayout,s as StaticVariations,ne as __namedExportsOrder,ae as default};
