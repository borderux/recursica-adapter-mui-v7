/**
 * LayoutGrid: the Recursica layout grid.
 *
 * MUI merges "container" and "item" into a single `Grid` component (no separate Grid.Col,
 * unlike Mantine). To keep the LayoutGrid/LayoutGrid.Col dot-notation shape across adapters,
 * LayoutGrid always renders MUI's `<Grid container>` and LayoutGrid.Col a plain MUI `<Grid>`.
 *
 * Recursica's `layout-grids` tokens (columns, column-gutter, row-gutter, margin) are
 * design-system-managed and breakpoint-aware (Forge redefines them inside `@media` blocks), so
 * LayoutGrid applies them itself through the responsive CSS variables, which MUI's own
 * `columns`/`columnSpacing`/`rowSpacing` accept as strings. None of them are props. For a fixed
 * N-column grid use MUI's Grid directly. See `LAYOUT_GRID_IMPLEMENTATION_NOTES.md`.
 *
 * MUI has no per-item "grow to fill remaining space" container flag like Mantine's `grow`;
 * use MUI's own `size="grow"` on individual columns instead. `visibleFrom`/`hiddenFrom`
 * don't exist in MUI at all, so they're added here via CSS classes keyed on MUI's default
 * breakpoint scale (`xs`/`sm`/`md`/`lg`/`xl`).
 *
 * `justifyContent`/`alignItems` (container) and `order` (item) are typed on `MuiGridProps`
 * but MUI's Grid style generator never reads them, so they're applied via inline `style`.
 *
 * Like Flex, Stack, Group, and Container, this is a primitive layout component and
 * does not use the `RecursicaOverStyled` gatekeeper; only the `sx` prop is stripped.
 */
import { forwardRef, type CSSProperties } from "react";
import { Grid as MuiGrid, type GridProps as MuiGridProps } from "@mui/material";
import {
  type OmitSx,
  filterSxProp,
  type WithRecursicaSpacing,
} from "../../utils/filterStylingProps";
import {
  type RecursicaLayoutGridColProps,
  type RecursicaLayoutGridProps,
} from "@recursica/adapter-common";
import styles from "./LayoutGrid.module.css";

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
// LAYOUT GRID
// ============================================================

export type LayoutGridProps = WithRecursicaSpacing<
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
  RecursicaLayoutGridProps & {
    /** Sets `justify-content` on the container. Applied via inline style. */
    justifyContent?: CSSProperties["justifyContent"];
    /** Sets `align-items` on the container. Applied via inline style. */
    alignItems?: CSSProperties["alignItems"];
  };

// MUI types these as numbers, but its generator writes strings straight into CSS custom
// properties (verified in @mui/system gridGenerator), so the responsive var aliases work.
const COLUMNS =
  "var(--recursica_brand_layout-grids_columns)" as unknown as number;
const COLUMN_GUTTER = "var(--recursica_brand_layout-grids_column-gutter)";
const ROW_GUTTER = "var(--recursica_brand_layout-grids_row-gutter)";

const LayoutGridBase = forwardRef<HTMLDivElement, LayoutGridProps>(
  function LayoutGrid(
    { children, justifyContent, alignItems, style, className, ...rest },
    ref,
  ) {
    // Spacing/columns props are not supported; dropped so a caller still passing one at runtime
    // can't shadow the token-driven values below.
    const restWithoutLayout = { ...rest } as Record<string, unknown>;
    delete restWithoutLayout.spacing;
    delete restWithoutLayout.columnSpacing;
    delete restWithoutLayout.rowSpacing;
    delete restWithoutLayout.columns;

    const safeProps = filterSxProp(restWithoutLayout);

    return (
      <MuiGrid
        ref={ref}
        {...(safeProps as unknown as MuiGridProps)}
        container
        columns={COLUMNS}
        columnSpacing={COLUMN_GUTTER}
        rowSpacing={ROW_GUTTER}
        className={className ? `${styles.root} ${className}` : styles.root}
        style={{ justifyContent, alignItems, ...(style as CSSProperties) }}
      >
        {children}
      </MuiGrid>
    );
  },
);
LayoutGridBase.displayName = "LayoutGrid";

// ============================================================
// LAYOUT GRID.COL
// ============================================================

// TODO(grid-col-contract): `RecursicaLayoutGridColProps` currently only contributes `children`;
// `span`, `order`, `visibleFrom` and `hiddenFrom` are drafted but commented out in adapter-common.
// This component's own fields stay MUI-native until that lands, when `size` renames to `span`.
// See LAYOUT_GRID_IMPLEMENTATION_NOTES.md.
export type LayoutGridColProps = WithRecursicaSpacing<
  OmitSx<Omit<MuiGridProps, "container" | "order">>
> &
  RecursicaLayoutGridColProps & {
    /** Sets the CSS `order` property. Applied via inline style. */
    order?: number;
    /** Hides the column below the given breakpoint. MUI has no native equivalent. */
    visibleFrom?: Breakpoint;
    /** Hides the column above the given breakpoint. MUI has no native equivalent. */
    hiddenFrom?: Breakpoint;
  };

export const LayoutGridCol = forwardRef<HTMLDivElement, LayoutGridColProps>(
  function LayoutGridCol(
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
LayoutGridCol.displayName = "LayoutGridCol";

// ============================================================
// DOT NOTATION EXPORT
// ============================================================

type LayoutGridComponent = typeof LayoutGridBase & {
  Col: typeof LayoutGridCol;
};

export const LayoutGrid = LayoutGridBase as LayoutGridComponent;
LayoutGrid.Col = LayoutGridCol;
