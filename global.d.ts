declare module '@styles/theme/tokens' {
  export const colorTokens: {
    core: {
      blue: {
        primary: string;
        muted: string;
      };
      gray: {
        [key: number]: string;
      };
    };
  };

  export const spacingTokens: {
    borderRadius: {
      medium: string;
    };
    fontSizes: {
      small: string;
      medium: string;
    };
    spacing: {
      small: string;
      medium: string;
    };
  };
}

declare module '@styles/mixins' {
  export const disabledStyles: any;
  export const fontFamilyStyles: any;
}
