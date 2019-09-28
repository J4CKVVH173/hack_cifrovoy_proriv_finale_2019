import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './lib/theme';

import ReactDefault from './components/ReactDefault';
import PipelineCondition from './components/PipelineCondition';
import Pipelines from './components/Pipelines';

/**
 * Функция-корневой компонент
 * @returns {*}
 */
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/test" component={ReactDefault}/>
        <Route path="/:id/condition" component={PipelineCondition}/>
        <Route path="/pipelines" component={Pipelines}/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
