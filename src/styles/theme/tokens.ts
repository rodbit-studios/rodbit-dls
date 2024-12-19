export const colorTokens = {
  primary: {
    blue: {
      main: "#0288B0",
      light: "#C9FBF8",
      dark: "#014C63"
    },
    red: {
      main: "#FF3B30",
      light: "#FFE5D5",
      dark: "#7A0929"
    }
  },
  success: {
    main: "#179E44",
    light: "#D1FACF",
    dark: "#044B38",
  },
  // Error/Danger colors
  error: {
    main: "#FF3B30",
    light: "#FFE5D5",
    dark: "#7A0929"
  },
  // Warning colors
  warning: {
    main: "#FFC857",
    light: "#FFF8DD",
    dark: "#7A4910",
  },
  // Information colors
  info: {
    main: "#086FD6",
    light: "#CCEEFC",
    dark: "#011F66",
  },
  // Neutral colors
  neutral: {
    white: "#FAFCFC",
    black: "#262626",
    gray: "#9EA3A3",
    lightgray: "#E4E4E4",
  },
} as const;

export const fontFamilyTokens = {
  body: 'Roboto, sans-serif',
  heading: 'Monserrat, sans-serif',
  monospace: 'monospace',
} as const;

export const spacingTokens = {
  spacing: {
    xs: `4px`,
    sm: `8px`,
    md: `16px`,
    lg: `24px`,
    xl: `32px`,
  },
  borderRadius: {
    xs: `4px`,
    sm: `8px`,
    md: `16px`,
    lg: `24px`,
    xl: `32px`,
  },
  fontSizes: {
    xs: `12px`,
    sm: `14px`,
    md: `16px`,
    lg: `18px`,
    xl: `20px`,
  },
} as const;

export type ColorVariant = keyof typeof colorTokens;
export type ColorLevel =
  | 'main'
  | 'light'
  | 'dark'
  | keyof typeof colorTokens['neutral'];

export const getColor = (
  variant: ColorVariant = 'primary',
  level: ColorLevel = 'main'
): string => {
  // Special handling for neutral colors
  if (variant === 'neutral') {
    return colorTokens.neutral[level as keyof typeof colorTokens['neutral']];
  }
  const variantColors = colorTokens[variant];

  if (typeof variantColors === "object" && !('main' in variantColors)) {
    return variantColors.blue[level as 'main' | 'light' | 'dark'];
  }

  return variantColors[level as 'main' | 'light' | 'dark'];
};

export const getNeutralColor = (
  shade: keyof typeof colorTokens['neutral']
): string => {
  return colorTokens.neutral[shade];
};
