/**
 * Grid layout wrapper.
 *
 * MUI merges "container" and "item" into a single `Grid` component (no separate Grid.Col,
 * unlike Mantine). To preserve the Grid/Grid.Col dot-notation shape across adapters, this
 * file splits MUI's single component back into two thin wrappers: Grid always renders MUI's
 * `<Grid container>`, GridCol always renders a plain MUI `<Grid>` (item mode).
 *
 * Recursica's `layout-grids` tokens (column count, column-gutter, row-gutter, margin) are
 * design-system-managed values, not integrator-facing settings — Grid applies them itself via
 * CSS variables. MUI's own `spacing`/`columnSpacing`/`rowSpacing` props are no longer accepted;
 * only `columns` (from `RecursicaGridProps` in `adapter-common`) is exposed as an override,
 * matching how `Container.size` overrides its own token-backed default. See
 * `IMPLEMENTATION_NOTES.md`.
 *
 * MUI has no per-item "grow to fill remaining space" container flag like Mantine's `grow`;
 * use MUI's own `size="grow"` on individual columns instead. `visibleFrom`/`hiddenFrom`
 * don't exist in MUI at all, so — per the rule that a missing kit feature is built following
 * Mantine's own shape — they're added here via CSS classes, keyed on MUI's own breakpoint
 * scale (`xs`/`sm`/`md`/`lg`/`xl`).
 *
 * `justifyContent`/`alignItems` (container) and `order` (item) are typed on `MuiGridProps`
 * (inherited generically from `SystemProps`) but MUI's Grid style generator — verified by
 * reading `@mui/system`'s `gridGenerator.js`/`createGrid.js` — only wires up `size`, `offset`,
 * `columns`, `spacing`/`rowSpacing`/`columnSpacing`, `direction`, and `wrap`; passing these
 * three straight through would silently no-op. They're pulled out and applied via inline
 * `style` instead, still using MUI's own native names.
 *
 * Like Flex, Stack, Group, and Container, this is a primitive layout component and
 * does not use the `RecursicaOverStyled` gatekeeper — only the `sx` prop is stripped.
 */
import { forwardRef, type CSSProperties } from "react";
import { Grid as MuiGrid, type GridProps as MuiGridProps } from "@mui/material";
import {
  type OmitSx,
  filterSxProp,
  type WithRecursicaSpacing,
} from "../../utils/filterStylingProps";
import {
  type RecursicaGridColProps,
  type RecursicaGridProps,
} from "@recursica/adapter-common";
import styles from "./Grid.module.css";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

const HIDDEN_FROM_CLASS: Record<Breakpoint, string> = {
  xs: styles.hiddenFromXs,
  sm: styles.hiddenFromSm,
  md: styles.hiddenFromMd,
  lg: styles.hiddenFromLg,
  xl: styles.hiddenFromXl,
};

// "xs" intentionally absent: visible from the smallest breakpoint means never hidden.
const VISIBLE_FROM_CLASS: Partial<Record<Breakpoint, string>> = {
  sm: styles.visibleFromSm,
  md: styles.visibleFromMd,
  lg: styles.visibleFromLg,
  xl: styles.visibleFromXl,
};

// ============================================================
// GRID
// ============================================================

export type GridProps = WithRecursicaSpacing<
  OmitSx<
    Omit<
      MuiGridProps,
      | "container"
      | "justifyContent"
      | "alignItems"
      | "spacing"
      | "columnSpacing"
      | "rowSpacing"
      | "columns"
    >
  >
> &
  RecursicaGridProps & {
    /** Sets `justify-content` on the container. Applied via inline style — see notes above. */
    justifyContent?: CSSProperties["justifyContent"];
    /** Sets `align-items` on the container. Applied via inline style — see notes above. */
    alignItems?: CSSProperties["alignItems"];
  };

const GridBase = forwardRef<HTMLDivElement, GridProps>(function Grid(
  { children, columns, justifyContent, alignItems, style, ...rest },
  ref,
) {
  // `spacing`/`columnSpacing`/`rowSpacing` are no longer supported props — column-gutter and
  // row-gutter are design-system-managed (see below), dropped defensively here so a caller still
  // passing one of the old prop names at runtime can't shadow the token-driven values passed to
  // MUI below.
  const restWithoutSpacing = { ...rest } as Record<string, unknown>;
  delete restWithoutSpacing.spacing;
  delete restWithoutSpacing.columnSpacing;
  delete restWithoutSpacing.rowSpacing;

  const safeProps = filterSxProp(restWithoutSpacing);

  // `columns` has no design-system default baked into MUI's own Grid (it defaults to 12) — the
  // design system default is applied here as a JS default rather than wired live through CSS.
  // Sourced from --recursica_brand_layout-grids_default_columns. Callers may still override it
  // (see `CustomColumnCount` story).
  const resolvedColumns = columns ?? 6;

  return (
    <MuiGrid
      ref={ref}
      {...(safeProps as unknown as MuiGridProps)}
      container
      columns={resolvedColumns}
      columnSpacing="var(--recursica_brand_layout-grids_default_column-gutter)"
      rowSpacing="var(--recursica_brand_layout-grids_default_row-gutter)"
      className={styles.root}
      style={{ justifyContent, alignItems, ...(style as CSSProperties) }}
    >
      {children}
    </MuiGrid>
  );
});
GridBase.displayName = "Grid";

// ============================================================
// GRID.COL
// ============================================================

// TODO(grid-col-contract): `RecursicaGridColProps` currently only contributes `children` here —
// `span`, `order`, `visibleFrom`, and `hiddenFrom` are all drafted in that type (adapter-common)
// but commented out for now (2026-09-22, Matt — paused, see the migration doc). This component's
// own `order`/`visibleFrom`/`hiddenFrom` fields below stay exactly as they were (MUI-native
// vocabulary, hand-built, no shared contract behind them yet) — no rename, no new fields. Once
// `RecursicaGridColProps` picks `span`/`order`/`visibleFrom`/`hiddenFrom` back up, this repo's own
// `size` prop will need a breaking rename to `span` to match. See IMPLEMENTATION_NOTES.md.
export type GridColProps = WithRecursicaSpacing<
  OmitSx<Omit<MuiGridProps, "container" | "order">>
> &
  RecursicaGridColProps & {
    /** Sets the CSS `order` property. Applied via inline style — see notes above. */
    order?: number;
    /** Hides the column below the given breakpoint. MUI has no native equivalent. */
    visibleFrom?: Breakpoint;
    /** Hides the column above the given breakpoint. MUI has no native equivalent. */
    hiddenFrom?: Breakpoint;
  };

export const GridCol = forwardRef<HTMLDivElement, GridColProps>(
  function GridCol(
    { children, order, visibleFrom, hiddenFrom, style, className, ...rest },
    ref,
  ) {
    const safeProps = filterSxProp(rest as Record<string, unknown>);

    const visibilityClass = visibleFrom
      ? VISIBLE_FROM_CLASS[visibleFrom]
      : hiddenFrom
        ? HIDDEN_FROM_CLASS[hiddenFrom]
        : undefined;

    const finalClassName = [styles.col, visibilityClass, className]
      .filter(Boolean)
      .join(" ");

    return (
      <MuiGrid
        ref={ref}
        className={finalClassName}
        {...(safeProps as unknown as MuiGridProps)}
        style={{ order, ...(style as CSSProperties) }}
      >
        {children}
      </MuiGrid>
    );
  },
);
GridCol.displayName = "GridCol";

// ============================================================
// DOT NOTATION EXPORT
// ============================================================

type GridComponent = typeof GridBase & {
  Col: typeof GridCol;
};

export const Grid = GridBase as GridComponent;
Grid.Col = GridCol;
