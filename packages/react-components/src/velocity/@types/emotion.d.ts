import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
      neutral: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      ui: {
        blue: string;
        green: string;
        purple: string;
        red: string;
        teal: string;
        yellow: string;
      };
      tonalOffset: number;
    };
    font: {
      family: string;
      weight: {
        light: number;
        regular: number;
        medium: number;
        bold: number;
      };
    };
    transition: {
      quickly: string;
      slowly: string;
    };
  }
}
