import { forwardRef } from "react";
import { type TypographyProps as MuiTypographyProps } from "@mui/material";
import { Typography } from "../Typography/Typography";
import { type RecursicaOverStyled } from "../../utils/filterStylingProps";
import { type RecursicaTextProps } from "@recursica/adapter-common";

export type TextProps = RecursicaOverStyled<
  Omit<MuiTypographyProps, "variant" | "classes" | "color"> &
    RecursicaTextProps,
  "color"
>;

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant = "body", emphasis = "high", color = "default", ...rest },
  ref,
) {
  const typographyClass = `recursica_brand_typography_${variant}`;
  return (
    <Typography
      ref={ref}
      typographyClass={typographyClass}
      data-color={color}
      data-emphasis={emphasis}
      {...rest}
    />
  );
});

Text.displayName = "Text";
