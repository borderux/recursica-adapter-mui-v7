# Text – Implementation Notes

## `StaticVariations` story gap didn't match mantine (2026-08-30, source-of-truth audit)

**Found:** `ui-kit-text--static-variations` used `gap: "24px"` in its own inline story wrapper,
while mantine's equivalent story used `gap: "16px"` — same component, same six variants, but
visibly more vertical space between each item in mui's render. Not a component bug: `Text.tsx`
itself has no opinion on inter-item spacing; the gap is entirely owned by each story's own
`<div style={{ display: "flex", flexDirection: "column", gap }}>` wrapper. Fixed by changing the
story's `gap` to `"16px"` to match mantine's.

## Removed `body-small`, `subtitle`, `subtitle-small` variants; dev-only missing-style check

Forge only exports `h1`-`h6`, `body`, `caption` and `overline`; the three removed variants produced
a class matching no CSS rule. Any style under `brand.typography` still works by name (`TextVariant`
accepts any string since `@recursica/adapter-common` 1.2.0). In development, `Text` checks
`document.styleSheets` (`src/utils/typographyClass.ts`) for `.recursica_brand_typography_<variant>`;
if absent it logs one `console.error` per name and sets `data-typography-missing`, which
`Typography.module.css` hides with `visibility: hidden`. The attribute is never set when
`NODE_ENV === "production"`.

## Text must never render `h1`-`h6` (Matt Massey, 2026-10-08)

**Decision:** `Text` must never render an `<h1>`-`<h6>` element. It is not allowed. Semantic
headings use `Heading`.

**Implementation:** `Text` covers every other kind of text in the system (body, labels, captions,
etc.). Its variants can extend what the Recursica JSON and CSS define, so a variant need not
exist in the Recursica tokens. Heading levels are the one thing `Text` can't be: they have a
fixed definition and styling from Recursica and Forge, owned by `Heading`. `Text.tsx` throws
`Text cannot render <hN>. Use <Heading> for semantic h1-h6.` when `component` (or
`variantMapping.inherit`, which MUI uses to pick the element) is `h1`-`h6`.
