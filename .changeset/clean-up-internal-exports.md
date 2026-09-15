---
"@recursica/adapter-mui-v7": patch
---

Stopped re-exporting adapter-common's internal helpers, foundational types, and raw `RecursicaXxxProps` slices from `src/components/index.ts` — consumers only ever need the composed component prop types, which are already public via each component's own export. `markCurrentPageItem` moved to Breadcrumb, the only place that uses it.
