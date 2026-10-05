---
"@recursica/adapter-mui-v7": major
---

`Pagination` now renders Recursica Buttons whose style and size come from the Forge manifest, so `RecursicaThemeProvider` needs the `manifest` prop or Pagination throws; MUI's `Pagination` props are no longer passed through.
