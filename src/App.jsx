import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme';

import ReactDefault from './components/ReactDefault';


/**
 * Функция-корневой компонент
 * @returns {*}
 */
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/test" component={ReactDefault}/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
