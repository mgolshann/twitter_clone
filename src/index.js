import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import theme from './components/theme';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

