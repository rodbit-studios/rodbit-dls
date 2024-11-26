import { colorTokens, fontFamilyTokens, spacingTokens } from "./tokens";
import { semanticTokens } from "./semantic";

export type Theme = typeof theme;

export const theme = {
  colors: {
    ...colorTokens.core,
  },
  spacing: {
    ...spacingTokens.spacing,
  },
  borderRadius: {
    ...spacingTokens.borderRadius,
  },
  fontSizes: {
    ...spacingTokens.fontSizes,
  },
  ...fontFamilyTokens,
  ...semanticTokens,
} as const;

export default theme;
