import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme';

import ReactDefault from './components/ReactDefault';
import PipelineCondition from './components/PipelineCondition';

/**
 * Функция-корневой компонент
 * @returns {*}
 */
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/test" component={ReactDefault}/>
        <Route path="/condition" component={PipelineCondition}/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
