import{j as r}from"./iframe-C5lTI8PY.js";import{A as n}from"./AssistiveElement-CrBkk9KX.js";import"./preload-helper-Dp1pzeXC.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-BJRJOypf.js";import"./memoTheme-jTggOn0l.js";const E={title:"UI-Kit/AssistiveElement",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"The `AssistiveElement` is a semantic structural primitive designed to standardize Helper and Error descriptive blocks natively beneath form components globally. By explicitly wiring to the `--recursica_ui-kit_components_assistive-element` layout tokens, this component safely injects custom SVGs (Alerts vs Info circles) alongside constrained flex-wrapping typography strings, preserving flawless line-height and alignment logic entirely decoupled from underlying input engine frameworks."}}},argTypes:{assistiveVariant:{control:"radio",options:["help","error"]},assistiveWithIcon:{control:"boolean"}}},s={args:{children:"This is a standard assistive layout explaining specific configurations.",assistiveVariant:"help",assistiveWithIcon:!0},render:({withLayer:a,layer:o,...e})=>r.jsx(n,{...e})},t={args:{children:"Invalid property. You must satisfy the constraints outlined above.",assistiveVariant:"error",assistiveWithIcon:!0},render:({withLayer:a,layer:o,...e})=>r.jsx(n,{...e})},i={args:{children:"Fallback textual representation without visual injection targets.",assistiveVariant:"help",assistiveWithIcon:!1},render:({withLayer:a,layer:o,...e})=>r.jsx(n,{...e})},j=["DefaultHelp","ErrorState","NoIconHelp"];var l,c,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "This is a standard assistive layout explaining specific configurations.",
    assistiveVariant: "help",
    assistiveWithIcon: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <AssistiveElement {...args} />
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,u,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Invalid property. You must satisfy the constraints outlined above.",
    assistiveVariant: "error",
    assistiveWithIcon: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <AssistiveElement {...args} />
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var y,h,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Fallback textual representation without visual injection targets.",
    assistiveVariant: "help",
    assistiveWithIcon: false
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  render: ({
    withLayer,
    layer,
    ...args
  }: any) => <AssistiveElement {...args} />
}`,...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};export{s as DefaultHelp,t as ErrorState,i as NoIconHelp,j as __namedExportsOrder,E as default};
