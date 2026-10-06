---
"@recursica/adapter-mui-v7": patch
---

Updated @recursica/adapter-common, adapter-tester and storybook-template. FileUpload is capped at the form-field max-width, FileInput keeps a fixed height with a file, and vertical Stepper no longer adds extra step spacing.

Panel rounds only the corners facing the page and its width follows the Forge max-width token capped to the viewport. RadioGroup/CheckboxGroup side-by-side layouts stack vertically, vertical SegmentedControl uses a concentric container radius, and the Menu WithSubmenus story no longer forces a width.
