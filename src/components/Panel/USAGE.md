# Panel - Usage Guide

This document describes how to integrate and use the `Panel` component in your projects using `@recursica/adapter-mui-v7`.

---

## 1. Import Reference

```tsx
import { Panel } from "@recursica/adapter-mui-v7";
```

---

## 2. Basic Example

```tsx
import React, { useState } from "react";
import { Panel } from "@recursica/adapter-mui-v7";

export default function Demo() {
  const [opened, setOpened] = useState(false);
  return (
    <Panel opened={opened} onClose={() => setOpened(false)} title="Settings">
      <Text>This is a clean, structured visual container.</Text>
    </Panel>
  );
}
```

---

## 3. Design System Integration

All Recursica components in the `@recursica/adapter-mui-v7` package adhere strictly to design system spacing, scaling, and behavior patterns.

> [!IMPORTANT]
>
> - **Anti-override protection**: Rogues style injections (like inline `style` or arbitrary `className`) are automatically blocked by our prop layer unless `overStyled={true}` is explicitly provided.
> - **No Direct Layers**: Do not pass a `layer` prop to this component. To place it on a specific visual layer, wrap it in a `<Layer layer={0|1|2|3}>` component natively.
> - **Variables and Theming**: Styling is entirely determined by local CSS variables defined in `recursica_variables_scoped.css` and mapped in the component's CSS module.

---

## 4. Key Integration Features & Constraints

`Panel` accepts a `placement` prop (`"left"`, `"right"`, `"top"`, or `"bottom"`) that controls which edge of the screen the panel slides in from, and defaults to `"right"`. This prop was renamed from `position` to `placement`.

### Header: required title and Close button

`title` and `onClose` are required. The header always renders the title and an icon-only Recursica Close button with `aria-label="Close"`; pass `closeButtonAriaLabel` to translate it. `onClose` takes no arguments and fires from the Close button and Escape. `withCloseButton` has been removed: there is no way to hide the Close button.

The `header` prop replaces the whole default header. Avoid it: a custom header must supply its own title and Close button, and the adapter can no longer guarantee either.
