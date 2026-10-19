import { forwardRef, useEffect, useRef } from "react";
import {
  Drawer as MuiDrawer,
  type DrawerProps as MuiDrawerProps,
  IconButton as MuiIconButton,
} from "@mui/material";
import {
  filterStylingProps,
  mergeClassNames,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import styles from "./Panel.module.css";

// ============================================================
// PANEL (Drawer)
// ============================================================

import { type RecursicaPanelProps as BaseRecursicaPanelProps } from "@recursica/adapter-common";

/**
 * Recursica Panel root props. Extends Mui Drawer.
 */
export interface RecursicaPanelProps
  extends Omit<
      MuiDrawerProps,
      | "classes"
      | "position"
      | "style"
      | "anchor"
      | "open"
      | "title"
      | "onClose"
      | "variant"
      | "hideBackdrop"
      | "ModalProps"
      | "BackdropComponent"
      | "BackdropProps"
      | "disableEscapeKeyDown"
      | "disableScrollLock"
      | "disableEnforceFocus"
      | "disableAutoFocus"
      | "disableRestoreFocus"
    >,
    BaseRecursicaPanelProps {}

export type PanelProps = RecursicaOverStyled<RecursicaPanelProps>;

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/**
 * Recursica Panel component wrapping Mui's Drawer.
 *
 * Panels slide in or expand from the edge of the screen to reveal
 * additional content or functionality. They are commonly used to provide
 * supplementary information, navigation options, or toolsets without
 * cluttering the main interface.
 *
 * ```tsx
 * <Panel opened={opened} onClose={close} title="Panel Title" placement="right">
 *   Content goes here
 *   <Panel.Footer>...</Panel.Footer>
 * </Panel>
 * ```
 *
 * The header is required and always rendered: `title` is required, and an icon-only Recursica
 * Close button (`aria-label` "Close", overridable via `closeButtonAriaLabel`) calls the required
 * `onClose`. The footer is optional. Passing `header` replaces the whole default header; avoid it,
 * because then nothing guarantees the title or the Close button.
 *
 * Always non-modal, with no props to change it: the page behind stays usable
 * (no overlay, focus trap, scroll lock, `aria-modal` or `aria-hidden` on the
 * rest of the page), focus returns to the opener on close, Escape always
 * closes, and outside clicks never do. Implemented with MUI's `persistent`
 * Drawer variant (no Modal) plus an Escape listener and focus restoration.
 *
 * Only `Panel.Footer` is available as a sub-component.
 */
const PanelBase = function Panel({
  overStyled = false,
  placement = "right",
  keepMounted = true,
  wrapHeaderText = true,
  opened,
  title,
  onClose,
  closeButtonAriaLabel = "Close",
  header,
  children,
  ...rest
}: PanelProps) {
  const sanitizedProps = filterStylingProps(rest, overStyled);
  const isOpen = Boolean(opened);
  const openerRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  // Non-modal: there is no Modal to handle Escape or focus restoration, so do both here.
  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement as HTMLElement | null;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCloseRef.current();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      const opener = openerRef.current;
      if (opener && opener.isConnected) opener.focus();
      openerRef.current = null;
    };
  }, [isOpen]);

  // MUI Drawer's `classes` prop only recognizes its own slot names (`root`, `paper`,
  // `docked`, ...) — unlike Mantine's `classNames`, it has no `content`/`header`/`title`/`body`
  // slots to bind into. Passing those keys here used to silently no-op every one of them, which
  // is why the panel rendered with none of its Recursica chrome (border, radius, sizing) and no
  // header at all: MUI's raw Drawer has no `title`/`withCloseButton` convenience API the way
  // Mantine's does, so those props were being spread onto the DOM as inert attributes instead of
  // building a header. The box-model/appearance chrome (border, radius, shadow, size bounds) now
  // lives on an explicit `.content` wrapper rendered as Paper's child instead; `.paper` strips
  // MUI's own default Paper appearance so only the wrapper's chrome is visible.
  const mergedClassNames = mergeClassNames(
    { paper: styles.paper },
    (sanitizedProps as Record<string, unknown>).classes as
      | Partial<Record<string, string>>
      | undefined,
  );

  return (
    <MuiDrawer
      anchor={placement} /* Recursica default: right; Mui default: left */
      keepMounted={keepMounted}
      open={isOpen}
      {...(sanitizedProps as unknown as MuiDrawerProps)}
      /* Always non-modal: persistent variant has no backdrop, focus trap, scroll lock or aria-modal */
      variant="persistent"
      classes={mergedClassNames as unknown as MuiDrawerProps["classes"]}
    >
      <div
        className={`${styles.content} ${
          {
            right: styles.contentRight,
            left: styles.contentLeft,
            top: styles.contentTop,
            bottom: styles.contentBottom,
          }[placement]
        }`}
      >
        {header ?? (
          <div className={styles.header}>
            <div
              className={wrapHeaderText ? styles.titleTruncate : styles.title}
            >
              {title}
            </div>
            <MuiIconButton
              size="small"
              aria-label={closeButtonAriaLabel}
              onClick={() => onClose()}
              className={styles.close}
            >
              <CloseIcon />
            </MuiIconButton>
          </div>
        )}
        <div className={styles.body}>{children}</div>
      </div>
    </MuiDrawer>
  );
};
PanelBase.displayName = "Panel";

// ============================================================
// PANEL FOOTER (custom — Mui Drawer has no Footer sub-component)
// ============================================================

export type PanelFooterProps = RecursicaOverStyled<
  React.HTMLAttributes<HTMLDivElement>
>;

/**
 * Panel footer section with action buttons.
 * Separated from the body by a divider. Remains fixed at the bottom.
 * This is a Recursica-specific sub-component; Mui Drawer does not
 * natively provide a footer.
 */
export const PanelFooter = forwardRef<HTMLDivElement, PanelFooterProps>(
  function PanelFooter({ overStyled = false, ...rest }, ref) {
    const sanitizedProps = filterStylingProps(rest, overStyled);
    const classNameProp = (sanitizedProps as Record<string, unknown>)
      .className as string | undefined;

    const finalClassName = classNameProp
      ? `${styles.footer} ${classNameProp}`
      : styles.footer;

    return <div ref={ref} {...sanitizedProps} className={finalClassName} />;
  },
);
PanelFooter.displayName = "PanelFooter";

// ============================================================
type PanelComponent = typeof PanelBase & {
  Footer: typeof PanelFooter;
};

export const Panel = PanelBase as PanelComponent;
Panel.Footer = PanelFooter;
