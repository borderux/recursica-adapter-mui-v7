import{j as l}from"./iframe-Af9PnvWp.js";import{T as j}from"./TimePicker-CygROeCH.js";import{f as M}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./useMobilePicker-MXZJDDNr.js";import"./index-DKQRlsEN.js";import"./useTimeout-D8fxJD_x.js";import"./useThemeProps-GdLau-CK.js";import"./useThemeProps-JRIFPOcA.js";import"./Typography-B-tdiCPC.js";import"./memoTheme-CQtpZwz0.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Modal-D6Ox_3WB.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-DzPdBlep.js";import"./useEventCallback-CWiruaLz.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-Bi6rYDEt.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-DSrcY9TO.js";import"./Portal-F0LkcZrS.js";import"./index-NQ-DS-5S.js";import"./index-B-hWaPVj.js";import"./getActiveElement-BwNsGdKK.js";import"./contains-B5PScIlI.js";import"./useTheme-CPnJyaeu.js";import"./utils-DpLHncoY.js";import"./Grow-8e6E5LOX.js";import"./Paper-BSGGNcJ0.js";import"./Popper-DBpIGrEH.js";import"./useSlotProps-DCzUPcp7.js";import"./useFormControl-BKzJMgcN.js";import"./Label-Ceo_tuoa.js";import"./formControlState-Dq1zat_P.js";import"./AssistiveElement-B1eMkmcb.js";import"./FormControlWrapper-DGonrBwF.js";import"./isMuiElement-Cye2Ulcs.js";import"./IconButton-D46YTIxU.js";import"./ButtonBase-CoiTLQYI.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DG46lRVm.js";import"./createSvgIcon-BAaPILiN.js";import"./DialogContent-Bz9v2RQG.js";import"./Button-BNuv6PF8.js";import"./List-_uuq5UYJ.js";import"./Chip-C0yhEYlE.js";import"./WithReadOnlyWrapper-DjsftpS9.js";import"./ReadOnlyField-3b0xlTdp.js";import"./renderRichOption-t-81zIbe.js";import"./Dropdown.module-B9XybsE_.js";import"./Select-PhEzOK3m.js";import"./SelectFocusSourceContext-BQzQehQH.js";import"./debounce-Be36O1Ab.js";import"./mergeSlotProps-BMjm4vFR.js";import"./useControlled-CKWzBgGE.js";import"./InputBase-CSQptZmd.js";import"./MenuItem-u5D77-Xd.js";const Be={title:"UI-Kit/TimePicker",component:j,tags:["autodocs"],parameters:{controls:{include:["value","defaultValue","disabled","error","required","label","assistiveText","readOnly","withSeconds","formLayout"]},docs:{description:{component:'\nThe `TimePicker` primitive provides a 12-hour time field (via `@mui/x-date-pickers`) paired with a dedicated AM/PM `Dropdown`-style selector, integrated directly into the `FormControlWrapper` architecture. This composite is the only way this component operates — a Recursica-specific design, not a user-configurable option.\n\n### Examples\nAlways structure horizontal architectures via the generic `formLayout` parameter.\n```tsx\n<TimePicker\n  label="Start Time"\n  assistiveText="Select the deployment kick-off time."\n  formLayout="stacked"\n/>\n```\n'}}},argTypes:{...M,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."},withSeconds:{control:"boolean",description:"Shows and allows editing the seconds segment."}}},e={args:{disabled:!1,label:"Meeting Time",assistiveText:"Choose the start time in your local timezone."}},r={args:{label:"Incident Start Time",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}},t={args:{label:"Precise Execution Time",assistiveText:"Includes a seconds segment for exact scheduling.",withSeconds:!0}},o={args:{label:"Disabled Time Slot",disabled:!0}},i={args:{label:"Deployment Window",error:"The chosen time falls outside the allowed deployment window.",required:!0}},s={args:{label:"Meeting Time",assistiveText:"Choose the start time in your local timezone.",leftSection:l.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("circle",{cx:"12",cy:"12",r:"10"}),l.jsx("polyline",{points:"12 6 12 12 16 14"})]})}},a={args:{label:"Static ReadOnly Review",value:"14:30",readOnly:!0}},n={args:{label:"Editable ReadOnly Review",defaultValue:"09:00",readOnly:!0,labelWithEditIcon:!0}},Fe=["Default","FormsSideBySide","WithSeconds","Disabled","ErrorState","WithLeadingIcon","StaticReadOnly","EditableReadOnly"];var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
