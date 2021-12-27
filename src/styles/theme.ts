import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    blue: '#2967FF',
    gray: '#F0F4FB',
    white: '#FFFFFF',
  },
  breakpoints: {
    laptop: '@media (max-width: 1024px)',
    tablet: '@media (max-width: 768px)',
    mobile: '@media (max-width: 425px)',
  },
};

export default theme;
