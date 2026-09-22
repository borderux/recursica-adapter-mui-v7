---
"@recursica/adapter-mui-v7": minor
---

`Grid` now wires the design system's `layout-grids` tokens: defaults to 6 columns with column-gutter/row-gutter/margin values applied automatically (previously an unstyled pass-through of MUI's own 12-column default). **Breaking:** `spacing`/`columnSpacing`/`rowSpacing` are no longer accepted — column-gutter/row-gutter/margin are design-system-managed, not integrator-configurable. `columns` remains the one Recursica-contract override, matching `Container.size`.
