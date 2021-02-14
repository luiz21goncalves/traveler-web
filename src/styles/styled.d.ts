import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue: string;
      orange: string;
      title: string;
      text: string;
      complements: string;
      shapeLight: string;
      shapeGray: string;
      red: string;
      green: string;
      blueLow: string;
      background: string;
    };

    fonts: {
      title: string;
      default: string;
      secondary: string;
    };
  }
}
