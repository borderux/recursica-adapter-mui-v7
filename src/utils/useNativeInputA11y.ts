import { useId } from "react";

const INPUT_ARIA_KEYS = [
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
] as const;

/**
 * MUI's Checkbox/Radio/Switch spread unknown props (including `aria-*`) onto the outer span,
 * so a screen reader never sees them on the native `<input>`. Moves the naming attributes to
 * `slotProps.input`, and guarantees a labelled control has an `id` so `<label htmlFor>` links.
 */
export function useNativeInputA11y<T extends object>(
  props: T,
  hasLabel: boolean,
): T {
  const generatedId = useId();
  const source = { ...props } as Record<string, unknown>;
  const slotProps = (source.slotProps ?? {}) as Record<string, unknown>;
  if (typeof slotProps.input === "function") {
    throw new Error(
      "slotProps.input must be an object; function form is not supported",
    );
  }
  const input = { ...(slotProps.input as object | undefined) } as Record<
    string,
    unknown
  >;

  for (const key of INPUT_ARIA_KEYS) {
    if (key in source) {
      input[key] = source[key];
      delete source[key];
    }
  }
  if (hasLabel && source.id === undefined) source.id = generatedId;

  if (Object.keys(input).length > 0) {
    source.slotProps = { ...slotProps, input };
  }
  return source as T;
}
