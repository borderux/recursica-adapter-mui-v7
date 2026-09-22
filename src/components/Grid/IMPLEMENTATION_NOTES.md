# Grid Implementation Notes

MUI has no native Grid/Grid.Col split — MUI's own `Grid` component merges "container" and "item" behavior into one component (toggled by the `container` boolean and a `size` prop). To keep the same `Grid` + `Grid.Col` dot-notation shape as the mantine-adapter, this file hand-composes two thin wrappers around that single underlying component: `Grid` always renders `<MuiGrid container>`, `Grid.Col` always renders `<MuiGrid>` in item mode. This is a structural convenience only — the props on each wrapper are MUI's own, not a Recursica-defined contract, except where noted below.

Per the layout-components rule (no formal Recursica common props definition — layout components simply pass through the underlying kit's own props), this Grid does **not** attempt prop-name parity with the mantine-adapter's Grid. Its public API is MUI's own vocabulary:

- **`size`** (not Mantine's `span`) — MUI's own item-sizing prop on `Grid.Col`: a column count, `"auto"` (size to content), `"grow"` (fill remaining space), or a responsive object keyed by MUI's own breakpoints. No inversion/translation against Mantine's `span` semantics.
- **`offset`** — MUI's own prop, used as-is.
- **Breakpoint objects** use MUI's own scale (`xs`/`sm`/`md`/`lg`/`xl`) directly. There is no `"base"` alias — `xs` is MUI's smallest breakpoint, same role Mantine's own smallest breakpoint plays.
- **`grow` (container-level)**: not implemented. Mantine's container `grow` flag ("last row's columns expand to fill available space") has no MUI equivalent, but MUI's own `size="grow"` on individual `Grid.Col`s already covers the same real-world need — set it per-column instead of on the container.
- **`order`**: MUI types `order` generically (via `SystemProps`) but its Grid style generator (`gridGenerator.js`/`createGrid.js`, read directly to confirm) never wires it up — passing it straight through silently no-ops. Applied here via inline `style.order` instead, single value only (no per-breakpoint object).
- **`justifyContent` / `alignItems`** (container only): same issue as `order` — typed but not read by MUI's Grid generator (confirmed by reading `gridGenerator.js`: only `size`, `offset`, `columns`, spacing, `direction`, and `wrap` have generator functions). Applied via inline `style` instead, using MUI's own prop names (not Mantine's `justify`/`align`).
- **`visibleFrom` / `hiddenFrom`**: no native MUI Grid mechanism at all, so — per the rule that a missing kit feature is built following Mantine's own shape — implemented via `Grid.module.css` media-query classes, hardcoded to MUI's own default `theme.breakpoints` pixel values (`xs:0, sm:600, md:900, lg:1200, xl:1536`). If the consuming app customizes its MUI theme breakpoints, these thresholds won't follow — structural layout mechanics, not a design token.

**Cross-adapter parity caveat**: `visibleFrom`/`hiddenFrom` are pinned to MUI's default breakpoints here, while the mantine-adapter's equivalent behavior is driven by Mantine's own default breakpoints (576/768/992/1200/1408). The two adapters' Grid stories may show different columns at the exact same viewport width in the `adapter-tester` visual-regression suite as a result — a real, structural difference between the two underlying libraries' breakpoint scales, not a bug in either adapter. The two adapters' Grid APIs are also no longer prop-name-identical (`size` here vs. `span` in mantine-adapter) — this is intentional per the layout-components rule; each adapter's Grid speaks its own kit's vocabulary.

**Story parity exclude**: for the same `size`/`span` reason above, this story is named `ResponsiveSizes` here vs. mantine-adapter's `ResponsiveSpans` — different story ids. `ui-kit-grid--responsive-spans` is marked `exclude: true` in `adapter-tester.config.json`'s `story parity with source of truth` check rather than renamed to match, per developer direction (2026-08-30).

**Update (2026-08-30):** mantine-adapter now also has its own `ResponsiveSizes` story (using its
own `span` prop, same breakpoints/content as this one) purely so this adapter's `responsive-sizes`
story id has a source-of-truth golden to diff against — see mantine-adapter's own
`GRID_IMPLEMENTATION_NOTES.md`. The `responsive-spans`/`responsive-sizes` naming split itself is
unchanged/still intentional; this just closes the one-directional story-parity gap.

## Update (2026-09-22): `columns` is now a formal Recursica contract, gutters/margin are token-driven

Forge's 2026-09-21 export added `layout-grids` tokens (`default_columns`, `default_column-gutter`,
`default_row-gutter`, `default_margin` — see
`/Users/mattmassey/work/recursica-adapter-mantine-v8/docs/migration/2026-09-21-forge-token-export.md`
in the mantine-v8 repo, the authoritative record for this change) with no equivalent anywhere else
in the export to consume them. mantine-v8 wired these first and added `RecursicaGridProps` /
`RecursicaGridColProps` to `adapter-common`; this adapter now consumes the same contract, adapted
to MUI's own Grid API.

### Only `columns` is an integrator-facing prop

Column-gutter, row-gutter, and margin are design-system-managed values (Forge-controlled, applied
via CSS variables), not per-instance settings — the integrator does not configure them. Only
`columns` is exposed as an override (via `RecursicaGridProps` in `adapter-common`), the same
pattern `Container.size` uses for its own token-backed default.

**This is a breaking change**: MUI's own `spacing`/`columnSpacing`/`rowSpacing` props are no longer
accepted on `Grid` — not renamed to anything, simply removed from the public type and defensively
stripped at runtime (see the `_legacySpacing`/`_legacyColumnSpacing`/`_legacyRowSpacing` destructure
in `Grid.tsx`) so a caller still passing one of the old names can't shadow the token-driven value.

### How each token actually gets applied

- **`columns`** has no design-system default baked into MUI's own Grid (it defaults to 12). The
  design system default (6) is baked into `Grid.tsx` as a JS default (`columns ?? 6`), not wired
  live through CSS — mirrors mantine-v8's identical approach, since neither kit's Grid reads a
  column-count CSS variable natively. If the token's value changes, this line needs a manual
  update. Callers may still override it (see `CustomColumnCount` story).
- **`columnGutter`/`rowGutter`** (the design tokens, not props) are passed straight to MUI's own
  `columnSpacing`/`rowSpacing` props as `var(--recursica_brand_layout-grids_default_column-gutter)`
  / `var(--recursica_brand_layout-grids_default_row-gutter)` — always, not caller-configurable.
  Unlike Mantine (which only exposes one uniform `gutter` axis, requiring `Grid.module.css` to hand
  -apply row spacing separately via negative-margin/padding tricks on `.inner`/`.col`), MUI's Grid
  natively parameterizes column and row spacing independently via `columnSpacing`/`rowSpacing`, and
  applies both through a single `gap: var(--Grid-rowSpacing) var(--Grid-columnSpacing)` declaration
  on the flex container (confirmed by reading `@mui/system`'s `gridGenerator.js`) — so both tokens
  are wired as plain props here, no CSS override needed for either axis. Verified `gridGenerator.js`
  passes a string prop value straight through unmodified (no `theme.spacing()` multiplication),
  the same behavior this adapter's `SPACING_MAP` already relies on elsewhere for `rec-*` tokens.
- **`margin`** (the design token) has no MUI Grid prop equivalent at all. `Grid.module.css` reads it
  directly, always, on `.root.root` (doubled-class-selector trick, same idiom used elsewhere in
  this codebase e.g. Chip, to reliably beat MUI's own compiled single-class specificity regardless
  of stylesheet load order) — `margin: var(--recursica_brand_layout-grids_default_margin);`.

### `Grid.Col`'s formal contract is scaffolded, not filled in yet

`RecursicaGridColProps` exists in `adapter-common`, and `Grid.tsx` here intersects `GridColProps`
with it — but as of 2026-09-22 it only contributes `children`. `span`, `order`, `visibleFrom`, and
`hiddenFrom` were all drafted as real contract fields during the mantine-v8 work and then commented
out (Matt: get Grid merged first, come back to this later). This adapter's own `order`,
`visibleFrom`, and `hiddenFrom` fields on `GridColProps` are unchanged — still hand-built, MUI-
native, not contract-backed — and `size` is **not** renamed to `span` here; that rename is queued
up for whenever `RecursicaGridColProps` picks `span` back up (Matt already decided `span`, Mantine's
naming, is the eventual Recursica name — see the migration doc). No runtime change from this
update — this is purely about where the `children` type comes from, not behavior.

### Brand-layer exemption

`layout-grids` tokens have no `ui-kit`-layer representation in Forge's model — a grid is a
page-layout primitive, not a "component," so there was never going to be a
`ui-kit_components_grid_*` indirection layer for it to go through. `Grid.module.css` reads
`brand_layout-grids_default_margin` directly, with a `recursica-allow-brand:` exemption header
documenting why (see the analyzer's own exemption-system docs,
`packages/recursica-token-analyzer/README.md` in the monorepo). `columnGutter`/`rowGutter` don't
need an exemption header at all since they're read in `Grid.tsx` (a TSX prop value, not a CSS
declaration) — the analyzer only scans `.module.css` files for `var(--recursica_...)` references.

### Stories

`ResponsiveSizes` explicitly overrides `columns={12}` — it tests MUI's own breakpoint/size system
at standard 12-column proportions and isn't meant to exercise the design system's 6-column default.
`Default`, `Offset`, `Grow`, and `CustomColumnCount` all exercise the real 6-column default (or an
explicit override of it) and were resized from the old 12-column assumptions accordingly, mirroring
the equivalent resizing done in mantine-v8's `Grid.stories.tsx`.
