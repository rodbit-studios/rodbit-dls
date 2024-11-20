import { colorTokens } from "./tokens";
import { semanticTokens } from "./semantic";

export type Theme = typeof theme;

export const theme = {
  colors: {
    ...colorTokens.core,
    ...colorTokens.spacing,
    ...colorTokens.borderRadius,
    ...colorTokens.fontSizes,
    ...semanticTokens,
  },
} as const;

export default theme;
