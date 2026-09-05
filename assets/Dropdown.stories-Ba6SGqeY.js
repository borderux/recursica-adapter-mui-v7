import{j as e}from"./iframe-C9L8H00S.js";import{D as K}from"./Dropdown-nw4aPNTN.js";import{f as Y}from"./commonArgTypes-DcjzA9l3.js";import{r as q}from"./renderRichOption-BzXMXMiR.js";import{s as r}from"./Dropdown.module-B9XybsE_.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-CA2_Oio2.js";import"./FormControlWrapper-CN73xZi4.js";import"./Label-DjTmna9s.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-Dv_SMVbg.js";import"./memoTheme-BKxrc4lv.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-eMTWsyz2.js";import"./isMuiElement-BzitnoUy.js";import"./ReadOnlyField-BxeT-Fy1.js";import"./Select-D5XwZN5L.js";import"./SelectFocusSourceContext-CJAXJmXs.js";import"./useSlot-C8I2JGW1.js";import"./mergeSlotProps-DzssbJii.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-Cd6OhXZR.js";import"./useSlotProps-DZtvK_0o.js";import"./Paper-DgxEYcxW.js";import"./useTheme-DVYIfn9h.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Grow-M-RP_KmJ.js";import"./utils-BH4ZUOds.js";import"./useTimeout-C1sHeUaZ.js";import"./index-LDcIlRkI.js";import"./index-BE98wLP5.js";import"./Portal-BHxxwObK.js";import"./mergeSlotProps-DgdDHdZ_.js";import"./Modal-BhZIV_JH.js";import"./useEventCallback-B8BUMsS6.js";import"./createChainedFunction-BO_9K8Jh.js";import"./getActiveElement-BwNsGdKK.js";import"./contains-B5PScIlI.js";import"./List-BW4Nk4Zs.js";import"./useControlled-B_wpawBW.js";import"./createSvgIcon-B6aBkR02.js";import"./InputBase-CEdLNz1c.js";import"./MenuItem-eSpJyWgE.js";import"./ButtonBase-BgWs-ejp.js";import"./isFocusVisible-B8k4qzLc.js";const Ve={title:"UI-Kit/Dropdown",component:K,tags:["autodocs"],parameters:{docs:{description:{component:"Dropdown provides a selectable list of options, mapping natively over Mantine's Select component encapsulated within the standardized FormControlWrapper."}}},args:{label:"Country Selection",assistiveText:"Select your country of origin.",placeholder:"Pick value",data:["United States","Canada","Mexico","United Kingdom","France"],disabled:!1,required:!1,readOnly:!1,clearable:!1},argTypes:{disabled:{control:"boolean"},...Y,readOnly:{control:"boolean"},clearable:{control:"boolean"},wrapItemText:{control:"boolean",description:"Wraps option label/supportingText onto additional lines instead of truncating with an ellipsis."},containerWidth:{table:{disable:!0}}}},o={args:{}},t={args:{label:"Clearable Options",clearable:!0}},n={args:{label:"Destination",startAdornment:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),e.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}},a=e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),e.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),i={args:{label:"Assignee",placeholder:"Pick a team member",assistiveText:"Each option can show a leading icon and supporting text — see MANTINE_ADAPTER_RICH_OPTION_DATA.md.",data:[{value:"jdoe",label:"Jane Doe",leadingIcon:a,supportingText:"jane.doe@example.com"},{value:"asmith",label:"Alex Smith",leadingIcon:a,supportingText:"alex.smith@example.com"},{value:"unassigned",label:"Unassigned"}]}},s={args:{label:"Assignee",placeholder:"Pick a team member",wrapItemText:!0,data:[{value:"jdoe",label:"Jane Doe, Senior Staff Engineer, Platform Infrastructure",leadingIcon:a,supportingText:"jane.doe@example.com — Platform Infrastructure team, on-call rotation lead"},{value:"unassigned",label:"Unassigned"}],assistiveText:"wrapItemText=true — long label/supportingText wrap instead of truncating."}},G={optionContent:r.optionContent,optionIcon:r.optionIcon,optionText:r.optionText,optionTextWrap:r.optionTextWrap,optionSupportingText:r.optionSupportingText},Q=[{value:"icon-and-supporting",label:"Jane Doe",leadingIcon:a,supportingText:"jane.doe@example.com"},{value:"no-icon",label:"Alex Smith",supportingText:"No leadingIcon — label/supportingText shift left, no reserved icon space"},{value:"no-supporting-text",label:"Taylor Rivera",leadingIcon:a},{value:"plain",label:"Plain option — no leadingIcon, no supportingText"},{value:"long-text",label:"A very long option label that, with wrapItemText, wraps onto a second line instead of overflowing the fixed-width dropdown — otherwise it truncates with an ellipsis",leadingIcon:a,supportingText:"A similarly long supporting text string, to confirm the same wrap-or-truncate behavior applies to it too"}],V=F=>e.jsx("div",{className:r.dropdown,style:{width:"var(--recursica_ui-kit_components_dropdown_variants_layouts_stacked_properties_max-width)"},children:Q.map(u=>e.jsx("div",{className:r.option,children:q(u,G,F)},u.value))}),l={parameters:{controls:{disable:!0}},render:()=>V(!1)},p={parameters:{controls:{disable:!0}},render:()=>V(!0)},c={args:{error:"You must choose a valid destination.",value:"Invalid Island"}},d={args:{disabled:!0,value:"United States"}},m={args:{label:"Read Only View",readOnly:!0,value:"Canada"}},Fe=["Default","Clearable","WithLeadingIcon","WithRichOptions","WithRichOptionsWrapped","RichOptionRowPreview","RichOptionRowPreviewWrapped","StaticError","StaticDisabled","StaticReadOnly"];var g,x,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {}
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var b,v,w;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Clearable Options",
    clearable: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var T,I,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Destination",
    startAdornment: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
  }
}`,...(f=(I=n.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var S,O,R;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Assignee",
    placeholder: "Pick a team member",
    assistiveText: "Each option can show a leading icon and supporting text — see MANTINE_ADAPTER_RICH_OPTION_DATA.md.",
    data: [{
      value: "jdoe",
      label: "Jane Doe",
      leadingIcon: UserIcon,
      supportingText: "jane.doe@example.com"
    }, {
      value: "asmith",
      label: "Alex Smith",
      leadingIcon: UserIcon,
      supportingText: "alex.smith@example.com"
    }, {
      value: "unassigned",
      label: "Unassigned"
    }]
  }
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var P,y,j;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: "Assignee",
    placeholder: "Pick a team member",
    wrapItemText: true,
    data: [{
      value: "jdoe",
      label: "Jane Doe, Senior Staff Engineer, Platform Infrastructure",
      leadingIcon: UserIcon,
      supportingText: "jane.doe@example.com — Platform Infrastructure team, on-call rotation lead"
    }, {
      value: "unassigned",
      label: "Unassigned"
    }],
    assistiveText: "wrapItemText=true — long label/supportingText wrap instead of truncating."
  }
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var A,_,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderOptionRowPreview(false)
}`,...(W=(_=l.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var k,C,D;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => renderOptionRowPreview(true)
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,U,N;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    error: "You must choose a valid destination.",
    value: "Invalid Island"
  }
}`,...(N=(U=c.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var L,M,J;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "United States"
  }
}`,...(J=(M=d.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var z,B,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: "Read Only View",
    readOnly: true,
    value: "Canada"
  }
}`,...(H=(B=m.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};export{t as Clearable,o as Default,l as RichOptionRowPreview,p as RichOptionRowPreviewWrapped,d as StaticDisabled,c as StaticError,m as StaticReadOnly,n as WithLeadingIcon,i as WithRichOptions,s as WithRichOptionsWrapped,Fe as __namedExportsOrder,Ve as default};
