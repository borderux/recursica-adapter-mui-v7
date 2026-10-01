import{T as G}from"./TransferList-D-SS-q6-.js";import{f as k}from"./commonArgTypes-DcjzA9l3.js";import"./iframe-1B3c6W_w.js";import"./preload-helper-Dp1pzeXC.js";import"./WithReadOnlyWrapper-DQy3W0ty.js";import"./FormControlWrapper-C_GqWlLE.js";import"./Label-C1J_xGXf.js";import"./formControlState-Dq1zat_P.js";import"./useFormControl-piLlm3nv.js";import"./memoTheme-BnM7lbYg.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./AssistiveElement-C5qKBYb1.js";import"./isMuiElement-JFcZ2UkM.js";import"./ReadOnlyField-2nZoqGuf.js";import"./Badge-Dtkdo3h_.js";import"./usePreviousProps-hL1jzkN3.js";import"./useSlot-BfdZAKPX.js";import"./mergeSlotProps-BuxNgK44.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-gntbjHp8.js";import"./Button-js86bqg8.js";import"./Loader-BDCFfYXj.js";import"./Button-DkkbJz_2.js";import"./ButtonBase-BhSMpMgb.js";import"./useTimeout-X_40gxL0.js";import"./useEventCallback-i4YrD8Fk.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DbL9aRtC.js";import"./TextField-Wp53a9N3.js";import"./InputBase-CNqOQvKG.js";import"./ownerDocument-DW-IO8s5.js";import"./getActiveElement-BwNsGdKK.js";import"./ownerWindow-HkKU3E4x.js";import"./debounce-Be36O1Ab.js";import"./Checkbox-BWquzhTE.js";import"./FormGroup-BQ9Q_hek.js";import"./Checkbox-BGx0QasM.js";import"./SwitchBase-DSEeYM9m.js";import"./useControlled-9slYin5g.js";import"./createSvgIcon-Cm5dOCoH.js";import"./mergeSlotProps-oD1p_R5w.js";const n=[[{value:"alpha",label:"Alpha"},{value:"bravo",label:"Bravo"},{value:"charlie",label:"Charlie"},{value:"delta",label:"Delta"},{value:"echo",label:"Echo"}],[{value:"foxtrot",label:"Foxtrot"}]],M=[[{value:"apple",label:"Apple",group:"Fruit"},{value:"banana",label:"Banana",group:"Fruit"},{value:"carrot",label:"Carrot",group:"Vegetable"},{value:"daikon",label:"Daikon",group:"Vegetable"},{value:"eagle",label:"Eagle"}],[]],Te={title:"UI-Kit/TransferList",component:G,tags:["autodocs"],parameters:{docs:{description:{component:"TransferList (dual listbox) lets users move items between two lists. Composes FormControlWrapper, TextField, Checkbox, CheckboxGroup, Badge, and Button."}}},args:{label:"Assign users",assistiveText:"Move users into the selected list.",defaultData:n,disabled:!1,required:!1},argTypes:{disabled:{control:"boolean"},...k,sourceLabel:{control:"text"},targetLabel:{control:"text"},searchable:{control:"boolean"},searchPlaceholder:{control:"text"}}},e={},r={args:{label:"Assign ingredients",defaultData:M}},a={args:{formLayout:"side-by-side"}},s={args:{label:"Assign users (no filtering)",searchable:!1}},t={args:{error:"Select at least one user.",defaultData:[[],n[0]]}},o={args:{disabled:!0}},l={args:{label:"Assign users",defaultData:[[],[]]}},i={args:{label:"Assigned users",defaultData:[[],n[0]],readOnly:!0}},xe=["Default","Grouped","SideBySide","NoSearch","StaticError","StaticDisabled","Empty","ReadOnly"];var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Assign ingredients",
    defaultData: GROUPED_DATA
  }
}`,...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var b,f,A;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    formLayout: "side-by-side"
  }
}`,...(A=(f=a.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var S,D,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "Assign users (no filtering)",
    searchable: false
  }
}`,...(h=(D=s.parameters)==null?void 0:D.docs)==null?void 0:h.source}}};var v,y,T;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    error: "Select at least one user.",
    defaultData: [[], SAMPLE_DATA![0]]
  }
}`,...(T=(y=t.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var x,E,L;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(P=i.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};export{e as Default,l as Empty,r as Grouped,s as NoSearch,i as ReadOnly,a as SideBySide,o as StaticDisabled,t as StaticError,xe as __namedExportsOrder,Te as default};
