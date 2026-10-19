# Modal - Usage Guide

This document describes how to integrate and use the `Modal` component in your projects using `@recursica/adapter-mui-v7`.

---

## 1. Import Reference

```tsx
import { Modal } from "@recursica/adapter-mui-v7";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { Modal } from "@recursica/adapter-mui-v7";

export default function Demo() {
  return (
    <Modal opened={isOpen} onClose={close} title="Modal Title">
      <Text>This is a styled Modal wrapping the native primitive.</Text>
    </Modal>
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

### Header: required title and Close button

`title` and `onClose` are required. The header always renders the title and an icon-only Recursica Close button with `aria-label="Close"`; pass `closeButtonAriaLabel` to translate it. `onClose` takes no arguments and fires from the Close button, Escape and backdrop click. `withCloseButton` has been removed: there is no way to hide the Close button.

The `header` prop replaces the whole default header. Avoid it: a custom header must supply its own title and Close button, and the adapter can no longer guarantee either.
