import{j as l}from"./iframe-qCjK8Ppk.js";import{T as j}from"./TimePicker-CfOEIXVH.js";import{f as M}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./useMobilePicker-DX7cccbJ.js";import"./index-Da7nIDIN.js";import"./useTimeout-G7_qeC_s.js";import"./useThemeProps-93q_37QA.js";import"./useThemeProps-B-N44Vdu.js";import"./Typography-AUVo-XBv.js";import"./memoTheme-DjbLHl_q.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Modal-Cj-TlYgY.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-D3uppWyq.js";import"./useEventCallback-B3zUYIhu.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-B2FB3Tkl.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-CowepA8s.js";import"./Portal-BArQz4NL.js";import"./index-BIHWQzuF.js";import"./index-Cqqzb3p7.js";import"./getActiveElement-BwNsGdKK.js";import"./contains-B5PScIlI.js";import"./useTheme-CbTUk7Sj.js";import"./utils-C39l9ZgQ.js";import"./Grow-BrpmQhDJ.js";import"./Paper-BO-aH0TJ.js";import"./Popper-B3VVKavi.js";import"./useSlotProps-D22I-s2C.js";import"./useFormControl-D5K-0qz7.js";import"./Label-Bv_IjJMT.js";import"./formControlState-Dq1zat_P.js";import"./AssistiveElement-fCKWt-mE.js";import"./FormControlWrapper--1_a1dkH.js";import"./isMuiElement-BJO8mcbu.js";import"./IconButton-CKhsaHA_.js";import"./ButtonBase-C4Ww6xF6.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-BlQPvaiN.js";import"./createSvgIcon-EVrwW3-b.js";import"./DialogContent-Df4aos6_.js";import"./Button-EvTDGuok.js";import"./List-e7i-ILw1.js";import"./Chip-Qtc9GcNo.js";import"./WithReadOnlyWrapper-DN0DAfZn.js";import"./ReadOnlyField-Dy4ZsVn-.js";import"./renderRichOption-CP-ckh6B.js";import"./Dropdown.module-B9XybsE_.js";import"./Select-CA5y5mPz.js";import"./SelectFocusSourceContext-BhluRnRj.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-D_6s-KAd.js";import"./useControlled-Bq_qjM_z.js";import"./InputBase-DxWVLvOe.js";import"./MenuItem-BpcHBX7O.js";const Be={title:"UI-Kit/TimePicker",component:j,tags:["autodocs"],parameters:{controls:{include:["value","defaultValue","disabled","error","required","label","assistiveText","readOnly","withSeconds","formLayout"]},docs:{description:{component:'\nThe `TimePicker` primitive provides a 12-hour time field (via `@mui/x-date-pickers`) paired with a dedicated AM/PM `Dropdown`-style selector, integrated directly into the `FormControlWrapper` architecture. This composite is the only way this component operates — a Recursica-specific design, not a user-configurable option.\n\n### Examples\nAlways structure horizontal architectures via the generic `formLayout` parameter.\n```tsx\n<TimePicker\n  label="Start Time"\n  assistiveText="Select the deployment kick-off time."\n  formLayout="stacked"\n/>\n```\n'}}},argTypes:{...M,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."},withSeconds:{control:"boolean",description:"Shows and allows editing the seconds segment."}}},e={args:{disabled:!1,label:"Meeting Time",assistiveText:"Choose the start time in your local timezone."}},r={args:{label:"Incident Start Time",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}},t={args:{label:"Precise Execution Time",assistiveText:"Includes a seconds segment for exact scheduling.",withSeconds:!0}},o={args:{label:"Disabled Time Slot",disabled:!0}},i={args:{label:"Deployment Window",error:"The chosen time falls outside the allowed deployment window.",required:!0}},s={args:{label:"Meeting Time",assistiveText:"Choose the start time in your local timezone.",leftSection:l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})}},a={args:{label:"Static ReadOnly Review",value:"14:30",readOnly:!0}},n={args:{label:"Editable ReadOnly Review",defaultValue:"09:00",readOnly:!0,labelWithEditIcon:!0}},Fe=["Default","FormsSideBySide","WithSeconds","Disabled","ErrorState","WithLeadingIcon","StaticReadOnly","EditableReadOnly"];var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Meeting Time",
    assistiveText: "Choose the start time in your local timezone."
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Incident Start Time",
    assistiveText: "When did the incident originally occur?",
    formLayout: "side-by-side"
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,y,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Precise Execution Time",
    assistiveText: "Includes a seconds segment for exact scheduling.",
    withSeconds: true
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var T,x,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Disabled Time Slot",
    disabled: true
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var f,v,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Deployment Window",
    error: "The chosen time falls outside the allowed deployment window.",
    required: true
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var k,O,R;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Meeting Time",
    assistiveText: "Choose the start time in your local timezone.",
    leftSection: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
  }
}`,...(R=(O=s.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var E,W,L;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Static ReadOnly Review",
    value: "14:30",
    readOnly: true
  }
}`,...(L=(W=a.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var D,I,C;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Editable ReadOnly Review",
    defaultValue: "09:00",
    readOnly: true,
    labelWithEditIcon: true
  }
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};export{e as Default,o as Disabled,n as EditableReadOnly,i as ErrorState,r as FormsSideBySide,a as StaticReadOnly,s as WithLeadingIcon,t as WithSeconds,Fe as __namedExportsOrder,Be as default};
