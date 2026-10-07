import{j as u}from"./iframe-DtPh-Hrm.js";import{T as a}from"./Toast-zv0M3iZt.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-BmpU7826.js";import"./styled-DU1jaq3b.js";import"./useSlot-BacqRUEp.js";import"./mergeSlotProps-D0r5itFE.js";import"./isHostComponent-DVu5iVWx.js";import"./useForkRef-DwLN994t.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-4XQSadal.js";import"./Close-COXBNevJ.js";import"./IconButton-DbY4NbMo.js";import"./ButtonBase-wvV86bTF.js";import"./useTimeout-CaDGpj1C.js";import"./useEventCallback-DU1HiWv9.js";import"./isFocusVisible-B8k4qzLc.js";import"./CircularProgress-jV4KNVk4.js";import"./Paper-BxK6tA6p.js";import"./useTheme-BrK4kU95.js";import"./Typography-GsW3b1oP.js";const q={title:"UI-Kit/Toast",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"The `Toast` component is a standalone visual component wrapping Mui's `Alert`. Note that this component is visually decoupled from `@mui/material/Snackbar` and is meant to be used when you need to render a static or manually-controlled notification panel."}}},argTypes:{title:{control:"text",description:"Title displayed above the message body"},children:{control:"text",description:"Main notification message"},withCloseButton:{control:"boolean",description:"Whether the close button is visible"}}},e={args:{variant:"default",title:"Update Available",children:"A new version of the application is available to download. Please restart your browser to apply the latest security patches and feature updates. If you ignore this message, the update will automatically install during your next session.",withCloseButton:!0},render:({withLayer:c,layer:d,...r})=>u.jsx(a,{...r})},t={args:{variant:"default",title:"Action Required",children:"You must complete your profile setup before accessing this feature.",icon:"⚠️"},parameters:{controls:{disable:!0}},render:({withLayer:c,layer:d,...r})=>u.jsx(a,{...r})},D=["Default","WithIcon"];var o,n,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};export{e as Default,t as WithIcon,D as __namedExportsOrder,q as default};
