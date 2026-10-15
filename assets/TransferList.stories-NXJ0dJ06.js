import{T as G}from"./TransferList-7kzKQ5XQ.js";import{f as k}from"./commonArgTypes-DcjzA9l3.js";import"./iframe-C3AQDpkQ.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-Dz7bepbF.js";import"./FormControlWrapper-Dvn_jBTx.js";import"./Label-D90gYspL.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-N5y1yWFX.js";import"./styled-Avj7V1fo.js";import"./memoTheme-BLrA5lSI.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-liuNfW9_.js";import"./isMuiElement-D8MNDslR.js";import"./ReadOnlyField-CABTFbOv.js";import"./Badge-BkGaSBhN.js";import"./usePreviousProps-Dsy95-C8.js";import"./useSlot-BXCFsXur.js";import"./mergeSlotProps-xZGxbmam.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DrPoL9C1.js";import"./Button-V0FGJqNR.js";import"./Loader-Dh7_UgPQ.js";import"./Button-B_WhQCbW.js";import"./ButtonBase-CE5QTQ9q.js";import"./useTimeout-CB6yygJo.js";import"./useEventCallback-BeIC54gG.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-11bQmzIE.js";import"./TextField-CJdSLtqS.js";import"./InputBase-BgbC5AHI.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-BwNsGdKK.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Checkbox-TWKYlqtL.js";import"./FormGroup-nGn9Uays.js";import"./Checkbox-CAOCQO6D.js";import"./SwitchBase-BeekljWk.js";import"./useControlled-BxRWQxpF.js";import"./createSvgIcon-CHiiIlsY.js";import"./mergeSlotProps-DvzE-78w.js";const n=[[{value:"alpha",label:"Alpha"},{value:"bravo",label:"Bravo"},{value:"charlie",label:"Charlie"},{value:"delta",label:"Delta"},{value:"echo",label:"Echo"}],[{value:"foxtrot",label:"Foxtrot"}]],M=[[{value:"apple",label:"Apple",group:"Fruit"},{value:"banana",label:"Banana",group:"Fruit"},{value:"carrot",label:"Carrot",group:"Vegetable"},{value:"daikon",label:"Daikon",group:"Vegetable"},{value:"eagle",label:"Eagle"}],[]],xe={title:"UI-Kit/TransferList",component:G,tags:["autodocs"],parameters:{docs:{description:{component:"TransferList (dual listbox) lets users move items between two lists. Composes FormControlWrapper, TextField, Checkbox, CheckboxGroup, Badge, and Button."}}},args:{label:"Assign users",assistiveText:"Move users into the selected list.",defaultData:n,disabled:!1,required:!1},argTypes:{disabled:{control:"boolean"},...k,sourceLabel:{control:"text"},targetLabel:{control:"text"},searchable:{control:"boolean"},searchPlaceholder:{control:"text"}}},e={},r={args:{label:"Assign ingredients",defaultData:M}},a={args:{formLayout:"side-by-side"}},t={args:{label:"Assign users (no filtering)",searchable:!1}},s={args:{error:"Select at least one user.",defaultData:[[],n[0]]}},o={args:{disabled:!0}},l={args:{label:"Assign users",defaultData:[[],[]]}},i={args:{label:"Assigned users",defaultData:[[],n[0]],readOnly:!0}},Ee=["Default","Grouped","SideBySide","NoSearch","StaticError","StaticDisabled","Empty","ReadOnly"];var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
