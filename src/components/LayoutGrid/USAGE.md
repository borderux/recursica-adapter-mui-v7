# LayoutGrid - Usage Guide

This document describes how to integrate and use the `LayoutGrid` component in your projects using `@recursica/adapter-mui-v7`.

---

## 1. Import Reference

```tsx
import { LayoutGrid } from "@recursica/adapter-mui-v7";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { LayoutGrid } from "@recursica/adapter-mui-v7";

export default function Demo() {
  return (
    // No layout props needed: columns, column-gutter, row-gutter and margin come from the design
    // system's layout-grids tokens and change per breakpoint.
    <LayoutGrid>
      <LayoutGrid.Col size={3}>Half width at 6 columns</LayoutGrid.Col>
      <LayoutGrid.Col size={{ xs: 6, sm: 3, md: 2 }}>
        Responsive width
      </LayoutGrid.Col>
    </LayoutGrid>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mui-v7` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Variables and Theming**: LayoutGrid follows the design system's own `layout-grids` tokens (columns, column-gutter, row-gutter and margin), applied automatically. Forge can define these per breakpoint, and the grid follows. None of them are configurable via props.
> - **Primitive layout component**: see [OVERSTYLING.md](../../../OVERSTYLING.md); only the `sx` prop is stripped, everything else passes through without `overStyled`.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.

> [!NOTE] > **Recommended: build your MUI theme's breakpoints from the Forge manifest with `breakpointsFromRecManifest`.** Responsive keys such as `{ xs, sm, md }` on `LayoutGrid.Col` (and on Flex, Stack, Group) come from `theme.breakpoints`, while Forge's layout grids switch via plain CSS `@media`. If the two differ, tokens flip at Forge's width and props at the theme's. See [SETUP.md](../../../SETUP.md):
>
> ```tsx
> import { createTheme } from "@mui/material/styles";
> import { breakpointsFromRecManifest } from "@recursica/adapter-mui-v7";
> import manifest from "./recursica_manifest.json";
>
> const theme = createTheme({
>   breakpoints: {
>     values: {
>       ...createTheme().breakpoints.values,
>       ...breakpointsFromRecManifest(manifest),
>     },
>   },
> });
> ```

---

## 4. Key Integration Features & Constraints

`LayoutGrid.Col` uses MUI's own prop vocabulary (see [LAYOUT_GRID_IMPLEMENTATION_NOTES.md](./LAYOUT_GRID_IMPLEMENTATION_NOTES.md)), not name-for-name identical to the Mantine adapter's.

- `LayoutGrid` does not accept `columns`, `spacing`, `columnSpacing` or `rowSpacing`: column count, column-gutter, row-gutter and margin are design-system-managed (Forge-controlled, breakpoint-aware, applied via CSS variables). For a fixed N-column grid unrelated to page layout, use MUI's `Grid` directly.
- `size` (on `LayoutGrid.Col`) accepts a column count, `"auto"`, `"grow"`, or a responsive object (`{ xs, sm, md, ... }`). A numeric size is relative to Forge's current column count and a column never grows wider than the row.
- `offset` shifts a column by a number of columns.
- `order` accepts a fixed number to control a column's visual order (single value only, no responsive object).
- `visibleFrom`/`hiddenFrom` show or hide a column at MUI's default breakpoints (600/900/1200/1536px).
- `justifyContent`/`alignItems` on `LayoutGrid` set the container's flex alignment.

> [!WARNING]
>
> **Breaking change:** `Grid` is now `LayoutGrid` (`Grid.Col` is `LayoutGrid.Col`), and its `columns` prop was removed.
