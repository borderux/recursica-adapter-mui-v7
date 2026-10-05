# Pagination Implementation Notes

## Architecture: Recursica Buttons driven by the manifest

Forge's `ui-kit.components.pagination` defines its page and navigation controls as `Button`
variants (`active-pages`, `inactive-pages`, `navigation-controls`, each with a `selected-variants`
style and size). Pagination therefore renders Recursica `Button`s with those props and does no
button styling of its own: radius, padding, colors, hover and disabled all come from `Button`.
(Before 2026-10-05 it restyled MUI's `PaginationItem` by hand with copies of the Button tokens.)

- `Pagination` reads the selected `style` and `size` per role from the manifest with
  `useRecursicaManifest()` (`adapter-common`), provided by `RecursicaThemeProvider`'s `manifest`
  prop. It throws if there is no manifest or if a role has no `selected-variants`. The values are
  passed to `Button` as is, with no validation and no fallbacks.
- `content` (`label`, `icon-label`, `icon-only`) is not read: `Button` derives it from its own
  children and icon, so page numbers are `label` and the navigation buttons are `icon-only`
  (`icon-label` with `withLabels`).

## Why `usePagination`, not MUI's `Pagination`

MUI's `Pagination`/`PaginationItem` render their own `ButtonBase`, which can't be swapped for our
`Button`. The component is built on MUI's `usePagination` hook instead (page state, ranges,
siblings/boundaries, first/previous/next/last items and their disabled state) and maps each item to
a `Button`. The MUI-vocabulary props `page`, `defaultPage`, `onChange(event, page)`, `siblingCount`,
`boundaryCount` and `disabled` are kept; other `PaginationProps` (`shape`, `variant`, `color`,
`size`, `renderItem`, ...) are no longer accepted.

There are no dot-notation parts (`Pagination.Root`, `Items`, ...); the Mantine adapter has them.
`getItemProps(page)` and `getControlProps(control)` are the override hooks for page and
navigation buttons, and `dotsIcon` replaces the ellipsis.

## Labels

`withLabels` adds a text label to each navigation button. `First`/`Previous` put the icon first
(`Button`'s `icon`); `Next`/`Last` put it after the label (`endIcon`, wrapped in `.rightIcon` and
sized to the Button's icon token via `[data-size]` in `Pagination.module.css`).

## Styling

`Pagination.module.css` only lays out the row (`item-gap`) and styles the dots (`dots-color`).

- The root is a `<nav aria-label="Pagination">` landmark, and each page button has `aria-label="Page N"`
  (`Previous page`, `Next page`, etc. for the navigation buttons). Both can be overridden by props.
- The ref is an `HTMLElement` (the `<nav>`).
