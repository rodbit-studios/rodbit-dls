export const colorTokens = {
  // Primary colors
  primary: {
    lightest: '#E6F2FF',
    lighter: '#B3DBFF',
    light: '#66B2FF',
    main: '#0070F3',
    dark: '#0050C8',
    darkest: '#003A96'
  },
  // Secondary colors
  secondary: {
    lightest: '#F0F0F0',
    lighter: '#D9D9D9',
    light: '#A6A6A6',
    main: '#808080',
    dark: '#595959',
    darkest: '#404040'
  },
  // Success colors
  success: {
    lightest: '#E6F7ED',
    lighter: '#A6E5BD',
    light: '#4CD964',
    main: '#34C759',
    dark: '#2BAD4E',
    darkest: '#1E8C3F'
  },
  // Error/Danger colors
  error: {
    lightest: '#FFEBEE',
    lighter: '#FFCDD2',
    light: '#FF5252',
    main: '#FF3B30',
    dark: '#D32F2F',
    darkest: '#B71C1C'
  },
  // Warning colors
  warning: {
    lightest: '#FFF4E5',
    lighter: '#FFE0B2',
    light: '#FFA726',
    main: '#FF9800',
    dark: '#F57C00',
    darkest: '#E65100'
  },
  // Information colors
  info: {
    lightest: '#E3F2FD',
    lighter: '#BBDEFB',
    light: '#64B5F6',
    main: '#2196F3',
    dark: '#1976D2',
    darkest: '#0D47A1'
  },
  // Neutral colors
  neutral: {
    white: '#FFFFFF',
    black: '#000000',
    background: '#F5F5F5',
    border: '#E0E0E0',
    text: '#333333'
  },
} as const;

export const fontFamilyTokens = {
  body: 'Roboto, sans-serif',
  heading: 'Monserrat, sans-serif',
  monospace: 'monospace',
} as const;

export const spacingTokens = {
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
} as const;

export type ColorVariant = keyof typeof colorTokens;
export type ColorLevel = keyof (typeof colorTokens)[Exclude<ColorVariant, 'neutral'>];

export const getColor = (
  variant: ColorVariant = 'primary',
  level: ColorLevel = 'main'
): string => {
  // Special handling for neutral colors
  if (variant === 'neutral') {
    throw new Error('Neutral colors do not have levels');
  }
  return colorTokens[variant][level];
};

// Optional: Add a separate method for neutral colors
export const getNeutralColor = (
  shade: keyof typeof colorTokens['neutral']
): string => {
  return colorTokens.neutral[shade];
};
