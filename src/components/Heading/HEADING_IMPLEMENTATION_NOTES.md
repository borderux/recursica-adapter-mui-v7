# Heading – Implementation Notes

## Heading owns semantic `h1`-`h6` (Matt Massey, 2026-10-08)

**Decision:** `Heading` is the only component that renders semantic `<h1>`-`<h6>` elements. Each
`order` maps to a heading level that Recursica and Forge define and style
(`recursica_brand_typography_h{order}`).

**Implementation:** Heading's styles are fixed by the Recursica JSON/CSS. Do not add variants to
Heading. Any other kind of text belongs in `Text`, which throws if asked to render `h1`-`h6`.
