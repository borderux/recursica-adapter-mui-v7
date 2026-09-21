---
"@recursica/adapter-mui-v7": patch
---

Bumped `@recursica/adapter-tester` to 5.1.3, which fails loudly instead of silently passing every story when the Mantine source-of-truth golden baseline can't be resolved. Needed now that a companion adapter-tester fix corrects which GitHub tag it fetches golden images from for `@recursica/adapter-mantine-v8` releases — on 5.1.2 that mismatch was masked as a silent pass instead of a build failure.
