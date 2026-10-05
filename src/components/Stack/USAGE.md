# Stack - Usage Guide

This document describes how to integrate and use the `Stack` component in your projects using `@recursica/adapter-mui-v7`.

---

## 1. Import Reference

```tsx
import { Stack } from "@recursica/adapter-mui-v7";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { Stack } from "@recursica/adapter-mui-v7";

export default function Demo() {
  return (
    <Stack spacing="md" alignItems="stretch">
      <Text>Item 1</Text>
      <Text>Item 2</Text>
    </Stack>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mui-v7` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Variables and Theming**: Styling is entirely determined by local CSS variables defined in `recursica_variables_scoped.css` and mapped in the component's CSS module.

> [!NOTE] > **Responsive props use your MUI theme's breakpoints, not Forge's.** Keys such as `{ xs, sm, md }` come from `theme.breakpoints`; Forge's layout grids switch via plain CSS `@media` and never edit the MUI theme. Build your theme with `breakpointsFromRecManifest` so the two agree (see [LayoutGrid](../LayoutGrid/USAGE.md)).
