import{r as u,j as e}from"./iframe-PdDWfkDX.js";import{a as w,C as t}from"./Checkbox-BSN5MYc5.js";import{f as T}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-CWitwj_u.js";import"./FormControlWrapper-DDVpMaub.js";import"./Label-_bV3hfza.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BMEXVZgl.js";import"./memoTheme-lgi3hnwf.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-PpWM0OUD.js";import"./isMuiElement-RmyecoAY.js";import"./ReadOnlyField-Dsjf5iTN.js";import"./FormGroup-BClPKL7x.js";import"./Checkbox-CRDyoUdO.js";import"./SwitchBase-BqxUEtOF.js";import"./useSlot-DvzA4fiB.js";import"./mergeSlotProps-BGJHU0YL.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-c0Kl1hH6.js";import"./useControlled-C2Z14fIR.js";import"./ButtonBase-m9VNVcKq.js";import"./useTimeout-DnFjP3Pu.js";import"./useEventCallback-Bhjsv_xb.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-Dpz-Y7CD.js";import"./mergeSlotProps-DaWZPMRy.js";const te={title:"UI-Kit/CheckboxGroup",component:w,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `CheckboxGroup` component is the mandatory organizational wrapper aggregating multiple `Checkbox` primitives into structurally bound unified arrays. It inherently leverages the `FormControlWrapper` granting native access to macroscopic layout structuring, assistive descriptions, and strict flex arrays.\n\nWe exclusively utilize the `formLayout` parameter to control macro-level form flow:\n- **`formLayout="stacked"`**: Top-to-bottom layout cascading the Label bounding box down vertically into a standard stacked checkbox column array.\n- **`formLayout="side-by-side"`**: Flow architecture pulling the grouping Label dynamically to the left while structurally organizing the internal checkboxes cleanly alongside it horizontally.\n\n```tsx\n<Checkbox.Group \n  label="Execution Targets" \n  assistiveText="Strictly mapped structural grouping dynamically applied natively."\n  formLayout="stacked" \n>\n  <Checkbox value="react" label="Browser Execution Context" />\n  <Checkbox value="svelte" label="Edge Nodes" />\n</Checkbox.Group>\n```\n'}}},argTypes:{...T,readOnly:{control:"boolean",description:"Toggles structural read-only data presentation bypassing interaction boundaries completely."}}},o={args:{formLayout:"stacked",label:"Standard Group"},render:function({withLayer:d,layer:p,...r}){const[a,n]=u.useState([]);return e.jsxs(t.Group,{...r,value:a,onChange:n,children:[e.jsx(t,{value:"1",label:"Option 1"}),e.jsx(t,{value:"2",label:"Option 2"})]})}},i={args:{formLayout:"side-by-side",labelOptionalText:"Recommended",labelWithEditIcon:!0,label:"Frontend Frameworks",assistiveText:"Select all libraries currently in use for this specific workspace configuration."},render:function({withLayer:d,layer:p,...r}){const[a,n]=u.useState(["react"]);return e.jsxs(t.Group,{...r,value:a,onChange:n,children:[e.jsx(t,{value:"react",label:"React (Standard Build)"}),e.jsx(t,{value:"svelte",label:"The Svelte architecture which provides a highly optimized, completely compiler-driven framework avoiding virtual DOM boundaries. This massively extended text explicitly guarantees accurate wrapper constraint checking and multi-line flex alignment."}),e.jsx(t,{value:"vue",label:"Vue Configuration Map"})]})}},l={args:{formLayout:"stacked",required:!0,label:"Execution Targets",error:"You must select at least one deployment target to compile."},render:function({withLayer:d,layer:p,...r}){const[a,n]=u.useState(["react"]);return e.jsxs(t.Group,{...r,value:a,onChange:n,children:[e.jsx(t,{value:"react",label:"Browser Execution Context"}),e.jsx(t,{value:"svelte",label:"Highly distributed Edge computing environments seamlessly bridging local runtime boundaries."}),e.jsx(t,{value:"vue",label:"Serverless Cloud Providers"})]})}},s={args:{readOnly:!0,formLayout:"stacked",required:!0,label:"Static ReadOnly Execution Locks",assistiveText:"This structure explicitly validates native component-level DOM preservation natively mapping lock bounds safely over interaction."},render:function({withLayer:d,layer:p,...r}){const[a,n]=u.useState(["disabledNode"]);return e.jsxs(t.Group,{...r,value:a,onChange:n,children:[e.jsx(t,{value:"disabledNode",label:"Structurally Checked Node natively"}),e.jsx(t,{value:"disabledNodeEmpty",label:"Unchecked Configuration Limit"})]})}},re=["Default","SideBySideLayout","StackedLayout","ReadOnly"];var m,y,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    formLayout: "stacked",
    label: "Standard Group"
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: function StoryRender({
    withLayer,
    layer,
    ...args
  }: any) {
    const [value, setValue] = useState<string[]>([]);
    return <Checkbox.Group {...args} value={value} onChange={setValue}>
        <Checkbox value="1" label="Option 1" />
        <Checkbox value="2" label="Option 2" />
      </Checkbox.Group>;
  }
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var v,g,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    formLayout: "side-by-side",
    labelOptionalText: "Recommended",
    labelWithEditIcon: true,
    label: "Frontend Frameworks",
    assistiveText: "Select all libraries currently in use for this specific workspace configuration."
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: function StoryRender({
    withLayer,
    layer,
    ...args
  }: any) {
    const [value, setValue] = useState<string[]>(["react"]);
    return <Checkbox.Group {...args} value={value} onChange={setValue}>
        <Checkbox value="react" label="React (Standard Build)" />
        <Checkbox value="svelte" label="The Svelte architecture which provides a highly optimized, completely compiler-driven framework avoiding virtual DOM boundaries. This massively extended text explicitly guarantees accurate wrapper constraint checking and multi-line flex alignment." />
        <Checkbox value="vue" label="Vue Configuration Map" />
      </Checkbox.Group>;
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,k,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    formLayout: "stacked",
    required: true,
    label: "Execution Targets",
    error: "You must select at least one deployment target to compile."
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: function StoryRender({
    withLayer,
    layer,
    ...args
  }: any) {
    const [value, setValue] = useState<string[]>(["react"]);
    return <Checkbox.Group {...args} value={value} onChange={setValue}>
        <Checkbox value="react" label="Browser Execution Context" />
        <Checkbox value="svelte" label="Highly distributed Edge computing environments seamlessly bridging local runtime boundaries." />
        <Checkbox value="vue" label="Serverless Cloud Providers" />
      </Checkbox.Group>;
  }
}`,...(f=(k=l.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var C,S,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    readOnly: true,
    formLayout: "stacked",
    required: true,
    label: "Static ReadOnly Execution Locks",
    assistiveText: "This structure explicitly validates native component-level DOM preservation natively mapping lock bounds safely over interaction."
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: function StoryRender({
    withLayer,
    layer,
    ...args
  }: any) {
    const [value, setValue] = useState<string[]>(["disabledNode"]);
    return <Checkbox.Group {...args} value={value} onChange={setValue}>
        <Checkbox value="disabledNode" label="Structurally Checked Node natively" />
        <Checkbox value="disabledNodeEmpty" label="Unchecked Configuration Limit" />
      </Checkbox.Group>;
  }
}`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};export{o as Default,s as ReadOnly,i as SideBySideLayout,l as StackedLayout,re as __namedExportsOrder,te as default};
