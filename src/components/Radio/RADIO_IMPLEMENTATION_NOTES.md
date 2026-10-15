# Radio Implementation Notes

### `Radio.Group` `controlMaxWidth` bug (fixed 2026-08-31)

`RadioGroup` was passing `--recursica_ui-kit_components_radio-button-item_properties_max-width`
(400px) as its own `controlMaxWidth`. That token caps a single radio+its own label — it's
already applied per-item via `.root` in `Radio.module.css`. Passed as the _group's_
`controlMaxWidth`, `FormControlLayout` applies it to the whole root row, so in side-by-side
layout the group's own label got squeezed into that same 400px alongside the radios. There is
no group-level max-width token in the schema — fixed by leaving `controlMaxWidth` `undefined`,
matching `SwitchGroup`'s existing pattern. Same bug existed in `CheckboxGroup`, fixed the same
way. Mirrors the identical fix in mantine-adapter (source of truth).

### Accessible name lands on the native `<input>` (2026-10-15)

`RequireAccessibleLabel` enforces a name at compile time (`label`, `aria-label` or `aria-labelledby`). MUI spreads unknown props onto the outer span, so `aria-label`/`aria-labelledby`/`aria-describedby` never reached the `<input>`, and a `label` with no `id` left `<label htmlFor>` unlinked. `useNativeInputA11y` (`src/utils`) moves the aria attributes to `slotProps.input` and generates an `id` for labelled controls. Same fix in Checkbox, Radio and Switch. Covered by `src/components/NativeInputA11y.dom.test.tsx`. Mantine already behaves this way natively and has the same test.
