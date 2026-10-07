import{j as e}from"./iframe-DtPh-Hrm.js";import{B as c}from"./Breadcrumb-Cfw89Boy.js";import{L as a}from"./Link-BJ-VW0ia.js";import"./preload-helper-Dp1pzeXC.js";import"./memoTheme-BmpU7826.js";import"./styled-DU1jaq3b.js";import"./createSvgIcon-4XQSadal.js";import"./ButtonBase-wvV86bTF.js";import"./useTimeout-CaDGpj1C.js";import"./useForkRef-DwLN994t.js";import"./useEventCallback-DU1HiWv9.js";import"./isFocusVisible-B8k4qzLc.js";import"./useSlotProps-3mFeJZXI.js";import"./mergeSlotProps-D0r5itFE.js";import"./isHostComponent-DVu5iVWx.js";import"./Typography-GsW3b1oP.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./useTheme-BrK4kU95.js";const P={title:"UI-Kit/Breadcrumb",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"**Proper usage** (see `Default`): every crumb except the last is a `Link`; the last crumb — the current page — is plain text (e.g. a `<span>`), not a link. `Breadcrumb` does its best to neutralize a `Link` passed as the last item anyway (see `LastItemAsLink`), but that's a safety net, not something to rely on — see BREADCRUMB_IMPLEMENTATION_NOTES.md."}}},argTypes:{children:{table:{disable:!0}},items:{control:"object",description:"Array of string labels used to dynamically generate the interactive Breadcrumb nodes.",table:{category:"Story Controls"}},separator:{control:"text",description:"Custom separator between items"}},args:{items:["Home","Components","Breadcrumbs"]},render:({items:n,children:f,...L})=>{const k=n?n.map((i,o)=>o===n.length-1?e.jsx("span",{children:i},o):e.jsx(a,{href:"#",children:i},o)):f;return e.jsx(c,{children:k,...L})}},r={args:{items:["Dashboard","Settings","Security"]}},t={args:{items:["Root","Branch","Leaf"],separator:"→"}},s={name:"Last Item As Link (Incorrect Usage)",args:{items:void 0,children:[e.jsx(a,{href:"#",children:"Dashboard"},"dashboard"),e.jsx(a,{href:"#",children:"Settings"},"settings"),e.jsx(a,{href:"#",children:"Security"},"security")]},parameters:{docs:{description:{story:"Incorrect usage, kept as a story to prove Breadcrumb still handles it: the last crumb is a `Link`, but Breadcrumb adds `aria-current=\"page\"`, strips its `href`/`onClick`, drops it from the tab order, and the CSS reset removes Link's color/underline — it renders identically to `Default`'s plain-text current item. Don't rely on this; pass plain text for the last crumb instead."}}}},z=["Default","CustomSeparator","LastItemAsLink"];var m,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    items: ["Dashboard", "Settings", "Security"]
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var l,u,h;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: ["Root", "Branch", "Leaf"],
    separator: "→"
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,g,y;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Last Item As Link (Incorrect Usage)",
  args: {
    // Bypass the \`items\` convenience prop (which always renders the last crumb as a span) to
    // demonstrate what happens if a caller wraps every crumb, including the last, in a \`Link\`.
    items: undefined,
    children: [<Link href="#" key="dashboard">
        Dashboard
      </Link>, <Link href="#" key="settings">
        Settings
      </Link>, <Link href="#" key="security">
        Security
      </Link>]
  },
  parameters: {
    docs: {
      description: {
        story: "Incorrect usage, kept as a story to prove Breadcrumb still handles it: the last " + 'crumb is a \`Link\`, but Breadcrumb adds \`aria-current="page"\`, strips its \`href\`/' + "\`onClick\`, drops it from the tab order, and the CSS reset removes Link's color/" + "underline — it renders identically to \`Default\`'s plain-text current item. Don't " + "rely on this; pass plain text for the last crumb instead."
      }
    }
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};export{t as CustomSeparator,r as Default,s as LastItemAsLink,z as __namedExportsOrder,P as default};
