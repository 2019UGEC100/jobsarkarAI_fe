import type { CSSProperties } from "react";

type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
};

/**
 * Material Symbols (Outlined) icon. `filled` toggles the FILL axis so we can
 * render solid icons (e.g. star ratings) without a second font request.
 */
export function Icon({ name, className, filled, style }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      style={filled ? { fontVariationSettings: "'FILL' 1", ...style } : style}
    >
      {name}
    </span>
  );
}
