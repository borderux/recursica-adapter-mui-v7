# LayoutGrid Implementation Notes

`LayoutGrid` is the Recursica layout grid. MUI has no native Grid/Grid.Col split: its `Grid`
merges "container" and "item" behavior into one component (toggled by `container` and a `size`
prop). `LayoutGrid` always renders `<MuiGrid container>` and `LayoutGrid.Col` renders `<MuiGrid>`
in item mode, to keep the same dot-notation shape as the Mantine adapter. It was named `Grid`
before 2026-10-05.

Unlike the other primitive layout components (`Flex`, `Stack`, `Group`, `Container`), it has a
formal Recursica prop contract (`RecursicaLayoutGridProps` in `adapter-common`) and wires the
design system's `layout-grids` tokens. Its other props are MUI's own vocabulary, not a shared
contract:

- **`size`** (not Mantine's `span`): a column count, `"auto"`, `"grow"`, or a responsive object keyed by
  MUI's breakpoints (`xs`/`sm`/`md`/`lg`/`xl`, no `"base"`). It renames to `span` when
  `RecursicaLayoutGridColProps` picks `span` up (queued in `adapter-common`).
- **`offset`**: MUI's own prop, used as is.
- **`grow` (container)**: not implemented; use `size="grow"` per column.
- **`order`, `justifyContent`, `alignItems`**: typed by MUI but never read by its Grid generator
  (`@mui/system` `gridGenerator`), so they're applied via inline `style`.
- **`visibleFrom` / `hiddenFrom`**: no MUI mechanism, so `LayoutGrid.module.css` has media-query
  classes hardcoded to MUI's default breakpoints (0/600/900/1200/1536). They do not follow a
  customized `theme.breakpoints`.

## Forge contract

Forge always emits a default grid with columns (default 6, editable), column-gutter, row-gutter and
side margin, in the CSS and in `recursica_manifest.json`. Additional breakpoints are overrides, so
nothing here has a fallback value.

## No integrator-facing layout props

Columns, column-gutter, row-gutter and margin are design-system-managed, not per-instance settings.
`columns`, `spacing`, `columnSpacing` and `rowSpacing` were removed from the public type and are
deleted at runtime so they can't shadow the token-driven values. For an arbitrary N-column grid,
use MUI's `Grid` directly.

## How each token is applied

Forge emits a responsive alias per grid var (`--recursica_brand_layout-grids_{columns,row-gutter,column-gutter,margin}`),
set from `_default_*` at `:root` and redefined inside Forge's `@media` blocks per non-default grid.
`LayoutGrid` reads only the alias, so tokens follow breakpoints with no JS. Overlapping ranges are
not guarded by Forge; the later `@media` block wins.

- **Columns**: MUI's Grid computes widths in CSS from `--Grid-parent-columns`, so unlike Mantine no
  per-column style rule is needed. `LayoutGrid` passes the alias as `columns`
  (`var(--recursica_brand_layout-grids_columns)`); MUI types it as a number but writes it
  verbatim into the custom property, which the width `calc()` then reads. Verified in
  `@mui/system`'s `gridGenerator`.
- **Column gutter / row gutter**: passed to MUI's own `columnSpacing`/`rowSpacing` as the
  responsive aliases. MUI applies each independently (strings are not multiplied by `theme.spacing`).
- **Margin**: no MUI Grid prop equivalent; `.root` in `LayoutGrid.module.css` reads it directly.
- **Clamping**: MUI's width calc does not clamp, so `size={6}` at 3 columns would overflow.
  `.col { max-width: 100% }` makes it fill the row instead, matching Mantine's `min(span, columns)`.

## Breakpoints

Responsive `size`/`offset` switch at the MUI theme's breakpoints, which Forge never edits.
Integrators should merge `breakpointsFromRecManifest(manifest)` into `theme.breakpoints.values`
so both switch at the same widths (MUI's `values` replaces its defaults, so spread them first;
see SETUP.md). `RecursicaThemeProvider` is UI-kit agnostic and does not compare the manifest
against the theme. The helper returns numbers (MUI's unit), not the `"Npx"` strings the Mantine
one returns.

## `LayoutGrid.Col` contract is scaffolded

`RecursicaLayoutGridColProps` currently only contributes `children`; `span`, `order`,
`visibleFrom` and `hiddenFrom` are drafted and commented out in `adapter-common`. No runtime
effect here.

## Brand-layer exemption

`layout-grids` tokens have no `ui-kit` layer in Forge's model, so `LayoutGrid.module.css` reads
`brand_layout-grids_margin` directly with a `recursica-allow-brand:` header. The other three are
read in `LayoutGrid.tsx` (a TSX prop value), which the analyzer does not scan.

## Stories

A single `Default` story reads `brand.layout-grids.default.columns` from the manifest (via
`useRecursicaManifest()`) and fills two rows of that many single-column cells. Same story id as the
Mantine adapter's, so it diffs against its golden. Only `size` is used, so the story stays valid
for every adapter.
