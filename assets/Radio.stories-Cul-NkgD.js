import{j as n}from"./iframe-Ct48WTvw.js";import{R as v}from"./Radio-BZJQfkh3.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-Di6EZajK.js";import"./FormControlWrapper-GhXaeP61.js";import"./Label-8d4k_sa6.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-COk3QoLl.js";import"./memoTheme-DYEJ69YG.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-Co4BtWXr.js";import"./isMuiElement-tI9r8AKM.js";import"./ReadOnlyField-BZLk3DBS.js";import"./useControlled-CDdRYjim.js";import"./useForkRef-DU9swbnb.js";import"./FormGroup-DQnN6AJ2.js";import"./SwitchBase-rmyWXwnK.js";import"./useSlot-B9ohJ97y.js";import"./mergeSlotProps-Ckix2cPU.js";import"./isHostComponent-DVu5iVWx.js";import"./ButtonBase-EPH6VC7P.js";import"./useTimeout-z8WObsgL.js";import"./useEventCallback-F0UOZzXH.js";import"./isFocusVisible-B8k4qzLc.js";import"./createSvgIcon-CWtFkW02.js";import"./createChainedFunction-BO_9K8Jh.js";const Z={title:"UI-Kit/Radio",component:v,tags:["autodocs"],parameters:{docs:{description:{component:'\nThe `Radio` component represents a fundamental standalone boolean selection node mapping to the native HTML `<input type="radio">`. \n\n> [!WARNING]\n> This component represents the isolated primitive structure. If you need macro form configurations, standard vertical alignments, side-by-side array wrappers, or integrated assistive text and error borders natively, you MUST use the `<Radio.Group>` orchestrator instead!\n'}}},argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"},readOnly:{control:"boolean"},error:{control:"boolean"},defaultChecked:{control:"boolean"},controlMaxWidth:{table:{disable:!0}},controlMinWidth:{table:{disable:!0}}}},e={args:{label:"Standard Radio Primitive"}},r={args:{label:"Opt-in form alignment",formLayout:"side-by-side"}},a={args:{...e.args,defaultChecked:!0}},t={args:{...e.args,disabled:!0}},o={args:{...e.args,disabled:!0,defaultChecked:!0}},s={args:{},render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:n.jsx(v,{label:"Account Type",defaultChecked:!0,readOnly:!0})})},$=["Default","SideBySideLayout","CheckedState","DisabledUnchecked","DisabledChecked","ReadOnly"];var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Standard Radio Primitive"
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,p,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "Opt-in form alignment",
    formLayout: "side-by-side"
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultChecked: true
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,k,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    defaultChecked: true
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var R,C,D;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {},
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Radio label="Account Type" defaultChecked readOnly />
    </div>
}`,...(D=(C=s.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};export{a as CheckedState,e as Default,o as DisabledChecked,t as DisabledUnchecked,s as ReadOnly,r as SideBySideLayout,$ as __namedExportsOrder,Z as default};
