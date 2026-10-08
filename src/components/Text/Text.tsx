import { forwardRef } from "react";
import { type TypographyProps as MuiTypographyProps } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { type RecursicaOverStyled } from "../../utils/filterStylingProps";
import { type RecursicaTextProps } from "@recursica/adapter-common";
import { isTypographyStyleDefined } from "../../utils/typographyClass";

export type TextProps = RecursicaOverStyled<
  Omit<MuiTypographyProps, "variant" | "classes" | "color"> &
    RecursicaTextProps,
  "color"
>;

const HEADING_ELEMENTS = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant = "body", emphasis = "high", color = "default", ...rest },
  ref,
) {
  // Text never renders semantic h1-h6; those belong to Heading. MUI picks the element from
  // `component`, or (for variant "inherit") from `variantMapping.inherit`, so check both.
  const { component, variantMapping } = rest as {
    component?: unknown;
    variantMapping?: Record<string, unknown>;
  };
  for (const element of [component, variantMapping?.inherit]) {
    if (typeof element === "string" && HEADING_ELEMENTS.includes(element)) {
      throw new Error(
        `Text cannot render <${element}>. Use <Heading> for semantic h1-h6.`,
      );
    }
  }

  // Dev only: an unknown variant hides the text (and logs) instead of silently rendering with the
  // UI kit's default styling.
  const typographyMissing =
    process.env.NODE_ENV !== "production" &&
    typeof document !== "undefined" &&
    !isTypographyStyleDefined(variant);

  const typographyClass = `recursica_brand_typography_${variant}`;
  return (
    <Typography
      ref={ref}
      typographyClass={typographyClass}
      data-color={color}
      data-emphasis={emphasis}
      data-typography-missing={typographyMissing || undefined}
      {...rest}
    />
  );
});

Text.displayName = "Text";
