---
"@recursica/adapter-mui-v7": patch
---

Label-less Checkbox and Radio no longer collapse to a few pixels wide (MUI's 9px padding is now removed in CSS, not via `sx`). Modal header and footer now use their own background tokens over the content background instead of showing white.

Checkbox, Radio and Switch now put `aria-label`, `aria-labelledby` and `aria-describedby` on the native input and link a visible label to it without a caller-supplied `id`, so screen readers announce their names.
