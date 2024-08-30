import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { Theme } from 'data/defaultTheme';
import GlobalStyle from 'styles/globalStyles';
import AppRoutes from 'routes/Routes'; 

const App = () => (
  <Provider store={store}> 
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
