import{T as G}from"./TransferList-CNfnOyPx.js";import{f as k}from"./commonArgTypes-DcjzA9l3.js";import"./iframe-DtPh-Hrm.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-9dawvZf4.js";import"./FormControlWrapper-4BxeKncH.js";import"./Label-CnpY0PdR.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-DXqYUrij.js";import"./styled-DU1jaq3b.js";import"./memoTheme-BmpU7826.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-DIc7Yyqe.js";import"./isMuiElement-BY5PQdgw.js";import"./ReadOnlyField-Yi3uM0wf.js";import"./Badge-CHmTkOpt.js";import"./usePreviousProps-CePaQBeR.js";import"./useSlot-BacqRUEp.js";import"./mergeSlotProps-D0r5itFE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DwLN994t.js";import"./Button-BMmf2xwn.js";import"./Loader-ButEPQrS.js";import"./Button-DNGs3jQb.js";import"./ButtonBase-wvV86bTF.js";import"./useTimeout-CaDGpj1C.js";import"./useEventCallback-DU1HiWv9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jV4KNVk4.js";import"./TextField-BDnrAuky.js";import"./InputBase-H8emv_A_.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-BwNsGdKK.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Checkbox-Bd_QABoH.js";import"./FormGroup-nwKSjfbv.js";import"./Checkbox-osEcYWZJ.js";import"./SwitchBase-BUpNNzDI.js";import"./useControlled-C3EFwP1q.js";import"./createSvgIcon-4XQSadal.js";import"./mergeSlotProps-C1rCQydT.js";const n=[[{value:"alpha",label:"Alpha"},{value:"bravo",label:"Bravo"},{value:"charlie",label:"Charlie"},{value:"delta",label:"Delta"},{value:"echo",label:"Echo"}],[{value:"foxtrot",label:"Foxtrot"}]],M=[[{value:"apple",label:"Apple",group:"Fruit"},{value:"banana",label:"Banana",group:"Fruit"},{value:"carrot",label:"Carrot",group:"Vegetable"},{value:"daikon",label:"Daikon",group:"Vegetable"},{value:"eagle",label:"Eagle"}],[]],xe={title:"UI-Kit/TransferList",component:G,tags:["autodocs"],parameters:{docs:{description:{component:"TransferList (dual listbox) lets users move items between two lists. Composes FormControlWrapper, TextField, Checkbox, CheckboxGroup, Badge, and Button."}}},args:{label:"Assign users",assistiveText:"Move users into the selected list.",defaultData:n,disabled:!1,required:!1},argTypes:{disabled:{control:"boolean"},...k,sourceLabel:{control:"text"},targetLabel:{control:"text"},searchable:{control:"boolean"},searchPlaceholder:{control:"text"}}},e={},r={args:{label:"Assign ingredients",defaultData:M}},a={args:{formLayout:"side-by-side"}},t={args:{label:"Assign users (no filtering)",searchable:!1}},s={args:{error:"Select at least one user.",defaultData:[[],n[0]]}},o={args:{disabled:!0}},l={args:{label:"Assign users",defaultData:[[],[]]}},i={args:{label:"Assigned users",defaultData:[[],n[0]],readOnly:!0}},Ee=["Default","Grouped","SideBySide","NoSearch","StaticError","StaticDisabled","Empty","ReadOnly"];var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Assign ingredients",
    defaultData: GROUPED_DATA
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,f,A;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    formLayout: "side-by-side"
  }
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,D,h;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Assign users (no filtering)",
    searchable: false
  }
}`,...(h=(D=t.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var v,y,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: "Select at least one user.",
    defaultData: [[], SAMPLE_DATA![0]]
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,E,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(E=o.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,O,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "Assign users",
    defaultData: [[], []]
  }
}`,...(_=(O=l.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var B,P,F;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: "Assigned users",
    defaultData: [[], SAMPLE_DATA![0]],
    readOnly: true
  }
}`,...(F=(P=i.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};export{e as Default,l as Empty,r as Grouped,t as NoSearch,i as ReadOnly,a as SideBySide,o as StaticDisabled,s as StaticError,Ee as __namedExportsOrder,xe as default};
