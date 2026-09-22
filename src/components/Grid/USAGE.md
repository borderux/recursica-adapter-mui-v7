# Grid - Usage Guide

This document describes how to integrate and use the `Grid` component in your projects using `@recursica/adapter-mui-v7`.

---

## 1. Import Reference

```tsx
import { Grid } from "@recursica/adapter-mui-v7";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { Grid } from "@recursica/adapter-mui-v7";

export default function Demo() {
  return (
    <Grid>
      <Grid.Col size={3}>Half width (of the 6-column default)</Grid.Col>
      <Grid.Col size={{ xs: 12, sm: 6, md: 3 }}>Responsive width</Grid.Col>
    </Grid>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mui-v7` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Anti-override protection**: `Grid` is a primitive layout component (see [OVERSTYLING.md](../../../OVERSTYLING.md)) — only the `sx` prop is stripped, everything else passes through freely without needing `overStyled`.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Design-system-managed spacing**: column-gutter, row-gutter, and outer margin are applied automatically from the design system's `layout-grids` tokens and are **not** integrator-configurable — `spacing`/`columnSpacing`/`rowSpacing` are not accepted props on `Grid`.

---

## 4. Key Integration Features & Constraints

This Grid uses MUI's own prop vocabulary directly (see [IMPLEMENTATION_NOTES.md](./IMPLEMENTATION_NOTES.md)) — it is not name-for-name identical to the mantine-adapter's Grid.

- `columns` overrides the number of columns in the grid (defaults to the design system's default column count, 6). This is the only layout-grid value that's integrator-configurable — column-gutter, row-gutter, and margin are always applied from the design tokens.
- `size` (on `Grid.Col`) accepts a column count, `"auto"`, `"grow"`, or a responsive object (`{ xs, sm, md, ... }`).
- `offset` shifts a column by a number of columns.
- `order` accepts a fixed number to control a column's visual order (single value only, no responsive object).
- `visibleFrom`/`hiddenFrom` show or hide a column at the standard breakpoints (600/900/1200/1536px).

> [!WARNING]
>
> **Breaking change:** `spacing`/`columnSpacing`/`rowSpacing` are no longer accepted on `Grid`. Column-gutter and row-gutter are now applied unconditionally from `--recursica_brand_layout-grids_default_column-gutter`/`_row-gutter`. If you were previously passing one of these props, remove it — it is silently dropped at runtime and has no effect.
