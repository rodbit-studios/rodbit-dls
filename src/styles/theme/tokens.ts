export const colorTokens = {
  // Core palette - foundational colors
  core: {
    blue: {
      primary: "#0288b0",
      dark: "#036b86",
      muted: "#a0dde1",
    },
    red: {
      primary: "#e74c57",
    },
    yellow: {
      primary: "#ffc857",
    },
    gray: {
      100: "#fafafa",
      200: "#e0e0e0",
      300: "#d3d3d3",
      400: "#999999",
      500: "#4d4d4d",
      900: "#1e1e1e",
    },
  },
} as const;

export const spacingTokens = {
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
} as const;

export const fontFamilyTokens = {
  fontFamilies: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
} as const;

export const typographyTokens = {
  fontFamilyTokens,
} as const;
