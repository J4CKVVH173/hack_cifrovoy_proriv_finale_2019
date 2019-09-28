import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: 'rgb(84,204,144)',
      light: 'rgb(88,240,176)',
      main: 'rgb(112,240,175)',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff686b',
      main: '#e6464a',
      dark: '#d5454a',
      contrastText: '#000',
    },
  },
});

export default theme;
