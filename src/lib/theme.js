import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: 'rgb(204,160,44)',
      light: 'rgba(255,216,47,0.52)',
      main: 'rgb(240, 190, 50)',
      contrastText: '#000',
    },
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
      contrastText: '#000',
    },
  },
});

export default theme;
