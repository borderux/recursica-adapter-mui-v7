import{j as e}from"./iframe-C9L8H00S.js";import{C as a}from"./Checkbox-D3VH4nrC.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-CA2_Oio2.js";import"./FormControlWrapper-CN73xZi4.js";import"./Label-DjTmna9s.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Dv_SMVbg.js";import"./memoTheme-BKxrc4lv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-eMTWsyz2.js";import"./isMuiElement-BzitnoUy.js";import"./ReadOnlyField-BxeT-Fy1.js";import"./FormGroup-hQeEpm-w.js";import"./Checkbox-CtKZ26Ku.js";import"./SwitchBase-EXIgunoN.js";import"./useSlot-C8I2JGW1.js";import"./mergeSlotProps-DzssbJii.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cd6OhXZR.js";import"./useControlled-B_wpawBW.js";import"./ButtonBase-BgWs-ejp.js";import"./useTimeout-C1sHeUaZ.js";import"./useEventCallback-B8BUMsS6.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-B6aBkR02.js";import"./mergeSlotProps-DgdDHdZ_.js";const Q={title:"UI-Kit/Checkbox",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `Checkbox` component is a precisely engineered, atomic form primitive representing boolean states natively aligned to the Recursica design system. It overrides Mantine\'s standard properties explicitly enforcing our variables natively across all structural boundaries.\n\n> [!IMPORTANT]  \n> The atomic `Checkbox` is intended primarily as an internal primitive. **When wrapping multiple Checkbox elements together or rendering form controls, always utilize the `<Checkbox.Group>` component.** `Checkbox.Group` inherits the global `FormControlWrapper`, granting instantaneous access to macroscopic layout structuring, assistive descriptions, validation errors, and strict flex arrays.\n\n### Usage\nTo render a solitary component natively:\n```tsx\n<Checkbox label="Acknowledge Terms" defaultChecked />\n```\n'}}},argTypes:{disabled:{control:"boolean"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation bypassing interaction boundaries completely."},controlMaxWidth:{table:{disable:!0}},controlMinWidth:{table:{disable:!0}}}},r={args:{disabled:!1,label:"Standard Unchecked Property"}},t={args:{label:"Opt-in form alignment",formLayout:"side-by-side"}},o={args:{label:"A meticulously long Checkbox label property demonstrating the absolute maximum 400px wrapper constraints actively snapping the text engine down onto a secondary wrapping line automatically without blowing out the visual boundaries."}},n={args:{},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Default Unchecked State"}),e.jsx(a,{label:"Acknowledge Configuration",defaultChecked:!0}),e.jsx(a,{label:"Indeterminate Master",indeterminate:!0}),e.jsx(a,{label:"Disabled Variant",disabled:!0}),e.jsx(a,{label:"Disabled Checked Variant",checked:!0,disabled:!0})]})},i={args:{},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsx(a,{label:"Accept Terms & Conditions",defaultChecked:!0,readOnly:!0})})},X=["Default","SideBySideLayout","LongLabelWrap","StaticVariations","ReadOnly"];var s,l,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Standard Unchecked Property"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Opt-in form alignment",
    formLayout: "side-by-side"
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "A meticulously long Checkbox label property demonstrating the absolute maximum 400px wrapper constraints actively snapping the text engine down onto a secondary wrapping line automatically without blowing out the visual boundaries."
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Checkbox label="Default Unchecked State" />
      <Checkbox label="Acknowledge Configuration" defaultChecked />
      <Checkbox label="Indeterminate Master" indeterminate />
      <Checkbox label="Disabled Variant" disabled />
      <Checkbox label="Disabled Checked Variant" checked disabled />
    </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,k,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Checkbox label="Accept Terms & Conditions" defaultChecked readOnly />
    </div>
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};export{r as Default,o as LongLabelWrap,i as ReadOnly,t as SideBySideLayout,n as StaticVariations,X as __namedExportsOrder,Q as default};
