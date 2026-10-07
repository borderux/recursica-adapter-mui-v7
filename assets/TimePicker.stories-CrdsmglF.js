import{j as l}from"./iframe-DtPh-Hrm.js";import{T as j}from"./TimePicker-OhI0VOi-.js";import{f as M}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./useMobilePicker-BmOpVzPT.js";import"./index-DCwy1C7j.js";import"./useTimeout-CaDGpj1C.js";import"./useThemeProps-Cqp73CDa.js";import"./useThemeProps-M-vti_oN.js";import"./Typography-GsW3b1oP.js";import"./memoTheme-BmpU7826.js";import"./styled-DU1jaq3b.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Modal-DsyfiT8u.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-DwLN994t.js";import"./useEventCallback-DU1HiWv9.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-D0r5itFE.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-BacqRUEp.js";import"./Portal-BSHFXH0c.js";import"./index-KqHC6qGI.js";import"./index-CWV1h6Kw.js";import"./getActiveElement-BwNsGdKK.js";import"./contains-B5PScIlI.js";import"./useTheme-BrK4kU95.js";import"./utils-C0fnysSf.js";import"./Grow-1-8_IMgT.js";import"./Paper-BxK6tA6p.js";import"./Popper-BkR1YsYp.js";import"./useSlotProps-3mFeJZXI.js";import"./useFormControl-DXqYUrij.js";import"./Label-CnpY0PdR.js";import"./formControlState-Dq1zat_P.js";import"./AssistiveElement-DIc7Yyqe.js";import"./FormControlWrapper-4BxeKncH.js";import"./isMuiElement-BY5PQdgw.js";import"./IconButton-DbY4NbMo.js";import"./ButtonBase-wvV86bTF.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jV4KNVk4.js";import"./createSvgIcon-4XQSadal.js";import"./DialogContent-ChuGdAlx.js";import"./Button-DNGs3jQb.js";import"./List-DPwXj5ek.js";import"./Chip-D4uSlRKL.js";import"./WithReadOnlyWrapper-9dawvZf4.js";import"./ReadOnlyField-Yi3uM0wf.js";import"./renderRichOption-wdOAoh6R.js";import"./Dropdown.module-B9XybsE_.js";import"./Select-B6FVTHCd.js";import"./SelectFocusSourceContext-CVa_84G9.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-C1rCQydT.js";import"./useControlled-C3EFwP1q.js";import"./InputBase-H8emv_A_.js";import"./MenuItem-DvpA7AHq.js";const Fe={title:"UI-Kit/TimePicker",component:j,tags:["autodocs"],parameters:{controls:{include:["value","defaultValue","disabled","error","required","label","assistiveText","readOnly","withSeconds","formLayout"]},docs:{description:{component:'\nThe `TimePicker` primitive provides a 12-hour time field (via `@mui/x-date-pickers`) paired with a dedicated AM/PM `Dropdown`-style selector, integrated directly into the `FormControlWrapper` architecture. This composite is the only way this component operates — a Recursica-specific design, not a user-configurable option.\n\n### Examples\nAlways structure horizontal architectures via the generic `formLayout` parameter.\n```tsx\n<TimePicker\n  label="Start Time"\n  assistiveText="Select the deployment kick-off time."\n  formLayout="stacked"\n/>\n```\n'}}},argTypes:{...M,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."},withSeconds:{control:"boolean",description:"Shows and allows editing the seconds segment."}}},e={args:{disabled:!1,label:"Meeting Time",assistiveText:"Choose the start time in your local timezone."}},r={args:{label:"Incident Start Time",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}},t={args:{label:"Precise Execution Time",assistiveText:"Includes a seconds segment for exact scheduling.",withSeconds:!0}},o={args:{label:"Disabled Time Slot",disabled:!0}},i={args:{label:"Deployment Window",error:"The chosen time falls outside the allowed deployment window.",required:!0}},s={args:{label:"Meeting Time",assistiveText:"Choose the start time in your local timezone.",leftSection:l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})}},a={args:{label:"Static ReadOnly Review",value:"14:30",readOnly:!0}},n={args:{label:"Editable ReadOnly Review",defaultValue:"09:00",readOnly:!0,labelWithEditIcon:!0}},Ve=["Default","FormsSideBySide","WithSeconds","Disabled","ErrorState","WithLeadingIcon","StaticReadOnly","EditableReadOnly"];var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};export{e as Default,o as Disabled,n as EditableReadOnly,i as ErrorState,r as FormsSideBySide,a as StaticReadOnly,s as WithLeadingIcon,t as WithSeconds,Ve as __namedExportsOrder,Fe as default};
