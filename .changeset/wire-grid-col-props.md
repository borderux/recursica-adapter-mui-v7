---
"@recursica/adapter-mui-v7": minor
---

`Grid.Col`'s type now intersects with `RecursicaGridColProps` from `adapter-common`, laying the groundwork for a formal cross-adapter contract. No behavior or prop changes yet — `size`, `order`, `visibleFrom`, and `hiddenFrom` all stay on this adapter's own MUI-native typing for now; the shared contract only carries `children` until `adapter-common` picks those back up.
