# Stepper - Usage Guide

This document describes how to integrate and use the `Stepper` component in your projects using `@recursica/adapter-mui-v7`.

---

## 1. Import Reference

```tsx
import { Stepper } from "@recursica/adapter-mui-v7";
```

---

## 2. Basic Example

```tsx
import React from "react";
import { Stepper } from "@recursica/adapter-mui-v7";

export default function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="First step" description="Create account" />
      <Stepper.Step label="Second step" description="Verify email" />
    </Stepper>
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
> - **Default step icon**: `StepLabel` renders its own token-driven circle (with a check mark
>   once a step is completed) by default. Pass your own `StepIconComponent` prop to `StepLabel`
>   to override it for a given step, or pass a custom `icon` node (e.g. `<StepLabel icon={<MyIcon />}>`)
>   to render arbitrary content in place of the circle entirely.
