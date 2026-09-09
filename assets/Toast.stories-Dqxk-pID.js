import{j as u}from"./iframe-kU2uZ2mD.js";import{T as a}from"./Toast-BCSQfMrS.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CUiA9Tdx.js";import"./useSlot-DCQ0gCga.js";import"./mergeSlotProps-R7_noUIN.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-BQw5XC3-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-DBTpmFLT.js";import"./Close-C-GJ2lGa.js";import"./IconButton-CT1UxnJx.js";import"./ButtonBase-BK_3hQ-U.js";import"./useTimeout-9ok1YRN7.js";import"./useEventCallback-DCTRcHjQ.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-D6qmhZYM.js";import"./Paper-DJxeo_fB.js";import"./useTheme-CESx5Tvs.js";import"./Typography-CMwl3LrY.js";const W={title:"UI-Kit/Toast",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"The `Toast` component is a standalone visual component wrapping Mui's `Alert`. Note that this component is visually decoupled from `@mui/material/Snackbar` and is meant to be used when you need to render a static or manually-controlled notification panel."}}},argTypes:{title:{control:"text",description:"Title displayed above the message body"},children:{control:"text",description:"Main notification message"},withCloseButton:{control:"boolean",description:"Whether the close button is visible"}}},e={args:{variant:"default",title:"Update Available",children:"A new version of the application is available to download. Please restart your browser to apply the latest security patches and feature updates. If you ignore this message, the update will automatically install during your next session.",withCloseButton:!0},render:({withLayer:c,layer:d,...r})=>u.jsx(a,{...r})},t={args:{variant:"default",title:"Action Required",children:"You must complete your profile setup before accessing this feature.",icon:"⚠️"},parameters:{controls:{disable:!0}},render:({withLayer:c,layer:d,...r})=>u.jsx(a,{...r})},q=["Default","WithIcon"];var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "Update Available",
    children: "A new version of the application is available to download. Please restart your browser to apply the latest security patches and feature updates. If you ignore this message, the update will automatically install during your next session.",
    withCloseButton: true
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: ToastStoryArgs) => {
    return <Toast {...args} />;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,l,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "Action Required",
    children: "You must complete your profile setup before accessing this feature.",
    icon: "⚠️"
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  render: ({
    withLayer,
    layer,
    ...args
  }: ToastStoryArgs) => {
    return <Toast {...args} />;
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};export{e as Default,t as WithIcon,q as __namedExportsOrder,W as default};
