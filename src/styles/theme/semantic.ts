import { colorTokens } from "./tokens";

export const semanticTokens = {
  background: {
    base: colorTokens.core.gray[900],
    contrast: colorTokens.core.gray[100],
    muted: colorTokens.core.blue.muted,
    secondary: colorTokens.core.gray[300],
  },
  border: {
    contrast: colorTokens.core.gray[900],
    default: colorTokens.core.gray[500],
    light: colorTokens.core.gray[200],
  },
  text: {
    primary: colorTokens.core.gray[100],
    secondary: colorTokens.core.gray[400],
    inverse: colorTokens.core.gray[900],
    link: colorTokens.core.blue.primary,
    error: colorTokens.core.red.primary,
  },
  button: {
    primary: {
      background: colorTokens.core.blue.primary,
      text: colorTokens.core.gray[100],
      hover: colorTokens.core.blue.dark,
    },
    accent: {
      background: colorTokens.core.red.primary,
    },
    disabled: {
      background: colorTokens.core.gray[300],
    },
  },
  state: {
    error: {
      background: colorTokens.core.red.primary,
      text: colorTokens.core.gray[100],
    },
    success: {
      background: "#36c200",
      text: colorTokens.core.gray[100],
    },
    warning: {
      background: colorTokens.core.yellow.primary,
    },
  },
} as const;
