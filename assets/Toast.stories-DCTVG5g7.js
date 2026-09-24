import{j as u}from"./iframe-Af9PnvWp.js";import{T as a}from"./Toast-REh2eal5.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-CQtpZwz0.js";import"./useSlot-DSrcY9TO.js";import"./mergeSlotProps-Bi6rYDEt.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DzPdBlep.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BAaPILiN.js";import"./Close-DsA62gig.js";import"./IconButton-D46YTIxU.js";import"./ButtonBase-CoiTLQYI.js";import"./useTimeout-D8fxJD_x.js";import"./useEventCallback-CWiruaLz.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-DG46lRVm.js";import"./Paper-BSGGNcJ0.js";import"./useTheme-CPnJyaeu.js";import"./Typography-B-tdiCPC.js";const W={title:"UI-Kit/Toast",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"The `Toast` component is a standalone visual component wrapping Mui's `Alert`. Note that this component is visually decoupled from `@mui/material/Snackbar` and is meant to be used when you need to render a static or manually-controlled notification panel."}}},argTypes:{title:{control:"text",description:"Title displayed above the message body"},children:{control:"text",description:"Main notification message"},withCloseButton:{control:"boolean",description:"Whether the close button is visible"}}},e={args:{variant:"default",title:"Update Available",children:"A new version of the application is available to download. Please restart your browser to apply the latest security patches and feature updates. If you ignore this message, the update will automatically install during your next session.",withCloseButton:!0},render:({withLayer:c,layer:d,...r})=>u.jsx(a,{...r})},t={args:{variant:"default",title:"Action Required",children:"You must complete your profile setup before accessing this feature.",icon:"⚠️"},parameters:{controls:{disable:!0}},render:({withLayer:c,layer:d,...r})=>u.jsx(a,{...r})},q=["Default","WithIcon"];var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
