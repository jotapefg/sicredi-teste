import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);