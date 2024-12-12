export const colorTokens = {
  white: "#FFFDFB",
  black: "#0F0B0B",
  blue: {
    primary: "#0288b0",
    secondary: "#016280",
    muted: "#E2F3FF",
  },
  red: {
    primary: "#e74c57",
    secondary: "#761D24",
    muted: "#F3C5C7",
  },
  yellow: {
    primary: "#ffc857",
    secondary: "#A77D00",
    muted: "#FFEED9",
  },
  green: {
    primary: "#31B002",
    secondary: "#165E01",
    muted: "#97FF8B",
  },
  gray: {
    primary: "#E3E8E2",
    secondary: "#4F524E",
  },
} as const;

export const spacingTokens = {
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xLarge: "32px"
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
    xLarge: "24px"
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
    xLarge: "24px"
  },
} as const;

export const fontFamilyTokens = {
  fontFamilies: {
    body: "Roboto, sans-serif",
    heading: "Montserrat, sans-serif",
  },
} as const;

