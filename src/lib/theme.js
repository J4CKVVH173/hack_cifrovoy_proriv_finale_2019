import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: 'rgb(18,79,166)',
      light: 'rgb(18,79,166)',
      main: 'rgb(198,198,198)',
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
