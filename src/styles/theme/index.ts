import { colorTokens, fontFamilyTokens, spacingTokens } from "./tokens";

export type Theme = typeof theme;

export const theme = {
  colors: {
    ...colorTokens,
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
} as const;

export default theme;
