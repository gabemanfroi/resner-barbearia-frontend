import '@material-ui/lab/themeAugmentation';
import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#ffff8b',
      main: '#ffde59',
      dark: '#c9ad24',
      contrastText: '#000000',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    background: {
      paper: '#333333',
      default: '',
    },
  },
});
