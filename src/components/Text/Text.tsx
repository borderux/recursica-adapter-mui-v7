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

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant = "body", emphasis = "high", color = "default", ...rest },
  ref,
) {
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
