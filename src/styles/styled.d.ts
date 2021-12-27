import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: string;
      blue: string;
      white: string;
    };
    breakpoints: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
