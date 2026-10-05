import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import usePagination, {
  type UsePaginationItem,
  type UsePaginationProps,
} from "@mui/material/usePagination";
import {
  useRecursicaManifest,
  type RecursicaPaginationProps,
} from "@recursica/adapter-common";
import {
  filterStylingProps,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import { Button, type ButtonProps } from "../Button/Button";
import styles from "./Pagination.module.css";
import { PaginationIcon } from "./Pagination.icons";

type PaginationRole = "active-pages" | "inactive-pages" | "navigation-controls";
type NavControl = "first" | "previous" | "next" | "last";

interface RoleVariant {
  variant: NonNullable<ButtonProps["variant"]>;
  size: NonNullable<ButtonProps["size"]>;
}

interface ManifestPagination {
  "ui-kit"?: {
    components?: {
      pagination?: {
        properties?: Record<
          string,
          {
            $extensions?: {
              "recursica.component"?: {
                "selected-variants"?: Record<string, unknown>;
              };
            };
          }
        >;
      };
    };
  };
}

/** Reads which Button style and size the manifest selects for a Pagination role. */
function usePaginationRole(role: PaginationRole): RoleVariant {
  const manifest = useRecursicaManifest() as ManifestPagination;
  const selected =
    manifest["ui-kit"]?.components?.pagination?.properties?.[role]
      ?.$extensions?.["recursica.component"]?.["selected-variants"];
  if (!selected) {
    throw new Error(
      `Pagination: manifest has no ui-kit.components.pagination.properties.${role} selected-variants`,
    );
  }
  return {
    variant: selected.style as RoleVariant["variant"],
    size: selected.size as RoleVariant["size"],
  };
}

const NAV_ICON = {
  first: "first",
  previous: "prev",
  next: "next",
  last: "last",
} as const;

const NAV_ARIA_LABEL: Record<NavControl, string> = {
  first: "First page",
  previous: "Previous page",
  next: "Next page",
  last: "Last page",
};

const NAV_LABEL: Record<NavControl, string> = {
  first: "First",
  previous: "Prev",
  next: "Next",
  last: "Last",
};

// Next/Last put the icon after the label; First/Previous put it before.
const ICON_AFTER_LABEL: Record<NavControl, boolean> = {
  first: false,
  previous: false,
  next: true,
  last: true,
};

export type PaginationProps = RecursicaOverStyled<
  RecursicaPaginationProps &
    Pick<
      UsePaginationProps,
      | "page"
      | "defaultPage"
      | "onChange"
      | "siblingCount"
      | "boundaryCount"
      | "disabled"
    > & {
      /** Extra props for each page button */
      getItemProps?: (page: number) => Record<string, unknown>;
      /** Extra props for each first/previous/next/last button */
      getControlProps?: (control: NavControl) => Record<string, unknown>;
      /** Replaces the dots between page ranges */
      dotsIcon?: ReactNode;
    } & Omit<ComponentPropsWithoutRef<"nav">, "onChange" | "children">
>;

interface ItemProps {
  item: UsePaginationItem;
  disabled?: boolean;
  withLabels?: boolean;
  dotsIcon?: ReactNode;
  getItemProps?: PaginationProps["getItemProps"];
  getControlProps?: PaginationProps["getControlProps"];
}

function PaginationItem({
  item,
  disabled,
  withLabels,
  dotsIcon,
  getItemProps,
  getControlProps,
}: ItemProps) {
  const active = usePaginationRole("active-pages");
  const inactive = usePaginationRole("inactive-pages");
  const navigation = usePaginationRole("navigation-controls");

  if (item.type === "start-ellipsis" || item.type === "end-ellipsis") {
    return (
      <div className={styles.dots} data-size={inactive.size}>
        {dotsIcon ?? "…"}
      </div>
    );
  }

  if (item.type === "page") {
    const role = item.selected ? active : inactive;
    const extra = getItemProps?.(item.page as number);
    return (
      <Button
        variant={role.variant}
        size={role.size}
        disabled={item.disabled || disabled}
        aria-current={item.selected ? "page" : undefined}
        aria-label={`Page ${item.page}`}
        onClick={item.onClick}
        {...(extra as ButtonProps)}
      >
        {(extra?.children as ReactNode) ?? item.page}
      </Button>
    );
  }

  const control = item.type as NavControl;
  const iconElement = <PaginationIcon type={NAV_ICON[control]} />;
  const sections =
    withLabels && ICON_AFTER_LABEL[control]
      ? { endIcon: <span className={styles.rightIcon}>{iconElement}</span> }
      : { icon: iconElement };
  return (
    <Button
      variant={navigation.variant}
      size={navigation.size}
      aria-label={NAV_ARIA_LABEL[control]}
      disabled={item.disabled || disabled}
      onClick={item.onClick}
      {...({ ...sections, ...getControlProps?.(control) } as ButtonProps)}
    >
      {withLabels ? NAV_LABEL[control] : undefined}
    </Button>
  );
}

/**
 * Recursica Pagination. Its page and navigation buttons are Recursica `Button`s whose style and
 * size come from the manifest's `ui-kit.components.pagination` selected variants. Requires the
 * `manifest` prop on `RecursicaThemeProvider`.
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    {
      overStyled = false,
      total,
      withEdges,
      withControls = true,
      withLabels,
      page,
      defaultPage,
      onChange,
      siblingCount,
      boundaryCount,
      disabled,
      getItemProps,
      getControlProps,
      dotsIcon,
      ...rest
    },
    ref,
  ) {
    const { items } = usePagination({
      count: total,
      page,
      defaultPage,
      onChange,
      siblingCount,
      boundaryCount,
      showFirstButton: withEdges,
      showLastButton: withEdges,
      hidePrevButton: !withControls,
      hideNextButton: !withControls,
    });
    const sanitizedProps = filterStylingProps(rest, overStyled);
    const classNameProp = (sanitizedProps as { className?: string }).className;

    return (
      <nav
        ref={ref}
        aria-label="Pagination"
        {...sanitizedProps}
        className={
          classNameProp ? `${styles.root} ${classNameProp}` : styles.root
        }
      >
        {items.map((item, index) => (
          <PaginationItem
            key={index}
            item={item}
            disabled={disabled}
            withLabels={withLabels}
            dotsIcon={dotsIcon}
            getItemProps={getItemProps}
            getControlProps={getControlProps}
          />
        ))}
      </nav>
    );
  },
);
Pagination.displayName = "Pagination";
