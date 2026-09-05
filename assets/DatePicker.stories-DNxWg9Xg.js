import{j as e}from"./iframe-C9L8H00S.js";import{D as W}from"./DatePicker-DYoKdkx8.js";import{f as F}from"./commonArgTypes-DcjzA9l3.js";import"./preload-helper-Dp1pzeXC.js";import"./useMobilePicker-Bcb-tip6.js";import"./index-D2Dhm1bR.js";import"./useTimeout-C1sHeUaZ.js";import"./useThemeProps-C109eUK6.js";import"./useThemeProps-Cj3nA8h0.js";import"./Typography-JCiUd7HK.js";import"./memoTheme-BKxrc4lv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Modal-BhZIV_JH.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./useForkRef-Cd6OhXZR.js";import"./useEventCallback-B8BUMsS6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./mergeSlotProps-DzssbJii.js";import"./isHostComponent-DVu5iVWx.js";import"./useSlot-C8I2JGW1.js";import"./Portal-BHxxwObK.js";import"./index-LDcIlRkI.js";import"./index-BE98wLP5.js";import"./getActiveElement-BwNsGdKK.js";import"./contains-B5PScIlI.js";import"./useTheme-DVYIfn9h.js";import"./utils-BH4ZUOds.js";import"./Grow-M-RP_KmJ.js";import"./Paper-DgxEYcxW.js";import"./Popper-CWvnKkWc.js";import"./useSlotProps-DZtvK_0o.js";import"./useFormControl-Dv_SMVbg.js";import"./Label-DjTmna9s.js";import"./formControlState-Dq1zat_P.js";import"./AssistiveElement-eMTWsyz2.js";import"./FormControlWrapper-CN73xZi4.js";import"./isMuiElement-BzitnoUy.js";import"./IconButton-LHW_tPqQ.js";import"./ButtonBase-BgWs-ejp.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jjDTOO14.js";import"./createSvgIcon-B6aBkR02.js";import"./DialogContent-sIfpbDrX.js";import"./Button-XBKGuMHr.js";import"./List-BW4Nk4Zs.js";import"./Chip-DkQ0JWET.js";import"./WithReadOnlyWrapper-CA2_Oio2.js";import"./ReadOnlyField-BxeT-Fy1.js";const je={title:"UI-Kit/DatePicker",component:W,tags:["autodocs"],parameters:{docs:{description:{component:`
The \`DatePicker\` primitive provides a unified calendar date selection input integrated directly into the \`FormControlWrapper\` architecture.

### Architectural Decoupling
Recursica overrides MUI X's \`DatePicker\` field/popover defaults, safely injecting the date picker into our rigid structural layout systems. State modifiers (e.g. Focus, Errors, ReadOnly) hook seamlessly back onto our native CSS mapping architecture.

### Examples
Always structure horizontal architectures via the generic \`formLayout\` parameter.
\`\`\`tsx
<DatePicker 
  label="Start Date" 
  assistiveText="Select the deployment kick-off date." 
  formLayout="stacked" 
/>
\`\`\`
`}}},argTypes:{...F,disabled:{control:"boolean",description:"Maps the formal disabled variable states structurally to the input core."},error:{control:"text",description:"Applies the strict error string boundary rendering invalid structures seamlessly."},required:{control:"boolean"},label:{control:"text"},assistiveText:{control:"text"},readOnly:{control:"boolean",description:"Toggles structural read-only data presentation explicitly blocking standard component bindings."}}},t={args:{disabled:!1,label:"Project Deadline",assistiveText:"Specify the absolute cutoff for code submission."}},r={args:{label:"Incident Start Date",assistiveText:"When did the incident originally occur?",formLayout:"side-by-side"}};function M({className:P}){return e.jsxs("svg",{className:P,width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),e.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),e.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),e.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})}const a={args:{label:"Launch Date",slots:{openPickerIcon:M}}},o={args:{label:"Disabled Date Range",disabled:!0}},n={args:{label:"Execution Date",error:"The chosen date conflicts with an existing deployment freeze.",required:!0}},i={args:{label:"Meeting Date",assistiveText:"Calendar rendered open by default for styling review.",open:!0,onClose:()=>{},defaultValue:new Date(2026,7,26)},parameters:{docs:{description:{story:"The calendar dropdown renders open by default so its styling can be reviewed without a click interaction."}}}},s={args:{label:"Static ReadOnly Review",value:new Date("2026-05-21"),readOnly:!0}},l={args:{label:"Editable ReadOnly Review",defaultValue:new Date("2026-06-01"),readOnly:!0,labelWithEditIcon:!0}},Pe=["Default","FormsSideBySide","WithLeadingIcon","Disabled","ErrorState","OpenedCalendar","StaticReadOnly","EditableReadOnly"];var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: "Project Deadline",
    assistiveText: "Specify the absolute cutoff for code submission."
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Incident Start Date",
    assistiveText: "When did the incident originally occur?",
    formLayout: "side-by-side"
  }
}`,...(y=(u=r.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Launch Date",
    slots: {
      openPickerIcon: CustomLeadingIcon
    }
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,x,D;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Disabled Date Range",
    disabled: true
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var v,w,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Execution Date",
    error: "The chosen date conflicts with an existing deployment freeze.",
    required: true
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var k,O,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: "Meeting Date",
    assistiveText: "Calendar rendered open by default for styling review.",
    // MUI X's DatePicker supports a controlled \`open\` prop directly; pairing it with a
    // no-op \`onClose\` keeps the calendar open with no click interaction needed — same
    // intent as the mantine-adapter's \`OpenedCalendar\` story.
    open: true,
    onClose: () => {},
    // Fixed (not computed) so the selected-day fill is visible on load, alongside the
    // today marker, for styling review. Local-component constructor, not an ISO date
    // string — \`new Date("2026-08-26")\` parses as UTC midnight, which renders as the
    // 25th in any timezone behind UTC.
    defaultValue: new Date(2026, 7, 26)
  },
  parameters: {
    docs: {
      description: {
        story: "The calendar dropdown renders open by default so its styling can be reviewed without a click interaction."
      }
    }
  }
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var R,C,E;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: "Static ReadOnly Review",
    value: new Date("2026-05-21"),
    readOnly: true
  }
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,L,j;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Editable ReadOnly Review",
    defaultValue: new Date("2026-06-01"),
    readOnly: true,
    labelWithEditIcon: true
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};export{t as Default,o as Disabled,l as EditableReadOnly,n as ErrorState,r as FormsSideBySide,i as OpenedCalendar,s as StaticReadOnly,a as WithLeadingIcon,Pe as __namedExportsOrder,je as default};
