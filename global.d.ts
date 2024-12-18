declare module '@styles/theme/tokens' {
  export const colorTokens: {
    primary: {
      blue: {
        main: string;
        light: string;
        dark: string;
      };
      red: {
        main: string;
        light: string;
        dark: string;
      };
    };
    success: {
      main: string;
      light: string;
      dark: string;
    };
    // Error/Danger colors
    error: {
      main: string;
      light: string;
      dark: string;
    };
    // Warning colors
    warning: {
      main: string;
      light: string;
      dark: string;
    };
    // Info colors
    info: {
      main: string;
      light: string;
      dark: string;
    };
    // Neutral colors
    neutral: {
      white: string;
      black: string;
      gray: string;
    };
  };

  export const spacingTokens: {
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    },
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    }
  };
}

declare module '@styles/mixins' {
  export const disabledStyles: any;
  export const fontFamilyStyles: any;
  export const focusStyles: any;
  export const hoverStyles: any;
  export const inputBaseStyles: any;
}
